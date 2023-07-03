import React, { useEffect, useState } from 'react'
import { getWeather } from './api'
import { IoIosSearch } from 'react-icons/io'
import Weather from './components/weather'
import axios from 'axios'

function App() {
  const [city, setcity] = useState('')
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');
  const [backimg, setBackimg] = useState('https://live.staticflickr.com/65535/52825740603_6d745bc76f_o.jpg');

  const handleChange = (e) => {
    setcity(e.target.value);
  }

  const getPhoto = async () => {
    await axios.get(`https://api.unsplash.com/search/photos?page=1&query=${city}&client_id=${import.meta.env.VITE_API_KEY}`).then((res) => {
      if (res.data.results) {
        setBackimg(res.data.results[(Math.floor(Math.random() * 6))].urls.raw);
      }
    }).catch((err) => {
      console.log(err);
    })
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const weather = await getWeather(city, setError);
      console.log(weather);
      getPhoto();
      setWeather(weather);
    } catch (err) {
      setError('Cidade não encontrada. ');
    }
  }

  return (
    <>
      <div style={{ backgroundImage: `url(${backimg})`}} className='flex items-center justify-center flex-col bg-slate-50 h-screen w-full bg-cover bg-no-repeat'>
        <div className='text-black h-5/6 w-fit sm:w-3/4 md:w-2/4 lg:w-1/4 rounded-sm flex-col flex bg-neutral-100 shadow-sky-900 shadow-sm' >
          <form onSubmit={handleSubmit} className='w-full h-1/6 flex justify-center items-center'>
            <div className='flex flex-row h-10 bg-transparent self-start mt-10 w-11/12 border border-slate-300 rounded' >
              <input value={city} onChange={handleChange} placeholder='Digite uma cidade:' type="text" className='bg-white capitalize text-center text-black w-10/12 rounded-l hover:cursor-pointer ' />
              <div className='ml-auto w-2/12 bg-white rounded-r flex items-center justify-center '>
                <button type="submit" className='w-full h-full relative hover:bg-slate-200 rounded-r border-l border-slate-300'>
                  <IoIosSearch className='absolute inset-0 m-auto w-3/5 h-3/5' />
                </button>
              </div>
            </div>
          </form>
          <div className='flex h-5/6 p-4 bg-transparent'>
            {error ?
              <p>{error}</p>
              :
              <Weather weather={weather} />
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default App
