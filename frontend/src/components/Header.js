import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import HomeScreen from '../screens/HomeScreen'

const Header = () => {
    return (
        <StyledHeader>
            <Link to="/"> <H3>WEBSHOP</H3></Link>
            <Nav>
                <Ul>
                <Link to="/cart"> <Li><I className="fas fa-shopping-cart"></I>CART</Li></Link>
                <Link to="/login">   <Li><I className="fas fa-user"></I>SIGN IN</Li></Link>
                </Ul>
            </Nav>

        </StyledHeader>
    )
}

export default Header;

const StyledHeader = styled.header`
    font-family: Arial, Helvetica, sans-serif;
    
    top: 0;
    left: 0;
    position: fixed;
    padding: .5rem;
    font-size: 1.2rem;
    background-color: #303242;
    color: #fff;
    margin-bottom: 30px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    width: 100%;

`;

const I = styled.i`
    padding-right: .5rem;
    color: #fff;
`;

const Ul = styled.ul`
    list-style: none;
   padding: .5rem;
    margin: 0;
`;

const Nav = styled.nav`

    justify-self: right;

`;

const Li = styled.li`
    display: inline;
    padding: .5rem 2.3rem 0 2.3rem;
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
    padding: .5rem;
`;
