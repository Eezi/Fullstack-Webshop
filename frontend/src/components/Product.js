import React from 'react'
import styled from 'styled-components';
import Raiting from './Raiting';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    return (
        <Card>
            
                <img style={{ width: '200px', margin: '0 auto'}} src={product.image}/>
           
            <Info>
                <Link to={`/product/${product._id}`}>                
                    <strong>{product.name}</strong>
                </Link>

                <Raiting 
                 value={product.rating}
                 text={`${product.numReviews}`} 
                 
                 />
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