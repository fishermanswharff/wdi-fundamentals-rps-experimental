describe("#getPlayerMove", function() {
  describe("when a move is given as a parameter", function() {
    it("should return that move", function(){
      expect(getPlayerMove('rock')).toEqual('rock');
      expect(getPlayerMove('paper')).toEqual('paper');
      expect(getPlayerMove('scissors')).toEqual('scissors');
    });
  });
});

describe("#getComputerMove", function() {
  describe("when a move is given as a parameter", function() {
    it("should return that move", function(){
      expect(getComputerMove('rock')).toEqual('rock');
      expect(getComputerMove('paper')).toEqual('paper');
      expect(getComputerMove('scissors')).toEqual('scissors');
    });
  });
});

describe("#getWinner", function() {
  var playerMove;
  describe("when the player picks rock", function() {
    beforeEach(function(){
      playerMove = "rock";
    });
    it("should be a tie if the computer picks rock", function() {
      expect(getWinner(playerMove,'rock')).toEqual('tie');
    });
    it("should be a computer win if the computer picks paper", function() {
      expect(getWinner(playerMove,'paper')).toEqual('computer');
    });
    it("should be a player win if the computer picks scissors", function() {
      expect(getWinner(playerMove,'scissors')).toEqual('player');
    });
  });
  describe("when the player picks paper", function() {
    beforeEach(function(){
      playerMove = "paper";
    });
    it("should be a player win if the computer picks rock", function() {
      expect(getWinner(playerMove,'rock')).toEqual('player');
    });
    it("should be a tie if the computer picks paper", function() {
      expect(getWinner(playerMove,'paper')).toEqual('tie');
    });
    it("should be a computer win if the computer picks scissors", function() {
      expect(getWinner(playerMove,'scissors')).toEqual('computer');
    });
  });
  describe("when the player picks scissors", function() {
    beforeEach(function(){
      playerMove = "scissors";
    });
    it("should be a computer win if the computer picks rock", function() {
      expect(getWinner(playerMove,'rock')).toEqual('computer');
    });
    it("should be a player win if the computer picks paper", function() {
      expect(getWinner(playerMove,'paper')).toEqual('player');
    });
    it("should be a tie if the computer picks scissors", function() {
      expect(getWinner(playerMove,'scissors')).toEqual('tie');
    });
  });
});

describe("#playToFive", function() {
  it ("should end the game once either the player or the computer has won 5 times.", function(){
    expect(playToFive()[0] == 5 || playToFive()[1] == 5).toEqual(true);
  });
});
