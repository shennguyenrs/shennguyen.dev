import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    try {
      const filePath = path.join(
        process.cwd(),
        '/public/images/og_thumbnail.png'
      );
      const imageBuffer = fs.createReadStream(filePath);

      await new Promise(function (resolve) {
        res.setHeader('Content-Type', 'image/png');
        imageBuffer.pipe(res);
        imageBuffer.on('end', resolve);
        imageBuffer.on('error', function (err) {
          if (err) {
            res.status(400).json({
              error: true,
              message: 'File not found',
            });
            res.end();
          } else {
            res
              .status(500)
              .json({ error: true, message: 'Something went wrong' });
            res.end();
          }
        });
      });
    } catch (err) {
      res.status(400).json({ error: true, message: err });
      res.end();
    }
  } else {
    res
      .status(405)
      .json({ error: true, message: 'This method is not allowed' });
  }
}
