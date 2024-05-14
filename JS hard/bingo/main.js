let allNumbers = [];
let calledNumbers = [];

function createBingoCard() {
  const table = document.getElementById("view");
  table.innerHTML = "";

  function shuffleNumbers(min, max) {
    const numbers = [];
    for (let i = min; i <= max; i++) {
      numbers.push(i);
    }
    for (let i = numbers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
    }
    return numbers;
  }
  allNumbers = shuffleNumbers(1, 75);

  for (let i = 0; i < 6; i++) {
    const row = table.insertRow();
    for (let j = 0; j < 5; j++) {
      const cell = row.insertCell();
      const div = document.createElement("div");
      cell.appendChild(div);
      if (i === 0) {
        cell.textContent = "BINGO"[j];
      } else {
        if (i === 3 && j === 2) {
          div.textContent = "FREE";
          div.classList.add("marked");
        } else {
          let min, max;
          switch (j) {
            case 0:
              min = 1;
              max = 15;
              break;
            case 1:
              min = 16;
              max = 30;
              break;
            case 2:
              min = 31;
              max = 45;
              break;
            case 3:
              min = 46;
              max = 60;
              break;
            case 4:
              min = 61;
              max = 75;
              break;
          }
          const number = allNumbers.find((num) => num >= min && num <= max);
          div.textContent = number;
          div.id = `cell-${number}`;
          allNumbers = allNumbers.filter((num) => num !== number);
        }
      }
    }
  }
}

function callNumber() {
  if (calledNumbers.length >= 75) {
    alert("全ての数字が出ました！");
    return;
  }

  let number;
  do {
    number = Math.floor(Math.random() * 75) + 1;
  } while (calledNumbers.includes(number));

  calledNumbers.push(number);

  const cell = document.getElementById(`cell-${number}`);
  if (cell) {
    cell.classList.add("marked");
  }
  alert(`出た数字は${number}です`);

  checkBingo();
}

function checkBingo() {
  const table = document.getElementById("view");
  const rows = Array.from(table.rows);

  for (let i = 1; i < rows.length; i++) {
    if (
      Array.from(rows[i].cells).every((cell) =>
        cell.firstChild.classList.contains("marked")
      )
    ) {
      alert("ビンゴ");
      location.reload();
      return;
    }
  }

  for (let i = 0; i < 5; i++) {
    if (
      rows
        .slice(1)
        .every((row) => row.cells[i].firstChild.classList.contains("marked"))
    ) {
      alert("ビンゴ");
      location.reload();
      return;
    }
  }

  if (
    rows
      .slice(1)
      .every((row, i) =>
        row.cells[i].firstChild.classList.contains("marked")
      ) ||
    rows
      .slice(1)
      .every((row, i) =>
        row.cells[4 - i].firstChild.classList.contains("marked")
      )
  ) {
    alert("ビンゴ");
    location.reload();
    return;
  }
}

window.onload = function () {
  createBingoCard();
  document.getElementById("hitNum").addEventListener("click", callNumber);
};
