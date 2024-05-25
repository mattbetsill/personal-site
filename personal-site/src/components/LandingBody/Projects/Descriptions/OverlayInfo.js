import React from "react";
function OverlayInfo({ project, isActive, setActiveProject }) {
    return (
        <div className={`absolute inset-0 bg-black bg-opacity-60 flex justify-center items-center text-white transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={()=> setActiveProject(null)}>
            <div>
                <h3 className="text-2xl">{project.title}</h3>
                <p>{project.description}</p>
            </div>
        </div>
        // <div className="overlay">
        //     <h2>{project.title}</h2>
        //     <p>{project.description}</p>
        //     {/* Add more project details here */}
        // </div>
    );
}

export default OverlayInfo;