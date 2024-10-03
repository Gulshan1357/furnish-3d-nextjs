'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';

import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

import { Bounded } from '@/app/components/Bounded';
import { hero, highlights } from '@/app/constants/landing';
import { TextSplitter } from '@/app/components/landing/TextSplitter';
import ViewCanvas from '@/app/components/landing/ViewCanvas';

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface Props {}

export default function Highlights({}: Props) {
  const highlightsRef = useRef<HTMLDivElement>(null);

  // useGSAP(() => {
  //   const highlightItems: HTMLElement[] = gsap.utils.toArray(
  //     '.highlights-item',
  //   ) as HTMLElement[];
  //   const pauseRatio = 0.1;
  //   const snapPauseRatio = pauseRatio / (pauseRatio * 2 + 1);
  //   const snapPanelRatio =
  //     1 / (highlightItems.length - 1) / (pauseRatio * 2 + 1);
  //   const snapValues = highlightItems.map(
  //     (panel, i) => snapPauseRatio + i * snapPanelRatio,
  //   );

  //   const scrollT1 = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: highlightsRef.current,
  //       // start: 'top top',
  //       // end: '+=3000',
  //       end: () => '+=' + highlightsRef.current?.offsetWidth,
  //       snap: snapValues,
  //       scrub: 1.5,
  //       markers: true,
  //     },
  //   });
  //   scrollT1.to(highlightItems, {
  //     xPercent: -100 * (4 - 1),
  //   });
  //   scrollT1.to({}, { duration: pauseRatio });

  //   highlightItems.forEach((panel, i) => {
  //     ScrollTrigger.create({
  //       trigger: panel,
  //       containerAnimation: scrollT1,
  //       start: 'left center',
  //       end: 'right center',
  //       onToggle: (self) => {
  //         if (self.isActive) {
  //           console.log('enter panel index:', i);
  //         }
  //       },
  //     });
  //   });
  // });

  return (
    <Bounded className='highlights py-6'>
      <div className='flex w-full flex-col' ref={highlightsRef}>
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
