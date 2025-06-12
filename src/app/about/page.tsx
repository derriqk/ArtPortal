import { Col, Container, Row } from 'react-bootstrap';

const aboutme = () => (
  <Container className="text-start mt-5" id="aboutme fluid">
    <Col xs={12} className="">
      <h1 className="head"> - About Us - </h1>
      <p className="small-text">
        Lorem ipsum dolor sit amet,
        consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        xcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </Col>
    <Row className="align-items-center">
      <Col xs={3} className="big-text">
        <h1>Designs</h1>
        <h1>by</h1>
        <h1 className="test"> YBGCORP </h1>
        <p>
          Lorem ipsum dolor sit amet,
          consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          xcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </Col>
      <Col xs={9} className="left-text">
        <h2>WHO WE ARE </h2>
        <hr className="hr" />
        <p className="small-text">
          Lorem ipsum dolor sit amet,
          consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          xcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <h2>FAQ</h2>
        <hr className="hr" />
        <p className="small-text">
          <strong>Q:</strong> What is YBGCORP? 
          <br />
          <strong>A:</strong> YBGCORP is a design company specializing in creating unique and innovative designs for various applications.
          <br />
          <strong>Q:</strong> How can I contact YBGCORP?<br />
          <strong>A:</strong> You can contact us through our website's contact form or by emailing us at info@ybgncorp.com.
          <br />
          <strong>Q:</strong> What services does YBGCORP offer?<br />
          <strong>A:</strong> We offer a wide range of design services including graphic design, web design, branding, and more.
          <br />
          <strong>Q:</strong> Where is YBGCORP located?<br />
          <strong>A:</strong> YBGCORP is located in the heart of the city, easily accessible for all our clients.
          <br />
          <strong>Q:</strong> Does YBGCORP offer custom design solutions?<br />
          <strong>A:</strong> Yes, we specialize in custom design solutions tailored to meet the specific needs of our clients.
        </p>
      </Col>
    </Row>


  </Container>
);

export default aboutme;
