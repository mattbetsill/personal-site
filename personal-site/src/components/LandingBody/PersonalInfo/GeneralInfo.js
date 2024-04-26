"use client"
import React from "react";
import "./Generalinfo.css";
export default function GeneralInfo({ setIsOpen }) {



    return (

        <div className="flex flex-row w-full items-center pb-20 mt-12 h-screen justify-between">
            <div className="flex flex-col justify-between h-full">
                <div className="text-white"></div>
                <div className="z-20">
                    <h1 className=" text-white text-5xl font-bold uppercase ">Sofware</h1>
                    <h1 className="pb-8 text-white text-5xl font-bold uppercase">Developer</h1>
                </div>

            </div>
            <div className="pl-8 flex w-full flex-col justify-between h-full">
                <div></div>
                <div className="hover:cursor-pointer text-right text-white z-20" onMouseEnter={() => setIsOpen(true)}
                    onMouseLeave={() => setIsOpen(false)}>
                    I am here
                </div>
                <div className="flex justify-end z-20">
                    <p className="flex text-xl mb-8 text-white text-right">
                        I'm a software engineer specializing in frontend development.
                    </p>
                </div>
                <div className="pb-8 flex justify-end">

                    <button className="btn-two p-4 pr-12 pl-12 font-sofia-sans weight-1">
                        CONTACT ME
                    </button>

                </div>
            </div>
        </div>

    );
}