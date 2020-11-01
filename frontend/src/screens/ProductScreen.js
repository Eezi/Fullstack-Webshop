import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Row, Col, Form } from 'react-bootstrap'
import Raiting from '../components/Raiting'
import { useDispatch, useSelector } from 'react-redux'
import { listProductDetails } from '../actions/productActions'
import Loader from '../components/Loader';
import Message from '../components/Message';

const ProductScreen = ({ history, match }) => {
    const [qty, setQty] = useState(1)
    const dispatch = useDispatch()

    const productDetails = useSelector(state => state.productDetails)
    const { product, error, loading } = productDetails

    useEffect(() => {
        dispatch(listProductDetails(match.params.id))
    }, [dispatch, match]);

    const addToCartHandler = () => {
        history.push(`/cart/${match.params.id}?qty=${qty}`)
    }

    return (
        <Container>
            {loading ? <Loader /> : error ? <Message variant="danger">{error}</Message> : (
            <>
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
                <hr />
                {product.countInStock > 0 && (
                <Row>
                    <Col>Qty</Col>
                    <Col>
                <Form.Control
                    as="select"
                    value={qty}
                    onChange={(e) => {
                        setQty(e.target.value)
                        console.log('qty', qty)
                    }}
                    >
                    {[...Array(product.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                            {x + 1}
                        </option>
                    ))}
                </Form.Control>
                </Col>
                </Row>
                ) }
                <hr/>
                <Button onClick={addToCartHandler}>ADD TO CART</Button>
             </Box>
             </>
             )}
           
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