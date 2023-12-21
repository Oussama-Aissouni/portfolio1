import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ProjectsStack from './ProjectsStack';
import {Element, animateScroll as scroll } from 'react-scroll';

export default function Projects(props) {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    autoplay:true,
    autplaySpeed:50
  };
  return (
    <Element name='projects'>
      <div className='dark:bg-[#1A2130] dark:text-white w-full h-[100vh]'>
        <div className='w-full relative top-[100px] flex justify-center'>
        <h1>Projects</h1>
        </div>
        <Slider {...settings}>
          <ProjectsStack darkMode={props.darkMode} id='1' name='ft_transcendence'/>
          <ProjectsStack darkMode={props.darkMode} id='2' name='webserv'/>
          <ProjectsStack darkMode={props.darkMode} id='3' name='inception'/>
        </Slider>
      </div>
    </Element>
  );
}
