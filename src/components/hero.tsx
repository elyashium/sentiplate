
import "../App.css"

export const Hero = () => {
  return (
    <div className='hero'>

      <div className="topLeft">
        <img src="src\images\topLeft.png" alt="top left bowl" className="autoRotate" />
      </div>

      <div className="redBowl">
        <img src="src\images\Redbowl.png" alt="red bowl" />
      </div>

      <div className="whiteRightDown">
        <img src="src\images\white right.png" alt="white bowl right " />
      </div>

    </div>
  )
}

export default Hero;