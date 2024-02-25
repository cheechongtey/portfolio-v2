'use client';

import { cva } from 'class-variance-authority';
import { cubicBezier, motion, useScroll } from 'framer-motion';
import { stagger, useAnimate } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';

import useOnClickOutside from '@/hooks/useOnClickOutside';

import Button from '@/components/buttons/Button';
import Hamburger from '@/components/Hamburger';

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

const variants = cva(
  'fixed inset-y-0 right-0 p-6 md:hidden h-[100dvh] bg-navy-light z-10 transition-custom-all w-[min(90vw,400px)] flex justify-center items-center',
  {
    variants: {
      show: {
        true: 'opacity-1 translate-x-0',
        false: 'translate-x-[500px] opacity-0',
      },
    },
  }
);

const navVariants = {
  /** this is the "visible" key and it's correlating styles **/
  visible: {
    opacity: 1,
    y: 0,
    boxShadow: '0 10px 30px -10px rgba(2,12,27,0.7)',
  },
  /** this is the "hidden" key and it's correlating styles **/
  hidden: { opacity: 0, y: -25 },
};

const Navigation = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const [scope, animate] = useAnimate();

  const [expanded, setExpanded] = useState<boolean>(false);
  const [hidden, setHidden] = useState<boolean>(false);

  useOnClickOutside(wrapperRef, () => setExpanded(false));

  useEffect(() => {
    if (scope.current) {
      animate(
        '.nav-item',
        { opacity: 1, y: 0 },
        {
          delay: stagger(0.1, { startDelay: 0.2 }),
          ease: cubicBezier(0.645, 0.045, 0.355, 1),
          duration: 0.25,
        }
      );
    }
  }, [animate, scope]);

  useEffect(() => {
    if (window && window !== undefined) {
      const main = document.querySelector('main');

      if (!main) {
        return;
      }

      if (expanded) {
        document.body.classList.add('overflow-hidden');
        main.classList.add('blur');
      } else {
        document.body.classList.remove('overflow-hidden');
        main.classList.remove('blur');
      }
    }
  }, [expanded]);

  useEffect(() => {
    const update = (current: number) => {
      const previous = scrollY.getPrevious() ?? 0;

      if (current < previous) {
        setHidden(false);
      } else if (current > 100 && current > previous) {
        setHidden(true);
      }
    };

    const unsubX = scrollY.on('change', update);

    return () => {
      unsubX();
    };
  }, [scrollY]);

  return (
    <motion.nav
      variants={navVariants}
      className='fixed inset-x-0 top-0 py-4 md:py-[29px] px-6 z-20 bg-navy'
      animate={hidden ? 'hidden' : 'visible'}
      /** I'm also going to add a custom easing curve and duration for the animation **/
      transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.3 }}
    >
      <div className='flex justify-between'>
        <motion.span
          className='text-green'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Logo className='w-[42px] h-[42px] stroke-2' />
        </motion.span>
        <div ref={scope} className='hidden md:flex gap-4'>
          <ol className='flex items-center text-slate-50 [counter-reset:item]'>
            {NAV_ITEM.map((x) => (
              <li
                key={x.id}
                className='opacity-0 nav-item mx-[5px] font-mono text-2xs leading-5 p-2.5 before:text-xs transition-custom-all hover:text-green before:content-["0"counter(item)"."] [counter-increment:item_1] before:mr-1 before:text-green'
              >
                {x.title}
              </li>
            ))}
          </ol>
          <Button size='sm' className='opacity-0 font-mono nav-item'>
            Resume
          </Button>
        </div>
        <section ref={wrapperRef} className='flex md:hidden'>
          <Hamburger
            expanded={expanded}
            onExpand={() => setExpanded(!expanded)}
          />
          <aside
            className={variants({
              show: expanded,
            })}
          >
            <nav className='flex flex-col gap-6 text-slate-50 text-center items-center w-full bg-navy-light'>
              <ol className='w-full font-mono'>
                {NAV_ITEM.map((x) => (
                  <li
                    key={x.id}
                    className='flex flex-col text-lg gap-2 hover:text-green cursor-pointer mb-6 before:content-["0"counter(item)"."] before:text-sm before:text-green transition-custom-all [counter-increment:item_1] font-mono'
                  >
                    {x.title}
                  </li>
                ))}
              </ol>
              <Button
                size='base'
                className='font-mono px-10 py-4 bg-navy-light'
              >
                Resume
              </Button>
            </nav>
          </aside>
        </section>
      </div>
    </motion.nav>
  );
};

export default Navigation;
