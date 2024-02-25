import React from 'react';

const Footer = () => {
  return (
    <div className='p-4 text-center'>
      <a
        href='https://brittanychiang.com'
        className='text-xs transition-custom-all font-mono hover:text-green'
        rel='noopener noreferrer'
        target='_blank'
      >
        Designed by Brittany Chiang.
      </a>
      <div className='text-xs font-mono'>
        Cloning this design with NextJS and TailwindCSS.
      </div>
    </div>
  );
};

export default Footer;
