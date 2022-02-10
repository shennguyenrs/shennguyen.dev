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
