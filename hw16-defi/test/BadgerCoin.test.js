const { expect } = require('chai');
const { ethers } = require("hardhat");

// Start test block
describe('BadgerCoin', function () {
  before(async function () {
    this.BadgerCoin = await ethers.getContractFactory('BadgerCoin');
  });

  beforeEach(async function () {
    this.badgerCoin = await this.BadgerCoin.deploy();
    await this.badgerCoin.deployed();

    this.decimals = await this.badgerCoin.decimals();

    const signers = await ethers.getSigners();

    this.ownerAddress = signers[0].address;
    this.recipientAddress = signers[1].address;

    this.signerContract = this.badgerCoin.connect(signers[1]);
  });

  // Test cases
  it('Creates a token with a name', async function () {
    expect(await this.badgerCoin.name()).to.exist;
    // expect(await this.badgerCoin.name()).to.equal('BadgerCoin');
  });

   //Test That the number of decimals is 18

  it('Has a valid decimal', async function () {
    expect((await this.badgerCoin.decimals()).toString()).to.equal('18');
  })

    //Test The total supply is initially 1000000

    it('Has a valid total supply', async function () {
    const expectedSupply = ethers.utils.parseUnits('1000000', this.decimals);
    expect((await this.badgerCoin.totalSupply()).toString()).to.equal(expectedSupply);
  });

    //Test The balanceOf function returns the correct result

    it('Is able to query account balances', async function () {
    const ownerBalance = await this.badgerCoin.balanceOf(this.ownerAddress);
    expect(await this.badgerCoin.balanceOf(this.ownerAddress)).to.equal(ownerBalance);
  });

    // Test The transfer function works correctly

     it('Transfers the right amount of tokens to/from an account', async function () {
    const transferAmount = 1000;
    await expect(this.badgerCoin.transfer(this.recipientAddress, transferAmount)).to.changeTokenBalances(
        this.badgerCoin,
        [this.ownerAddress, this.recipientAddress],
        [-transferAmount, transferAmount]
      );
  });

  // Test that an error is produced if a transfer is created with an insufficient balance

      it('Error is produced if a transfer is created with an insufficient balance', async function () {
        const ownerBalance = await this.badgerCoin.balanceOf(this.ownerAddress);
        const transferAmount = ownerBalance + 1000;
    await expect(this.badgerCoin.transfer(this.recipientAddress, transferAmount)).to.changeTokenBalances(
        this.badgerCoin,
        [this.ownerAddress, this.recipientAddress],
        [-transferAmount, transferAmount]
      );
  });

});