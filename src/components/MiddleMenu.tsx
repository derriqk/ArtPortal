import { Container, Image } from 'react-bootstrap';

const MiddleMenu = () => (
  <Container id="middle-menu" className="py-3" fluid>
    <div className="image-text-wrapper">
      <div className="left-side">
        <strong> Featured Art </strong>
        <Image id="left-images" src="/images/aespa.png" alt="Aespa" />
        <div className="below-image-text">
          <p>Poster design for Aespa's "WHILPASH" album</p>
        </div>
        <Image id="left-images" src="/images/aespa.png" alt="Aespa" />
        <div className="below-image-text">
          <p>Testing123</p>
        </div>
        <Image id="left-images" src="/images/aespa.png" alt="Aespa" />
        <div className="below-image-text">
          <p>Testing123</p>
        </div>
      </div>
      <div className="vl" />

      <div className="right-side">
        <div className="right-info-box">
          <strong> Testing </strong>
          <p> details</p>
        </div>
      </div>
    </div>
  </Container>
);

export default MiddleMenu;
