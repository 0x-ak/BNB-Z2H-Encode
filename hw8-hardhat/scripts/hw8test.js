// scripts/hw8test.js
const { ethers } = require("hardhat");

async function main() {
    console.log('Getting the badger coin contract...');
    const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';
    const badgerCoin = await ethers.getContractAt('BadgerCoin', contractAddress);

    // name()
    console.log('Querying token name...');
    const name = await badgerCoin.name();
    console.log(`Token Name: ${name}\n`);

    //Test The total supply is initially 1000000

    //Test That the number of decimals is 18

    //Test The balanceOf function returns the correct result


    // Test The transfer function works correctly

    
    // Test that an error is produced if a transfer is created with an insufficient balance


}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exitCode = 1;
    });