'use client';

import dynamic from 'next/dynamic';

import { Canvas } from '@react-three/fiber';
import { WoodenChairType } from '@/app/components/landing/WoodenChair';

const WoodenChair = dynamic(
  () => import('@/app/components/landing/WoodenChair'),
  { ssr: false },
);
import { Environment, Float } from '@react-three/drei';

interface Props {}

export default function ViewCanvas({}: Props) {
  return (
    <Canvas
      camera={{ fov: 30 }}
      shadows
      dpr={[1, 1.5]}
      gl={{ antialias: true }}
    >
      {/* <mesh rotation={[0.5, 0.5, 0]}>
        <boxGeometry />
        <meshStandardMaterial color={'hotpink'} />
      </mesh> */}
      <Float
        speed={1} // Animation speed, defaults to 1
        rotationIntensity={0.5} // XYZ rotation intensity, defaults to 1
        floatIntensity={0.5} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
        floatingRange={[-0.01, 0.01]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
      >
        <WoodenChair type={WoodenChairType.sky} />
      </Float>

      <Environment files='hdrs/field.hdr' environmentIntensity={1.5} />
    </Canvas>
  );
}
