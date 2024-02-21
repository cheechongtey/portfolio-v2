import React from 'react';

const Email = () => {
  return (
    <div className='fixed right-4 bottom-4 md:flex flex-col after:content-[""] after:w-[1px] after:h-[80px] after:mt-4 hidden items-center after:bg-slate-light'>
      <a
        href='mailto:cheechongtey@gmail.com'
        className='font-mono text-xs hover:text-green leading-[18px] [writing-mode:vertical-rl] text-slate-light transition-custom-all'
      >
        cheechongtey@gmail.com
      </a>
    </div>
  );
};

export default Email;
