import React from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import styles from "./login.module.css";

const LogIn = () => {
  const [username, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();
  const {
    checkAuth,
    authState: { loggedIn },
  } = React.useContext(AuthContext);

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
    <div className={styles.loginBox}>
      <h1>Log In</h1>
      <form>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          placeholder="use Foo as username"
          onChange={handleChange}
        ></input>

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="use Bar as password"
          onChange={handleChange}
        ></input>

        <button onClick={handleSubmit}>LogIn</button>
      </form>
    </div>
  );
};

export default LogIn;
