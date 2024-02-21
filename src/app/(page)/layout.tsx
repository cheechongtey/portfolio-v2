import React from 'react';

import Email from '@/components/Email';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
import SocialButtonGroups from '@/components/Social';

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='relative'>
      <Navigation />
      {children}
      <SocialButtonGroups
        orientation='portrait'
        className='hidden md:flex fixed items-center left-4 bottom-4 gap-2 after:content-[""] after:w-[1px] after:bg-slate-light after:h-[160px] after:mt-4'
      />
      <SocialButtonGroups className='md:hidden ' />
      <Email />
      <Footer />
    </div>
  );
};

export default layout;
