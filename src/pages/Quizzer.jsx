import React from 'react'
import Quiz from '../components/Quiz'

const questions = [
  {
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    correctIndex: 1,
  },
  {
    question: "What is the square root of 9?",
    options: ["1", "2", "3", "4"],
    correctIndex: 2,
  },
  // Add more questions...
];

function Quizzer() {
  return (
    <Quiz questions={questions} />
  )
}

export default Quizzer