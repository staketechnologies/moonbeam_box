# Plasm Truffle Plugin

This is meant to be used with the Plasm Truffle box: https://github.com/staketechnologies/plasm-box.git

The plugin is used to get you started with a local standalone Moonbeam node quickly, the following commands are available:

# Install
To use plugin, run this command in existing truffle project. Plugins must be included as `devDependancies` to execute with global command.

```bash
npm install --save-dev @plasm/plasm-truffle-plugin
```

Then setup the plugin in `truffle-config.js`
```
module.exports = {
  /* ... rest of truffle-config */

  plugins: [
    "@plasm/plasm-truffle-plugin"
  ]
}
```

# Commands

## Install
In this context, installing means downloading the Docker image of the Plasm standalone dev node (requires Docker to be installed).

```
truffle run plasm install
```

## Start
Start the standalone Plasm dev node.

```
truffle run plasm start
```

## Stop
Stop the standalone Plasm dev node. This will remove the container, thus purging the chain.

```
truffle run plasm stop
```

## Pause
Pause the standalone Plasm dev node.

```
truffle run plasm pause
```

## Unpause
Unpause the standalone Plasm dev node.

```
truffle run plasm unpause
```

## Status
Shows the status of the standalone Plasm dev node.

```
truffle run plasm status
```

# Contact Us
We welcome any feedback, so feel free to reach out through our official [Discord Channel](https://discord.gg/9Ajz2aCmYg).


# Credits

This repo extends from a fork of [moonbeam_truffle_plugin](https://github.com/albertov19/moonbeam_truffle_plugin).
