const gridSize = 100; // Number of squares per row/column
const squareSize = 20; // Size of each square in pixels
const grid = [];

function setup() {
  createCanvas(gridSize * squareSize, gridSize * squareSize);
  for (let i = 0; i < gridSize; i++) {
    grid[i] = [];
    for (let j = 0; j < gridSize; j++) {
      grid[i][j] = 0; // 0 represents a white square
    }
  }
}

function draw() {
  background(255);
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      if (grid[i][j] === 1) {
        fill(0); // 1 represents a black square
      } else {
        fill(255);
      }
      rect(i * squareSize, j * squareSize, squareSize, squareSize);
    }
  }
}

function mousePressed() {
  const i = floor(mouseX / squareSize);
  const j = floor(mouseY / squareSize);

  if (mouseButton === LEFT) {
    grid[i][j] = 1; // Turn the clicked square black
  } else if (mouseButton === RIGHT) {
    grid[i][j] = 0; // Turn the clicked square white
  }
}

function mouseDragged() {
  const i = floor(mouseX / squareSize);
  const j = floor(mouseY / squareSize);

  if (mouseButton === LEFT) {
    grid[i][j] = 1; // Turn the dragged square black
  } else if (mouseButton === RIGHT) {
    grid[i][j] = 0; // Turn the dragged square white
  }
}


