import './ContactPage.css'
import { DiGithubBadge } from 'react-icons/di'
import { AiFillLinkedin, AiFillFacebook } from 'react-icons/ai'

const ContactPage = () => {
  return (
    <div className="container-sev">
      <h1 className="title" id="black">CONTACT ME</h1>

      <div className="flx-row">
        <div className="flx-txt">
          <p id="top-shadow">Based in</p>
          <div className="more"><p className="pink" id="top-bold">benshekhtman</p></div>
        </div>

        <div className="flx-txt-two">
          <p id="top-shadow-two">Toronto, on</p>
          <div className="more-two"><p className="pink" id="top-bold-two">@hotmail.com</p></div>
        </div>
      </div>

      <div className="links">
        <a href='https://www.linkedin.com/in/ben-shekhtman-751475178/'
          target='_blank'>
          <AiFillLinkedin id='link'
          />
        </a>
        <a href='https://www.facebook.com/ben.shekhtman/'
          target='_blank'>
          <AiFillFacebook id='link' />
        </a>
        <a href='https://www.github.com/uwitdat/'
          target='_blank'>
          <DiGithubBadge id='link' />
        </a>
      </div>
    </div>
  )
}

export default ContactPage;