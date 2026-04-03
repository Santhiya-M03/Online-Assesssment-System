let questions = [];
let examQuestions = [];

let index = 0;
let score = 0;

let totalQuestions = 5;

let answers = [];

let timeLeft = 30;
let timerInterval;

const questionEl =
  document.getElementById("question");

const answersEl =
  document.getElementById("answers");

const nextBtn =
  document.getElementById("nextBtn");

const prevBtn =
  document.getElementById("prevBtn");

const timerEl =
  document.getElementById("timer");

const countEl =
  document.getElementById("questionCount");

const paletteEl =
  document.getElementById("palette");


let level =
  localStorage.getItem("level");

let file =
  "questions/" + level + ".json";


fetch(file)

  .then(res => res.json())

  .then(data => {

    questions = shuffle(data);

    examQuestions =
      questions.slice(0, totalQuestions);

    answers =
      new Array(totalQuestions);

    createPalette();

    showQuestion();

  });


function shuffle(arr) {

  for (let i = arr.length - 1; i > 0; i--) {

    let j =
      Math.floor(Math.random() * (i + 1));

    [arr[i], arr[j]] =
      [arr[j], arr[i]];

  }

  return arr;

}


function createPalette() {

  paletteEl.innerHTML = "";

  for (let i = 0; i < totalQuestions; i++) {

    let b =
      document.createElement("button");

    b.innerText = i + 1;

    b.onclick = () => {
      index = i;
      showQuestion();
    };

    paletteEl.appendChild(b);

  }

}


function updatePalette() {

  let btns =
    paletteEl.querySelectorAll("button");

  btns.forEach((b, i) => {

    b.className = "";

    if (answers[i] != null)
      b.classList.add("done");

    if (i == index)
      b.classList.add("current");

  });

}


function showQuestion() {

  let q =
    examQuestions[index];

  countEl.innerText =
    "Question " + (index + 1);

  questionEl.innerText =
    q.question;

  answersEl.innerHTML = "";


  q.options.forEach(op => {

    let btn =
      document.createElement("button");

    btn.innerText = op;

    if (answers[index] == op) {

      btn.style.background = "blue";
      btn.style.color = "white";

    }

    btn.onclick = () => {

      answers[index] = op;

      showQuestion();

    };

    answersEl.appendChild(btn);

  });


  updatePalette();

}


nextBtn.onclick = () => {

  if (index < totalQuestions - 1)
    index++;

  else
    finish();

  showQuestion();

};


prevBtn.onclick = () => {

  if (index > 0)
    index--;

  showQuestion();

};


function finish() {

  score = 0;

  for (let i = 0; i < totalQuestions; i++) {

    if (
      answers[i] ==
      examQuestions[i].answer
    )
      score++;

  }

  localStorage.setItem(
    "score", score);

  localStorage.setItem(
    "total", totalQuestions);

  location.href = "result.html";

}