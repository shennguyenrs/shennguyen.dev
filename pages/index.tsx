import type { GetServerSideProps } from 'next';
import Img from 'next/image';
import axios from 'axios';
import { m, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

// Styles
import styles from '../styles/home.module.scss';

// Sections
import FooterSec from '../sections/FooterSec';

// Components
import ProjectCards from '../components/ProjectCard';
import GoToButton from '../components/GoToButton';

// Models
import { ProjectInfo } from '../models';

// Animation
import { scaleUp } from '../lib/animations';

// Static images
import me_tiny from '../public/images/me_tiny.png';

const Home = ({ projects }: { projects: ProjectInfo[] }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [inView, controls]);

  return (
    <div className={styles.home}>
      <div className={styles.blur_dot_yellow}></div>
      <div className={styles.blur_dot_red}></div>
      <div className={styles.blur_dot_blue}></div>
      <div className={styles.heroSection}>
        <div className={styles.heroContainer}>
          <h1 className={styles.heroContainer__header}>
            Hi, My name is An Nguyen
          </h1>
          <p className={styles.heroContainer__p}>
            I am learning to become a full-stack developer
          </p>
        </div>
      </div>
      <div className={styles.about}>
        <p className={styles.about__header}>About me</p>
        <m.div
          className={styles.about__container}
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={scaleUp.variants}
          transition={scaleUp.transition}
        >
          <div className={styles.about__img}>
            <Img
              src={me_tiny}
              alt="myself-img"
              layout="fill"
              placeholder="blur"
            />
          </div>
          <div className={styles.about__p}>
            <p>
              I spend most of my time discovering, practising, making mistakes
              and learning. I like the challenges, which will broaden my limits.
              My goal is to learn to be a full-stack developer who wants to
              bring creativity and technology into the success of businesses.
              <br /> <br />
              My works are powered Figma, Neovim and Google.
              <GoToButton targetLink="/about" content="More details" />
            </p>
          </div>
        </m.div>
      </div>
      <div className={styles.porfolio}>
        <h1 className={styles.porfolio__header}>Porfolio</h1>
        <div className={styles.porfolio__con}>
          {projects.map((item) => (
            <ProjectCards
              key={item._id}
              header={item.name}
              description={item.description}
              imgSource={item.image}
              link={item.link}
              sourcecode={item.sourcecode}
              details={item.details}
            />
          ))}
        </div>
        <div className={styles.porfolio__con}>
          <GoToButton targetLink="/projects" content="View all projects" />
        </div>
      </div>
      <FooterSec />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const res = (await axios.get(
    `http://localhost:${process.env.PORT}/api/projects?slice=3`
  )) as any;
  let projects: ProjectInfo[] = res.data;

  return {
    props: {
      projects,
    },
  };
};

export default Home;
