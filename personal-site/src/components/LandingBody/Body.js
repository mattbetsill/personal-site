import React from "react";
import GeneralInfo from "./PersonalInfo/GeneralInfo";
import About from "./PersonalInfo/About";
import ProjectBody from "./Projects/ProjectBody";
import Contact from "./Contact_Socials/Contact";
import SkillSection from "./Skills/SkillSection";

export default function Body({ setIsOpen }) {
    return (
        <div className="z-20 flex-col w-full h-full">
            <GeneralInfo className="width-full" setIsOpen={setIsOpen}></GeneralInfo>
            <div className="h-1/2-screen"></div>
            <About></About>
            <ProjectBody></ProjectBody>
            <Contact></Contact>
            <SkillSection/>

        </div>
    )
}