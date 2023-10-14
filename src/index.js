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
    this.coord = coord;
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
  for (let j = 0; j < 8; j++) {
    const newSquare = new Square([i, j]);
    chessboard[i][j] = newSquare;
  }
}

function knightMoves(startingSquare, endSquare) {
  const queue = []; // Using array as a queue is much slower. Queues have a O(1) time complexity whereas arrays have a O(n) time complexity
  const path = [];
  queue.unshift(startingSquare);
  while (queue.length > 0) {
    if (path.includes(queue[queue.length - 1]) === false) {
      path.push(queue[queue.length - 1]);
      if (queue[queue.length - 1].coord === endSquare.coord) {
        return path;
      }
      if (queue[queue.length - 1].highestLeft) {
        const thisSquare =
          chessboard[queue[queue.length - 1].highestLeft[0]][
            queue[queue.length - 1].highestLeft[1]
          ];
        queue.unshift(thisSquare);
      }
      if (queue[queue.length - 1].highestRight) {
        const thisSquare =
          chessboard[queue[queue.length - 1].highestRight[0]][
            queue[queue.length - 1].highestRight[1]
          ];
        queue.unshift(thisSquare);
      }
      if (queue[queue.length - 1].highLeft) {
        const thisSquare =
          chessboard[queue[queue.length - 1].highLeft[0]][
            queue[queue.length - 1].highLeft[1]
          ];
        queue.unshift(thisSquare);
      }
      if (queue[queue.length - 1].highRight) {
        const thisSquare =
          chessboard[queue[queue.length - 1].highRight[0]][
            queue[queue.length - 1].highRight[1]
          ];
        queue.unshift(thisSquare);
      }
      if (queue[queue.length - 1].lowLeft) {
        const thisSquare =
          chessboard[queue[queue.length - 1].lowLeft[0]][
            queue[queue.length - 1].lowLeft[1]
          ];
        queue.unshift(thisSquare);
      }
      if (queue[queue.length - 1].lowRight) {
        const thisSquare =
          chessboard[queue[queue.length - 1].lowRight[0]][
            queue[queue.length - 1].lowRight[1]
          ];
        queue.unshift(thisSquare);
      }
      if (queue[queue.length - 1].lowestLeft) {
        const thisSquare =
          chessboard[queue[queue.length - 1].lowestLeft[0]][
            queue[queue.length - 1].lowestLeft[1]
          ];
        queue.unshift(thisSquare);
      }
      if (queue[queue.length - 1].lowestRight) {
        const thisSquare =
          chessboard[queue[queue.length - 1].lowestRight[0]][
            queue[queue.length - 1].lowestRight[1]
          ];
        queue.unshift(thisSquare);
      }
    }
    queue.pop();
  }
  return path;
}

console.log(knightMoves(chessboard[0][0], chessboard[0][1]));
