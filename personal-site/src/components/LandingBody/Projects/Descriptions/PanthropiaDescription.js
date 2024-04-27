import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import PanthropiaFrame from "../SiteFrames/PanthropiaFrame";

export default function PanthropiaDescription() {

    const [scroll, setScroll] = useState(0);
    useEffect(() => {
        const checkScroll = () => {
            setScroll(window.scrollY);



        };

        window.addEventListener('scroll', checkScroll);

        // Cleanup function to remove the event listener
        return () => window.removeEventListener('scroll', checkScroll);
    }, []);


    const projects = [
        {
            id: 1,
            title: 'Panthropia',
            description: 'The Acropolis of Collegiate Events',
            imageUrl: '/images/panthropia_screen.png',
            websiteUrl: 'https://panthropia.com',
            frontendUrl: 'https://github.com/mattbetsill/panthropia-frontend-public',
            backendUrl: 'https://github.com/mattbetsill/panthropia-backend-public'
        },
        {
            id: 2,
            title: 'Zentacle',
            description: 'The Diver Adviser',
            imageUrl: '/images/zentacle_screen.png',
            websiteUrl: 'https://zentacle.com',
            frontendUrl: null,
            backendUrl: null
        },
        {
            id: 3,
            title: 'Straight Shot Video',
            description: 'Automated Video Stabilization',
            imageUrl: '/images/straightshot_screen.png',
            websiteUrl: 'https://video-stabilizer-matthewb2022.vercel.app/',
            frontendUrl: null,
            backendUrl: null
        },
        {
            id: 4,
            title: 'SiteSea',
            description: 'A Platform for Website Comments',
            imageUrl: '/images/sitesea_screen.png',
            websiteUrl: 'https://site-sea-front-end.vercel.app/',
            frontendUrl: null,
            backendUrl: null
        },
        {
            id: 5,
            title: 'My Github',
            description: 'More projects and repositories!',
            imageUrl: '/images/github_screen.png',
            websiteUrl: 'https://github.com/mattbetsill',
            frontendUrl: null,
            backendUrl: null
        }


        // Add more projects as needed
    ];

    return (
        <div className="text-white p-6 mb-40">
            <div className="grid grid-cols-1 gap-48" id="projects">
                {projects.map((project, index) => (
                    <div key={project.id} className={`flex flex-col md:justify-between md:flex-row md:items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} space-y-4 md:space-y-0 md:space-x-4`}>
                        <a href={project.websiteUrl} target="_blank" rel="noopener noreferrer" className="w-full md:w-1/2">
                            <img src={project.imageUrl} alt={project.title} className="w-full h-auto object-cover hover:opacity-80 transition-opacity duration-300" />
                        </a>
                        <div className={`pt-4 p-4 md:pt-0 md:pl-4`}>
                            <h2 className="text-3xl font-cinzel font-bold">{project.title}</h2>
                            <p className="my-4 font-orbitron">{project.description}</p>
                            <div className="flex flex-row">
                                {(project.frontendUrl || project.backendUrl) &&
                                    <img src="icons8-github.svg" alt="github" className="w-6 h-6 m-2"></img>
                                }
                                <div className="flex items-center">
                                    {project.frontendUrl && (
                                        <a href={project.frontendUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 mr-4">
                                            Frontend
                                        </a>
                                    )}
                                    {project.backendUrl && (
                                        <a href={project.backendUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
                                            {/* GitHub SVG Icon for backend */}
                                            Backend
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        //     <div className="bg-black text-white p-6">
        //     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        //       {projects.map((project) => (
        //         <div key={project.id} className="relative group">
        //           <img src={project.imageUrl} alt={project.title} className="w-full h-auto object-cover"/>
        //           <div className="absolute bottom-0 left-0 w-full p-4 bg-black bg-opacity-50 group-hover:bg-opacity-70 transition duration-300 ease-in-out">
        //             <h2 className="text-xl font-bold">{project.title}</h2>
        //             <p>{project.description}</p>
        //           </div>
        //         </div>
        //       ))}
        //     </div>
        //   </div>

        // <div className="container mx-auto px-4">
        //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        //         {projects.map((project) => (
        //             <div key={project.id} className="bg-white shadow-lg rounded-lg p-6">
        //                 <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
        //                 <p className="text-gray-700">{project.description}</p>
        //                 <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover rounded-lg mt-4" />
        //             </div>
        //         ))}
        //     </div>
        // </div>




        // <div className="flex text-white font-dm-serif relative">
        //     <div className="flex justify-end relative h-40 w-full"> {/* Adjusted height and max-width */}
        //         <div className="relative w-1/2 h-full overflow-hidden">
        //             <img className="absolute w-800 h-500 top-1 left-1/2 transform -translate-x-1/2 " src="/images/panthropia_screen.png" alt="Panthropia" />
        //         </div>
        //     </div>
        //     <div className="absolute top-0 left-0 w-full"> {/* Adjusted width and left positioning */}
        //         <h1 className="text-xl text-left ml-4">Panthropia</h1>
        //         <div className="h-12"></div>
        //         <span className="text-xl pl-24">
        //             "The <i>acropolis</i> of collegiate events"
        //         </span>
        //     </div>
        // </div>

        // <div className="text-white font-dm-serif relative">
        //     <div className="relative h-50 w-full ml-10 max-w-16">
        //         <div className="relative w-full h-full overflow-hidden">
        //             <img className="absolute w-full top-1/2 transform -translate-x-1/2 -translate-y-1/4" src={'/images/panthropia_screen.png'} alt="Image" />
        //         </div>
        //     </div>
        //     <div className="absolute top-0 w-40%">
        //         <h1 className="text-xl text-left">Panthropia</h1>
        //         <div className="h-12"></div>
        //         <span className="text-xl  pl-16">
        //             <span>"The&nbsp;</span>
        //             <span><i>acropolis&nbsp;</i></span>
        //             <span>of&nbsp;</span>
        //             <span>collegiate&nbsp;</span>
        //             <span>events"</span>
        //         </span>
        //     </div>


        // // {/* <div>
        //             <a href="https://panthropia.com" target="_blank" rel="noopener noreferrer">Visit Panthropia</a>
        //         </div>
        //         <div>
        //             <a href="https://github.com/mattbetsill/panthropia-frontend-public" target="_blank" rel="noopener noreferrer">Frontend Github</a>

        //         </div>
        //         <div>
        //             <a href="https://github.com/mattbetsill/panthropia-backend-public" target="_blank" rel="noopener noreferrer">Backend Github</a>

        //         </div> */}
        // // {/* <PanthropiaFrame/> */ }
        //     // </div >
    )
}
