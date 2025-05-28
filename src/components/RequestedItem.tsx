'use client';

import { deleteRequest } from '@/lib/dbActions';
import { Request } from '@prisma/client';
import { Button, Card, Col, Row } from 'react-bootstrap';
import swal from 'sweetalert';

/* Renders a single row in the List Stuff table. See list/page.tsx. */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const RequestItem = ({ type, description, status, id, owner }: Request) => (
  <Card className="mt-2">
    <Card.Body>
      <Card.Title>
        Art Type:
        {' '}
        {type}
      </Card.Title>
      <Card.Text>
        Description:
        {' '}
        {description}
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
                  deleteRequest(id);
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

export default RequestItem;
