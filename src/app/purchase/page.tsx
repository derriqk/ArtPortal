import { getServerSession } from 'next-auth';
import authOptions from '@/lib/authOptions';
import { loggedInProtectedPage } from '@/lib/page-protection';
import dynamic from 'next/dynamic';

const PurchaseForm = dynamic(() => import('@/components/PurchaseForm'), { ssr: false });

const Purchase = async () => {
  // Protect the page, only logged in users can access it.
  const session = await getServerSession(authOptions);
  loggedInProtectedPage(
    session as {
      user: { email: string; id: string; randomKey: string };
    } | null,
  );

  return (
    <main>
      <PurchaseForm />
    </main>
  );
};

export default Purchase;
