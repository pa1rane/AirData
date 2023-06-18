import React from 'react';
import styles from './Home.module.css';

const Home = () => {
  return (
    <>
      <div className={styles.container}>
        <heading className={styles.heading}>
            <h1>Welcome!</h1>
        </heading>
        <p className={styles.suggetion}>Click the button shown on the Navbar to get users data</p>
      </div>
    </>
  )
}

export default Home
