import { Routes, Route } from "react-router-dom"
import Products from "./components/Products"
import Banner from "./pages/Banner"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Products/>}/>
        <Route path="/banner" element={<Banner/>}/>
      </Routes>
    </>
  )
}

export default App
