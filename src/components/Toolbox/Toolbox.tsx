import React from 'react';

import { ExpTech, ExpLanguage, FamTech, FamLanguage } from '@/data/toolbox';
import Icon, { IconObject } from '@components/Icon';
import getKey from '@/utilities/keyGenerator';

const TechStackIcons = (icons: IconObject[][]) => {
  return icons.map(iconArr => {
    return (
      <div key={getKey()} className='flex space-x-4 mb-8'>
        {iconArr.map(icon => (
          <Icon iconType={icon.iconType} key={getKey()} />
        ))}
      </div>
    );
  });
};

const Toolbox = () => {
  return (
    <div className='overflow-hidden bg-white shadow-lg rounded-lg w-full'>
      <div className='px-4 py-5 sm:px-6'>
        <h3 className='font-montserrat text-xl font-bold leading-6 text-gray-900'>My Toolbox</h3>
        <p className='font-inter mt-1 max-w-2xl text-sm text-gray-500'>Languages, Technologies and Frameworks</p>
      </div>
      <div className='border-t border-gray-200 px-4 py-5 sm:px-6 font-inter'>
        <dl className='grid grid-cols-1 gap-x-4 gap-y-1 sm:grid-cols-2'>
          <div className='sm:col-span-2'>
            <dt className='text-lg font-montserrat font-bold text-gray-900'>Languages</dt>
          </div>
          <div className='sm:col-span-1 mb-1'>
            <dt className='text-sm font-medium text-gray-500'>Experienced</dt>
            <dd className='mt-1 text-sm text-gray-900'>{TechStackIcons(ExpLanguage)}</dd>
          </div>
          <div className='sm:col-span-1 mb-1'>
            <dt className='text-sm font-medium text-gray-500'>Familar</dt>
            <dd className='mt-1 text-sm text-gray-900'>{TechStackIcons(FamLanguage)}</dd>
          </div>
          <div className='sm:col-span-2'>
            <dt className='text-lg font-montserrat font-bold text-gray-900'>Technologies</dt>
          </div>
          <div className='sm:col-span-1 mb-1'>
            <dt className='text-sm font-medium text-gray-500'>Experienced</dt>
            <dd className='mt-1 text-sm text-gray-900'>{TechStackIcons(ExpTech)}</dd>
          </div>
          <div className='sm:col-span-1 mb-1'>
            <dt className='text-sm font-medium text-gray-500'>Familar</dt>
            <dd className='mt-1 text-sm text-gray-900'>{TechStackIcons(FamTech)}</dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default Toolbox;
