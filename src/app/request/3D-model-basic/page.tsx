import { getServerSession } from 'next-auth';
import authOptions from '@/lib/authOptions';
import { loggedInProtectedPage } from '@/lib/page-protection';
import dynamic from 'next/dynamic';

const RequestForm = dynamic(() => import('@/components/RequestForm'), { ssr: false });

const Request = async () => {
  // Protect the page, only logged in users can access it.
  const session = await getServerSession(authOptions);
  loggedInProtectedPage(
    session as {
      user: { email: string; id: string; randomKey: string };
    } | null,
  );

  const artype = '3D Model (No Mesh/Texture)';

  return (
    <main>
      <RequestForm type={artype} />
    </main>
  );
};

export default Request;
