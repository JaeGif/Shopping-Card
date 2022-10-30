import React from 'react';
import bomberURL from '../../assets/products/bomber2k.png';
import '../../assets/fonts/futuremoon.ttf';
import githubPinkIcon from '../../assets/icons/github-pink.png';
import instaPinkIcon from '../../assets/icons/insta-pink.png';

import styles from './home.module.css';

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <div>
        <div>
          <h2 className={styles.productNameFont}>Breezy Bomber</h2>
          <p>
            Out main product line this year is inspired heavily by CyberPunk.
            The theme draws heavily from Tokyo Night and grungy street styles to
            create an effortlessly cool and complex blend of old and new.
          </p>
          <button>Tokyo Night Line</button>
        </div>
        <div>
          <img
            className={styles.socialsIcons}
            src={githubPinkIcon}
            alt='github'
          ></img>
          <img
            className={styles.socialsIcons}
            src={instaPinkIcon}
            alt='instagram'
          ></img>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <img
          className={styles.mainProductImg}
          src={bomberURL}
          alt='main-spread-img'
        />
        <div className={styles.circleFlair}></div>
      </div>
    </div>
  );
}
