const fs = require('fs');

let projects = fs.readFileSync('projects.html', 'utf8');

// Replace href="#" with href="index.html"
projects = projects.replace(/href="#"/g, 'href="index.html"');

// Replace href="#[anything]" with href="index.html#[anything]"
// Make sure it doesn't match standard URLs
projects = projects.replace(/href="#([a-zA-Z0-9_-]+)"/g, 'href="index.html#$1"');

// Wait! "Projects" link should probably link to "#" or stay as "projects.html"
// Ensure href="projects.html" is kept.
projects = projects.replace(/href="index.html#projects.html"/g, 'href="projects.html"'); // Just in case it somehow messed it up, but the regex above only matches letters/numbers

fs.writeFileSync('projects.html', projects);
console.log('Successfully fixed navigation links in projects.html');
