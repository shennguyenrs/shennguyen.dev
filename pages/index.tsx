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
              <a href="#porfolio">Porfolio</a>
            </li>
            <li className={styles.navigation__link}>
              <a href="#about">About</a>
            </li>
            <li className={styles.navigation__link}>
              <a href="#contact">Contact</a>
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
            href="#porfolio"
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
      <div className={styles.about}>
        <p className={styles.sectionHeader}>About me</p>
        <div className={styles.about__container}>
          <div className={styles.about__img}>
            <img src="/images/me_tiny.png" alt="myself-img" />
          </div>
          <div className={styles.about__p}>
            <p>
              I spend most of my time discovering, practising, making mistakes
              and learning. I like the challenges, which will broaden my limits.
              My goal is to learn to be a full-stack developer who wants to
              bring creativity and technology into the success of businesses.
              <br /> <br />
              My works are powered Figma, Neovim and Google.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <p className={styles.footer__p}>Handcrafted by me. Made in 🇫🇮</p>
        <div className={styles.footer__social}>
          <img src="/images/linkedin_tiny.png" alt="linkedin" />
          <img src="/images/at_tiny.png" alt="at" />
          <img src="/images/whatsapp_tiny.png" alt="whatsapp" />
        </div>
      </div>
    </>
  );
};

export default Home;
