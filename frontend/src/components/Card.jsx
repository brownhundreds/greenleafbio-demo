import logo from "../assets/LOGO.PNG";
import '../styles/Card.css'



export const Card = () => {
  return (
    <div className='card'>
        <img src={logo} alt="logo" />
        <div className='details'>
            <h2>Bob</h2>
            <p>lol</p>
        </div>
    </div>
  )
}
