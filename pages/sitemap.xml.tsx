import { GetServerSidePropsContext } from 'next';
import fs from 'fs';

const Sitemap = () => {};

export async function getServerSideProps({ res }: GetServerSidePropsContext) {
  const baseUrl = {
    development: 'http://localhost:3000',
    production: 'https://shennguyen.me',
  }[process.env.NODE_ENV as string];

  const staticPages = fs
    .readdirSync('pages')
    .filter((page: string) => {
      return ![
        '_app.tsx',
        '_documnent.tsx',
        '_error.tsx',
        'sitemap.xml.tsx',
        'index.tsx',
        '404.tsx',
        'api',
        '.eslintcache',
      ].includes(page);
    })
    .map((path: string) => {
      return `${baseUrl}/${path.slice(0, -4)}`;
    });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
			<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
				<url>
					<loc>${baseUrl}/</loc>
					<lastmod>${new Date().toISOString()}</lastmod>
					<changefreq>monthly</changefreq>
					<priority>1.0</priority>
				</url>
				${staticPages
          .map((url) => {
            return `
							<url>
								<loc>${url}</loc>
								<lastmod>${new Date().toISOString()}</lastmod>
								<changefreq>monthly</changefreq>
								<priority>0.8</priority>
							</url>
						`;
          })
          .join('')}
			</urlset>
  `;

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default Sitemap;
