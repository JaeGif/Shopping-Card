import React, { useState } from 'react';
import bomberURL from '../../assets/products/bomber2k.png';
import githubPinkIcon from '../../assets/icons/github-pink.png';
import instaPinkIcon from '../../assets/icons/insta-pink.png';
import styles from './about.module.css';
import { Link } from 'react-router-dom';

export default function Home() {
  const [isCircleHovered, setIsCircleHovered] = useState(false);

  const onMouseInHandler = () => {
    setIsCircleHovered(true);
  };
  const onMouseOutHandler = () => {
    setIsCircleHovered(false);
  };

  return (
    <div className={styles.background}>
      <div className={styles.homeContainer}>
        <div
          className={styles.imgContainer}
          onMouseEnter={onMouseInHandler}
          onMouseLeave={onMouseOutHandler}
        >
          <img
            className={styles.mainProductImg}
            src={bomberURL}
            alt='main-spread-img'
          />
          <div
            className={
              isCircleHovered
                ? `${styles.circleFlairHover} ${styles.circleFlair}`
                : styles.circleFlair
            }
          ></div>
        </div>
        <div className={styles.rightBlock}>
          <div className={styles.padding}>
            <div className={styles.innerRight}>
              <h2 className={styles.productNameFont}>Tokyo Theme</h2>
              <p className={styles.homeDescriptionP}>
                Out main product line this year is inspired heavily by
                CyberPunk. The theme draws from Tokyo Night and grungy street
                styles to create an effortlessly cool and complex blend of old
                and new.
              </p>
              <br></br>
              <p className={styles.homeSubDescription}>
                Sourced ethically from Japan, our fabrics seamlessly blend a
                luxurious cotton feel with a sleek matte finish. We work hard to
                make a quality, yet affordable brand for everyone.
              </p>
            </div>
            <Link
              style={{ textDecoration: 'none', width: 'fit-content' }}
              to='/store'
            >
              <button>
                <div className='original'>Tokyo Night Line</div>
                <div className='letters'>
                  <span>Tok</span>
                  <span>yo</span>
                  <span>Nig</span>
                  <span>ht</span>
                  <span>Li</span>
                  <span>ne</span>
                </div>
              </button>
            </Link>
          </div>
          <div className={styles.socialsWrapper}>
            <p style={{ fontSize: '1.5rem' }}>Contact Us</p>
            <a
              href='https://github.com/JaeGif'
              rel='noreferrer'
              target='_blank'
            >
              <img
                className={styles.socialsIcons}
                src={githubPinkIcon}
                alt='github'
              ></img>
            </a>
            <img
              className={styles.socialsIcons}
              src={instaPinkIcon}
              alt='instagram'
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}
