import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

import { Items } from '@/app/constants/inventory';
import { CircleChevronRight } from 'lucide-react';
import { Drawer, DrawerTrigger } from '@/components/ui/drawer';
import ItemDrawer from '../components/inventory/ItemDrawer';
import { Bounded } from '../components/Bounded';
import Image from 'next/image';
import { Suspense } from 'react';
import Loading from '../components/Loading';

export default function InventoryIndexPage() {
  return (
    <Bounded>
      <div className='flex w-full flex-col items-center justify-between rounded-lg border p-10 shadow-2xl md:flex-row md:flex-wrap lg:rounded-2xl'>
        {Items.map((item) => {
          return (
            <div
              key={item.id}
              className='max-w-[350px] py-4 md:min-w-[340px] lg:w-1/4'
            >
              <Card>
                <CardHeader>
                  <CardTitle>{item.name}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  {/* <Skeleton className='h-[125px] rounded-xl' /> */}

                  <Image
                    src={item.gif}
                    alt='Picture of the author'
                    className='object-contain lg:size-full'
                  />
                </CardContent>
                <CardFooter className='flex-row-reverse'>
                  <Drawer>
                    <DrawerTrigger>
                      <CircleChevronRight className='size-5' />
                    </DrawerTrigger>
                    <ItemDrawer
                      id={Number(item.id)}
                      name={item.name}
                      description={item.description}
                      modifier={item.modifier}
                      gif={item.gif}
                    />
                  </Drawer>
                </CardFooter>
              </Card>
            </div>
          );
        })}
      </div>
    </Bounded>
  );
}
