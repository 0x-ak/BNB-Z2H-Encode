// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

contract Store {

    struct payments {
        bool valid;
        address sender;
        uint8 paymentType;
        bool checked;
        address receiver;
        uint256 finalAmount;
        uint256 amount;
        uint256 initialAmount;
    }
    uint8 index;
    bool flag1;
    address admin;
    bool flag2;
    bool flag3;
    address admin2;
    uint256 public number;
    mapping (address=>uint256) balances;
    payments[8] topPayments;


    constructor(){

    }


    function setNumber(uint256 newNumber) public {
        number = newNumber;
    }

    function increment() public {
        number++;
    }
}