import './ResumePage.css';
import { FaDownload } from 'react-icons/fa'
import Modal from '../Modal/Modal'

const ResumePage = ({ setIsOpen, isOpen,
  setIsOpenTwo, isOpenTwo,
  setIsOpenThree, isOpenThree,
  setIsOpenFour, isOpenFour
}) => {


  return (
    <div className="container-five">
      <h1 className="title" id="black">RESUME</h1>

      <div className="cerf-row">
        <div
          onClick={() => setIsOpen(true)}>
          <img id="cerf" src="cerf.png" />
        </div>
        <Modal open={isOpen} onClose={() => setIsOpen(!isOpen)}>
          <img id="expanded" src="cerf.png" />
        </Modal>

        <div
          onClick={() => setIsOpenTwo(true)}>
          <img id="cerf" src="grades2.png" />
        </div>
        <Modal openTwo={isOpenTwo} onClose={() => setIsOpenTwo(!isOpenTwo)}>
          <img id="expanded" src="grades2.png" />
        </Modal>

        <div
          onClick={() => setIsOpenThree(true)}>
          <img id="cerf" src="https://i.pinimg.com/originals/86/a8/42/86a8426e58d625feb3d2e4f54468639d.jpg" />
        </div>
        <Modal openThree={isOpenThree} onClose={() => setIsOpenThree(!isOpenThree)}>
          <img id="expanded" src="https://i.pinimg.com/originals/86/a8/42/86a8426e58d625feb3d2e4f54468639d.jpg" />
        </Modal>

        <div
          onClick={() => setIsOpenFour(true)}>
          <img id="cerf" src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/blue-certificate-template-d7da5489aa80ee1dcfdcabac6ba086fa_screen.jpg?ts=1619510148https://d1csarkz8obe9u.cloudfront.net/posterpreviews/blue-certificate-template-d7da5489aa80ee1dcfdcabac6ba086fa_screen.jpg?ts=1619510148" />
        </div>
        <Modal openFour={isOpenFour} onClose={() => setIsOpenFour(!isOpenFour)}>
          <img id="expanded" src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/blue-certificate-template-d7da5489aa80ee1dcfdcabac6ba086fa_screen.jpg?ts=1619510148" />
        </Modal>
      </div>

      <div className="resume-col">
        <p id="top">Download My <span id="pink">Resume</span></p>
        <a href="resume.png" download="resume.png">
          <FaDownload id="resume" />
        </a>
      </div>
    </div>
  )
}

export default ResumePage;