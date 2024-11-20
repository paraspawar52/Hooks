import React, { useState } from 'react'


const Counter = () => {
  let [count,setCount]=useState(0)

  let inc=()=>{
    setCount(count+1)
  }
   
  let decr=()=> {
    
    if(count==0)
      setCount(0)
    else
    setCount(count-1)

  }
  return (
    <div className='flex flex-col justify-center  bg-orange-600 h-[100vh] items-center gap-[1rem]'>
       <p>{count}</p>
       <button className='text-white font-bold bg-[blue] px-[2rem] py-[.4rem] rounded-md' onClick={inc}>incriment</button>
       <button className='text-white font-bold bg-[blue] px-[2rem] py-[.4rem] rounded-md' onClick={decr}>decriment</button>
{/* <button className='text-white font-bold bg-[blue] px-[2rem] py-[.4rem] rounded-md' onClick={()=>setCount(count+1)}>incriment</button>
       <button className='text-white font-bold bg-[blue] px-[2rem] py-[.4rem] rounded-md' onClick={()=>setCount(count-1)}>decriment</button> */}

    </div>


    
  )
}

export default Counter