import './AboutPage.css'

const AboutPage = () => {
  return (
    <div className="container-sev" id="about-title">
      <h1 className="title" id="black">ABOUT</h1>
      <div id="about">
        <p style={{ fontSize: '1.8rem', color: 'rgb(255, 151, 167)' }}>Primary Languages:</p>

      </div>
      <div id="about">
        <p>React (Redux, Hooks)</p>
        <p>JavaScript (ES6)</p>
        <p>TypeScript</p>
        <p>Python</p>
        <p>HTML/CSS</p>
        <p>SCSS/SASS</p>
        <p style={{ color: 'rgb(255, 151, 167)' }}>CSS FRAMEWORKS <br />MUI, Bootstrap, etc...</p>

      </div>
      <div id="about">
        <p style={{ color: 'rgb(255, 151, 167)' }}>AWS <br />Lambda, DynamoDB, S3, API Gateway, SAM, Cloudwatch</p>
        <p>Flask</p>
        <p>Express</p>
        <p>MongoDB/ Mongoose</p>
        <p>SQL (PostgresQL, SQLite)</p>
        <p>Node</p>
        <p>Git</p>

      </div>


    </div>
  )
}

export default AboutPage;