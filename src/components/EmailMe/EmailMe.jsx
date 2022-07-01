import React, { useEffect, useState } from 'react'
import { BiMailSend } from 'react-icons/bi'
import emailjs from '@emailjs/browser';
import './EmailMe.css';

const EmailMe = ({ setEmail, setSuccess }) => {
  const [vis, setVis] = useState(false)
  const [errors, setErrors] = useState(null);
  const [isSubmit, setIsSubmit] = useState(false);

  useEffect(() => {
    setVis(true)
    window.scrollTo(0, document.body.scrollHeight)
  }, [])

  useEffect(() => {
    if (errors) setTimeout(() => { setErrors(null) }, 1000)
  }, [errors])


  const handleSendEmail = async (e) => {
    e.preventDefault();

    const isValid = validateForm(e);
    if (!isValid) return;
    setIsSubmit(true);

    const { text, error } = await emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      e.target, process.env.REACT_APP_EMAILJS_USER_ID)

    if (text === 'OK') {
      handleSuccess();
    } else {
      console.log(error.text);
    }
  }

  const handleSuccess = () => {
    setErrors(null);
    setTimeout(() => { setEmail(false) }, 1000)
    setSuccess(true);
  }

  const validateForm = (e) => {
    let ers = {};

    for (var i = 0; i < e.target.children.length - 1; i++) {
      const { name, value } = e.target.children[i];
      if (value === '') {
        ers[name] = true;
      }
      if (name === 'email' && value !== '' && value.search(/@/) === -1) {
        ers[name] = true;
      }
    }
    setErrors(ers);
    const isErrors = Object.keys(ers).length;
    if (isErrors) return false;

    return true;
  }

  return (
    <div className='EmailMeContainer'>
      <section className={vis ? 'emailMe vis' : 'emailMe'}>
        <button className='emailme-close-btn' onClick={() => setEmail(false)}>x</button>
        <h3>Get In Touch <BiMailSend style={{ transform: 'translateY(6px)' }} /> </h3>
        <form className='emailme-form' onSubmit={handleSendEmail}>

          <input
            placeholder='Subject'
            name='subject'
            className={errors && errors['subject'] ? 'input-err' : ''}
          />
          <input
            placeholder='Email'
            name='email'
            className={errors && errors['email'] ? 'input-err' : ''}
          />
          <textarea
            placeholder='Enter Message'
            name='message'
            className={errors && errors['message'] ? 'input-err' : ''}
          />
          <button type='submit' disabled={isSubmit}>Send</button>
        </form>
      </section>

    </div>
  )
}

export default EmailMe