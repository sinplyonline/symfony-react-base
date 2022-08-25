import React, {useState, useEffect} from 'react';
import { Link, useParams } from "react-router-dom";
import axios from 'axios';
import Layout from './Layout';

const Question = ({text:text, questionId:questionId, visible:visible, handleChange })=> {


    const [answers, setAnswers] = useState([])

    useEffect(() => {
        fetchAnswers()
    }, [])

    const fetchAnswers = () => {
        axios.get(`/answers`)
        .then(function (response) {
            setAnswers(response.data)
        })
        .catch(function (error) {
          console.log(error);
        })
    }
    


    function filterFunction(id){
        let filteredResults =  answers.filter(({question})=> 
         question.id === id)
          return filteredResults
       }



         
    return(
    <div className={`${visible?'hidden':''}`}>
            <h3 class="mb-4 font-semibold text-gray-900 dark:text-white"> {text}</h3>
<ul class="w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
       
        


    {filterFunction(questionId).map((answer)=>{
        return (<li class={`w-full rounded-lg border-b border-gray-200 dark:border-gray-600`}>
        <div class="flex items-center pl-3">
            <input 
            onChange={e => {
                handleChange(e, questionId);
                e.preventDefault();
               
            }}type="radio" value={answer.text} name="list-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
            <label  class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">{answer.text} </label>
        </div>
    </li>)
    })}
    </ul></div>)
}

export default Question;