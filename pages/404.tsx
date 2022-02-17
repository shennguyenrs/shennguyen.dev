// Styles
import styles from '../styles/404.module.scss';

// Sections
import FooterSec from '../sections/FooterSec';

const NotFound = () => (
  <>
    <svg
      className={styles.rects_bg}
      width="100%"
      height="100%"
      viewBox="50 100 960 897"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.05">
        <rect
          x="777.817"
          y="3.53553"
          width="1095"
          height="1095"
          rx="17.5"
          transform="rotate(45 777.817 3.53553)"
          stroke="white"
          strokeWidth="5"
        />
        <rect
          x="777.817"
          y="144.957"
          width="895"
          height="895"
          rx="17.5"
          transform="rotate(45 777.817 144.957)"
          stroke="white"
          strokeWidth="5"
        />
        <rect
          x="777.817"
          y="357.089"
          width="595"
          height="595"
          rx="17.5"
          transform="rotate(45 777.817 357.089)"
          stroke="white"
          strokeWidth="5"
        />
      </g>
    </svg>
    <div className={styles.notfound__con}>
      <div className={styles.notfound__con__left}>
        <p>404</p>
        <p>not</p>
        <p>found</p>
      </div>
      <div>
        <p>The page you request could not found or in development</p>
      </div>
    </div>
    <FooterSec />
  </>
);

export default NotFound;
