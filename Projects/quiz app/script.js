const quizData = [
    {
      question: 'What is the largest planet in our solar system?',
      answers: {
        a: 'Mars',
        b: 'Jupiter',
        c: 'Saturn',
        d: 'Earth',
      },
      correctAnswer: 'b',
    },
    {
      question: 'Which famous scientist developed the theory of relativity?',
      answers: {
        a: 'Isaac Newton',
        b: 'Stephen Hawking',
        c: 'Galileo Galilei',
        d: 'Albert Einstein',
      },
      correctAnswer: 'd',
    },
    {
      question: 'Which country is known as the Land of the Rising Sun?',
      answers: {
        a: 'China',
        b: 'India',
        c: 'Japan',
        d: 'Thailand',
      },
      correctAnswer: 'c',
    },
    {
      question: "Who painted the famous work 'Mona Lisa'?",
      answers: {
        a: 'Leonardo da Vinci',
        b: 'Vincent van Gogh',
        c: 'Pablo Picasso',
        d: 'Michelangelo',
      },
      correctAnswer: 'a',
    },
    {
      question: 'What is the capital city of Australia?',
      answers: {
        a: 'Sydney',
        b: 'Canberra',
        c: 'Melbourne',
        d: 'Brisbane',
      },
      correctAnswer: 'b',
    },
  ]
  

  const answerelem = document.querySelectorAll('.answer');
  const unorderList = document.querySelector('#unorderlist')
  const quizcontainer = document.querySelector('.quiz-section')

  // const[questionElem,option_1,option_2,option_3,option_4] = document.querySelectorAll('#question','#option_1','#option_2','#option_3','#option_4');
  // const submittedBtn = document.querySelector('#btn');

  const questionElem = document.querySelector('#question');
  const option_1 = document.querySelector('#option_1');
  const option_2 = document.querySelector('#option_2');
  const option_3 = document.querySelector('#option_3');
  const option_4 = document.querySelector('#option_4');
  const submittedBtn = document.querySelector('#btn');
  const tryAgainBtn = document.querySelector('#tryAgainBtn')
  const showResultsBtn = document.querySelector('#showResultsBtn')
  const resultsContainer = document.querySelector('#results');

  let currentQuiz = 0;
  let currentScore = 0;
  let userAnswers = []; // To store user's answers


  function loadQuiz() {

    const{question,answers,correctAnswer}= quizData[currentQuiz]

   questionElem.innerHTML = question;
   option_1.innerHTML=answers.a
   option_2.innerHTML=answers.b
   option_3.innerHTML=answers.c
   option_4.innerHTML=answers.d
   answerelem.forEach(answerElem=>answerElem.checked=false)
  }

submittedBtn.addEventListener('click',function () {

  let selectedAnswer =false
 
  for (const elems of answerelem) 
    {if (elems.checked) {
    selectedAnswer=true;
    userAnswers[currentQuiz] = elems.id
    if (elems.id===quizData[currentQuiz].correctAnswer) {
      currentScore++

      
    }
    break;
  
  } }
  

  if (!selectedAnswer) {
    alert('Please select an answer before proceeding.');
        return;
  }
  currentQuiz += 1;
  
  
  if (currentQuiz<quizData.length) {
    loadQuiz()
    
  } else {
    questionElem.innerHTML=`Quiz Completed! <br> Your Total score is  ${currentScore} out of ${quizData.length}`;
    unorderList.style.display='none';
    showResultsBtn.style.display = 'block'; 
    submittedBtn.style.display='none'
      tryAgainBtn.style.display='block'

  }
 
  
})

tryAgainBtn.addEventListener('click', function tryAgain() {
  currentQuiz = 0;
  currentScore = 0;
  userAnswers=[]
  unorderList.style.display = 'block';
  submittedBtn.style.display = 'block';
  tryAgainBtn.style.display='none';
  showResultsBtn.style.display='none'
  
  loadQuiz();
});

showResultsBtn.addEventListener('click',function () {
  let resultsHTML = '';
    quizData.forEach((item, index) => {
        const userAnswer = userAnswers[index];
        const correctAnswer = item.correctAnswer;
        const isCorrect = userAnswer === correctAnswer;

        resultsHTML += `
           <div class="result-question">
                <h3>Q# ${index+1} ${item.question}</h3>
                <ul>
                    ${Object.entries(item.answers).map(([key, answer]) => `
                        <li class="${key === correctAnswer ? 'correct' : (key === userAnswer ? 'incorrect' : '')}">
                            <input type="radio" name="answer_${index}" ${key === userAnswer ? 'checked' : ''} disabled>
                            ${answer}
                        </li>
                    `).join('')}
                </ul>
                <h4> Correct Answer is: ${correctAnswer}
            </div>
            <hr>
        `;
    });

    resultsContainer.innerHTML = resultsHTML;
    resultsContainer.style.display='block'
    unorderList.style.display = 'none';
    submittedBtn.style.display = 'none';
    showResultsBtn.style.display = 'none';
   

  
})

loadQuiz()



