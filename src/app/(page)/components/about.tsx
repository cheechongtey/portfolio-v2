import { motion } from 'framer-motion';
import { useAnimation, useInView } from 'framer-motion';
import React, { useEffect, useRef } from 'react';

import NextImage from '@/components/NextImage';

const skills = [
  'JavaScript (ES6+)',
  'Typescript',
  'React',
  'Vue',
  'Node.js',
  'NuxtJS',
  'NextJS',
];

const contentVariants = (delay: number) => {
  return {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        opacity: { duration: 0.5, delay },
        y: { duration: 0.5, delay },
      },
    },
    hidden: { opacity: 0, y: 100 },
  };
};

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);
  return (
    <motion.section
      ref={ref}
      initial='hidden'
      animate={controls}
      variants={contentVariants(0)}
      id='about'
      className='section max-w-[900px] mx-auto'
    >
      <motion.h3 className='section-title'>About Me</motion.h3>
      <motion.div className='grid grid-cols-1 md:grid-cols-[3fr,2fr] gap-12'>
        <div>
          <p>
            Hello! My name is Chee Chong and I enjoy creating things that live
            on the internet. My interest in web development started back in 2017
            when i found the excitement of crafting or building things with
            HTML, CSS and Javacript!
          </p>
          <p>
            Fast-forward to today, and I’ve had the privilege of working at an
            software provider start-up, a huge corporation, and now - a student
            enrolment platform where my main focus these days is building
            accessible, inclusive products and digital experiences to provide
            valuable information for student about higher level education.
          </p>
          <p>Here are a few technologies I’ve been working with recently:</p>
          <ul className='grid grid-cols-2 text-2xs font-mono gap-2'>
            {skills.map((x) => {
              return (
                <li
                  key={x}
                  className='relative before:content-["▹"] before:text-green before:absolute before:left-0 pl-5'
                >
                  {x}
                </li>
              );
            })}
          </ul>
        </div>
        <div className='max-w-[250px] md:max-w-[300px]'>
          <div className='relative shadow-profile w-full bg-green h-[250px] md:h-[300px] rounded-[4px]'>
            <div className='profile-pic'>
              <div className='wrapper'>
                <NextImage
                  useSkeleton
                  src='/images/cc-profile-pic.avif'
                  alt="Chee Chong's Portfolio"
                  fill={true}
                  classNames={{
                    image: 'object-cover',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default AboutSection;
