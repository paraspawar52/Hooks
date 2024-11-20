import React, { useReducer } from 'react'

const Counter2 = () => {
    let reducer=(state,action)=>{
        if(action.type=="increment")
            return state+1;
        else if(action.type=="decrement")
        
           {return state-1;}

        else
        return 0;




    }
    let [count,dispatch]=useReducer(reducer,0)
  return (
    <div className='flex flex-col justify-center  bg-orange-600 h-[100vh] items-center gap-[1rem]'>
    <p>{count}</p>
    <button className='text-white font-bold bg-[blue] px-[2rem] py-[.4rem] rounded-md' onClick={()=>dispatch({type:"increment"})}>incriment</button>
    <button className='text-white font-bold bg-[blue] px-[2rem] py-[.4rem] rounded-md' onClick={()=>dispatch({type:"decrement"})}>decriment</button>

 </div>
  )
}

export default Counter2