"use strict";

var request = require('request');

var chalk = require('chalk');

var ora = require('ora');

var spinner = ora({
  text: 'Retriving Values',
  color: 'yellow'
});

function BTConverter() {
  var current = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'BRL';
  var amount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var url = "https://apiv2.bitcoinaverage.com/convert/global?from=BTC&to=".concat(current, "&amount=").concat(amount);
  spinner.start();
  request(url, function (error, response, body) {
    try {
      spinner.stop();
      var apiResponse = JSON.parse(body);
      console.log("".concat(chalk.red(amount), " BTC to ").concat(chalk.blue(current), " = ").concat(chalk.green(apiResponse.price)));
    } catch (erroApi) {
      console.log(chalk.red('API reply with erro. Wait few minutes.'));
    }
  });
}

module.exports = BTConverter;