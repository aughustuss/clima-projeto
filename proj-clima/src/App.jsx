import React, { useState } from 'react'
import { getWeather } from './api'
import { IoIosSearch } from 'react-icons/io'

function App() {
  const [city, setcity] = useState('')
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setcity(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const weather = await getWeather(city, setError);
      setWeather(weather);
    } catch (err) {
      setError('Cidade não encontrada. ');
    }
  }

  return (
    <>
      <form className='flex justify-center items-center bg-slate-200 h-screen w-full' >
        <div className='w-96 h-2/3 bg-neutral-900 flex justify-center items-center rounded-xl'>
          <div className='flex flex-row h-10 bg-transparent self-start mt-5 w-11/12' >
            <input type="text" className='text-white w-10/12 bg-transparent text-center rounded-l border border-neutral-500 hover:cursor-pointer focus:border-neutral-500' />
            <div className='ml-auto w-2/12 bg-white rounded-r flex items-center justify-center'>
              <button type="submit" className='w-full h-full relative'>
                <IoIosSearch className='absolute inset-0 m-auto w-3/5 h-3/5' />
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  )
}

export default App
