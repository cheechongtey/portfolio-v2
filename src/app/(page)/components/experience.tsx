import { motion } from 'framer-motion';
import { useAnimation, useInView } from 'framer-motion';
import React, {
  CSSProperties,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import { cn } from '@/lib/utils';

const jobs = [
  {
    name: 'Uni Enrol',
    position: 'Senior Frontend Developer',
    duration: 'April 2022 - Current',
    task: [
      "Write modern, performant, maintainable code for company's website and internal projects.",
      'Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, NextJS, React, WordPress and Strapi.',
      'Proposed and built chrome extension for internal counsellor for the purpose of reducing repeatitive task.',
    ],
  },
  {
    name: 'Avanade Malaysia',
    position: 'Frontend Developer',
    duration: 'June 2021 - March 2022',
    task: [
      'Collaborated with Business Analyse and Data Scientist to develop a MVC of decarbonisation solutions for oil and gas industry.',
      'Collaborated with multiple Business Analyse, engineer and data scientist to develop a forecast system for oil and gas industy.',
      'Involved in bug fixes and enhancement for Unifi Rewards System.',
    ],
  },
  {
    name: 'ISCity',
    position: 'Software Developer',
    duration: 'October 2017 - May 2021',
    task: [
      'Developed and shipped high volume ecommerce for the client with laravel',
      'Proposed and revamp the existing system into React with Laravel.',
      'Collaborated with mobile team to build api for the ecommerce mobile apps',
    ],
  },
  {
    name: 'Bluevy',
    position: 'Intern',
    duration: 'June 2017 - August 2017',
    task: [
      'Migrating existing system into wordpress.',
      'Exploring plugins to implement into the system for providing more features to the user.',
    ],
  },
];

const contentVariants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      opacity: { duration: 0.5, delay: 0.3 },
      y: { duration: 0.5 },
    },
  },
  hidden: { opacity: 0, y: 100 },
};

const ExperienceSection = () => {
  const [tabIndex, setTabIndex] = useState<number>(0);
  const selectedJob = useMemo(() => {
    return jobs[tabIndex];
  }, [tabIndex]);
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
      id='experience'
      ref={ref}
      initial='hidden'
      animate={controls}
      variants={contentVariants}
      className='section max-w-[700px] mx-auto md:min-h-[500px] md:pt-24'
    >
      <h3 className='section-title'>Where I’ve Worked</h3>
      <div className='grid grid-cols-1 md:grid-cols-[1fr,3fr] gap-10'>
        <div
          role='tablist'
          aria-label='Job tabs'
          className='flex md:block relative max-md:overflow-y-scroll'
        >
          {jobs.map((x, key) => (
            <button
              key={key}
              id={`tab-${key}`}
              className={cn(
                'max-md:flex-[0_0_150px] max-md:border-b-2 md:border-l-2 md:text-left md:pl-5 text-2xs font-mono h-[42px] text-center border-solid border-navy-50 w-full hover:bg-navy-light hover:text-green transition-custom-all focus:bg-navy-light',
                {
                  'text-green': tabIndex === key,
                }
              )}
              onClick={() => setTabIndex(key)}
              tabIndex={key === tabIndex ? 0 : -1}
            >
              <span>{x.name}</span>
            </button>
          ))}
          <div
            className={cn(
              'absolute h-0.5 w-[150px] md:w-0.5 md:h-[42px] bg-green max-md:bottom-0 md:left-0 transition-custom-all',
              [`md:top-[var(--offset)] max-md:left-[var(--mobile-offset)]`]
            )}
            style={
              {
                '--offset': `${tabIndex * 42}px`,
                '--mobile-offset': `${tabIndex * 150}px`,
              } as CSSProperties
            }
          ></div>
        </div>
        <div className='flex-1 font-calibre'>
          <h4 className='text-xl font-medium text-slate-50 mb-0.5'>
            {selectedJob.position}
          </h4>
          <p className='font-mono text-2xs mb-6'>{selectedJob.duration}</p>
          <ul className='text-lg font-primary [&>*:not(:last-child)]:mb-2.5'>
            {selectedJob.task.map((x) => {
              return (
                <li
                  key={x}
                  className='relative before:content-["▹"] before:text-green before:absolute before:left-0 pl-5 not'
                >
                  {x}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </motion.section>
  );
};

export default ExperienceSection;
