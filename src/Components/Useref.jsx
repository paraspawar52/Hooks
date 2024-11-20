import React from 'react'
import { useRef } from 'react';

const Useref = () => {
    const inputRef=Useref(null);
    const handleClick=()=>{
        inputRef.current.focus();
    }
  return (
    <div>
        <input ref={inputRef} type='text'/>
        <input type="text" />
    <button onClick={handleClick}> Focus input</button>
    </div>
  )
}

export default Useref