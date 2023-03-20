//const { ethers } = require("ethers");

(async function () {
// Connect web3
const provider = new ethers.providers.Web3Provider(window.ethereum);

console.log("Connected to Wallet");

const accounts = await provider.listAccounts();

 console.log(`First Account: ${accounts[0]}`);
})();
