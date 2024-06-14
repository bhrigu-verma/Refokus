import React from 'react'
import Card from './Card'
function Cards() {
  return (
    <div className='bg-inherit w-full '>
    <div className='max-w-screen-xl mx-auto py-20  flex '>
  <Card width="w-1/3" start={false} para={true} hover={"hover:bg-violet-600"}/>
   <Card width={"w-2/3"} start={true} para={false} hover={"hover:bg-purple-600"}/>
   
    </div>
    </div>
  )
}

export default Cards