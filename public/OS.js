const fs = require('node:fs');
const os = require('node:os');

console.log("Architecture: " + os.arch());
console.log("Uptime: " + os.uptime());
console.log("Home directory: " + os.homedir());

const writeStream = fs.createWriteStream('public/simple.md');

writeStream.write(`Architecture: ${os.arch()}\n`);
writeStream.write(`Home Directory: ${os.homedir()}\n`);
writeStream.write(`Uptime: ${os.uptime()}s\n`);

writeStream.close((err) => {
    if (err) {
        console.error('Error writing system info file:', err);
    } else {
        console.log('information written to md');
    }
});