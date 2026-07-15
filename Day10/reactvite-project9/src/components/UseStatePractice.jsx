import { useState } from "react"

const UseStatePractice = () => {
    let [count,setCount] = useState(false)
    
    const btnClick =()=>{
        setCount(count++)
    }
  return(
    <>
      <p>{count}</p>
      <p>{count?"increased vlaue ":"no increament"}</p>
      <button className="bg-green-300 p-3 rounded-lg" onClick={btnClick}>click me</button>
    </>
  )
}

export default UseStatePractice
