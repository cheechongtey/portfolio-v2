'use client';

import React from 'react';

import TextButton from '@/components/buttons/TextButton';

const Hamburger = ({
  expanded,
  onExpand,
}: {
  expanded: boolean;
  onExpand: () => void;
}) => {
  return (
    <TextButton
      onClick={onExpand}
      className='hamburger text-green block md:hidden z-20'
      aria-expanded={expanded}
    >
      <div className='inner-hamburger'></div>
    </TextButton>
  );
};

export default Hamburger;
