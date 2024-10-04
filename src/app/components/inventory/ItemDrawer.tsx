'use client';
import React from 'react';
import { Button } from '@/components/ui/button';

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { Minus, Plus, X } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
type Props = {
  id: number;
  name: string;
  description: string;
  modifier: string[];
};

export default function ItemDrawer({ id, name, description, modifier }: Props) {
  const [quantity, setQuantity] = React.useState(0);
  const [activeModifier, setActiveModifier] = React.useState(modifier[0]);

  function onClick(adjustment: number) {
    setQuantity(Math.max(0, Math.min(10, quantity + adjustment)));
  }

  return (
    <DrawerContent>
      <div className='mx-auto w-full max-w-sm'>
        <DrawerHeader className='flex'>
          <div className='flex-1 text-left'>
            <DrawerTitle>{name}</DrawerTitle>
            <DrawerDescription>{description}</DrawerDescription>
          </div>
          <DrawerClose asChild>
            <Button variant='outline'>
              <X size='icon' className='size-4 shrink-0 rounded-full' />
            </Button>
          </DrawerClose>
        </DrawerHeader>
        <div className='p-4 pb-0'>
          <div className='mt-3'>
            <Skeleton className='h-[140px] rounded-xl' />
          </div>
          <div className='flex items-center justify-center space-x-2 pt-4'>
            <Select value={activeModifier} onValueChange={setActiveModifier}>
              <SelectTrigger className=''>
                <SelectValue placeholder='Select a modifier' />
              </SelectTrigger>
              <SelectContent>
                {modifier.map((item, idx) => {
                  return (
                    <SelectItem key={idx} value={item}>
                      {item}
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </Select>
          </div>
          <div className='flex items-center justify-center space-x-2'>
            <Button
              variant='outline'
              size='icon'
              className='h-8 w-8 shrink-0 rounded-full'
              onClick={() => onClick(-1)}
              disabled={quantity <= 0}
            >
              <Minus className='h-4 w-4' />
              <span className='sr-only'>Decrease</span>
            </Button>
            <div className='flex-1 text-center'>
              <div className='text-5xl font-bold tracking-tighter'>
                {quantity}
              </div>
              <div className='text-[0.70rem] uppercase text-muted-foreground'>
                Number of Items
              </div>
            </div>
            <Button
              variant='outline'
              size='icon'
              className='h-8 w-8 shrink-0 rounded-full'
              onClick={() => onClick(1)}
              disabled={quantity >= 10}
            >
              <Plus className='h-4 w-4' />
              <span className='sr-only'>Increase</span>
            </Button>
          </div>
        </div>
        <DrawerFooter className='flex'>
          <Button>Add to Wishlist</Button>
        </DrawerFooter>
      </div>
    </DrawerContent>
  );
}
