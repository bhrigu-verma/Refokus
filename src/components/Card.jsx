import React from 'react'
import PropTypes from 'prop-types';
import { FaArrowRight } from "react-icons/fa";
function Card({width,start,para,hover}) {
  return (
    <div className={`rounded-2xl w-full bg-black ${hover} ${width}`}>
    <div className={` max-w-screen-xl flex-col justify-between text-white  p-5 flex min-h-[30rem] `}>
   <div>
    <div className='text-black w-full flex'>
    <h3 className='ml-5 pl-10'></h3>
   
    </div>
    <h1 className='text-3xl font-medium mt-10'>Whatever heading</h1>
    </div>
    
    <div className='down w-full mt-60 '>
    {
    start===true && (   <> <h1 className='text-6xl font-semiblod leading-none '> Start a  project</h1>
        <button className='flex  rounded-full mt-5 text-white border-4 border-sky-100 py-3 px-3 m-2'> contact us <div className="mx-2 my-1"><FaArrowRight /></div> </button> </>) 
    }
{ para===true && ( <p className='text-sm font-medium mt-3'> hello there how are you i am fine </p>)
    
}

   
    </div>
    </div>
    </div>
  )
}

export default Card