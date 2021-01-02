import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <Footter >
      <Container>
        <Row>
          <Col className="text-center py-3"><p>Copyright &copy; TechShop</p></Col>
        </Row>
      </Container>
    </Footter>
  );
}

export default Footer;

const Footter = styled.footer`
  background: transparent;
  bottom: 0;
  position: fixed;
  width: 100%;  
`;