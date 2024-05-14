let sec = 10;
let timer;

const nowTime = document.getElementById("nowTime");
const setTime = document.getElementById("setTime");
const startTimer = document.getElementById("startTimer");
const stopTimer = document.getElementById("stopTimer");

setTime.addEventListener("click", function () {
  let inputTime = document.getElementById("inputTime").value;
  sec = inputTime ? inputTime : sec;
  nowTime.textContent = `${sec}:セット完了`;
});

startTimer.addEventListener("click", function () {
  clearInterval(timer);
  timer = setInterval("countDown()", 1000);
});

stopTimer.addEventListener("click", function () {
  clearInterval(timer);
  nowTime.textContent = `${sec}:ストップしました。`;
});

const countDown = () => {
  sec -= 1;
  nowTime.textContent = sec;
  if (sec === 0) {
    alert("終了");
    clearInterval(timer);
  }
};
