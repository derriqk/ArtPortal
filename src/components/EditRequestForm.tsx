'use client';

import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import { yupResolver } from '@hookform/resolvers/yup';
import { Request } from '@prisma/client';
import { EditRequestSchema } from '@/lib/validationSchemas';
import { editStatusRequest } from '@/lib/dbActions';

const onSubmit = async (data: Request) => {
  // console.log(`onSubmit data: ${JSON.stringify(data, null, 2)}`);
  await editStatusRequest(data);
  swal('Success', 'Status was updated', 'success', {
    timer: 2000,
  });
};

const EditRequestForm = ({ request }: { request: Request }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Request>({
    resolver: yupResolver(EditRequestSchema),
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
              {request.owner}
            </h2>
          </Col>
          <Card>
            <Card.Body>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <input type="hidden" {...register('id')} value={request.id} />
                <input type="hidden" {...register('type')} value={request.type} />
                <input type="hidden" {...register('description')} value={request.description} />
                <Form.Group>
                  <Form.Label className="statusheader">Status</Form.Label>
                  <input
                    type="text"
                    {...register('status')}
                    defaultValue={request.status}
                    required
                    className={`form-control ${errors.status ? 'is-invalid' : ''}`}
                  />
                  <div className="invalid-feedback">{errors.status?.message}</div>
                </Form.Group>
                <input type="hidden" {...register('owner')} value={request.owner} />
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

export default EditRequestForm;
