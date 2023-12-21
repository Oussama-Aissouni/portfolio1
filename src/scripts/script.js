// const canvas = document.getElementById("paintingCanvas");
// const ctx = canvas.getContext("2d");
// let isDrawing = false;
// let isShapeDrawing = false;
// let lastX = 0;
// let lastY = 0;

// canvas.addEventListener("mouseenter", () => {
//   console.log("here")
//   isDrawing = true;
// });

// canvas.addEventListener("mouseleave", () => {
//   isDrawing = false;
//   ctx.beginPath();
// });

// canvas.addEventListener("mousemove", draw);

// function draw(e) {
//   if (!isDrawing && !isShapeDrawing) return;

//   const x = e.clientX - canvas.offsetLeft;
//   const y = e.clientY - canvas.offsetTop;

//   ctx.strokeStyle = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${
//     Math.random() * 255
//   }, 1)`;
//   ctx.lineWidth = 5;
//   if (isDrawing) {
//     const radius = Math.abs(x - lastX);
//     ctx.beginPath();
//     ctx.arc(lastX, lastY, radius, 0, 2 * Math.PI);
//     ctx.stroke();
//   }
//   lastX = x;
//   lastY = y;
//   ctx.beginPath();
//   ctx.moveTo(x, y);
// }


const setUp = (function(text)
{
    let i = 0;
    var textHolder = document.getElementById("textHolder")

    return (
        function(){
            textHolder.innerHTML += text[i];
            i++;
            return text[i];
        }
    )
})

export default write = setUp("Hello World !!!")

const interval = setInterval(() => {
    
    if(write() === undefined)
        clearInterval(interval)
}, 100);