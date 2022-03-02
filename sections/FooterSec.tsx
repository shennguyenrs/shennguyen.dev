import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import useHook from '../hooks/useHover';

import styles from '../styles/sections/_footerSec.module.scss';

const initialMes = 'Connect me now 👆';

const FooterSec = () => {
  const [message, setMessage] = useState<string>(initialMes);
  const [linkedin, linkedinHovering] = useHook<HTMLAnchorElement>();
  const [email, emailHovering] = useHook<HTMLAnchorElement>();
  const [phone, phoneHovering] = useHook<HTMLAnchorElement>();

  useEffect(() => {
    if (linkedinHovering) {
      setMessage('Connect me on Linkedin 👋');
      return;
    }

    if (emailHovering) {
      setMessage('Say hello to me by email ✍️');
      return;
    }

    if (phoneHovering) {
      setMessage('Send me messages on Whatsapp 📱');
      return;
    }

    setMessage(initialMes);
  }, [linkedinHovering, emailHovering, phoneHovering]);

  return (
    <div className={styles.footer}>
      <p>Handcrafted by me. Made in 🇫🇮</p>
      <div className={styles.footer__social}>
        <a ref={linkedin} href="https://linkedin.com/in/annguyen080196">
          <Image
            src="/images/linkedin_tiny.png"
            alt="linkedin"
            width="40px"
            height="40px"
          />
        </a>
        <a
          ref={email}
          href="mailto:81.annguyen@gmail.com?subject=Hi%2C%20Nice%20to%20meet%20you%20%F0%9F%91%8B&body=My%20name%20is"
        >
          <Image
            src="/images/at_tiny.png"
            alt="at"
            width="40px"
            height="40px"
          />
        </a>
        <a ref={phone} href="https://wa.me/0449314926">
          <Image
            src="/images/whatsapp_tiny.png"
            alt="whatsapp"
            width="40px"
            height="40px"
          />
        </a>
      </div>
      <p
        className={
          styles.footer__mes +
          ' ' +
          (message !== initialMes && styles.footer__mes__noAnimate)
        }
      >
        {message}
      </p>
      <div className={styles.footer__link}>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/projects">
          <a>Projects</a>
        </Link>
        <Link href="/blog">
          <a>Blog</a>
        </Link>
      </div>
    </div>
  );
};

export default FooterSec;
