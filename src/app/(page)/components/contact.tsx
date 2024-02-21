import React from 'react';

import Button from '@/components/buttons/Button';

const ContactSection = () => {
  const btnClick = () => {
    window.location.href = 'mailto:cheechongtey@gmail.com';
  };
  return (
    <section
      id='contact'
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
    </section>
  );
};

export default ContactSection;
