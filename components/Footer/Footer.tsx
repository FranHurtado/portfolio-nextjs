import Github from '../icons/Github';
import Linkedin from '../icons/Linkedin';
import styles from './Footer.module.scss';
import { FC } from "react";

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  const currentYear = new Date().getFullYear();
  
  return(
    <div className='flex flex-row flex-wrap py-8 px-8 lg:px-24 text-center lg:text-left align-middle'>
      <div className='w-full lg:w-6/12 py-4'>
        <p>&copy; { currentYear } Fran Hurtado Portfolio</p>
      </div>
      
      <div className='w-full lg:w-6/12 flex flex-row justify-center lg:justify-end py-4'>
        <a href="https://www.linkedin.com/in/fhurtado/?locale=en_US" target='_blank' className='mx-2'><Linkedin width="32" /></a>
        <a href="https://github.com/FranHurtado" target='_blank' className='mx-2'><Github width="32" /></a>
      </div>
    </div>
  )
}

export default Footer