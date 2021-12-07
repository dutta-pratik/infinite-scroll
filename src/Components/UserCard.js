import React from "react";
import styles from "./index.module.css";
import PropTypes from "prop-types";

const UserCard = ({ name, thumbnail }) => {
  return (
    <div className={styles.userCardBox}>
      {name?.title} {name?.first} {name?.last}
      <img className={styles.userCardImg} src={thumbnail} alt="user-img"></img>
    </div>
  );
};

UserCard.propTypes = {
  name: PropTypes.object.isRequired,
  thumbnail: PropTypes.string.isRequired,
};

export default UserCard;
