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
      // .from('.hero-background', {
      //   scale: 0.3,
      //   opacity: 0,
      //   ease: 'power4.out',
      //   duration: 1.2,
      // })
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
      .from(
        '.hero-para',
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
    <Bounded className='hero top-0 min-h-screen opacity-0'>
      <div className='grid min-h-[90vh] place-items-center text-clip'>
        {/* Background div */}
        <div className='hero-background absolute top-0 h-screen w-screen'>
          <div className='absolute inset-0 bg-secondary-foreground opacity-[0.02]'></div>
          {/* Tint overlay */}
          {/* <Image
            src={hero.testImage}
            alt='Picture of the author'
            className='size-full object-cover'
          /> */}
          {/* TODO: Add gif/image/3dmodel? */}
        </div>
        {/* Foreground content */}
        <div className='z-10 grid h-full auto-rows-min place-items-center pt-20 text-center'>
          <h2 className='hero-subheading text-md mb-3 rounded-full bg-primary/10 px-4 py-2 tracking-tight text-primary md:mb-6 md:text-lg lg:mb-10 lg:text-3xl'>
            {hero.subHeading}
          </h2>
          <h1
            className='hero-header text-6xl uppercase leading-[.8] md:text-[6rem] lg:text-[8rem]'
            // style={{
            //   color: 'var(--primary-text)',
            // }}
          >
            <TextSplitter
              text={hero.heading}
              wordDisplayStyle='block'
              className='hero-header-word'
            />
          </h1>
          <p className='hero-para mx-auto mt-8 text-xl font-light tracking-tighter text-muted-foreground md:text-2xl lg:w-3/4 lg:text-3xl'>
            {hero.description}
          </p>
          <Button variant='default' className='hero-button mt-12 uppercase'>
            Shop Now
          </Button>
        </div>
      </div>
    </Bounded>
  );
}
