"use client"
import React from "react";
import GeneralInfo from "./PersonalInfo/GeneralInfo";
import About from "./PersonalInfo/About";
import ProjectBody from "./Projects/ProjectBody";
import Contact from "./Contact_Socials/Contact";
import SkillSection from "./Skills/SkillSection";
import { StateProvider } from "@/context/sharedstate";

export default function Body({ setIsOpen, isOpen }) {

    return (
        <div className="z-20 flex-col w-full h-full">
            <GeneralInfo className="width-full" setIsOpen={setIsOpen} isOpen={isOpen}></GeneralInfo>
            <StateProvider>
                <About></About>
                <ProjectBody></ProjectBody>
            </StateProvider>
            <Contact></Contact>
            <SkillSection />

        </div>
    )
}