import React, { useEffect, useRef, useState } from 'react'
import {Element, animateScroll as scroll } from 'react-scroll';
import Corner from './Corner';



export default function Home(props) {

  return (
      <Element name='about' className='h-[100vh] w-full dark:bg-[#1A2130] dark:text-white'>
        <Corner darkMode={props.darkMode}/>
        <div className="  flex justify-center items-center flex-col h-full w-[60%] m-auto">
           <p>My name is Oussama 👋🏻</p>
           <p>I code for fun, and as a job.</p>
           <p>I am a FullStack Dev.</p>
           <p>I build an enjoyable web experience that solves client's problems.</p>
        </div>
       </Element>
      );
}







{/* <svg viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M484.32 375.24C575.25 255.5 857.87 527.6 788.67 581.07c-94.76 73.21-491.01 39.99-304.35-205.83z" fill="#1C80AA"></path><path d="M401.03 749.89l-4.85 133.8-77.69 21.37h66.36l19.42 35.27 4.86-35.27 40.46 6.14-38.84-25.89 8.09-114.91-17.81-20.51zM524.36 771.23l10.48 133.48-74.73 30.11 65.92-7.59 23.33 32.82 0.79-35.6 40.89 1.48-41.54-21.28-5.11-115.08-20.03-18.34z" fill="#3B5174"></path><path d="M224.73 264.77l-24 50.19a21.7 21.7 0 0 1-37.73 2.5l-31.57-48.27a21.7 21.7 0 0 1 17.41-33.57l55.61-1.92a21.7 21.7 0 0 1 20.28 31.07z" fill="#DE7B56"></path><path d="M900.53 638.76c-18.3 86.91-221.86 208.13-478 171.54C150.46 771.44 26 281.88 315 103.56c161.25-99.49 326.71 5 356.8 130.37C713 405.47 583.15 534.58 749.57 609c86.91 38.91 164.43-34.33 150.96 29.76z" fill="#FDD2BE"></path><path d="M365.86 264.78m-32.45 0a32.45 32.45 0 1 0 64.9 0 32.45 32.45 0 1 0-64.9 0Z" fill=""></path><path d="M512.24 366c137.48-60.86 253.34 314 166.92 327.31C560.81 711.56 230 490.92 512.24 366zM223.3 530c-9.34-2.6-17.2-12.8-23.94-31a195 195 0 0 1-7.64-27 7.28 7.28 0 0 1 14.3-2.79c4.79 24.5 15 46.44 21.91 46.93 1.12 0.08 11.43-0.5 27.23-45.51a7.28 7.28 0 1 1 13.74 4.82c-13.61 38.77-27 56.31-42 55.22a18.18 18.18 0 0 1-3.6-0.67zM340.8 590.36c-9.63 1.14-20.77-5.32-33.92-19.63a195 195 0 0 1-17.32-22.11 7.28 7.28 0 0 1 12.17-8c13.73 20.85 31.53 37.27 38.07 35.12 1.07-0.35 10.38-4.8 7.93-52.44a7.28 7.28 0 1 1 14.55-0.75c2.11 41-3.59 62.33-17.95 67a18.18 18.18 0 0 1-3.53 0.81zM261.5 659.71c-9-0.19-18.35-7.55-28.56-22.35a180.41 180.41 0 0 1-13-22.49 6.74 6.74 0 0 1 12.18-5.77c9.9 20.88 24.1 38.21 30.37 37.08 1-0.18 10.13-3.07 14-47a6.74 6.74 0 1 1 13.43 1.18c-3.34 37.87-11.31 56.66-25.07 59.12a16.82 16.82 0 0 1-3.35 0.23zM389.28 722.29c-9.26 2.85-21.38-1.51-36.89-13.22a195 195 0 0 1-21-18.64 7.28 7.28 0 0 1 10.53-10.06c17.25 18.05 37.7 31 43.75 27.71 1-0.54 9.35-6.59-1.61-53a7.28 7.28 0 1 1 14.17-3.35c9.44 40 7.65 62-5.63 69.16a18.18 18.18 0 0 1-3.32 1.4z" fill="#22B0C3"></path></g></svg> */}

 //  const canvasRef = useRef(null);
    //  const [isDrawing, setIsDrawing] = useState(false);
    //  const [lastX, setLastX] = useState(0);
    //  const [lastY, setLastY] = useState(0);

    //  useEffect(() => {
    //    const canvas = canvasRef.current;
    //    const ctx = canvas.getContext("2d");

    //     function mouseEnter() {
    //       setIsDrawing(false);
    //     }

    //     function mouseLeave() {
    //       setIsDrawing(false);
    //     }

    //    function draw(e) {
    //      if (!isDrawing) return;

    //      const x = e.clientX - canvas.offsetLeft;
    //      const y = e.clientY - canvas.offsetTop;

    //      ctx.strokeStyle = `rgba(${Math.random() * 255}, ${
    //        Math.random() * 255
    //      }, ${Math.random() * 255}, 1)`;
    //      ctx.lineWidth = 5;

    //      let radius = Math.abs(x - lastX);
    //      if (radius > 20) {
    //       radius = 40
    //      }
    //      ctx.beginPath();
    //      ctx.arc(lastX, lastY, radius, 0, 2 * Math.PI);
    //      ctx.stroke();

    //      setLastX(x);
    //      setLastY(y);
    //      ctx.beginPath();
    //      ctx.moveTo(x, y);
    //    }

    //    canvas.addEventListener("mouseenter", mouseEnter);

    //    canvas.addEventListener("mouseleave", mouseLeave);

    //    canvas.addEventListener("mousemove", draw);

    //    return () => {
    //      canvas.removeEventListener("mouseenter", mouseEnter);
    //      canvas.removeEventListener("mouseleave", mouseLeave);
    //      canvas.removeEventListener("mousemove", draw);
    //    };
    //  }, [isDrawing, lastX, lastY]);


    {/* <div className="dark:bg-[#1A2130] dark:text-white"> */}
        {/*
          <canvas
           ref={canvasRef}
           className="absolute top-0 left-0 z-0"
           width={window.innerWidth}
           height={window.innerHeight}
           >
          </canvas> 
        */}
         {/* <div className=" w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
           <div className=" w-3 h-3 rounded-full  bg-slate-400 mb-1 animate-bouncing"></div>
         </div> */}
       {/* </div> */}