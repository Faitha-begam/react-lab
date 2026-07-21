import { useState } from "react"

const FormHandling = () => {

    // Task 1
const [inputValue, setInputValue] = useState("")
const [inputBtn, setInputBtn] = useState([])


    // Task 2
const [studentInput, setStudentInput] = useState({studentName:"", courseName:""})
const [studentBtn, setStudentBtn] = useState([])


    // Task 3
const [arrData, setArrData] = useState("")
const [arrBtn, setArrBtn] = useState([])


    // Task 4
const [productData, setProductData] = useState({productName:"", productPrice:""})
const [productBtn, setProductBtn] = useState([])


    // Task 1   
const handleChange =(e)=>{
    setInputValue(e.target.value)
}

const handleClick =()=>{
    const newArr = [...inputBtn]
    newArr.push(inputValue)
    setInputBtn(newArr)
    setInputValue("")
}

    // Task 2
const studentOnchange =(e)=>{
    setStudentInput({...studentInput,[e.target.name]:e.target.value})
}
const studentSubmit =(e)=>{
    e.preventDefault()
    const newStudentArr = [...studentBtn]
    newStudentArr.push(studentInput)
    setStudentBtn(newStudentArr)
    setStudentInput({studentName:"", courseName:""})
}


    // Task 3
const handleArrInput =(e)=>{
    setArrData(e.target.value)
}
const handleArrBtn =(e)=>{
    const newArr = [...arrBtn]
    newArr.push(arrData)
    setArrBtn(newArr)
    setArrData("")
}

    // Task 4
const handleProductInput =(e)=>{
    setProductData({...productData,[e.target.name]:e.target.value})
}
const handleProductBtn =(e)=>{
    e.preventDefault()
    const newProduct = [...productBtn]
    newProduct.push(productData)
    setProductBtn(newProduct)
    setProductData({productName:"", productPrice:""})
}


  return (
    <>
    <div>
       <h1>Task 1 - Name Submit</h1>
       <h2>Name: {inputBtn}</h2>
      <input type="text" placeholder='Enter the Name' value={inputValue} onChange={handleChange} /> <br /> <br />
      <button onClick={handleClick}>Show Name</button>
    </div>
    <div>
        <h1>Task 2 - Student Details</h1>
        <form onSubmit={studentSubmit}>
        <input type="text" placeholder="Enter Student Name" value={studentInput.studentName} name="studentName" onChange={studentOnchange} /> <br /> <br />
        <input type="text" placeholder="Enter Course Name" value={studentInput.courseName} name="courseName" onChange={studentOnchange} /> <br /> <br />
        <input type="submit" value="Show Student Data" />
        </form>

        <div>
            {studentBtn.map((e,i)=>(
              <div key={i+1}>
              <p>Name: {e.studentName}</p>
               <p>Course: {e.courseName}</p>
              </div>
            ))}
        </div>

        <div>
            <h1>Task 3 - Add Single Value into Array</h1>
            <input type="text" placeholder="Enter Array Element" value={arrData} onChange={handleArrInput} /> <br /> <br />
            <button onClick={handleArrBtn}>Add Element</button>
            <div>
              {arrBtn.map((e,i)=>(
                 <p key={i+1}>{e}</p>
              ))}
            </div>
        </div>

        <div>
            <h1>Task 4 - Product List</h1>
            <form>
            <input type="text" placeholder="Enter Product Name" value={productData.productName} name="productName" onChange={handleProductInput}/> <br /> <br />
            <input type="number" placeholder="Enter Product Price" value={productData.productPrice} name="productPrice" onChange={handleProductInput}/> <br /> <br />
            <button onClick={handleProductBtn}>Add Product</button>
            </form>
            <div>
                {productBtn.map((e,i)=>(
                    <div key={i+1}>
                   <p>{e.productName} - {e.productPrice}</p>
                   </div>
                ))}
            </div>
        </div>
    </div>
    </>
  )
}

export default FormHandling
