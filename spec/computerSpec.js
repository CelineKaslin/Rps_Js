describe ("Computer spied to return one of the random value it should play", function(){
  var computer;

  beforeEach (function(){
    computer = new Computer()
  });

  it ("The choice of the computer should return 'Rock'", function(){
    spyOn(Game, "play").andReturn('Rock');
    expect(computer.play).toEqual('Rock');
  });



});
