import React from 'react'
import {BsWind, BsThermometer} from 'react-icons/bs'
import {IoIosWater, } from 'react-icons/io'
import { MdLocationOn } from 'react-icons/md'
import {FaWeight} from 'react-icons/fa'

const Weather = ({weather}) => {
    return (
        <>
            <div className=' h-full w-full flex flex-col font-mono text-white'>
                <div className='h-2/5 w-full flex flex-row '>
                    <div className='h-full w-7/12 flex justify-center items-center flex-col text-md'>
                        <div className='flex flex-row items-center justify-center'>
                            <MdLocationOn/>
                            <p className='ml-2' >
                                {weather ? (weather.name + " - " + weather.sys.country) : '-'}
                            </p>
                        </div>
                        
                        <p className=' capitalize'>
                            Tempo: {weather ? (weather.weather[0].description) : '-'}
                        </p>
                    </div>
                    <div className='h-full w-5/12 flex justify-center items-center'>
                        <img src={`src/icons/${weather ? weather.weather[0].icon : 'unknown'}.png`} alt={'weather'} className='h-3/4 w-3/4' />
                    </div>
                </div>
                <div className='h-3/5 w-full flex flex-col '>
                    <p className='text-8xl w-full text-center justify-center flex '>{weather ? Math.round(weather.main?.temp - 273.15) : ''}ºC</p>
                    <div className='flex flex-col h-full justify-between p-2'>
                        <div className='flex flex-row items-center '>
                            <BsWind/><p className='ml-3' >Velocidade do vento: {weather ? (weather.wind?.speed * 1.85).toFixed(2) : '-'}Km/h </p>
                        </div>
                        <div className='flex flex-row items-center '>
                            <BsThermometer/><p className='ml-3' >Sensação térmica: {weather ? (weather.main?.feels_like - 273.15).toFixed(2) : '-'}ºC</p>
                        </div>
                        <div className='flex flex-row items-center '>
                            <IoIosWater/><p className='ml-3'>Humidade: {weather ? (weather.main?.humidity) : '-'}% </p>
                        </div>
                        <div className='flex flex-row items-center '>
                            <FaWeight/><p className='ml-3' >Pressão atmosférica:  {weather ? (weather.main.pressure) : '-'}hPa</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
  )
}

export default Weather