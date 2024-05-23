import { Tilt } from 'react-tilt';
import {motion} from "framer-motion"
import { styles } from "../styles"
import { github } from "../assets"
import { SectionWrapper } from "../hoc"
import { projects } from "../constants"
import { fadeIn,textVariant } from "../utils/motion"

const ProjectCard = ({index,name,description,tags,image,source_code_link,live})=>{

  return(
    <motion.div variants={fadeIn("up","spring", index*0.5,0.75)
    
      
    }
    initial="hidden" whileInView="show"  viewport={{ once: true, amount: 0.5 }}>
    <Tilt
     options={{
      max: 45,
      scale: 1,
      speed: 450,
    }}
  
    className='bg-tertiary p-5 rounded-2xl min-h-[550px] max-h-[550px] sm:w-[330px] w-full'
    >
   <div className='relative w-full h-[230px]'>
  <img src={image} alt={name} 
  className='w-full h-full object-cover rounded-2xl '
  />
  <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
    <div
    onClick={()=> window.open(source_code_link,"_blank")}
    className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
    >
      <img src={github} alt="github" 
      className='w-1/2 h-1/2 object-contain'
      />

    </div>

  </div>
   </div>
   <div className='mt-5  min-h-[250px] flex flex-col justify-around'>
   <a href={live} target='_blank' className='text-white font-bold text-[24px]'>{name}</a>
   <p className='mt-2 text-secondary text-[14px]'>{description}</p>
   <div className='mt-4 flex flex-wrap gap-2'>
    {tags.map((tag)=>(
      <p key={tag.name} className={`text-[14px] bg-slate-800 p-2 rounded-xl `}>
        {tag.name}
      </p>
    ))}

   </div>
   </div>
    </Tilt>
    </motion.div>
  )

}

const Works = () => {

  return (
    <>
     <div id='work' className=' flex flex-col justify-center items-center scroll-my-20'>
     <motion.div variants={textVariant(0.5)}
    initial="hidden" whileInView="show"  viewport={{ once: true, amount: 0.5 }}
    className='flex flex-col justify-center items-center'
    >
     <p className={styles.sectionSubText}>MY WORKS</p>
     <h2 className={styles.sectionHeadText}>
       PROJECTS
     </h2>
    </motion.div>

    <motion.div 
     variants={fadeIn("left","spring",0.5,1)}
     initial="hidden" whileInView="show"  viewport={{ once: true, amount: 0.5 }}
    className="w-full flex  justify-center green-pink-gradient p-[0.8px] rounded-2xl mt-9 max-w-4xl">
      <p
     
      className="p-5 text-secondary bg-tertiary text-[17px] w-full leading-[30px] rounded-2xl" 
      >
         Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
      </p>

    </motion.div>

     </div>

    
    <div className="mt-20  flex flex-wrap justify-around  gap-3">
      {projects.map((project,index)=>(
      <ProjectCard
      key={`project-${index}`}
      index = {index}
      {...project}
      />

      ))}
    </div>
    </>
  )
}

export default SectionWrapper(Works,"");