'use client';

import { signOut } from 'next-auth/react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

/** After the user clicks the "SignOut" link in the NavBar, log them out and display this page. */
const SignOut = () => (
  <Container className="text-center py-5 signfont">
    <Row className="align-items-center justify-content-center">
      <Card className="signcard py-2">
        <Card.Title className="pt-4">
          Do you want to sign out?
        </Card.Title>
        <Card.Body>
          <Row>
            <Col>
              <Button className="signbutton" onClick={() => signOut({ callbackUrl: '/', redirect: true })}>
                Sign Out
              </Button>
            </Col>
            <Col>
              <Button variant="secondary" href="/">
                Cancel
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Row>
  </Container>
);

export default SignOut;
