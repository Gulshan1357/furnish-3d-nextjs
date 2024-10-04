import React from 'react';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Bounded } from '../components/Bounded';

interface Props {}

export default function Cart({}: Props) {
  return (
    <Bounded>
      <div className='SavedItems mb-4 flex w-full flex-col'>
        <Card>
          <CardContent className='md: flex flex-col flex-nowrap items-center justify-between p-4 md:flex-row'>
            {/* Image */}
            <Skeleton className='mb-6 h-[125px] w-[125px] rounded-xl md:mb-0' />

            {/* Title and Description */}
            <div className='flex w-full flex-col md:w-1/4 md:pl-4'>
              <div className='flex items-baseline justify-between'>
                <div className='text-lg font-bold'>Name</div>
                <div className='text-right text-sm uppercase text-muted-foreground'>
                  Chair
                </div>
              </div>
            </div>

            {/* Quantity and Modifiers */}
            <div className='flex w-full flex-col md:w-1/4 md:pl-4'>
              <div className='flex items-baseline justify-between'>
                <div className='text-md uppercase text-muted-foreground'>
                  Number of Items
                </div>
                <div className='text-lg font-bold'>7</div>
              </div>
              <div className='flex items-baseline justify-between'>
                <div className='text-md uppercase text-muted-foreground'>
                  Modifier
                </div>
                <div className='text-lg font-bold'>Red</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Below To be deleted */}
      <div className='SavedItems mb-4 flex w-full flex-col'>
        <Card>
          <CardContent className='md: flex flex-col flex-nowrap items-center justify-between p-4 md:flex-row'>
            {/* Image */}
            <Skeleton className='mb-6 h-[125px] w-[125px] rounded-xl md:mb-0' />

            {/* Title and Description */}
            <div className='flex w-full flex-col md:w-1/4 md:pl-4'>
              <div className='flex items-baseline justify-between'>
                <div className='text-lg font-bold'>Name</div>
                <div className='text-right text-sm uppercase text-muted-foreground'>
                  Chair
                </div>
              </div>
            </div>

            {/* Quantity and Modifiers */}
            <div className='flex w-full flex-col md:w-1/4 md:pl-4'>
              <div className='flex items-baseline justify-between'>
                <div className='text-md uppercase text-muted-foreground'>
                  Number of Items
                </div>
                <div className='text-lg font-bold'>7</div>
              </div>
              <div className='flex items-baseline justify-between'>
                <div className='text-md uppercase text-muted-foreground'>
                  Modifier
                </div>
                <div className='text-lg font-bold'>Red</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className='SavedItems mb-4 flex w-full flex-col'>
        <Card>
          <CardContent className='md: flex flex-col flex-nowrap items-center justify-between p-4 md:flex-row'>
            {/* Image */}
            <Skeleton className='mb-6 h-[125px] w-[125px] rounded-xl md:mb-0' />

            {/* Title and Description */}
            <div className='flex w-full flex-col md:w-1/4 md:pl-4'>
              <div className='flex items-baseline justify-between'>
                <div className='text-lg font-bold'>Name</div>
                <div className='text-right text-sm uppercase text-muted-foreground'>
                  Chair
                </div>
              </div>
            </div>

            {/* Quantity and Modifiers */}
            <div className='flex w-full flex-col md:w-1/4 md:pl-4'>
              <div className='flex items-baseline justify-between'>
                <div className='text-md uppercase text-muted-foreground'>
                  Number of Items
                </div>
                <div className='text-lg font-bold'>7</div>
              </div>
              <div className='flex items-baseline justify-between'>
                <div className='text-md uppercase text-muted-foreground'>
                  Modifier
                </div>
                <div className='text-lg font-bold'>Red</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      {/* Above to be deleted */}
    </Bounded>
  );
}
