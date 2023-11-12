import React, { useEffect, useRef, useState } from 'react'

export default function Home() {

     const canvasRef = useRef(null);
     const [isDrawing, setIsDrawing] = useState(false);
     const [lastX, setLastX] = useState(0);
     const [lastY, setLastY] = useState(0);

     useEffect(() => {
       const canvas = canvasRef.current;
       const ctx = canvas.getContext("2d");


        function mouseEnter() {
          setIsDrawing(false);
        }

        function mouseLeave() {
          setIsDrawing(false);
          //   ctx.beginPath();
        }

       function draw(e) {
         if (!isDrawing) return;

         const x = e.clientX - canvas.offsetLeft;
         const y = e.clientY - canvas.offsetTop;

         ctx.strokeStyle = `rgba(${Math.random() * 255}, ${
           Math.random() * 255
         }, ${Math.random() * 255}, 1)`;
         ctx.lineWidth = 5;

         let radius = Math.abs(x - lastX);
         if (radius > 20) {
          radius = 40
         }
         ctx.beginPath();
         ctx.arc(lastX, lastY, radius, 0, 2 * Math.PI);
         ctx.stroke();

         setLastX(x);
         setLastY(y);
         ctx.beginPath();
         ctx.moveTo(x, y);
       }

       canvas.addEventListener("mouseenter", mouseEnter);

       canvas.addEventListener("mouseleave", mouseLeave);

       canvas.addEventListener("mousemove", draw);

       return () => {
         canvas.removeEventListener("mouseenter", mouseEnter);
         canvas.removeEventListener("mouseleave", mouseLeave);
         canvas.removeEventListener("mousemove", draw);
       };
     }, [isDrawing, lastX, lastY]);

     return (
       <div className=" h-[100vh] w-full">
         <canvas
           ref={canvasRef}
           className="absolute top-0 left-0 z-0"
           width={window.innerWidth}
           height={window.innerHeight}
         ></canvas>
         <div className="absolute w-[50%] h-[50%] flex justify-center items-center flex-col  top-[25vh] left-[50vh]">
           <p>My name is Oussama 👋🏻</p>
           <p>I code for fun, and as a job.</p>
           <p>
             I am a FullStack Dev. I build an enjoyable web experience that
             solves client's problems.
           </p>
         </div>
         <div className="absolute top-[90vh] left-[100vh] w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
           <div className=" w-3 h-3 rounded-full  bg-slate-400 mb-1 animate-bouncing"></div>
         </div>
       </div>
     );
}
