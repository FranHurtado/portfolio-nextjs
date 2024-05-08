'use client';
import NavBar from "@/components/NavBar/NavBar";
import Window from "@/components/Window/Window";
import AboutMe from "@/components/AboutMe/AboutMe";
import Experience from "@/components/Experience/Experience";
import React from "react";

import persona from "@/app/data/persona";
import myProjects from "@/app/data/projects";
import JavascriptIcon from "@/components/icons/JavaScriptIcon";
import TypescriptIcon from "@/components/icons/TypeScriptIcon";
import NodeJSIcon from "@/components/icons/NodeJSIcon";
import MongoDBIcon from "@/components/icons/MongoDBIcon";
import ReactIcon from "@/components/icons/ReactIcon";
import AwsIcon from "@/components/icons/AwsIcon";
import TechBackground from "@/components/icons/TechBackground";
import Projects from "@/components/Projects/Projects";
import Footer from "@/components/Footer/Footer";

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
        
        <div className="w-full p-32 px-16 lg:px-24">
          <div className="relative items-center grid grid-cols-1 lg:grid-cols-2  bg-gradient-radial from-gray-900 to-black-900">
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
              
              <div className="flex flex-row w-full my-8">
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
        
        <div className="w-full p-16 md:p-32 bg-gradient-to-r from-slate-900 to-slate-800">
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
        
        
        <div className="w-full p-32 px-16 lg:px-24">
          <Experience 
            title="Work experience"
            experiences={experiences}
          />
        </div>
        
        <div className="relative w-full p-32 px-8 lg:px-24 bg-white z-0">
          <div className="z-10">
            <Projects 
              title="Projects"
              projects={myProjects}
            />
          </div>
          
          <TechBackground className="absolute bottom-0 left-0 h-[97%] -z-10 opacity-20" />
        </div>
      </main>
      
      <Footer />
    </React.Fragment>
    );
}
