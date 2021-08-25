class TicTacToe {
    constructor() {
        this.field = [[null, null, null],[null, null, null],[null, null, null]];
        this.currentPlayerSymbol = 'x';
        this.noMoreTurnsField = false;
        this.winner = null;        
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayerSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.winner === null){

            if (this.field[rowIndex][columnIndex] === null){
                this.field[rowIndex][columnIndex] = this.currentPlayerSymbol;
                if (this.currentPlayerSymbol == 'x') {
                    this.currentPlayerSymbol = 'o';
                } else if (this.currentPlayerSymbol == 'o'){
                    this.currentPlayerSymbol = 'x';
                } else {
                    throw new Error('invalid current player sympbol');
                }
                
                // check for avalable turn
                if (this.field.reduce((arr, curr) => arr.concat(curr), []).filter( val => val===null).length == 0) this.noMoreTurnsField = true;
                
                // check for winner
                if ((this.field[0][0] === this.field[0][1]) && (this.field[0][0] === this.field[0][2])) this.winner = this.field[0][0];
                if ((this.field[1][0] === this.field[1][1]) && (this.field[1][0] === this.field[1][2])) this.winner = this.field[1][0];
                if ((this.field[2][0] === this.field[2][1]) && (this.field[2][0] === this.field[2][2])) this.winner = this.field[2][0];
                
                if ((this.field[0][0] === this.field[1][0]) && (this.field[0][0] === this.field[2][0])) this.winner = this.field[0][0];
                if ((this.field[0][1] === this.field[1][1]) && (this.field[0][1] === this.field[2][1])) this.winner = this.field[0][1];
                if ((this.field[0][2] === this.field[1][2]) && (this.field[0][2] === this.field[2][2])) this.winner = this.field[0][2];
                
                if ((this.field[0][0] === this.field[1][1]) && (this.field[0][0] === this.field[2][2])) this.winner = this.field[0][0];
                if ((this.field[2][0] === this.field[1][1]) && (this.field[2][0] === this.field[0][2])) this.winner = this.field[2][0];
            }
        }
    }
        
        isFinished() {
            return this.noMoreTurnsField || this.winner !== null;
        }
        
        getWinner() {
            return this.winner;
        }
        
        noMoreTurns() {
            return this.noMoreTurnsField;
    }

    isDraw() {
        return this.noMoreTurnsField && this.winner === null;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.field[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
