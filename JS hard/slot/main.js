const slotData = [
  {
    number: 0,
    timer: null,
    viewers: [
      document.getElementById("number"),
      document.getElementById("number4"),
      document.getElementById("number7"),
    ],
    stopButton: document.getElementById("setTime1"),
  },
  {
    number: 0,
    timer: null,
    viewers: [
      document.getElementById("number2"),
      document.getElementById("number5"),
      document.getElementById("number8"),
    ],
    stopButton: document.getElementById("setTime2"),
  },
  {
    number: 0,
    timer: null,
    viewers: [
      document.getElementById("number3"),
      document.getElementById("number6"),
      document.getElementById("number9"),
    ],
    stopButton: document.getElementById("setTime3"),
  },
];

let stopCount = 0;

slotData.forEach((slot) => {
  slot.viewers.forEach((viewer) => (viewer.textContent = slot.number));
  slot.stopButton.disabled = true;
});

const startTimer = document.getElementById("startTimer");
startTimer.addEventListener("click", function () {
  startTimer.disabled = true;
  slotData.forEach((slot) => {
    slot.stopButton.disabled = false;
    slot.timer = setInterval(function () {
      slot.number = (slot.number + 1) % 10;
      slot.viewers.forEach((viewer) => (viewer.textContent = slot.number));
    }, 100);
  });
});

slotData.forEach((slot) => {
  slot.stopButton.addEventListener("click", function () {
    stopCount += 1;
    slot.stopButton.disabled = true;
    clearInterval(slot.timer);
    judge();
  });
});

const judge = () => {
  if (stopCount === 3) {
    stopCount = 0;
    startTimer.disabled = false;
    if (slotData.every((slot) => slotData[0].number === slot.number)) {
      alert("当たったね！！！");
    } else {
      alert("ハズレたね・・・");
    }
  }
};

// const slotData = [
//   {
//     number: 0,
//     timer: null,
//     viewer: document.getElementById("number"),
//     stopBtn: document.getElementById("setTime1"),
//   },
//   {
//     number: 0,
//     timer: null,
//     viewer: document.getElementById("number2"),
//     stopBtn: document.getElementById("setTime2"),
//   },
//   {
//     number: 0,
//     timer: null,
//     viewer: document.getElementById("number3"),
//     stopBtn: document.getElementById("setTime3"),
//   },
// ];

// let stopCount = 0;

// slotData.forEach((slot) => {
//   slot.viewer.textContent = slot.number;
//   slot.stopBtn.disabled = true;
// });

// const startTimer = document.getElementById("startTimer");
// startTimer.addEventListener("click", function () {
//   slotData.forEach((slot) => {
//     startTimer.disabled = true;
//     slot.stopBtn.disabled = false;
//     slot.timer = setInterval(function () {
//       slot.number++;
//       if (slot.number === 10) {
//         slot.number = 0;
//       }
//       slot.viewer.textContent = slot.number;
//     }, 100);
//   });
// });

// slotData.forEach((slot) => {
//   slot.stopBtn.addEventListener("click", function () {
//     clearInterval(slot.timer);
//     slot.stopBtn.disabled = true;
//     stopCount += 1;
//     judge();
//   });
// });

// const judge = () => {
//   if (stopCount === 3) {
//     startTimer.disabled = false;
//     stopCount = 0;
//     if (slotData.every((slot) => slotData[0].number === slot.number)) {
//       alert("当たり！！");
//     } else {
//       alert("残念・・・");
//     }
//   }
// };
