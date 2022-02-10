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
    <div className={styles.project}>
      <div className={styles.porfolio}>
        <p className={styles.project__header}>All Projects</p>
        <div className={styles.porfolio__con}>
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
      </div>
      <div className={styles.porfolio__con}>
        <GoToButton targetLink="/" content="Go back" />
      </div>
      <div className={styles.project__footer}>
        <FooterSec />
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const res = (await axios.get('http://localhost:3000/api/projects')) as any;
  let projects: ProjectInfo[] = res.data;

  return {
    props: {
      projects,
    },
  };
};

export default AllProjects;
