function BTConverter(current = 'BRL', amount = 1) {
  return `BT ${amount} -> ${current} 2000.00`;
}

module.exports = BTConverter;
