const fs = require('node:fs');
const https = require('node:https');

https.get('https://en.wikipedia.org/wiki/Tunde_Onakoya', (response) => {
    console.log('statusCode:', response.statusCode);
    console.log('headers:', response.headers);

    const writeStream = fs.createWriteStream('public/tunde_complete.html');

    response.on('data', (data) => {
        writeStream.write(data);
    });

    response.on('end', () => {
        writeStream.close();
        console.log('Wikipedia Tunde Onakoya page saved to public/tunde_complete.html');
    }); 
})
.on('error', (error) => {
    console.log(error);
    })

.on('complete', () => {
    console.log('response completed.');
    })

.on('close', () => {
    console.log('response connection closed.');
    });