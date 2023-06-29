import React, { SVGProps } from 'react';

import getKey from '@/utilities/keyGenerator';
import Icon, { IconObject } from '@components/Icon';

export type Event = {
  jobTitle: string;
  location: string;
  blurb: string;
  points: string[];
  duration: string;
  icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  iconBackground: string;
  techStackIcons: IconObject[];
};

type Prop = {
  event: Event;
  eventIdx: number;
  eventLength: number;
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const Experience = ({ event, eventIdx, eventLength }: Prop) => {
  return (
    <li>
      <div className='relative pb-8'>
        {eventIdx !== eventLength ? (
          <span className='absolute top-4 hidden left-4 -ml-px h-full w-0.5 bg-gray-200 md:block' aria-hidden='true' />
        ) : null}
        <div className='relative flex space-x-3'>
          <div>
            <span
              className={classNames(
                event.iconBackground,
                'h-8 w-8 rounded-full hidden md:flex items-center justify-center ring-8 ring-white',
              )}
            >
              <event.icon className='h-5 w-5 text-white' aria-hidden='true' />
            </span>
          </div>
          <div className='flex min-w-0 flex-1 justify-between space-x-4'>
            <ul role='list' className='space-y-3 w-full'>
              <li className='overflow-hidden rounded-md bg-white px-6 py-4 shadow max-w-3xl'>
                <div>
                  <h1 className='font-medium font-montserrat text-xl'>
                    {event.jobTitle} <label className='text-darkBlue'>@{event.location}</label>
                  </h1>
                  <h1 className='font-bold font-montserrat text-mediumBlue text-xl'>{event.duration}</h1>
                  <p className='font-inter text-base'>{event.blurb}</p>
                  <ul className='list-disc pl-5 mt-4 md:mt-2'>
                    {event.points.map(point => (
                      <li key={getKey()} className='mb-2 md:mb-1'>
                        {point}
                      </li>
                    ))}
                  </ul>
                  <h1 className='font-montserrat font-semibold text-xl mb-1'>Tech Stack</h1>
                  <div className='flex space-x-4 mb-4'>
                    {event.techStackIcons.map(icon => (
                      <Icon key={getKey()} iconType={icon.iconType} />
                    ))}
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Experience;
