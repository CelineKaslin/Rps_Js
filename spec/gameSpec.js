describe("Game", function(){

  var game;

  beforEach(function() {
    game = new Game();
  });

  describe("rock function", function (){
    it("should return the equality", function() {
      expect(game.rock('rock')).toEqual('Oups, it is a draw!')
    });
  });



});
