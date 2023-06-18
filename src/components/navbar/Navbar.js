import React from 'react';
import styles from './Navbar.module.css';

const Navbar = ({onFetchData, clicked}) => {
  return (
    <>
      <div className={styles.navbar}>
            <p className={styles.logo}>AirData</p>
            <button className={styles.btn} onClick={onFetchData} disabled={clicked}>Get Users</button>
      </div>
    </>
  )
}

export default Navbar
