import "./HeroBanner.css"

const HeroBanner = () => {
  return (
    <>
    <div className="hero-container">
        <div className="hero-head">
            <h1>The King of Blockbusters</h1>
            <p>An iconic actor admired for his remarkable performances, dedication, and inspiring journey in Tamil cinema.</p>
            <button className="hero-btn">Know More</button>
        </div>
      <img className="hero-banner" src="./herobanner2.jpg" alt="vijay" />
    </div>
    </>
  )
}

export default HeroBanner
