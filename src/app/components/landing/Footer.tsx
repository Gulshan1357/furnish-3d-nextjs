import React from 'react';

import { Bounded } from '@/app/components/Bounded';

interface Props {}

export default function Footer({}: Props) {
  return (
    <Bounded className='highlights'>
      <div className='my-80'>
        <h2 className='text-side-heading text-balance text-center text-4xl uppercase lg:text-8xl'>
          The End;
        </h2>
        <p className='text-side-body mt-4 max-w-xl text-balance text-center text-xl font-normal'>
          Thank you for Visiting this web site
        </p>
      </div>
    </Bounded>
  );
}
