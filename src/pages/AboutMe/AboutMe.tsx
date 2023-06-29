import React from 'react';

import NavBar from '@components/NavBar';
import Footer from '@/components/Footer';
import AboutMeIntro from '@components/AboutMe';
import Experience from '@components/Experience';

import { experience } from '@/data/experience';
import getKey from '@/utilities/keyGenerator';

const AboutMe = () => {
  return (
    <>
      <NavBar />
      <AboutMeIntro />
      <div className='w-full flex justify-center my-20'>
        <div className='flow-root w-full max-w-7xl px-5 md:px-12'>
          <h1 className='font-bold font-montserrat text-3xl mb-10'>Experience</h1>
          <ul role='list' className='-mb-8'>
            {experience.map((event, eventIdx) => (
              <Experience key={getKey()} event={event} eventIdx={eventIdx} eventLength={experience.length - 1} />
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutMe;
