import './ReposPage.css'
import { DiGithubBadge } from 'react-icons/di'

const ReposPage = () => {
  return (
    <div className="container-four">
      <h1 className="title" id="black">MORE PROJECTS</h1>
      <div className="repos-container">

        <a href='https://codesandbox.io/u/uwitdat'
          target='_blank'><div className="repos">
            <DiGithubBadge id='link' /><p>React/ JS sandboxes</p>
          </div></a>

        <a href='https://replit.com/@uwitdat/num-coverter#main.pyt'
          target='_blank'><div className="repos">
            <DiGithubBadge id='link' /><p>Python Num to Word</p>
          </div></a>

        <a href='https://replit.com/@uwitdat/num-game#script.js'
          target='_blank'><div className="repos">
            <DiGithubBadge id='link' /><p>JS Num Guess Game</p>
          </div></a>

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

        <a href='https://github.com/uwitdat/MESSAGE_ME_APP'
          target='_blank'>
          <div className="repos">
            <DiGithubBadge id='link' /><p>Rails Finance Tracker</p>
          </div></a>

        <a href='https://github.com/uwitdat/GUITAR-BLOG'
          target='_blank'>
          <div className="repos">
            <DiGithubBadge id='link' /><p>Rails Guitar Blog</p>
          </div></a>

        <a href='https://github.com/uwitdat/MESSAGE_ME_APP'
          target='_blank'>
          <div className="repos">
            <DiGithubBadge id='link' /><p>Rails Messenger</p>
          </div></a>

        <a href='https://github.com/uwitdat/pokemon_cards_app'
          target='_blank'>
          <div className="repos">
            <DiGithubBadge id='link' /><p>Django Pokemon</p>
          </div></a>

        <a href='https://github.com/uwitdat/portfolio-the-3rd'
          target='_blank'>
          <div className="repos">
            <DiGithubBadge id='link' /><p>React portfolio</p>
          </div></a>
      </div>
    </div>
  )
}

export default ReposPage;