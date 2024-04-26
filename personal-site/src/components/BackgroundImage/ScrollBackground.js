"use client"
import React, { useEffect, useState } from "react";
import { PAGE_HEIGHT } from "@/constants/pageh";

export default function ScrollBackground() {
    const [opacity, setOpacity] = useState(0);
    const changeBackground = () => {
        let scroll = window.scrollY;

        if (scroll <= 800) {
            setOpacity((scroll % 800 * 0.00125));
        } else if (scroll >= PAGE_HEIGHT - 2000 && scroll < PAGE_HEIGHT - 1200) {
            setOpacity(1 - ((scroll - (PAGE_HEIGHT - 2000)) % 800 * 0.00125));
        }
        else if (scroll >= PAGE_HEIGHT-1200) {
            setOpacity(0)
        }
        else {
            setOpacity(1);
        }

    };
    useEffect(() => {
        window.addEventListener("scroll", changeBackground);
        return () => window.removeEventListener("scroll", changeBackground);
    }, []);

    return (
        <div
            className="fixed inset-0 z-1 transition-opacity duration-500 ease-in-out"
            style={{ backgroundColor: `rgba(15, 15, 15, ${opacity})` }}
        ></div>
    );
};

export const config = {
    runtime: 'client'
};