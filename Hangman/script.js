const hangman = document.querySelector(".hangman");

const answerHTML = document.querySelector(".answer");
const questionHTML = document.querySelector(".question-section h4");

let el = document.querySelectorAll(".alpha");
let answer;

var j = 0;
var count = 0;
var z = 0;

function questionSet() {
  const question = {
    0: {
      key: "What does NATO stand for?",
      value: "North Atlantic Treaty Organization",
    },
    1: { key: "Where is the official home of Santa Claus?", value: "Finland" },
    2: {
      key: "Which is the smallest country in the world?",
      value: "Vatican City",
    },
    3: {
      key: "What is the largest country in the world in terms of land area?",
      value: "Russia",
    },
    4: { key: "What is the capital of Estonia?", value: "Talinn" },
    5: {
      key:
        "Which of the following country has given first time voting rights to women?",
      value: "New Zealand",
    },
  };

  return question;
}

document.querySelector(".play-start").addEventListener("click", function () {
  play_start();
  this.style.display = "none";
});

document.querySelector(".btn-play").addEventListener("click", play);

document.querySelector(".btn-hint").addEventListener("click", function () {
  hint();
});

el.forEach((el) => {
  el.addEventListener("click", function () {
    checker(el);
  });
});

function play_start() {
  let question = questionSet();
  let index = Math.floor(Math.random() * 6);
  questionHTML.innerHTML = question[index].key;
  answer = question[index].value;
  for (let i = 0; i < answer.length; i++) {
    let _ = document.createElement("div");

    if (answer[i] === " ") {
      _.classList.add("space");
    }
    _.classList.add("dash");
    answerHTML.appendChild(_);
  }
}

function play() {
  init();
  let question = questionSet();
  let index = Math.floor(Math.random() * 6);
  questionHTML.innerHTML = question[index].key;
  answer = question[index].value;
  for (let i = 0; i < answer.length; i++) {
    let _ = document.createElement("div");

    if (answer[i] === " ") {
      _.classList.add("space");
    }
    _.classList.add("dash");
    answerHTML.appendChild(_);
  }
}

function checker(el) {
  let arr = [
    "platform",
    "vertical",
    "horizon",
    "rope",
    "head",
    "body",
    "hand_one",
    "hand_two",
    "leg_one",
    "leg_two",
  ];
  let value = el.innerText.toLowerCase();
  let ans = answer.toLowerCase();
  console.log(ans.length);
  let dash = document.querySelectorAll(".dash");
  c = false;

  for (let i = 0; i <= ans.length; i++) {
    if (value === ans[i]) {
      dash[i].innerHTML = value.toUpperCase();

      count += 1;
      c = true;
      el.style.display = "none";
    }
  }

  for (let j; j < dash.length; j++) {
    if (dash[i].className == ".space") {
      z += 1;
    }
  }

  count += z;

  if (ans.length == window.count) {
    document.querySelector(".hang-count").innerHTML = "WIN";
    let alpha = document.querySelectorAll(".alpha");
    alpha.forEach((el) => {
      el.style.display = "inline-block";
      el.style.opacity = 1;
    });
  }
  console.log(count);
  console.log(z);

  if (!c) {
    el.style.opacity = 0;
    var e = document.querySelectorAll(".alpha");
    while (j < 10) {
      var div = document.createElement("div");
      document
        .querySelector(".hangman")
        .appendChild(div)
        .setAttribute("class", arr[j]);
      j++;
      break;
    }
  }

  document.querySelector(".hang-count").innerHTML = `Number of life ${10 - j}`;
  if (j == 10) {
    document.querySelector(".hang-count").innerHTML = `Game Over`;
    e.forEach((e) => (e.style.display = "none"));
  }
}

function init() {
  let dash = document.querySelectorAll(".dash");
  dash.forEach((el) => (el.style.display = "none"));
  let create = document.querySelector(".hangman").children.length;
  for (let i = 0; i < create; i++) {
    document.querySelector(".hangman").children[i].style.display = "none";
  }

  let alpha = document.querySelectorAll(".alpha");
  alpha.forEach((el) => {
    el.style.display = "inline-block";
    el.style.opacity = 1;
  });

  window.count = 0;
  window.j = 0;
}
