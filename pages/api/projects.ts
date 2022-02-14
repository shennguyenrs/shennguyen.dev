// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

// Database
import db from '../../config/firestore';

// Models
import { ProjectInfo } from '../../models';

// import { projects } from '../../projectInfo';

// Upload sample projects on inital only
// const uploadSample = () => {
//   try {
//     projects.forEach(async (item) => await db.collection('projects').add(item));
//   } catch (err) {
//     console.log(err);
//   }
// };

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // GET method returns project infos
  const getProjects = async () => {
    const { slice } = req.query;
    let tempProjects: ProjectInfo[] = [];

    try {
      const snapshot = await db.collection('projects').get();

      snapshot.docs.forEach((doc) => {
        tempProjects.push({
          _id: doc.id,
          name: doc.data().name,
          description: doc.data().description,
          image: doc.data().image,
          link: doc.data().link,
          sourcecode: doc.data().sourcecode,
          details: doc.data().details,
        });
      });

      // Slice data if slice param is found
      if (slice) {
        return res.status(200).json(tempProjects.splice(0, 3));
      }

      return res.status(200).json(tempProjects);
    } catch (err) {
      console.log(err);
    }
  };

  // Switch methods
  switch (req.method) {
    case 'GET':
      return getProjects();
    // case 'POST':
    //   return uploadSample();
    default:
      return res.status(405).json({ error: 'This method is not allowed' });
  }
}
