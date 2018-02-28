const fs = require('fs');

const packageJson = require('./package.json');
packageJson.version = '0.0.1-rc8';

const exec = require('child_process');
exec('git describe --tags', (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
console.log(`stderr: ${stderr}`);
});

//todo: path resolve and dirname
fs.writeFileSync('./package.json', JSON.stringify(packageJson));

