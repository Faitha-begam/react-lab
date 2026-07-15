const Events = () => {
    let number = 1 
    const click=()=>{
    alert("Button Clicked")
    }
    const increase=()=>{
       number++
       document.getElementById("value").innerText =`Increament:  nb   ${number}`
    }
  return (
    <>
    <div className='flex justify-center items-center gap-20 mt-90'>
      <button className='bg-blue-300 p-3 rounded ' onClick={click}>Click me</button>
      <button className='bg-blue-300 p-3 rounded ' onClick={increase}>increase</button>
      </div>
      <div>
        <p id='value'>Increament: {number}</p>
      </div>
    </>
  )
}

export default Events
