import "./HomePage.css"

const HomePage = () => {
  return (
    <div className="App-container">

      <div dangerouslySetInnerHTML={{
        __html: `
      <video 
        id="vid" 
        src='myVid-compress.mp4' 
        loop
        autoplay 
        muted 
        playsinline
        type='video/mp4'
        />
        ` }}></div>

      <div className="header">
        <h1 className="title">BEN SHEKHTMAN </h1>
      </div>
      <div className="nav">
        <a id='nav' href="#projects-title">{`//`} Projects </a>
        <a id='nav' href="#resume-title">{`//`} Resume </a>
        <a id='nav' href="#contact-me">{`//`} Contact</a>

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