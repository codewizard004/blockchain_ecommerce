

// reactstrap components
import { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";

const Header = () => {
  return (
    <>
      <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
        <Container fluid>
          <div className="header-body">
            <Row>
              <Col lg="6" xl="3">
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Header;
