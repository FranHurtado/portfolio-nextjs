'use client';
import NavBar from "@/components/NavBar/NavBar";
import Window from "@/components/Window/Window";
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
  return (
    <React.Fragment>
      <NavBar />
      
      <main className="flex flex-row items-center p-24">
        
        

        <div className="relative items-center grid grid-cols-1 md:grid-cols-2 before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:indigo-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
          <div className="w-full md:w-12/12 my-4">
            <Window 
            title={'persona.jsx'} 
            code={persona}
            language="jsx" />
          </div>
          <div className="w-full md:w-10/12 my-4 ms-auto">
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

      </main>
    </React.Fragment>
    );
}
