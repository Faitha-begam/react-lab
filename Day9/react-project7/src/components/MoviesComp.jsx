const MoviesComp = ({movies}) => {
  return (
    <>
      {movies.map((movies,i)=>(
      <>
        <div key={i+1}>
        <p><strong>Hero : {i+1}</strong></p>
        <p>Hero Name : {movies.hero}</p>
        <p>Movie Name : {movies.movieName}</p>
        <p>Released Year : {movies.releaseYear}</p>
        </div> <br />
      </>
      ))}
    </>
  )
}

export default MoviesComp
