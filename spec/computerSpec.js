describe ("Computer spied to return one of the random value it should play", function(){
  var computer;

  beforeEach (function(){
    computer = new Computer();
  });

  it ("The choice of the computer should return 'Rock'", function(){
    spyOn(Math, 'floor').and.returnValue(0);
    expect(computer.play()).toEqual('Rock');
  });

  it ("The choice of the computer should return 'Scissors'", function(){
    spyOn(Math, 'floor').and.returnValue(1);
    expect(computer.play()).toEqual('Scissors');
  })

  it ("The choice of the computer should return 'Paper'", function(){
    spyOn(Math, 'floor').and.returnValue(2);
    expect(computer.play()).toEqual('Paper');
  });

});
