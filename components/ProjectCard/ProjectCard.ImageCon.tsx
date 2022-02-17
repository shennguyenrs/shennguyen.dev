import Img from 'next/image';

// Styles
import styles from '../../styles/components/ProjectCard/_imageCon.module.scss';

type Props = {
  imgSrc: string;
  imgAlt: string;
};

const ImageCon: React.FC<Props> = ({ imgSrc, imgAlt }) => (
  <div className={styles.imgCon}>
    <div className={styles.imgCon__con}>
      <Img src={imgSrc} alt={`${imgAlt}`} layout="fill" />
    </div>
  </div>
);

export default ImageCon;
