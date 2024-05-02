import React from "react";
import { useEffect, useState, useRef } from "react";

export default function BackgroundImage() {
    const [positionStyle, changePosition] = useState({ position: 'fixed' });
    const [imageHeight, changeImageHeight] = useState(0);
    const [imageStyle, changeImageStyle] = useState({});
    const imageRef = useRef();

    const handleImageLoad = (event) => {
        changeImageHeight(event.target.offsetHeight);
    }




    useEffect(() => {
        const img = imageRef.current;
        if (img.complete) {
            changeImageHeight(img.offsetHeight);
        } else {
            img.addEventListener('load', () => {
                changeImageHeight(img.offsetHeight);
            });
        }

        const handleResize = () => {
            changeImageHeight(img.offsetHeight);
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {

        const handleScroll = () => {
            if (window.scrollY === 0){
                changePosition({position: 'fixed'});

            }
            else if (window.scrollY > imageHeight - window.innerHeight) {
                changePosition({ position: 'fixed' });
                changeImageStyle(
                    {
                        position: 'absolute',
                        bottom: 0,
                        width: '100%',
                        height: 'auto'
                    }
                );
            } else {
                changePosition({ position: 'absolute' });
                changeImageStyle({});
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [imageHeight]);



    return (
        <div style={positionStyle} className="inset-0 z-0">
            {/* <img
                src="/images/fall_of_babylon.png"
                className="w-full h-full object-cover brightness-70"
                alt="Background image"
            /> */}
            <img
                src="/images/John-martin-dall-e1.png"
                className="w-full h-1000 min-h-full object-cover brightness-50"
                alt="Background image"
                style={imageStyle}
                ref={imageRef}
                onLoad={handleImageLoad}
            />
        </div>
    );
}