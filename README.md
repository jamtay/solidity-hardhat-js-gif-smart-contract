# Solidity smart contract using hardhat

This Solidity smart contract sends transactions from one etherum wallet to another but includes an extra keyword that can be used

# Setup

- Get test ethereum for Ropsten network for your metamask wallet, e.g https://faucet.egorfine.com/. As you will need gas fees to setup the contract
- Setup account and create app for Ropsten test network at https://www.alchemy.com/
- Click view details of newly created app and set the environment variable `ROPSTEN_ADDRESS=<HTTP From view key button>`. This is used in `hardhat.config.js`
- Set private key in hardhat. In Metamask go to your account, click the 3 dots then click export private key. Then set the environment variable `META_PRIVATE_KEY=<Your metamask private key>`
- Run `npx hardhat run scripts/deploy.js --network ropsten` to deploy the smart contract to the test network
- Copy the address printed to the console and use as the contract address in the client app. E.g https://github.com/jamtay/web3-react-tailwind-typescript-eth-client
- Copy `artifacts/contracts/Transactions.sol/Transactions.json` to the client application src/utils/Transactions.json at this location https://github.com/jamtay/web3-react-tailwind-typescript-eth-client/tree/master/src/utils

# Initial tutorial code

- https://github.com/adrianhajdin/project_web3.0

# Linked frontend webapp

- https://github.com/jamtay/web3-react-tailwind-typescript-eth-client
