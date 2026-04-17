const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 3000;

const mimeTypes = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.wav': 'audio/wav',
    '.mp4': 'video/mp4',
    '.woff': 'application/font-woff',
    '.ttf': 'application/font-ttf',
    '.eot': 'application/vnd.ms-fontobject',
    '.otf': 'application/font-otf',
    '.wasm': 'application/wasm'
};

const server = http.createServer((req, res) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);

    let urlPath = req.url.split('?')[0]; // Remove query string
    let filePath = path.join(process.cwd(), urlPath);

    if (urlPath === '/') {
        filePath = path.join(process.cwd(), 'index.html');
    }

    const serve = (actualPath) => {
        const ext = path.extname(actualPath).toLowerCase();
        const contentType = mimeTypes[ext] || 'application/octet-stream';

        fs.readFile(actualPath, (err, data) => {
            if (err) {
                res.writeHead(500);
                res.end(`Internal Server Error: ${err.code}`);
                return;
            }
            res.writeHead(200, { 
                'Content-Type': contentType,
                'Cache-Control': 'no-cache, no-store, must-revalidate',
                'Access-Control-Allow-Origin': '*'
            });
            res.end(data);
        });
    };

    fs.stat(filePath, (err, stats) => {
        if (err) {
            // Try appending .html
            const htmlPath = filePath + '.html';
            fs.stat(htmlPath, (err2, stats2) => {
                if (err2) {
                    res.writeHead(404);
                    res.end('Not Found');
                    return;
                }
                serve(htmlPath);
            });
            return;
        }

        if (stats.isDirectory()) {
            const indexHtml = path.join(filePath, 'index.html');
            fs.access(indexHtml, fs.constants.F_OK, (err3) => {
                if (err3) {
                    res.writeHead(403);
                    res.end('Forbidden: Directory listing disabled');
                    return;
                }
                serve(indexHtml);
            });
        } else {
            serve(filePath);
        }
    });
});

server.listen(port, '0.0.0.0', () => {
    console.log(`Server running at http://localhost:${port}/`);
});
