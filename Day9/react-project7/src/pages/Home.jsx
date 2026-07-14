const Home = ({Movies}) => {
    
  return (
    <>
      <div>
        {Movies.map((e,i)=>(
          <h2 key={i+1}>{e}</h2>
        ))}
      </div>
    </>
  )
}

export default Home
