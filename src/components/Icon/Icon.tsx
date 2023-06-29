import React from 'react';

import ionic from '@/assets/icons/ionic.svg';
import github from '@/assets/icons/github.svg';
import figma from '@/assets/icons/figma.svg';
import java from '@/assets/icons/java.svg';
import nodejs from '@/assets/icons/nodejs.svg';
import postgreSql from '@/assets/icons/postgresql.svg';
import python from '@/assets/icons/python.svg';
import react from '@/assets/icons/react.svg';
import redux from '@/assets/icons/redux.svg';
import tailwind from '@/assets/icons/tailwind-css.svg';
import tensorFlow from '@/assets/icons/tensor-flow.svg';
import typescript from '@/assets/icons/typescript.svg';
import openNew from '@/assets/icons/open-in-new.svg';
import linkedin from '@/assets/icons/linkedin.svg';
import mail from '@/assets/icons/mail.svg';
import resume from '@/assets/icons/resume.svg';
import awsApiGateway from '@/assets/icons/aws-api-gateway.svg';
import awsLambda from '@/assets/icons/aws-lambda-1.svg';
import awsDynamodb from '@/assets/icons/aws-dynamodb.svg';
import expressJs from '@/assets/icons/express.svg';
import git from '@/assets/icons/git.svg';
import jquery from '@/assets/icons/jquery.svg';
import r from '@/assets/icons/r.svg';
import rails from '@/assets/icons/rails.svg';
import ruby from '@/assets/icons/ruby.svg';
import sequelize from '@/assets/icons/sequelize.svg';
import swift from '@/assets/icons/swift.svg';
import javascript from '@/assets/icons/javascript.svg';
import ecto from '@/assets/icons/ecto.svg';
import elixir from '@/assets/icons/elixir-lang-icon.svg';
import erlang from '@/assets/icons/erlang-icon.svg';
import pytorch from '@/assets/icons/pytorch-icon.svg';
import devpost from '@/assets/icons/devpost.svg';
import materialui from '@/assets/icons/material-ui.svg';
import autoit from '@/assets/icons/autoit.svg';
import storybook from '@/assets/icons/storybook.svg';
import recoil from '@/assets/icons/recoil.svg';
import nextjs from '@/assets/icons/nextjs.svg';
import blueprintjs from '@/assets/icons/blueprintjs.svg';
import youtube from '@/assets/icons/youtube.svg';
import googleCloud from '@/assets/icons/googleCloud.svg';
import cpp from '@/assets/icons/Cpp.svg';
import rpi from '@/assets/icons/rpi.svg';

export enum IconType {
  Figma = 'Figma/Design',
  Github = 'Github',
  Ionic = 'Ionic',
  Java = 'Java',
  NodeJs = 'Node.Js',
  PostgreSql = 'PostgreSQL',
  Python = 'Python',
  React = 'React',
  Redux = 'Redux',
  Tailwind = 'TailwindCSS',
  TensorFlow = 'TensorFlow',
  TypeScript = 'TypeScript',
  OpenNew = 'Visit',
  LinkedIn = 'LinkedIn',
  Email = 'Email',
  Resume = 'Resume',
  AwsApiGateway = 'ApiGateway',
  AwsDynamoDb = 'DynamoDB',
  AwsLambda = 'Lambda',
  ExpressJs = 'ExpressJs',
  Git = 'git',
  JQuery = 'jQuery',
  R = 'R',
  Rails = 'Rails',
  Ruby = 'Ruby',
  Sequelize = 'Sequelize',
  Swift = 'Swift',
  JavaScript = 'JavaScript',
  Ecto = 'Ecto',
  Elixir = 'Elixir',
  Erlang = 'Erlang',
  PyTorch = 'PyTorch',
  DevPost = 'DevPost',
  MaterialUI = 'MaterialUI',
  AutoIt = 'AutoIt',
  Storybook = 'Storybook',
  Recoil = 'Recoil',
  NextJs = 'NextJs',
  BlueprintJs = 'BlueprintJs',
  Youtube = 'Demo',
  GoogleCloud = 'Google Cloud',
  cpp = 'Cpp',
}

const IconImage = {
  'Figma/Design': figma,
  Github: github,
  Ionic: ionic,
  Java: java,
  'Node.Js': nodejs,
  PostgreSQL: postgreSql,
  Python: python,
  React: react,
  Redux: redux,
  TailwindCSS: tailwind,
  TensorFlow: tensorFlow,
  TypeScript: typescript,
  Visit: openNew,
  LinkedIn: linkedin,
  Email: mail,
  Resume: resume,
  ApiGateway: awsApiGateway,
  DynamoDB: awsDynamodb,
  Lambda: awsLambda,
  ExpressJs: expressJs,
  git: git,
  jQuery: jquery,
  R: r,
  Rails: rails,
  Ruby: ruby,
  Sequelize: sequelize,
  Swift: swift,
  JavaScript: javascript,
  Ecto: ecto,
  Elixir: elixir,
  Erlang: erlang,
  PyTorch: pytorch,
  DevPost: devpost,
  MaterialUI: materialui,
  AutoIt: autoit,
  Storybook: storybook,
  Recoil: recoil,
  NextJs: nextjs,
  BlueprintJs: blueprintjs,
  Demo: youtube,
  Cpp: cpp,
  'Google Cloud': googleCloud,
};

export type IconObject = {
  iconType: IconType;
  link?: string;
  vSpace?: string;
  size?: string;
  className?: string;
};

const openLink = (link: string) => {
  window.open(link, '_blank');
};

const Icon = ({ iconType, link, vSpace, size = 'w-[32px]', className }: IconObject) => {
  return (
    <div onClick={() => link && openLink(link)} className={`${size} grid grid-cols-1 h-5 group ${link && 'cursor-pointer'} ${className}`}>
      <div className='flex justify-center'>
        <img src={IconImage[iconType]} className={`m-0 ${size} `} />
      </div>
      <div className={`hidden justify-center group-hover:flex ${vSpace ? vSpace : 'mt-0'}`}>
        <p className='text-[10px] text-black m-0'>{iconType}</p>
      </div>
    </div>
  );
};

export default Icon;
