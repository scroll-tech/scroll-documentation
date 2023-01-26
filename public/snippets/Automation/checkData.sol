function checkUpkeep(
    bytes calldata checkData
) public view returns (bool, bytes memory) {
    address wallet = abi.decode(checkData, (address));
    return (wallet.balance < 1 ether, bytes(""));
}
