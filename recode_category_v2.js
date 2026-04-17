const fs = require('fs');

const indexHtml = fs.readFileSync('index.html', 'utf8');
const userDesign = `<!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>AETHER_VIZ | AI Viral Reels</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&amp;family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.cdnfonts.com/css/berkeley-mono" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                        "surface-container-highest": "#e3e2e3",
                        "inverse-primary": "#d0bcff",
                        "primary": "#6b38d4",
                        "surface-container-lowest": "#ffffff",
                        "secondary-fixed-dim": "#4edea3",
                        "outline": "#7b7486",
                        "on-surface": "#1b1c1d",
                        "surface-bright": "#fbf9fa",
                        "secondary": "#006c49",
                        "on-error": "#ffffff",
                        "surface-dim": "#dbd9db",
                        "background": "#fbf9fa",
                        "primary-fixed-dim": "#d0bcff",
                        "outline-variant": "#cbc3d7",
                        "error-container": "#ffdad6",
                        "primary-container": "#8455ef",
                        "error": "#ba1a1a",
                        "on-secondary-fixed": "#002113",
                        "on-secondary-container": "#00714d",
                        "tertiary-fixed-dim": "#ffb3af",
                        "surface-variant": "#e3e2e3",
                        "on-error-container": "#93000a",
                        "inverse-surface": "#303032",
                        "surface-container-high": "#e9e8e9",
                        "secondary-fixed": "#6ffbbe",
                        "on-secondary-fixed-variant": "#005236",
                        "surface": "#fbf9fa",
                        "on-secondary": "#ffffff",
                        "tertiary": "#ad292f",
                        "tertiary-container": "#cf4244",
                        "secondary-container": "#6cf8bb",
                        "on-tertiary-fixed": "#410005",
                        "inverse-on-surface": "#f2f0f1",
                        "surface-tint": "#6d3bd7",
                        "on-primary-fixed-variant": "#5516be",
                        "tertiary-fixed": "#ffdad7",
                        "on-tertiary-fixed-variant": "#8e101c",
                        "on-surface-variant": "#494454",
                        "on-tertiary": "#ffffff",
                        "on-background": "#1b1c1d",
                        "on-tertiary-container": "#fffbff",
                        "on-primary-fixed": "#23005c",
                        "surface-container-low": "#f5f3f4",
                        "on-primary": "#ffffff",
                        "primary-fixed": "#e9ddff",
                        "surface-container": "#efedee",
                        "on-primary-container": "#fffbff"
                    },
                    "borderRadius": {
                        "DEFAULT": "0.25rem",
                        "lg": "0.5rem",
                        "xl": "0.75rem",
                        "full": "9999px"
                    },
                    "fontFamily": {
                        "headline": ["Inter", "sans-serif"],
                        "body": ["Inter", "sans-serif"],
                        "label": ["Berkeley Mono", "monospace"]
                    }
                },
            },
        }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .berkeley-mono { font-family: 'Berkeley Mono', monospace; }
        .no-line { border: none !important; }
        .glass-card {
            background: rgba(255, 255, 255, 0.4);
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
        }
        .ethereal-shadow {
            box-shadow: 0 8px 32px 0 rgba(0,0,0,0.04);
        }
    </style>
</head>
<body class="bg-background text-on-surface font-body selection:bg-primary-container selection:text-on-primary-container">
<!-- TopNavBar -->
<nav class="fixed top-0 w-full z-50 bg-white/60 dark:bg-zinc-950/60 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.04)]">
<div class="flex justify-between items-center px-8 py-4 max-w-full mx-auto">
<div class="text-xl font-bold tracking-tighter text-zinc-900 dark:text-zinc-50">AETHER_VIZ</div>
<div class="hidden md:flex items-center space-x-8 font-['Inter'] font-medium tracking-tight text-sm">
<a class="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors" href="#">Showreel</a>
<a class="text-violet-600 dark:text-violet-400 font-bold border-b-2 border-violet-600 dark:border-violet-400 pb-1" href="#">Archive</a>
<a class="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors" href="#">Lab</a>
<a class="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors" href="#">Process</a>
<a class="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors" href="#">Contact</a>
</div>
<button class="bg-primary hover:bg-primary-container text-on-primary px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300 ease-out shadow-sm">
            Hire Specialist
        </button>
</div>
</nav>
<main class="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
<!-- Header Section -->
<header class="text-center mb-24 max-w-2xl mx-auto">
<div class="inline-block py-1 px-3 mb-6 rounded-full bg-surface-container-low text-on-surface-variant berkeley-mono uppercase text-[10px] tracking-widest">
            Curated Collection
        </div>
<h1 class="text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-on-surface">AI Viral Reels</h1>
<p class="text-lg md:text-xl text-on-surface-variant/80 font-medium leading-relaxed">
            Exploring the edge of viral storytelling and AI synthesis.
        </p>
</header>
<!-- Asymmetrical Bento-style Grid -->
<div class="grid grid-cols-1 md:grid-cols-12 gap-8">
<!-- Video Card 1: Neon Genesis (Large) -->
<div class="group relative md:col-span-8 h-[500px] overflow-hidden rounded-xl bg-surface-container-low ethereal-shadow">
<div class="absolute inset-0 z-0">
<img class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Cinematic AI-generated video still showing a futuristic neon-lit city street at night with reflections in puddles and soft rain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAaC1SyKoEm_VSC2JntJ27fQZL2BSoJ87z8WvNm-gw_XBcFwL54bfnL6humzXvzdPphUgJW1-ofrXsjqdlknkhcjiYzUoyoDROVVItnG2mUZbJDObaWHgMp4YUN55XT8pMASUKNzNH-nLf7aFS8ByejwCC752UN58sJFjfi3nMc1UdtCYcW_8bjO_jv4D2cki79jBao2xNkPygDKOkEaMiTbSeWMlcqCkN7lcYmM9Cz73SIlVi0SXSt2VwAqHhBr3JSskR6H9BFZzs"/>
</div>
<!-- Glassmorphic Overlay -->
<div class="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-all duration-500 backdrop-blur-0 group-hover:backdrop-blur-md flex items-center justify-center">
<div class="glass-card p-5 rounded-full border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100">
<span class="material-symbols-outlined text-white text-4xl" data-icon="play_arrow" style="font-variation-settings: 'FILL' 1;">play_arrow</span>
</div>
</div>
<!-- Content Information -->
<div class="absolute bottom-0 left-0 p-10 z-10 text-white pointer-events-none">
<div class="flex items-center gap-3 mb-2">
<span class="berkeley-mono text-[10px] uppercase tracking-widest text-white/70">Series 01</span>
<span class="berkeley-mono text-[10px] bg-secondary text-white px-2 py-0.5 rounded-full">1.2M Views</span>
</div>
<h3 class="text-4xl font-bold tracking-tight">Neon Genesis</h3>
<p class="text-sm text-white/80 mt-2 max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-500">A hyper-stylized exploration of cybernetic evolution and light.</p>
</div>
<div class="absolute top-6 right-6 z-20 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<button class="glass-card p-2 rounded-lg border border-white/20 text-white hover:bg-white/20 transition-colors" title="Share">
<span class="material-symbols-outlined text-xl">share</span>
</button>
<button class="glass-card p-2 rounded-lg border border-white/20 text-white hover:bg-white/20 transition-colors" title="Download">
<span class="material-symbols-outlined text-xl">download</span>
</button>
</div></div>
<!-- Video Card 2: Silicon Soul -->
<div class="group relative md:col-span-4 h-[500px] overflow-hidden rounded-xl bg-surface-container-low ethereal-shadow">
<div class="absolute inset-0 z-0">
<img class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Close-up of an AI generated digital human face with glowing circuit patterns under the skin and ethereal violet lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuNrVDXyhgZ8mzlQ4DQMLykFRr_iZoeVvOLys0Qz-WW7bnxHO4IyntoIbpOnKWbrOc4UujG83JMDbM69wgq00PQ0oleiVlG7zKwXk2ntVBWdc2Ul5BAhgElwZ0yNw8md35ismarsZ9TQ9bVnNfxjcInQZkWE0ySYmXyNv7d7-0hwIDqv3mF3kZsGTf7SDY54w7Np6aMzX3n7i8ck4fMeZxXCxp9O8kN1i7qlpBm--2aKNxq_3qXg5Cik_udLR3ScohH2FPEg2nv44"/>
</div>
<div class="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-all duration-500 backdrop-blur-0 group-hover:backdrop-blur-md flex items-center justify-center">
<div class="glass-card p-5 rounded-full border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100">
<span class="material-symbols-outlined text-white text-3xl" data-icon="play_arrow" style="font-variation-settings: 'FILL' 1;">play_arrow</span>
</div>
</div>
<div class="absolute bottom-0 left-0 p-8 z-10 text-white pointer-events-none">
<div class="flex items-center gap-3 mb-2">
<span class="berkeley-mono text-[10px] uppercase tracking-widest text-white/70">840K Views</span>
</div>
<h3 class="text-3xl font-bold tracking-tight leading-tight">Silicon Soul</h3>
</div>
<div class="absolute top-6 right-6 z-20 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<button class="glass-card p-2 rounded-lg border border-white/20 text-white hover:bg-white/20 transition-colors" title="Share">
<span class="material-symbols-outlined text-xl">share</span>
</button>
<button class="glass-card p-2 rounded-lg border border-white/20 text-white hover:bg-white/20 transition-colors" title="Download">
<span class="material-symbols-outlined text-xl">download</span>
</button>
</div></div>
<!-- Video Card 3: Liquid State -->
<div class="group relative md:col-span-5 h-[400px] overflow-hidden rounded-xl bg-surface-container-low ethereal-shadow">
<div class="absolute inset-0 z-0">
<img class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Abstract fluid simulation showing molten gold and deep violet liquid swirling together in a zero-gravity environment with high contrast lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7zuPN6pKU6D8zs4tv4Mgc-nQP-U939bwtzc6FGqerg7IYDYFbhJFeAnJfhd5xb0ZeXsXCXy0lu6vx6LV1nMYHrAYOe8zM5BNO-Ti50vZHLB7eCiqeJ1pt31_OES-xPwKyjuwd7RCtKRWpoBhu7AYdc6V5Jk69j1ikxU8c5p-CdwKHXAlYOM5252Hl7pzYY5NIiY3XAN3TWbvmOuH_v-hysjiZ5HXgxkHZ_3NyGtIVT80u1EOGAH-xPhwT_18dPaImnU3XR6Wa3zc"/>
</div>
<div class="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-all duration-500 backdrop-blur-0 group-hover:backdrop-blur-md flex items-center justify-center">
<div class="glass-card p-5 rounded-full border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100">
<span class="material-symbols-outlined text-white text-3xl" data-icon="play_arrow" style="font-variation-settings: 'FILL' 1;">play_arrow</span>
</div>
</div>
<div class="absolute bottom-0 left-0 p-8 z-10 text-white pointer-events-none">
<div class="flex items-center gap-3 mb-2">
<span class="berkeley-mono text-[10px] uppercase tracking-widest text-white/70">2.1M Views</span>
</div>
<h3 class="text-3xl font-bold tracking-tight">Liquid State</h3>
</div>
<div class="absolute top-6 right-6 z-20 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<button class="glass-card p-2 rounded-lg border border-white/20 text-white hover:bg-white/20 transition-colors" title="Share">
<span class="material-symbols-outlined text-xl">share</span>
</button>
<button class="glass-card p-2 rounded-lg border border-white/20 text-white hover:bg-white/20 transition-colors" title="Download">
<span class="material-symbols-outlined text-xl">download</span>
</button>
</div></div>
<!-- Video Card 4: Flora Obscura -->
<div class="group relative md:col-span-7 h-[400px] overflow-hidden rounded-xl bg-surface-container-low ethereal-shadow">
<div class="absolute inset-0 z-0">
<img class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Dreamy landscape with floating islands and giant glowing blossoms at dusk with a soft warm pastel color palette" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDr0FcYjSpgwkfKqIJEr0Vb4I2tgm_mxxiEwEBtL5y4VK8QL653QLWOrXV8CKEe0jLsS7YBauZ9rGqrWmeKeKYzI21WUPFVyyrsA5nXuwDOPaAZeQIlERgUphvRFdacjdkNvOgkKqZ9CYOIsJrR6x-ZCHvL-Ah3_DX-a9ew_tMo_RScZv9l7cfR70O-NwTw1WttkuTaNJHkjM7CmAtdZHc6a_zcQ89TlBfT4CcEhYdisV7QmZYCZyTbzls9T2rk6sEOulTpas6yRq8"/>
</div>
<div class="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-all duration-500 backdrop-blur-0 group-hover:backdrop-blur-md flex items-center justify-center">
<div class="glass-card p-5 rounded-full border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100">
<span class="material-symbols-outlined text-white text-3xl" data-icon="play_arrow" style="font-variation-settings: 'FILL' 1;">play_arrow</span>
</div>
</div>
<div class="absolute bottom-0 left-0 p-8 z-10 text-white pointer-events-none">
<div class="flex items-center gap-3 mb-2">
<span class="berkeley-mono text-[10px] uppercase tracking-widest text-white/70">430K Views</span>
</div>
<h3 class="text-3xl font-bold tracking-tight">Flora Obscura</h3>
</div>
<div class="absolute top-6 right-6 z-20 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<button class="glass-card p-2 rounded-lg border border-white/20 text-white hover:bg-white/20 transition-colors" title="Share">
<span class="material-symbols-outlined text-xl">share</span>
</button>
<button class="glass-card p-2 rounded-lg border border-white/20 text-white hover:bg-white/20 transition-colors" title="Download">
<span class="material-symbols-outlined text-xl">download</span>
</button>
</div></div>
<!-- Video Card 5: Void Space -->
<div class="group relative md:col-span-6 h-[450px] overflow-hidden rounded-xl bg-surface-container-low ethereal-shadow">
<div class="absolute inset-0 z-0">
<img class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Architectural visualization of a gravity-defying minimalist structure made of glass and white stone nestled in a misty forest" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkOeiKwQ65bA1l-ALAaDfP6w42d-2MUM2L2RUw0nckoHHXFoW39Bdii3iJ9kfZC-1oQjzKHjy6q1rScXqe4DTLn_y6bmCbOifRqpB5xQANfraG9Gx8sMiGpfLUW-9oq92bZxdHYuB65xoMjJwlctfL-iFAfooPpHLeOLBwhYLgNYXo6ucqyvxaAezyA9vkF8J9AYWUHYXlaLrb0pN9JgH6FoFEiU5tbMN_AaCmqw66a9DLJqUEWK2ewmTuFfF92y-dGi1Ak2WAaA8"/>
</div>
<div class="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-all duration-500 backdrop-blur-0 group-hover:backdrop-blur-md flex items-center justify-center">
<div class="glass-card p-5 rounded-full border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100">
<span class="material-symbols-outlined text-white text-3xl" data-icon="play_arrow" style="font-variation-settings: 'FILL' 1;">play_arrow</span>
</div>
</div>
<div class="absolute bottom-0 left-0 p-8 z-10 text-white pointer-events-none">
<div class="flex items-center gap-3 mb-2">
<span class="berkeley-mono text-[10px] uppercase tracking-widest text-white/70">920K Views</span>
</div>
<h3 class="text-3xl font-bold tracking-tight">Void Space</h3>
</div>
<div class="absolute top-6 right-6 z-20 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<button class="glass-card p-2 rounded-lg border border-white/20 text-white hover:bg-white/20 transition-colors" title="Share">
<span class="material-symbols-outlined text-xl">share</span>
</button>
<button class="glass-card p-2 rounded-lg border border-white/20 text-white hover:bg-white/20 transition-colors" title="Download">
<span class="material-symbols-outlined text-xl">download</span>
</button>
</div></div>
<!-- Video Card 6: Urban Ghost -->
<div class="group relative md:col-span-6 h-[450px] overflow-hidden rounded-xl bg-surface-container-low ethereal-shadow">
<div class="absolute inset-0 z-0">
<img class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Cyberpunk character portrait with complex mechanical eyewear and flowing hair in a rainy urban environment with sharp blue and pink lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCoXR0HGJNuuHBEJHnVK7fZtyChrmzpQTovqnxIABN0iGOAwhdCIFDL2X9gD3Q_rq2zH76rhwNQWZE7B3arpe_YXvUybG08LXPVbCMRv3E8QFtPeAeFTxCZk2VB0eFDdFAJFhW-SvIbphneGfJyQLG362m1cHArbUiHiSPb5pC0KC8L_1PY0p3fGeH7L6-Qb_C6lYxjby7co_O4qPabRNOvAxeKhL2AH1XKZjbEj_LMHNvRd0SoFPzvxX_7dWb13B5DwkEmDLx-vWE"/>
</div>
<div class="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-all duration-500 backdrop-blur-0 group-hover:backdrop-blur-md flex items-center justify-center">
<div class="glass-card p-5 rounded-full border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100">
<span class="material-symbols-outlined text-white text-3xl" data-icon="play_arrow" style="font-variation-settings: 'FILL' 1;">play_arrow</span>
</div>
</div>
<div class="absolute bottom-0 left-0 p-8 z-10 text-white pointer-events-none">
<div class="flex items-center gap-3 mb-2">
<span class="berkeley-mono text-[10px] uppercase tracking-widest text-white/70">1.7M Views</span>
</div>
<h3 class="text-3xl font-bold tracking-tight">Urban Ghost</h3>
</div>
<div class="absolute top-6 right-6 z-20 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<button class="glass-card p-2 rounded-lg border border-white/20 text-white hover:bg-white/20 transition-colors" title="Share">
<span class="material-symbols-outlined text-xl">share</span>
</button>
<button class="glass-card p-2 rounded-lg border border-white/20 text-white hover:bg-white/20 transition-colors" title="Download">
<span class="material-symbols-outlined text-xl">download</span>
</button>
</div></div>
</div>
</main>
<!-- Footer -->
<footer class="bg-zinc-50 dark:bg-zinc-950 w-full border-t border-zinc-200/15 dark:border-zinc-800/15 mt-24">
<div class="flex flex-col md:flex-row justify-between items-center px-12 py-12 w-full">
<div class="font-bold text-zinc-900 dark:text-zinc-50 mb-4 md:mb-0">AETHER_VIZ</div>
<div class="flex space-x-8 berkeley-mono uppercase text-[10px] tracking-widest text-zinc-400 dark:text-zinc-600">
<a class="hover:text-violet-500 transition-colors" href="#">Twitter</a>
<a class="hover:text-violet-500 transition-colors" href="#">LinkedIn</a>
<a class="hover:text-violet-500 transition-colors" href="#">Vimeo</a>
<a class="hover:text-violet-500 transition-colors" href="#">Substack</a>
</div>
<div class="berkeley-mono uppercase text-[10px] tracking-widest text-zinc-400 dark:text-zinc-600 mt-8 md:mt-0">
            © 2024 AETHER_VIZ. Built with Precision.
        </div>
</div>
</footer>
</body></html>`;

// 1. Preserve Header and Footer
let indexNavRegex = /<nav[^>]*id="main-nav"[^>]*>[\s\S]*?<\/nav>/;
let indexNavMatch = indexHtml.match(indexNavRegex);
let indexNav = indexNavMatch ? indexNavMatch[0] : '';
// Normalize links for external page
indexNav = indexNav.replace(/href="#([a-zA-Z0-9_-]+)"/g, 'href="index.html#$1"').replace(/href="#"/g, 'href="index.html"');

let catNavRegex = /<nav[^>]*>[\s\S]*?<\/nav>/;
let catWithNav = userDesign.replace(catNavRegex, indexNav);

let indexFooterRegex = /<footer[^>]*>[\s\S]*?<\/footer>/;
let indexFooterMatch = indexHtml.match(indexFooterRegex);
let indexFooter = indexFooterMatch ? indexFooterMatch[0] : '';
indexFooter = indexFooter.replace(/href="#([a-zA-Z0-9_-]+)"/g, 'href="index.html#$1"');

let catFooterRegex = /<footer[^>]*>[\s\S]*?<\/footer>/;
let catFinal = catWithNav.replace(catFooterRegex, indexFooter);

// 2. Fetch the Modal HTML and perfectly override its CSS constraints for ultra smoothness
const modalStart = indexHtml.indexOf('<!-- Custom Glass Video Player Modal -->');
const modalEnd = indexHtml.indexOf('<!-- Footer -->', modalStart);
let modalHTML = '';
if(modalStart !== -1 && modalEnd !== -1) {
    modalHTML = indexHtml.substring(modalStart, modalEnd).trim();
}

// 3. Ultra Smooth Backdrop Transition Patch (Opacity only on pre-blurred layer)
modalHTML = modalHTML.replace(/<div id="video-modal-backdrop"[^>]*><\/div>/, 
    '<div id="video-modal-backdrop" class="absolute inset-0 bg-black/60 pointer-events-auto" style="backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); opacity: 0; transition: opacity 600ms ease-out; cursor: pointer;"></div>');

// 4. Convert <img> placeholders to interactive <video> elements
const wixVideos = [
    'https://video.wixstatic.com/video/ef49f5_fc1cbb26ca524797a4cf799d9e1893d3/1080p/mp4/file.mp4',
    'https://video.wixstatic.com/video/ef49f5_5ef7e0f6cfb4481e8312c0ee50b634f0/1080p/mp4/file.mp4',
    'https://video.wixstatic.com/video/ef49f5_36b5257a15094bbda9bd4abb6da0c0f9/1080p/mp4/file.mp4'
];
let vidIndex = 0;

catFinal = catFinal.replace(/<img class="([^"]+)" data-alt="([^"]*)" src="([^"]+)"\/>/g, (match, className, alt, src) => {
    let vidUrl = wixVideos[vidIndex % wixVideos.length];
    vidIndex++;
    return `<video class="${className} hover-play" src="${vidUrl}" poster="${src}" loop muted playsinline></video>`;
});

// Remove blurring on hover completely as per user's earlier requirement
catFinal = catFinal.replace(/backdrop-blur-0 group-hover:backdrop-blur-md/g, 'backdrop-blur-0');

// Inject the custom reel-card logic for clicking
catFinal = catFinal.replace(/class="group relative (md:col-span-[0-9]+) (h-\[[0-9]+px\]) overflow-hidden rounded-xl bg-surface-container-low ethereal-shadow"/g, (match, col, h) => {
    return `class="group relative ${col} ${h} overflow-hidden rounded-xl bg-surface-container-low ethereal-shadow reel-card pointer" style="cursor: pointer;"`;
});

// 5. Extract Modal JS and inject smoothly
const jsStartStr = '// ===== Custom Glass Video Player =====';
const jsStart = indexHtml.indexOf(jsStartStr);
const jsEndStr = '// ===== FUTURISTIC: Cursor Glow Follower =====';
let modalJS = '';
if(jsStart !== -1) {
    let jsEnd = indexHtml.indexOf(jsEndStr);
    if(jsEnd === -1) jsEnd = indexHtml.length;
    modalJS = indexHtml.substring(jsStart, jsEnd);
}

// Patch JS for smoothest backdrop fade and click outside
modalJS = modalJS.replace(/function openVideoModal\(src, title\) \{([\s\S]*?)modalVideo\.play\(\);/g, (match, inner) => {
    return `function openVideoModal(src, title) {
    modalVideo.src = src;
    if(typeof modalVideoTitle !== 'undefined' && modalVideoTitle) modalVideoTitle.textContent = title || 'Now Playing';
    videoModal.classList.remove('opacity-0', 'pointer-events-none');
    videoModal.classList.add('opacity-100');
    document.body.style.overflow = 'hidden';
    const backdrop = document.getElementById('video-modal-backdrop');
    if(backdrop) { void backdrop.offsetWidth; backdrop.style.opacity = '1'; }
    const mainNav = document.getElementById('main-nav');
    if (mainNav) { mainNav.style.opacity = '0'; mainNav.style.pointerEvents = 'none'; }
    setTimeout(() => { modalVideo.play();`;
});

modalJS = modalJS.replace(/function closeVideoModal\(\) \{([\s\S]*?)document\.body\.style\.overflow = '';/g, (match) => {
    return `function closeVideoModal() {
    const backdrop = document.getElementById('video-modal-backdrop');
    if(backdrop) { backdrop.style.opacity = '0'; }
    videoModal.classList.add('pointer-events-none');
    setTimeout(() => { videoModal.classList.add('opacity-0'); videoModal.classList.remove('opacity-100'); }, 600);
    document.body.style.overflow = '';`;
});

// Add click outside
if (!modalJS.includes('backdrop.addEventListener')) {
    modalJS = modalJS.replace("videoModalClose.addEventListener('click', closeVideoModal);", 
        "videoModalClose.addEventListener('click', closeVideoModal);\n" +
        "        const directBackdrop = document.getElementById('video-modal-backdrop');\n" +
        "        if(directBackdrop) directBackdrop.addEventListener('click', closeVideoModal);");
}

const scriptInject = `
<script>
${modalJS}

// Hover play logic
document.querySelectorAll('.hover-play').forEach(vid => {
    const parentNode = vid.closest('.group');
    if (parentNode) {
        parentNode.addEventListener('mouseenter', () => { vid.play().catch(e => {}); });
        parentNode.addEventListener('mouseleave', () => { vid.pause(); });
    }
});

// Click card logic
document.querySelectorAll('.reel-card').forEach(card => {
    card.addEventListener('click', (e) => {
        const vid = card.querySelector('video');
        if (vid && typeof openVideoModal === 'function') {
            openVideoModal(vid.src, card.querySelector('h3').textContent);
        }
    });
});
</script>
`;

const insertionPoint = catFinal.indexOf('</body>');
const fullOutput = catFinal.slice(0, insertionPoint) + '\n' + modalHTML + '\n' + scriptInject + '\n' + catFinal.slice(insertionPoint);

fs.writeFileSync('category.html', fullOutput);

// Update projects.html to link back to the revamped category page
let projectsHtml = fs.readFileSync('projects.html', 'utf8');
projectsHtml = projectsHtml.replace(/href="#"/g, 'href="category.html"');
fs.writeFileSync('projects.html', projectsHtml);

console.log('Category page successfully recoded with ultimate precision.');
