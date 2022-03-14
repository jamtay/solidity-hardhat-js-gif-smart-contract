require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: process.env.ROPSTEN_ADDRESS,
      accounts: [process.env.META_PRIVATE_KEY],
    },
  },
};