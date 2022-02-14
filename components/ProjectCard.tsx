import Img from 'next/image';

// Icons
import { IoLogoGithub, IoChevronForwardOutline } from 'react-icons/io5';

// Styles
import styles from '../styles/components/_project-card.module.scss';

// Models
import { TechStack } from '../models';

const ProjectCard = ({
  imgSource,
  link,
  sourcecode,
  header,
  description,
  details,
}: {
  imgSource: string;
  link: string;
  sourcecode: string;
  header: string;
  description: string;
  details: TechStack[];
}) => {
  const isTargetAvailable = (targetLink: string) => {
    return targetLink.length === 0;
  };

  const LinkWithDisable = ({ targetLink }: { targetLink: string }) => {
    if (targetLink.length === 0) {
      return <p>Server down</p>;
    }

    return (
      <a href={targetLink}>
        <p>View site</p>
      </a>
    );
  };

  return (
    <div>
      <div className={styles.projectCon}>
        <div className={styles.projectCon__imgCon}>
          <Img src={imgSource} alt={`${header}`} layout="fill" />
        </div>
      </div>
      <div className={styles.infoCon}>
        <p className={styles.infoCon__header}>{header}</p>
        <p className={styles.infoCon__p}>{description}</p>
        <ul>
          {details.map((stack) => (
            <li key={stack.name}>
              <b className={styles.infoCon__title}>{stack.name}</b>:{' '}
              {stack.used}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.buttonCon}>
        <button
          className={
            styles.buttonCon__btn +
            ' ' +
            (isTargetAvailable(link) && styles.buttonCon__btn__disabled)
          }
        >
          {!isTargetAvailable(link) && (
            <IoChevronForwardOutline fontSize="1.4rem" />
          )}
          <LinkWithDisable targetLink={link} />
        </button>
        {!isTargetAvailable(sourcecode) && (
          <button className={styles.buttonCon__btn}>
            <IoLogoGithub fontSize="1.4rem" />
            <a href={sourcecode}>
              <p>View source</p>
            </a>
          </button>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
