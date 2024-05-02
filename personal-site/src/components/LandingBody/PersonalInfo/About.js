"use client"
import React from "react";
import ModelOne from "../ThreeJSModels/ModelOne";
import { useEffect, useRef } from "react";
import { useSharedState } from "@/context/sharedstate";

export default function About() {

    const aboutRef = useRef();
    const { sharedState, setSharedState } = useSharedState();

    useEffect(() => {
        const checkScroll = () => {
            if (aboutRef.current) {
                const rect = aboutRef.current.getBoundingClientRect(); // Get rect object
                const bottomPosition = rect.top + window.scrollY + rect.height - window.innerHeight/2; // Calculate absolute bottom position
                setSharedState(bottomPosition); // Update state with the bottom position
                console.log(sharedState)
            }
            // console.log(aboutEnd);


            // rest of the code
        };

        window.addEventListener('scroll', checkScroll);

        return () => {
            window.removeEventListener('scroll', checkScroll);
        };
    }, []);

    return (
        <div className="flex flex-col">
            <div className="flex flex-col h-1/4-screen justify-between" id="about">
                <div></div>
                <div className="text-white my-4 font-orbitron text-4xl font-bold">Hello,</div>
            </div>
            <div className="text-white flex md:flex-row flex-col justify-between">
                <div></div>
                <div className="z-20 my-20 font-orbitron text-2xl">I am a developer based in the United States.
                    I attended Virginia Tech and earned a Bachelors Degree in Computer Science.
                    I apply what I have learned in school, combining it with a passion for continuous learning
                    to create inspired projects. </div>
                <div className="flex justify-center h-2/3 my-4" ref={aboutRef}>
                    <ModelOne className="z-20"></ModelOne>
                </div>
                <div></div>
            </div>

        </div>
    )
}