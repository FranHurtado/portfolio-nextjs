import styles from './Experience.module.scss';
import Image from 'next/image';
import Lottie from "lottie-react";
import projectsAnimation from "@/public/static/animations/projects.json";
import Window from "@/components/Window/Window";
import { FC } from "react";

import ComputerCode from '../icons/ComputerCode';

interface ProjectsProps {
  title: string,
  projects: 
  {
    title: string,
    content: string,
  }[]
}

const Projects: FC<ProjectsProps> = ({ title, projects }) => {
  return(
    <>
      <div className='w-full'>
        <h2 className='text-3xl font-bold uppercase text-center text-sky-600 mb-8'>{title}</h2>  
      </div>
      
      <div className='flex flex-col lg:flex-row content-between align-center'>
        <div className='w-full lg:w-1/12'></div>
        
        <div className='flex flex-col w-full lg:w-6/12 xl:w-5/12 my-6 px-4 lg:px-0 justify-center items-center'>
          { projects.map(project => {
            return(
              <div className='w-full mb-6'>
                <Window 
                  title={project.title} 
                  code={project.content}
                  codeClass='text-sm md:text-base'
                  language="jsx" />
              </div>
            )
          }) }
        </div>
        
        <div className='w-full lg:w-1/12'></div>
        
        <div className='w-full lg:w-4/12 xl:w-5/12 my-6 items-center px-8'>
          <div className='sticky top-8'>
          <Lottie
            animationData={projectsAnimation}
            className="flex justify-center items-center"
            loop={true}
          />
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects