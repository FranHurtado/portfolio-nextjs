'use client';
import NavBar from "@/components/NavBar/NavBar";
import Window from "@/components/Window/Window";
import AboutMe from "@/components/AboutMe/AboutMe";
import Experience from "@/components/Experience/Experience";
import Image from "next/image";
import React from "react";

import persona from "@/app/data/persona";
import JavascriptIcon from "@/components/icons/JavaScriptIcon";
import TypescriptIcon from "@/components/icons/TypeScriptIcon";
import NodeJSIcon from "@/components/icons/NodeJSIcon";
import MongoDBIcon from "@/components/icons/MongoDBIcon";
import ReactIcon from "@/components/icons/ReactIcon";
import AwsIcon from "@/components/icons/AwsIcon";

export default function Home() {
  let experiences: { title: string, duration: string, description?: string}[] = 
  [
    {
      title: "Monobo - Full Stack Developer Freelance",
      duration: "Jan 2018 - Present",
      description: "Project development from scratch, working with the design team."
    },
    {
      title: "Full Stack Developer Freelance",
      duration: "Jun 2016 - Present",
      description: "Project development from scratch. Hosting infrastructure."
    },
    {
      title: "Planet Swapsee - Full Stack Developer",
      duration: "Sep 2013 - May 2016",
      description: "Development of new features and mantain startup code."
    }
  ]
  
  return (
    <React.Fragment>
      <NavBar />
      
      <main className="flex flex-col items-center">
        
        <div className="w-full p-24">
          <div className="relative items-center grid grid-cols-1 lg:grid-cols-2 before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:indigo-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
            <div className="w-full lg:w-12/12 my-6">
              <Window 
              title={'persona.jsx'} 
              code={persona}
              language="jsx" />
            </div>
            <div className="w-full lg:w-10/12 my-6 ms-auto">
              <p className="text-3xl font-bold leading-[2.6rem] px-4">
                Hello, <br />my name is <span className="text-slate-600">Fran</span> <span className="text-orange-500">Hurtado</span> and I'm a <span className="text-sky-600">Fullstack Developer</span> Freelance
              </p>
              
              <div className="flex w-full my-8">
                <div className="w-2/12 px-4">
                  { <JavascriptIcon /> }
                </div>
                
                <div className="w-2/12 px-4">
                  { <TypescriptIcon /> }
                </div>
                
                <div className="w-2/12 px-4">
                  { <NodeJSIcon /> }
                </div>
                
                <div className="w-2/12 px-4">
                  { <ReactIcon /> }
                </div>
                
                <div className="w-2/12 px-4">
                  { <MongoDBIcon /> }
                </div>
                
                <div className="w-2/12 px-4">
                  { <AwsIcon /> }
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="w-full p-24 bg-slate-800">
          <AboutMe 
            title="Who is Fran?" 
            text="I am a versatile full-stack developer specializing in freelance work. Throughout my career, I have been dedicated to assisting startups in bringing their ideas to life on the internet. My expertise spans a wide range of services, from creating robust hosting infrastructures to complete project development, providing valuable experience across various technologies.<br><br>
            
            In addition to my technical abilities, I possess strong teamwork skills and prioritize fostering positive relationships within collaborative environments. My specialties include:<br><br>
            
            <ul>
              <li>Designing intuitive web and software user interfaces</li>            
              <li>Conducting comprehensive database analysis and development</li>
              <li>API and Web services development</li>
              <li>Effectively managing and supporting multiple projects</li>
              <li>Demonstrating adaptability in rapidly changing technical landscapes, supported by exceptional organizational and analytical skills.</li>
            </ul>"
          />
        </div>
        
        
        <div className="w-full py-24">
          <Experience 
            title="Work experience"
            experiences={experiences}
          />
        </div>
      </main>
    </React.Fragment>
    );
}
