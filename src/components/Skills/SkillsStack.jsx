import React, { useEffect } from 'react'
  import { Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { Environment, OrbitControls} from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import Skill from './Skill';

export default function SkillsStack() {


  return (
    <div className="flex w-full justify-center">
      {/* html */}
      <Skill name={"html"} cameraPos={[0, 0, 180]} modalPos={[0, -200, 0]}/>
      {/* css */}
      <Skill name={"css"} cameraPos={[0, 0, 180]} modalPos={[0, -200, 0]}/>
      {/* js */}
      <Skill name={"js"} cameraPos={[0, 15, 0]} modalPos={[0, 0, 0]}/>
      {/* react */}
      <Skill name={"react"} cameraPos={[0, 0, 5]} modalPos={[0, 0, 0]}/>
      {/* three */}
      <Skill name={"threejs"} cameraPos={[0, 0, 100]} modalPos={[0, 0, 0]}/>
      {/* cpp */}
      <Skill name={"c++"} cameraPos={[0, 0, 60]} modalPos={[0, 0, 0]}/>
      {/* github */}
      <Skill name={"github"} cameraPos={[0, 10, 10]} modalPos={[-6.5, 0, 0]}/>
    </div>
  );
}
