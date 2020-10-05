import React from 'react';
import products from '../products';
import styled from 'styled-components';
import Product from '../components/Product'

const HomeScreen = () => {
    return (
        <Div>
            
            {products.map(item => (
                <Product key={item._id} product={item} />
            ))}
        </Div>
    )
}

export default HomeScreen

const Div = styled.div`
    display: flex;
`;