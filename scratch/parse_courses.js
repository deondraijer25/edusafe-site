import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const htmlPath = path.join(__dirname, '..', 'src', 'docs', 'cursusdata pagina html', 'Edusafe - Cursusdata.html');
const htmlContent = fs.readFileSync(htmlPath, 'utf8');

// We want to find the course cards.
const cardClass = 'bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100';
const cardChunks = htmlContent.split(cardClass);

const courses = [];

for (let i = 1; i < cardChunks.length; i++) {
  const chunk = cardChunks[i];
  
  // Extract category badge (e.g. bg-white text-primary ... font-black py-4 px-10 ... border-none rounded-full">EHBO</div>)
  const badgeMatch = chunk.match(/rounded-full">([^<]+)<\/div>/);
  const category = badgeMatch ? badgeMatch[1].trim() : '';
  
  // Extract Title (e.g. <h3 ...>EHBO basis</h3>)
  const titleMatch = chunk.match(/<h3[^>]*>([^<]+)<\/h3>/);
  const title = titleMatch ? titleMatch[1].trim() : '';
  
  // Extract Date (e.g. <span class="font-medium">11 Mei 2026</span>)
  const dateMatch = chunk.match(/<span class="font-medium">([^<]+)<\/span>/);
  const date = dateMatch ? dateMatch[1].trim() : '';
  
  // Extract Time (e.g. <span>09:00 - 16:30</span>)
  const timeMatch = chunk.match(/<svg[^>]*lucide-clock[^>]*>.*?<\/svg><span>([^<]+)<\/span>/s);
  const time = timeMatch ? timeMatch[1].trim() : '';
  
  // Extract Location (e.g. <span class="font-bold text-slate-900 text-lg leading-tight">Edusafe (Ambu)</span>)
  const locationMatch = chunk.match(/leading-tight">([^<]+)<\/span>/);
  const location = locationMatch ? locationMatch[1].trim() : '';

  // Extract Spots Left (e.g. <div class="...bg-destructive text-destructive-foreground... animate-pulse py-1.5 px-3">Nog 4 plekken</div>)
  const spotsMatch = chunk.match(/animate-pulse[^>]*>([^<]+)<\/div>/);
  const spotsLeft = spotsMatch ? spotsMatch[1].trim() : null;

  // Extract Inschrijven URL
  const hrefMatch = chunk.match(/href="([^"]+)"/);
  const registerUrl = hrefMatch ? hrefMatch[1].trim() : '#';

  if (title && category && date && location) {
    courses.push({
      category,
      title,
      date,
      time: time || '09:00 - 16:30',
      location,
      spotsLeft,
      registerUrl
    });
  }
}

console.log(JSON.stringify(courses, null, 2));
console.log(`Total courses parsed: ${courses.length}`);
