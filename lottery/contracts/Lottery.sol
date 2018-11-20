pragma solidity ^0.4.17;

contract Lottery{
  address public manager;
  address[] public players;

  function Lottery() public{
    manager = msg.sender;
  }

  function enter() public payable {
    require(msg.value > .01 ether);
    players.push(msg.sender);
  }

// can't be trusted random generation
  function random() private view returns (uint){
    return uint(sha3(block.difficulty, now, players));
  }

  function pickWinner() public restricted {
    uint index = random() % players.length;
    players[index].transfer(this.balance);
    players = new address[](0);
  }

// no need for repeating require everywhere
// _ behaves like a placeholder for the function that uses the modifier
  modifier restricted() {
    require(msg.sender == manager);
    _;
  }

  function getPlayers() public view returns (address[]){
    return players;
  }
}
