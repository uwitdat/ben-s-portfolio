import "./HomePage.css"
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div className="App-container">
      <video id="vid" src='myVid.mp4' loop="true" autoplay="autoplay" muted />
      <div className="header">
        <h1 className="title">BEN SHEKHTMAN </h1>
      </div>
      <div className="nav">
        <p>// Resume </p>
        <p>About</p>
        <p>// Projects </p>
      </div>
      <div className="flex-div">
        <div className="body">
          <h2>FULL STACK WEB DEVELOPER</h2>
          <p id='top'>creative, forward thinking, inspired</p>
          <p id='top'>With a passion for <span>UI/UX</span></p>
        </div>
      </div>
    </div>
  )
}

export default HomePage;