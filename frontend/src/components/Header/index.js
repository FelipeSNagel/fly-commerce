import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import Categoria from './Categoria';
import { FaRegUserCircle, FaShoppingCart, FaSearch } from 'react-icons/fa';

import { Nav, Navbar, Button, Form, FormControl } from 'react-bootstrap';

import { ReactComponent as Sun } from '~/assets/sun.svg';
import { ReactComponent as Moon } from '~/assets/moon.svg';

import { Container, ToggleContainer } from './styles';

import { lightTheme, darkTheme } from '~/themes/theme';
import { darkMode } from '~/store/modules/theme/actions';
import { signOut } from '~/store/modules/auth/actions';

export default function Header() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);
  const isLight = theme.theme === 'light';

  function changeTheme() {
    const themeChange = theme.theme === 'light' ? 'dark' : 'light';
    const toggleTheme = themeChange === 'light' ? lightTheme : darkTheme;

    dispatch(darkMode(themeChange, toggleTheme));
  }

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg={theme.theme}
        variant={theme.theme}
      >
        <Navbar.Brand>
          <NavLink to="/dashboard">
            <img
              src="https://lh3.googleusercontent.com/proxy/GQvWVI173GTK3TTMEfiiBGa21xpsYGiSycCU2i2A5zVshMGxG09Px9Ltbn1Q5xEt_P8Toim2GLQk_Kiw17t6IpaLTmhS_XjedEyzDPCkcHKBJLzUb6cKbqfqS64"
              width="150"
              height="50"
              className="d-inline-block align-top"
              alt="React-Bootstrap-Logo"
            />
          </NavLink>
        </Navbar.Brand>

        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <FaSearch size={20} />
        </Form>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Item>
              <NavLink to="/cart">
                <FaShoppingCart
                  alt="avatar"
                  size={20}
                  style={{ marginRight: 5 }}
                />
                Carrinho
              </NavLink>
            </Nav.Item>
            <Nav.Item className="avatar">
              <NavLink to="/profile">
                <FaRegUserCircle alt="avatar" size={30} />
                Perfil
              </NavLink>
            </Nav.Item>
            <Button
              type="button"
              size="sm"
              onClick={handleSignOut}
              variant="danger"
            >
              Sair
            </Button>
            <Nav.Item>
              <ToggleContainer lightTheme={isLight} onClick={changeTheme}>
                <Sun />
                <Moon />
              </ToggleContainer>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Categoria theme={theme.theme} />
    </Container>
  );
}
