'use client';

import { Card, Container, Image } from 'react-bootstrap';

const View = () => (
  <>
    <Container className="mt-3 view-header">
      Jova&apos;s Creations:
    </Container>
    <Container className="mt-3 artworks">
      <Card className="owned">
        <Card.Body>
          <Card.Title>TITLE HERE</Card.Title>
          <Image src="" alt="IMG HERE" className="img-fluid" />
        </Card.Body>
      </Card>
      <Card className="owned">
        <Card.Body>
          <Card.Title>TITLE HERE</Card.Title>
          <Image src="" alt="IMG HERE" className="img-fluid" />
        </Card.Body>
      </Card>
      <Card className="owned">
        <Card.Body>
          <Card.Title>TITLE HERE</Card.Title>
          <Image src="" alt="IMG HERE" className="img-fluid" />
        </Card.Body>
      </Card>
      <Card className="owned">
        <Card.Body>
          <Card.Title>TITLE HERE</Card.Title>
          <Image src="" alt="IMG HERE" className="img-fluid" />
        </Card.Body>
      </Card>
      <Card className="owned">
        <Card.Body>
          <Card.Title>TITLE HERE</Card.Title>
          <Image src="" alt="IMG HERE" className="img-fluid" />
        </Card.Body>
      </Card>
      <Card className="owned">
        <Card.Body>
          <Card.Title>TITLE HERE</Card.Title>
          <Image src="" alt="IMG HERE" className="img-fluid" />
        </Card.Body>
      </Card>
    </Container>
    <Container className="mt-5 view-header">
      Derrick&apos;s Creations:
    </Container>
    <Container className="mt-3 mb-5 artworks">
      <Card className="owned">
        <Card.Body>
          <Card.Title>Yellow Hibiscus</Card.Title>
          <Image src="/images/derrickart/artportalhibiscus.png" alt="Yellow Hibiscus" className="img-fluid" />
        </Card.Body>
        <Card.Footer className="pt-5">
          Price: TBA
        </Card.Footer>
      </Card>
      <Card className="owned">
        <Card.Body>
          <Card.Title>Cherry Blossoms</Card.Title>
          <Image src="/images/derrickart/artportalblossom.png" alt="Cherry Blossoms" className="img-fluid" />
        </Card.Body>
        <Card.Footer className="pt-5">
          Price: TBA
        </Card.Footer>
      </Card>
      <Card className="owned">
        <Card.Body>
          <Card.Title>Nemophila Menziesii</Card.Title>
          <Image src="/images/derrickart/artportalblueflower.png" alt="Nemophila Menziesii" className="img-fluid" />
        </Card.Body>
        <Card.Footer className="pt-5">
          Price: TBA
        </Card.Footer>
      </Card>
      <Card className="owned">
        <Card.Body>
          <Card.Title>Single Rose</Card.Title>
          <Image src="/images/derrickart/artportalbigrose.png" alt="Single Rose" className="img-fluid" />
        </Card.Body>
        <Card.Footer className="pt-5 text-muted">
          Only Selling Digital Art Pieces
        </Card.Footer>
      </Card>
      <Card className="owned">
        <Card.Body>
          <Card.Title>Rose (Side View)</Card.Title>
          <Image src="/images/derrickart/artportalrose.png" alt="IMG HERE" className="img-fluid" />
        </Card.Body>
        <Card.Footer className="pt-5 text-muted">
          Only Selling Digital Art Pieces
        </Card.Footer>
      </Card>
      <Card className="owned">
        <Card.Body>
          <Card.Title>Grumpy Cat</Card.Title>
          <Image src="/images/derrickart/artportalcat.png" alt="Grumpy Cat" className="img-fluid" />
        </Card.Body>
        <Card.Footer className="pt-5 text-muted">
          Only Selling Digital Art Pieces
        </Card.Footer>
      </Card>
      <Card className="owned">
        <Card.Body>
          <Card.Title>Dead Tree</Card.Title>
          <Image src="/images/derrickart/artportaltree.png" alt="Dead Tree" className="img-fluid" />
        </Card.Body>
        <Card.Footer className="pt-5 text-muted">
          Only Selling Digital Art Pieces
        </Card.Footer>
      </Card>
    </Container>
  </>
);

export default View;
