import profile from "./assets/profile.jpg"
import "./App.css"
import HeroBanner from "./Components/HeroBanner"
import MovieCard from "./Components/MovieCard"

const App = () => {
  return (
    <>
  <HeroBanner/>
  <MovieCard/>
  <div className="profile-card">
  <img className="profile-img" src={profile} alt="Faitha Begam" />

  <div className="profile-content">
    <h3>Faitha Begam</h3>

    <p className="profile-para">
      Currently pursuing Full Stack Development with a focus on Frontend
      technologies, including HTML, CSS, JavaScript, Bootstrap, and React.
      Dedicated to learning modern web development and creating responsive,
      interactive user interfaces.
    </p>
  </div>
</div>
    
    </>
  )
}

export default App
