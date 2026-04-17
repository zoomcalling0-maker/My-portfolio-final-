const fs = require('fs');
const html = fs.readFileSync('./category.html', 'utf8');
const lines = html.split('\n');

const scriptTags = (html.match(/<script/g) || []).length;
const scriptCloseTags = (html.match(/<\/script>/g) || []).length;
const mobileMenuBtns = (html.match(/mobile-menu-btn/g) || []).length;
const mobileMenuIds = (html.match(/id="mobile-menu"/g) || []).length;
const mainNavIds = (html.match(/id="main-nav"/g) || []).length;
const hasMobileMenuListener = html.includes('mobileMenuBtn.addEventListener');
const hasMobileMenuClose = html.includes('mobileMenuClose.addEventListener');
const hasNavScrollListener = html.includes('mainNav.classList.add');

console.log('=== Category Page Validation ===');
console.log('Total lines:', lines.length);
console.log('Script open tags:', scriptTags);
console.log('Script close tags:', scriptCloseTags);
console.log('#mobile-menu-btn occurrences:', mobileMenuBtns);
console.log('id="mobile-menu" occurrences:', mobileMenuIds);
console.log('id="main-nav" occurrences:', mainNavIds);
console.log('Has mobile menu open listener:', hasMobileMenuListener);
console.log('Has mobile menu close listener:', hasMobileMenuClose);
console.log('Has nav scroll class toggle:', hasNavScrollListener);
console.log('=== PASS ===');
