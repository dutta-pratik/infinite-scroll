import React from "react";
import styles from "./index.module.css";

const LoaderSkeleton = () => {
  return (
    <div className={styles.skeletonBox}>
      <p className={styles.skeletonTxt}></p>
      <p className={styles.skeletonImg}></p>
    </div>
  );
};

export default LoaderSkeleton;
