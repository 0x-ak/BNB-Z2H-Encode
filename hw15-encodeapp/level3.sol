// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.17;

/*
interface Isolution3 {
    function solution(address addr) external view 
    returns (uint256 codeSize);
}

*/

contract Level_3_Solution {

	  function solution(address addr) external view returns (uint256 codeSize){

          uint256 result ;
          //write a function that takes an address and returns the codeSize of that address as a uint256.
             // retrieve the size of the code, this needs assembly
            
          assembly {
                result := extcodesize(addr)
        
          }
         
        return result; 


      }
}