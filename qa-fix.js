const fs = require('fs');
const path = require('path');

const directory = __dirname;
const files = fs.readdirSync(directory).filter(f => f.endsWith('.html'));

const mobileMenuHtml = `    <!-- Mobile Menu -->
    <div id="mobile-menu" class="mobile-menu fixed inset-0 z-[60] bg-white/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden">
        <button id="mobile-menu-close" class="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container transition-colors" aria-label="Close menu">
            <span class="material-symbols-outlined">close</span>
        </button>
        <a class="text-2xl font-bold text-on-surface hover:text-primary transition-colors mobile-nav-link" href="index.html#work">Work</a>
        <a class="text-2xl font-bold text-on-surface hover:text-primary transition-colors mobile-nav-link" href="projects.html">Projects</a>
        <a class="text-2xl font-bold text-on-surface hover:text-primary transition-colors mobile-nav-link" href="index.html#expertise">Expertise</a>
        <a class="text-2xl font-bold text-on-surface hover:text-primary transition-colors mobile-nav-link" href="index.html#process">Process</a>
        <a class="text-2xl font-bold text-on-surface hover:text-primary transition-colors mobile-nav-link" href="index.html#experience">Experience</a>
        <a class="text-2xl font-bold text-on-surface hover:text-primary transition-colors mobile-nav-link" href="index.html#tools">Tools</a>
        <a class="text-2xl font-bold text-on-surface hover:text-primary transition-colors mobile-nav-link" href="index.html#contact">Contact</a>
        <a href="index.html#contact" class="bg-primary text-white px-8 py-4 rounded-full font-bold text-lg mt-4 hover:opacity-90 transition-all mobile-nav-link">Let's Collaborate</a>
    </div>`;

const mobileMenuJS = `
        // Mobile Menu Event Listeners (Injected via QA script)
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenuClose = document.getElementById('mobile-menu-close');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
        
        if (mobileMenuBtn && mobileMenu) {
            mobileMenuBtn.addEventListener('click', () => {
                mobileMenu.classList.add('open');
                document.body.style.overflow = 'hidden';
            });
        }
        
        if (mobileMenuClose && mobileMenu) {
            const close = () => {
                mobileMenu.classList.remove('open');
                document.body.style.overflow = '';
            };
            mobileMenuClose.addEventListener('click', close);
            mobileNavLinks.forEach(l => l.addEventListener('click', close));
        }
`;

const mobileMenuBtnHtml = `
        <button id="mobile-menu-btn" class="md:hidden w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container transition-colors" aria-label="Toggle menu">
            <span class="material-symbols-outlined">menu</span>
        </button>`;

files.forEach(file => {
    let content = fs.readFileSync(path.join(directory, file), 'utf8');
    let changed = false;

    // 1. Cursor Glow Lag Fix (Inlined ticks)
    if (content.includes("cursorGlow.style.left = gX+'px'; cursorGlow.style.top = gY+'px';")) {
        content = content.replace(
            "cursorGlow.style.left = gX+'px'; cursorGlow.style.top = gY+'px';", 
            "cursorGlow.style.transform = `translate3d(calc(${gX}px - 50%), calc(${gY}px - 50%), 0)`;"
        );
        changed = true;
    }
    
    if (content.includes("cursorGlow.style.left = glowX + 'px';") && content.includes("cursorGlow.style.top = glowY + 'px';")) {
        content = content.replace(
            "cursorGlow.style.left = glowX + 'px';",
            "cursorGlow.style.transform = `translate3d(calc(${glowX}px - 50%), calc(${glowY}px - 50%), 0)`;"
        ).replace("    cursorGlow.style.top = glowY + 'px';\n", "");
        changed = true;
    }

    // 2. Hardware accelerate glass-card CSS
    if (content.includes(".glass-card {") && !content.includes("will-change: transform")) {
        // Simple regex to insert after the backdrop-filter rules
        const rx = /(backdrop-filter:\s*blur\([^)]+\);)/;
        if(rx.test(content)) {
            content = content.replace(/\.glass-card\s*\{[^}]+\}/, (match) => {
                if(!match.includes('will-change')) {
                    const insert = `\n            transform: translateZ(0);\n            -webkit-transform: translateZ(0);\n            will-change: transform, backdrop-filter;`;
                    return match.replace(/(backdrop-filter:\s*blur\([^)]+\);)/, `$1${insert}`);
                }
                return match;
            });
            changed = true;
        }
    }

    // 3. Subpage routing broken links fix ONLY if NOT index.html
    if (file !== 'index.html') {
        const hashLinks = ['#work', '#expertise', '#experience', '#process', '#tools', '#contact'];
        hashLinks.forEach(hash => {
            const pattern = new RegExp(`href="${hash}"`, 'g');
            if (pattern.test(content)) {
                content = content.replace(pattern, `href="index.html${hash}"`);
                changed = true;
            }
        });
    }

    // 4. Mobile Menu QA Fix
    if (content.includes('id="main-nav"')) {
        // Check for hamburger button missing
        if (!content.includes('id="mobile-menu-btn"')) {
            content = content.replace(/(<a[^>]+href="[^"]*#contact"[^>]*>Let's Collaborate<\/a>)/i, `${mobileMenuBtnHtml}\n        $1`);
            changed = true;
        }
        
        // Check for mobile menu overlay missing
        if (!content.includes('id="mobile-menu"')) {
            content = content.replace(/(<\/nav>)/i, `$1\n\n${mobileMenuHtml}`);
            changed = true;
        }

        // Check for missing logic in `<script>` block
        if (!content.includes('mobileMenuBtn.addEventListener') && content.includes('<script>')) {
            // Find the last script tag before body
            const lastScriptIdx = content.lastIndexOf('</script>');
            if(lastScriptIdx !== -1) {
                content = content.slice(0, lastScriptIdx) + mobileMenuJS + content.slice(lastScriptIdx);
                changed = true;
            }
        }
    }

    if (changed) {
        fs.writeFileSync(path.join(directory, file), content, 'utf8');
        console.log(`[FIXED QA BUGS] ${file}`);
    }
});
