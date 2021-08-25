const TicTacToe = require('../src/tic-tac-toe.js');

game = new TicTacToe();

console.log(game.getCurrentPlayerSymbol());

// console.log(game.getFieldValue(0, 1));
// console.log(game.getFieldValue(2, 1));
// console.log(game.getCurrentPlayerSymbol());
// game.nextTurn(0, 1)
// console.log(game.getCurrentPlayerSymbol());

debugger
game.nextTurn(0, 1)  // x
game.nextTurn(1, 2)  // o
game.nextTurn(1, 1)  // x
game.nextTurn(2, 1)  // o
game.nextTurn(1, 0)  // x
game.nextTurn(0, 0)  // o
game.nextTurn(2, 2)  // x
game.nextTurn(0, 2)  // o
game.nextTurn(2, 0)  // x

 console.log(game.noMoreTurns());

 
 console.log(game.noMoreTurns());
 
 
debugger
console.log(game.isDraw());
console.log(game.getWinner());