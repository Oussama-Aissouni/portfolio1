import React from 'react'
import SkillsStack from './SkillsStack';

export default function Skills() {
  return (
    <div className="flex flex-col h-[100vh] w-full justify-center items-center">
      <div>Here are some technologies I enjoy working with:</div>
      <SkillsStack/>
    </div>
  );
}
