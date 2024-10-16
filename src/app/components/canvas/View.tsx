'use client';

import {
  forwardRef,
  HTMLAttributes,
  MutableRefObject,
  ReactNode,
  Suspense,
  useImperativeHandle,
  useRef,
} from 'react';
import {
  OrbitControls,
  PerspectiveCamera,
  View as ViewImpl,
} from '@react-three/drei';
import { Three } from '@/app/helpers/components/Three';

interface CommonProps {
  color?: string;
}

export const Common = ({ color }: CommonProps) => (
  <Suspense fallback={null}>
    {color && <color attach='background' args={[color]} />}
    <ambientLight />
    <pointLight position={[20, 30, 10]} intensity={3} decay={0.2} />
    <pointLight position={[-10, -10, -10]} color='blue' decay={0.2} />
    <PerspectiveCamera makeDefault fov={40} position={[0, 0, 6]} />
  </Suspense>
);

interface ViewProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  orbit?: boolean;
}

const View = forwardRef<HTMLDivElement | null, ViewProps>(
  ({ children, orbit, ...props }, ref) => {
    const localRef = useRef<HTMLDivElement | null>(null);

    // Only return localRef.current if it's not null
    useImperativeHandle(ref, () =>
      localRef.current ? localRef.current : document.createElement('div'),
    );

    return (
      <>
        <div ref={localRef} {...props} />
        <Three>
          <ViewImpl
            track={localRef as unknown as MutableRefObject<HTMLElement>}
          >
            {children}
            {orbit && <OrbitControls />}
          </ViewImpl>
        </Three>
      </>
    );
  },
);
View.displayName = 'View';

export { View };
