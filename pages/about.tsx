import Img from 'next/image';

// Sections
import FooterSec from '../sections/FooterSec';

// Components
import GoToButton from '../components/GoToButton';

// Styles
import styles from '../styles/aboutMe.module.scss';

// Static images
import me_tiny from '../public/images/me_tiny.png';

const AboutMe = () => {
  return (
    <>
      <div className={styles.aboutMe}>
        <div className={styles.blur_dot_red}></div>
        <div className={styles.blur_dot_blue}></div>
        <div className={styles.blur_dot_yellow}></div>
        <div className={styles.wave_circles}>
          <svg
            className={styles.wave_circles__st}
            width="825"
            height="1030"
            viewBox="-500 500 825 1030"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.05">
              <circle
                cx="310"
                cy="515"
                r="512.5"
                stroke="white"
                strokeWidth="5"
              />
              <circle
                cx="310"
                cy="515"
                r="397.5"
                stroke="white"
                strokeWidth="5"
              />
              <circle
                cx="310"
                cy="515"
                r="247.5"
                stroke="white"
                strokeWidth="5"
              />
            </g>
          </svg>
          <svg
            className={styles.wave_circles__nd}
            width="825"
            height="1030"
            viewBox="0 -500 825 1030"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.05">
              <circle
                cx="310"
                cy="515"
                r="512.5"
                stroke="white"
                strokeWidth="5"
              />
              <circle
                cx="310"
                cy="515"
                r="397.5"
                stroke="white"
                strokeWidth="5"
              />
              <circle
                cx="310"
                cy="515"
                r="247.5"
                stroke="white"
                strokeWidth="5"
              />
            </g>
          </svg>
        </div>
        <p className={styles.aboutMe__header}>About me</p>
        <div className={styles.aboutMe__conOne}>
          <div className={styles.aboutMe__img}>
            <Img
              src={me_tiny}
              alt="myself-img"
              layout="fill"
              placeholder="blur"
            />
          </div>
          <div className={styles.aboutMe__w}>
            <span>H</span>
            <span>i</span>
            <span className={styles.waveHand}>👋</span>
            <p>
              Currently, I am doing my final thesis at Centria Univerisity of
              Applied Sciences. My goal is become a full-stack web developer.
            </p>
          </div>
        </div>
        <div className={styles.aboutMe__conTwo}>
          <div className={styles.aboutMe__conTwo__left}>
            <p>
              I am an ex-marketer specializing in Facebook advertising. I am
              also a designer who is proficient with designs in Figma, Photoshop
              and Illustrator.
            </p>
            <p>
              I was interested in web development and machine learning, then I
              did my study in Information Technology in Finland (2019).
            </p>
            <p>
              I developed this website with Next Js, SCSS and Firebase. I am
              developing the blog section and a productivity manager
              application, which support me to organise my workload and
              projects.
            </p>
            <p>
              In my spare time, I love to listen to my favourite albums and give
              a try on new technologies. Currently, I am exploring Tailwind CSS
              and GoLang as a backend language.
            </p>
          </div>
          <div className={styles.aboutMe__conTwo__right}>
            <div className={styles.infoCard__con}>
              <div className={styles.infoCard__part}>
                <p className={styles.infoCard__header}>Email</p>
                <p>81.annguyen@gmail.com</p>
              </div>
              <div className={styles.infoCard__part}>
                <p className={styles.infoCard__header}>Phone</p>
                <p>+358 44 931 4926</p>
              </div>
              <div className={styles.infoCard__part}>
                <p className={styles.infoCard__header}>Linkedin</p>
                <a href="https://www.linkedin.com/in/annguyen080196/">
                  annguyen080196
                </a>
              </div>
              <div className={styles.infoCard__part}>
                <p className={styles.infoCard__header}>Github</p>
                <a href="https://github.com/shennguyenrs">shennguyenrs</a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.aboutMe__tags}>
          <div className={styles.tags__con + ' ' + styles.tags__con__lang}>
            <p>Typescript</p>
            <p>Javascript</p>
            <p>Python</p>
            <p>HTML</p>
            <p>CSS</p>
            <p>SCSS</p>
          </div>
          <div className={styles.tags__con + ' ' + styles.tags__con__fw}>
            <p>Next Js</p>
            <p>React Js</p>
            <p>Node Js</p>
            <p>Express Js</p>
          </div>
          <div className={styles.tags__con + ' ' + styles.tags__con__sl}>
            <p>Bootstrap</p>
            <p>MUI 5</p>
            <p>Chakra UI</p>
          </div>
          <div className={styles.tags__con + ' ' + styles.tags__con__db}>
            <p>SQL</p>
            <p>Mongo DB</p>
            <p>Firebase</p>
          </div>
          <p className={styles.tags__noti}>On exploring...</p>
          <div className={styles.tags__con + ' ' + styles.tags__con__not}>
            <p>Tailwind CSS</p>
            <p>GoLang</p>
            <p>Graph QL</p>
            <p>Socket Io</p>
          </div>
        </div>
        <div className={styles.aboutMe__link}>
          <GoToButton targetLink="/" content="Go back" />
        </div>
      </div>
      <FooterSec />
    </>
  );
};

export default AboutMe;
