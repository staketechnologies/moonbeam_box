const HDWalletProvider = require("truffle-hdwallet-provider")
// Standalone Development Node Private Key
const privateKeyDev =
  "60ed0dd24087f00faea4e2b556c74ebfa2f0e705f8169733b01530ce4c619883";

module.exports = {
  networks: {
    dusty: {
      provider: () => {
        return new HDWalletProvider([privateKeyDev], 'http://127.0.0.1:9933')
      },
      network_id: "*",       // Ropsten's id
      gas: 5500000,        // Ropsten has a lower block limit than mainnet
      confirmations: 2,    // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    },
  },

  plugins: ["@plasm/plasm-truffle-plugin","moonbeam-truffle-plugin"],
};
