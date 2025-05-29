import { getServerSession } from 'next-auth';
import { notFound } from 'next/navigation';
import { Purchase } from '@prisma/client';
import authOptions from '@/lib/authOptions';
import { loggedInProtectedPage } from '@/lib/page-protection';
import { prisma } from '@/lib/prisma';
import EditPurchaseForm from '@/components/EditPurchaseForm';

export default async function EditPurchasePage({ params }: { params: { id: string | string[] } }) {
  const session = await getServerSession(authOptions);
  loggedInProtectedPage(
    session as {
      user: { email: string; id: string; randomKey: string };
    } | null,
  );
  const id = Number(Array.isArray(params?.id) ? params?.id[0] : params?.id);
  const purchase: Purchase | null = await prisma.purchase.findUnique({
    where: { id },
  });
  if (!purchase) {
    return notFound();
  }

  return (
    <main>
      <EditPurchaseForm purchase={purchase} />
    </main>
  );
}
