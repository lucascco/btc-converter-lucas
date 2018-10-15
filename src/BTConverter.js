const request = require('request');
const chalk = require('chalk');
const ora = require('ora');

const spinner = ora({
  text: 'Retriving Values',
  color: 'yellow',
});

function BTConverter(current = 'BRL', amount = 1) {
  const url = `https://apiv2.bitcoinaverage.com/convert/global?from=BTC&to=${current}&amount=${amount}`;
  spinner.start();
  request(url, (error, response, body) => {
    try {
      spinner.stop();
      const apiResponse = JSON.parse(body);
      console.log(`${chalk.red(amount)} BTC to ${chalk.blue(current)} = ${chalk.green(apiResponse.price)}`);
    } catch (erroApi) {
      console.log(chalk.red('API reply with erro. Wait few minutes.'));
    }
  });
}

module.exports = BTConverter;
