const fs = require('fs');
const path = require('path');

const directory = __dirname;
const files = fs.readdirSync(directory).filter(f => f.endsWith('.html'));

files.forEach(file => {
    let content = fs.readFileSync(path.join(directory, file), 'utf8');
    let changed = false;

    // Remove the global style block completely
    const globalStyleRegex = /<style>\s*\/\*\s*Global Performance Overrides for Glassmorphism\s*\*\/[\s\S]*?<\/style>\s*/g;
    if (globalStyleRegex.test(content)) {
        content = content.replace(globalStyleRegex, '');
        changed = true;
    }

    // Strip will-change and transform: translateZ(0) from .glass-card in projects.html and index.html
    const badCssRegex1 = /\s*transform:\s*translateZ\(0\);/g;
    const badCssRegex2 = /\s*-webkit-transform:\s*translateZ\(0\);/g;
    const badCssRegex3 = /\s*will-change:\s*transform,\s*backdrop-filter;/g;
    const badCssRegex4 = /\s*backface-visibility:\s*hidden;/g;
    const badCssRegex5 = /\s*perspective:\s*1000px;/g;

    const originalLength = content.length;
    
    // We only want to remove these from .glass-card, but doing it globally is safer to ensure no VRAM exhaustion anywhere
    content = content.replace(badCssRegex1, '');
    content = content.replace(badCssRegex2, '');
    content = content.replace(badCssRegex3, '');
    content = content.replace(badCssRegex4, '');
    content = content.replace(badCssRegex5, '');

    // Restore will-change ONLY to cursor-glow by replacing inside the specific CSS rule
    const cursorGlowRuleRegex = /(#cursor-glow\s*{[^}]+)(opacity:\s*0;)([^}]*})/i;
    content = content.replace(cursorGlowRuleRegex, (match, p1, p2, p3) => {
        if (!p3.includes('will-change')) {
            return `${p1}${p2}\n            will-change: transform;${p3}`;
        }
        return match;
    });

    if (content.length !== originalLength || changed) {
        fs.writeFileSync(path.join(directory, file), content, 'utf8');
        console.log(`[VRAM UNLOCKED] ${file}`);
    }
});
