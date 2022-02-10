import Link from 'next/link';
import { IoChevronForwardOutline } from 'react-icons/io5';

// Styles
import styles from '../styles/components/_gotobutton.module.scss';

const GoToButton = ({
  targetLink,
  content,
}: {
  targetLink: string;
  content: string;
}) => (
  <Link href={targetLink}>
    <a className={styles.linkCon}>
      {content}
      <IoChevronForwardOutline />
    </a>
  </Link>
);

export default GoToButton;
