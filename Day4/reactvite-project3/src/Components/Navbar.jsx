import Banner from "./Banner"
import Cards from "./Cards"
import logoimage from "../assets/card4.webp"

const Navbar = () => {
  return (
    <>
    <Logo/>
    <Banner/>
    <Cards/>
    </>
  )
}

export const Logo =()=>{
    return(
        <>
        <div className='bg-blue-200 flex justify-between p-7'>
        <div className="h-10 w-10 rounded">
            <img src={logoimage} alt="" />
        </div>
        <div className='flex gap-5'>
        <a href="">Home</a>
        <a href="">Features</a>
        <a href="">Teams</a>
        <a href="">Contact</a>
        <a href="">Help</a>
        </div>
        </div>
        </>
    )
}

export default Navbar
