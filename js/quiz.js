// 1. Create a multidimensional array to hold quiz questions and answers
const quizQuestions = [
  ['How many Continents are there?', '7'],
  ['How many days are there in a year', '365'],
  ['In which country can you find the Eiffel Tower', 'france']


]

const correct =[];

const incorrect = [];

// 2. Store the number of questions answered correctly

let correctAnswers = 0


/* 
  3. Use a loop to cycle through each question
      - Present each question to the user
      - Compare the user's response to answer in the array
      - If the response matches the answer, the number of correctly
        answered questions increments by 1
*/


for (let i = 0; i < quizQuestions.length; i++) {

  let question = quizQuestions[i][0];

  let answer = quizQuestions[i][1];
  
  let input = prompt(question);

  if ( input === answer) {
    correctAnswers++;
    correct.push(question);

  } else {
    incorrect.push(question);

  }
}   


function createListItems(arr) {
  let list = '';
  for (let i = 0; i < arr.length; i++) {
    list += `<li>${arr[i]}</li>`;
  }
  return list;
}  

function createListItemsWrong(arr) {
  let list = '';
  for (let i = 0; i < arr.length; i++) {
    list += `<li class='wrong'>${arr[i]}</li>`;
  }
  return list;
}  

// 4. Display the number of correct answers to the user

let html1 = `
<h1>You got ${correctAnswers} questio(s) correct</h1>
<h2>You got these questions right:</h2>
<ol>
  ${createListItems(correct)}
</ol>

<h2>You got these questions wrong:</h2>
<ol>
  ${createListItemsWrong(incorrect)}
</ol>
`
  document.querySelector('main').innerHTML = html1;


