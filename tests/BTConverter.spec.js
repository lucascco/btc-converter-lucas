const chai = require('chai');
const nock = require('nock');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

chai.use(sinonChai);

const expect = chai.expect;
const exec = require('child_process').exec;

const BTConverter = require('../src/BTConverter');

const cliBtcConverter = './src/main.js';


describe('BTConverter', () => {

  let consoleStub;

  const responseMock = {
    "price": 6515.47,
    "success": true,
    "time": "2018-10-15 15:55:33"
  }

  beforeEach(() => {
    consoleStub = sinon.stub(console, 'log');
  });

  afterEach(() => {
    console.log.restore();
  });

  it('should return result when no paramters', (done) => {
    nock('https://apiv2.bitcoinaverage.com')
      .get('/convert/global')
      .query({from: 'BTC', to: 'BRL', amount: 1})
      .reply(200, responseMock);

    BTConverter();

    setTimeout(() => {
      expect(consoleStub).to.have.been.calledWith('1 BTC to BRL = 6515.47');
      done();
    }, 300);
  });

  it('should return when use currency USD and amount as 10', (done) => {
    nock('https://apiv2.bitcoinaverage.com')
      .get('/convert/global')
      .query({from: 'BTC', to: 'USD', amount: 10})
      .reply(200, responseMock);

    BTConverter('USD', 10);

    setTimeout(() => {
      expect(consoleStub).to.have.been.calledWith('10 BTC to USD = 6515.47');
      done();
    }, 300);
  });

  it('should return erro when api reply to error', (done) => {
    nock('https://apiv2.bitcoinaverage.com')
      .get('/convert/global')
      .query({from: 'BTC', to: 'USD', amount: 10})
      .replyWithError('Error')

    BTConverter('USD', 10);

    setTimeout(() => {
      expect(consoleStub).to.have.been.calledWith('API reply with erro. Wait few minutes.');
      done();
    }, 300);
  });


});
