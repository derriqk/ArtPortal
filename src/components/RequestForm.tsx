'use client';

import { useSession } from 'next-auth/react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import swal from 'sweetalert';
import { redirect } from 'next/navigation';
import { requestArt } from '@/lib/dbActions';
import LoadingSpinner from '@/components/LoadingSpinner';
import { RequestSchema } from '@/lib/validationSchemas';

const onSubmit = async (request: { owner: string; description: string; status: string; type: string }) => {
  // console.log(`onSubmit data: ${JSON.stringify(data, null, 2)}`);
  await requestArt(request);
  swal('Success', 'Your item has been added', 'success', {
    timer: 2000,
  });
};

interface RequestArtFormProps {
  type: string;
}

// eslint-disable-next-line react/prop-types
const RequestArtForm: React.FC<RequestArtFormProps> = ({ type }) => {
  const { data: session, status } = useSession();
  // console.log('AddStuffForm', status, session);
  const currentUser = session?.user?.email || '';
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(RequestSchema),
  });
  if (status === 'loading') {
    return <LoadingSpinner />;
  }
  if (status === 'unauthenticated') {
    redirect('/auth/signin');
  }

  return (
    <Container className="py-3">
      <Row className="align-items-center justify-content-center submitrow">
        <Col xs={12} md={8} lg={6}>
          <Col className="text-start">
            <h2 className="requesttitle">
              Request:
              {' '}
              {type}
            </h2>
            <Card className="requestcard">
              <input type="hidden" {...register('type')} value={type} />
              <input type="hidden" {...register('status')} value="Pending" />
              <Card.Body className="requestbody">
                <Form onSubmit={handleSubmit(onSubmit)}>
                  <Form.Group>
                    <Form.Label>Description</Form.Label>
                    <textarea
                      {...register('description')}
                      required
                      placeholder="Describe in more detail how you want it done."
                      rows={5}
                      className={`form-control ${errors.description ? 'is-invalid' : ''}`}
                    />
                    <div className="invalid-feedback">{errors.description?.message}</div>
                  </Form.Group>
                  <input type="hidden" {...register('owner')} value={currentUser} />
                </Form>
              </Card.Body>
              <Card.Footer className="text-end requestfooter">
                <Form>
                  <Form.Group className="form-group">
                    <Row className="pt-3">
                      <Col>
                        <Button type="submit" className="reqbutton">
                          Submit
                        </Button>
                      </Col>
                    </Row>
                  </Form.Group>
                </Form>
              </Card.Footer>
            </Card>
          </Col>
        </Col>
      </Row>
    </Container>
  );
};

export default RequestArtForm;
