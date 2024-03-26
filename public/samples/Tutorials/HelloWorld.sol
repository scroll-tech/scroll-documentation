// SPDX-License-Identifier: MIT

pragma solidity 0.8.7;

/**
 * THIS IS AN EXAMPLE CONTRACT THAT USES UN-AUDITED CODE.
 * DO NOT USE THIS CODE IN PRODUCTION.
 */

contract HelloWorld {
    string public message;
/**
    * @dev Constructor that sets the initial message.
    * @param initialMessage The initial message to be stored in the contract.
*/
    constructor(string memory initialMessage) {
        message = initialMessage;
    }
/**
     * @dev Updates the message stored in the contract.
     * @param newMessage The new message to replace the current one.
*/
    function updateMessage(string memory newMessage) public {
        message = newMessage;
    }
/**
     * @dev Retrieves the current message stored in the contract.
     * @return The current message.
*/
    function getMessage() public view returns (string memory) {
        return message;
    }
}
