'use server';

import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { redirect } from 'next/navigation';
import prisma from '@/app/utils/db';

export async function CreateSavedItemAction(formData: FormData) {
  const { getUser } = getKindeServerSession();

  const user = await getUser();

  if (!user) {
    return redirect('/');
  }

  const response = await prisma.savedItem.create({
    data: {
      owner: {
        connect: { id: user.id },
      },
      name: formData.get('name') as string,
      modifier: formData.get('modifier') as string,
      quantity: Number(formData.get('quantity')),
      imageUrl: formData.get('image') as string,

      // Todo: add local path of image
    },
  });

  return redirect('/inventory');
}

export async function DeleteSavedItem(formData: FormData) {
  const { getUser } = getKindeServerSession();

  const user = await getUser();

  if (!user) {
    return redirect('/');
  }

  const data = await prisma.savedItem.delete({
    where: {
      ownerId: user.id,
      id: formData.get('savedItemId') as string,
    },
  });
  return redirect('/cart');
}

export async function DeleteAllSavedItem(formData: FormData) {
  const { getUser } = getKindeServerSession();

  const user = await getUser();

  if (!user) {
    return redirect('/');
  }

  const data = await prisma.savedItem.deleteMany({
    where: {
      ownerId: user.id,
    },
  });
  return redirect('/cart');
}
