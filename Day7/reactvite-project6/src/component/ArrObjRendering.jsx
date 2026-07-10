const ArrObjRendering = () => {
    let obj = {name:"vijay", profession:"CM", past:"actor"}
    let arr = []
    arr.push(obj)

  return (
    <>
    <div>
      {arr.map((e,i)=>(
        <>
        <h2 key={i}>{e.name}</h2>
        <h2 key={i}>{e.profession}</h2>
        <h2 key={i}>{e.past}</h2>
        </>
      ))}
    </div>
    </>
  )
}

export default ArrObjRendering
