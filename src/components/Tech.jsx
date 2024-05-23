

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";

const Tech = () => {
  return (
    <div  id="Skills" className="flex flex-col items-center scroll-my-20">
      <div className="flex flex-col items-center">
        <p className={styles.sectionHeadText}>Skills</p>
        <p className={styles.sectionSubText} >skills and Technology I'm good at</p>
      </div>
      <div  className='flex flex-row flex-wrap justify-center gap-10 mt-5 scroll-my-28'
    >
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");