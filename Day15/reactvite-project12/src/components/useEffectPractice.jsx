import { useState, useEffect } from "react"

const [count, setCount] = useState(0)
const useEffectPractice = () => {

   useEffect(()=>{
       console.log('increased', count)
       
      },[count])
  return (
    
      <>
      <h1>Count: {count}</h1>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </>

  )
}

export default useEffect
