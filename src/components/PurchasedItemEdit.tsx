'use client';

import { Purchase } from '@prisma/client';
import { Button, Card, Col, Row } from 'react-bootstrap';

/* Renders a single row in the List Stuff table. See list/page.tsx. */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const PurchasedItem = ({ title, status, id, owner }: Purchase) => (
  <Card>
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>
        <br />
        Status:
        {' '}
        {status}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">
        Contact Email:
        {' '}
        {owner}
      </small>
      <br />
      <Row>
        <Col className="text-end">
          <a href={`/editstatus/purchase/${id}`}>
            <Button className="mt-2 editbutton">Edit Status</Button>
          </a>
        </Col>
      </Row>
    </Card.Footer>
  </Card>
);

export default PurchasedItem;
