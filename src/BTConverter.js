require('@babel/polyfill');
const request = require('request-promise-native');
const chalk = require('chalk');
const ora = require('ora');

const spinner = ora({
  text: 'Retriving Values',
  color: 'yellow',
});

async function BTConverter(current = 'BRL', amount = 1) {
  const url = `https://apiv2.bitcoinaverage.com/convert/global?from=BTC&to=${current}&amount=${amount}`;
  try {
    spinner.start();
    const data = await request(url);
    const apiResponse = JSON.parse(data);
    console.info(`${chalk.red(amount)} BTC to ${chalk.blue(current)} = ${chalk.green(apiResponse.price)}`);
  } catch (erroApi) {
    console.info(chalk.red('API reply with erro. Wait few minutes.'));
  } finally {
    spinner.stop();
  }
}

module.exports = BTConverter;
