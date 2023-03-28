// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract BadgerNFT is ERC721 {
      string private baseURI = "ipfs://bafkreie7pa2j7hwzlojzwhfvpixcnhizjgvfcl6g25vef6gjyuunk2rzri";


    constructor() ERC721("BadgerNFT", "BDG") {}

    function _requireMinted(uint256 tokenId) internal override  view virtual {
        require(_exists(tokenId), "ERC721: invalid token ID");
    }

    function tokenURI(uint256 tokenId) public view override returns(string memory) {
        return string(abi.encodePacked(baseURI));
    }

    function _mintToken(address to, uint256 tokenId) external {
        _mint(to, tokenId);
    }

    function _selfMintToken(uint tokenId) public {
        _mint(msg.sender, tokenId);
    }

  
}