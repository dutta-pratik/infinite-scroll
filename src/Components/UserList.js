import React from "react";
import styles from "./index.module.css";
import UserCard from "./UserCard";
import fetchUserData from "../services/fetchUserData";
import LoaderSkeleton from "./LoaderSkeleton";

const UserList = () => {
  const [userDetails, setUserDetails] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  const getUserDetails = async (page) => {
    try {
      const data = await fetchUserData({ page: page });
      setUserDetails([...userDetails, ...data]);
      setLoading(false);
    } catch (error) {
      setError(true);
    }
  };

  React.useEffect(() => {
    setTimeout(() => {
      getUserDetails(page);
    }, 1000);
  }, [page]);

  React.useEffect(() => {
    const scrollEvent = window.addEventListener("scroll", () => {
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
        setPage((prevPage) => prevPage + 1);
      }
    });

    return () => window.removeEventListener("scroll", scrollEvent);
  }, []);

  if (error) {
    return (
      <div className={styles.errorBanner}>
        <span>&#9888;</span> Error fetching users.
      </div>
    );
  }

  return (
    <div className={styles.userlistBox}>
      <h1>Users</h1>
      {loading ? (
        <LoaderSkeleton />
      ) : (
        <>
          {userDetails.map((user, idx) => {
            return (
              <UserCard name={user.name} thumbnail={user.image} key={idx} />
            );
          })}
          <div>
            <LoaderSkeleton />
          </div>
        </>
      )}
    </div>
  );
};

export default UserList;
