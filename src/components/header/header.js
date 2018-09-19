import React, { Component } from 'react';
import 'rsuite/dist/styles/rsuite.min.css';
import { Navbar, Nav } from 'rsuite';
import { Link } from 'react-router-dom';
import styled, { injectGlobal } from "styled-components";
import './header.css';


const StyledNav = styled.nav`
  display: grid;
  grid-template-columns: 15% 15% 15% 20% 15% 20%;
  min-width: 600px;
  grid-template-rows: 40% ;
  background: #333;
  margin: 10px auto;
  > a {
    color: #fff;
    padding: 5px 10px;
    font-size: 1.3em;
  }
`;
class Header extends Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <span className="navbar-brand logo">Резюме</span>
        </Navbar.Header>
        <Navbar.Body>
          <Nav>
            <StyledNav>
               <Link to='/'>Главная</Link>
               <Link to='/skills'>Навыки</Link>
               <Link to='/resume'>Резюме</Link>
               <Link to='/portfolio'>Портфолио</Link>
               <Link to='/about'>О сайте</Link>
               <Link to='/contacts'>Контакты</Link>
            </StyledNav>
          </Nav>
        </Navbar.Body>
      </Navbar>
    );
  }
}

export default Header;
