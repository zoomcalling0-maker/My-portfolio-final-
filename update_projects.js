const fs = require('fs');

const indexHtml = fs.readFileSync('index.html', 'utf8');
let projectsHtml = fs.readFileSync('projects.html', 'utf8');

// 1. Extract TopNavBar from index.html
const indexNavStartStr = '<!-- TopNavBar -->';
const indexNavStart = indexHtml.indexOf(indexNavStartStr);
const indexNavEndStr = '</nav>';
const indexNavEnd = indexHtml.indexOf(indexNavEndStr, indexNavStart) + indexNavEndStr.length;
const indexNav = indexHtml.substring(indexNavStart, indexNavEnd);

// Replace in projects.html
const projectsNavStart = projectsHtml.indexOf('<!-- TopNavBar -->');
const projectsNavEnd = projectsHtml.indexOf('</nav>', projectsNavStart) + '</nav>'.length;
projectsHtml = projectsHtml.slice(0, projectsNavStart) + indexNav + projectsHtml.slice(projectsNavEnd);

// 2. Extract Footer from index.html
const indexFooterStartStr = '<!-- Footer -->';
const indexFooterStart = indexHtml.indexOf(indexFooterStartStr);
const indexFooterEndStr = '</footer>';
const indexFooterEnd = indexHtml.indexOf(indexFooterEndStr, indexFooterStart) + indexFooterEndStr.length;
const indexFooter = indexHtml.substring(indexFooterStart, indexFooterEnd);

// Insert Footer into projects.html
// since projects.html doesn't have a footer right now, insert it right before <!-- Floating Command Bar --> or </body>
const insertionPoint = projectsHtml.indexOf('<!-- Floating Command Bar -->') !== -1 
    ? projectsHtml.indexOf('<!-- Floating Command Bar -->') 
    : projectsHtml.indexOf('</body>');

projectsHtml = projectsHtml.slice(0, insertionPoint) + indexFooter + '\n' + projectsHtml.slice(insertionPoint);

fs.writeFileSync('projects.html', projectsHtml);
console.log('Successfully updated projects.html with index.html nav and footer');
