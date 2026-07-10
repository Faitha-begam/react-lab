const ObjectRendering = () => {
    const obj = {name:"vijay",movie1:"leo",Blockbuster:{movie1:"ghilli",movie2:"mersal", movie3:"jananayagan"}}
  return (
    <>
    <div className="bg-slate-300 w-50 m-auto mt-4 p-10">
      <h2 className="bg-gray-800 text-white text-center p-3 mb-2">{obj.name}</h2>
      <h2 className="bg-gray-800 text-white text-center p-3 mb-2">{obj.Blockbuster.movie3}</h2>
    </div>
    </>
  )
}

export default ObjectRendering
