require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    opencampus: {
      url: process.env.API_URL,
      chainId: 6556476,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};
