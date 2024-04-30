import styles from './AboutMe.module.scss';
import { FC } from "react";

interface AboutMeProps {
  title: string,
  text: string,
  animation?: FC
}

const AboutMe: FC<AboutMeProps> = ({ title, text, animation }) => {
  return(
    <div className='flex basis-full'>
      
    </div>
  )
}

export default AboutMe