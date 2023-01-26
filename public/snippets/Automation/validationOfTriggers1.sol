function checkUpkeep(
    bytes calldata checkData
) public view returns (bool, bytes memory) {
    return (block.number > threshold, bytes(""));
}

function performUpkeep(bytes calldata performData) external {
    doSomething(); // runs even if the checkUpkeep condition isn't satisfied
}
