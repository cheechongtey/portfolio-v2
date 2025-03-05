'use client';

import { motion } from 'framer-motion';
import * as React from 'react';

import PrimaryLink from '@/components/links/PrimaryLink';
import Loader from '@/components/Loader';

import AboutSection from '@/app/(page)/components/about';
import ContactSection from '@/app/(page)/components/contact';
import ExperienceSection from '@/app/(page)/components/experience';
import WorkSection from '@/app/(page)/components/work';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  const [isMounted, setIsMounted] = React.useState<boolean>(true);

  const finishLoading = () => {
    setIsMounted(true);
  };

  return (
    <main className='my-0 mx-auto w-full max-w-[1600px] px-6 sm:px-12 md:px-[100px] lg:px-[150px] [counter-reset:item]'>
      {!isMounted ? (
        <Loader finishLoading={finishLoading} />
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <section className='flex flex-col justify-center h-full-dvh'>
            <motion.h1
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                opacity: { duration: 0.5, delay: 0.6 },
                y: { duration: 0.5, delay: 0.6 },
              }}
              className='text-green font-mono mb-[30px] ml-1 [font-size:clamp(14px,5vw,16px)] leading-[1.1]'
            >
              Hi, my name is
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                opacity: { duration: 0.5, delay: 0.7 },
                y: { duration: 0.5, delay: 0.7 },
              }}
              className='big-heading m-0 text-slate-50 leading-[1.1]'
            >
              Chee Chong.
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                opacity: { duration: 0.5, delay: 0.8 },
                y: { duration: 0.5, delay: 0.8 },
              }}
              className='big-heading m-0 text-slate mt-2 leading-[0.9]'
            >
              I build things for the web.
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                opacity: { duration: 0.5, delay: 0.9 },
                y: { duration: 0.5, delay: 0.9 },
              }}
              className='text-slate text-lg md:text-xl mt-5 max-w-[540px]'
            >
              I'm a software engineer specializing in building exceptional
              digital experiences. Currently, I’m focused on developing
              high-performance, user-centric solutions at{' '}
              <PrimaryLink
                href='https://unienrol.com'
                target='_blank'
                rel='noreferrer'
                className='text-green'
              >
                Sgcarmart
              </PrimaryLink>
              , enhancing the automotive marketplace with cutting-edge
              technology.
            </motion.p>
          </section>
          <AboutSection />
          <ExperienceSection />
          <WorkSection />
          <ContactSection />
        </motion.div>
      )}
    </main>
  );
}
