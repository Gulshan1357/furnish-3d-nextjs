'use client';

import React, { Suspense, useRef } from 'react';
import gsap from 'gsap';

import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import dynamic from 'next/dynamic';

import { Bounded } from '@/app/components/Bounded';
import { hero, highlights } from '@/app/constants/landing';
import { TextSplitter } from '@/app/components/landing/TextSplitter';
// import WoodenChair from './WoodenChair';

const WoodenChair = dynamic(
  () => import('@/app/components/landing/WoodenChair'),
  { ssr: false },
);
import { WoodenChairType } from '@/app/components/landing/WoodenChair';

import { Environment, Float } from '@react-three/drei';
import ViewCanvas from './ViewCanvas';
import Loading from '../Loading';
const View = dynamic(
  () => import('@/app/components/canvas/View').then((mod) => mod.View),
  {
    ssr: false,
    loading: () => (
      <div className='flex h-96 w-full flex-col items-center justify-center'>
        <svg
          className='-ml-1 mr-3 size-5 animate-spin text-black'
          fill='none'
          viewBox='0 0 24 24'
        >
          <circle
            className='opacity-25'
            cx='12'
            cy='12'
            r='10'
            stroke='currentColor'
            strokeWidth='4'
          />
          <path
            className='opacity-75'
            fill='currentColor'
            d='M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
          />
        </svg>
      </div>
    ),
  },
);

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

              <div className='grow-1 width-full relative items-center py-12 md:mx-auto lg:w-1/2 lg:p-0'>
                {/* Halo behind the model */}
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

                <div className='flex size-full items-center justify-stretch'>
                  {/* <Suspense fallback={<Loading />}>
                    <ViewCanvas />
                  </Suspense> */}
                  <View orbit className='relative size-full'>
                    <Float
                      speed={1} // Animation speed, defaults to 1
                      rotationIntensity={0.5} // XYZ rotation intensity, defaults to 1
                      floatIntensity={0.5} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
                      floatingRange={[-0.01, 0.01]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
                    >
                      <Suspense fallback={null}>
                        <WoodenChair type={WoodenChairType.sky} />
                      </Suspense>
                    </Float>
                    <Environment
                      files='hdrs/field.hdr'
                      environmentIntensity={1.5}
                    />
                  </View>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Bounded>
  );
}
