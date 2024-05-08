import styles from './Experience.module.scss';
import Image from 'next/image';
import Lottie from "lottie-react";
import experienceAnimation from "@/public/static/animations/experience.json";
import { FC } from "react";

import ComputerCode from '../icons/ComputerCode';

interface ExperienceProps {
  title: string,
  experiences: 
  {
    title: string,
    duration: string,
    description?: string
  }[]
}

const Experience: FC<ExperienceProps> = ({ title, experiences }) => {
  return(
    <>
      <div className='w-full'>
        <h2 className='text-3xl font-bold uppercase text-center text-emerald-300 mb-4'>{title}</h2>  
      </div>
      
      <div className='flex flex-col lg:flex-row content-between align-center'>
        <div className='w-full lg:w-5/12 my-6 items-center px-8'>
          <Lottie
            animationData={experienceAnimation}
            className="flex justify-center items-center"
            loop={true}
          />
        </div>
        
        <div className='w-full lg:w-1/12'></div>
        
        <div className='flex flex-col w-full lg:w-4/12 my-6 px-4 lg:px-0 justify-center items-center'>
          { experiences.map(experience => {
            return(
              <div className='flex flex-row w-full items-center rounded-lg border-4 border-sky-800 shadow-xl shadow-indigo-500/20 p-4 mb-8'>
                <div className='w-2/12 pe-8 ps-2'><ComputerCode /></div>
                <div className='w-10/12'>
                  <h4 className='text-base font-semibold mb-1'>{experience.title}</h4>
                  <p className='text-sm font-semibold text-emerald-300 mb-2'>{experience.duration}</p>
                  <p className='text-sm text-slate-300 mb-1'>{experience.description}</p>
                </div>
              </div>
            )
          }) }
        </div>
        
        <div className='w-full lg:w-2/12'></div>
      </div>
    </>
  )
}

export default Experience