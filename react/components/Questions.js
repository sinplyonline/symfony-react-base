import React, {useState, useEffect} from 'react';
import { Link, useParams } from "react-router-dom";
import axios from 'axios';
import Layout from './Layout';
import Question from './Question';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2'
const Questions = ()=> {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();


    const [currentId, setCurrentId] = useState([])
    const [questions, setQuestions] = useState([])
    const [step, setStep] = useState(1);
    const [answerValue, setAnswerValue] = useState([{}])

    const [data, setData] = useState("");
    const onSubmit = data => setData(answerValue);

    useEffect(() => {
        fetchQuestions()
        console.log(data)
    }, [])


    const handleSave = () => {
      axios.post('/result', data)
        .then(function (response) {
          Swal.fire({
            icon: 'success',
            title: 'Results saved successfully!',
            showConfirmButton: false,
            timer: 1500
        })
        })
        .catch(function (error) {
          Swal.fire({
              icon: 'error',
              title: 'An Error Occured!',
              showConfirmButton: false,
              timer: 1500
          })
        });
  }

    const fetchQuestions = () => {
        axios.get(`/question`)
        .then(function (response) {
          setQuestions(response.data)
        })
        .catch(function (error) {
          console.log(error);
        })
    }

    const previousStep = () => {
      setStep(step - 1);
    };

    const nextStep = () => {
      setStep(step + 1);
    };

    const handleChange = (e,id) => { 
      let updatedValue = {};
      const keyId = id;
      updatedValue = {
          [keyId]: e.target.value,
      }
      setAnswerValue(anwserValue => ({
           ...anwserValue,
           ...updatedValue
         }));
         console.log(answerValue)

       }


    return (
      <div className="bg-white w-full rounded-lg p-5 shadow pb-5">
        <form 
       onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))} 

         >
            {questions.map((question)=> {
             
              return <>
              <Question   text={question.text} questionId={question.id} visible={step !== question.id ? true: false} handleChange={handleChange}/>
              </>
              
            })}
           
       
    
      <div className='flex justify-between'>
        {step>1 &&
        <button  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={previousStep} >Previous</button>
        } 
        {step<5 && 
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=>{nextStep(); onSubmit();}} >Next</button>
        } 
        {step == 5 && 
         <input type="submit" onSubmit={onSubmit} />}
         </div>
      </form>

        </div>
    )

}

export default Questions;