import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { extname, join, normalize } from "node:path";

const root = process.cwd();
const port = Number(process.env.MYSTERY_PULL_PORT || 4173);
const repositoryBase = "/Bigbang-mystery-pulls";
const mime = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".svg": "image/svg+xml"
};

createServer(async (request, response) => {
  try {
    const pathname = decodeURIComponent(new URL(request.url, `http://${request.headers.host}`).pathname);
    const relativePath = pathname === repositoryBase || pathname.startsWith(`${repositoryBase}/`)
      ? pathname.slice(repositoryBase.length) || "/"
      : pathname;
    let filePath = normalize(join(root, relativePath));
    if (!filePath.startsWith(root)) throw new Error("Invalid path");
    if ((await stat(filePath)).isDirectory()) filePath = join(filePath, "index.html");
    const body = await readFile(filePath);
    response.writeHead(200, { "Content-Type": mime[extname(filePath)] || "application/octet-stream" });
    response.end(body);
  } catch {
    response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Not found");
  }
}).listen(port, "127.0.0.1", () => {
  console.log(`Mystery Pull preview: http://127.0.0.1:${port}/`);
});
