'use client';

import React, { useRef, useState } from 'react';
import { useGLTF, useTexture } from '@react-three/drei';
import * as THREE from 'three';

export enum WoodenChairType {
  original,
  dark,
  dark2,
  oiled,
  red,
  sky,
}

interface Props {
  type?: WoodenChairType;
  scale?: number;
}

const texturesMap = {
  [WoodenChairType.original]: {
    map: '/models/chair/WoodenChair_Albedo.png',
    normalMap: '/models/chair/WoodenChair_Normal.png',
    roughnessMap: '/models/chair/WoodenChair_Roughness.png',
  },
  [WoodenChairType.dark]: {
    map: '/models/chair/WoodenChair-dark/WoodenChair-dark_Albedo.png',
    normalMap: '/models/chair/WoodenChair-dark/WoodenChair-dark_Normal.png',
    roughnessMap:
      '/models/chair/WoodenChair-dark/WoodenChair-dark_Roughness.png',
  },
  [WoodenChairType.dark2]: {
    map: '/models/chair/WoodenChair-Black/WoodenChair-M_Albedo.png',
    normalMap: '/models/chair/WoodenChair-Black/WoodenChair-M_Normal.png',
    roughnessMap: '/models/chair/WoodenChair-Black/WoodenChair-M_Roughness.png',
  },
  [WoodenChairType.oiled]: {
    map: '/models/chair/WoodenChair-oiled/WoodenChair-oiled_Albedo.png',
    normalMap: '/models/chair/WoodenChair-oiled/WoodenChair-oiled_Normal.png',
    roughnessMap:
      '/models/chair/WoodenChair-oiled/WoodenChair-oiled_Roughness.png',
  },
  [WoodenChairType.red]: {
    map: '/models/chair/WoodenChair-red/WoodenChair-red_Albedo.png',
    normalMap: '/models/chair/WoodenChair-red/WoodenChair-red_Normal.png',
    roughnessMap: '/models/chair/WoodenChair-red/WoodenChair-red_Roughness.png',
  },
  [WoodenChairType.sky]: {
    map: '/models/chair/WoodenChair-sky/WoodenChair-sky_Albedo.png',
    normalMap: '/models/chair/WoodenChair-sky/WoodenChair-sky_Normal.png',
    roughnessMap: '/models/chair/WoodenChair-sky/WoodenChair-sky_Roughness.png',
  },
};

export default function WoodenChair({
  type = WoodenChairType.original,
  scale = 0.03,
  ...props
}: Props) {
  const { nodes, materials } = useGLTF('/models/chair/WoodenChair.glb');
  const [chairType, setChairType] = useState(type);

  const changeTexture = () => {
    setChairType((prevType) =>
      prevType < Object.keys(WoodenChairType).length / 2 - 1
        ? prevType + 1
        : WoodenChairType.original,
    );
  };
  const textures = useTexture(texturesMap[chairType]);

  return (
    <group {...props} dispose={null} scale={scale}>
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.WoodenChair as THREE.Mesh).geometry}
        rotation={[Math.PI / 2, 0, 0.5]}
        position={[1, -30, 80]}
        onPointerDown={changeTexture}
      >
        <meshStandardMaterial {...textures} />
      </mesh>
    </group>
  );
}

useGLTF.preload('/models/chair/WoodenChair.gltf');
