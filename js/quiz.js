var questions = [
  ['How many states are in the United States?', 50],
  ['How many continents are there?', 7],
  ['How many legs does an insect have?', 6]
];

var correct = [];
var incorrect = [];

var correctAnswers = 0;
var answer;
var response;

function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

for (var i = 0; i < questions.length; i += 1) {
  response = parseInt(prompt(questions[i][0]));
  answer = questions[i][1];
  if (response === answer) {
    correctAnswers += 1;
    correct.push(questions[i][0]);
  } else {
    incorrect.push(questions[i][0]);
  }
}

print("You got " + correctAnswers + " question(s) right." + "<br><br>" + "Here's what you got right: <br>" + "<ul><li>" + correct + "</li></ul>" + "<br> Here's what you got wrong: <br>" + "<ul><li>" + incorrect + "</li></ul>");
