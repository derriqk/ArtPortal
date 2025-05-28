import { getServerSession } from 'next-auth';
import { Col, Container, Row } from 'react-bootstrap';
import { prisma } from '@/lib/prisma';
import { loggedInProtectedPage } from '@/lib/page-protection';
import authOptions from '@/lib/authOptions';
import PurchasedItem from '@/components/PurchasedItem';
import RequestedItem from '@/components/RequestedItem';

const YourPurchases = async () => {
  const session = await getServerSession(authOptions);
  loggedInProtectedPage(
    session as {
      user: { email: string; id: string; randomKey: string };
    } | null,
  );
  const owner = (session && session.user && session.user.email) || '';
  const purchases = await prisma.purchase.findMany({
    where: {
      owner,
    },
  });
  const requested = await prisma.request.findMany({
    where: {
      owner,
    },
  });
  return (
    <main className="owned-items">
      <Container className="py-3">
        <Container>
          <h3 className="mt-3">Existing Artwork Purchased:</h3>
          <hr />
          <Row className="items-list-row">
            {purchases.map((item) => (
              <Col key={item.id} xs={12} md={6} lg={4}>
                <PurchasedItem {...item} />
              </Col>
            ))}
          </Row>
        </Container>
        <Container className="py-3 requested-container">
          <h3 className="mt-3">Commissions Requested:</h3>
          <hr />
          <Row className="items-list-row">
            {requested.map((item) => (
              <Col xs={12} md={6} lg={4}>
                <RequestedItem key={item.id} {...item} />
              </Col>
            ))}
          </Row>
        </Container>
      </Container>
    </main>
  );
};

export default YourPurchases;
