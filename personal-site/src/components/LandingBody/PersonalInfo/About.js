import React from "react";
import ModelOne from "../ThreeJSModels/ModelOne";

export default function About() {
    return (
        <div className="flex flex-col">
            <div className="h-1/4-screen font-orbitron text-4xl font-bold">Hello,</div>
        <div className="text-white flex md:flex-row flex-col justify-between">
            <div></div>
            <div className="z-20 font-orbitron">I am a developer based in the United States.
            I attended Virginia Tech and earned a Backelors Degree in Computer Science.
            I apply what I have learned in school, combining it with a passion for continuous learning
            to create inspired projects. </div>
            <div className="h-2/3 my-4">
                <ModelOne className="z-20"></ModelOne>
            </div>
            <div></div>
        </div>

        </div>
    )
}