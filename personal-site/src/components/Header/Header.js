"use client"
import "./Header.css";
import { Link } from "react-scroll";
import React, { useState, useEffect } from "react";

export default function FloatingHeader() {
    const [blur, setBlur] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 10 && window.scrollY < 210) {
                setBlur(((window.scrollY - 10) % 200 / 200) * 5);
            } else if (window.scrollY < 10) {
                setBlur(0);
            } else {
                setBlur(5);
            }

        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className={`fixed top-0 left-0 w-full z-50 bg-transparent shadow-md`} style={{ backdropFilter: `blur(${blur.toString()}px)` }}>
            <div className="px-6 py-3 flex justify-between">
                <div className="flex">
                    <div className="flex items-center">
                        <h1 className="text-lg text-white font-orbitron font-bold leading-none">Matt Betsill</h1>
                    </div>
                    <div style={{ width: '20px' }}></div>

                    <div className="flex items-center">
                        <h2 className="text-sm text-white font-orbitron font-light leading-none ml-1">SOFTWARE DEVELOPER</h2>
                    </div>
                </div>
                <div className="flex-end text-strike cursor-pointer font-orbitron font-light z-51" >
                    <a><Link to="projects" smooth={true} offset={-80} duration={2000}>work</Link>
                    </a>&nbsp;&nbsp;&nbsp;<a><Link to="about" smooth={true}>about</Link>
                    </a>&nbsp;&nbsp;&nbsp;<a href="mailto:matthew.a.betsill@gmail.com">contact</a>
                </div>
            </div>
            <div className="bg-image"></div>
            <div className="bg-white absolute left-5 right-5" style={{ height: '.5px' }}></div>
        </header>
    );
}