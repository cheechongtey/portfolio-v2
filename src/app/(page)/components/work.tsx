import React, { CSSProperties, useMemo, useState } from 'react';

import { cn } from '@/lib/utils';

const jobs = [
  {
    name: 'Uni Enrol',
    position: 'Senior Frontend Developer',
    duration: 'April 2022 - Current',
    task: [
      'Write modern, performant, maintainable code for a diverse array of client and internal projects',
      'test123',
    ],
  },
  {
    name: 'Avanade Malaysia',
    position: 'Frontend Developer',
    duration: 'June 2021 - March 2022',
    task: [
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    ],
  },
  {
    name: 'ISCity',
    position: 'Software Developer',
    duration: 'October 2017 - May 2021',
    task: [
      'when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      'It has survived not only five centuries, but also the',
    ],
  },
  {
    name: 'Bluevy',
    position: 'Intern',
    duration: 'June 2017 - August 2017',
    task: [
      'into electronic typesetting, remaining essentially unchanged. It was popularised in the',
      '1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    ],
  },
];

const WorkSection = () => {
  const [tabIndex, setTabIndex] = useState<number>(0);
  const selectedJob = useMemo(() => {
    return jobs[tabIndex];
  }, [tabIndex]);
  return (
    <section
      id='about'
      className='section max-w-[700px] mx-auto md:min-h-[500px] md:pt-24'
    >
      <h3 className='section-title'>Where I’ve Worked</h3>
      <div className='grid grid-cols-1 md:grid-cols-[1fr,3fr] gap-10'>
        <div
          role='tablist'
          aria-label='Job tabs'
          className='flex md:block relative max-md:overflow-y-scroll'
        >
          {jobs.map((x, key) => (
            <button
              key={key}
              id={`tab-${key}`}
              className={cn(
                'max-md:flex-[0_0_150px] max-md:border-b-2 md:border-l-2 md:text-left md:pl-5 text-2xs font-mono h-[42px] text-center border-solid border-navy-50 w-full hover:bg-navy-light hover:text-green transition-custom-all focus:bg-navy-light',
                {
                  'text-green': tabIndex === key,
                }
              )}
              onClick={() => setTabIndex(key)}
              tabIndex={key === tabIndex ? 0 : -1}
            >
              <span>{x.name}</span>
            </button>
          ))}
          <div
            className={cn(
              'absolute h-0.5 w-[150px] md:w-0.5 md:h-[42px] bg-green max-md:bottom-0 md:left-0 transition-custom-all',
              [`md:top-[var(--offset)] max-md:left-[var(--mobile-offset)]`]
            )}
            style={
              {
                '--offset': `${tabIndex * 42}px`,
                '--mobile-offset': `${tabIndex * 150}px`,
              } as CSSProperties
            }
          ></div>
        </div>
        <div className='flex-1 font-calibre'>
          <h4 className='text-xl font-medium text-slate-50 mb-0.5'>
            {selectedJob.position}
          </h4>
          <p className='font-mono text-2xs mb-6'>{selectedJob.duration}</p>
          <ul className='text-lg font-primary [&>*:not(:last-child)]:mb-2.5'>
            {selectedJob.task.map((x) => {
              return (
                <li
                  key={x}
                  className='relative before:content-["▹"] before:text-green before:absolute before:left-0 pl-5 not'
                >
                  {x}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
