import React from 'react'


import helpingHandsImg from '@/public/images/helpingHands.png'
import calmCastImg from '@/public/images/calmCast.png'
import hisAndHersImg from '@/public/images/hisandhers.png'
import campandCrew from '@/public/images/Camp&crew.png'
import {
  BookIcon,
  BriefcaseBusinessIcon,
  LaptopMinimalIcon,
} from 'lucide-react'

export const links = [
  {
    name: 'Home',
    id: 'home',
  },
  {
    name: 'About',
    id: 'about',
  },
  {
    name: 'Projects',
    id: 'projects',
  },
  {
    name: 'Education',
    id: 'experience',
  },
  {
    name: 'Skills',
    id: 'skills',
  },
  {
    name: 'Contact',
    id: 'contact',
  },
] as const

export const experiencesData = [
  {
    title: "MERN Stack Developer ",
    location: 'Malappuram,India',
    description: `Self-taught in MERN stack development through this intensive bootcamp, with hands-on experience gained by completing two major projects.`,
    icon: React.createElement(BriefcaseBusinessIcon),
    date: 'Jun 2023 - Present',
  },
  {
    title: "Bachelor's in Computer Application",
    location: 'Malappuram,India',
    description: `From the University of Calicut, specialized in web development and data structures; skilled in scalable solutions. `,
    icon: React.createElement(BookIcon),
    date: 'Aug 2020 - 2023',
  },
] as const

export const images = {
  campwithusImg,
  carcatalogImg,
  helpingHandsImg,
  projectmanagementImg,
  reactfoodImg,
}

export const projectsData = [
  {
    title: 'HelpingHands',
    description:
      'A Social Service Platform with event management portal and social media.',
    tags: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'MongoDB',
       'Node.js',
        'Express',
        'Clean Architecture',
       'JWT',
       'Cloudinary',
       'Stripe',
       'Socket.io',
       'Live Streaming',
       'Geocode API',
       'AWS',
    ],
    imageUrl: helpingHandsImg,
    link: 'https://github.com/NISHAD-ALI/helpingHands_client.git',
  },
  {
    title: 'His&Hers',
    description: `Fully-featured e-commerce platform specialising in men and women's fashion,`,
    tags: [
      'Jvascript',
      'Express Js',
      'MongoDb',
       'Node js',
       'RazorPay',
       'Ajax',
        'EJS',
         'AWS', 
         'EC2',
         'Nginx'

    ],
    imageUrl: hisAndHersImg,
    link: 'https://github.com/NISHAD-ALI/his-hers.git',
  },
  {
    title: 'Camp&Crew',
    description: `A platform where people organize nature camps and others can join in the experience.`,
    tags: [
      'React',
      'TypeScript',
      'Next.js',
      'Tailwind',
       'MongoDb',
       'Express Js',

    ],
    imageUrl: campandCrew,
    link: '',
  },
  {
    title: 'CalmCast',
    description:
      'Futuristic Weather prediction App ',
    tags: [
      'React',
      'Tailwind',
    ],
    imageUrl: calmCastImg,
    link: 'https://github.com/NISHAD-ALI/CalmCast.git',
  },
] as const

export const skillsData = [
  ['JavaScript', '/svgs/javascript-js.svg'],
  ['TypeScript', '/svgs/typescript-icon.svg'],
  ['React', '/svgs/react.svg'],
  ['Next.js', '/svgs/nextjs.svg'],
  ['Node.js', '/svgs/node-js.svg'],
  ['Express', '/svgs/express-original.svg'],
  ['Tailwind', '/svgs/tailwind-css.svg'],
  ['Framer', '/svgs/framer.svg'],
  ['Redux', '/svgs/redux-original.svg'],
  ['MongoDB', '/svgs/mongodb-original.svg'],
  ['PostgreSQL', '/svgs/postgresql.svg'],
  ['MySQL', '/svgs/MySQL.svg'],
  ['Cloudinary', '/svgs/cloudinary.svg'],
  ['Docker', '/svgs/Docker.svg'],
  ['Axios', '/svgs/axios.svg'],
  ['HTML', '/svgs/file-type-html.svg'],
  ['CSS', '/svgs/file-type-css.svg'],
  ['Sass', '/svgs/Sass.svg'],
  ['Git', '/svgs/git.svg'],
  ['GitHub', '/svgs/github.svg'],
  ['Figma', '/svgs/figma.svg'],
  ['Bootsrap', '/svgs/bootstrap.svg'],
  ['Firebase', '/svgs/firebase-svgrepo-com.svg'],
  ['Graph QL', '/svgs/graphql-ar21.svg'],
  ['AWS', '/svgs/icons8-aws.svg'],
  ['Stripe', '/svgs/stripe.svg'],
  ['Socket.i.o', '/svgs/socketio-icon.svg'],
] as const
