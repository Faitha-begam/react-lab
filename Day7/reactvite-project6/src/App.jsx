import ArrObjRendering from "./component/ArrObjRendering"
import NumberRendering from "./component/NumberRendering"
import ObjectRendering from "./component/ObjectRendering"

const App = () => {
  const arr = [1,2,3,4,5]
  return (
    <>
    
      <ul className="bg-slate-300 p-2 w-50 m-auto">
        {arr.map((e,i)=>(
          <li className="bg-gray-800 text-white p-1 flex flex-row justify-center items-center gap-20" key={i+1}>{e}</li>
        ))}
      </ul>

      <ObjectRendering/>
      <ArrObjRendering/>
      <NumberRendering/>
    </>
  )
}

export default App
