var index = 0;
var correctAnswer = 0;

const Question_set = {
  0: {
    Question:
      "In which decade was the American Institute of Electrical Engineers (AIEE) founded ?",
    Option: {
      0: "1850s",
      1: "1880s",
      2: "1930s",
      3: "1950s",
    },
    Answer: "1880s",
  },
  1: {
    Question:
      "What is part of a database that holds only one type of information ?",
    Option: {
      0: "Report",
      1: "Field",
      2: "Record",
      3: "File",
    },
    Answer: "Field",
  },
  2: {
    Question: "'OS' computer abbreviation usually means ?",
    Option: {
      0: "Order of Significance",
      1: "Open Software",
      2: "Operating System",
      3: "Optical Sensor",
    },
    Answer: "Operating System",
  },
  3: {
    Question:
      "In which decade with the first transatlantic radio broadcast occur ?",
    Option: {
      0: "1850s",
      1: "1860s",
      2: "1870s",
      3: "1900s",
    },
    Answer: "1900s",
  },
  4: {
    Question: "'.MOV' extension refers usually to what kind of file?",
    Option: {
      0: "Image file",
      1: "Animation/movie file",
      2: "Audio file",
      3: "MS Office document",
    },
    Answer: "Animation/movie file",
  },
};

document.querySelector(".play").addEventListener("click", function () {
  init();
  document.querySelector(".play").style.display = "none";
  let input = document.querySelectorAll("form input");
  let question = Question_set;
  let answer = question[index].Answer;

  checker(input, answer);
});

function init() {
  index=0;
  correctAnswer = null;
  document.querySelector(".result").style.display = "none";
  document.querySelector(".question_set").style.display = "block";
  let questions = Question_set;
  let position = questions[index];
  let input = document.querySelectorAll("form input");
  input.forEach((el) => (el["checked"] = false));
  document.querySelector(".question").innerHTML = position.Question;
  let option = document.querySelectorAll(".answer");
  for (let i = 0; i < option.length; i++) {
    option[i].innerHTML = position.Option[i];
    input[i].value = position.Option[i];
  }
}

document.querySelector(".next").addEventListener("click", function () {
  let questions = Question_set;
  index += 1;
  if (index < 5) {
    let position = questions[index];
    let input = document.querySelectorAll("form input");
    let answer = questions[index].Answer;
    nextButton(input, position);
    checker(input, answer);
  } else {
    endTask(correctAnswer);
  }
});

function checker(collect, answer) {
  for (let i = 0; i < collect.length; i++) {
    collect[i].addEventListener("click", function () {
      if (collect[i].value === answer) {
        correctAnswer += 1;
        console.log(correctAnswer);
        return correctAnswer;
      }
    });
  }
}

function nextButton(collect, position) {
  document.querySelector(".question").innerHTML = position.Question;
  let input = document.querySelectorAll("form input");
  input.forEach((el) => (el["checked"] = false));
  let option = document.querySelectorAll(".answer");
  for (let i = 0; i < option.length; i++) {
    option[i].innerHTML = position.Option[i];
    collect[i].value = position.Option[i];
  }
}

function endTask(output) {
  document.querySelector(".result").style.display = "block";
  document.querySelector(".play").style.display = "block";
  document.querySelector(".question_set").style.display = "none";
  document.querySelector(".result span").innerHTML = output;
  console.log(index, correctAnswer);
}

console.log(index, correctAnswer);
