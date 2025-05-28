'use client';

import { useSession } from 'next-auth/react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import swal from 'sweetalert';
import { redirect } from 'next/navigation';
import { purchaseArt } from '@/lib/dbActions';
import LoadingSpinner from '@/components/LoadingSpinner';
import { PurchaseSchema } from '@/lib/validationSchemas';

const onSubmit = async (purchase: { title: string; owner: string; status: string; }) => {
  // console.log(`onSubmit data: ${JSON.stringify(purchase, null, 2)}`);
  await purchaseArt(purchase);
  swal('Success', 'Your item has been added', 'success', {
    timer: 2000,
  });
};

const PurchaseArtForm: React.FC = () => {
  const { data: session, status } = useSession();
  const currentUser = session?.user?.email || '';
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(PurchaseSchema),
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
              Purchase
            </h2>
            <Card className="requestcard">
              <input type="hidden" {...register('status')} value="Pending" />
              <Card.Body className="requestbody">
                <Form onSubmit={handleSubmit(onSubmit)}>
                  <Form.Group>
                    <Form.Label>Title</Form.Label>
                    <input
                      type="text"
                      {...register('title')}
                      className={`form-control ${errors.title ? 'is-invalid' : ''}`}
                      placeholder="Enter the title of the art you want to purchase"
                      required
                    />
                    <div className="invalid-feedback">{errors.title?.message}</div>
                  </Form.Group>
                  <input type="hidden" {...register('owner')} value={currentUser} />
                  <hr />
                  <Form.Group className="form-group requestfooter text-end">
                    <Row className="pt-3">
                      <Col>
                        <Button type="submit" className="reqbutton">
                          Submit
                        </Button>
                      </Col>
                    </Row>
                  </Form.Group>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Col>
      </Row>
    </Container>
  );
};

export default PurchaseArtForm;
