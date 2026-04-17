const fs = require('fs');

const indexHtml = fs.readFileSync('index.html', 'utf8');
let newDesign = fs.readFileSync('user_design.html', 'utf8');

// 1. Extract TopNavBar from index.html
const indexNavStartStr = '<!-- TopNavBar -->';
const indexNavStart = indexHtml.indexOf(indexNavStartStr);
const indexNavEndStr = '</nav>';
const indexNavEnd = indexHtml.indexOf(indexNavEndStr, indexNavStart) + indexNavEndStr.length;
// Rewrite hrefs to point to index.html in the nav
let indexNav = indexHtml.substring(indexNavStart, indexNavEnd);
indexNav = indexNav.replace(/href="#([a-zA-Z0-9_-]+)"/g, 'href="index.html#$1"');
indexNav = indexNav.replace(/href="#"/g, 'href="index.html"');

// Replace in new design
const newNavStart = newDesign.indexOf('<!-- TopNavBar Navigation Shell -->');
if (newNavStart !== -1) {
    const newNavEnd = newDesign.indexOf('</nav>', newNavStart) + '</nav>'.length;
    newDesign = newDesign.slice(0, newNavStart) + indexNav + newDesign.slice(newNavEnd);
}

// 2. Extract Footer from index.html
const indexFooterStartStr = '<!-- Footer -->';
const indexFooterStart = indexHtml.indexOf(indexFooterStartStr);
const indexFooterEndStr = '</footer>';
const indexFooterEnd = indexHtml.indexOf(indexFooterEndStr, indexFooterStart) + indexFooterEndStr.length;
let indexFooter = indexHtml.substring(indexFooterStart, indexFooterEnd);
indexFooter = indexFooter.replace(/href="#([a-zA-Z0-9_-]+)"/g, 'href="index.html#$1"');

// Replace in new design
const newFooterStart = newDesign.indexOf('<!-- Footer Landing Page Shell -->');
if (newFooterStart !== -1) {
    const newFooterEnd = newDesign.indexOf('</footer>', newFooterStart) + '</footer>'.length;
    newDesign = newDesign.slice(0, newFooterStart) + indexFooter + newDesign.slice(newFooterEnd);
}

// 3. Make sure to embed video modal at bottom of body so the video plays work if user clicks them in future
const modalStart = indexHtml.indexOf('<!-- Custom Glass Video Player Modal -->');
const modalEndMarker = '</div>\n\n    <!-- Footer -->';
const modalEnd = indexHtml.indexOf(modalEndMarker, modalStart);
let modalHTML = '';
if (modalStart !== -1 && modalEnd !== -1) {
    modalHTML = indexHtml.substring(modalStart, modalEnd).trim();
}

// Inject modal right before </footer> since we just replaced the footer. Wait, it's safer right before </body>.
const insertionPoint = newDesign.indexOf('</body>');
newDesign = newDesign.slice(0, insertionPoint) + modalHTML + '\n' + newDesign.slice(insertionPoint);

fs.writeFileSync('projects.html', newDesign);
console.log('Successfully applied new Bento grid design to projects.html while preserving index headers and footers.');
