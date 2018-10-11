const expect = require('chai').expect;
const exec = require('child_process').exec;

const btcConverter = './src/main.js';

describe('Main CLI', () => {
  it('shoul return Hello Word', (done) => {
    exec(btcConverter, (err, stdout, stderr) => {
      if(err) throw err;
      expect(stdout.replace('\n', '')).to.be.equal('Hello Word');
      done();
    });
  });
});
