// import { useState } from "react"
// import ObjectUpdate from "./components/ObjectUpdate"

import FormHandling from "./components/FormHandling"

// const App = () => {
//   const [arr,setArr] = useState([1,2,3,4,5])

//   const copyArr = [...arr]
//   copyArr[1] = "fullstack"
//   const updateArray=()=>{
//     setArr(copyArr)
//   }
//   return (
//     <>
//      <ObjectUpdate/>
//       <div>
//         <p>{arr.join(", ")}</p>
//         <button className="bg-slate-400 p-3 w-30 rounded-lg" onClick={updateArray}>Update</button>
//       </div>
//     </>
//   )
// }

// export default App


const App = () => {
  return (
    <>
      <FormHandling/>
    </>
  )
}

export default App

