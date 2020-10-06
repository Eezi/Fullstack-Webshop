import React from 'react'
import styled from 'styled-components';

const Product = ({ product }) => {
    return (
        <Card>
            <a style={{justifySelf: 'center', padding: 0}} href={`/product/${product._id}`}>
                <img style={{ width: '200px', margin: '0 auto'}} src={product.image}/>
            </a>
            <Info>
                <strong>{product.name}</strong>
                <p>{product.rating} from {product.numReviews} reviews</p>
                <h3 style={{margin: '.5rem 0'}}>{product.price}€</h3>
                
            </Info>
        </Card>
    )
}

export default Product

const Card = styled.div`
    
    border: 1px solid #cccccc;
    max-height: 300px;
    max-width: 200px;
  
`;

const Info = styled.div`
    padding: .6rem;
`;