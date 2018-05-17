const questions = [
  ['How many states are in the United States?', 50],
  ['How many continents are there?', 7],
  ['How many oceans are there?', 4]
];

let correct = [];
let incorrect = [];

let correctAnswers = 0;
let answer;
let response;
let html;

function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

for (let i = 0; i < questions.length; i += 1) {
  response = parseInt(prompt(questions[i][0]));
  answer = questions[i][1];
  if (response === answer) {
    correctAnswers += 1;
    correct.push(questions[i][0]);
  } else {
    incorrect.push(questions[i][0]);
  }
}

html = `<ul><li>You got ${correctAnswers} question(s) right.</li>
        <li>Here's what you got right:</li>
        <li>${correct}</li>
        <li>Heres what you got wrong:</li>
        <li>${incorrect}</li>
        </ul>`

print(html);
