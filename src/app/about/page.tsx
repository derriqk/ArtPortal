/* eslint-disable max-len */
import { Col, Container, Row } from 'react-bootstrap';

const aboutme = () => (
  <Container className="text-start mt-5" id="aboutme fluid">
    <Col xs={12} className="">
      <h1 className="head"> -About Us - </h1>
      <p className="small-text">
        We are a group of artists and designers dedicated to creating unique artwork and decided to showcase our passion for software development and design through this platform.
        Our team is committed to delivering high-quality designs that not only meet but exceed our clients&apos; expectations.
      </p>
    </Col>
    <Row className="align-items-center">
      <Col xs={3} className="big-text">
        <h1>Designs</h1>
        <h1>by</h1>
        <h1> YBGCORP </h1>
        <p>
          Stay Blessed. Stay Amazing. Stay YBG.
        </p>
      </Col>
      <Col xs={9} className="left-text">
        <h2>WHO WE ARE </h2>
        <hr className="hr" />
        <p className="small-text">
          YBGCORP is a company that specializes in creating unique and innovative designs for various applications.
          Our team of two(2) skilled designers and artists work to bring our ideas to life, ensuring that each project we make is a fun to us and something we are proud of.
          We pride ourselves on our attention to detail and our commitment to delivering high-quality designs that not only look great but also function effectively.
          Our goal is to create designs that not only meet but exceed our clients&apos; expectations, and we strive to achieve this with every project we undertake.
        </p>
        <h2>FAQ</h2>
        <hr className="hr" />
        <p className="small-text line-height mt-3">
          <strong>
            Q:
          </strong>
          What is YBGCORP?
          <br />
          <strong>
            A:
          </strong>
          YBGCORP is a design company specializing in creating unique and innovative designs for various applications.
          <br />
        </p>
        <p className="small-text line-height mt-3">
          <strong>
            Q:
          </strong>
          Who are the designers behind YBGCORP?
          <br />
          <strong>
            A:
          </strong>
          YBGCORP is run by two talented designers who are passionate about their craft and dedicated to delivering high-quality designs.
          <br />
        </p>
        <p className="small-text line-height mt-3">
          <strong>
            Q:
          </strong>
          What services does YBGCORP offer?
          <br />
          <strong>
            A:
          </strong>
          We offer a wide range of design services including graphic design, web design, branding, and more.
          <br />
        </p>
        <p className="small-text line-height mt-3">
          <strong>
            Q:
          </strong>
          Where is YBGCORP located?
          <br />
          <strong>
            A:
          </strong>
          YBGCORP is located in the heart of the city, easily accessible for all our clients.
          <br />
        </p>
        <p className="small-text line-height mt-3">
          <strong>
            Q:
          </strong>
          Does YBGCORP offer custom design solutions?
          <br />
          <strong>
            A:
          </strong>
          Yes, we specialize in custom design solutions tailored to meet the specific needs of our clients.
        </p>
      </Col>
    </Row>

  </Container>
);

export default aboutme;
