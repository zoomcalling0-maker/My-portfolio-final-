const https = require('https');
const fs = require('fs');

const url = 'https://video.wixstatic.com/video/f361dc_13e257094ac3441fa735029414c1745e/1080p/mp4/file.mp4';
const options = {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36',
    'Referer': 'https://freelancinga45.wixstudio.com/',
    'Origin': 'https://freelancinga45.wixstudio.com',
    'Accept': 'video/webm,video/ogg,video/*;q=0.9,application/ogg;q=0.7,audio/*;q=0.6,*/*;q=0.5',
    'Accept-Language': 'en-US,en;q=0.5'
  }
};

https.get(url, options, (res) => {
    console.log(`Status Code: ${res.statusCode}`);
    if (res.statusCode === 200 || res.statusCode === 206) {
        const file = fs.createWriteStream('test_video.mp4');
        res.pipe(file);
        file.on('finish', () => {
            file.close();
            console.log('Download Completed');
        });
    } else {
        res.on('data', d => process.stdout.write(d));
    }
}).on('error', (e) => {
    console.error(e);
});
