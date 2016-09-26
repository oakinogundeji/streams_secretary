'use strict';
//=============================================================================
console.log('Hellooo and welcome to streams demo, please begin by typing data:');
/*
process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', chunk => {
  process.stdout.write(chunk.toString());
  if(chunk.toString().trim() == 'quit') {
    process.stdout.write('About to quit...', 'utf8');
    process.exit(0);
  }
  if(chunk.toString().trim() == 'error') {
    process.stdin.emit('error', new Error(chunk.toString().trim()));
  }
});
process.stdin.on('error', err => {
  process.stdout.write(`Bummerrrrrr...
    `);
  console.error(err);
  process.exit(0);
});
*/
const
  RStream = require('stream').Readable,
  wstream = require('./output');

class MyRStream extends RStream {
  constructor(options) {
    super(options);
    this._dataSource = process.stdin;
    this._dataSource.setEncoding('utf8');
    this._dataSource.on('data', chunk => {
      process.stdout.write(chunk.toString().trim() +'\n');
      if(!this.push(chunk)) {
        this._dataSource.pause();
      }
      if(chunk.toString().trim() == 'quit') {
        this.push(null);
        process.exit(0);
      }
      if(chunk.toString().trim() == 'error') {
        this.emit('error', new Error('Bummerrrr!'));
      }
    });
  }
  _read(size) {
    this._dataSource.resume();
  }
}

const myRstream = new MyRStream();
//myRstream.read();
myRstream.pipe(wstream);
myRstream.on('error', err => {
  console.error(err);
  process.exit(0);
});
