'use client';

import React from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { Bounded } from '@/app/components/Bounded';
import { hero, highlights } from '@/app/constants/landing';
import Image from 'next/image';
import { TextSplitter } from './TextSplitter';

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface Props {}

export default function Highlights({}: Props) {
  useGSAP(() => {
    // const scrollT1 = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: '.highlights-item',
    //     start: 'top top',
    //     end: 'bottom bottom',
    //     scrub: 1.5,
    //     markers: true,
    //   },
    // });
    // scrollT1.fromTo(
    //   '.text-side-heading',
    //   {
    //     opacity: 0,
    //   },
    //   {
    //     opacity: 1,
    //     overwrite: 'auto',
    //   },
    // );
  });

  return (
    <Bounded className='highlights py-6'>
      <div className='w-full'>
        {highlights.map((item) => {
          return (
            <div
              key={item.id}
              className='highlights-item flex flex-col md:h-screen'
            >
              <h4 className='text-side-heading text-balance text-center text-4xl lg:text-5xl'>
                <TextSplitter text={item.lable} />
              </h4>

              <div className='overflow-hidden py-6'>
                <Image
                  src={hero.testImage}
                  // width={500}
                  // height={500}
                  alt='Picture of the author'
                  className='h-full object-contain'
                />
              </div>
            </div>
          );
        })}
      </div>
    </Bounded>
  );
}
