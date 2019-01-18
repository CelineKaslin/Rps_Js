
function controller(input) {

  let computer = new Computer();
  let player = new Game();

  if (input === 'rock') {
    document.getElementById("display").innerHTML = player.rock(computer.play());
  } else if (input === 'paper'){
    document.getElementById("display").innerHTML = player.paper(computer.play());
  } else {
    document.getElementById("display").innerHTML = player.scissors(computer.play());
  };
};
