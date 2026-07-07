import imageone from "../assets/card1.jpg"
import imagetwo from "../assets/card2.jpg"
import imagethree from "../assets/card3.jpg"
import imagefour from "../assets/card4.webp"

const Cards = () => {
  return (
    <div className="bg-blue-100 p-4 mt-5">
        <div className="flex justify-between p-7 bg-beige-300">
            <div className="bg-blue-300 h-80 p-5 rounded-lg">
                <img className="h-50 w-70" src={imageone} alt="" />
                <h2>Home 1</h2>
                <p>Home Details</p>
                <button className="mt-4 bg-blue-500 rounded w-70">Book Now</button>
            </div>
            <div className="bg-blue-300 h-80 p-5 rounded-lg">
                <img className="h-50 w-70" src={imagetwo} alt="" />
                <h2>Home 1</h2>
                <p>Home Details</p>
                <button className="mt-4 bg-blue-500 rounded w-70">Book Now</button>
            </div>
            <div className="bg-blue-300 h-80 p-5 rounded-lg">
                <img className="h-50 w-70" src={imagethree} alt="" />
                <h2>Home 1</h2>
                <p>Home Details</p>
                <button className="mt-4 bg-blue-500 rounded w-70">Book Now</button>
            </div>
            <div className="bg-blue-300 h-80 p-5 rounded-lg">
                <img className="h-50 w-70" src={imagefour} alt="" />
                <h2>Home 1</h2>
                <p>Home Details</p>
                <button className="mt-4 bg-blue-500 rounded w-70">Book Now</button>
            </div>
        </div>
    </div>
  )
}

export default Cards
