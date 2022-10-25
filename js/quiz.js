// 1. Create a multidimensional array to hold quiz questions and answers
const quizQuestions = [
  ['How many Continents are there?', '7'],
  ['How many days are there in a year', '365'],
  ['In which country can you find the Eiffel Tower', 'france']


]

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

  let input = prompt(quizQuestions[i][0]);

  if (input.toLowerCase() === quizQuestions[i][1]) {
    correctAnswers ++

    console.log(correctAnswers);
  }  else {
    correctAnswers += 0
  }


}   


// 4. Display the number of correct answers to the user

if (correctAnswers != 0) {
  
  document.querySelector('main').innerHTML = `
    
<h1 class='blink'>You got ${correctAnswers} question(s) correct &#127882.</h1>
  
`;
} else {
  
  document.querySelector('main').innerHTML =
  `
  <h1 class='blink'>You got ${correctAnswers} question(s) correct &#128557.</h1>
  
  `;

}