const fs = require('fs');

const indexHtml = fs.readFileSync('index.html', 'utf8');
let category = fs.readFileSync('category.html', 'utf8');

// Replace title
category = category.replace(/<title>.*?<\/title>/, '<title>Selected Archive | AIVM Specialist</title>');
if (!category.includes('<title>')) {
   category = category.replace('<head>', '<head>\n<title>Selected Archive | AIVM Specialist</title>');
}

// 1. Extract TopNavBar from index.html
const indexNavStartStr = '<!-- TopNavBar -->';
const indexNavStart = indexHtml.indexOf(indexNavStartStr);
const indexNavEndStr = '</nav>';
const indexNavEnd = indexHtml.indexOf(indexNavEndStr, indexNavStart) + indexNavEndStr.length;
const indexNav = indexHtml.substring(indexNavStart, indexNavEnd);

// Replace in category (projects)
const catNavStart = category.indexOf('<!-- TopNavBar -->');
if(catNavStart !== -1) {
    const catNavEnd = category.indexOf('</nav>', catNavStart) + '</nav>'.length;
    category = category.slice(0, catNavStart) + indexNav + category.slice(catNavEnd);
} else {
    // If no nav comment, find first <nav
    const nStart = category.indexOf('<nav');
    if (nStart !== -1) {
        const nEnd = category.indexOf('</nav>', nStart) + '</nav>'.length;
        category = category.slice(0, nStart) + indexNav + category.slice(nEnd);
    }
}

// Replace footer
const indexFooterStartStr = '<!-- Footer -->';
const indexFooterStart = indexHtml.indexOf(indexFooterStartStr);
const indexFooterEndStr = '</footer>';
const indexFooterEnd = indexHtml.indexOf(indexFooterEndStr, indexFooterStart) + indexFooterEndStr.length;
const indexFooter = indexHtml.substring(indexFooterStart, indexFooterEnd);

const catFooterStart = category.indexOf('<footer');
if (catFooterStart !== -1) {
    const catFooterEnd = category.indexOf('</footer>', catFooterStart) + '</footer>'.length;
    category = category.slice(0, catFooterStart) + indexFooter + category.slice(catFooterEnd);
} else {
    const insertionPoint = category.indexOf('</body>');
    category = category.slice(0, insertionPoint) + indexFooter + '\n' + category.slice(insertionPoint);
}

// Change H1 and P to make it projects archive
category = category.replace(/<h1.*?>.*?<\/h1>/, '<h1 class="text-5xl md:text-7xl font-bold font-headline tracking-tighter text-on-surface mb-6">Selected Archive</h1>');
category = category.replace(/<p.*?>We push the boundaries.*?<\/p>/, '<p class="text-xl text-on-surface-variant font-medium max-w-2xl mx-auto md:mx-0">Explore our curated selection of high-fidelity AI video productions, cinematic studies, and immersive brand stories.</p>');

fs.writeFileSync('projects.html', category);
console.log('Successfully completely wiped Ethereal build and reconstructed original projects.html');
