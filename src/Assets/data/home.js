import React from 'react';

import {Colors} from '../../Themes';

import Blogs from '../blogs.svg';
import Resources from '../resources.svg';
import Abhishar from '../abhishar.svg';

export const homeData = [
  {
    id: 1,
    backgroundColor: Colors.red,
    image: () => <Blogs height={'100%'} width={'50%'} />,
    text:
      'Check out top-notch technical blogs on both shallow and niche topics!',
    link: 'https://medium.com/tech-iiitg',
  },
  {
    id: 2,
    backgroundColor: Colors.green,
    image: () => <Resources height={'100%'} width={'50%'} />,
    text:
      'Go through useful resources, curated by the students, for the students!',
    link:
      'https://docs.google.com/document/d/1PnIP0cSEFjdR4HyjTyRJFS0_T_y-ilDM8x89rCNVj7o/edit?usp=sharing',
  },
  {
    id: 3,
    backgroundColor: Colors.blue,
    image: () => <Abhishar height={'100%'} width={'50%'} />,
    text:
      "Read interesting articles in the institute's annual magazine, Abhishar!",
    link: 'http://aasf.in/aasf/abhishar.php',
  },
];
