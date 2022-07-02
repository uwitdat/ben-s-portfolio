import './ContactPage.css'
import { DiGithubBadge } from 'react-icons/di'
import { AiFillLinkedin } from 'react-icons/ai'
import { BiMailSend } from 'react-icons/bi'
import EmailMe from '../EmailMe/EmailMe'
import React, { useState, useEffect } from 'react'

const ContactPage = ({ isVisible }) => {
  const [email, setEmail] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    email ? document.body.style.overflow = "hidden" : document.body.style.overflow = "scroll"
  }, [email])

  return (
    <div className="container-sev" id='contact-me'>
      <h1 className="title" id="black">CONTACT ME</h1>
      <div className="links">
        <div className="link">
          <a href='https://www.linkedin.com/in/ben-shekhtman-751475178/'
            target='_blank' rel="noreferrer">
            <AiFillLinkedin id='link'
            />
          </a>
          <h3>LinkedIn</h3>
        </div>

        <div className="link">
          <a href='https://www.github.com/uwitdat/'
            target='_blank' rel="noreferrer">
            <DiGithubBadge id='link' />
          </a>
          <h3>Github</h3>
        </div>

      </div>

      <div className={isVisible ? 'email-static fade-in-email' : 'email-static'}>
        <div className={email ? 'expanded' : 'email-me'}>
          {email ? (
            <React.Fragment>
              <EmailMe setEmail={setEmail} setSuccess={setSuccess} />

            </React.Fragment>
          ) : (
            <React.Fragment>
              {success ? (
                <p>sent! 🎉</p>
              ) : (
                <React.Fragment>
                  <BiMailSend onClick={() => setEmail(true)} />
                  <p onClick={() => setEmail(true)}> Email Me</p>
                </React.Fragment>
              )}

            </React.Fragment>
          )}
        </div>
      </div>

      <footer className='footer'>© Ben Shekhtman {new Date().getFullYear()}</footer>
    </div>
  )
}

export default ContactPage;