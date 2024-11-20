import React, { useCallback } from 'react'
import { useState } from 'react'

const Searchbar = () => {  
        let x=["paras","Chaman","mohit","ajay","ramo"];
        let [arr,setArr]=useState(x);
        let run=useCallback((value)=>{
            let z=x.filter((item)=>item.startsWith(value));
            if(z.length==0)
                setArr(x);
            else
            setArr(z);

        },[])


  return (
    <div>
<UISearchbar items={arr} run={run}/>
    </div>
  )
}

const UISearchbar=({items,run})=>{
    // console.log(items);
    
    return (
        <div className='bg-[orange] h-[100vh] flex flex-col items-center justify-center'> 
        
        <input type="text" className='h-[2rem] w-[25rem] rounded-md' onChange={(e)=>run(e.target.value)} />
        <ul>
            {
                items.map((items)=>{
                    return <li>{items}</li>
                })
            }
        </ul>

    </div>
    )
}

export default Searchbar