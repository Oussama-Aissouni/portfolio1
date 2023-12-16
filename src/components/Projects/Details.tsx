import React, { useContext, useState } from 'react'
import icons from './icons';
import { themeContext } from '../../context/themeContext';

export default function Details(props) {

    const projectsDetails = {
        ft_transcendence: {
            description : " transcendence is a 42 school project, to learn about web developpement and SPA. The goal is to create a web app to play Pong, and socialize with other users.",
            techStack: [
                {icon: icons.figma},
                {icon: icons.react},
                {icon : icons.nestjs},
                {icon: icons.threejs},
                {icon: icons.tailwind},
            ]
        },
        webserv:{
            description: "The goal of the project is to build a C++98 compatible HTTP web server from scratch. The web server can handle HTTP GET, HEAD, POST, PUT, and DELETE Requests, and can serve static files from a specified root directory or dynamic content using CGI. It is also able to handle multiple client connections concurrently.",
            techStack : [
                {icon : icons.cpp},
                {icon: icons.nginx},
            ]
        },
        inception:{
            description: "inception",
            techStack : [
                {icon : icons.nginx},
                {icon : icons.docker},
                {icon: icons.wordpress},
                {icon: icons.mysql},
            ]
        }
    }

    return (
        <div className={`w-screen h-screen flex backdrop-blur-[10px]`}>
            <div className={`${!props.darkMode ? 'bg-[#EEEEFF]' : 'bg-[#1A2130] text-white'}  h-[40%] w-[30%] rounded-[20px] shadow-[0px_0px_30px_5px_rgba(26,28,38,0.5)] overflow-hidden m-auto`}>
                <button
                    className="cursor-pointer relative block p-[2px_5px] leading-[20px] text-[24px] bg-[#6F37CF] rounded-[20px] border-[1px_solid_#cfcece] text-white top-[5px] left-[1px]"
                    onClick={props.close}
                >
                    &times;
                </button>
                <div className='flex flex-col h-[90%] justify-around'>
                    <div className='text-center'>
                        <h1>Project Description</h1>
                        <p>{projectsDetails[props.name].description}</p>
                    </div>
                    <div className='text-center'>
                        <h1>Tech Stack</h1>
                        <div className='flex justify-center'>
                            {projectsDetails[props.name].techStack.map((item, key) => {
                                return (
                                    <img src={item.icon} alt="" key={key} className='w-[60px] h-[60px]'/>
                                    )
                                })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}