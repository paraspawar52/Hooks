import React, { useLayoutEffect, useState } from 'react'

const Uselay = () => {
    let [color,setColor]=useState("bg-[red]")
    useLayoutEffect(()=>{
        
    let x=window.innerWidth;

        
        if(x>900)
            setColor("bg-[orange]");
        else 
        setColor("bg-[black]")


    },[])
  return (
    <div className=''>
        <div className={`h-[50vh] ${color}`}>

        </div>
        <p>sdjfhldskjf</p>




    </div>
  )
}

export default Uselay