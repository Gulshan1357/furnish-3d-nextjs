import React, { ReactElement } from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import { Card } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Bounded } from '../components/Bounded';
import prisma from '../utils/db';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { redirect } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Trash2 } from 'lucide-react';
import { DeleteAllSavedItem, DeleteSavedItem } from '@/actions';
import { Items as InventoryItems } from '@/app/constants/inventory';
import Image from 'next/image';

interface Props {}

async function getData(userId: string) {
  const savedItems = await prisma.savedItem.findMany({
    where: {
      ownerId: userId,
    },
    select: {
      id: true,
      name: true,
      modifier: true,
      quantity: true,
      imageUrl: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });
  const totalItems = savedItems.reduce(
    (accumulator, arrayItem) => accumulator + arrayItem.quantity,
    0,
  );
  return { savedItems, totalItems };
}

function loadGif(itemName: string): ReactElement | null {
  switch (itemName) {
    case InventoryItems[0].name:
      return (
        <Image
          src={InventoryItems[0].gif}
          alt={InventoryItems[0].name}
          className='object-contain lg:size-full'
        />
      );

    case InventoryItems[1].name:
      return (
        <Image
          src={InventoryItems[1].gif}
          alt={InventoryItems[1].name}
          className='object-contain lg:size-full'
        />
      );

    case InventoryItems[2].name:
      return (
        <Image
          src={InventoryItems[2].gif}
          alt={InventoryItems[2].name}
          className='object-contain lg:size-full'
        />
      );

    case InventoryItems[3].name:
      return (
        <Image
          src={InventoryItems[3].gif}
          alt={InventoryItems[3].name}
          className='object-contain lg:size-full'
        />
      );

    case InventoryItems[4].name:
      return (
        <Image
          src={InventoryItems[4].gif}
          alt={InventoryItems[4].name}
          className='object-contain lg:size-full'
        />
      );

    case InventoryItems[5].name:
      return (
        <Image
          src={InventoryItems[5].gif}
          alt={InventoryItems[5].name}
          className='object-contain lg:size-full'
        />
      );

    case InventoryItems[6].name:
      return (
        <Image
          src={InventoryItems[6].gif}
          alt={InventoryItems[6].name}
          className='object-contain lg:size-full'
        />
      );

    default:
      return <Skeleton className='size-20 rounded-xl md:size-[125px]' />;
  }
}

export default async function Cart({}: Props) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    return redirect('/');
  }

  const { savedItems, totalItems } = await getData(user.id);

  return (
    <Bounded className='mt-8'>
      <div className='w-full rounded-lg border p-10 shadow-2xl lg:rounded-2xl'>
        <Card className='w-full'>
          <Table>
            <TableCaption>A list of your saved items</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className='w-[100px]'>Image</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Type</TableHead>
                <TableHead className='text-right'>Quantity</TableHead>
                <TableHead className='text-right'>Delete</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {savedItems.map((item, idx) => {
                return (
                  <TableRow key={idx} className='SavedItems'>
                    <TableCell className='font-medium'>
                      {loadGif(item.name)}
                    </TableCell>

                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.modifier}</TableCell>
                    <TableCell className='text-right'>
                      {item.quantity}
                    </TableCell>
                    <TableCell className='text-right'>
                      <form action={DeleteSavedItem}>
                        <input
                          type='hidden'
                          name='savedItemId'
                          value={item.id}
                        />
                        <Button variant='destructive' type='submit'>
                          <Trash2
                            size='icon'
                            className='size-4 shrink-0 rounded-full'
                          />
                        </Button>
                      </form>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={3}>Total</TableCell>
                <TableCell className='text-right'>{totalItems}</TableCell>
                <TableCell className='flex flex-row-reverse text-right'>
                  {savedItems.length === 0 ? (
                    <Button variant='destructive' disabled>
                      Delete All
                    </Button>
                  ) : (
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant='destructive'>Delete All</Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Are you absolutely sure?</DialogTitle>
                          <DialogDescription>
                            This will permanently delete all of your saved
                            items.
                          </DialogDescription>
                        </DialogHeader>
                        <div className='flex justify-between'>
                          <DialogClose asChild>
                            <Button type='button' variant='secondary'>
                              Close
                            </Button>
                          </DialogClose>
                          <DialogClose asChild>
                            <form action={DeleteAllSavedItem}>
                              <Button variant='destructive'>Delete All</Button>
                            </form>
                          </DialogClose>
                        </div>
                      </DialogContent>
                    </Dialog>
                  )}
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </Card>
      </div>
    </Bounded>
  );
}
