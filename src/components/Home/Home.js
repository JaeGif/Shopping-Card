import React, { useState } from 'react';
import bomberURL from '../../assets/products/bomber2k.png';
import '../../assets/fonts/futuremoon.ttf';
import githubPinkIcon from '../../assets/icons/github-pink.png';
import instaPinkIcon from '../../assets/icons/insta-pink.png';
import styles from './home.module.css';

export default function Home() {
  const [isCircleHovered, setIsCircleHovered] = useState(false);

  const onMouseInHandler = () => {
    setIsCircleHovered(true);
  };
  const onMouseOutHandler = () => {
    setIsCircleHovered(false);
  };

  return (
    <div className={styles.homeContainer}>
      <div>
        <div className={styles.padding}>
          <div className={styles.innerLeft}>
            <h2 className={styles.productNameFont}>Breezy Bomber</h2>
            <p className={styles.homeDescriptionP}>
              Out main product line this year is inspired heavily by CyberPunk.
              The theme draws from Tokyo Night and grungy street styles to
              create an effortlessly cool and complex blend of old and new.
            </p>
            <br></br>
            <p className={styles.homeSubDescription}>
              Sourced ethically from Japan, our fabrics seamlessly blend a
              luxurious cotton feel with a sleek matte finish.
            </p>
          </div>
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
        </div>
        <div className={styles.socialsWrapper}>
          <a href='https://github.com/JaeGif' rel='noreferrer' target='_blank'>
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
            isCircleHovered ? styles.circleFlairHover : styles.circleFlair
          }
        ></div>
      </div>
    </div>
  );
}
