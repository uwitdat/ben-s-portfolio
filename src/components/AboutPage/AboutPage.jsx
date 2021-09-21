import './AboutPage.css'

const AboutPage = () => {
  return (
    <div className="container-sev" id="about-title">
      <h1 className="title" id="black">ABOUT</h1>
      <div id="about">
        <p style={{ fontSize: '2rem', color: 'rgb(255, 151, 167)' }}>Primary Languages:</p>

      </div>
      <div id="about">
        <p>React</p>
        <p>Redux</p>
        <p>JavaScript</p>
        <p>HTML</p>
        <p>CSS</p>
        <p>SCSS/SASS</p>

      </div>
      <div id="about">
        <p>MongoDB</p>
        <p>Express</p>
        <p>Node</p>
        <p>GitHub</p>
        <p>CSS FRAMEWORKS</p>
      </div>

      <div id="about">
        <p style={{ fontSize: '2rem', color: 'rgb(255, 151, 167)' }}>Currently Improving:</p>
      </div>
      <div id="about">
        <p>React Native</p>
        <p>Typescript</p>
        <p>GRAPHQL</p>
        <p>PYTHON</p>
      </div>

    </div>
  )
}

export default AboutPage;