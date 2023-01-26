// Assumes this contract owns link
// You must estimate LINK cost yourself based on the gas lane and limits.
// 1_000_000_000_000_000_000 = 1 LINK
function fundAndRequestRandomWords(uint256 amount) external onlyOwner {
    LINKTOKEN.transferAndCall(
        address(COORDINATOR),
        amount,
        abi.encode(s_subscriptionId)
    );
    // Will revert if subscription is not set and funded.
    s_requestId = COORDINATOR.requestRandomWords(
        keyHash,
        s_subscriptionId,
        requestConfirmations,
        callbackGasLimit,
        numWords
    );
}
