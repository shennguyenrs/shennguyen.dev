// Icons
import { IoLogoGithub, IoChevronForwardOutline } from 'react-icons/io5';

// Styles
import styles from '../../styles/components/ProjectCard/_buttonCon.module.scss';

// Components
import Include from '../Include';

const ButtonCon = ({
  targetLink,
  sourceLink,
}: {
  targetLink: string;
  sourceLink: string;
}) => (
  <div className={styles.buttonCon}>
    <button
      className={
        styles.buttonCon__btn +
        ' ' +
        (!Boolean(targetLink) && styles.buttonCon__btn__disabled)
      }
    >
      <Include condition={Boolean(targetLink)}>
        <IoChevronForwardOutline fontSize="1.4rem" />
      </Include>
      <Include condition={Boolean(targetLink)}>
        <a href={targetLink}>
          <p>View site</p>
        </a>
      </Include>
      <Include condition={!Boolean(targetLink)}>
        <p>Server Down</p>
      </Include>
    </button>
    <Include condition={!Boolean(sourceLink)}>
      <button className={styles.buttonCon__btn}>
        <IoLogoGithub fontSize="1.4rem" />
        <a href={sourceLink}>
          <p>View source</p>
        </a>
      </button>
    </Include>
  </div>
);

export default ButtonCon;
