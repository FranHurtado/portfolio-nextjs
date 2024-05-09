'use client';
import NavBar from "@/components/NavBar/NavBar";
import Window from "@/components/Window/Window";
import AboutMe from "@/components/AboutMe/AboutMe";
import Experience from "@/components/Experience/Experience";
import React from "react";

import persona from "@/app/data/persona";
import myProjects from "@/app/data/projects";
import myExperiences from "@/app/data/experiences";
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
  return (
    <React.Fragment>
      <NavBar />
      
      <main className="flex flex-col items-center">
        
        <div className="w-full p-16 lg:p-32 px-8 lg:px-24">
          <div className="relative items-center grid grid-cols-1 lg:grid-cols-2  bg-gradient-radial from-gray-900 to-black-900">
            <div className="w-full lg:w-12/12 my-6">
              <Window 
              title={'persona.jsx'} 
              code={persona}
              codeClass='text-xs md:text-base'
              language="jsx" />
            </div>
            <div className="w-full lg:w-10/12 my-6 ms-auto">
              <p className="text-3xl font-bold leading-[2.6rem] px-4">
                Hello, <br />my name is <span className="text-slate-600">Fran</span> <span className="text-orange-500">Hurtado</span> and I'm a <span className="text-sky-600">Fullstack Developer</span> Freelance
              </p>
              
              <div className="flex flex-row flex-wrap w-full my-8">
                <div className="w-4/12 lg:w-2/12 px-4 py-8 lg:py-0">
                  { <JavascriptIcon /> }
                </div>
                
                <div className="w-4/12 lg:w-2/12 px-4 py-8 lg:py-0">
                  { <TypescriptIcon /> }
                </div>
                
                <div className="w-4/12 lg:w-2/12 px-4 py-8 lg:py-0">
                  { <NodeJSIcon /> }
                </div>
                
                <div className="w-4/12 lg:w-2/12 px-4 py-8 lg:py-0">
                  { <ReactIcon /> }
                </div>
                
                <div className="w-4/12 lg:w-2/12 px-4 py-8 lg:py-0">
                  { <MongoDBIcon /> }
                </div>
                
                <div className="w-4/12 lg:w-2/12 px-4 py-8 lg:py-0">
                  { <AwsIcon /> }
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="w-full p-16 px-8 md:p-32 bg-gradient-to-r from-slate-900 to-slate-800" id="about">
          <AboutMe 
            title="Who is Fran?" 
            text="I am a versatile full-stack developer specializing in freelance work. Throughout my career, I have been dedicated to assisting startups in bringing their ideas to life on the internet. My expertise spans a wide range of services, from creating robust hosting infrastructures to complete project development, providing valuable experience across various technologies.<br><br>
            
            In addition to my technical abilities, I possess strong teamwork skills and prioritize fostering positive relationships within collaborative environments. My specialties include:<br><br>
            
            <ul>
              <li>Designing <strong class='text-sky-600'>intuitive</strong> web and software <strong class='text-sky-600'>user interfaces</strong></li>            
              <li>Conducting comprehensive <strong class='text-sky-600'>database analysis and development</strong></li>
              <li>API and Web services development with <strong class='text-sky-600'>NodeJS, ExpressJS and MongoDB</strong></li>
              <li>Frontend development with <strong class='text-sky-600'>ReactJS and VueJS</strong></li>
              <li><strong class='text-sky-600'>Wordpress</strong> development and management</li>
              <li>Effectively managing and supporting <strong class='text-sky-600'>multiple projects</strong></li>
              <li>Demonstrating <strong class='text-sky-600'>adaptability</strong> in rapidly changing technical landscapes, supported by exceptional organizational and <strong class='text-sky-600'>analytical skills</strong>.</li>
            </ul>"
          />
        </div>
        
        
        <div className="w-full p-32 px-4 lg:px-24" id="experience">
          <Experience 
            title="Work experience"
            experiences={myExperiences}
          />
        </div>
        
        <div className="relative w-full py-32 px-2 lg:px-24 bg-white z-0" id="projects">
          <div className="z-10">
            <Projects 
              title="Recent projects"
              projects={myProjects}
            />
          </div>
          
          <TechBackground className="absolute bottom-0 left-0 object-cover h-[97%] w-[97%] -z-10 opacity-20" />
        </div>
      </main>
      
      <Footer />
    </React.Fragment>
    );
}
