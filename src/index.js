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
  const queue = [];
  const path = [];
  const visited = new Set();
  queue.unshift(startingSquare); // Push the starting square to the front

  while (queue.length > 0) {
    const currentSquare = queue.pop(); // Pop the last square from the queue
    path.push(currentSquare);

    if (currentSquare.coord === endSquare.coord) {
      return path;
    }

    if (!visited.has(currentSquare)) {
      visited.add(currentSquare);

      // Generate possible next moves
      const nextMoves = [
        currentSquare.highLeft,
        currentSquare.highRight,
        currentSquare.lowLeft,
        currentSquare.lowRight,
        currentSquare.highestLeft,
        currentSquare.highestRight,
        currentSquare.lowestLeft,
        currentSquare.lowestRight,
      ];

      for (const move of nextMoves) {
        if (move && !visited.has(chessboard[move[0]][move[1]])) {
          // Check if the square of the possible move has been visited
          queue.unshift(chessboard[move[0]][move[1]]); // Push new squares to the front of the queue
        }
      }
    }
  }

  return null;
}

console.log(knightMoves(chessboard[0][0], chessboard[2][4]));
