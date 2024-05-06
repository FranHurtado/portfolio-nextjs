import styles from './Experience.module.scss';
import Image from 'next/image';
import Lottie from "lottie-react";
import workAnimation from "@/public/static/animations/Work.json";
import { FC } from "react";

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
        <h2 className='text-2xl font-bold uppercase text-center text-sky-600 mb-4'>{title}</h2>  
      </div>
      
      <div className='flex flex-col md:flex-row content-between'>
        <div className='w-full md:w-5/12 my-6 items-center px-8'>
          <Lottie
            animationData={workAnimation}
            className="flex justify-center items-center"
            loop={true}
          />
        </div>
        
        <div className='w-full md:w-1/12'></div>
        
        <div className='flex-col w-full md:w-6/12 my-6 items-center'>
          { experiences.map(experience => {
            return(
              <div className=''>{experience.title}</div>
            )
          }) }
        </div>
      </div>
    </>
  )
}

export default Experience