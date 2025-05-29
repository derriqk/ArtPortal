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
    orderBy: {
      id: 'desc',
    },
  });
  const requested = await prisma.request.findMany({
    where: {
      owner,
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
                <PurchasedItem {...item} />
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
                <RequestedItem {...item} />
              </Col>
            </Row>
          ))}
        </Container>
      </Container>
    </main>
  );
};

export default YourPurchases;
