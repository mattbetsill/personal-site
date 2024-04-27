import React from "react";
import "./skill.css";
export default function Skill({ text }) {

    return (

        <button className="btn-two relative font-2xl overflow-hidden max-w-full bg-gray-800 text-white py-2 px-4">

            <p className="overflow-hidden font-orbitron whitespace-nowrap text-ellipsis">
                {text}
            </p>

        </button>

    )
}