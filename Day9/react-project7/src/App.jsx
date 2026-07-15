import { Routes, Route } from "react-router-dom"
import Products from "./components/Products"
import Banner from "./pages/Movies"
import Navbar from "./components/Navbar"
import Student from "./components/Student"
import Home from "./pages/Home"
import Employee from "./components/Employee"
import EmployeePage from "./pages/EmployeePage"
import ProductPage from "./pages/ProductPage"
import MoviesComp from "./components/MoviesComp"
import Movies from "./pages/Movies"

const App = () => {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/banner" element={<Banner/>}/>
        <Route path="/employee" element={<EmployeePage/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/movies" element={<Movies/>}/>
      </Routes>
    </>
  )
}

export default App
