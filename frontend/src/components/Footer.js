import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <Footter bg="dark" variant="dark">
      <Container>
        <Row>
          <Col className="text-center py-3">Copyright &copy; TechShop</Col>
        </Row>
      </Container>
    </Footter>
  );
}

export default Footer;

const Footter = styled.footer`
  background-color: #343a40;
  bottom: 0;
  position: fixed;
  width: 100%;  
`;