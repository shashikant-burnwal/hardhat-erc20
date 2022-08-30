const { network } = require('hardhat');

const {
  INITIAL_SUPPLY,
  developmentChains,
} = require('../helper-hardhat-config');
const { verify } = require('../helper-functions');
module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deployer } = await getNamedAccounts();
  console.log('Deployer: ', deployer);
  const { deploy, log } = deployments;

  const ourToken = await deploy('OurToken', {
    from: deployer,
    args: [INITIAL_SUPPLY],
    log: true,
    waitConfirmations: 1,
  });

  log(`ourToken deployed at ${ourToken.address}`);

  if (
    !developmentChains.includes(network.name) &&
    process.env.ETHERSCAN_API_KEY
  ) {
    await verify(ourToken.address, [INITIAL_SUPPLY]);
  }
};

module.exports.tags = ['all', 'token'];
