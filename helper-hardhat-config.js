const networkConfig = {
  31337: { name: 'localhost' || 'hardhat' },
  42: {
    name: 'kovan',
    ethUsdPriceFeed: '0x9326BFA02ADD2366b30bacB125260Af641031331',
  },

  5: {
    name: 'goerli',
    ethUsdPriceFeed: '0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e',
  },
  4: {
    name: 'rinkeby',
    ethUsdPriceFeed: '0x8A753747A1Fa494EC906cE90E9f37563A8AF630e',
  },
};

const INITIAL_SUPPLY = '100000000000000000000000';

const developmentChains = ['hardhat', 'localhost'];

module.exports = {
  networkConfig,
  developmentChains,
  INITIAL_SUPPLY,
};
