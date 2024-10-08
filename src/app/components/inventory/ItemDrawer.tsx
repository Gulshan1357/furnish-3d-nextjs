'use client';
import React from 'react';
import { Button } from '@/components/ui/button';

import {
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from '@/components/ui/drawer';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { Minus, Plus, X } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import { CreateSavedItemAction } from '@/actions';
import { toast } from 'sonner';
import Image, { StaticImageData } from 'next/image';

interface Props {
  id: number;
  name: string;
  description: string;
  modifier: string[];
  gif: StaticImageData;
}

export default function ItemDrawer({
  name,
  description,
  modifier,
  gif,
}: Props) {
  const [quantity, setQuantity] = React.useState(1);
  const [activeModifier, setActiveModifier] = React.useState(modifier[0]);

  function onClick(adjustment: number) {
    setQuantity(Math.max(1, Math.min(10, quantity + adjustment)));
  }

  return (
    <DrawerContent>
      <form
        action={async (formData) => {
          toast.success('Added to wishlist', {
            description: `${quantity} ${activeModifier} ${quantity == 1 ? name : name + 's'}`,
          });
          await CreateSavedItemAction(formData);
        }}
      >
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

          <div className='mt-3 p-4 pb-0'>
            {/* <Skeleton className='h-[140px] rounded-xl' /> */}
            <Image
              src={gif}
              alt='Picture of the author'
              className='object-contain lg:size-full'
            />
          </div>

          <DrawerFooter>
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
                type='button'
                variant='outline'
                size='icon'
                className='size-8 shrink-0 rounded-full'
                onClick={() => onClick(-1)}
                disabled={quantity <= 0}
              >
                <Minus className='size-4' />
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
                type='button'
                variant='outline'
                size='icon'
                className='size-8 shrink-0 rounded-full'
                onClick={() => onClick(1)}
                disabled={quantity >= 10}
              >
                <Plus className='size-4' />
                <span className='sr-only'>Increase</span>
              </Button>
            </div>

            {/* Hidden fields to pass arguments to form data on submit */}
            <input type='hidden' name='name' value={name} />
            <input type='hidden' name='quantity' value={quantity} />
            <input type='hidden' name='modifier' value={activeModifier} />
            <DrawerClose>
              <Button type='submit'>Add to Wishlist</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </form>
    </DrawerContent>
  );
}
