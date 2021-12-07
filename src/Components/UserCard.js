import React from "react";
import styles from "./index.module.css";

const UserCard = () => {
  return (
    <div className={styles.userCardBox}>
      Pratik Dutta
      <img
        className={styles.userCardImg}
        src="https://randomuser.me/api/portraits/thumb/men/75.jpg"
      ></img>
    </div>
  );
};

export default UserCard;
