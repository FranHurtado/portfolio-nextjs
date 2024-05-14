import styles from './Experience.module.scss';
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
        <h2 className='text-2xl lg:text-4xl font-bold uppercase text-center text-sky-600 mb-16'>{title}</h2>  
      </div>
      
      <div className='flex flex-col lg:flex-row content-between align-center'>
        <div className='w-full lg:w-1/12'></div>
        
        <div className='flex flex-col w-full lg:w-6/12 xl:w-5/12 my-6 px-4 lg:px-0 justify-center items-center'>
          { projects.map((project, key) => {
            return(
              <div className='w-full mb-8 sticky top-24' key={key}>
                <Window 
                  title={project.title} 
                  code={project.content}
                  codeClass='text-xs md:text-base'
                  language="jsx" />
              </div>
            )
          }) }
        </div>
        
        <div className='w-full lg:w-1/12'></div>
        
        <div className='w-full lg:w-4/12 xl:w-5/12 my-8 items-center px-8'>
          <div className='sticky top-16'>
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