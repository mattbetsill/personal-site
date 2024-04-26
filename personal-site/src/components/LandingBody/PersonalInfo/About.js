import React from "react";
import ModelOne from "../ThreeJSModels/ModelOne";

export default function About() {
    return (
        <div className="text-white flex flex-row justify-between">
            <div></div>
            <div className="z-20">this is the about section</div>
            <div className="h-2/3">
                <ModelOne className="z-20"></ModelOne>
            </div>
            <div></div>
        </div>
    )
}