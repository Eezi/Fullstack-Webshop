import React from 'react'
import styled from 'styled-components';

const Product = ({ product }) => {
    return (
        <Card>
            <a style={{justifySelf: 'center', padding: 0}} href={`/product/${product._id}`}>
                <img style={{ width: '200px', margin: '0 auto'}} src={product.image}/>
            </a>
            <Info>
                <strong style={{padding: '10px'}}>{product.name}</strong>
                <p>
                    {product.description}
                </p>
                <h3>{product.price}€</h3>
            </Info>
        </Card>
    )
}

export default Product

const Card = styled.div`
    padding: 1rem;
    max-width: 300px;
    border: 1px solid #eee;
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(auto-fill, , minmax(400px, 1fr));
    justify-content: center;
`;

const Info = styled.div`
    
`;