import React, { createContext } from "react";

const USERNAME = "Foo";
const PASSWORD = "Bar";

export const AuthContext = createContext();

function reducer(state, action) {
  switch (action.type) {
    case "setLogIn":
      return { ...state, loggedIn: action.payload };
    default:
      return state;
  }
}

const AuthContextProvider = (props) => {
  const [authState, dispatch] = React.useReducer(reducer, {
    loggedIn: false,
  });

  const setLogIn = (flag) => dispatch({ type: "setLogIn", payload: flag });

  const checkAuth = (username, password) => {
    if (username === USERNAME && password === PASSWORD) {
      setLogIn(true);
    }
  };

  return (
    <AuthContext.Provider value={{ authState, checkAuth }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
