/* eslint-disable react/jsx-indent, @typescript-eslint/indent */

'use client';

import { useSession } from 'next-auth/react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { BagCheckFill, BoxArrowRight, Lock, PersonFill, PersonPlusFill } from 'react-bootstrap-icons';

const NavBar: React.FC = () => {
  const { data: session } = useSession();
  const currentUser = session?.user?.email;
  const admin1 = 'derrickq@hawaii.edu';
  const admin2 = 'jkind889@gmail.com';
  return (
    <Navbar id="top-menu" className="menutext" expand="lg">
      <Container>
        <Navbar.Brand href="/" className="me-5">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ml-auto justify-content-start">
            <Navbar.Brand className="me-5" href="/view">View our Art</Navbar.Brand>
            <Navbar.Brand className="me-5" href="/options">Interested in Buying?</Navbar.Brand>
          </Nav>
          {((admin1 === currentUser) || (admin2 === currentUser)) && (
            <Nav className="ms-auto me-5 justify-content-end">
              <Navbar.Brand href="/admin-view">Admin View</Navbar.Brand>
            </Nav>
          )}
          <Nav className="me-5">
            <Navbar.Brand href="/about">About Us</Navbar.Brand>
          </Nav>
          <Nav className="justify-content-end">
            {session ? (
              <NavDropdown id="login-dropdown" title={currentUser}>
                <NavDropdown.Item id="login-dropdown-sign-out" href="/api/auth/signout">
                  <BoxArrowRight />
                  {' '}
                  Sign Out
                </NavDropdown.Item>
                <NavDropdown.Item id="login-dropdown-change-password" href="/auth/change-password">
                  <Lock />
                  {' '}
                  Change Password
                </NavDropdown.Item>
                <NavDropdown.Item href="/your-purchases">
                  <BagCheckFill />
                  {' '}
                  View Purchases
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <NavDropdown id="login-dropdown" title="Login">
                <NavDropdown.Item id="login-dropdown-sign-in" href="/auth/signin">
                  <PersonFill />
                  Sign in
                </NavDropdown.Item>
                <NavDropdown.Item id="login-dropdown-sign-up" href="/auth/signup">
                  <PersonPlusFill />
                  Sign up
                </NavDropdown.Item>
                <NavDropdown.Item href="/your-purchases">
                  <Lock />
                  View Purchases
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
