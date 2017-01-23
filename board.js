const Board = () => {
  this.display = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];
  this.insert = (player, x, y) => {
    if (player === 1) {
      this.map[x][y] = 'X';
    } else {
      this.map[x][y] = 'O';
    }
  };
  this.checkRows = (piece) => {
    let count = 0;
    for (let i = 0; i < this.display.length; i++) {
      let row = this.display[i];
      for (let j = 0; j < row.length; j++) {
        if (row[j] === piece) {
          count++;
        }
      }
      if (count === 3) {
        return piece === 'X' ? 1 : 2;
      } else {
        count = 0;
      }
    }
  };
  this.checkCols = (piece) => {
    let count = 0;
    let index = 0;
    for (let i = 0; i < this.display.length; i++) {
      for (let j = 0; j < this.display.length; j++) {
        let col = this.display[j][index];
      }
    }
  };
};

export default Board;
