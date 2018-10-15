"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var request = require('request-promise-native');

var chalk = require('chalk');

var ora = require('ora');

require("@babel/polyfill");

var spinner = ora({
  text: 'Retriving Values',
  color: 'yellow'
});

function BTConverter() {
  return _BTConverter.apply(this, arguments);
}

function _BTConverter() {
  _BTConverter = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    var current,
        amount,
        url,
        data,
        apiResponse,
        _args = arguments;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            current = _args.length > 0 && _args[0] !== undefined ? _args[0] : 'BRL';
            amount = _args.length > 1 && _args[1] !== undefined ? _args[1] : 1;
            url = "https://apiv2.bitcoinaverage.com/convert/global?from=BTC&to=".concat(current, "&amount=").concat(amount);
            _context.prev = 3;
            spinner.start();
            _context.next = 7;
            return request(url);

          case 7:
            data = _context.sent;
            apiResponse = JSON.parse(data);
            console.info("".concat(chalk.red(amount), " BTC to ").concat(chalk.blue(current), " = ").concat(chalk.green(apiResponse.price)));
            _context.next = 15;
            break;

          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](3);
            console.info(chalk.red('API reply with erro. Wait few minutes.'));

          case 15:
            _context.prev = 15;
            spinner.stop();
            return _context.finish(15);

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[3, 12, 15, 18]]);
  }));
  return _BTConverter.apply(this, arguments);
}

module.exports = BTConverter;