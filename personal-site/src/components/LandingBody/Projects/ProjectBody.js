"use client"
import React, { useState, useEffect } from "react";
import PanthropiaDescription from "./Descriptions/PanthropiaDescription";

export default function ProjectBody() {
    const [showDiv, setShowDiv] = useState(false);
    const [opac, setOpac] = useState(0);
    const [scroll, setScroll] = useState(0);

    useEffect(() => {
        const checkScroll = () => {
            if (window.scrollY >= 1500 && window.scrollY <= 3000) {
                if (window.scrollY >= 1500 && window.scrollY < 1700) {
                    setOpac(((window.scrollY - 1500) % 200) * .005);
                }
                else if (window.scrollY >= 1700) {
                    setOpac(1);
                }
                setShowDiv(true);
            } else {
                setShowDiv(false);
            }
            setScroll(window.scrollY);


        };

        window.addEventListener('scroll', checkScroll);

        // Cleanup function to remove the event listener
        return () => window.removeEventListener('scroll', checkScroll);
    }, []);

    return (
        <div className="relative w-full min-h-1 p-4 text-white">
            {/* {showDiv && <div className={`${scroll <= 2000 ? 'fixed' : 'fixed'} left-0 top-0 h-full w-full flex flex-col justify-center items-center z-40 font-orbitron`} >
                <h1 className="text-4xl" style={{ opacity: opac }}>Projects</h1>
            </div>} */}
            <PanthropiaDescription></PanthropiaDescription>
            {/* <ZentacleDescription></ZentacleDescription> */}
        </div>
    )
}