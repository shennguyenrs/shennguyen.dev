import styles from '../styles/components/_project-card.module.scss';

// Models
import { TechStack } from '../models';

const ProjectCard = ({
  imgSource,
  header,
  description,
  details,
}: {
  imgSource: string;
  header: string;
  description: string;
  details: TechStack[];
}) => {
  return (
    <>
      <a href="#">
        <div className={styles.projectCon}>
          <img src={imgSource} />
          <div className={styles.projectCon__descriptionCon}>
            <p>View webiste</p>
          </div>
        </div>
      </a>
      <div className={styles.infoCon}>
        <p className={styles.infoCon__header}>{header}</p>
        <p className={styles.infoCon__p}>{description}</p>
        <ul>
          {details.map((stack) => (
            <li key={stack.name} className={styles.info__p} data-icon="🚀">
              {stack.name}: {stack.used}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ProjectCard;
