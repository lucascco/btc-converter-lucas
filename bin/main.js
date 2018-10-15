#!/usr/bin/env node
"use strict";

var program = require('commander');

var pkg = require('../package.json');

var converterBTC = require('./BTConverter');

program.version(pkg.version).description('Convert Bitcoin to any currency defined.').option('-C --currency <currency>', 'Currency to be converted. (Default: USD)').option('-A --amount <amount>', 'Value in Bitcoin to convert. (Default: 1)').parse(process.argv);
converterBTC(program.currency, program.amount);