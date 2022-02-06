import { useState, useEffect } from 'react';

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
  const [siteLink, setSiteLink] = useState<string>('');
  const [isDisabled, setIsDisabled] = useState<boolean>(false);

  // Update status and link on first load
  useEffect(() => {
    if (status === WebStatus.UP) {
      setSiteStatus('Go to website');
      setSiteLink(link);
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
          {(isDisabled && <p>{siteStatus}</p>) || (
            <a href={siteLink}>{siteStatus}</a>
          )}
        </div>
      </div>
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
    </div>
  );
};

export default ProjectCard;
