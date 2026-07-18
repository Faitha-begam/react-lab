import { useState } from "react"

const FormHandling = () => {
 
    const [userData, setUserData] = useState("")
    const [arr, setArr] = useState([])

    const changeData =(e)=>{
       setUserData(e.target.value)
       
    }
    const updateData =()=>{
      const userArr = [userData]
      setArr(userArr)
    }

  return (
    <>
      <p>{arr}</p>
      <input type="text" placeholder="Enter Your Name " onChange={changeData} />
      <button className="bg-slate-300 p-3 rounded-xl" onClick={updateData}>Update</button>
    </>
  )
}

export default FormHandling
