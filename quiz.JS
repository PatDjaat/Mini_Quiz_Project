const data =[
  {
    id:1,
    question: 'Which is the capital of somalia ?',
    answers: [
      {answer:'Mogadiscio', isCorrect: true},
      {answer: 'Borama', isCorrect: false},
      {answer: 'Merka', isCorrect: false},
      {answer: 'Hargeisa', isCorrect:false},
    ],
  },
  {
    id:2,
    question: 'Which is the capital of Tanzania ?',
    answers: [
      {answer:'Dar es Salaam', isCorrect: false},
      {answer: 'Mwanza', isCorrect: false},
      {answer: 'Zanzibar', isCorrect: true},
      {answer: 'Arusha', isCorrect:false},
    ],
  },
  {
    id:3,
    question: 'what is the most used programming language ?',
    answers: [
      {answer:'JavaScript', isCorrect: false},
      {answer: 'Python', isCorrect: true},
      {answer: 'Java', isCorrect: false},
    ],
  },
];

const gameScreen = document.querySelector('.game')
const resultScreen = document.querySelector('.result')
const question = document.querySelector('.question')
const answerContainer = document.querySelector('.answers')
const submit = document.querySelector('.submit')
const play = document.querySelector('.play')

let qIndex = 0;
let correctCount = 0;
let wrongCount = 0;
let total = 0;
let selectedAnswer ;

const playAgain = ()=>{
   qIndex = 0;
   correctCount = 0;
   wrongCount = 0;
   total = 0;
  showQuestion(qIndex);
}

play.addEventListener('click', ()=>{
    resultScreen.style.display = 'none'
  gameScreen.style.display ='block'
  playAgain();
})

const showResult = ()=>{
  resultScreen.style.display = 'block'
  gameScreen.style.display ='none'

  resultScreen.querySelector('.correct').textContent = `Correct Answers: ${correctCount}`
  resultScreen.querySelector('.wrong').textContent = `wrong Answers: ${wrongCount}`
  resultScreen.querySelector('.score').textContent = `score: ${(correctCount - wrongCount)*10}`
}

const showQuestion = (qNumber) =>{
  if(qIndex === data.length) return showResult();
  selectedAnswer = null;
  question.textContent = data[qNumber].question;
  answerContainer.innerHTML = data[qNumber].answers.map((item, index) =>
    `
          <div class="answer">
            <input name="answer" type="radio" id=${index} value=${item.isCorrect}>
            <label for=${index}>${item.answer}</label>
          </div>

    `
  ).join('');

  selecteAnswer();
};


const selecteAnswer = ()=>{
  answerContainer.querySelectorAll('input').forEach(el=>{
    el.addEventListener('click', (e)=>{
      selectedAnswer = e.target.value
    })
  })
}

const submitAnswer = ()=>{
  submit.addEventListener('click', ()=>{
    if(selectedAnswer !== null){
      selectedAnswer === 'true' ? correctCount++ : wrongCount++
    qIndex++
    showQuestion(qIndex)
    } else alert('select an answer first');
    
  })
}

showQuestion(qIndex);
submitAnswer();

