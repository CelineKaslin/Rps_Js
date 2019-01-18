class Computer {

  play() {
    let choices = ['Rock', 'Scissors', 'Paper']
    console.log(choices.length);
    let randomChoice = Math.floor(Math.random() * choices.length);
    let randomPlay = choices[randomChoice];
    return randomPlay;
  };
};
