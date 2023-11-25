document.addEventListener("DOMContentLoaded", function () {
  const board = document.getElementById("board");
  const cells = [];

  // Function to create the game board
  function createBoard() {
    for (let i = 0; i < 100; i++) {
      const cell = document.createElement("div");
      cell.className = "cell";
      cell.innerText = i + 1;
      board.appendChild(cell);
      cells.push(cell);
    }
  }

  // Function to add snakes and ladders
  function addSnakesAndLadders() {
    const snakes = [
      [16, 6],
      [47, 26],
      [49, 11],
      [56, 53],
      [62, 19],
      [64, 60],
      [87, 24],
      [93, 73],
      [95, 75],
      [98, 78],
    ];
    const ladders = [
      [1, 38],
      [4, 14],
      [9, 31],
      [21, 42],
      [28, 84],
      [36, 44],
      [51, 67],
      [71, 91],
      [80, 100],
    ];

    snakes.forEach(([start, end]) => {
      cells[start - 1].classList.add("snake");
      cells[end - 1].classList.add("snake");
    });

    ladders.forEach(([start, end]) => {
      cells[start - 1].classList.add("ladder");
      cells[end - 1].classList.add("ladder");
    });
  }

  // Initialize the game
  createBoard();
  addSnakesAndLadders();
});
