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

    // decimals()
    console.log('Querying decimals...');
    const decimals = await badgerCoin.decimals();
    console.log(`Token Decimals: ${decimals}\n`);

    // totalSupply()
    console.log('Querying token supply...');
    const totalSupply = await badgerCoin.totalSupply();
    console.log(`Total Supply including all decimals: ${totalSupply}`);
    console.log(`Total supply including all decimals comma separated: ${ethers.utils.commify(totalSupply)}`);
    console.log(`Total Supply in BDG: ${ethers.utils.formatUnits(totalSupply, decimals)}\n`);

    // balanceOf(address account)
    console.log('Getting the balance of contract owner...');
    const signers = await ethers.getSigners();
    const ownerAddress = signers[0].address;
    let ownerBalance = await badgerCoin.balanceOf(ownerAddress);
    console.log(`Contract owner at ${ownerAddress} has a ${symbol} balance of ${ethers.utils.formatUnits(ownerBalance, decimals)}\n`);


}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exitCode = 1;
    });