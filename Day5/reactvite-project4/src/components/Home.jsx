import React from 'react'

const Home = () => {
  return (
    <>
    <div className='bg-black text-white p-39'>
        <div>
            <h1 className='text-center text-6xl p-4'>The Ultimate Driving Machine</h1>
            <p className='text-center text-lg  p-3'>Experience luxury, performance, and innovation in every journey. 
              Discover BMW's latest lineup of premium sedans, SUVs, electric vehicles, and sports cars.</p>

            <div className='flex flex-col w-90 justify-center align-center gap-5 mx-100'>
            <button className='bg-white rounded-md p-3 text-black hover:bg-blue-400 '>Explore Models</button>
            <button className='bg-white rounded-md p-3 text-black hover:bg-blue-400 '>Book a Test Drive</button>
            </div>
        </div>
    </div>
    
    
    </>
  )
}

export default Home
