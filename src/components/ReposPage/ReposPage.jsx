import './ReposPage.css'
import { DiGithubBadge } from 'react-icons/di'

const ReposPage = () => {
  return (
    <div className="container-four">
      <h1 className="title" id="black">MORE PROJECTS</h1>
      <div className="repos-container">
        <div className="repos">
          <DiGithubBadge id='link' /><p>Gear-Guru</p>
        </div>

        <div className="repos">
          <DiGithubBadge id='link' /><p>Finance Tracker</p>
        </div>

        <div className="repos">
          <DiGithubBadge id='link' /><p>Guitar Blog</p>
        </div>

        <div className="repos">
          <DiGithubBadge id='link' /><p>Message-Me app</p>
        </div>

        <div className="repos">
          <DiGithubBadge id='link' /><p>Pokemon collector</p>
        </div>
      </div>
    </div>
  )
}

export default ReposPage;