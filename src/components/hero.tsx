import background from '../images/bg.jpg';



export default function hero() {
  return (


    <div>
        <img src={background} alt="" />
        <div style={{ backgroundImage: `url(${background})` }}>
        {/* Your component content */}
      </div>
    </div>
  )

}
