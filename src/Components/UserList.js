import React from "react";
import styles from "./index.module.css";
import UserCard from "./UserCard";
import fetchUserData from "../services/fetchUserData";
import LoaderSkeleton from "./LoaderSkeleton";
import { AuthContext } from "../context/AuthContext";
import { Navigate, useNavigate } from "react-router-dom";

const UserList = () => {
  const {
    authState: { loggedIn },
  } = React.useContext(AuthContext);

  const [userDetails, setUserDetails] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  const navigate = useNavigate();

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
    if (loggedIn) {
      setTimeout(() => {
        getUserDetails(page);
      }, 1000);
    }
  }, [page, loggedIn]);

  React.useEffect(() => {
    const scrollEvent = window.addEventListener("scroll", () => {
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
        setPage((prevPage) => prevPage + 1);
      }
    });

    return () => window.removeEventListener("scroll", scrollEvent);
  }, []);

  const signOut = () => {
    navigate("/");
  };

  if (!loggedIn) {
    return <Navigate replace to="/" />;
  }

  if (error) {
    return (
      <div className={styles.errorBanner}>
        <span>&#9888;</span> Error fetching users.
      </div>
    );
  }

  return (
    <div className={styles.userlistBox}>
      <button className={styles.signOutBtn} onClick={signOut}>
        Sign Out
      </button>
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
