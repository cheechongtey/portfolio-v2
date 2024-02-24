'use client';
import anime from 'animejs';
import React from 'react';

import LoaderIcon from '@/components/icons/loader';

const Loader = ({ finishLoading }: { finishLoading: () => void }) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const animate = () => {
    const loader = anime.timeline({
      complete: () => finishLoading(),
    });

    loader
      .add({
        targets: '.loader',
        duration: 300,
        easing: 'easeInOutQuart',
        opacity: 1,
      })
      .add({
        targets: '#logo path',
        delay: 300,
        duration: 1500,
        easing: 'easeInOutQuart',
        strokeDashoffset: [anime.setDashoffset, 0],
      })
      .add({
        targets: '#logo #B',
        duration: 700,
        easing: 'easeInOutQuart',
        opacity: 1,
      })
      .add({
        targets: '#logo',
        delay: 500,
        duration: 300,
        easing: 'easeInOutQuart',
        opacity: 0,
        scale: 0.1,
      })
      .add({
        targets: '.loader',
        duration: 200,
        easing: 'easeInOutQuart',
        opacity: 0,
        zIndex: -1,
      });
  };

  React.useEffect(() => {
    animate();
  }, [animate]);

  return (
    <div className='fixed inset-0 bg-navy-dark z-30'>
      <div className='flex justify-center items-center h-full loader opacity-0'>
        <span className='w-24 h-24 text-green'>
          <LoaderIcon />
        </span>
      </div>
    </div>
  );
};

export default Loader;
