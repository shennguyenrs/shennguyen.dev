import type { NextPage } from 'next';
import Head from 'next/head';
import { motion, useAnimation } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

// Styles
import styles from '../styles/all.module.scss';

// Components
import ProjectCards from '../components/ProjectCard';

// Models
import { ProjectInfo, WebStatus } from '../models';

const aboutVariants = {
  hidden: {
    scale: 0,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const projects: ProjectInfo[] = [
  {
    name: 'Grocery Plus (2021)',
    description: 'A sharable shopping list through phone number',
    image: '/images/projects/groceryplus_tiny.png',
    link: '/',
    status: WebStatus.DOWN,
    details: [
      {
        name: 'Frontend',
        used: 'React, MUI 5',
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
    name: 'Weather Index viewer (2021)',
    description: 'View Weather index in SQL database and download CSV',
    image: '/images/projects/groceryplus_tiny.png',
    link: '/',
    status: WebStatus.DOWN,
    details: [
      {
        name: 'Frontend',
        used: 'React, MUI 5',
      },
      {
        name: 'REST Api',
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
    name: 'Coco-farm.vn (2020)',
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
    name: 'Sisustuskipna (2020)',
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

const Home: NextPage = () => {
  const [animateArrow, setAnimateArrow] = useState<boolean>(false);
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) controls.start('visible');
    else controls.start('hidden');
  }, [inView, controls]);

  return (
    <>
      <Head>
        <title>shennguyen.dev</title>
        <meta name="description" content="Shen Personal Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.heroSection}>
        <motion.div
          className={styles.heroContainer}
          initial={{ opacity: 0 }}
          animate={{
            y: [200, 0],
            opacity: [0, 1],
          }}
          transition={{
            ease: 'easeInOut',
            duration: 1,
          }}
        >
          <h1 className={styles.heroContainer__header}>
            Hi, My name is An Nguyen
          </h1>
          <p className={styles.heroContainer__p}>
            I'm learning to become a full-stack developer
          </p>
        </motion.div>
        <div className={styles.heroFooter}>
          <motion.a
            className={styles.heroFooter__p}
            href="#porfolio"
            whileHover={{ color: '#fcbf49' }}
            onHoverStart={() => setAnimateArrow(true)}
            onHoverEnd={() => setAnimateArrow(false)}
          >
            See my works
          </motion.a>
          <motion.div
            className={styles.heroFooter__img}
            animate={(animateArrow && { x: [-5, 0, 30] }) || {}}
            transition={{
              ease: 'easeInOut',
              duration: 0.5,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          >
            <img src="/images/arrow_tiny.png" alt="arrow" />
          </motion.div>
        </div>
      </div>
      <div className={styles.porfolio}>
        <h1 className={styles.porfolio__header}>Porfolio</h1>
        <div className={styles.porfolio__con}>
          {projects.map((item) => (
            <ProjectCards
              key={item.name}
              header={item.name}
              description={item.description}
              imgSource={item.image}
              link={item.link}
              status={item.status}
              details={item.details}
            />
          ))}
        </div>
      </div>
      <div className={styles.about}>
        <p className={styles.about__header}>About me</p>
        <motion.div
          className={styles.about__container}
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={aboutVariants}
        >
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
        </motion.div>
      </div>
      <div className={styles.footer}>
        <p className={styles.footer__p}>Handcrafted by me. Made in 🇫🇮</p>
        <div className={styles.footer__social}>
          <a href="https://linkedin.com/in/annguyen080196">
            <img src="/images/linkedin_tiny.png" alt="linkedin" />
          </a>
          <a href="mailto:shennguyen.redshinobi96@gmail.com?subject=Hi%2C%20Nice%20to%20meet%20you%20%F0%9F%91%8B&body=My%20name%20is">
            <img src="/images/at_tiny.png" alt="at" />
          </a>
          <a href="https://wa.me/0449314926">
            <img src="/images/whatsapp_tiny.png" alt="whatsapp" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;
