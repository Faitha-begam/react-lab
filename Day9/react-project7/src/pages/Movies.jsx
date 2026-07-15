import MoviesComp from "../components/MoviesComp"

const Movies = () => {
  return (
    <>
    <div className="bg-green-200 w-80 h-110 p-13 m-auto mt-30 rounded-lg">
    <MoviesComp const movies = {[
  {
    hero: "Vijay",
    movieName: "Leo",
    releaseYear: 2023
  },
  {
    hero: "Ajith",
    movieName: "Vidaamuyarchi",
    releaseYear: 2025
  },
  {
    hero: "Suriya",
    movieName: "Kanguva",
    releaseYear: 2024
  }
]}/>
</div>
    </>
  )
}

export default Movies
