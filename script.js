const questions = [
  { sentence: "Ich gebe <u>dem Mann</u> das Buch.", correct: "Dativ" },
  { sentence: "Sie kauft <u>den Apfel</u>.", correct: "Akkusativ" },
  { sentence: "Wir helfen <u>dem Kind</u>.", correct: "Dativ" },
  { sentence: "Er sieht <u>den Hund</u>.", correct: "Akkusativ" }
];

let current = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const resultEl = document.getElementById("result");
const nextBtn = document.getElementById("nextBtn");

function loadQuestion() {
  nextBtn.style.display = "none";
  resultEl.textContent = "";
  answersEl.innerHTML = "";

  questionEl.innerHTML = questions[current].sentence;

  ["Akkusativ", "Dativ"].forEach(type => {
    const btn = document.createElement("button");
    btn.textContent = type;
    btn.onclick = () => checkAnswer(type, btn);
    answersEl.appendChild(btn);
  });
}

function checkAnswer(answer, btn) {
  const correct = questions[current].correct;
  const buttons = answersEl.querySelectorAll("button");
  buttons.forEach(b => b.disabled = true);

  if (answer === correct) {
    btn.classList.add("correct");
    score++;
    resultEl.textContent = "Richtig!";
  } else {
    btn.classList.add("wrong");
    resultEl.textContent = "Falsch! Richtige Antwort: " + correct;
  }

  nextBtn.style.display = "block";
}

function nextQuestion() {
  current++;
  if (current < questions.length) {
    loadQuestion();
  } else {
    questionEl.textContent = "Quiz beendet";
    answersEl.innerHTML = "";
    nextBtn.style.display = "none";
    resultEl.textContent = `Punkte: ${score} von ${questions.length}`;
  }
}

loadQuestion();
