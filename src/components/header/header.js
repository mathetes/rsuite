import React, { Component } from 'react';
import 'rsuite/dist/styles/rsuite.min.css';
import { Navbar, Nav } from 'rsuite';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <a className="navbar-brand logo">Резюме</a>
        </Navbar.Header>
        <Navbar.Body>
          <Nav>
            <Nav.Item>
              <ul>
               <li><Link to='/'>Главная</Link></li>
              </ul>
            </Nav.Item>
            <Nav.Item>
              <ul>
                 <li><Link to='/skills'>Навыки</Link></li>
               </ul>
            </Nav.Item>
            <Nav.Item>
              <ul>
                 <li><Link to='/portfolio'>Портфолио</Link></li>
               </ul>
            </Nav.Item>
            <Nav.Item>
              <ul>
                 <li><Link to='/contacts'>Контакты</Link></li>
              </ul>
            </Nav.Item>
          </Nav>
        </Navbar.Body>
      </Navbar>
    );
  }
}

export default Header;