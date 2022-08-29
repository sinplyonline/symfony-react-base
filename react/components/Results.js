import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Results({ startQuiz }) {
  const [results, setResults] = useState([])

  useEffect(() => {
    fetchResults()
  }, [])
  const fetchResults = () => {
    axios
      .get('/results')
      .then(function (response) {
        setResults(response.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  return (
    <div className="p-5 text-gray-900 bg-white">
      <div className="pb-10 flex justify-between">
        <h2 className="text-xl font-semi-bold ">Inzendingen quiz</h2>
        <button
          className="text-sm bg-indigo-600 hover:bg-indigo-800 text-white py-2 px-4 rounded disabled:bg-indigo-200"
          onClick={() => {
            startQuiz(true)
          }}
        >
          Start quiz
        </button>
      </div>
      <table className="bg-white w-full rounded-lg p-5 shadow">
        <thead>
          <tr className="w-full text-gray-400 h-8 text-justify uppercase text-sm bg-gray-100 text-sm py-4">
            <th className="w-2/4 pl-5 font-normal ">Name</th>
            <th className="w-2/4 pl-5 font-normal">Score</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result, index) => {
            return (
              <tr
                key={index}
                className="border-b last:border-b-0 border-gray-200 w-full "
              >
                <td className="w-2/4 py-4 pl-5">{result.name}</td>
                <td className="text-gray-400 w-2/4 py-4 pl-5">{result.score}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Results
