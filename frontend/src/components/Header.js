import React from 'react'
import styled from 'styled-components';

const Header = () => {
    return (
        <StyledHeader>
            <H3>WEBSHOP</H3>
            <Nav>
                <Ul>
                    <Li>CART</Li>
                    <Li>SIGN IN</Li>
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

    font-size: 1.2rem;
    background-color: #303242;
    color: #fff;

    display: grid;
    grid-template-columns: repeat(2, 1fr);

    width: 100%;

`;

const Ul = styled.ul`
    list-style: none;
    margin-right: 0;
`;

const Nav = styled.nav`

    justify-self: right;

`;

const Li = styled.li`
    display: inline;
    padding: 0 2.3rem;
    
    &:hover {
        cursor: pointer;
        text-decoration: underline;
    }
`;


const H3 = styled.h3`
    margin: auto 0 auto 40px;
    display: block;
 
`;
