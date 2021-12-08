import React from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import styles from "./login.module.css";

const LogIn = () => {
  const [username, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const {
    checkAuth,
    authState: { loggedIn },
  } = React.useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    if (e.target.id === "username") {
      setUserName(e.target.value);
    } else if (e.target.id === "password") {
      setPassword(e.target.value);
    }
  };

  const handleSubmit = () => {
    checkAuth(username, password);
  };

  if (loggedIn) {
    navigate("/home");
  }

  return (
    <div className={styles.loginBox} data-test="login">
      <h1>Log In</h1>
      <form>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          placeholder="use Foo as username"
          onChange={handleChange}
          data-test="username-field"
          value={username}
        ></input>

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="use Bar as password"
          onChange={handleChange}
          data-test="password-field"
          value={password}
        ></input>

        <button data-test="loginBtn" onClick={handleSubmit}>
          LogIn
        </button>
      </form>
    </div>
  );
};

export default LogIn;
