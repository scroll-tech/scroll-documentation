uint256[] numbers;
bool isSorted;

function checkUpkeep(bytes calldata) public view returns(bool, bytes memory) {
  if (isSorted) {
    return (false, bytes(""));
  }
  return (true, sort(numbers)); // sorting is usually expensive!
}

function performUpkeep(bytes calldata performData) external {
  numbers = abi.decode(performData, (uint256[]));
  isSorted = true;
}