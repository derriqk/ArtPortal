import { Col, Container, Image, Row } from 'react-bootstrap';

const MiddleMenu = () => (
  <>
    <Container className="text-start mt-5">
      <Row>
        <Col xs={12} sm={6} md={3} className="mb-3 features-col">
          <h1>Features</h1>
          <Image
            src="/images/aespa.png"
            alt="Art Hub Logo"
            className="img-fluid mb-3"
          />
          <Image
            src="/images/aespa.png"
            alt="Art Hub Logo"
            className="img-fluid mb-3"
          />
          <Image
            src="/images/aespa.png"
            alt="Art Hub Logo"
            className="img-fluid mb-3"
          />
        </Col>
        <Col xs={12} sm={6} md={9} className="mb-3 text-end right-col">
          <h1>Art Hub</h1>
          <p>
            Created to be a place of creation and inspiration
          </p>
        </Col>
      </Row>
    </Container>
    <Container className="bottom-home">
      text text
    </Container>
  </>
);

export default MiddleMenu;
