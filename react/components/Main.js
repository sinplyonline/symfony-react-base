import React, { useState, useEffect } from 'react'
import Layout from './Layout'
import '../app.css'
import Questions from './Questions'
import Results from './Results'

function Main() {
  const [quiz, setQuiz] = useState(false)
  const startQuiz = () => {
    setQuiz(true)
  }
  return <Layout>{quiz ? <Questions /> : <Results startQuiz={startQuiz} />}</Layout>
}

export default Main
