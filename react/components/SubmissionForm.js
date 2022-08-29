import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
import Swal from 'sweetalert2'
import axios from 'axios'
function SubmissionForm({ score: score }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const [responseData, setResponseData] = useState()
  const onSubmit = (data) => {
    const formData = new FormData()
    formData.append('name', data.name)
    formData.append('email', data.email)
    formData.append('score', score)

    axios

      .post('/result', formData, { headers: { 'Content-Type': 'application/json' } })
      .then(function (response) {
        setResponseData(response.data)
      })
      .catch(function (error) {
        Swal.fire({
          icon: 'error',
          title: 'An Error Occured!',
          showConfirmButton: false,
          timer: 1500,
        })
      })
  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex items-center flex-col justify-center"
    >
      <p className="text-indigo-600 uppercase font-semi-bold">Resultaat</p>
      <h2 className="text-6xl font-bold pb-10"> {(score += '%')} </h2>
      {responseData ? (
        <div className=" font-semi-bold py-10 text-xl text-indigo-600">
          {responseData}
        </div>
      ) : (
        <div className="w-96 flex  flex-col bg-blue-50 w-full p-4 rounded mb-10 shadow">
          <p className="pb-5">Sla je resultaat op</p>
          <input
            className="border border-gray-20 rounded w-full py-2 px-3 text-gray-700 focus:outline-none "
            id="name"
            type="text"
            placeholder="Jouw naam"
            {...register('name', {
              required: 'Naam is een verplicht veld',
              maxLength: {
                value: 10,
                message: 'Maximum 10 tekens',
              },
            })}
          />
          <ErrorMessage
            errors={errors}
            name="name"
            render={({ message }) => (
              <p className="text-red-700 font-light pl-1">{message}</p>
            )}
          />
          <input
            className="border border-gray-200 rounded w-full py-2 px-3 text-gray-700 mt-3 focus:outline-none"
            id="email"
            type="text"
            placeholder="you@example.com"
            {...register('email', {
              required: 'Email is een verplicht veld',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: 'Email is niet het juiste formaat',
              },
            })}
          />
          <ErrorMessage
            errors={errors}
            name="email"
            render={({ message }) => (
              <p className="text-red-700 font-light pl-1">{message}</p>
            )}
          />

          <button
            className="bg-indigo-600 hover:bg-indigo-800 text-white font-bold py-2 mt-3 px-4 rounded focus:outline-none w-full"
            type="submit"
          >
            Opslaan
          </button>
        </div>
      )}
      <a
        className="rounded py-2 px-4 border border-gray-300 text-sm text-gray-700 shadow"
        href="/"
      >
        Ga terug naar het overzicht
      </a>
    </form>
  )
}

export default SubmissionForm
