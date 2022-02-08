import { useState, useEffect } from 'react';

// Icons
import { IoLogoGithub, IoChevronForwardOutline } from 'react-icons/io5';

// Styles
import styles from '../styles/components/_project-card.module.scss';

// Models
import { TechStack, WebStatus } from '../models';

const ProjectCard = ({
  imgSource,
  link,
  header,
  status,
  description,
  details,
}: {
  imgSource: string;
  link: string;
  header: string;
  status: WebStatus;
  description: string;
  details: TechStack[];
}) => {
  const [siteStatus, setSiteStatus] = useState<string>('');
  const [isDisabled, setIsDisabled] = useState<boolean>(false);

  // Update status and link on first load
  useEffect(() => {
    if (status === WebStatus.UP) {
      setSiteStatus('Go to website');
      return;
    }

    if (status === WebStatus.DOWN) {
      setSiteStatus('Server down');
      setIsDisabled(true);
      return;
    }

    if (status === WebStatus.DEV) {
      setSiteStatus('In development');
      setIsDisabled(true);
      return;
    }
  }, []);

  return (
    <div>
      <div className={styles.projectCon}>
        <div className={styles.projectCon__imgCon}>
          <img src={imgSource} />
        </div>
        <div
          className={
            styles.projectCon__descriptionCon +
              ' ' +
              (isDisabled && styles.projectCon__descriptionCon__disabled) || ''
          }
        >
          {(isDisabled && (
            <>
              <p>
                🛑 <b>{siteStatus}</b>
              </p>
              {link !== '' && (
                <a href={link}>
                  <div className={styles.projectCon__descriptionCon__linkCon}>
                    <IoLogoGithub fontSize="2rem" />
                    <p>View sourcecode</p>
                  </div>
                </a>
              )}
            </>
          )) || (
            <a href={link}>
              <div className={styles.projectCon__descriptionCon__linkCon}>
                <p>{siteStatus}</p>
                <IoChevronForwardOutline fontSize="2rem" />
              </div>
            </a>
          )}
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
    </div>
  );
};

export default ProjectCard;
