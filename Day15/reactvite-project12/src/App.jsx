// import { useState } from "react"
import UseEffectPractice from './components/UseEffectPractice'

// const App = () => {

//   const fetchData = async()=>{
//   const [productData, setProductData] = useState([])

//   const getData = await fetch("https://dummyjson.com/products")
  
//   const parseData = await getData.json()
//    console.log(parseData);
//   setProductData(parseData)
// }

//   return (
//     <>
//       {productData.map((e)=>(
//         <div key={e.id}>
//           <p>{e.title}</p>
//           <p>{e.price}</p>
//         </div>
//       ))}
//     </>
//   )
// }

// export default App

const App = () => {
  return (
    <>
      <UseEffectPractice/>
    </>
  )
}

export default App
