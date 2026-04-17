const fs = require('fs');
const path = require('path');

const directory = __dirname;
const files = fs.readdirSync(directory).filter(f => f.endsWith('.html'));

files.forEach(file => {
    let content = fs.readFileSync(path.join(directory, file), 'utf8');
    let changed = false;

    // 1. Optimize Video Tags
    // Find all <video ...> that do not have preload=
    content = content.replace(/<video(?![^>]*\bpreload=)([^>]*)>/gi, (match, inner) => {
        // If it's the hero video or modal video, preload auto
        if (inner.includes('id="modal-video"') || inner.includes('hero-random-video')) {
            return `<video preload="metadata"${inner}>`;
        }
        return `<video preload="none"${inner}>`;
    });

    // Handle existing preload tags to upgrade to "none" if not hero
    content = content.replace(/<video[^>]*\bpreload=(['"])[a-zA-Z]+\1[^>]*>/gi, (match) => {
        if (!match.includes('id="modal-video"') && !match.includes('hero-random-video')) {
             return match.replace(/preload=(['"])[a-zA-Z]+\1/i, 'preload="none"');
        }
        return match;
    });

    // 2. Optimize Image Tags
    content = content.replace(/<img(?![^>]*\bloading=)([^>]*)>/gi, (match, inner) => {
        return `<img loading="lazy"${inner}>`;
    });

    // If there were modifications, write to the file
    // Check if lengths differ or content changed (replace returns same string if no match)
    if (content !== fs.readFileSync(path.join(directory, file), 'utf8')) {
        fs.writeFileSync(path.join(directory, file), content, 'utf8');
        console.log(`[OPTIMIZED] ${file}`);
    }
});
