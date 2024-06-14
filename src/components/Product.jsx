// import React from 'react'
// import { connect } from 'react-redux'

import Button from "./button"

export const Product = ({ val }) => {
  return (
    <div className='w-full py-20 text-white'>
    <div className='max-w-screen-xl text-white mx-auto flex items-center justify-between'>
      <h1 className="text-6xl capitalize text-white font-semibold"> {val.title} </h1>
      
      <div className="dets w-1/3 overflow-wrap max-w-[40%]"> <div className="text-sky-100 mb-10">{val.description}</div>
    
        <div className="flex items-center gap-20">
        {val.live && <Button/>}
        {val.case && <Button title="case study"/>}
        </div>
        
      </div>
    </div>
  </div>
  )
}

