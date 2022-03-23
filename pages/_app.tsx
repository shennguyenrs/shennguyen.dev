import type { AppProps } from 'next/app';
import Head from 'next/head';

import { AnimatePresence, domAnimation, LazyMotion, m } from 'framer-motion';

// Styles
import '../styles/core/_reset.scss';
import '../styles/core/_global.scss';

// Animations
import { slideRight } from '../lib/animations';

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <Head>
        <title>Shen Nguyen</title>
        <link rel="canonical" href="https://shennguyen.me" />
        <meta name="description" content="Shen Nguyen's Blog and Porfolio" />
        <meta
          name="keywords"
          content="web developement, next js, react js, web design, scss, redux, api, sql, google app engine, mongo db, firebase, headless cms"
        />
        <meta property="og:site_name" content="Shen Nguyen's Blog & Porfolio" />
        <meta property="og:locale" content="en_US" />
        <meta
          property="og:title"
          content="Shen Nguyen's personal blog and porfolio"
        />
        <meta property="og:url" content="https://shennguyen.me" />
        <meta
          property="og:description"
          content="Hi, welcome to my personal blog and porfolio. I design and build things with diffrences technologies"
        />
        <meta
          property="og:image"
          content="https://shennguyen.me/api/og_thumbnail"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Rubik:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap"
          rel="stylesheet"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <LazyMotion features={domAnimation}>
        <AnimatePresence>
          <m.div
            key={router.route.concat(slideRight.name)}
            className="page-wrap"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={slideRight.variants}
            transition={slideRight.transition}
          >
            <Component {...pageProps} />
          </m.div>
        </AnimatePresence>
      </LazyMotion>
    </>
  );
}

export default MyApp;
