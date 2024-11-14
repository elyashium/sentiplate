
import "../App.css"

export const Hero = () => {
  return (
    <div className='hero'>

      <div className="topLeft">
        <img src="src\images\topLeft.png" alt="top left bowl" className="autoRotate" />
      </div>

      <div className="redBowl">
        <img src="src\images\Redbowl.png" alt="red bowl" className="autoRotate" />
      </div>

      <div className="whiteRightDown">
        <img src="src\images\whiteRightDown.png" alt="white bowl right " className="autoRotate" />
      </div>

    </div>
  )
}

export default Hero;