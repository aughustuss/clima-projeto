import React, { useState } from 'react'
import { getWeather } from './api'
import { IoIosSearch } from 'react-icons/io'
import Weather from './components/weather'
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'

function App() {
  const [city, setcity] = useState('')
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');
  const [lat, setLat] = useState(null);
  const [lon, setLong] = useState(null);
  const google = window.google

  const containerStyle = {
    width: '100%',
    height: '200px'
  }

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_API_KEY,
  })

  const handleChange = (e) => {
    setcity(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const weather = await getWeather(city, setError);
      setLat(weather.coord.lat);
      setLong(weather.coord.lon);
      console.log(lat, lon);
      setWeather(weather);
    } catch (err) {
      setError('Cidade não encontrada. ');
    }
  }

  return (
    <>
      <div className=' bg-opacity-90 bg-cover bg-center flex items-center justify-center flex-col bg-slate-100 h-screen w-full'>
        <div className='h-2/3  w-96 rounded-xl flex-col flex bg-violet-600  shadow-black shadow-2xl' >
          <form onSubmit={handleSubmit} className='w-full h-1/6 flex justify-center items-center'>
            <div className='flex flex-row h-10 bg-transparent self-start mt-10 w-11/12' >
              <input value={city} onChange={handleChange} placeholder='Digite a cidade que deseja buscar: ' type="text" className='capitalize text-center text-white w-10/12 bg-transparent rounded-l border border-slate-400 hover:cursor-pointer ' />
              <div className='ml-auto w-2/12 bg-white rounded-r flex items-center justify-center'>
                <button type="submit" className='w-full h-full relative hover:bg-slate-200 rounded-r'>
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
