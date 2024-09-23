import React from 'react';
import { Bounded } from '@/app/components/Bounded';
import { hero, highlights } from '@/app/constants/landing';
import Image from 'next/image';
import { TextSplitter } from './TextSplitter';

interface Props {}

export default function Highlights({}: Props) {
  return (
    <Bounded>
      <div className='text-side relative z-[80] grid h-screen items-center gap-4 md:grid-cols-2'>
        <Image
          src={hero.furnitureImage}
          width={500}
          height={500}
          alt='Picture of the author'
          className='w-full md:hidden'
        />

        <div className='grid'>
          {highlights.map((item) => {
            return (
              <div key={item.id}>
                <h2 className='text-side-heading text-balance text-4xl uppercase lg:text-8xl'>
                  <TextSplitter text={item.lable} />
                </h2>
                <p className='text-side-body mt-4 max-w-xl text-balance text-xl font-normal'>
                  {item.details}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </Bounded>
  );
}
