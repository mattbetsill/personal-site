import React from "react";

export default function BackgroundImage() {
    return (
        <div className="fixed inset-0 z-0 overflow-hidden">
            <img
                src="/images/fall_of_babylon.png"
                className="w-full h-full object-cover brightness-70"
                alt="Background image"
            />
        </div>
    );
}