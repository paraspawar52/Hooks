import React, { useState } from 'react'

const Usememo = () => {
    const[count,setCount]=useState(0)
    const[othervalue,setOtherValue]=useState(0)
  return (
    <div>
        
        <h2>Count:{count}</h2>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <h2>Other value:{othervalue}</h2>
        <button onClick={()=>setOtherValue(othervalue+1)}>Increment Other Value</button>

    </div>
  )
}

export default Usememo