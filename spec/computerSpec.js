describe ("Computer spied to return one of the random value it should play", function(){
  var computer;

  beforeEach (function(){
    computer = new Computer();
  });

  it ("The choice of the computer should return 'Rock'", function(){
    spyOn(Math, 'random').and.returnValue(0);
    expect(computer.play()).toEqual('Rock');
  });



});
