'use client';

import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import { yupResolver } from '@hookform/resolvers/yup';
import { Purchase } from '@prisma/client';
import { EditPurchaseSchema } from '@/lib/validationSchemas';
import { editStatusPurchase } from '@/lib/dbActions';

const onSubmit = async (data: Purchase) => {
  // console.log(`onSubmit data: ${JSON.stringify(data, null, 2)}`);
  await editStatusPurchase(data);
  swal('Success', 'Status was updated', 'success', {
    timer: 2000,
  });
};

const EditPurchaseForm = ({ purchase }: { purchase: Purchase }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Purchase>({
    resolver: yupResolver(EditPurchaseSchema),
  });
  // console.log(stuff);

  return (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col>
          <Col className="text-center">
            <h2 className="statusheader">
              Edit Status for:
              {' '}
              {purchase.owner}
            </h2>
          </Col>
          <Card>
            <Card.Body>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <input type="hidden" {...register('id')} value={purchase.id} />
                <input type="hidden" {...register('title')} value={purchase.title} />

                <Form.Group>
                  <Form.Label className="statusheader">Status</Form.Label>
                  <input
                    type="text"
                    {...register('status')}
                    defaultValue={purchase.status}
                    required
                    className={`form-control ${errors.status ? 'is-invalid' : ''}`}
                  />
                  <div className="invalid-feedback">{errors.status?.message}</div>
                </Form.Group>
                <input type="hidden" {...register('owner')} value={purchase.owner} />
                <Form.Group className="form-group">
                  <Row className="pt-3">
                    <Col>
                      <Button type="submit" className="editbutton">
                        Confirm
                      </Button>
                    </Col>
                  </Row>
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default EditPurchaseForm;
