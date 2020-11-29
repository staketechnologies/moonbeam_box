# ![Plasm](box-img-sm.png)

# Plasm Truffle Box

A beta version of the Plasm Truffle Box. 


## Getting started

To get started, clone this repository

```
git clone https://github.com/staketechnologies/plasm_box
```

Afterwards, install all the dependencies:

```
npm install
```
The dependencies installed are the following:

-  EthereumJS wallet: a lightweight wallet implementation.
-  Minimist: TODO
-  Web3 Provider Engine: tool for composing custom Web3 providers.
-  Plasm Truffle Plugin: tool to easily create your own standalone Plasm dev node for development (uses Docker).

## Networks

Plasm Truffle Box is pre-configured with two networks: standalone and TestNet. To deploy in the standalone network please check the Plasm Truffle Pluggin section to install and start your own local node.

```
truffle migrate --network development
```

```
truffle migrate --network testnet
```

_Note: if you have Truffle installed globally, you can replace `truffle` for `truffle`._

## Plasm Truffle Plugin

The Plugin is used to get you started with a local standalone Plasm dev node quickly, the following commands are available:

### Install
In this context, installing means downloading the Docker image of the Plasm standalone dev node (requires Docker to be installed).

```
truffle run plasm install
```

### Start
Start the standalone Plasm dev node.

```
truffle run plasm start
```

### Stop
Stop the standalone Plasm dev node. This will remove the container, thus purging the chain.

```
truffle run plasm stop
```

### Pause
Pause the standalone Plasm dev node.

```
truffle run plasm pause
```

### Unpause
Unpause the standalone Plasm dev node.

```
truffle run plasm unpause
```

### Status
Shows the status of the standalone Plasm dev node.

```
truffle run plasm status
```

## Contact Us
We welcome any feedback, so feel free to reach out through our official [Discord Channel](https://discord.gg/9Ajz2aCmYg).
