import React from "react";
import ModelOne from "../ThreeJSModels/ModelOne";

export default function About() {
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
                <div className="h-2/3 my-4">
                    <ModelOne className="z-20"></ModelOne>
                </div>
                <div></div>
            </div>

        </div>
    )
}