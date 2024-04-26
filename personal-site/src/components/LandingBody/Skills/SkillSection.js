import React from "react";
import Skill from "./skill";
export default function SkillSection() {


    const skills = [
        "Frontend",
        "Backend",
        "React",
        "Angular",
        "Vue",
        "Next.js",
        "UI/UX Design",
        "Structured and Unstructured Databases",
        "Java",
        "npm",
        "Node",
        "Express.js",
        ".Net",
        "AWS",
        "Lambda",
        "S3",
        "DynamoDB",
        "EC2",
        "JavaScript",
        "Python3",
        "Weightlifting",
        "Going to the Beach",
    ]

    return (
        <div className="container mx-auto px-4 py-6 max-w-full">
            <div className="flex flex-col md:flex-row md:items-start">
                <h2 className="text-6xl text-white font-bold mb-6 md:mb-0 md:mr-8">Some of my interests and skills:</h2>
                <div className="flex flex-wrap justify-start items-center overflow-auto w-full gap-2">
                    {skills.map((word, index) => (
                        <Skill key={index} text={word} />
                    ))}
                </div>
            </div>
        </div>
    )
}