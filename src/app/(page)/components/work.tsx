import { useAnimation, useInView } from 'framer-motion';
import { motion } from 'framer-motion';
import React, { useEffect, useRef } from 'react';

import IconExternal from '@/components/icons/external';
import IconFolder from '@/components/icons/folder';
import IconGitHub from '@/components/icons/github';

const projects = [
  {
    name: 'Online University Enrolment Platform',
    desc: 'UniEnrol is Malaysia’s largest online university enrolment platform and provides service to discover scholarships.',
    stack: [
      'PHP',
      'VueJS',
      'Less',
      'Postgres',
      'MongoDB',
      'Laravel',
      'Bootstrap',
    ],
    link: 'https://unienrol.com',
  },
  {
    name: 'Online learning platform',
    desc: 'EduKaji is an online learning platform that aims to empower students to achieve their goals through learning.',
    stack: ['NuxtJS', 'VueJS', 'FastAPI', 'Postgres'],
    link: 'https://edukaji.my',
  },
  {
    name: 'One-stop Education Centre',
    desc: 'MMS is the education placement specialist to o guiding and connecting students to educational institutions worldwide.',
    stack: ['NextJS', 'Tailwind CSS', 'Koa', 'Strapi'],
    link: 'https://mmsstudyabroad.com',
  },
  {
    name: 'Online educational platform',
    desc: 'Uni Enrol Articles offering insightful articles and resources to aid in academic success and personal development.',
    stack: ['WordPress', 'PHP'],
    link: 'https://articles.unienrol.com',
  },
  {
    name: 'V-MORE',
    desc: 'Singapore based e-commerce platform and marketplace',
    link: 'https://sg.vmoreasia.com',
    stack: ['Laravel', 'MySQL', 'PHP', 'Bootstrap'],
  },
  // {
  //   name: 'Constant Pharmacy Online Store',
  //   desc: 'Malaysia based pharmacy online store',
  //   link: null,
  //   stack: ['Laravel', 'MySQL', 'PHP'],
  // },
  {
    name: 'Unifi Rewards',
    desc: 'unifi Rewards is a one-stop self service portal for unifi customers to manage their earned rewards.',
    stack: [
      'PHP',
      'JQuery',
      'SASS',
      'MYSQL',
      'Laravel',
      'Bootstrap',
      'Pimcore',
    ],
    link: 'https://unifi.com.my/rewards',
  },
  {
    name: 'iottechnex (Admin Portal)',
    desc: `Iottechnex provides digital solutions that tailored to the customer's needs and requirements.`,
    stack: ['PHP', 'ReactJS', 'SASS', 'MYSQL', 'Laravel', 'Bootstrap'],
    link: 'https://iottechnex.com/',
  },
  {
    name: 'Side Project I',
    desc: 'Cloning existing website for learning purpose.',
    stack: ['HTML', 'CSS', 'JQuery'],
    link: 'https://blue-plant-057b70100.azurestaticapps.net/',
    github: 'https://github.com/cheechongtey/LWClone',
  },
  {
    name: 'Side Project II',
    desc: 'Cloning existing website that with trending web design feels like static and animations.',
    stack: ['HTML', 'CSS', 'JQuery'],
    link: 'https://proud-smoke-04bb04e10.azurestaticapps.net/',
    github: 'https://github.com/cheechongtey/virtually-clone',
  },
  {
    name: 'Portfolio V2',
    desc: 'Cloning brittanychiang fantastic portfolio and build it with NextJS with Tailwind',
    stack: ['NextJS', 'Tailwind CSS'],
    link: 'https://brittanychiang.com/',
    github: 'https://github.com/cheechongtey/portfolio-v2',
  },
  {
    name: 'Instragram Clone',
    desc: 'Clone instagram for learning purpose.',
    stack: ['React', 'Express', 'Graphql', 'MongoDB'],
    github: 'https://github.com/cheechongtey/instagram-clone-for-training',
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

const WorkSection = () => {
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
      variants={contentVariants}
      id='work'
      className='section max-w-[900px] mx-auto'
    >
      <h3 className='section-title'>Some Things I’ve Built</h3>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 transition-custom-all'>
        {projects.map((x, key) => (
          <div
            key={key}
            className='p-6 min-h-[320px] relative rounded-[4px] bg-navy-light group cursor-pointer flex flex-col gap-5 justify-between transition-custom-all hover:-translate-y-1.5'
            onClick={() => window.open(x.link, '_blank')}
          >
            <div>
              <div className='flex items-center justify-between mb-10'>
                <span className='text-green w-10 h-10'>
                  <IconFolder />
                </span>
                <div className='flex items-center gap-2'>
                  {x.github && (
                    <a
                      href={x.github}
                      className='w-[22px] h-[22px] p-0.5 text-slate-light hover:text-green transition-custom-all relative -bottom-[1px]'
                      target='_blank'
                    >
                      <IconGitHub />
                    </a>
                  )}
                  {x.link && (
                    <a
                      href={x.link}
                      className='w-[22px] h-[22px] text-slate-light hover:text-green transition-custom-all'
                      target='_blank'
                    >
                      <IconExternal />
                    </a>
                  )}
                </div>
              </div>
              <p className='text-[22px] text-slate-50 mb-2.5 font-semibold leading-[1.1] group-hover:text-green transition-custom-all'>
                {x.name}
              </p>
              <p className='text-slate-light text-[17px] leading-[1.3] mb-0'>
                {x.desc}
              </p>
            </div>

            <div className='flex flex-wrap gap-y-1 gap-x-4'>
              {x.stack.map((stack, index) => (
                <span
                  key={`${stack}_${index}`}
                  className='font-mono leading-relaxed text-xs'
                >
                  {stack}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default WorkSection;
