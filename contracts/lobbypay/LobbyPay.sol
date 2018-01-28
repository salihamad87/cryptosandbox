pragma solidity ^0.4.2;

contract LobbyPay {
    address[] public AssociaAccount;
    address[0] = "0x2dEd99fc1980845D8fdbfD4e4c15dec935795EaA"

    function LobbyPay() public {
      owner = msg.sender;
    }

    function kill() public {
      if(msg.sender == owner)
        selfdestruct(owner);
    }
}
