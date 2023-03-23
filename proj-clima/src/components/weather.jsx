import React from 'react'
import { IoIosWater, } from 'react-icons/io'
import { MdLocationOn } from 'react-icons/md'
import { FaWeight, FaThermometerEmpty, FaWind } from 'react-icons/fa'

import { TiWeatherCloudy } from 'react-icons/ti'

const Weather = ({ weather }) => {
    return (
        <>
            <div className=' h-full w-full flex flex-col  font-poppins text-sm justify-evenly'>
                <div className='h-2/5 w-full flex flex-row '>
                    <div className='p-2 h-full w-7/12 flex justify-evenly    items-start flex-col text-md'>
                        <div className='flex flex-row items-center justify-center'>
                            <MdLocationOn size={18} />
                            <p className='ml-3' >
                                {weather ? (weather.name + " - " + weather.sys.country) : '-'}
                            </p>
                        </div>

                        <div className='flex flex-row items-center justify-center' >
                            <TiWeatherCloudy size={18} />
                            <p className=' capitalize ml-3'>
                                {weather ? (weather.weather[0].description) : '-'}
                            </p>
                        </div>
                    </div>
                    <div className='h-full w-5/12 flex bg-cover justify-center items-center'>
                        <div className='h-fit w-full flex' >
                            <img src={`src/assets/icons/${weather ? weather.weather[0].icon : 'unknown'}.png`} alt={'weather'} className='h-3/4 w-3/4' />
                        </div>
                    </div>
                </div>
                <div className='h-3/5 w-full flex flex-col'>
                    <p className='text-8xl w-full text-center justify-center flex font-oswald border-y border-slate-300'>{weather ? Math.round(weather.main?.temp - 273.15) : ''}ºC</p>
                    <div className='flex flex-col h-full p-2 justify-around'>
                        <div className='flex flex-row items-center '>
                            <FaWind size={18} /><p className='ml-3' >Velocidade do vento: {weather ? (weather.wind?.speed * 1.85).toFixed(2) : '-'}Km/h </p>
                        </div>
                        <div className='flex flex-row items-center '>
                            <FaThermometerEmpty size={18} /><p className='ml-3' >Sensação térmica: {weather ? (weather.main?.feels_like - 273.15).toFixed(2) : '-'}ºC</p>
                        </div>
                        <div className='flex flex-row items-center '>
                            <IoIosWater size={18} /><p className='ml-3'>Humidade: {weather ? (weather.main?.humidity) : '-'}% </p>
                        </div>
                        <div className='flex flex-row items-center '>
                            <FaWeight size={18} /><p className='ml-3' >Pressão atmosférica:  {weather ? (weather.main.pressure) : '-'}hPa</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Weather