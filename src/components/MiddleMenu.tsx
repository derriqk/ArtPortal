import { Container, Image } from 'react-bootstrap';

const MiddleMenu = () => (
  <Container id="middle-menu" className="py-3" fluid>
    <div className="image-text-wrapper">
      <div className="left-side">
        <h2> Featured Art </h2>
        <Image id="left-images" src="/images/aespa.png" alt="Aespa" />
        <div className="below-image-text">
          <p>Poster design for Aespas WHIPLASH album</p>
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
          <div className="box-text">
            <h2> Welcome to Art Portal </h2>
            <div className="small-text">
              <p> a showcase of our creations </p>
              <p> made by Derrick and Jova</p>
            </div>
          </div>
          <div className="box-images">
            <Image className="box-image" src="/images/lilipads.png" alt="Lilipads" />
            <Image className="box-image" src="/images/lilipadsother.png" alt="Lilipadss" />
          </div>
        </div>
      </div>
    </div>
  </Container>
);

export default MiddleMenu;
