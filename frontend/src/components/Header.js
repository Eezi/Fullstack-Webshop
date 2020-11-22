import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";
import HomeScreen from "../screens/HomeScreen";
import { Logout, logout } from '../actions/userActions';
import { LinkContainer } from 'react-router-bootstrap';
import { NavDropdown } from "react-bootstrap";

const Header = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
}
  return (
    <StyledHeader>
      <Link to="/">
        {" "}
        <H3>WEBSHOP</H3>
      </Link>
      <Nav>
        <Ul>
          <Link to="/cart">
            {" "}
            <Li>
              <I className="fas fa-shopping-cart"></I>CART
            </Li>
          </Link>
            {userInfo ? (
                <NavDropdown title={userInfo.name} id="username">
                    <LinkContainer to="/profile">
                        <NavDropdown.Item>Profile</NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Item onClick={logoutHandler}>
                        Logout
                    </NavDropdown.Item>
                </NavDropdown>
            ) : 
          <Link to="/login">
            {" "}
            <Li>
              <I className="fas fa-user"></I>SIGN IN
            </Li>
          </Link>
             }
        </Ul>
      </Nav>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  font-family: Arial, Helvetica, sans-serif;

  top: 0;
  left: 0;
  position: fixed;
  padding: 0.5rem;
  font-size: 1.2rem;
  background-color: #303242;
  color: #fff;
  margin-bottom: 30px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  width: 100%;
`;

const I = styled.i`
  padding-right: 0.5rem;
  color: #fff;
`;

const Ul = styled.ul`
  display: flex;
  list-style: none;
  padding: 0.5rem;
  margin: 0;
`;

const Nav = styled.nav`
  justify-self: right;
`;

const Li = styled.li`
  display: inline;
  padding: 0.5rem 2.3rem 0 2.3rem;
  color: #fff;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

const H3 = styled.h3`
  margin: auto 0 auto 40px;
  display: block;
  color: #fff;
  padding: 0.5rem;
`;
