import './ReposPage.css'
import { DiGithubBadge } from 'react-icons/di'

const ReposPage = () => {
  return (
    <div className="container-four">
      <h1 className="title" id="black">MORE PROJECTS</h1>
      <div className="repos-container">

        <a href='https://github.com/uwitdat/gear-guru-sell-and-buy'
          target='_blank'><div className="repos">
            <DiGithubBadge id='link' /><p>Express Gear-Guru</p>
          </div></a>

        <a href='https://github.com/uwitdat/mern-todos-react'
          target='_blank'><div className="repos">
            <DiGithubBadge id='link' /><p>MERN TODOS </p>
          </div></a>

        <a href='https://github.com/uwitdat/MERN-CHAT-CLIENT'
          target='_blank'><div className="repos">
            <DiGithubBadge id='link' /><p>MERN live Chat </p>
          </div></a>

        <div className="repos">
          <DiGithubBadge id='link' /><p>Rails Finance Tracker</p>
        </div>

        <div className="repos">
          <DiGithubBadge id='link' /><p>Rails Guitar Blog</p>
        </div>

        <div className="repos">
          <DiGithubBadge id='link' /><p>Rails Messenger</p>
        </div>

        <div className="repos">
          <DiGithubBadge id='link' /><p>Django Pokemon</p>
        </div>
      </div>
    </div>
  )
}

export default ReposPage;