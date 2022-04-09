import './index.css'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container} from 'react-bootstrap';
import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import DSULogo from './Logos/contact-logos/DSULogo.svg';
import GithubFooterLogo from './Logos/contact-logos/GithubFooterLogo.svg';
import FaceBookFooterLogo from './Logos/contact-logos/FacebookFooterLogo.svg';
import InstagramFooterLogo from './Logos/contact-logos/InstagramFooterLogo.svg';

export default class Header extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg py-5" bg="white" variant="white">
  <Container>
    <Navbar.Brand href="/">
      <img src={DSULogo} alt="DSU Logo" className="navbar-logo" />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
      </Nav>
            <Nav style={ {width: '70%'} }>
              <Nav.Link href="about-us" className="navbar-child">About Us</Nav.Link>
              <Nav.Link href="the-team" className="navbar-child">The Team</Nav.Link>
              <Nav.Link href="projects" className="navbar-child">Projects</Nav.Link>
              <Nav.Link href="for-clients" className="navbar-child">For Clients</Nav.Link>
              <Nav.Link href="for-clients" className="navbar-child">Join Us</Nav.Link>
              {/* <img src={GithubFooterLogo} alt="DSU Logo" className="navbar-logo" />
              <img src={FaceBookFooterLogo} alt="DSU Logo" className="navnavbar-logo" />
              <img src={InstagramFooterLogo} alt="DSU Logo" className="navbar-logo" /> */}
      </Nav>
    </Navbar.Collapse>
  </Container>
      </Navbar>
          )
  }
}

// export default class Header extends Component {
//   render() {
//     return (
//       <Router>
//         <div>
// { /* figure out the # href*/ }
//           <Navbar bg="white" variant={"white"} expand="lg">
//             <Navbar.Brand href="#" className="">
//               <img src={DSULogo} alt="DSU Logo" className="navbar-logo"/>
//             </Navbar.Brand>
//             <Navbar.Toggle aria-controls="navbarScroll" />
//             <Navbar.Collapse id="navbarScroll">
//               <Nav
//                 className="mr-auto my-2 my-lg-0"
//                 style={{ maxHeight: '100px' }}
//                 navbarScroll
//               >
//                 <Nav.Link as={Link} to="/about-us" className="navbar-child">About Us</Nav.Link>
//                 <Nav.Link as={Link} to="/the-team" className="navbar-child">The Team</Nav.Link>
//                 <Nav.Link as={Link} to="/projects" className="navbar-child">Projects</Nav.Link>
//                 <Nav.Link as={Link} to="/for-clients" className="navbar-child">For Clients</Nav.Link>
//                 <Nav.Link as={Link} to="/join-us" className="navbar-child">Join Us</Nav.Link>

//               </Nav>

//             </Navbar.Collapse>
//           </Navbar>
//         </div>
//         <div>
//           <Switch>
//             <Route path="/about">
//             </Route>
//             <Route path="/contact">
//             </Route>
//             <Route path="/">
//             </Route>
//           </Switch>
//         </div>
//       </Router>
//     )
//   }
// }
