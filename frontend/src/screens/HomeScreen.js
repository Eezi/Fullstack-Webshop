import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import Product from "../components/Product";
import { listProducts } from "../actions/productActions";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { Container } from "react-bootstrap";
import Paginate from "../components/Paginate";
import ProductCaroucel from "../components/ProductCaroucel";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import { Row, Col } from 'react-bootstrap'

const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword;
  const pageNumber = match.params.pageNumber || 1;

  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);

  return (
    <>
      <Meta />
      {!keyword ? (
        <ProductCaroucel />
      ) : (
        <Link to="/" className="btn btn-light">
          Go Back
        </Link>
      )}
      <H1>LATEST PRODUCTS</H1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Div>
          {products.map((item) => (
            <Product key={item._id} product={item} />
          ))}
        </Div>
      )}
      <Paginate pages={pages} page={page} keyword={keyword ? keyword : ""} />
    </>
  );
};

export default HomeScreen;

const Div = styled.div`
  max-height: 550px;

  margin: auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 1rem;
  grid-template-rows: auto;

  z-index: 1;
`;

/*const Container = styled.div`
     margin: auto;
     max-width: 900px; 
`;*/

const H1 = styled.h1`
  width: 100%;

  z-index: 2;
`;
