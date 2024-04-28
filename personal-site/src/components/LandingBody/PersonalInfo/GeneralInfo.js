"use client"
import React from "react";
import "./Generalinfo.css";


function Available({ setIsOpen }) {
    const date = new Date();
    date.setDate(date.getDate() + 2);
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'short' });
    return (
        <div className="flex flex-row md:justify-center sm:justify-end">
            <div className="flex justify-start z-20">
                <p className="flex text-5xl md:text-8xl lg:pl-20 md:pl-10 font-orbitron font-medium mb-8 text-white text-right hover:cursor-pointer" onMouseEnter={() => setIsOpen(true)}
                    onMouseLeave={() => setIsOpen(false)}>
                    {day}
                </p>
            </div>
            <div className="flex flex-col mt-4 text-left">
                <div className="text-xl font-cinzel hover:cursor-pointer" onMouseEnter={() => setIsOpen(true)}
                    onMouseLeave={() => setIsOpen(false)}>
                    {month}
                </div>
                <div className="font-orbitron text-sm hover:cursor-pointer" onMouseEnter={() => setIsOpen(true)}
                    onMouseLeave={() => setIsOpen(false)}>
                    Available <br />for work
                </div>
            </div>
        </div>
    )
}
export default function GeneralInfo({ setIsOpen, isOpen }) {



    return (
        <div className="flex flex-col md:flex-row w-full md:items-end  pb-20 mt-12 min-h-screen justify-between">
            <div className="flex flex-col mt-16 justify-between h-full px-4 md:px-0">
                <h1 className="text-white text-4xl md:text-7xl font-cinzel font-bold uppercase">Software</h1>
                <h1 className="pb-8 text-white text-4xl md:text-7xl font-cinzel font-bold uppercase">Developer</h1>
            </div>
            <div className="pl-4 md:pl-8 flex w-full flex-col justify-between h-full">
                <div className="text-right text-white z-20">
                    <Available setIsOpen={setIsOpen} />
                </div>
                <div className={`flex md:justify-center sm:justify-end ${isOpen ? "opacity-100 transition-opacity duration-500" : "opacity-0 transition-opacity duration-500"} font-orbitron text-white text-end`}>
                    <div>
                        This is a fake availability :(... <br />Contact me for my current status
                    </div>
                </div>
                <div className="h-1/4-screen">

                </div>
                <div className="flex justify-end z-20">
                    <p className="flex text-lg md:text-xl lg:pl-20 md:pl-10 font-orbitron font-medium mb-8 text-white text-right">
                        I'm a software engineer with a passion for creating salient, impactful solutions to modern problems.
                    </p>
                </div>
                <div className="pb-8 flex justify-end">
                    <a href="mailto:matthew.a.betsill@gmail.com" className="btn-two font-orbitron px-8 md:px-12 py-4 font-bold uppercase bg-transparent border border-white text-white hover:bg-white hover:text-black transition-colors duration-300">
                        <span>Contact Me</span>
                    </a>
                </div>
            </div>
        </div>


        // <div className="flex flex-row w-full items-center pb-20 mt-12 h-screen justify-between">
        //     <div className="flex flex-col justify-between h-full">
        //         <div className="text-white"></div>
        //         <div className="z-20">
        //             <h1 className=" text-white text-5xl font-bold uppercase ">Sofware</h1>
        //             <h1 className="pb-8 text-white text-5xl font-bold uppercase">Developer</h1>
        //         </div>

        //     </div>
        //     <div className="pl-8 flex w-full flex-col justify-between h-full">
        //         <div></div>
        //         <div className="hover:cursor-pointer text-right text-white z-20" onMouseEnter={() => setIsOpen(true)}
        //             onMouseLeave={() => setIsOpen(false)}>
        //             I am here
        //         </div>
        //         <div className="flex justify-end z-20">
        //             <p className="flex text-xl mb-8 text-white text-right">
        //                 I'm a software engineer specializing in frontend development.
        //             </p>
        //         </div>
        //         <div className="pb-8 flex justify-end">

        //             <button className="btn-two p-4 pr-12 pl-12 font-sofia-sans weight-1">
        //                 CONTACT ME
        //             </button>

        //         </div>
        //     </div>
        // </div>

    );
}