import React from "react";
import Skill from "./skill";
export default function SkillSection() {


    const skills = [
        "AWS",
        "Kubernetes",
        "Docker",
        "GitOps",
        "Jenkins",
        "Sonatype Nexus",
        "Git",
        "Bitbucket",
        "GitHub",
        "Atlassian Suite",
        "Google Cloud Platform",
        "Linux",
        "Windows Server",
        "IIS",
        "Active Directory",
        "JavaScript",
        "TypeScript",
        "Python",
        "Java",
        "Go",
        "Scala",
        "C",
        "C#",
        "SQL",
        "Bash",
        "PowerShell",
        "Groovy",
        "HTML5/CSS",
        ".NET",
        "Spring",
        "React",
        "Node.js",
        "Flask",
        "Next.js",
        "Home Lab",
        "Proxmox",
        "WireGuard",
        "Networking",
        "Climbing",
    ]

    return (
        <div className="container mx-auto px-4 py-6 max-w-full">
            <div className="flex flex-col md:flex-row md:items-start">
                <h2 className="md:text-6xl sm:text-2xl text-white font-cinzel font-bold mb-6 md:mb-0 md:mr-8">Some of my interests and skills:</h2>
                <div className="flex flex-wrap justify-start items-center overflow-auto w-full gap-2">
                    {skills.map((word, index) => (
                        <Skill key={index} text={word} />
                    ))}
                </div>
            </div>
        </div>
    )
}