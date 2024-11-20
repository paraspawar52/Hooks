import React, { useCallback, useState } from 'react'



const Passwordgenerator = () => {

  let [length, setLength] = useState(8)
  let [numberAllowed, setNumberAllowed] = useState(false)
  let [characterAllowed, setCharacterAllowed] = useState(false)
  let [Password, setPassword] = useState("")

  const PasswordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "012345789"
    if (characterAllowed) str += "!@#$%^&*_{}`~"

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)

      pass = str.charAt(char)

    }
    setPassword(pass)

  }, [length, numberAllowed, characterAllowed, setPassword])


  return (
    <div>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-4 my-8 text-orange-500 bg-gray-800'>
        <h1 className='text-white text-center'>Password generator</h1>
        <div className='className="flex shadow rounder-lg overflow-hidden mb-4  "'></div>
        <input type="text" name="" id="" value={Password} className="outline-none w-full py-1 px-3" placeholder='Password' readOnly />


        <button className='font-medium ml-4'>copy</button>

      </div>
      <div className='flex text-sm gap-x-2'></div>
      <div className='flex items-center gap-x-1'>
        <input type="range" min={6} max={100} value={length} className='cursor-pointer' />
        <label>length:{length}</label>
      </div>

    </div>





  )
}

export default Passwordgenerator