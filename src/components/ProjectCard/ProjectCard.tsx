import React from 'react';

import Icon, { IconObject } from '@components/Icon';
import OtherLink, { LinkObject } from '@components/ProjectCard/OtherLink';
import getKey from '@/utilities/keyGenerator';

const NewlineText = (text: string) => {
  const newText = text.split('\n').map(str => (
    <p className='mb-3' key={getKey()}>
      {str}
    </p>
  ));
  return newText;
};

export type Project = {
  img?: string;
  title: string;
  duration: string;
  description: string;
  techStack: IconObject[][];
  links: IconObject[];
  others?: LinkObject[];
  shields?: string[];
};

const ProjectCard = (props: Project) => {
  return (
    <div className='overflow-hidden bg-white my-5 w-full flex justify-center'>
      <div className='max-w-3xl border rounded-lg shadow-lg'>
        {/* Header */}
        <div className='px-4 py-5 sm:px-6'>
          <div className='flex justify-center px-5 pb-2'>
            <img src={props.img} className='md:w-[500px] object-contain' />
          </div>

          <h3 className='text-2xl font-bold leading-6 text-gray-900 font-montserrat'>{props.title}</h3>
          <p className='mt-1 max-w-2xl text-sm text-gray-500 font-inter'>{props.duration}</p>

          <div className='flex w-full space-x-2 pt-2 flex-wrap'>
            {props.shields && props.shields.map(shield => <img key={getKey()} src={shield} />)}
          </div>
        </div>

        {/* Body */}
        <div className='border-t border-gray-200 px-4 py-5 sm:px-6 font-inter'>
          <dl className='grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2'>
            {/* Description */}
            <div className='sm:col-span-2'>
              <dt className='text-sm font-medium text-gray-500'>Description</dt>
              <dd className='mt-1 text-sm text-gray-900'>{NewlineText(props.description)}</dd>
            </div>

            {/* Tech Stack */}
            <div className='sm:col-span-1'>
              <dt className='text-sm font-medium text-gray-500'>Tech Stack</dt>
              {props.techStack.map(techStackArr => {
                return (
                  <dd key={getKey()} className='mt-1 flex space-x-3 mb-5'>
                    {techStackArr.map(icon => (
                      <Icon className='mb-2' iconType={icon.iconType} key={getKey()} />
                    ))}
                  </dd>
                );
              })}
            </div>

            {/* Links */}
            <div className={`sm:col-span-1 ${!props.others && 'mb-3'}`}>
              <dt className='text-sm font-medium text-gray-500'>Links</dt>
              <dd className='mt-1 flex space-x-3'>
                {props.links.map(icon => (
                  <Icon iconType={icon.iconType} link={icon.link} key={getKey()} />
                ))}
              </dd>
            </div>

            {/* Others */}
            {props.others && (
              <div className='sm:col-span-2'>
                <dt className='text-sm font-medium text-gray-500'>Other</dt>
                <dd className='mt-1 text-sm text-gray-900'>
                  <ul role='list' className='divide-y divide-gray-200 rounded-md border border-gray-200'>
                    {props.others.map(link => (
                      <OtherLink title={link.title} link={link.link} key={getKey()} />
                    ))}
                  </ul>
                </dd>
              </div>
            )}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
