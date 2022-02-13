import styles from '../styles/404.module.scss';

const NotFound = () => (
  <div className={styles.notfound__con}>
    <div className={styles.notfound__con__left}>
      <p>404</p>
      <p>not</p>
      <p>found</p>
    </div>
    <div>
      <p>The page you request could not found</p>
    </div>
  </div>
);

export default NotFound;
