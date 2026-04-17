const https = require('https');

https.get('https://freelancinga45.wixstudio.com/my-site-1/portfolio-collections/content-creation', (res) => {
    let rawData = '';
    res.on('data', (chunk) => { rawData += chunk; });
    res.on('end', () => {
        const videoMatches = rawData.match(/video\.wixstatic\.com\/video\/[a-zA-Z0-9_]+\/[a-zA-Z0-9_\/.]+\.mp4/g) || [];
        const uniqueVideos = [...new Set(videoMatches)];
        console.log("Found videos:");
        console.log(uniqueVideos);
        
        const imgMatches = rawData.match(/static\.wixstatic\.com\/media\/[a-zA-Z0-9_]+\~mv2\.(jpg|png|webp)/g) || [];
        const uniqueImgs = [...new Set(imgMatches)];
        console.log("Found images:");
        console.log(uniqueImgs);
    });
}).on('error', (e) => {
    console.error(e);
});
