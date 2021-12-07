import React from "react";
import styles from "./index.module.css";
import UserCard from "./UserCard";

const UserList = () => {
  return (
    <div className={styles.userlistBox}>
      <h1>Users</h1>
      <UserCard />
    </div>
  );
};

export default UserList;
