import React from 'react'
import Popup from 'reactjs-popup';
import Details from './Details';

export default function ProjectsStack(props) {
  const containerStyle = {
    backgroundImage: "url('/images/image.png')",
    backgroundSize: '100% 100%',
    backgroundRepeat: 'no-repeat',
  };
  return (
    <div>
      <div className=' h-[90vh] w-[100vw] flex items-center justify-center'>
        <div className='w-[40%] h-[500px] flex'>
          <div className='w-full h-full'>
            <div className='bg-center h-full blur-xs hover:blur-none' style={containerStyle} onMouseLeave={() => {document.getElementById(`details${props.id}`)?.classList.remove('animate-bouncing')}} onMouseEnter={() => document.getElementById(`details${props.id}`)?.classList.add('animate-bouncing')}></div>
            <div className='w-full text-center'>
              <h1 className='text-[2em] before:content-["#"] text-sky-400 uppercase'>
                {props.name}
              </h1>
            </div>
            
            <Popup trigger={
              <div className='flex justify-center items-center' id={`details${props.id}`}>
                <p>Details</p>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M666.7 505.5l-246-178A8 8 0 0 0 408 334v46.9c0 10.2 4.9 19.9 13.2 25.9L566.6 512 421.2 617.2c-8.3 6-13.2 15.6-13.2 25.9V690c0 6.5 7.4 10.3 12.7 6.5l246-178c4.4-3.2 4.4-9.8 0-13z"></path><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path></svg>  
              </div>} modal>
              {// @ts-ignore
              close => (<Details darkMode={props.darkMode} close={close} name={props.name}/>)}
            </Popup>
            </div>
          </div>
        </div>
    </div>
  )
}