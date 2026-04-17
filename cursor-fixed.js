const fs = require('fs');
const path = require('path');

const directory = __dirname;
const files = fs.readdirSync(directory).filter(f => f.endsWith('.html'));

const globalCSSOverride = `
    <style>
        /* Global Performance Overrides for Glassmorphism */
        .glass-card, nav, .mobile-menu, [class*="backdrop-blur"] {
            transform: translateZ(0);
            -webkit-transform: translateZ(0);
            will-change: transform, backdrop-filter;
            backface-visibility: hidden;
            perspective: 1000px;
        }
        /* Optimize floating animations */
        .floating-particle {
            will-change: transform, opacity;
        }
    </style>
`;

files.forEach(file => {
    let content = fs.readFileSync(path.join(directory, file), 'utf8');
    let changed = false;

    // 1. Optimize cursor glow to ONLY update style if moving
    const oldCursorStr = "const tick = () => { gX += (mX-gX)*0.1; gY += (mY-gY)*0.1; cursorGlow.style.transform = `translate3d(calc(${gX}px - 50%), calc(${gY}px - 50%), 0)`; requestAnimationFrame(tick); };";
    const newCursorStr = "let lastGX = -1, lastGY = -1; const tick = () => { let dX = mX - gX; let dY = mY - gY; if (Math.abs(dX) > 0.1 || Math.abs(dY) > 0.1) { gX += dX * 0.1; gY += dY * 0.1; let roundedX = Math.round(gX * 10) / 10; let roundedY = Math.round(gY * 10) / 10; if (roundedX !== lastGX || roundedY !== lastGY) { cursorGlow.style.transform = `translate3d(calc(${roundedX}px - 50%), calc(${roundedY}px - 50%), 0)`; lastGX = roundedX; lastGY = roundedY; } } requestAnimationFrame(tick); };";

    if (content.includes(oldCursorStr)) {
        content = content.replace(oldCursorStr, newCursorStr);
        changed = true;
    } else if (content.includes('function updateGlow()')) {
        // Specifically for index.html cursor glow
        const indexOldGlowCode = `        function updateGlow() {
            glowX += (mouseX - glowX) * 0.08;
            glowY += (mouseY - glowY) * 0.08;
            cursorGlow.style.transform = \`translate3d(calc(\${glowX}px - 50%), calc(\${glowY}px - 50%), 0)\`;
            requestAnimationFrame(updateGlow);
        }`;
        const indexNewGlowCode = `        let lastGlowX = -1, lastGlowY = -1;
        function updateGlow() {
            let distX = mouseX - glowX;
            let distY = mouseY - glowY;
            if (Math.abs(distX) > 0.1 || Math.abs(distY) > 0.1) {
                glowX += distX * 0.08;
                glowY += distY * 0.08;
                let roundedX = Math.round(glowX * 10) / 10;
                let roundedY = Math.round(glowY * 10) / 10;
                if (roundedX !== lastGlowX || roundedY !== lastGlowY) {
                    cursorGlow.style.transform = \`translate3d(calc(\${roundedX}px - 50%), calc(\${roundedY}px - 50%), 0)\`;
                    lastGlowX = roundedX;
                    lastGlowY = roundedY;
                }
            }
            requestAnimationFrame(updateGlow);
        }`;
        if (content.includes('function updateGlow() {') && !content.includes('Math.abs(distX)')) {
            content = content.replace(indexOldGlowCode, indexNewGlowCode);
            changed = true;
        }
    }

    // 2. Inject CSS Hardware Acceleration globally BEFORE </head>
    if (!content.includes('Global Performance Overrides for Glassmorphism')) {
        content = content.replace('</head>', `${globalCSSOverride}\n</head>`);
        changed = true;
    }

    if (changed) {
        fs.writeFileSync(path.join(directory, file), content, 'utf8');
        console.log(`[DEEPSYNC OPTIMZED] ${file}`);
    }
});
