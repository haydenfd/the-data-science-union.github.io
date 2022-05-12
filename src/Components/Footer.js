import React, {useState} from 'react';
import './index.css';
import FaceBookFooterLogo from './Logos/contact-logos/FacebookFooterLogo.svg';
import InstagramFooterLogo from './Logos/contact-logos/InstagramFooterLogo.svg';
import LinkedInFooterLogo from './Logos/contact-logos/LinkedInFooterLogo.svg';
import EmailFooterLogo from './Logos/contact-logos/EmailFooterLogo.svg';
import GithubFooterLogo from './Logos/contact-logos/GithubFooterLogo.svg';
import AcknowledgmentFooterLogo from './Logos/contact-logos/AcknowledgmentFooterLogo.svg';
import DSUFooterLogo from './Logos/contact-logos/DSUFooterLogo.svg';
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Footer = () => { 

  const [show, setShow] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const handleFirstNameChange = (e) =>  setFirstName(e.target.value);
  const handleLastNameChange = (e) => setLastName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (firstName.length === 0) {
      alert('Looks like you forgot to tell us your first name!')
    }

    else if (lastName.length === 0) { 
      alert('Looks like you forgot to tell us your last name!')
    }
      
    else if (email.length === 0) {
      alert('Oops! We don\'t know how to update you! Please fill out a valid email!')
    }
    else { 
      console.log({
        first: firstName,
        last: lastName,
        email: email,
      })
      alert('Welcome onboard!')
    }
  }
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const submit = (e) => { 
    if (e.keyCode === 13) { 
      handleSubmit(e);
    }
  }

  return (
    <footer>
      <div className="footer">
        <Modal show={show} onHide={handleClose}>
          <Modal.Header className="modal-title" closeButton>
            <Modal.Title>Stay in touch with DSU</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label className="form-label">What's your first name?</Form.Label>
                <Form.Control
                  placeholder="John"
                  autoFocus
                  value={firstName}
                  onChange={handleFirstNameChange}
                />
                
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label className="form-label">What's your last name?</Form.Label>
                <Form.Control
                  placeholder="Doe"
                  autoFocus
                  value={lastName}
                  onChange={handleLastNameChange}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label className="form-label">What's your email address?</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="johndoe@ucla.edu"
                  autoFocus
                  value={email}
                  onChange={handleEmailChange}
                  onKeyDown={(e) => submit(e)}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Button type="submit"
            className="modal-button" onClick={handleSubmit}>
              Submit!
            </Button>
        </Modal>
      <div className="nav-container">
          <p className="nav-child">Home</p>
          <p className="nav-child">About Us</p>
          <p className="nav-child">The Team</p>
          <p className="nav-child">Projects</p>
          <p className="nav-child">For Clients</p>
          <p className="nav-child">Join Us</p>
      </div>
       <div className="logos">
           <img
            src={ EmailFooterLogo }
            alt="DSU @ Email"
            className='logo-child'
             />
          <a
            href="https://www.instagram.com/dsuatucla/?hl=en"
            target="_blank"
            rel="noreferrer"
          >
            <img
            src={InstagramFooterLogo}
            alt="DSU @ Instagram"
            className='logo-child' />
          </a>
          <a
            href="https://www.facebook.com/DSUatUCLA/"
            target="_blank"
            rel="noreferrer"
          >
            <img
            src={FaceBookFooterLogo}
            alt="DSU @ Facebook"
            className='logo-child' />
          </a>
          <img
            src={ GithubFooterLogo }
            alt="DSU @ Github"
            className='logo-child' />
          <a
            href="https://www.linkedin.com/company/the-data-science-union-at-ucla"
            target="_blank"
            rel="noreferrer"
          >
            <img
            src={LinkedInFooterLogo}
            alt="DSU @ Linkedin"
              className='logo-child' />
          </a>
          <button className="mailing-list"
            onClick={handleShow}
          >Join our mailing list</button>
        </div> 
    </div>
    </footer>
  )
}

export default Footer;