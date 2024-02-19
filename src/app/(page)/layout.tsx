import React from 'react';

import Navigation from '@/components/Navigation';

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navigation />
      {children}
    </>
  );
};

export default layout;
