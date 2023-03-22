// contracts/FunToken.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import { ERC20 } from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract BadgerCoin is ERC20 {

    // Define the supply of BadgerCoin: 1,000,000 with 18 decimals
    uint256 constant initialSupply = 1000000 * (10**18);

    // Constructor will be called on contract creation
    constructor() ERC20("BadgerCoin", "BDG") {
        _mint(msg.sender, initialSupply);
    }
}