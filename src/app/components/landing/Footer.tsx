import React from 'react';

import { Bounded } from '@/app/components/Bounded';
import Link from 'next/link';
import Image from 'next/image';
import { logos } from '@/app/constants/landing';
import { LogOut } from 'lucide-react';
import vercelLogo from '@/../public/logo/vercel.svg';

interface Props {}

export default function Footer({}: Props) {
  return (
    <Bounded className='highlights'>
      <div>
        <h3 className='mb-10 mt-40 text-center text-xl font-semibold leading-7'>
          Thank you for Visiting this web site
        </h3>
      </div>
      <div className='Logos mx-auto my-10 flex w-full flex-wrap justify-evenly md:flex-nowrap'>
        {logos.map((logo) => {
          return (
            <div key={logo.id} className='flex w-[100px] justify-center px-4'>
              <Image
                src={logo.path}
                alt={logo.name}
                className='border-black-500 my-10 h-auto w-full dark:invert'
              />
            </div>
          );
        })}
      </div>
    </Bounded>
  );
}
