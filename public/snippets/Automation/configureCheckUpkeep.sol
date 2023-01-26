address[] wallets;

function checkUpkeep6(bytes calldata checkData)
  public
  view
  returns (bool, bytes memory)
{
  // use start / end incidies to break up the work
  (uint256 start, uint256 end) = abi.decode(checkData, (uint256, uint256));
  for (uint256 i = start; i < end; i++) {
    if (wallets[i].balance < 1 ether) {
      return (true, abi.encode(wallets[i]));
    }
  }
  return (false, bytes(""));
}