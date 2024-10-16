'use client';

import { HTMLAttributes, ReactNode, useRef } from 'react';
import dynamic from 'next/dynamic';
const Scene = dynamic(() => import('@/app/components/canvas/Scene'), {
  ssr: false,
});

interface LayoutProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const ref = useRef<HTMLDivElement | null>(null);

  return (
    <div
      ref={ref}
      style={{
        position: 'relative',
        width: ' 100%',
        height: '100%',
        overflow: 'auto',
        touchAction: 'auto',
      }}
    >
      {children}
      <Scene
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          pointerEvents: 'none',
        }}
        eventSource={ref}
        eventPrefix='client'
      />
    </div>
  );
};

export { Layout };
