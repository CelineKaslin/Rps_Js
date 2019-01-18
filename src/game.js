class Game {

  rock(computer_choice) {
    switch (computer_choice){
      case ('Rock'): return 'Oups, it is a draw!'
      case ('Scissors'): return 'Well done, you won!'
      case ('Paper'): return 'Sadly, you loose!'
    };
  };
  paper(computer_choice) {
    switch (computer_choice){
      case ('Paper'): return 'Oups, it is a draw!'
      case ('Rock'): return 'Well done, you won!'
      case ('Scissors'): return 'Sadly, you loose!'
    };
  };
};
