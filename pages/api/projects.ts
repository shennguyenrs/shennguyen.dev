// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

// Models
import { ProjectInfo, WebStatus } from '../../models';

const projects: ProjectInfo[] = [
  {
    name: 'Wolt Internship assignment',
    description: 'Delivery fee calculator',
    image: '/images/projects/delivery_tiny.png',
    link: 'https://wolt-internship-2022.herokuapp.com/',
    status: WebStatus.UP,
    details: [
      {
        name: 'Frontend',
        used: 'React Js, SCSS',
      },
      {
        name: 'Language',
        used: 'Typescript',
      },
      {
        name: 'Deployed on',
        used: 'Heroku',
      },
    ],
  },
  {
    name: 'Grocery Plus',
    description: 'A sharable shopping list through phone number',
    image: '/images/projects/groceryplus_tiny.png',
    link: '',
    status: WebStatus.DOWN,
    details: [
      {
        name: 'Frontend',
        used: 'React Js, MUI 5',
      },
      {
        name: 'Framework',
        used: 'Next Js',
      },
      {
        name: 'Database',
        used: 'Firebase',
      },
      {
        name: 'Language',
        used: 'Typescript',
      },
      {
        name: 'Deployed on',
        used: 'Google App Engine',
      },
    ],
  },
  {
    name: 'Weather Index viewer',
    description: 'View Weather index in SQL database and download CSV',
    image: '/images/projects/groceryplus_tiny.png',
    link: '',
    status: WebStatus.DOWN,
    details: [
      {
        name: 'Frontend',
        used: 'React Js, MUI 5',
      },
      {
        name: 'RESTful Api',
        used: 'Node Js, Express',
      },
      {
        name: 'Database',
        used: 'MySQL',
      },
      {
        name: 'Language',
        used: 'Typescript',
      },
      {
        name: 'Deployed on',
        used: 'Google App Engine',
      },
    ],
  },
  {
    name: 'Coco-farm.vn',
    description: 'Marketing campaign landing page',
    image: '/images/projects/coco-farm_tiny.png',
    link: 'https://coco-farm.herokuapp.com/index.html',
    status: WebStatus.UP,
    details: [
      {
        name: 'Frontend',
        used: 'HTML, CSS',
      },
      {
        name: 'Deployed on',
        used: 'Heroku',
      },
    ],
  },
  {
    name: 'Sisustuskipna',
    description: 'Home decoration agency company website',
    image: '/images/projects/company-website_tiny.png',
    link: 'https://company-website-110621.herokuapp.com/index.html',
    status: WebStatus.UP,
    details: [
      {
        name: 'Frontend',
        used: 'HTML, CSS',
      },
      {
        name: 'Deployed on',
        used: 'Heroku',
      },
    ],
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Return project infos
  const getProjects = () => {
    const { slice } = req.query;

    // Slice data if slice param is found
    if (slice) {
      return res.status(200).json(projects.splice(0, 3));
    }

    return res.status(200).json(projects);
  };

  // Switch methods
  switch (req.method) {
    case 'GET':
      return getProjects();
    default:
      return res.status(405).json({ error: 'This method is not allowed' });
  }
}
