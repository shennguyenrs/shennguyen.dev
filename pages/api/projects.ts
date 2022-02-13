// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

// Models
import { projects } from '../../projectInfo';

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
