// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.17;

/*
  interface Isolution2 {
  function solution(uint256[10] calldata unsortedArray) external returns (uint256[10] memory sortedArray);
}

*/

contract Level_2_Solution {

	  function solution(uint256[10] calldata unsortedArray) external returns (uint256[10] memory sortedArray){

          uint256[10] memory result = unsortedArray;
          //sorts an array in ascending order
         uint length = result.length;
            for (uint i = 1; i < length; i++) {
                uint key = result[i];
                int j = int(i) - 1;
                while ((int(j) >= 0) && (result[uint(j)] > key)) {
                    result[uint(j + 1)] = result[uint(j)];
                    j--;
                }
                result[uint(j + 1)] = key;
            }

        return result; 


      }
}