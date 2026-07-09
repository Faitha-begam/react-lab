import banner from '../assets/banner2.jpg'
const Banner = () => {
  return (
    <>
     <div>
         <div className="bg-cover bg-center h-150" style={{ backgroundImage: `url(${banner})` }}>
            <h1 className='text-white text-6xl p-4'>Experience the Future of Driving</h1>
            <p className='text-white text-center text-lg  py-8 w-200'>Discover the perfect blend of luxury, performance, and innovation with BMW's world-class lineup. Every journey begins with precision engineering and unmatched driving pleasure.</p>

            <div className='flex flex-col w-90 justify-center align-center gap-5 mx-30'>
            <button className='bg-blue-300 rounded-md p-3 text-black hover:bg-white '>Explore Models</button>
            <button className='bg-blue-300 rounded-md p-3 text-black hover:bg-white '>Book a Test Drive</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Banner
