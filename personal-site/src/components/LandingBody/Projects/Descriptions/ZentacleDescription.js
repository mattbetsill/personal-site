import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ZentacleFrame from "../SiteFrames/ZentacleFrame";

export default function ZentacleDescription(){

    const [scroll, setScroll] = useState(0);
    useEffect(() => {
        const checkScroll = () => {
            setScroll(window.scrollY);



        };

        window.addEventListener('scroll', checkScroll);

        // Cleanup function to remove the event listener
        return () => window.removeEventListener('scroll', checkScroll);
    }, []);

    return (
        <div className="text-white font-dm-serif flex-col text-center">
            <h1 className="text-7xl">Zentacle</h1>
            <div className="h-16"></div>
            <span className="text-5xl">
                <span>"The&nbsp;</span>
                <span>diver&nbsp;</span>
                <span>adviser"</span>

            </span>
            <div>
                <a href="https://zentacle.com" target="_blank" rel="noopener noreferrer">Visit Zentacle</a>
            </div>

            {/* <ZentacleFrame/> */}
        </div>
    )
}
