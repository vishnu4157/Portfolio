import React from 'react';

import { ArrowTopRightOnSquareIcon } from '@heroicons/react/20/solid';

export type LinkObject = {
  title: string;
  link: string;
};

const openLink = (link: string) => {
  window.open(link, '_blank');
};

const OtherLink = ({ title, link }: LinkObject) => {
  return (
    <li onClick={() => openLink(link)} className='flex items-center justify-between py-3 pl-3 pr-4 text-sm cursor-pointer'>
      <div className='flex w-0 flex-1 items-center'>
        <ArrowTopRightOnSquareIcon className='h-5 w-5 flex-shrink-0 text-gray-400' aria-hidden='true' />
        <span className='ml-2 w-0 flex-1 truncate'>{title}</span>
      </div>
      <div className='ml-4 flex-shrink-0'>
        <a href='#' className='font-medium text-darkBlue hover:text-mediumBlue'>
          Visit
        </a>
      </div>
    </li>
  );
};

export default OtherLink;
