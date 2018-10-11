const chai = require('chai');
const expect = chai.expect;
const exec = require('child_process').exec;

const BTConverter = require('../src/BTConverter');

const cliBtcConverter = './src/main.js';


describe('BTConverter', () => {
  it('should return result when no paramters', () => {
    expect(BTConverter()).to.be.equal('BT 1 -> BRL 2000.00');
  });

  it('should return result when paramters defined', () => {
    expect(BTConverter('USD', 3)).to.be.equal('BT 3 -> USD 2000.00');
  });

  it('should have the parameter currency', (done) => {
    exec(`${cliBtcConverter} --help`, (error, stdout, stderr) => {
      if(error) throw error;
      expect(stdout.includes('--currency')).to.be.true;
      done();
    });
  });

  it('should have the parameter amount', (done) => {
    exec(`${cliBtcConverter} --help`, (error, stdout, stderr) => {
      if(error) throw error;
      expect(stdout.includes('--amount')).to.be.true;
      done();
    });
  });
});
