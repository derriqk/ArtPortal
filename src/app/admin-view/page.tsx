import { getServerSession } from 'next-auth';
import { Col, Container, Row } from 'react-bootstrap';
import { prisma } from '@/lib/prisma';
import { loggedInProtectedPage } from '@/lib/page-protection';
import authOptions from '@/lib/authOptions';
import RequestedItemEdit from '@/components/RequestedItemEdit';
import PurchasedItemEdit from '@/components/PurchasedItemEdit';

const YourPurchases = async () => {
  const session = await getServerSession(authOptions);
  loggedInProtectedPage(
    session as {
      user: { email: string; id: string; randomKey: string };
    } | null,
  );
  const purchases = await prisma.purchase.findMany({
    where: {
    },
    orderBy: {
      id: 'desc',
    },
  });
  const requested = await prisma.request.findMany({
    where: {
    },
    orderBy: {
      id: 'desc',
    },
  });
  return (
    <main className="owned-items">
      <Container className="py-3">
        <Container>
          <h3 className="mt-3">Existing Artwork Purchased:</h3>
          <hr />
          {purchases.map((item) => (
            <Row className="items-list-row">
              <Col key={item.id}>
                <PurchasedItemEdit {...item} />
              </Col>
            </Row>
          ))}
        </Container>
        <Container className="py-3 requested-container">
          <h3 className="mt-3">Commissions Requested:</h3>
          <hr />
          {requested.map((item) => (
            <Row className="items-list-row">
              <Col key={item.id}>
                <RequestedItemEdit {...item} />
              </Col>
            </Row>
          ))}
        </Container>
      </Container>
    </main>
  );
};

export default YourPurchases;
