
import './App.css';

const App = () => {
  return (
    <>
      <div className="App-container">
        <video id="vid" src='myVid.mp4' loop="true" autoplay="autoplay" muted ></video>
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

      <div className="container-two">
        <div className="content">
          <p id='lan'>// LANGUAGES</p>
          <hr />
          <p id="txt">JAVASCRIPT, PYTHON, RUBY</p>
          <p id="txt"> HTML, CSS, SASS</p>
        </div>


        <div className="content">
          <p id='lan'>// FRAMEWORKS</p>
          <hr />
          <p id="txt">REACT, EXPRESS, NODE, DJANGO</p>
          <p id="txt">RUBY ON RAILS, BOOTSTRAP, MATERIALIZE</p>
        </div>

        <div className="content">
          <p id='lan'>// DATABASES</p>
          <hr />
          <p id="txt">MONGODB, PSQL, SQLITE</p>
        </div>

        <div className="content">
          <p id='lan'>// DEV-OPS</p>
          <hr />
          <p id="txt">GITHUB, AWS, HEROKU</p>
        </div>

      </div>




    </>
  )
}

export default App;
