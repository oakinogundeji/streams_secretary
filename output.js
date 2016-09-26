'use strict';
//=============================================================================
const
  WStream = require('stream').Writable,
  fs = require('fs');

class MyWStream extends WStream {
  constructor(options) {
    super(options);
    this._dataDestination = fs.createWriteStream('./file.txt', {
      defaultEncoding: 'utf8',
      flags: 'a'
    });
  }
  _write(chunk, enc, cb) {
    this._dataDestination.write(chunk);
    this._dataDestination.on('error', err => {
      cb(err);
    });
    cb();
  }
}

const myWstream = new MyWStream();

module.exports = myWstream;
