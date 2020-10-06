import React from 'react';
import products from '../products';
import styled from 'styled-components';
import Product from '../components/Product'

const HomeScreen = () => {
    return (
        <Container>
       <H1>LATEST PRODUCTS</H1>
        <Div>
        
       
            {products.map(item => (
                <Product key={item._id} product={item} />
            ))}
            
        </Div>
        </Container>
    )
}

export default HomeScreen

const Div = styled.div`
    max-height: 550px;
    
    margin: auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 1rem;
    grid-template-rows: auto;
    
    z-index: 1;
`;

const Container = styled.div`
     margin: auto;
     max-width: 900px; 
`;

const H1 = styled.h1`
    width: 100%;
    
    z-index: 2;
`;