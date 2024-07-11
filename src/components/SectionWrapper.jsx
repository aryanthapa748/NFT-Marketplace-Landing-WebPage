import React from 'react';

import styles from '../styles/global';
import assets from '../assets';
import Button from './Button';

const SectionWrapper = ({ title, description, showBtn, mockupImg, banner, reverse }) => {
  return (
    <div className={`min-h-screen ${styles.section}
     ${reverse ? styles.bgWhite : styles.bgPrimary} 
     ${banner}`}>
      <div className={`flex items-center 
       ${reverse ? styles.boxReverseClass : styles.boxClass} 
       w-11/12 sm:w-full minmd:w-3/4`}>
        <div className={`${styles.descDiv}
        ${reverse ? "fadeRightMini" : "fadeLeftMini"}
        ${reverse ? styles.textRight : styles.textLeft}
        `}>
          <h1 className={`
          ${reverse ? styles.blackText : styles.whiteText}
          ${styles.h1Text}`}>{title}</h1>
          <p className={`
          ${reverse ? styles.blackText : styles.whiteText }
          ${styles.descriptionText}`}>{description}</p>
          {showBtn && (
            <Button
            assetUrl={assets.expo}
            link="https://expo.dev/preview/update?message=final%20search%20bar%20implementation%20to%20search%20all%20the%20NFT's%20present%20in%20the%20dashboard%20of%20the%20application&updateRuntimeVersion=1.0.0&createdAt=2024-07-11T06%3A30%3A16.485Z&slug=exp&projectId=6ac5ad41-99d4-45c0-9608-99e8eead368b&group=c66cfab9-761f-4595-bf80-58d8c47665a8"
            />
          )}
        </div>
        <div
        className={`flex-1 ${styles.flexCenter} p-8 sm:px-0`}
        >
        <img src={mockupImg} alt="mockup" className={`
        ${reverse ? "fadeLeftMini" : "fadeRightMini"}
        ${styles.sectionImg}`} />
        </div>
      </div>
    </div>
  )
}

export default SectionWrapper