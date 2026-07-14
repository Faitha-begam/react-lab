const ArrObjRendering = () => {
    let obj = {name:"vijay", profession:"CM", past:"actor"}
    let arr = []
    arr.push(obj)

  return (
    <>
    <div>
      {arr.map((e,i)=>(
        <>
        <h2 key={i+1}>{e.name}</h2>
        <h2 key={i+1}>{e.profession}</h2>
        <h2 key={i+1}>{e.past}</h2>
        </>
      ))}
    </div>
    </>
  )
}

export default ArrObjRendering
