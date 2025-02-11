import React from 'react';

import styles from '../styles/global';
import assets from '../assets';

const Download = () => {
  return (
    <div className={`${styles.section} ${styles.bgWhite}`}>
        <div className={`${styles.subSection} flex-col text center`}>
            <div>
                <h1 className={`${styles.h1Text} ${styles.blackText}`}>Download the Source Code</h1>
                <p className={`${styles.pText} ${styles.blackText}`}> Get the full source code on GitHub</p>
            </div>
            <a href="https://github.com/aryanthapa748/NFT-Marketplace-App" target="_blank" rel="noopener noreferrer">
                <button className={styles.btnPrimary}>Source Code</button>
            </a>
            <div className={styles.flexCenter}>
                <img
                src={assets.scene}
                alt="download_png"
                className={styles.fullImg}
                 />

            </div>

        </div>

    </div>
  )
}

export default Download