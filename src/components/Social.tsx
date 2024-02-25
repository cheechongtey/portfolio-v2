'use client';

import { cva, VariantProps } from 'class-variance-authority';
import { motion } from 'framer-motion';
import React, { useRef } from 'react';

import { cn } from '@/lib/utils';

import IconGitHub from '@/components/icons/github';
import IconLinkedin from '@/components/icons/linkedin';

const variants = cva('flex justify-center gap-4', {
  variants: {
    orientation: {
      portrait: 'flex-col',
      landscape: 'flex-row',
    },
  },
});

const contentVariants = {
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 1.5,
    },
  },
  hidden: { opacity: 0 },
};

const SocialButtonGroups = ({
  orientation,
  className,
}: VariantProps<typeof variants> & { className?: string }) => {
  const ref = useRef(null);

  return (
    <motion.ul
      ref={ref}
      initial='hidden'
      animate='visible'
      variants={contentVariants}
      className={cn(variants({ orientation }), className)}
    >
      <a
        href='https://github.com/cheechongtey'
        target='_blank'
        className='hover:text-green text-slate-light w-[22px] h-[22px] m-2 transition-custom-all hover:-translate-y-0.5'
      >
        <IconGitHub />
      </a>
      <a
        href='https://www.linkedin.com/in/chee-chong-8bb538204/'
        target='_blank'
        className='hover:text-green text-slate-light w-[22px] h-[22px] m-2 transition-custom-all hover:-translate-y-0.5'
      >
        <IconLinkedin />
      </a>
    </motion.ul>
  );
};

export default SocialButtonGroups;
