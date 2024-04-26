"use client"
import React from 'react';
import "./BackgroundOverlayShape.css"
const BackgroundOverlayShape = ({ isVisible }) => {
    return (
        <div className="fixed left-0 w-full h-full">
          <div className="curtain-wrapper">
            <div className={`curtain curtain-left ${isVisible ? 'open' : ''}`}></div>
            <div className={`curtain curtain-right ${isVisible ? 'open' : ''}`}></div>
        </div>
        </div>
    );
};

export default BackgroundOverlayShape;