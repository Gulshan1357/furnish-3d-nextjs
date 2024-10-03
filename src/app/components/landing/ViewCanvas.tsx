'use client';
import { Canvas } from '@react-three/fiber';

interface Props {}

export default function ViewCanvas({}: Props) {
  return (
    <Canvas>
      <mesh>
        <boxGeometry />
        <meshStandardMaterial color={'hotpink'} />
      </mesh>
      <ambientLight intensity={2} />
    </Canvas>
  );
}
