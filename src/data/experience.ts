import { PlusIcon } from '@heroicons/react/20/solid';
import { Event } from '@components/Experience';
import { IconType } from '@components/Icon';

export const experience: Event[] = [
  {
    jobTitle: 'Software Engineer',
    location: ' Johnson & Johnson',
    blurb: 'Johnson & Johnson is the world’s largest and most diversified healthcare products company, Specialising in MedTech, FMCG, Healtcare & Pharma',
    points: ['This is an ongoing internship, check back soon!'],
    duration: 'Aug 2023 - Current',
    icon: PlusIcon,
    iconBackground: 'bg-darkBlue',
    techStackIcons: [{ iconType: IconType.cpp }, { iconType: IconType.Python }],
  },
  {
    jobTitle: 'Robotics Engineer',
    location: ' Johnson & Johnson',
    blurb: 'Johnson & Johnson is the world’s largest and most diversified healthcare products company, Specialising in MedTech, FMCG, Healtcare & Pharma',
    points: [
      'Developed and implemented innovative robotics solutions, utilizing a strong foundation in robotics engineering principles to design and optimize robotic systems for various applications.',
      'Collaborated closely with cross-functional teams to gather requirements, conduct thorough analysis, and design complex algorithms that enabled precise and efficient robotic operations in diverse environments.',
      'Integrated state-of-the-art perception technologies, such as computer vision and sensor fusion, to enhance robot capabilities and achieve advanced object detection, recognition, and manipulation tasks.',
      'Led testing and validation efforts, conducting rigorous experiments and fine-tuning algorithms to ensure reliable and safe robotic performance, while continuously improving system efficiency and accuracy.',
      'Contributed to the advancement of the field by staying updated with the latest research and industry trends, attending conferences, and actively participating in knowledge sharing within the robotics community.',
    ],
    duration: 'May 2023 - Aug 2023',
    icon: PlusIcon,
    iconBackground: 'bg-darkBlue',
    techStackIcons: [{ iconType: IconType.cpp }, { iconType: IconType.Python }],
  },
  {
    jobTitle: 'Data Analytics Research Assistant',
    location: ' National University of Singapore',
    blurb: 'Singapore\'s flagship university',
    points: [
      'Developed efficient python scripts to automate data cleaning procedures, reducing processing time by 50% for datasets containing over 1 million entries',
      'utilised advanced statistical techniques to identify significant correlations and trends within large datasets, contributing to the creation of research reports',
      'conducted data mining using Excel and Pandas to extract valuable insights from large, complex datasets to support decision making and strategic planning',
    ],
    duration: 'Jan 2023 - April 2023',
    icon: PlusIcon,
    iconBackground: 'bg-darkBlue',
    techStackIcons: [
      { iconType: IconType.Python },
    ],

  },

];
