document.addEventListener("DOMContentLoaded", function () {
  const nextNumberBtn = document.getElementById("nextNumberBtn");
  const moveBtn = document.getElementById("moveBtn");
  const pawn = document.getElementById("pawn");

  let currentPosition = 0;
  let isSixGenerated = false;

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function movePawn(steps) {
    for (let i = 1; i <= steps; i++) {
      currentPosition = (currentPosition + 1) % 40;
      pawn.style.transform = `rotate(${
        currentPosition * 9
      }deg) translate(-50%, -50%)`;
      await sleep(500);
    }
    checkPosition();
  }

  function checkPosition() {
    // Implement logic to check for snakes, ladders, and winning condition
    // For simplicity, let's assume no snakes or ladders and the winning position is 39.
    if (currentPosition === 39) {
      alert("You won!");
    } else {
      nextNumberBtn.disabled = false;
      moveBtn.disabled = true;
    }
  }

  nextNumberBtn.addEventListener("click", function () {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    alert(`Random Number: ${randomNumber}`);
    if (randomNumber === 6 && !isSixGenerated) {
      isSixGenerated = true;
      nextNumberBtn.disabled = true;
      moveBtn.disabled = false;
      currentPosition = 0; // Assuming starting position is 0
      pawn.style.transform = "rotate(0deg) translate(-50%, -50%)";
    } else {
      alert("No eligible move. Try again!");
    }
  });

  moveBtn.addEventListener("click", function () {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    alert(`Moving ${randomNumber} steps`);
    movePawn(randomNumber);
    isSixGenerated = false;
  });
});
