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
        <Image id="left-images" src="/images/image.jpeg" alt="Aespa" />
        <div className="below-image-text">
          <p>Colored artwork of 'Nempohila menziesii' </p>
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
            <h1> Welcome to Art Portal </h1>
          </div>
          <div className="small-text">
            <p>
              This is a project to showcase our work and our passion of both art and software engineering.
              <br />
              We hope you enjoy the art we have created and the software we have built.
            </p>
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
