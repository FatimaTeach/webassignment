"use client";
import { ProjectCard } from "@/components/ProjectCard"
import { Projects } from "@/constants"
// import Image from "next/image"

export const page = () => {
  return (
    <div 
    style={{backgroundImage: "url(/mountains.jpg)"}}
    className="w-screen h-screen flex items-center justify-center bg-cover">
        <div className="grid grid-cols-2 gap-5 max-w-[90%] max-h-[90%]/">
        {Projects.map((projects, index) => (
            <ProjectCard
            key={index}
            title={projects.title}
            text={projects.text}
            image={projects.src}
            />


        ))}
        </div>
    </div>
  )
}

export default page

