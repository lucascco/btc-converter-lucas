#!/usr/bin/env node

var program = require('commander');
const pkg = require('../package.json');


program
  .version(pkg.version)
  .description('Convert Bitcoin to any currency defined.')
  .option('-C', '--currency <currency>')
  .option('-A', '--amount <amount>')
  .parse(process.argv);
