import React, { SVGProps, useState } from 'react';

import NavBar from '@components/NavBar';
import Introduction from '@components/Introduction';
import ProjectCard from '@components/ProjectCard';
import Footer from '@components/Footer';
import DividerWithButton from '@components/DividerWithButton';

import getKey from '@/utilities/keyGenerator';
import { allProjects, otherProjects } from '@/data/projectCards';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/20/solid';

const Home = () => {
  const [viewMoreIcon, setViewMoreIcon] = useState<(props: SVGProps<SVGSVGElement>) => JSX.Element>(() => EyeIcon);
  const [isViewAll, setIsViewAll] = useState<boolean>(false);
  const [viewAllText, setViewAllText] = useState<string>('View More');

  const handleViewAll = () => {
    setViewMoreIcon(isViewAll ? () => EyeIcon : () => EyeSlashIcon);
    setViewAllText(isViewAll ? 'View More' : 'Hide');
    setIsViewAll(!isViewAll);
  };
  return (
    <>
      {/* HEADER */}
      <NavBar />
      <div className='w-full h-full'>
        <Introduction />

        {/* All Projects */}
        <div className='w-full flex justify-center'>
          <div className='relative w-full max-w-7xl h-full grid grid-cols-1 px-5 md:px-12'>
            <div className='flex justify-center'>
              <h1 className='font-montserrat font-bold text-mediumBlue text-3xl tracking-wide'>PROJECTS</h1>
            </div>
            {allProjects.map(proj => (
              <ProjectCard
                key={getKey()}
                title={proj.title}
                img={proj.img}
                duration={proj.duration}
                description={proj.description}
                techStack={proj.techStack}
                links={proj.links}
                others={proj.others}
                shields={proj.shields}
              />
            ))}

            <DividerWithButton icon={viewMoreIcon} title={viewAllText} onClick={handleViewAll} />

            {isViewAll &&
              otherProjects.map(proj => (
                <ProjectCard
                  key={getKey()}
                  title={proj.title}
                  img={proj.img}
                  duration={proj.duration}
                  description={proj.description}
                  techStack={proj.techStack}
                  links={proj.links}
                  others={proj.others}
                  shields={proj.shields}
                />
              ))}
          </div>
        </div>
      </div>
      {/* FOOTER */}
      <Footer />
    </>
  );
};

export default Home;
