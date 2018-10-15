const request = require('request');
const chalk = require('chalk');

function BTConverter(current = 'BRL', amount = 1) {
  const url = `https://apiv2.bitcoinaverage.com/convert/global?from=BTC&to=${current}&amount=${amount}`;

  request(url, (error, response, body) => {
    try {
      const apiResponse = JSON.parse(body);
      console.log(`${chalk.red(amount)} BTC to ${chalk.blue(current)} = ${chalk.green(apiResponse.price)}`);
    } catch (erroApi) {
      console.log(chalk.red('API reply with erro. Wait few minutes.'));
    }
  });
}

module.exports = BTConverter;
