import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Question from './Question'
import SubmissionForm from './SubmissionForm'

function Questions() {
  const [questions, setQuestions] = useState([])
  const [currentQuestion, setCurrentQuestion] = useState(1)
  const [answerValue, setAnswerValue] = useState([])
  const [score, setScore] = useState(0)
  const [data, setData] = useState('')
  const [displayForm, setDisplayForm] = useState('')

  useEffect(() => {
    fetchQuestions()
  }, [answerValue])

  const fetchQuestions = () => {
    axios
      .get('/question')
      .then(function (response) {
        setQuestions(response.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  const previousQuestionHandler = () => {
    setCurrentQuestion(currentQuestion - 1)
  }

  const nextQuestionHandler = () => {
    setCurrentQuestion(currentQuestion + 1)
  }

  const handleChange = (e, id, correct) => {
    let updatedValue = {}
    const keyId = id - 1

    updatedValue = {
      [keyId]: correct,
    }
    setAnswerValue((anwserValue) => ({
      ...anwserValue,
      ...updatedValue,
    }))
  }

  const finishHandler = () => {
    setScore(Object.values(answerValue).filter(Boolean).length * 20)
    setDisplayForm(true)
  }

  return (
    <>
      {displayForm ? (
        <SubmissionForm score={score} />
      ) : (
        <div className="bg-white w-full rounded-lg p-5 shadow pb-5">
          {questions.map((question, index) => {
            return (
              <Question
                key={index}
                text={question.text}
                questionId={question.id}
                visible={currentQuestion !== question.id}
                handleChange={handleChange}
              />
            )
          })}
          <div className="flex justify-between">
            <button
              className={`${
                currentQuestion <= 1 ? 'invisible' : ''
              } text-sm bg-indigo-600 hover:bg-indigo-800 text-white py-2 px-4 rounded disabled:bg-indigo-200`}
              onClick={previousQuestionHandler}
            >
              Vorige vraag
            </button>
            {currentQuestion === questions.length &&
            Object.values(answerValue).length === questions.length ? (
              <button
                className="text-sm bg-indigo-600 hover:bg-indigo-800 text-white py-2 px-4 rounded disabled:bg-indigo-200"
                onClick={finishHandler}
              >
                Bekijk resultaat
              </button>
            ) : (
              <button
                disabled={
                  currentQuestion <= Object.values(answerValue).length ? false : true
                }
                className="text-sm bg-indigo-600 hover:bg-indigo-800 text-white py-2 px-4 rounded disabled:bg-indigo-200"
                onClick={() => {
                  nextQuestionHandler()
                }}
              >
                Volgende vraag
              </button>
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default Questions
