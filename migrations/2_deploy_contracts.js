const ZopoCoin = artifacts.require('ZopoCoin');

module.exports = function(deployer) {

  const name = 'ZopoCoin';
  const symbol = "ZOPO";
  const decimals = 18;

  deployer.deploy(ZopoCoin, name, symbol, decimals);

};
