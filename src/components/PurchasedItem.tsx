'use client';

import { deletePurchase } from '@/lib/dbActions';
import { Purchase } from '@prisma/client';
import { Button, Card, Col, Row } from 'react-bootstrap';
import swal from 'sweetalert';

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
          <Button
            className="mt-2 cancelbutton"
            onClick={() => {
              swal({
                title: 'Are you sure?',
                icon: 'warning',
                buttons: ['Cancel', 'Yes'],
                dangerMode: true,
              }).then((willDelete) => {
                if (willDelete) {
                  deletePurchase(id);
                  swal('Cancelled!', 'Your request has been cancelled.', 'success');
                }
              });
            }}
          >
            Cancel Request
          </Button>
        </Col>
      </Row>
    </Card.Footer>
  </Card>
);

export default PurchasedItem;
