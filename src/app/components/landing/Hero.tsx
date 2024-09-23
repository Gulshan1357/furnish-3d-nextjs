import React from 'react';
import { hero } from '@/app/constants/landing';
import { Bounded } from '@/app/components/Bounded';
import { Button } from '@/components/ui/button';
import { TextSplitter } from './TextSplitter';

export default function Hero() {
  return (
    <Bounded>
      <div className='grid h-screen place-items-center text-center'>
        {/* Background div */}
        <div className='absolute inset-0 -z-10 bg-gradient-to-r from-sky-500 via-purple-500 to-pink-500'></div>

        {/* Foreground content */}
        <div className='grid auto-rows-min place-items-center text-center'>
          <h1 className='hero-header text-7xl uppercase leading-[.8] md:text-[9rem] lg:text-[13rem]'>
            <TextSplitter
              text={hero.heading}
              wordDisplayStyle='block'
              className='hero-header-word'
            />
          </h1>
          <h2 className='hero-subheading mt-12 text-3xl font-semibold lg:text-6xl'>
            {hero.subHeading}
          </h2>
          <Button variant='outline' className='mt-12 uppercase'>
            Inventory
          </Button>
        </div>
      </div>
    </Bounded>
  );
}
