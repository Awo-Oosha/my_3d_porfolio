import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const formRef = useRef();
  const [state, handleSubmit] = useForm("myyqvdjj");
  const [isModalOpen, setIsModalOpen] = useState(false)

   const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({...form, [name]: value})

  };

    useEffect(() => {
    if (state.succeeded) {
      setIsModalOpen(true);
      setForm({
        name: "",
        email: "",
        message: ""
      })
      setTimeout(() => {
        setIsModalOpen(false);
      }, 3000);
    }
  }, [state.succeeded]);

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col' htmlFor="name">
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              id="name"
              type="text" 
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
            <ValidationError 
              prefix="Name" 
              field="name"
              errors={state.errors}
            />
          </label>
          <label className='flex flex-col' htmlFor="email">
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              id="email"
              type="email" 
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
             <ValidationError 
              prefix="Email" 
              field="email"
              errors={state.errors}
            />
          </label>
          <label className='flex flex-col' htmlFor="message">
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
            <ValidationError 
              prefix="Message" 
              field="message"
              errors={state.errors}
            />
          </label> 

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
            disabled={state.submitting}
          >
            {state.submitting ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed p-3 lg:p-[6rem]  top-1/2 flex flex-col justify-center items-center left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 shadow-md bg-tertiary  rounded-3xl text-white "
          >
            <p
              className={`${styles.heroSubText} text-white`}
            >
              Thank you, I will get back to you as soon as possible.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, 'contact')