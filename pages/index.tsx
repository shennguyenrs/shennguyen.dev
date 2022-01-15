import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';

// Styles
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  const [onHover, setOnHover] = useState<boolean>(false);

  // Move the arrow when hover the word
  return (
    <>
      <Head>
        <title>shennguyen.dev</title>
        <meta name="description" content="Shen Personal Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <div className={styles.navigation}>
          <ul className={styles.navigation__list}>
            <li className={styles.navigation__link}>
              <a href="#porfolioSection">Porfolio</a>
            </li>
            <li className={styles.navigation__link}>
              <a href="#aboutSection">About</a>
            </li>
            <li className={styles.navigation__link}>
              <a href="#contactSection">Contact</a>
            </li>
          </ul>
        </div>
        <div className={styles.heroContainer}>
          <h1 className={styles.heroContainer__header}>
            Hi, My name is An Nguyen
          </h1>
          <p className={styles.heroContainer__p}>
            I'm learning to become a full-stack developer
          </p>
        </div>
        <div className={styles.heroFooter}>
          <a
            className={styles.heroFooter__p}
            onMouseEnter={() => setOnHover(true)}
            onMouseLeave={() => setOnHover(false)}
            href="#porfolioSection"
          >
            See my works
          </a>
          <div
            className={`${styles.heroFooter__img} ${
              onHover && styles.arrowOnHover
            }`}
          >
            <img src="/images/arrow_tiny.png" alt="arrow" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
