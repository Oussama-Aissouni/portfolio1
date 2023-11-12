import React from 'react'
          import { Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { Environment, MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import { TextureLoader } from "three/src/loaders/TextureLoader";
// import html from "../../assets/source/html-3d.glb"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function SkillsStack() {

  // const texture = useLoader(GLTFLoader, "../../assets/scene.gltf");
  function Scene() {
    const gltf = useLoader(GLTFLoader, '/assets/scene.gltf');
    return <primitive object={gltf.scene} />;
  }

  return (
    <div className="flex w-full justify-center">
      <div className="w-[200px] h-[200px]">
        <Canvas camera={{ position: [0, 100, 100] }}>
          <Suspense fallback={null}>
            <OrbitControls enableRotate={true} />
            <Scene />
            <Environment preset="sunset" />
          </Suspense>
        </Canvas>
      </div>
      {/* <div className="w-[200px] h-[200px]">
        <Canvas camera={{ position: [0, 4, 4] }}>
          <OrbitControls enableRotate={true} />
          <Sphere args={[2, 10, 10]} position={[0, 1, 0]}>
            <meshBasicMaterial attach="material" color="red" />
          </Sphere>
        </Canvas>
      </div>
      <div className="w-[200px] h-[200px]">
        <Canvas camera={{ position: [0, 4, 4] }}>
          <OrbitControls enableRotate={true} />
          <Sphere args={[2, 10, 10]} position={[0, 1, 0]}>
            <meshBasicMaterial attach="material" color="blue" />
          </Sphere>
        </Canvas>
      </div> */}

      {/* ********************************************************************** */}
      {/* <Sphere args={[2, 10, 10]} position={[0, 1, 0]} attach="geometry">
            <MeshDistortMaterial  
              map={texture}
              distort={2}
              attach="material"
              color="lightgrey"
              wireframe={false}
            />
      </Sphere> */}
      {/* ********************************************************************** */}
    </div>
  );
}
