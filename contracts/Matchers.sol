// SPDX-License-Identifier: MIT
pragma solidity >=0.8.4;

contract Matchers {
    function doRevert() public pure {
        revert("Revert cause");
    }
}
