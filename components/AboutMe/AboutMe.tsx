import styles from './AboutMe.module.scss';
import Image from 'next/image';
import { FC } from "react";

interface AboutMeProps {
  title: string,
  text: string,
}

const AboutMe: FC<AboutMeProps> = ({ title, text }) => {
  return(
    <div className='flex flex-col md:flex-row'>
      <div className='w-full md:w-8/12 my-6 md:pe-20 text-center md:text-left'>
        <h2 className='text-3xl font-bold uppercase text-orange-500 mb-8'>{title}</h2>
        <div className={styles.list} dangerouslySetInnerHTML={{ __html: text }}></div>
      </div>
      
      <div className='w-full md:w-4/12 my-6 text-center'>
        <Image
          src='/static/images/fran-profile-square.jpg'
          height={280}
          width={280}
          alt='Fran Hurtado profile picture'
          className='rounded-full aspect-square object-cover mt-8 m-auto'
        />
      </div>
    </div>
  )
}

export default AboutMe