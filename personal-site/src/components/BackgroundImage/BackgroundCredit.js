"use client"
import React from "react";
import { useEffect, useState } from "react";
import { PAGE_HEIGHT } from "@/constants/pageh";
export default function BackgroundCredit() {


    const [scroll, setScroll] = useState(0);
    const changeBackground = () => {
        setScroll(window.scrollY);


    };
    useEffect(() => {
        window.addEventListener("scroll", changeBackground);
        return () => window.removeEventListener("scroll", changeBackground);
    }, []);
    return (
        <div className={`transition-opacity duration-500 fixed mb-10 bottom-20 right-10 text-white z-20 w-40 h-10 backdrop-blur-sm ${scroll > PAGE_HEIGHT - 950 ? "opacity-100" : "opacity-0"}`}>
            <span className="font-cinzel">The Fall of Babylon,<br />John Martin
            </span>
        </div>
    )
}