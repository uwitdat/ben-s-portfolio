import './ResumePage.css';
import { FaDownload } from 'react-icons/fa'
import Modal from '../Modal/Modal'

const ResumePage = ({
  setIsOpen, isOpen,
}) => {


  return (
    <div className="container-five" id='resume-title'>

      <h1 className="title" id="black">Resume & Cerf</h1>

      <div className="resume-col">
        <p id="top">Download My Resume</p>
        <a href="Resume (1).pdf" download >
          <FaDownload id="resume" />
        </a>
      </div>

      <div className="cerf-row">
        <div
          onClick={() => setIsOpen(true)}>
          <img id="cerf" src="cerf.png" />
        </div>
        <Modal open={isOpen} onClose={() => setIsOpen(!isOpen)}>
          <img id="expanded" src="cerf.png" />
        </Modal>

      </div>
    </div>
  )
}

export default ResumePage;