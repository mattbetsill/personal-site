"use client"
import React from "react";
import "./Generalinfo.css";
export default function GeneralInfo({ setIsOpen }) {



    return (
        <div className="flex flex-col md:flex-row w-full md:items-end  pb-20 mt-12 min-h-screen justify-between">
            <div className="flex flex-col mt-16 justify-between h-full px-4 md:px-0">
                    <h1 className="text-white text-4xl md:text-7xl font-cinzel font-bold uppercase">Software</h1>
                    <h1 className="pb-8 text-white text-4xl md:text-7xl font-cinzel font-bold uppercase">Developer</h1>
            </div>
            <div className="pl-4 md:pl-8 flex w-full flex-col justify-between h-full">
                <div className="hover:cursor-pointer text-right text-white z-20" onMouseEnter={() => setIsOpen(true)}
                    onMouseLeave={() => setIsOpen(false)}>
                    I am here
                </div>
                <div className="flex justify-end z-20">
                    <p className="flex text-lg md:text-xl mb-8 text-white text-right">
                        I'm a software engineer specializing in frontend development.
                    </p>
                </div>
                <div className="pb-8 flex justify-end">
                    <button className="btn-two px-8 md:px-12 py-4 font-bold uppercase bg-transparent border border-white text-white hover:bg-white hover:text-black transition-colors duration-300">
                        Contact Me
                    </button>
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