import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';
const root = fileURLToPath(new URL('.', import.meta.url));
const types = {'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8'};
const server = createServer(async (req,res) => {
 try {
  const url = decodeURIComponent((req.url || '/').split('?')[0]);
  const file = normalize(url === '/' ? 'index.html' : url.slice(1));
  if (file.startsWith('..')) throw new Error('Invalid path');
  const content = await readFile(join(root,file));
  res.writeHead(200,{'Content-Type':types[extname(file)] || 'application/octet-stream'}); res.end(content);
 } catch { res.writeHead(404,{'Content-Type':'text/plain; charset=utf-8'}); res.end('404 — файл не знайдено'); }
});
const port = Number(process.env.PORT || 5173);
server.listen(port,'127.0.0.1',() => console.log(`Локальний сервер запущено: http://localhost:${port}`));
