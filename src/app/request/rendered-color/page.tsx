import { getServerSession } from 'next-auth';
import authOptions from '@/lib/authOptions';
import { loggedInProtectedPage } from '@/lib/page-protection';
import RequestForm from '@/components/RequestForm';

const Request = async () => {
  // Protect the page, only logged in users can access it.
  const session = await getServerSession(authOptions);
  loggedInProtectedPage(
    session as {
      user: { email: string; id: string; randomKey: string };
    } | null,
  );

  const artype = 'Full Color & Rendered';

  return (
    <main>
      <RequestForm type={artype} />
    </main>
  );
};

export default Request;
