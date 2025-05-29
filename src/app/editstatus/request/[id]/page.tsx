import { getServerSession } from 'next-auth';
import { notFound } from 'next/navigation';
import { Request } from '@prisma/client';
import authOptions from '@/lib/authOptions';
import { loggedInProtectedPage } from '@/lib/page-protection';
import { prisma } from '@/lib/prisma';
import EditRequestForm from '@/components/EditRequestForm';

export default async function EditRequestPage({ params }: { params: { id: string | string[] } }) {
  const session = await getServerSession(authOptions);
  loggedInProtectedPage(
    session as {
      user: { email: string; id: string; randomKey: string };
    } | null,
  );
  const id = Number(Array.isArray(params?.id) ? params?.id[0] : params?.id);
  const request: Request | null = await prisma.request.findUnique({
    where: { id },
  });
  if (!request) {
    return notFound();
  }

  return (
    <main>
      <EditRequestForm request={request} />
    </main>
  );
}
