import { IconType } from '@components/Icon';
import { Project } from '@components/ProjectCard';

import dulwichBookingImg from '@/assets/images/dulwich-bookings.png';
import recyclopsImg from '@/assets/images/recyclops.png';
import issueTracker from '@/assets/images/issue-tracker.png';
import hireHer from '@/assets/images/HireHer.png';
import ecoQuestImg from '@/assets/images/EcoQuestImg.png';

export const allProjects: Project[] = [
  {
    title: 'Personali-FLY (Front-End Developer)',
    img: ecoQuestImg,
    duration: 'May 2022 - Aug 2022',
    description:
      'The Singapore Airlines (SIA) App Challenge is an annual global hackathon to find innovative solutions to real-life industry challenges.\n' +
      'The project used TensorFlow Recommenders A.I., which considers user profiles and preferences to recommend activities, accommodations and other ancillary services to users post flight booking.\n' +
      'Our solution was served directly to the users with a friendly Progressive Web Application (PWA).',
    techStack: [
      [
        { iconType: IconType.React },
        { iconType: IconType.TypeScript },
        { iconType: IconType.Tailwind },
        { iconType: IconType.Python },
        { iconType: IconType.TensorFlow },
      ],
    ],
    links: [
      { iconType: IconType.Github, link: 'https://github.com/sus-tainability' },
      { iconType: IconType.Figma, link: 'https://www.figma.com/file/RElz1keXSeEx1dNBfV8eJv/SUS-App?node-id=1-4&t=ok8L4wSiVUBHcHc6-0' },
      { iconType: IconType.Youtube, link: 'https://www.youtube.com/watch?v=a2bNogfSkVE' },
      { iconType: IconType.OpenNew, link: 'https://sus-tainability.netlify.app/story' },
    ],
    others: [{ title: "About SIA's App Challenge 2022", link: 'https://appchallenge.singaporeair.com/en/challenges/students-2022' }],
    shields: [
      'https://img.shields.io/badge/-International%20%F0%9F%8C%8E-informational',
      'https://img.shields.io/badge/-Finalist%20%F0%9F%8F%86-yellow',
      'https://img.shields.io/badge/-Top%2010%20%F0%9F%8F%85-success',
    ],
  },
  {
    title: 'Code Campus (Full-Stack Developer)',
    img: recyclopsImg,
    duration: 'JUL 2022',
    description:
      'Developed a full stack web forum for Computing students\n' +
      'Self taught React and Ruby on Rails in 2 weeks to build a web interface with CRUD functionalities along with Login Authentication using JWT and Bcrpyt gem',

    techStack: [
      [
        { iconType: IconType.React },
        { iconType: IconType.TypeScript },
        { iconType: IconType.Ruby },
        { iconType: IconType.Rails },
        { iconType: IconType.PostgreSql },
      ],
    ],
    links: [
      { iconType: IconType.Github, link: 'https://github.com/Recyclops-LifeHack-2022-Singapore' },
      { iconType: IconType.Youtube, link: 'https://www.youtube.com/watch?v=pyXI4r7pX9s' },
    ],
    shields: ['https://img.shields.io/badge/-Self%20initiated%20%F0%9F%8F%86-red'],
  },
  {
    title: 'Alex (Robotics Engineer)',
    img: dulwichBookingImg,
    duration: 'Jan 2022 - Apr 2022',
    description:
      'Alex mimics the functionality of a Search and Rescue robot— which includes remote operation, environment mapping, and navigation',
    techStack: [[{ iconType: IconType.cpp }]],
    links: [{ iconType: IconType.Github, link: 'https://github.com/Dulwich-Bookings' }],
    shields: ['https://img.shields.io/badge/-Team%20Lead-informational'],
  },
  {
    title: 'Tic Tac Toe AI TelegramBot (Python Developer)',
    img: 'https://user-images.githubusercontent.com/29945147/188915459-81a963ea-9417-4a74-a299-81dc6b401344.png',
    duration: 'Dec 2021 - Dec 2021',
    description: 'Designed a decision rule based algorithm, implemented from Minimax, to develop an AI tic tac toe telegram bot.\n',
    techStack: [[{ iconType: IconType.Python }]],
    links: [
      { iconType: IconType.Github, link: 'https://github.com/SEAT-SIA-AppChallenge-2022' },
      { iconType: IconType.Figma, link: 'https://www.figma.com/file/KquZZhJXFo5KU2P0QKsDtP/SIA-App-Challenge?node-id=300%3A1423' },
      { iconType: IconType.OpenNew, link: 'https://seat-scoot.netlify.app/' },
    ],
    others: [{ title: 'Learn More about MiniMax', link: 'https://en.wikipedia.org/wiki/Minimax' }],
    shields: ['https://img.shields.io/badge/-Self%20initiated%20%F0%9F%8F%86-red'],
  },
];

export const otherProjects: Project[] = [
  {
    title: 'A-Maze-ing Race (Robotics Engineer)',
    img: 'https://user-images.githubusercontent.com/29945147/150669251-9530c62f-9f59-4b7e-b183-617b49ba1c5a.png',
    duration: 'Aug 2021 - Oct 2021',
    description:
      'Developed a Autonomous Robotic system that is able to traverse a maze successfully, without hitting any wall, using C++, Arduino and mBOT. Top 5 Fastest robot of the cohort',
    techStack: [[{ iconType: IconType.cpp }]],
    links: [{ iconType: IconType.Github, link: 'https://github.com/Task-Mangement-CVWO' }],
  },
  {
    title: 'GITHUB ISSUES TRACKER',
    img: issueTracker,
    duration: 'JUL 2021',
    description:
      'A webhook built to be an internal tracking tool - interfacing with GitHub Issues and Google Sheets API to log the issues of a given repository.',
    techStack: [[{ iconType: IconType.NodeJs }, { iconType: IconType.AwsApiGateway }, { iconType: IconType.AwsLambda }]],
    links: [
      { iconType: IconType.Github, link: 'https://github.com/ShenyiCui/Github-Issue-Tracker' },
      {
        iconType: IconType.OpenNew,
        link: 'https://docs.google.com/spreadsheets/d/1G37lTVdQRxUE_ewgEAosN_ZBeNRTPwOsVvea4QdE_I4/edit?usp=sharing',
      },
    ],
  },
  {
    title: 'NEUTRALIZEIT',
    img: hireHer,
    duration: 'MAR 2022',
    description:
      'A Google Chrome extension that replaces common gender coded words with neutral ones. Intended to be used to remove biases when searching for jobs.',
    techStack: [[{ iconType: IconType.JavaScript }, { iconType: IconType.JQuery }]],
    links: [
      { iconType: IconType.Github, link: 'https://github.com/DSC-HackForGood-2022/NeutralizeIt' },
      {
        iconType: IconType.DevPost,
        link: 'https://devpost.com/software/hireher-67b4ou?ref_content=my-projects-tab&ref_feature=my_projects',
      },
      {
        iconType: IconType.OpenNew,
        link: 'https://dsc-hackforgood-2022.github.io/NeutralizeIt/',
      },
    ],
    shields: [
      'https://img.shields.io/badge/-National%20%F0%9F%8C%8E-informational',
      'https://img.shields.io/badge/-Finalist%20%F0%9F%A5%87%20-Success',
    ],
    others: [
      { title: 'About GDSC Hack For Good', link: 'https://hfg2022.devpost.com/' },
      { title: 'Pitch Deck', link: 'https://docs.google.com/presentation/d/1Mk-bwgrNXrJeNbdbPV4ZVcQKJinpJcj2DpH_2wOAWr0/edit?usp=sharing' },
    ],
  },
  {
    title: 'DATA HASH VERIFICATION',
    duration: 'MAR 2021',
    description:
      'The purpose of this program is to ensure that data integrity is maintained during data transfer.\n' +
      "It's a windows AutoIt script (compiled .exe) that will recursively hash every file in a given root directory. Generates a comparable Hash Log.",
    techStack: [[{ iconType: IconType.AutoIt }]],
    links: [{ iconType: IconType.Github, link: 'https://github.com/ShenyiCui/Data-Transfer-Hash-Verification' }],
  },
];
