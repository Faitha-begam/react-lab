import { useState } from 'react'
import sleepyCat from '../assets/sleepyCat.png'
import awakeCat from '../assets/awakeCat.jpg'

const Rendering = () => {
  const [num,setNum] = useState(false)
  
  const changeNum=()=>{
    setNum(!num)
  }
  return (
    <>

      <p>{num?<img className='bg-slate-300 p-5 w-90 m-auto rounded-lg text-center mt-20' src={sleepyCat} alt="sleepycat"/>:<img className='bg-slate-300 p-5 w-100 m-auto rounded-lg text-center mt-20' src={awakeCat} alt="sleepycat"/>}</p>
      <button className='bg-black text-white p-3 rounded-lg m-auto mx-100 mt-20' onClick={changeNum}>click to change</button>
      
    </>
  )
}

export default Rendering
