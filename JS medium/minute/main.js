let sec = 0;
let timer;

const startTimer = document.getElementById("startTimer");
const confirmTime = document.getElementById("confirmTime");

startTimer.addEventListener("click", function () {
  clearInterval(timer);
  timer = setInterval(countUp, 1000);
});

confirmTime.addEventListener("click", function () {
  if (sec === 20) {
    alert("体内時計が完璧だね");
  } else if (sec < 20) {
    alert(`まだ${sec}秒・・・再スタート`);
  } else {
    alert(`もう${sec}秒！再挑戦せよ`);
  }
  clearInterval(timer);
  sec = 0;
});

const countUp = () => {
  sec += 1;
  if (sec === 40) {
    clearInterval(timer);
    alert("終了");
  }
};
