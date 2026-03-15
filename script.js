import { getQuestions } from './api/questions.js'
import { submitAnswer } from './api/answer.js'

async function initQuiz() {
  const container = document.getElementById('quiz-container')
  const questions = await getQuestions()

  questions.forEach(q => {
    const div = document.createElement('div')
    div.innerHTML = \
      <p>\</p>
      <input type='text' id='answer-\'>
      <button onclick='submitAnswerHandler(\)'>‘—M</button>
    \
    container.appendChild(div)
  })
}

window.submitAnswerHandler = async (questionId) => {
  const input = document.getElementById(\nswer-\\)
  const answer = input.value
  const success = await submitAnswer(1, questionId, answer)
  if(success) alert('‰ñ“š‘—M‚µ‚Ü‚µ‚½I')
}

initQuiz()
