import React from 'react'
import { Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { Environment, OrbitControls} from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function SkillName(props) {
  const html = useLoader(GLTFLoader, `/assets/${props.name}/scene.gltf`);
  return <primitive object={html.scene} position={props.modalPos}/>;
}

export default function Skill(props) {
  return (
    <div className="w-[100px] h-[100px]" onMouseLeave={() => document.getElementById(props.name).classList.add("hidden")} onMouseEnter={() => document.getElementById(props.name).classList.remove("hidden")}>
        <Canvas camera={{ position: props.cameraPos }}>
          <Suspense fallback={null}>
            <OrbitControls enableRotate={true} enableZoom={false} enablePan={false}/>
            <SkillName name={props.name} modalPos={props.modalPos}/>
            <Environment preset="sunset" />
          </Suspense>
        </Canvas>
        <p id={props.name} className='text-center hidden'>{props.name}</p>
    </div>
  )
}
