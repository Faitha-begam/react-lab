import { useState } from "react"

const ArrObjUpdating = () => {
  const [arr,setArr] = useState(["Vijay","Ajith","Suriya"])
  const [obj,setObj] = useState({name:"faitha", course:"Js"})
  const [office,setOffice] = useState({company:"Google", city:"Chennai"})

  const changeValue =()=>{
    const copyArr = arr.map((e)=>e==="Ajith"?"SK":e)
    setArr(copyArr)
  }
  const changeObj =()=>{
    setObj({...obj,course:"React"})
  }
  const changeOffice =()=>{
    setOffice({...office,company:"Microsoft"})
  }
  return (
    <>
    <div className="flex justify-center gap-6 m-50">
      <div className="bg-green-200 w-80 p-9 rounded-xl">
      <h1 className="font-bold text-xl">Updating Array</h1> <br />
      <p>{arr.join(", ")}</p> <br />
      <button className="bg-blue-300 rounded-lg p-3 w-30" onClick={changeValue}>click</button>
      </div>

      <div className="bg-green-200 w-80 p-9 rounded-xl">
        <h1 className="font-bold text-xl">Updating Object</h1> <br />
        <p>{obj.name}</p> <br />
        <p>{obj.course}</p> <br />
        <button className="bg-blue-300 rounded-lg p-3 w-30" onClick={changeObj}>Change Obj</button>
      </div>

      <div className="bg-green-200 w-80 p-9 rounded-xl">
        <h1 className="font-bold text-xl">Updating Object</h1> <br />
        <p>{office.company}</p> <br />
        <p>{office.city}</p> <br />
        <button className="bg-blue-300 rounded-lg p-3 w-30" onClick={changeOffice}>Change </button>
      </div>
      </div>
    </>
  )
}

export default ArrObjUpdating
