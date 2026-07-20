import { useState } from "react"

const ObjectUpdate = () => {
    const [obj, setObj] = useState({name:"mango", condition:true, type:"fruit" })

    const changeFruit =()=>{
        setObj()
    }

  return (
    <>
      <div>
        
        <p>{obj.condition?"type is true":obj.type}</p>
        <button className="bg-slate-400 p-3 w-30 rounded-lg" onClick={changeFruit}>Change</button>
      </div>
    </>
  )
}

export default ObjectUpdate
