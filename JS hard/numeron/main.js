let ansNum;

function initGame(digits) {
  ansNum = randomNumber(digits);
  console.log(ansNum);
}

function randomNumber(digits) {
  let num = [];
  num[0] = Math.floor(Math.random() * 9) + 1;

  for (let i = 1; i < digits; i++) {
    do {
      num[i] = Math.floor(Math.random() * 10);
    } while (num.slice(0, i).includes(num[i]));
  }

  return num.join("");
}

num3Check.disabled = true;
num4Check.disabled = true;

const threeNumber = document.getElementById("threeNumber");
threeNumber.addEventListener("click", function () {
  threeNumber.disabled = true;
  fourNumber.disabled = true;
  initGame(3);

  const num3Check = document.getElementById("num3Check");
  num3Check.disabled = false;
  num3Check.addEventListener("click", function () {
    let answerNum = document.getElementById("answerNum").value;
    if (answerNum.length !== 3) {
      alert("3桁の数字を入力してください。");
      return;
    }
    let eat = 0;
    let bite = 0;

    for (let i = 0; i < 3; i++) {
      const digit = parseInt(answerNum[i]);

      if (digit === parseInt(ansNum[i])) {
        eat++;
      } else if (ansNum.includes(digit.toString())) {
        bite++;
      }
    }
    document.getElementById("answerNum").value = "";
    alert(`${eat} EAT, ${bite} BITE`);

    if (answerNum === ansNum) {
      alert("あなたは私の心が読めるのですか!?");
      location.reload();
    }
  });
});

const fourNumber = document.getElementById("fourNumber");
fourNumber.addEventListener("click", function () {
  threeNumber.disabled = true;
  fourNumber.disabled = true;
  initGame(4);

  const num4Check = document.getElementById("num4Check");
  num4Check.disabled = false;
  num4Check.addEventListener("click", function () {
    let answerNum = document.getElementById("answerNum").value;
    if (answerNum.length !== 4) {
      alert("4桁の数字を入力してください。");
      return;
    }
    let eat = 0;
    let bite = 0;

    for (let i = 0; i < 4; i++) {
      const digit = parseInt(answerNum[i]);

      if (digit === parseInt(ansNum[i])) {
        eat++;
      } else if (ansNum.includes(digit.toString())) {
        bite++;
      }
    }
    document.getElementById("answerNum").value = "";
    alert(`${eat} EAT, ${bite} BITE`);

    if (answerNum === ansNum) {
      alert("あなたは私の心が読めるのですか!?");
      location.reload();
    }
  });
});

// function allReset() {
//   threeNumber.disabled = false;
//   fourNumber.disabled = false;
//   num3Check.disabled = true;
//   num4Check.disabled = true;
//   ansNum = "";
//   console.log(ansNum);
// }
