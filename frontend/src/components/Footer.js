import React from 'react'
import styled from 'styled-components';

function Footer() {
    return (
        <Footter>
           © 2020 Webshop Oy
        </Footter>
    )
}

export default Footer;

const Footter = styled.footer`
    padding: 20px;
    width: 100%;
    bottom: 0;
    left: 0;
    background-color: #303242;
    color: #fff;
    text-align: center;
    position: fixed;
    font-family: Arial, Helvetica, sans-serif;
    
`;
