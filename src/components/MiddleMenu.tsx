import { Col, Container, Image, Row } from 'react-bootstrap';
import { EnvelopePaperFill, Github, Instagram, Linkedin, Reddit } from 'react-bootstrap-icons';

const MiddleMenu = () => (
  <>
    <Container className="text-start mt-5">
      <Row>
        <Col xs={12} sm={6} md={3} className="mb-3 features-col">
          <h1>Features</h1>
          <hr />
          <h4>Poster by Jova</h4>
          <Image
            src="/images/aespa.png"
            alt="Art Hub Logo"
            className="img-fluid mb-3"
          />
          <h4>Poster by Jova</h4>
          <Image
            src="/images/aespa.png"
            alt="Art Hub Logo"
            className="img-fluid mb-3"
          />
          <h4>Poster by Jova</h4>
          <Image
            src="/images/aespa.png"
            alt="Art Hub Logo"
            className="img-fluid mb-3"
          />
        </Col>
        <Col xs={12} sm={6} md={9} className="mb-3 text-center right-col">
          <Row className="align-items-center h-100">
            <Col xs={12} id="texthomepage">
              <h1>Art Portal</h1>
              <hr />
              <p>
                Created to be a place of creation and inspiration.
              </p>
              <p>
                A place to showcase and share our art.
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
    <Container className="bottom-home mb-3">
      <Row className="justify-content-center text-start contactsrow ps-5">
        <Col xs={12} sm={12} md={12} className="mb-4">
          <h3>Jova&apos;s Contacts:</h3>
          <a href="about" className="mx-2">
            <Instagram width={30} height={30} />
          </a>
          <a href="about" className="mx-2">
            <Linkedin width={30} height={30} />
          </a>
          <a href="about" className="mx-2">
            <Github width={30} height={30} />
          </a>
          <a href="about" className="mx-2">
            <Reddit width={30} height={30} />
          </a>
        </Col>
        <Col xs={12} sm={12} md={12} className="mb-2">
          <h3>Derrick&apos;s Contacts:</h3>
          <a href="http://instagram.com/derr1qk" className="mx-2" target="_blank" rel="noopener noreferrer">
            <Instagram width={30} height={30} />
          </a>
          <a
            href="https://www.linkedin.com/in/derrick-q-7a5737341/"
            className="mx-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin width={30} height={30} />
          </a>
          <a href="http://github.com/derriqk" className="mx-2" target="_blank" rel="noopener noreferrer">
            <Github width={30} height={30} />
          </a>
          <a href="mailto:derrickq@hawaii.edu" className="mx-2" target="_blank" rel="noopener noreferrer">
            <EnvelopePaperFill width={30} height={30} />
          </a>
        </Col>
      </Row>
    </Container>
  </>
);

export default MiddleMenu;
