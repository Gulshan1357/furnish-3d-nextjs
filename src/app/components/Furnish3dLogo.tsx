'use client';

import { SVGProps, useState, useEffect } from 'react';
import clsx from 'clsx';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import darkLogo from '@/../public/logo/LogoDark.svg';
import lightLogo from '@/../public/logo/LogoLight.svg';

export function Furnish3DLogo(props: SVGProps<SVGSVGElement>) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Wait until the component has mounted to prevent hydration issues
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Don't render anything on the server
  }

  if (theme == 'dark') {
    return <Image src={darkLogo} alt='Logo' className='size-10' />;
  } else {
    return <Image src={lightLogo} alt='Logo' className='size-10' />;
  }
}
