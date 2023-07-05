import { IconType } from '@components/Icon';
import { Project } from '@components/ProjectCard';

import teleBot from '@/assets/images/teleBotAI.png';
import recyclopsImg from '@/assets/images/CodeCampus.png';
import issueTracker from '@/assets/images/Alex.png';
import hireHer from '@/assets/images/HireHer.png';
import ecoQuestImg from '@/assets/images/EcoQuestImg.png';
import mBot from '@/assets/images/Alex.png';
import cg1111 from '@/assets/images/mBot_pjt.jpeg'

export const allProjects: Project[] = [
  {
    title: 'Personali-FLY (Front-End Developer)',
    img: ecoQuestImg,
    duration: 'May 2022 - Aug 2022',
    description:
      '• The Singapore Airlines (SIA) App Challenge is an annual global hackathon to find innovative solutions to real-life industry challenges.\n' +
      '• Developed an innovative app for Singapore Airlines, featuring a personality test and an in-app game, as part of the SIA app challenge.\n' +
      '• Devised a personality test that matches users with products based on their personality traits, increasing the likelihood of purchase through personal sentiment.\n' +
      '• Utilized gamification to introduce competitive elements and motivate users to explore in-flight entertainment.\n' +
      '• Created missions and challenges to navigate in-flight entertainment features, increasing user awareness and engagement.\n' +
      '• Integrated quizzes to improve passenger awareness of deals and functionalities offered by the in-flight entertainment.\n' +
      '• Achieved finalist status and ranked in the top 10 worldwide in the SIA app challenge.\n' + 
      '• Presented ideas to Singapore Airlines Senior Management, highlighting the potential of the proposed project and how it could benefit the company.',
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
      { iconType: IconType.Youtube, link: 'https://drive.google.com/drive/u/0/folders/19E0t_t3shAyV7Xn5l2dfno4acbYKfeGu' },
      { iconType: IconType.OpenNew, link: 'https://drive.google.com/drive/u/0/folders/19E0t_t3shAyV7Xn5l2dfno4acbYKfeGu' },
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
      '• Developed a full stack web forum for Computing students\n' +
      '• Self taught React and Ruby on Rails in 2 weeks to build a web interface with CRUD functionalities along with Login Authentication using JWT and Bcrpyt gem\n' +
      '• Incorporated modern security measures like JSON Web Tokens (JWT) and Bcrypt for user authentication and authorization.\n' + 
      '• Modeled and implemented database schemas to support the functionalities of the web forum. Utilized various database management techniques to ensure data integrity and consistency.\n' +
      '• Designed a clean and intuitive user interface that makes it easy for users to navigate and participate in the forum using Material-UI.\n' + 
      '• Demonstrated strong problem-solving skills and ability to work independently.',


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
      { iconType: IconType.Github, link: 'https://github.com/vishnu4157/CodeCampus_Client' },
      { iconType: IconType.Youtube, link: 'https://drive.google.com/drive/u/0/folders/1xhyXyHMlgBqD2F6ZjwCc11Oenn9SM-wS' },
    ],
    shields: ['https://img.shields.io/badge/-Self%20initiated%20%F0%9F%8F%86-red'],
  },
  {
    title: 'Alex (Robotics Engineer)',
    img: mBot,
    duration: 'Jan 2022 - Apr 2022',
    description:
      '• Implemented secure and reliable remote control features for Alex terminal using SSH and VNC protocols along with Arduino and RPi.\n' +
      '• Devised a TLS backup option for sending commands via TCP/IP to ensure seamless and secure remote operation.\n' +
      '• Incorporated a LIDAR unit for 360-degree environment scanning within a 6-meter range, utilizing technical expertise to enable accurate and detailed environmental mapping',
    techStack: [[{ iconType: IconType.cpp }]],
    links: [{ iconType: IconType.Github, link: 'https://github.com/vishnu4157/Semi_Autonomous_Robot' }],
    shields: ['https://img.shields.io/badge/-Team%20Lead-informational'],
  },
  {
    title: 'Tic Tac Toe AI TelegramBot (Python Developer)',
    img: teleBot,
    duration: 'Dec 2021 - Dec 2021',
    description: '• Designed a decision rule based algorithm, implemented from Minimax, to develop an AI tic tac toe telegram bot.\n',
    techStack: [[{ iconType: IconType.Python }]],
    links: [
      { iconType: IconType.OpenNew, link: 'https://t.me/TicTacToe_with_bot' },
    ],
    others: [{ title: 'Learn More about MiniMax', link: 'https://en.wikipedia.org/wiki/Minimax' }],
    shields: ['https://img.shields.io/badge/-Self%20initiated%20%F0%9F%8F%86-red'],
  },
];

export const otherProjects: Project[] = [
  {
    title: 'A-Maze-ing Race (Robotics Engineer)',
    img: cg1111,
    duration: 'Aug 2021 - Oct 2021',
    description:
      '• Developed a Autonomous Robotic system that is able to traverse a maze successfully, without hitting any wall, using C++, Arduino and mBOT. Top 5 Fastest robot of the cohort',
    techStack: [[{ iconType: IconType.cpp }]],
    links: [{ iconType: IconType.Github, link: 'https://docs.google.com/document/d/1cmN-DzSyfZwaGRkZ3RKt1dH_Lbys56KFIsA2WQKAJQc/edit' }],
  },
];
