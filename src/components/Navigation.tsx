import React from 'react';

import Button from '@/components/buttons/Button';

import Logo from '~/svg/Logo.svg';

const NAV_ITEM = [
  {
    title: 'About',
    id: '#about',
  },
  {
    title: 'Experience',
    id: '#experience',
  },
  {
    title: 'Work',
    id: '#work',
  },
  {
    title: 'Contact',
    id: '#contact',
  },
];

const Navigation = () => {
  return (
    <nav className='fixed inset-x-0 top-0 py-[29px] px-6'>
      <div className='flex justify-between'>
        <span className='text-green'>
          <Logo className='w-[42px] h-[42px] stroke-2' />
        </span>
        <div className='hidden md:flex gap-4'>
          <ol className='flex items-center text-slate-50 [counter-reset:item]'>
            {NAV_ITEM.map((x) => (
              <li
                key={x.id}
                className='mx-[5px] font-mono text-2xs leading-5 p-2.5 before:text-xs transition-custom-all hover:text-green before:content-["0"counter(item)"."] [counter-increment:item_1] before:mr-1 before:text-green'
              >
                {x.title}
              </li>
            ))}
          </ol>
          <Button size='sm' className='font-mono'>
            Resume
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
