const fs = require('fs');
const path = require('path');

const directory = __dirname;
const files = fs.readdirSync(directory).filter(f => f.endsWith('.html'));

files.forEach(file => {
    let content = fs.readFileSync(path.join(directory, file), 'utf8');
    let changed = false;

    // Target hover-play videos and replace preload="none" with preload="metadata"
    content = content.replace(/<video[^>]*class="[^"]*hover-play[^"]*"[^>]*>/gi, (match) => {
        if (match.includes('preload="none"')) {
            return match.replace(/preload="none"/gi, 'preload="metadata"');
        }
        return match;
    });

    // Also just safely set anything that needs instant playback to metadata
    content = content.replace(/<video preload="none"[^>]*class="[^"]*hover-play[^"]*"[^>]*>/gi, (match) => {
        return match.replace('preload="none"', 'preload="metadata"');
    });

    if (content !== fs.readFileSync(path.join(directory, file), 'utf8')) {
        fs.writeFileSync(path.join(directory, file), content, 'utf8');
        console.log(`[VIDEO PRELOAD FIXED] ${file}`);
    }
});
