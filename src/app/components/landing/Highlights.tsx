'use client';

import React, { Suspense, useRef } from 'react';
import gsap from 'gsap';

import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

import { Bounded } from '@/app/components/Bounded';
import { hero, highlights } from '@/app/constants/landing';
import { TextSplitter } from '@/app/components/landing/TextSplitter';
import WoodenChair from './WoodenChair';
import ViewCanvas from './ViewCanvas';
import Loading from '../Loading';

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
              className='highlights-item my-4 flex h-screen flex-col rounded-lg border p-10 shadow-2xl lg:flex-row lg:rounded-2xl'
            >
              <div className='lg:flex lg:w-1/2 lg:flex-col lg:justify-center'>
                <h3 className='text-side-heading text-balance text-center text-4xl md:text-5xl lg:text-6xl'>
                  <TextSplitter text={item.heading} />
                </h3>
                <p className='mx-auto mt-4 text-center text-base font-light leading-5 tracking-tighter text-muted-foreground md:text-xl lg:text-2xl'>
                  {item.description}
                </p>
              </div>

              <div className='grow-1 width-full relative mx-auto items-center py-12 lg:w-1/2 lg:p-0'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  version='1.1'
                  viewBox='0 0 800 800'
                  fill='none'
                  className='absolute size-full blur-3xl'
                >
                  <defs>
                    <filter
                      id='bbblurry-filter'
                      x='-100%'
                      y='-100%'
                      width='400%'
                      height='400%'
                      filterUnits='objectBoundingBox'
                      primitiveUnits='userSpaceOnUse'
                      colorInterpolationFilters='sRGB'
                    >
                      <feGaussianBlur
                        stdDeviation='180'
                        x='0%'
                        y='0%'
                        width='100%'
                        height='100%'
                        in='SourceGraphic'
                        edgeMode='none'
                        result='blur'
                      ></feGaussianBlur>
                    </filter>
                  </defs>
                  <g filter='url(#bbblurry-filter)'>
                    <ellipse
                      rx='150'
                      ry='150'
                      cx='404.76032484763573'
                      cy='399.1256538111502'
                      fill='var(--primary-text)'
                    ></ellipse>
                  </g>
                </svg>
                <Image
                  src={hero.furnitureImage}
                  alt='Picture of the author'
                  className='object-contain md:hidden lg:size-full'
                />
                <div className='hidden md:flex md:size-full md:items-center md:justify-center'>
                  <Suspense fallback={<Loading />}>
                    <ViewCanvas />
                  </Suspense>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Bounded>
  );
}
