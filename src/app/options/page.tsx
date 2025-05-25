'use client';

import { Card, Col, Container, Image, Row } from 'react-bootstrap';

const Options = () => (
  <>
    <Container className="optionspage text-center mt-5">
      <h4> View our various options:</h4>
    </Container>
    <Container className="optionspage text-center my-5">
      <Row className="align-items-center justify-content-center mb-3">
        <Col xs={12} sm={6} md={4} className="mb-3 optioncard">
          <Card>
            <Card.Body>
              <Card.Title>Full Poster</Card.Title>
              <Image src="/images/aespa.png" alt="Aespa" className="img-fluid" />
            </Card.Body>
            <Card.Footer className="text-start">
              <small>A fully designed poster that can be printed</small>
              <br />
              <small>Estimated Cost: 1$</small>
              <br />
              <a id="cardbutton" href="/options/option1" className="btn mt-2">
                Request
              </a>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  </>
);

export default Options;
