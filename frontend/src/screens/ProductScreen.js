import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Raiting from '../components/Raiting'

const ProductScreen = ({ match }) => {
    const [product, setProduct] = useState({})

    useEffect(() => {
        const fetchProducts = async () => {
            const { data } = await axios.get(`/api/products/${match.params.id}`);

            setProduct(data);
        }
        fetchProducts();

    }, [match]);

    return (
        <Container>
            <Img src={product.image}></Img>
            <Info>
                <p>{product.name}</p>
                <hr />
                <Raiting value={product.rating}  text={`${product.numReviews}`} />  
                <hr />
                <strong>{product.price} €</strong>
                <hr/>
                <p>{product.description}</p>
            </Info>
            <Box>
    <p style={{marginTop: '1rem'}}>{product.price} €</p>
    <hr/>
    <p>{product.countInStock < 0 ? 'Out of stock' : 'In stock'}</p>
    <hr/>
    <Button>ADD TO CART</Button>
            </Box>
        </Container>
    )
}

export default ProductScreen;

const Container = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    display: grid;
    grid-template-columns: 350px 260px 200px;
    justify-content: center;
`;

const Img = styled.img`
    height: 300px;
    justify-self: right;
    margin: auto 0;
 `;

 const Info = styled.div`
    margin: auto 0;
    padding: 0 2rem;
 `;

const Box = styled.div`
    margin: auto 0;
    padding: 0 2rem;
    border: 1px solid #eee;
`; 

const Button = styled.button`
    border-radius: 3px;
    background: #303242;
    color: #fff;
    padding: .5rem;
    margin-bottom: 1rem;
    

    &:hover {
        cursor: pointer;
    }
    &:focus {
        outline: none;
    }
`;