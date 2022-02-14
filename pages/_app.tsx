import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useEffect } from 'react';

import { AnimatePresence, domAnimation, LazyMotion, m } from 'framer-motion';

// Styles
import '../styles/core/_reset.scss';
import '../styles/core/_global.scss';

// Animations
import { slideRight } from '../lib/animations';

function MyApp({ Component, pageProps, router }: AppProps) {
  // Remove server side inject css
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');

    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
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
          href="https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <title>Shen Nguyen</title>
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
