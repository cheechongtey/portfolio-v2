'use client';

import { motion } from 'framer-motion';
import React from 'react';

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

const Email = () => {
  return (
    <motion.div
      initial='hidden'
      animate='visible'
      variants={contentVariants}
      className='fixed right-4 bottom-4 md:flex flex-col after:content-[""] after:w-[1px] after:h-[80px] after:mt-4 hidden items-center after:bg-slate-light'
    >
      <a
        href='mailto:cheechongtey@gmail.com'
        className='font-mono text-xs hover:text-green leading-[18px] [writing-mode:vertical-rl] text-slate-light transition-custom-all'
      >
        cheechongtey@gmail.com
      </a>
    </motion.div>
  );
};

export default Email;
