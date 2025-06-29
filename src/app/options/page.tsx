'use client';

import { Card, Col, Container, Image, Row } from 'react-bootstrap';

const Options = () => (
  <main className="option_page">
    <Container className="optionspage text-center mt-5">
      <h2> View our various options:</h2>
    </Container>
    <Container className="optionspage text-center mt-5">
      <h4> Purchase Existing Art:</h4>
    </Container>
    <Container className="text-center">
      <Row className="align-items-center justify-content-center mb-3 artRow">
        <Col xs={12} sm={6} md={4} className="mb-3 optioncard">
          <Card>
            <Card.Body>
              <Card.Title>Purchase Existing Art</Card.Title>
              <Image src="/" alt="Simple Sketch" className="img-fluid" />
            </Card.Body>
            <Card.Footer className="text-start">
              <small>View our existing pieces under &quot;View our Art&quot;</small>
              <br />
              <small>Estimated Cost: TBD</small>
              <br />
              <a id="cardbutton" href="/purchase" className="btn mt-2">
                Purchase
              </a>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
    <Container className="optionspage text-center mt-5">
      <h4>Request Commissions for 2D Art:</h4>
    </Container>
    <Container className="optionspage text-center">
      <Row className="align-items-center justify-content-start mb-3 artRow">
        <Col xs={12} sm={6} md={4} className="mb-3 optioncard">
          <Card>
            <Card.Body>
              <Card.Title>Simple Sketch</Card.Title>
              <Image src="/images/optionsThumbnail/sketch.png" alt="Simple Sketch" className="img-fluid" />
            </Card.Body>
            <Card.Footer className="text-start">
              <small>2D Black & White or Rough Color</small>
              <br />
              <small>Estimated Cost: TBD</small>
              <br />
              <a id="cardbutton" href="/request/simple-sketch" className="btn mt-2">
                Request
              </a>
            </Card.Footer>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={4} className="mb-3 optioncard">
          <Card>
            <Card.Body>
              <Card.Title>Line Art</Card.Title>
              <Image src="/" alt="Line Art" className="img-fluid" />
            </Card.Body>
            <Card.Footer className="text-start">
              <small>Detailed Line Art (no colors)</small>
              <br />
              <small>Estimated Cost: TBD</small>
              <br />
              <a id="cardbutton" href="/request/line-art" className="btn mt-2">
                Request
              </a>
            </Card.Footer>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={4} className="mb-3 optioncard">
          <Card>
            <Card.Body>
              <Card.Title>Flat Full Color</Card.Title>
              <Image src="/" alt="Flat Full Color" className="img-fluid" />
            </Card.Body>
            <Card.Footer className="text-start">
              <small>Combination of Sketch & Line Art</small>
              <br />
              <small>Estimated Cost: TBD</small>
              <br />
              <a id="cardbutton" href="/request/flat-full-color" className="btn mt-2">
                Request
              </a>
            </Card.Footer>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={4} className="mb-3 optioncard">
          <Card>
            <Card.Body>
              <Card.Title>Full Color & Rendered</Card.Title>
              <Image src="/" alt="Rendered Color" className="img-fluid" />
            </Card.Body>
            <Card.Footer className="text-start">
              <small>Full Color with Shading and Details</small>
              <br />
              <small>Estimated Cost: TBD</small>
              <br />
              <a id="cardbutton" href="/request/rendered-color" className="btn mt-2">
                Request
              </a>
            </Card.Footer>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={4} className="mb-3 optioncard">
          <Card>
            <Card.Body>
              <Card.Title>Full Poster</Card.Title>
              <Image src="/images/aespa.png" alt="Aespa" className="img-fluid" />
            </Card.Body>
            <Card.Footer className="text-start">
              <small>A fully designed poster that can be printed</small>
              <br />
              <small>Estimated Cost: TBD</small>
              <br />
              <a id="cardbutton" href="/request/full-poster" className="btn mt-2">
                Request
              </a>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
    <Container className="optionspage text-center mt-5">
      <h4>Request Commissions for 3D Art:</h4>
    </Container>
    <Container className="text-center">
      <Row className="align-items-center justify-content-center mb-3 artRow">
        <Col xs={12} sm={6} md={4} className="mb-3 optioncard">
          <Card>
            <Card.Body>
              <Card.Title>3D Model (No Mesh/Texture)</Card.Title>
              <Image src="/images/optionsThumbnail/treeUncolored.png" alt="3D Model" className="img-fluid" />
            </Card.Body>
            <Card.Footer className="text-start">
              <small>Pure 3D Online Model without details</small>
              <br />
              <small>Estimated Cost: TBD</small>
              <br />
              <a id="cardbutton" href="/request/3D-model-basic" className="btn mt-2">
                Request
              </a>
            </Card.Footer>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={4} className="mb-3 optioncard">
          <Card>
            <Card.Body>
              <Card.Title>3D Model (Complete)</Card.Title>
              <Image src="/images/optionsThumbnail/treeColored.png" alt="3D Model" className="img-fluid" />
            </Card.Body>
            <Card.Footer className="text-start">
              <small>Fully Rendered 3D Model</small>
              <br />
              <small>Estimated Cost: TBD</small>
              <br />
              <a id="cardbutton" href="/request/3D-model-complete" className="btn mt-2">
                Request
              </a>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  </main>
);

export default Options;
