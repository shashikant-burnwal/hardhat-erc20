/** @type import('hardhat/config').HardhatUserConfig */

require('@nomiclabs/hardhat-ethers');
require('@nomiclabs/hardhat-etherscan');
require('hardhat-gas-reporter');
require('solidity-coverage');

require('@nomicfoundation/hardhat-chai-matchers');
require('@nomiclabs/hardhat-truffle5');
require('hardhat-deploy');
require('dotenv').config();

const RINKEBY_RPC_URL = process.env.RINKEBY_RPC_URL;
const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;
const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY;

module.exports = {
  defaultNetwork: 'hardhat',
  networks: {
    hardhat: {
      chainId: 31337,
    },
    localhost: {
      chainId: 31337,
    },

    rinkeby: {
      url: RINKEBY_RPC_URL,
      accounts: [PRIVATE_KEY],
      saveDeployments: true,
      chainId: 4,
    },

    goerli: {
      url: GOERLI_RPC_URL,
      accounts: [PRIVATE_KEY],
      saveDeployments: true,
      chainId: 5,
    },
  },
  etherscan: {
    apiKey: {
      rinkeby: ETHERSCAN_API_KEY,
      goerli: ETHERSCAN_API_KEY,
    },
  },
  gasReporter: {
    enabled: false,
    currency: 'USD',
    outputFile: 'gas-report.txt',
    noColors: true,
    coinmarketcap: COINMARKETCAP_API_KEY,
  },

  contractSizer: {
    runOnCompile: false,
    only: ['OurToken'],
  },

  namedAccounts: {
    deployer: {
      default: 0,
      1: 0,
    },
  },
  solidity: { compilers: [{ version: '0.8.7' }, { version: '0.4.24' }] },
  mocha: { timeout: 500000 }, //500 sec max for running test
};
