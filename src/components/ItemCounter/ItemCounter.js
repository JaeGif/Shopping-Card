import React from 'react';
import subtract from '../../assets/icons/subtract96.png';
import add from '../../assets/icons/add96.png';
import styles from './itemcounter.module.css';

export default function ItemCounter() {
  return (
    <div className={styles.counterContainer}>
      <img className={styles.icons} src={subtract} alt='remove' />
      <input className={styles.inputSelect} type='number'></input>
      <img className={styles.icons} src={add} alt='add' />
    </div>
  );
}
