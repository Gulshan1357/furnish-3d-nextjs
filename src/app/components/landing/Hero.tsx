'use client';
import React from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import { hero } from '@/app/constants/landing';
import { Bounded } from '@/app/components/Bounded';
import { Button } from '@/components/ui/button';
import { TextSplitter } from '@/app/components/landing/TextSplitter';

gsap.registerPlugin(useGSAP);

export default function Hero() {
  useGSAP(() => {
    const introT1 = gsap.timeline();

    introT1
      .set('.hero', { opacity: 1 })
      .from('.hero-background', {
        scale: 0.3,
        opacity: 0,
        ease: 'power4.out',
        duration: 1.2,
      })
      .from('.hero-header-word', {
        scale: 0.3,
        opacity: 0,
        ease: 'power4.out',
        delay: 0.3,
        stagger: 1,
        duration: 1.2,
      })
      .from(
        '.hero-subheading',
        {
          opacity: 0,
          y: 30,
        },
        '+=.4',
      )
      .from('.hero-button', {
        opacity: 0,
        y: 10,
        duration: 0.6,
      });
  });

  return (
    <Bounded className='hero opacity-0'>
      <div className='grid h-screen place-items-center text-clip'>
        {/* Background div */}
        <div className='hero-background absolute top-0 h-screen w-screen'>
          <div className='absolute inset-0 bg-black opacity-30'></div>{' '}
          {/* Tint overlay */}
          <Image
            src={hero.furnitureImage}
            alt='Picture of the author'
            className='size-full object-cover'
          />
        </div>
        {/* Foreground content */}
        <div className='grid auto-rows-min place-items-center text-center'>
          <h1
            className='hero-header text-7xl uppercase leading-[.8] md:text-[9rem] lg:text-[13rem]'
            style={{
              color: 'var(--primary-text)',
            }}
          >
            <TextSplitter
              text={hero.heading}
              wordDisplayStyle='block'
              className='hero-header-word'
            />
          </h1>
          <h2 className='hero-subheading mt-12 text-3xl font-semibold lg:text-6xl'>
            {hero.subHeading}
          </h2>
          <Button variant='default' className='hero-button mt-12 uppercase'>
            Inventory
          </Button>
        </div>
      </div>
    </Bounded>
  );
}
