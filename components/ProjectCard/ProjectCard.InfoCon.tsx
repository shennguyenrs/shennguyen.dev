// Styles
import styles from '../../styles/components/ProjectCard/_infoCon.module.scss';

// Models
import { TechStack } from '../../models';

type Props = {
  header: string;
  describe: string;
  arr: TechStack[];
};

const InfoCon: React.FC<Props> = ({ header, describe, arr }) => (
  <div className={styles.infoCon}>
    <p className={styles.infoCon__header}>{header}</p>
    <p className={styles.infoCon__p}>{describe}</p>
    <ul>
      {arr.map((stack) => (
        <li key={stack.name}>
          <b className={styles.infoCon__title}>{stack.name}</b>: {stack.used}
        </li>
      ))}
    </ul>
  </div>
);

export default InfoCon;
