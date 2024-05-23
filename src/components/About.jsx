import React from 'react'
import { Tilt } from 'react-tilt'
import {motion} from "framer-motion"
import { styles } from '../styles'
import {fadeIn,textVariant} from "../utils/motion"
const About = () => {
  return (
   <div id='about' className='flex flex-col justify-center items-center mt-16 scroll-my-20'>
   <motion.div variants={textVariant(0.5)}
   initial="hidden" whileInView="show"  viewport={{ once: true, amount: 0.5 }}
   className='flex flex-col justify-center items-center'
   >
    <p className={styles.sectionSubText}>Introduction</p>
    <h2 className={styles.sectionHeadText}>
      Overview
    </h2>
   </motion.div>
   
    <motion.div variants={fadeIn("left","spring",0.5,1)}
     initial="hidden" whileInView="show"  viewport={{ once: true, amount: 0.5 }}
    className='green-pink-gradient max-w-4xl m-5 rounded-[20px] shadow-card p-[0.8px]'
    >
      <div
    
      className='bg-tertiary rounded-[20px] flex flex-col gap-4  p-6 '
      >
        <p> I'm Sanjai. A web developer with a deep specialization in React, and Node.js. 
          With a strong foundation in modern web development practices, I bring a wealth of experience to
           every project, consistently delivering high-quality, scalable, and user-friendly web applications.</p>
           <p>
           My journey in the field of software development commenced in 2021, and it has been marked by steady growth and valuable experiences.

I honed my skills in building responsive and user-centric web applications using React and Tailwind CSS, all while adhering to the principles of clean and scalable coding.
           </p>
  <di className= " flex flex-col gap-3 ">
  <p>If you are a bullet points enjoyer,</p>

           <ul className='list-disc grid grid-cols-2 ml-5 gap-4 gap-x-8 '>
            <li className=''>B.Sc in Electronics and Communication Systems</li>
            <li className=''>Web Developer</li>
            <li>Specialized in React and Node.js </li>
            <li>Continuous learning</li>
           </ul>
  </di>

      </div>
    </motion.div>
   
   </div>
  )
}

export default About