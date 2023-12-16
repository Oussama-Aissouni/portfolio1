import React from 'react'
import SkillsStack from './SkillsStack';
import {Element, animateScroll as scroll } from 'react-scroll';


export default function Skills() {
  return (
    <Element name='skills'>
      <div className="dark:bg-[#1A2130] dark:text-white flex flex-col h-[100vh] w-full justify-center items-center">
        <div>Here are some technologies I enjoy working with:</div>
        <SkillsStack/>
      </div>
    </Element>
  );
}
