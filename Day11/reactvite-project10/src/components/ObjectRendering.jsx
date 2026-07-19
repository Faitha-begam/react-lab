import { useState } from "react"

const ObjectRendering = () => {
    const[obj,setObj] = useState({
   name:"Sudhan",
   course:"React"
})
const [obj2,setObj2] = useState({
   name:"Mobile",
   price:20000
})
const [arr,setArr] = useState(["Vijay","Ajith","Suriya"])

const [arr2,setArr2] = useState([10,20,30,40]) 

const [arr3,setArr3] = useState(["Apple","Orange"])

const [arrobj, setArrObj] = useState([
   {
      id:1,
      name:"Sudhan"
   },

   {
      id:2,
      name:"Rahul"
   }
])

const [arrobj2, setArrObj2] = useState([
   {
      id:1,
      name:"Laptop"
   }
])

const [arrobj3, setArrObj3] = useState([
   {
      id:1,
      name:"Sudhan"
   },

   {
      id:2,
      name:"Rahul"
   },

   {
      id:3,
      name:"Karthik"
   }
])



// ------------------------ Functions ----------------------------

const changeName=()=>{
   setObj({...obj,name:"MERN"})
}

const changePrice=()=>{
    setObj2({...obj2,price:25000})
}

const changeHero=()=>{
   const newArr = arr.map((e,i)=>(
     e==="Ajith"?"SK":e
    ))
    setArr(newArr)
}

const changeNumber=()=>{
   const newNum = arr2.map((e,i)=>(
     e===30?100:e
    ))
    setArr2(newNum)
}

const addFruit=()=>{
    setArr3([...arr3,"Mango"])
}

const updateName=()=>{
 const newArrObj =  arrobj.map((e)=>(
      e.name==="Sudhan"?{...e,name:"Karthik"}:e
   ))
   setArrObj(newArrObj)
}

const addObject=()=>{
   setArrObj2([...arrobj2,  {id:2, name:"Mobile"}])
}

const removeElem=()=>{
   const newArrObj3 = arrobj3.filter((e)=>e.name!=="Rahul")
   setArrObj3(newArrObj3)
}

// -------------------------------------------------------------------

  return (
    <>
    <div className="flex justify-between items-center gap-2 flex-wrap" >
    <div className="bg-slate-200 p-3 rounded-2xl h-45 w-90 m-auto mt-10 text-center ">
        <p><strong>Update course from React to MERN</strong></p> <br />
      <p>{obj.name}, {obj.course}</p>
      <button className="bg-slate-500 p-3 rounded-xl mt-6 text-white" onClick={changeName}>Change Name</button>
    </div>

    <div className="bg-slate-200 p-3 rounded-2xl h-45 w-90 m-auto mt-10 text-center ">
        <p><strong>Change price to 25000</strong></p> <br />
        <p>{obj2.name}, {obj2.price}</p>
        <button className="bg-slate-500 p-3 rounded-xl mt-6 text-white" onClick={changePrice}>Change Price</button>
    </div>

     <div className="bg-slate-200 p-3 rounded-2xl h-45 w-90 m-auto mt-10 text-center ">
        <p><strong>Change Ajith to SK</strong></p> <br />
       <p>{arr.join(", ")}</p>
      <button className="bg-slate-500 p-3 rounded-xl mt-6 text-white" onClick={changeHero}>Change Hero</button>
     </div>

      <div className="bg-slate-200 p-3 rounded-2xl h-45 w-90 m-auto mt-10 text-center ">
        <p><strong>Change 30 to 100</strong></p> <br />
       <p>{arr2.join(", ")}</p>
       <button className="bg-slate-500 p-3 rounded-xl mt-6 text-white" onClick={changeNumber}>Change Number</button>
     </div>

     <div className="bg-slate-200 p-3 rounded-2xl h-45 w-90 m-auto mt-10 text-center">
        <p><strong>Add Mango</strong></p> <br />
        <p>{arr3.join(", ")}</p>
        <button className="bg-slate-500 p-3 rounded-xl mt-6 text-white" onClick={addFruit}>Add Fruit</button>
     </div>

     <div className="bg-slate-200 p-3 rounded-2xl h-45 w-90 m-auto mt-10 text-center">
        <p><strong>Update Name </strong></p> <br />
        {arrobj.map((arrobj)=>(
            <>
           <span>{arrobj.id}. {arrobj.name}  </span>
           </>
        ))}
       <br /> <button  className="bg-slate-500 p-3 rounded-xl mt-6 text-white" onClick={updateName}>Update Name</button>
     </div>

     <div className="bg-slate-200 p-3 rounded-2xl h-45 w-90 m-auto mt-10 text-center">
        <p><strong>Add new Object</strong></p> <br />
        {arrobj2.map((arrobj2)=>(
          <span>{arrobj2.id}. {arrobj2.name} </span>
        ))}
       <br/> <button  className="bg-slate-500 p-3 rounded-xl mt-6 text-white" onClick={addObject}>Add Object</button>
     </div>

     <div className="bg-slate-200 p-3 rounded-2xl h-45 w-90 m-auto mt-10 text-center">
        <p><strong>Remove an Element</strong></p> <br />
        {arrobj3.map((arrobj3)=>(
            <span>{arrobj3.id}.{arrobj3.name}  </span>
        ))}
        <br /> <button  className="bg-slate-500 p-3 rounded-xl mt-6 text-white" onClick={removeElem}>Remove Element</button>
     </div>
     </div>
    </>
  )
}

export default ObjectRendering
