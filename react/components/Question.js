import React, { useState, useEffect, useRef } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import Layout from './Layout'

function Question({ text, questionId, visible, handleChange }) {
  const [answers, setAnswers] = useState([])

  useEffect(() => {
    fetchAnswers()
  }, [])

  const fetchAnswers = () => {
    axios
      .get('/answers')
      .then(function (response) {
        setAnswers(response.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  function filterFunction(id) {
    const filteredResults = answers.filter(({ question }) => question.id === id)
    return filteredResults
  }

  return (
    <div className={`${visible ? 'invisible absolute' : ''}`}>
      <h3 className="text-xl  text-gray-900 mb-8">
        {questionId}. {text}
      </h3>
      <ul className="w-full text-sm text-indigo-900 rounded-lg border border-gray-200 mb-2">
        {filterFunction(questionId).map((answer, index) => {
          return (
            <li
              key={index}
              className="w-full border-b last:border-b-0 border-gray-200 flex items-center pl-3 hover:bg-indigo-200"
            >
              <label
                htmlFor={answer.text}
                className="py-3 w-full flex items-center  hover:cursor-pointer"
              >
                <input
                  onChange={(e) => {
                    handleChange(e, questionId, answer.correct)
                  }}
                  type="radio"
                  value={answer.text}
                  id={answer.text}
                  name={`radio-group-${questionId}`}
                  className="mr-2 focus:outline-none focus:border-0 focus:ring-0 w-4 h-4 border-gray-200 text-indigo-600"
                />
                {answer.text}
              </label>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Question
