'use client';

import Head from 'next/head';
import * as React from 'react';

import PrimaryLink from '@/components/links/PrimaryLink';

import AboutSection from '@/app/(page)/components/about';
import ContactSection from '@/app/(page)/components/contact';
import ProjectSection from '@/app/(page)/components/projects';
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
  return (
    <main className='my-0 mx-auto w-full max-w-[1600px] px-6 sm:px-12 md:px-[100px] lg:px-[150px] [counter-reset:item]'>
      <Head>
        <title>Hi</title>
      </Head>
      <section className='flex flex-col justify-center h-full-dvh'>
        <h1 className='text-green font-mono mb-[30px] ml-1 [font-size:clamp(14px,5vw,16px)] leading-[1.1]'>
          Hi, my name is
        </h1>
        <h2 className='big-heading m-0 text-slate-50 leading-[1.1]'>
          Chee Chong.
        </h2>
        <h3 className='big-heading m-0 text-slate mt-2 leading-[0.9]'>
          I build things for the web.
        </h3>
        <p className='text-slate text-lg md:text-xl mt-5 max-w-[540px]'>
          I’m a software engineer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building accessible, student-centered products at{' '}
          <PrimaryLink
            href='https://unienrol.com'
            target='_blank'
            rel='noreferrer'
            className='text-green'
          >
            UniEnrol
          </PrimaryLink>
        </p>
      </section>
      <AboutSection />
      <WorkSection />
      <ProjectSection />
      <ContactSection />
    </main>
  );
}
