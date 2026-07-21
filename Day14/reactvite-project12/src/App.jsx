// // import { useState } from "react";

import FormHandling from "./components/FormHandling"

// import { useState } from "react"

// // const App = () => {

// //   const [inputBox,setInputBox] = useState({userName:"", userEmail:"", userPassword:""})
// //   const [inputButton, setInputButton] = useState([])

// //   const inputValue=(e)=>{

// //    setInputBox({...inputBox,[e.target.name] : e.target.value})
// //     // console.log(`name: ${e.target.name} value: ${e.target.value}`)
    
// //   }

// //   const submitForm=(e)=>{
// //       e.preventDefault()

// //       const inputArr = [...inputButton]
// //       inputArr.push(inputBox)
// //       setInputButton(inputArr)

// //       setInputBox({
// //         userName:"", userEmail:"", userPassword:""
// //       })
// //   }

// //   return (
// //     <>
// //       <form onSubmit={submitForm}>
// //         <input type="text" value={inputBox.userName} placeholder="Enter the Name" name="userName" onChange={inputValue}/>
// //         <input type="email" value={inputBox.userEmail} placeholder="Enter the email" name="userEmail" onChange={inputValue}/>
// //         <input type="password" value={inputBox.userPassword} placeholder="Enter the password" name="userPassword" onChange={inputValue}/>
// //         <input type="submit"/>
// //       </form>

// //       <div>
// //        {inputButton.map((inputBox, i) => (
// //          <div key={i}>
// //          <h2>{inputBox.userName}</h2>
// //          <h2>{inputBox.userEmail}</h2>
// //          <h2>{inputBox.userPassword}</h2>
// //          </div>
// //        ))}
// //       </div>
// //     </>
// //   )
// // }

// // export default App


// const App = () => {
  
//   const [data,setData] = useState("")
//   const [arr,setArr] = useState([])
//   const [edit,setEdit] = useState(null)

//   const handleChange=(e)=>{
//    setData(e.target.value)
//   }

//   const handleSubmit=(e)=>{
//     e.preventDefault()

//     const newArr = [...arr]
//     const userData = {
//       id:Date.now(),
//       data
//     }
//     newArr.push(userData)
//     setArr(newArr)
//     setData("")
//   }

//   const editData=(e,i)=>{
//      setData(e.data)
//      setEdit(e.id)
//   }
//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <input type="text" placeholder="enter name" value={data} onChange={handleChange} />
//         <input type="submit" value="Add" />
//       </form>
//       <div>
//         {arr.map((arr,i)=>(
//            <div key={arr.id}>

//            <p>{i+1}. {arr.data}</p>
//            <button onClick={()=>editData(arr,i)}>Edit Name</button>
//            </div>
//         ))}
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
