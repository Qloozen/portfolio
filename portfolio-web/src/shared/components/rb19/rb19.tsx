'use client';

import { useRef } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Mesh } from 'three';
import styles from './rb19.module.scss';

const MeshComponent = () => {
  const fileUrl = '/rb19/scene.gltf';
  const mesh = useRef<Mesh>(null!);
  const gltf = useLoader(GLTFLoader, fileUrl);

  useFrame(() => {
    mesh.current.rotation.y += 0.001;
  });

  return (
    <mesh
      ref={mesh}
      position={[0, 0.2, 0]}
    >
      <primitive object={gltf.scene} />
    </mesh>
  );
};

export const RB19 = () => {
  return (
    <div className={styles.container}>
      <Canvas
        className={styles.canvas}
        camera={{ position: [0, 1, 2.7] }}
      >
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.4} />
        <directionalLight
          position={[-1, 2, 4]}
          intensity={1}
        />
        <directionalLight
          position={[1, -1, -2]}
          intensity={0.5}
        />
        <directionalLight
          position={[0, 2, -1]}
          intensity={0.7}
        />
        <MeshComponent />
      </Canvas>
    </div>
  );
};
