describe("Game", function(){

  var game;

  beforeEach(function() {
    game = new Game();
  });

  describe("rock function", function () {
    it("Should return the draw when user and computer choose to play 'Rock'", function() {
      expect(game.rock('Rock')).toEqual('Oups, it is a draw!')
    });
    it("Should return the user as the winner when they choose 'Rock' and the computer choose to play 'Scissors'", function() {
      expect(game.rock('Scissors')).toEqual('Well done, you won!')
    });
    it("Should return the user as the looser when they choose 'Rock' and the computer choose to play 'Paper'", function() {
      expect(game.rock('Paper')).toEqual('Sadly, you loose!')
    });
  });

  describe("paper function", function () {
    it("Should return the draw when user and computer choose to play 'Paper'", function() {
      expect(game.paper('Paper')).toEqual('Oups, it is a draw!')
    });
    it("Should return the user as the winner when they choose 'Paper' and the computer choose to play 'Rock'", function() {
      expect(game.paper('Rock')).toEqual('Well done, you won!')
    });
    it("Should return the user as the looser when they choose 'Paper' and the computer choose to play 'Scissors'", function() {
      expect(game.paper('Scissors')).toEqual('Sadly, you loose!')
    });
  });


});
