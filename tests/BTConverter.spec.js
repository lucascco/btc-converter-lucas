const chai = require('chai');
const nock = require('nock');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const expect = chai.expect;
const chalk = require('chalk');

chai.use(sinonChai);

const BTConverter = require('../src/BTConverter');

describe('BTConverter', () => {

  let consoleStub;

  const responseMock = {
    "price": 6515.47,
    "success": true,
    "time": "2018-10-15 15:55:33"
  }

  beforeEach(() => {
    consoleStub = sinon.stub(console, 'info');
  });

  afterEach(() => {
    consoleStub.restore();
  });

  it('should return result when no paramters', async () => {
    nock('https://apiv2.bitcoinaverage.com')
      .get('/convert/global')
      .query({from: 'BTC', to: 'BRL', amount: 1})
      .reply(200, responseMock);

    await BTConverter();
    expect(consoleStub).to.have.been.calledWith(`${chalk.red(1)} BTC to ${chalk.blue('BRL')} = ${chalk.green('6515.47')}`);

  });

  it('should return when use currency USD and amount as 10', async () => {
    nock('https://apiv2.bitcoinaverage.com')
      .get('/convert/global')
      .query({from: 'BTC', to: 'USD', amount: 10})
      .reply(200, responseMock);

    await BTConverter('USD', 10);
    expect(consoleStub).to.have.been.calledWith(`${chalk.red(10)} BTC to ${chalk.blue('USD')} = ${chalk.green('6515.47')}`);
  });

  it('should return erro when api reply to error', async () => {
    nock('https://apiv2.bitcoinaverage.com')
      .get('/convert/global')
      .query({from: 'BTC', to: 'USD', amount: 10})
      .replyWithError('Error')

    await BTConverter('USD', 10);
    expect(consoleStub).to.have.been.calledWith(chalk.red('API reply with erro. Wait few minutes.'));
  });


});
