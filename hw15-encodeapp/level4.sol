// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.17;

/*
interface Isolution4 {
    function solution(uint256 value) external;
}

*/

contract Level_4_Solution {

struct StoreIt {
              uint256 slot1; // Storage at slot 0
              uint256 slot2; // Storage at slot 1
              uint256 slot3; // Storage at slot 2
          }


	  function solution(uint256 value) external {

       
          //saves it to memory slot 3
          StoreIt memory s = StoreIt(0, 0,value);
           
        assembly {
             
            mstore(0x00, s)           // store in memory at 0x00

          }
         
      }
}