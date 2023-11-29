import React, { Fragment } from "react";
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";


const ServiceCard = ({index, title, icon}) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full orange-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      > 
         <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <Fragment>
      <motion.div
        variants={textVariant()}
      >
        <p className={`${styles.heroSubText}`}>Introduction</p>
        <h2 className={`${styles.sectionHeadText}`}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-full leading-[30px]'
      >
        I am a skilled software Developer with Experience in Python, JavaScript, and Typescript, and expertise in Frameworks like Django, DRF, React, Next.js, Express, and Node.js.
        I love creating web solutions that work great and look good. If you have a project in mind or just want to chat about web development, let&apos;s connect!
        Feel free to reach out through the contact form below to discuss how we can work together.
        Thanks for visiting my portfolio, and I&apos;m excited about the possibility of working together on your next project!
      </motion.p>
      <div className='mt-20 flex flex-row flex-wrap justify-center items-center gap-10 ' >
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </Fragment>
  )
}

export default SectionWrapper(About, 'about')