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
  const queue = [];
  const path = [];
  queue.unshift(startingSquare);
  while (queue.length > 0) {
    path.push(queue[queue.length - 1]);
    if (queue[queue.length - 1].coord === endSquare.coord) {
      break;
    }
    if (queue[queue.length - 1].highestLeft) {
      queue.unshift(queue[queue.length - 1].highestLeft);
    }
    if (queue[queue.length - 1].highestRight) {
      queue.unshift(queue[queue.length - 1].highestRight);
    }
    if (queue[queue.length - 1].highLeft) {
      queue.unshift(queue[queue.length - 1].highLeft);
    }
    if (queue[queue.length - 1].highRight) {
      queue.unshift(queue[queue.length - 1].highRight);
    }
    if (queue[queue.length - 1].lowLeft) {
      queue.unshift(queue[queue.length - 1].lowLeft);
    }
    if (queue[queue.length - 1].lowRight) {
      queue.unshift(queue[queue.length - 1].lowRight);
    }
    if (queue[queue.length - 1].lowestLeft) {
      queue.unshift(queue[queue.length - 1].lowestLeft);
    }
    if (queue[queue.length - 1].lowestRight) {
      queue.unshift(queue[queue.length - 1].lowestRight);
    }
    queue.pop();
  }
  return path;
}
