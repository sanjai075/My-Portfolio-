import {motion} from "framer-motion"
import { styles } from '../styles'
import {fadeIn,textVariant} from "../utils/motion"
import cg from "../../public/assets/cg.png"

const Experience = () => {
  return (
    <div id='myexperiences' className='flex flex-col justify-center items-center mt-24 scroll-my-28'>
    <motion.div variants={textVariant(0.5)}
    initial="hidden" whileInView="show"  viewport={{ once: true, amount: 0.5 }}
    className='flex flex-col justify-center items-center'
    >
     <p className={styles.sectionSubText}>WHAT I HAVE DONE SO FAR</p>
     <h2 className={styles.sectionHeadText}>
       WORK EXPERIENCE
     </h2>
    </motion.div>
    
     <motion.div variants={fadeIn("right","spring",0.5,1)}
      initial="hidden" whileInView="show"  viewport={{ once: true, amount: 0.5 }}
     className='green-pink-gradient max-w-4xl m-6 rounded-[20px] shadow-card p-[0.8px] mt-7 '
     >
     <div className="bg-black-200 flex flex-col gap-2 md:gap-0 md:flex-row md:justify-around rounded-[20px] p-5  w-full">
     <div className=" max-w-40 order-1 md:order-1  ">
        <img src={cg} alt="" />
      </div>
       <div
     
       className=' md:w-[50%]  order-3 md:order-2 '
       >
       <div className=" ">
        <h2 className="mb-5  font-medium text-xl">Junior Frontend Developer</h2>
         <ul className="list-disc flex flex-col gap-3 ml-3 ">
   
    <li className="mb-2">Worked as a Junior frontend developer assisting with the development of a web application</li>

    <li>Boosted application efficiency through proficient use of JavaScript frameworks like React for faster rendering and improved interactivity.
</li>
<li>Enhanced user experience by implementing responsive web design techniques and optimizing page load times.
</li>
   
    <li>Worked in stacks like React, Tailwindcss, Daisyui and others.</li>
</ul>
       </div>
       </div>
       <div className="  order-2 md:order-3">
        <p>Aug 2021 - Oct 2023</p>
       </div>
     </div>
     </motion.div>
    
    </div>
   )
}

export default Experience