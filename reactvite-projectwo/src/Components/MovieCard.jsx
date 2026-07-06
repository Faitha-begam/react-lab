import "./MovieCard.css"
const MovieCard = () => {
  return (
    <>
    <div className="container">
    <div className="movie-card">
      <img src="/movieposter.webp" alt="Master Movie Poster" />

      <div className="movie-content">
        <h2>Master</h2>
        <p><strong>Hero:</strong> Thalapathy Vijay</p>
        <p><strong>Collection:</strong> ₹510+ Crore</p>
      </div>
    </div>
    <div className="movie-card">
      <img src="/movieposter2.jpg" alt="Master Movie Poster" />

      <div className="movie-content">
        <h2>Leo</h2>
        <p><strong>Hero:</strong> Thalapathy Vijay</p>
        <p><strong>Collection:</strong> ₹620+ Crore</p>
      </div>
    </div>
    <div className="movie-card">
      <img src="/movieposter3.jpg" alt="Master Movie Poster" />

      <div className="movie-content">
        <h2>Jana Nayagan</h2>
        <p><strong>Hero:</strong> Thalapathy Vijay</p>
        <p><strong>Status:</strong> Upcoming </p>
      </div>
    </div>
    </div>
    </>
  )
}

export default MovieCard
