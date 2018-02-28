const fs = require('fs');

const packageJson = require('./package.json');

const exec = require('child_process');
exec('git describe --tags', (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
console.log(`stderr: ${stderr}`);
  packageJson.version = stdout;
  fs.writeFileSync('./package.json', JSON.stringify(packageJson));

});

//todo: path resolve and dirname

