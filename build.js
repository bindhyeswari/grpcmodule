const fs = require('fs');

const packageJson = require('./package.json');

const exec = require('child_process').exec;
exec('git tag | tail -1', (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.log(`stderr: ${stderr}`);
  packageJson.version = stdout.trim();
  fs.writeFileSync('./package.json', JSON.stringify(packageJson));
});

//todo: path resolve and dirname

