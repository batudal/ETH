import Web3 from 'web3';

let web3;

// see if we're running in the browser
if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  // we are in the browser and metamask is running
  web3 = new Web3(window.web3.currentProvider);
} else {
  // we are on the server or the user is not running metamask
  // we use infura to connect to rinkeby
  const provider = new Web3.providers.HttpProvider(
    'https://rinkeby.infura.io/v3/1902ddd59626442189a5325cd46ad2e8'
  );
  web3 = new Web3(provider);
}

export default web3;
