class Game {

  rock(computer_choice) {
    switch (computer_choice){
      case ('Rock'): return 'Oups, it is a draw!'
      case ('Scissors'): return 'Well done, you won!'
      case ('Paper'): return 'Sadly, you loose!'
    };
  };
};
