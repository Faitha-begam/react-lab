import { useState } from "react"

const ArrObjUpdating = () => {
  const [arr,setArr] = useState([1,2,3,4,5])
  const [obj,setObj] = useState({name:"faitha", age:21})

  const changeValue =()=>{
    const copyArr = arr.map((e)=>e===2?[e,7]:e)
    setArr(copyArr)
  }
  const changeObj =()=>{
    setObj({name:"Begam"})
  }
  return (
    <>
      <p className="text-center">{arr}</p>
      <button className="bg-blue-300 rounded-lg p-3 w-30" onClick={changeValue}>click</button>

      <div>
        <p>{obj.name}</p>
        <button className="bg-blue-300 rounded-lg p-3 w-30" onClick={changeObj}>Change Obj</button>
      </div>
    </>
  )
}

export default ArrObjUpdating
