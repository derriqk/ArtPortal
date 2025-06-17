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
          <a
            href="/images/aespa.png"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/images/aespa.png" alt="IMG HERE" className="img-fluid mt-5" />
          </a>
        </Card.Body>
      </Card>
      <Card className="owned">
        <Card.Body>
          <Card.Title>&quot;This is How Tomorrow Moves&quot;- Beabadoobee</Card.Title>
          <a
            href="/images/beav2.png"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/images/beav2.png" alt="IMG HERE" className="img-fluid vertical-fluid" />
          </a>
        </Card.Body>
      </Card>
      <Card className="owned">
        <Card.Body>
          <Card.Title>TITLE HERE</Card.Title>
          <a
            href="/images/bocchi.png"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/images/bocchi.png" alt="IMG HERE" className="img-fluid" />
          </a>
        </Card.Body>
      </Card>
      <Card className="owned">
        <Card.Body>
          <Card.Title>TITLE HERE</Card.Title>
          <a
            href="/images/koifish.png"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/images/koifish.png" alt="IMG HERE" className="img-fluid vertical-fluid" />
          </a>
        </Card.Body>
      </Card>
      <Card className="owned">
        <Card.Body>
          <Card.Title>TITLE HERE</Card.Title>
          <a
            href="/images/ssera.png"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/images/ssera.png" alt="IMG HERE" className="img-fluid vertical-fluid" />
          </a>
        </Card.Body>
      </Card>
      <Card className="owned">
        <Card.Body>
          <Card.Title>TITLE HERE</Card.Title>
          <a
            href="/images/solov2-Recovered.png"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/images/solov2-Recovered.png" alt="IMG HERE" className="img-fluid vertical-fluid" />
          </a>
        </Card.Body>
      </Card>
      <Card className="owned">
        <Card.Body>
          <Card.Title>TITLE HERE</Card.Title>
          <a
            href="/images/kat.png"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/images/kat.png" alt="IMG HERE" className="img-fluid vertical-fluid" />
          </a>
        </Card.Body>
      </Card>
    </Container>
    <Container className="mt-5 view-header">
      Derrick&apos;s Creations:
    </Container>
    <Container className="mt-3 mb-5 artworks">
      <Card className="owned">
        <Card.Body>
          <Card.Title>White Lily</Card.Title>
          <Image src="/images/derrickart/artportallily.png" alt="White Lily" className="img-fluid" />
        </Card.Body>
        <Card.Footer className="pt-5">
          Price: TBA
        </Card.Footer>
      </Card>
      <Card className="owned">
        <Card.Body>
          <Card.Title>Green Carnation</Card.Title>
          <Image src="/images/derrickart/artportalcarnation.png" alt="Green Carnation" className="img-fluid" />
        </Card.Body>
        <Card.Footer className="pt-5">
          Price: TBA
        </Card.Footer>
      </Card>
      <Card className="owned">
        <Card.Body>
          <Card.Title>Halo Violet</Card.Title>
          <Image src="/images/derrickart/artportalviolet.png" alt="Halo Violet" className="img-fluid" />
        </Card.Body>
        <Card.Footer className="pt-5">
          Price: TBA
        </Card.Footer>
      </Card>
      <Card className="owned">
        <Card.Body>
          <Card.Title>Yellow Hibiscus</Card.Title>
          <a
            href="/images/derrickart/artportalhibiscus.png"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/images/derrickart/artportalhibiscus.png" alt="Yellow Hibiscus" className="img-fluid" />
          </a>
        </Card.Body>
        <Card.Footer className="pt-5">
          Price: TBA
        </Card.Footer>
      </Card>
      <Card className="owned">
        <Card.Body>
          <Card.Title>Cherry Blossoms</Card.Title>
          <a
            href="/images/derrickart/artportalblossom.png"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/images/derrickart/artportalblossom.png" alt="Cherry Blossoms" className="img-fluid" />
          </a>
        </Card.Body>
        <Card.Footer className="pt-5">
          Price: TBA
        </Card.Footer>
      </Card>
      <Card className="owned">
        <Card.Body>
          <Card.Title>Nemophila Menziesii</Card.Title>
          <a
            href="/images/derrickart/artportalblueflower.png"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/images/derrickart/artportalblueflower.png" alt="Nemophila Menziesii" className="img-fluid" />
          </a>
        </Card.Body>
        <Card.Footer className="pt-5">
          Price: TBA
        </Card.Footer>
      </Card>
      <Card className="owned">
        <Card.Body>
          <Card.Title>Single Rose</Card.Title>
          <a
            href="/images/derrickart/artportalbigrose.png"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/images/derrickart/artportalbigrose.png" alt="Single Rose" className="img-fluid" />
          </a>
        </Card.Body>
        <Card.Footer className="pt-5 text-muted">
          Only Selling Digital Art Pieces
        </Card.Footer>
      </Card>
      <Card className="owned">
        <Card.Body>
          <Card.Title>Rose (Side View)</Card.Title>
          <a
            href="/images/derrickart/artportalrose.png"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/images/derrickart/artportalrose.png" alt="IMG HERE" className="img-fluid" />
          </a>
        </Card.Body>
        <Card.Footer className="pt-5 text-muted">
          Only Selling Digital Art Pieces
        </Card.Footer>
      </Card>
      <Card className="owned">
        <Card.Body>
          <Card.Title>Grumpy Cat</Card.Title>
          <a
            href="/images/derrickart/artportalcat.png"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/images/derrickart/artportalcat.png" alt="Grumpy Cat" className="img-fluid" />
          </a>
        </Card.Body>
        <Card.Footer className="pt-5 text-muted">
          Only Selling Digital Art Pieces
        </Card.Footer>
      </Card>
      <Card className="owned">
        <Card.Body>
          <Card.Title>Dead Tree</Card.Title>
          <a
            href="/images/derrickart/artportaltree.png"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/images/derrickart/artportaltree.png" alt="Dead Tree" className="img-fluid" />
          </a>
        </Card.Body>
        <Card.Footer className="pt-5 text-muted">
          Only Selling Digital Art Pieces
        </Card.Footer>
      </Card>
    </Container>
  </>
);

export default View;
