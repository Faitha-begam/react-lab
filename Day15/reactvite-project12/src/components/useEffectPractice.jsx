import { useState, useEffect } from "react"



const UseEffectPractice = () => {

const [count, setCount] = useState(0)
const [name, setName] = useState("")

   useEffect(()=>{
       console.log('increased', count)
       
      },[count])

const handleNameChange =(e)=>{
   setName(e.target.value)
}

  useEffect(()=>(
    console.log("Welcome: " + e.target.value)
    
  ),[name])

  return (
    
      <>
      <div>
        <h1>Count: {count}</h1>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      </div>

      <div>
        <h1>Task 2 - Page Title Updater</h1>
        <input type="text" value={name} placeholder="Enter User Name " onChange={handleNameChange} />
      </div>
    </>

  )
}

export default UseEffectPractice
