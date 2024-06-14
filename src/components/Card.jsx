import React from 'react'
import PropTypes from 'prop-types';
import { FaArrowRight } from "react-icons/fa";
function Card({width,start,para,hover}) {
  return (
    <div className='w-full bg-black'>
    <div className={` max-w-screen-xl flex-col justify-between text-white rounded-xl p-5 flex min-h-[30rem] ${hover} ${width}`}>
   <div>
    <div className='text-black w-full flex'>
    <h3 className='ml-5 pl-10'>Heading d</h3>
    <FaArrowRight />
    </div>
    <h1 className='text-3xl font-medium mt-10'>Whatever heading</h1>
    </div>
    
    <div className='down w-full mt-60 '>
    {
    start===true && (   <> <h1 className='text-6xl font-semiblod leading-none '> start a  project</h1>
        <button className='rounded-full mt-5 text-black bg-zinc-100 border-zinc-200 py-3 px-3'> contact us </button> </>) 
    }
{ para===true && ( <p className='text-sm font-medium mt-3'> hello there how are you i am fine </p>)
    
}

   
    </div>
    </div>
    </div>
  )
}

export default Card