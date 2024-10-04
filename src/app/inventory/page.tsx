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
import { CircleChevronRight, SquareArrowRight, View } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Drawer, DrawerTrigger } from '@/components/ui/drawer';
import ItemDrawer from '../components/inventory/ItemDrawer';

export default function InventoryIndexPage() {
  return (
    <section className='flex flex-wrap'>
      {Items.map((item) => {
        return (
          <div key={item.id} className='w-screen p-4 md:w-1/3 lg:w-1/4'>
            <Card>
              <CardHeader>
                <CardTitle>{item.name}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Skeleton className='h-[125px] rounded-xl' />
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
                  />
                </Drawer>
              </CardFooter>
            </Card>
          </div>
        );
      })}
    </section>
  );
}
