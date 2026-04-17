const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 3000;

const server = http.createServer((req, res) => {
    let filePath = '.' + req.url;
    if (filePath === './') filePath = './index.html';

    console.log(`[Request] ${req.method} ${req.url}`);

    fs.access(filePath, fs.constants.F_OK, (err) => {
        if (err && !path.extname(filePath)) {
            // Try appending .html if no extension
            const htmlPath = filePath + '.html';
            fs.access(htmlPath, fs.constants.F_OK, (err2) => {
                if (!err2) {
                    serveFile(htmlPath, res);
                } else {
                    res.writeHead(404);
                    res.end('File not found');
                }
            });
        } else if (!err) {
            serveFile(filePath, res);
        } else {
            res.writeHead(404);
            res.end('File not found');
        }
    });
});

function serveFile(filePath, res) {
    const extname = String(path.extname(filePath)).toLowerCase();
    const mimeTypes = {
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.css': 'text/css',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpg',
        '.gif': 'image/gif',
        '.wav': 'audio/wav',
        '.mp4': 'video/mp4',
        '.woff': 'application/font-woff',
        '.ttf': 'application/font-ttf',
        '.eot': 'application/vnd.ms-fontobject',
        '.otf': 'application/font-otf',
        '.svg': 'image/svg+xml'
    };

    const contentType = mimeTypes[extname] || 'application/octet-stream';

    fs.readFile(filePath, (error, content) => {
        if (error) {
            res.writeHead(500);
            res.end('Sorry, check with the site admin for error: '+error.code+' ..\n');
        } else {
            res.writeHead(200, { 
                'Content-Type': contentType,
                'Cache-Control': 'no-cache'
            });
            res.end(content, 'utf-8');
        }
    });
}

server.listen(port, '0.0.0.0', () => {
    console.log(`Server running at http://0.0.0.0:${port}/`);
});
