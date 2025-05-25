import { Container, Image } from 'react-bootstrap';

const MiddleMenu = () => (
  <Container id="middle-menu" className="py-3">
    <div className="image-text-wrapper">
      <div className="left-side">
        <Image id="left-images" src="/images/aespa.png" alt="Aespa" />
        <div className="below-image-text">
          <p>Testing123</p>
        </div>
      </div>
      <div className="right-side">
        <strong>Testing</strong>
      </div>
    </div>
  </Container>
);

export default MiddleMenu;
