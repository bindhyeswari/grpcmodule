const metatron = require('metatron');
const nflxGrpc = require('nflx-grpc');

console.log('Working with metatron and grpc ... ');

console.log(metatron);

module.exports = {
  print: () => {
    console.log('Hello World!');
    return 'Hello World';
  }
};

