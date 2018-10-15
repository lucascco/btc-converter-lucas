const request = require('request');

function BTConverter(current = 'BRL', amount = 1) {
  let url = `https://apiv2.bitcoinaverage.com/convert/global?from=BTC&to=${current}&amount=${amount}`;

  request(url, (error, response, body) => {
    try {
      let apiResponse = JSON.parse(body);
      console.log(`${amount} BTC to ${current} = ${apiResponse.price}`);
    } catch (error) {
      console.log('API reply with erro. Wait few minutes.');
      return error;
    }
  });
}

module.exports = BTConverter;
