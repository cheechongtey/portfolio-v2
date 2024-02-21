import { cva, VariantProps } from 'class-variance-authority';
import React from 'react';

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

const SocialButtonGroups = ({
  orientation,
  className,
}: VariantProps<typeof variants> & { className?: string }) => {
  return (
    <ul className={cn(variants({ orientation }), className)}>
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
    </ul>
  );
};

export default SocialButtonGroups;
