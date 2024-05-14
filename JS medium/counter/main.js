const num = 400;

const sampleForm = document.getElementById("sampleForm");
sampleForm.addEventListener("keyup", function () {
  textCounter.textContent = `あと${num - sampleForm.value.length}文字`;
});

const resetBtn = document.getElementById("resetBtn");
resetBtn.addEventListener("click", function () {
  textCounter.textContent = `あと${num}文字`;
});

const textCounter = document.getElementById("textCounter");
textCounter.textContent = `あと${num - sampleForm.value.length}文字`;
