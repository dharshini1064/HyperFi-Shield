// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract InvestmentContract {
    address public owner;
    mapping(address => bool) public isKYCApproved;
    mapping(address => uint256) public investments;

    event InvestmentMade(address indexed investor, uint256 amount);

    modifier onlyOwner() {
        require(msg.sender == owner, "Not the contract owner");
        _;
    }

    modifier kycApproved() {
        require(isKYCApproved[msg.sender], "KYC not approved");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function approveKYC(address _investor) external onlyOwner {
        isKYCApproved[_investor] = true;
    }

    function revokeKYC(address _investor) external onlyOwner {
        isKYCApproved[_investor] = false;
    }

    function invest() external payable kycApproved {
        require(msg.value > 0, "Investment amount must be greater than 0");
        
        // Simulate investment logic (for example, increase the investment balance for the investor)
        investments[msg.sender] += msg.value;

        emit InvestmentMade(msg.sender, msg.value);
    }

    function withdraw() external {
        // Simulate withdrawal logic (for example, transfer funds back to the investor)
        uint256 amountToWithdraw = investments[msg.sender];
        require(amountToWithdraw > 0, "No funds to withdraw");

        investments[msg.sender] = 0;
        payable(msg.sender).transfer(amountToWithdraw);
    }

    receive() external payable {
        // Fallback function to accept Ether
    }
}
