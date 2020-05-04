import React from 'react';
import { NavLink } from 'react-router-dom';

import { HeaderSec } from './styles';

import { Nav, NavDropdown } from 'react-bootstrap';

export default function Categiria({ theme }) {
  return (
    <HeaderSec>
      <Nav className="justify-content-center">
        <NavDropdown title="TODOS OS PRODUTOS" id="collasible-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">INFORMATICA</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">BELEZA</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">ELETRONICOS</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">VIDEO-GAMES</NavDropdown.Item>
        </NavDropdown>
        <Nav.Item>
          <NavLink to="/">INFORMATICA</NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink to="/">BELEZA</NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink to="/">ELETRONICOS</NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink to="/">ROUPAS</NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink to="/">VIDEO-GAMES</NavLink>
        </Nav.Item>
      </Nav>
    </HeaderSec>
  );
}
