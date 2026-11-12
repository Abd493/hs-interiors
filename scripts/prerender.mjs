import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const distIndexPath = path.join(rootDir, 'dist', 'index.html');
const ssrEntryPath = path.join(rootDir, 'dist-ssr', 'entry-server.js');
const distSsrDir = path.join(rootDir, 'dist-ssr');

async function prerender() {
  const template = fs.readFileSync(distIndexPath, 'utf-8');
  const { render } = await import(pathToFileURL(ssrEntryPath).href);
  const appHtml = render();

  if (!template.includes('<div id="root"></div>')) {
    throw new Error('Could not find <div id="root"></div> placeholder in dist/index.html');
  }

  const finalHtml = template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
  fs.writeFileSync(distIndexPath, finalHtml, 'utf-8');
  fs.rmSync(distSsrDir, { recursive: true, force: true });

  console.log(`Prerendered dist/index.html (${(finalHtml.length / 1024).toFixed(1)} KB) for instant SEO/GEO/AEO crawling.`);
}

prerender().catch((err) => {
  console.error('Prerender failed:', err);
  process.exit(1);
});
