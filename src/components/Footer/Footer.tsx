import React from 'react';

import ContactMe from '@components/ContactMe';

const Footer = () => {
  return (
    <div className='h-64 mt-8 flex justify-center'>
      <div className='h-full w-full max-w-7xl rounded-t-md bg-lightBlue flex flex-col items-center justify-center'>
        <h1 className='text-xl md:text-2xl font-montserrat font-bold'>Thanks for getting to know more about me!</h1>
        <h1 className='text-xl md:text-2xl font-montserrat font-bold text-darkBlue'>Let&apos;s Connect!</h1>
        <ContactMe className='my-2.5' />
        <div className='mt-4 w-3/5 border-gray-300 border-t-2' />
      </div>
    </div>
  );
};

export default Footer;
