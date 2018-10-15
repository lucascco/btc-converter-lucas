const request = require('request');

function BTConverter(current = 'BRL', amount = 1) {
  const url = `https://apiv2.bitcoinaverage.com/convert/global?from=BTC&to=${current}&amount=${amount}`;

  request(url, (error, response, body) => {
    try {
      const apiResponse = JSON.parse(body);
      console.log(`${amount} BTC to ${current} = ${apiResponse.price}`);
    } catch (erroApi) {
      console.log('API reply with erro. Wait few minutes.');
    }
  });
}

module.exports = BTConverter;
