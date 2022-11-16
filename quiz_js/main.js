// JM

function checkers() {
  var rightAnswer = ["Javascript", "Styling", "Strictly equal to", "1", "True", "Twitter", "Boolean", "Console.log", "True", "4"];
  var marks = 0;
  var questionOne = document.querySelector(
    'input[name="questionOne"]:checked').value;

  var questionTwo = document.querySelector(
    'input[name="questionTwo"]:checked').value;

  var questionThree = document.querySelector(
    'input[name="questionThree"]:checked').value;

  var questionFour = document.querySelector(
    'input[name="questionFour"]:checked').value;

  var questionFive = document.querySelector(
    'input[name="questionFive"]:checked').value;

  var questionSix = document.querySelector(
    'input[name="questionSix"]:checked').value;

  var questionSeven = document.querySelector(
    'input[name="questionSeven"]:checked').value;

  var questionEight = document.querySelector(
    'input[name="questionEight"]:checked').value;

  var questionNine = document.querySelector(
    'input[name="questionNine"]:checked').value;

  var questionTen = document.querySelector(
    'input[name="questionTen"]:checked').value;

  var done = document.getElementById("done");
  var quiz = document.getElementById("quiz");
  if (questionOne == rightAnswer[0]) {
    marks += 1;
  } else if (questionOne != rightAnswer[0]) {
    marks += 0;
  }
  if (questionTwo == rightAnswer[1]) {
    marks += 1;
  } else if (questionTwo != rightAnswer[1]) {
    marks += 0;
  }
  if (questionThree == rightAnswer[2]) {
    marks += 2;
  } else if (questionThree != rightAnswer[2]) {
    marks += 0;
  }
  if (questionFour == rightAnswer[3]) {
    marks += 2;
  } else if (questionFour != rightAnswer[3]) {
    marks += 0;
  }
  if (questionFive == rightAnswer[4]) {
    marks += 2;
  } else if (questionFive != rightAnswer[4]) {
    marks += 0;
  }
  if (questionSix == rightAnswer[5]) {
    marks += 2;
  } else if (questionSix != rightAnswer[5]) {
    marks += 0;
  }
  if (questionSeven == rightAnswer[6]) {
    marks += 2;
  } else if (questionSeven != rightAnswer[6]) {
    marks += 0;
  }
  if (questionEight == rightAnswer[7]) {
    marks += 2;
  } else if (questionEight != rightAnswer[7]) {
    marks += 0;
  }
  if (questionNine == rightAnswer[8]) {
    marks += 3;
  } else if (questionNine != rightAnswer[8]) {
    marks += 0;
  }
  if (questionTen == rightAnswer[9]) {
    marks += 3;
  } else if (questionTen != rightAnswer[9]) {
    marks += 0;
  }
  quiz.style.display = "none";
  if (marks <= 5) {
    done.textContent = "You have marksd " + marks + " marks, please retake the assesment!";
  } else if (marks <= 10) {
    done.textContent = "You have marksd " + marks + " marks, you can do better!";
  } else if (marks <= 15) {
    done.textContent = "You have marksd " + marks + " marks, good work!";
  } else if (marks <= 20) {
    done.textContent = "You have marksd " + marks + " marks, Excellent!!!"
  }
}