function checkUpkeep(
    bytes calldata checkData
) public view returns (bool, bytes memory) {
    return (block.number > threshold, bytes(""));
}

function performUpkeep(bytes calldata performData) external {
    require(block.number > threshold, "condition not met");
    doSomething();
}
