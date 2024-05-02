"use client"
import React, { useState, useEffect, useRef } from "react";
import PanthropiaDescription from "./Descriptions/PanthropiaDescription";
import { useSharedState } from "@/context/sharedstate";

export default function ProjectBody() {
    const [showDiv, setShowDiv] = useState(false);
    const [opac, setOpac] = useState(0);
    const [scroll, setScroll] = useState(0);

    const { sharedState, setSharedState } = useSharedState();
    useEffect(() => {
        const checkScroll = () => {
            console.log(sharedState);

            if (window.scrollY >= sharedState && window.scrollY <= sharedState + 800) {
                if (window.scrollY >= sharedState && window.scrollY < sharedState + 200) {
                    setOpac(((window.scrollY - sharedState) % 200) * .005);
                }
                else if (window.scrollY >= sharedState + 600 && window.scrollY < sharedState + 800) {
                    setOpac(1 - ((window.scrollY - (sharedState + 600)) % 200) * .005);

                }
                else {
                    setOpac(1);
                }
                setShowDiv(true);
            } else {
                setShowDiv(false);
            }

            // if (window.innerWidth >= 768)
            //     if (window.scrollY >= 1200 && window.scrollY <= 2000) {
            //         if (window.scrollY >= 1200 && window.scrollY < 1400) {
            //             setOpac(((window.scrollY - 1200) % 200) * .005);
            //         }
            //         else if (window.scrollY >= 1800 && window.scrollY < 2000) {
            //             setOpac(1 - ((window.scrollY - 1800) % 200) * .005);

            //         }
            //         else {
            //             setOpac(1);
            //         }
            //         setShowDiv(true);
            //     } else {
            //         setShowDiv(false);
            //     }
            // else {
            //     //for smaller screens
            //     if (window.scrollY >= 1500 && window.scrollY <= 2300) {
            //         if (window.scrollY >= 1500 && window.scrollY < 1700) {
            //             setOpac(((window.scrollY - 1500) % 200) * .005);
            //         }
            //         else if (window.scrollY >= 2100 && window.scrollY < 2300) {
            //             setOpac(1 - ((window.scrollY - 2100) % 200) * .005);

            //         }
            //         else {
            //             setOpac(1);
            //         }
            //         setShowDiv(true);
            //     } else {
            //         setShowDiv(false);
            //     }
            // }
            setScroll(window.scrollY);


        };

        window.addEventListener('scroll', checkScroll);

        // Cleanup function to remove the event listener
        return () => window.removeEventListener('scroll', checkScroll);
    }, [sharedState]);

    return (
        <div className="relative w-full min-h-1 p-4 text-white">
            {showDiv && <div className={`fixed left-0 top-0 h-full w-full flex flex-col justify-center items-center z-40 font-orbitron`} >
                <h1 className={`text-4xl`} style={{ opacity: opac }}>Projects</h1>


            </div>}
            <div className="h-1-screen"></div>
            <PanthropiaDescription></PanthropiaDescription>
            {/* <ZentacleDescription></ZentacleDescription> */}
        </div >
    )
}