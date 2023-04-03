// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.17;

/*
interface Isolution1 {
    function solution(
        uint256[2][2] calldata x, 
        uint256[2][2] calldata y
    ) external pure returns (
        uint256[2][2] memory
    );
}

*/

contract Level_1_Solution {

	  function solution(
        uint256[2][2] calldata x, 
        uint256[2][2] calldata y
    ) external pure returns (
        uint256[2][2] memory
    ){
        uint r1 = x.length; // rows of x
        uint c1 = x[0].length; // columns of x
        uint c2 = y[0].length; // columns of y


        uint256[2][2] memory result;

        for(uint i = 0; i < r1; ++i) {
            for(uint j = 0; j < c2; ++j) {
                for(uint k = 0; k < c1; ++k) {
                    result[i][j] += x[i][k] + y[k][j];
                }
            }
        }

        return result; 


      }
}