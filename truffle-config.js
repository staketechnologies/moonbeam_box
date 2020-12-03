const PrivateKeyProvider = require("./private-provider");
// Standalone Development Node Private Key
const privateKeyDev =
  "60ed0dd24087f00faea4e2b556c74ebfa2f0e705f8169733b01530ce4c619883";
// Moonbase Alpha Private Key --> Please change this to your own Private Key with funds
const privateKeyMoonbase =
  "d2d0ac4e9a8d6bff910a529477f7ea76c457e7f9e1e7b04d7d85d9cd7c63c1e6";

module.exports = {
  networks: {
    dev: {
      provider: () => {
        if (!privateKeyDev.trim()) {
          throw new Error(
            "Please enter a private key with funds, you can use the default one"
          );
        }
        return new PrivateKeyProvider(privateKeyDev, "http://localhost:9933/", 80);
      },
      network_id: 80,
    },
    moonbase: {
      provider: () => {
        if (!privateKeyMoonbase.trim()) {
          throw new Error(
            "Please enter a private key with funds to send transactions to TestNet"
          );
        }
        if (privateKeyDev == privateKeyMoonbase) {
          throw new Error(
            "Please change the private key used for Moonbase to your own with funds"
          );
        }
        return new PrivateKeyProvider(
          privateKeyMoonbase,
          "https://rpc.testnet.moonbeam.network",
          1287
        );
      },
      network_id: 1287,
    },
  },

  plugins: ["@plasm/plasm-truffle-plugin","moonbeam-truffle-plugin"],
};
