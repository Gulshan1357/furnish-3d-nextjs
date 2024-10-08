import React from 'react';

import { Bounded } from '@/app/components/Bounded';
import Link from 'next/link';
import Image from 'next/image';
import { logos } from '@/app/constants/landing';
import { Button } from '@/components/ui/button';

interface Props {}

export default function Footer({}: Props) {
  return (
    <Bounded className='highlights'>
      <div>
        <h3 className='mb-10 mt-40 text-center text-xl font-semibold leading-7'>
          This website is designed and developed by:
          <a
            target='_blank'
            href='https://gulshan.space/'
            className='rounded-full px-3 py-1 text-primary underline hover:bg-primary/20 focus:bg-primary/10 focus:outline-none focus:ring active:bg-primary/5'
          >
            Gulshan Sankhyan
          </a>
        </h3>
      </div>
      <div className='Logos mx-auto my-10 flex w-full flex-wrap justify-evenly md:flex-nowrap'>
        {logos.map((logo) => {
          return (
            <div key={logo.id} className='flex w-[100px] justify-center px-4'>
              <a
                target='_blank'
                href={logo.link}
                className='flex justify-center focus:outline-none focus:ring'
              >
                <Image
                  src={logo.path}
                  alt={logo.name}
                  className='border-black-500 my-10 h-auto w-full dark:invert'
                />
              </a>
            </div>
          );
        })}
      </div>
    </Bounded>
  );
}
