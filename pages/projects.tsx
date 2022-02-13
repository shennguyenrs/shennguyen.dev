import { GetServerSideProps } from 'next';
import axios from 'axios';

// Components
import ProjectCard from '../components/ProjectCard';
import GoToButton from '../components/GoToButton';

// Sections
import FooterSec from '../sections/FooterSec';

// Models
import { ProjectInfo } from '../models';

// Styles
import styles from '../styles/projects.module.scss';

const AllProjects = ({ projects }: { projects: ProjectInfo[] }) => {
  return (
    <>
      <div className={styles.projects}>
        <p className={styles.projects__header}>All Projects</p>
        <div className={styles.projects__con}>
          {projects.map((item) => (
            <ProjectCard
              key={item.name}
              header={item.name}
              description={item.description}
              imgSource={item.image}
              link={item.link}
              sourcecode={item.sourcecode}
              details={item.details}
            />
          ))}
        </div>
        <div className={styles.projects__link}>
          <GoToButton targetLink="/" content="Go back" />
        </div>
      </div>
      <FooterSec />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const res = (await axios.get(
    `http://localhost:${process.env.PORT}/api/projects`
  )) as any;
  let projects: ProjectInfo[] = res.data;

  return {
    props: {
      projects,
    },
  };
};

export default AllProjects;
