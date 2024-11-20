import React from 'react'

const Paras3 = ({count,paras}) => {
    console.log("rerender");
    
  return (
    <div>
        <p>{count}</p>
        <button onClick={paras}>click me</button>

        </div>
  )
}

export default Paras3