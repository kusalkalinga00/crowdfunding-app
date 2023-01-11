/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.9",
    defaultNetwork: "bsctestnet",
    networks: {
      hardhat: {},
      goerli: {
        url: "https://rpc.ankr.com/eth_goerli",
        account: [`0x${process.env.PRIVATE_KEY}`],
      },
      bsctestnet: {
        //url: "https://data-seed-prebsc-2-s3.binance.org:8545",
        url: "https://rpc.ankr.com/bsc_testnet_chapel",
        account: [`0x${process.env.PRIVATE_KEY}`],
      },
    },
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
