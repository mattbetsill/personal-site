import React from "react";
import "./skill.css";

export default function Ticker({ words }) {

    return (
        <div className="btn-two ticker-container overflow-hidden relative w-10 h-10 text-white flex items-center">
            <div className="ticker-content whitespace-nowrap">

                {words.map((word, index) => (
                    <span key={`${word}-${index}`} className="mx-2">
                        {word}
                    </span>
                ))}
                {/* Repeat the words to create an illusion of an infinite loop */}
                {words.map((word, index) => (
                    <span key={`second-${word}-${index}`} className="mx-2">
                        {word}
                    </span>
                ))}
            </div>
        </div>

    );
}