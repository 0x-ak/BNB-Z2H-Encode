// scripts/interact.js
const { ethers } = require("hardhat");

async function main() {
    console.log('Getting the badger coin contract...');
    const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';
    const badgerCoin = await ethers.getContractAt('BadgerCoin', contractAddress);

    // name()
  console.log('Querying token name...');
  const name = await badgerCoin.name();
  console.log(`Token Name: ${name}\n`);

  // symbol()
    console.log('Querying token symbol...');
    const symbol = await badgerCoin.symbol();
    console.log(`Token Symbol: ${symbol}\n`);

}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exitCode = 1;
    });