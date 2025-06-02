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
          <Card.Title>&quot;Whiplash&quot;- Aespa</Card.Title>
          <Image src="/images/aespa.png" alt="IMG HERE" className="img-fluid mt-5" />
        </Card.Body>
      </Card>
      <Card className="owned">
        <Card.Body>
          <Card.Title>TITLE HERE</Card.Title>
          <Image src="/images/beav2.png" alt="IMG HERE" className="img-fluid w-32" />
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
  </>
);

export default View;
