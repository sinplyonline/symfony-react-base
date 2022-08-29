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
    <div className="p-6 text-gray-900 bg-white shadow rounded">
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
      <table className="bg-white w-full rounded shadow border-separate border-spacing-0 border border-gray-200">
        <thead className="">
          <tr className="w-full text-gray-500  text-justify uppercase text-xs bg-gray-50 text-sm ">
            <th className="w-2/4 pl-5 font-normal  rounded-tl  border-gray-200 py-4">
              Name
            </th>
            <th className="w-2/4 pl-5 font-normal rounded-tr border-gray-200 py-4">
              Score
            </th>
          </tr>
        </thead>
        <tbody>
          {results.map((result, index) => {
            return (
              <tr key={index} className=" w-full text-sm ">
                <td className="w-2/4 py-4 pl-5 border-t">{result.name}</td>
                <td className="text-gray-500 w-2/4 py-4 pl-5 border-t">{result.score}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Results
