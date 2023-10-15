import "./styles.css";

const chessboard = [
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
];

class Square {
  constructor(
    coord,
    highestLeft = [coord[0] - 2, coord[1] - 1],
    highLeft = [coord[0] - 1, coord[1] - 2],
    highestRight = [coord[0] - 2, coord[1] + 1],
    highRight = [coord[0] - 1, coord[1] + 2],
    lowLeft = [coord[0] + 1, coord[1] - 2],
    lowestLeft = [coord[0] + 2, coord[1] - 1],
    lowRight = [coord[0] + 1, coord[1] + 2],
    lowestRight = [coord[0] + 2, coord[1] + 1]
  ) {
    this.coord = coord; // Calculate possible squares the knight can move from current position
    if (coord[0] >= 2 && coord[1] >= 1) {
      this.highestLeft = highestLeft;
    } else {
      this.highestLeft = null;
    }
    if (coord[0] >= 1 && coord[1] >= 2) {
      this.highLeft = highLeft;
    } else {
      this.highLeft = null;
    }
    if (coord[0] >= 2 && coord[1] <= 6) {
      this.highestRight = highestRight;
    } else {
      this.highestRight = null;
    }
    if (coord[0] >= 1 && coord[1] <= 5) {
      this.highRight = highRight;
    } else {
      this.highRight = null;
    }
    if (coord[0] <= 6 && coord[1] >= 2) {
      this.lowLeft = lowLeft;
    } else {
      this.lowLeft = null;
    }
    if (coord[0] <= 5 && coord[1] >= 1) {
      this.lowestLeft = lowestLeft;
    } else {
      this.lowestLeft = null;
    }
    if (coord[0] <= 6 && coord[1] <= 5) {
      this.lowRight = lowRight;
    } else {
      this.lowRight = null;
    }
    if (coord[0] <= 5 && coord[1] <= 6) {
      this.lowestRight = lowestRight;
    } else {
      this.lowestRight = null;
    }
  }
}

for (let i = 0; i < 8; i++) {
  // Populate chessboard (2d Array) with Square objects
  for (let j = 0; j < 8; j++) {
    const newSquare = new Square([i, j]);
    chessboard[i][j] = newSquare;
  }
}

function knightMoves(startingSquare, endSquare) {
  const queue = []; // Using array as a queue is much slower. Queues have a O(1) time complexity whereas arrays have a O(n) time complexity
  const path = [];
  const visited = new Set();
  queue.unshift(startingSquare);
  while (queue.length > 0) {
    const currentSquare = queue[queue.length - 1];
    if (!visited.has(currentSquare)) {
      path.push(currentSquare);

      if (currentSquare.coord === endSquare.coord) {
        return path;
      }
      if (currentSquare.highestLeft) {
        const thisSquare =
          chessboard[currentSquare.highestLeft[0]][
            currentSquare.highestLeft[1]
          ];
        queue.unshift(thisSquare);
      }
      if (currentSquare.highestRight) {
        const thisSquare =
          chessboard[currentSquare.highestRight[0]][
            currentSquare.highestRight[1]
          ];
        queue.unshift(thisSquare);
      }
      if (currentSquare.highLeft) {
        const thisSquare =
          chessboard[currentSquare.highLeft[0]][currentSquare.highLeft[1]];
        queue.unshift(thisSquare);
      }
      if (currentSquare.highRight) {
        const thisSquare =
          chessboard[currentSquare.highRight[0]][currentSquare.highRight[1]];
        queue.unshift(thisSquare);
      }
      if (currentSquare.lowLeft) {
        const thisSquare =
          chessboard[currentSquare.lowLeft[0]][currentSquare.lowLeft[1]];
        queue.unshift(thisSquare);
      }
      if (currentSquare.lowRight) {
        const thisSquare =
          chessboard[currentSquare.lowRight[0]][currentSquare.lowRight[1]];
        queue.unshift(thisSquare);
      }
      if (currentSquare.lowestLeft) {
        const thisSquare =
          chessboard[currentSquare.lowestLeft[0]][currentSquare.lowestLeft[1]];
        queue.unshift(thisSquare);
      }
      if (currentSquare.lowestRight) {
        const thisSquare =
          chessboard[currentSquare.lowestRight[0]][
            currentSquare.lowestRight[1]
          ];
        queue.unshift(thisSquare);
      }
    }
    visited.add(currentSquare);
    queue.pop();
  }
  return path;
}

console.log(knightMoves(chessboard[0][0], chessboard[2][4]));
