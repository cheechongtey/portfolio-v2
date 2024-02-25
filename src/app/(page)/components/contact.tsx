import { motion, useAnimation, useInView } from 'framer-motion';
import React, { useEffect, useRef } from 'react';

import Button from '@/components/buttons/Button';

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

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const btnClick = () => {
    window.location.href = 'mailto:cheechongtey@gmail.com';
  };
  return (
    <motion.section
      id='contact'
      ref={ref}
      initial='hidden'
      animate={controls}
      variants={contentVariants}
      className='section max-w-[600px] mx-auto min-h-[600px] text-center'
    >
      <h3 className='section-title block text-base text-green font-normal before:font-normal before:text-sm before:bottom-auto mb-6'>
        What's Next?
      </h3>
      <p className='text-[clamp(40px,5vw,60px)] text-slate-50 leading-[1.1] font-semibold mb-2.5'>
        Get In Touch
      </p>
      <p className='text-xl text-slate'>
        Although I’m not currently looking for any new opportunities, my inbox
        is always open. Whether you have a question or just want to say hi, I’ll
        try my best to get back to you!
      </p>
      <Button size='sm' className='font-mono p-6 mt-6' onClick={btnClick}>
        Say Hello
      </Button>
    </motion.section>
  );
};

export default ContactSection;
