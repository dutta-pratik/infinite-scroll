import React from "react";
import Enzyme, { shallow, mount, render } from "enzyme";
import "regenerator-runtime/runtime";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";
import App from "./App";
import LogIn from "./screens/Login";
import { MemoryRouter, BrowserRouter as Router } from "react-router-dom";
import AuthContextProvider, { AuthContext } from "./context/AuthContext";
import UserList from "./components/UserList";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`);

const authStateInit = {
  loggedIn: false,
  checkAuth: jest.fn(),
};
const authStateLogIn = {
  loggedIn: false,
  checkAuth: jest.fn(),
};

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => ({
    navigate: jest.fn(),
  }),
}));

test("App should render without error", () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toBeTruthy();
});

describe("LogIn page", () => {
  test("Login Should render without error", () => {
    const wrapper = shallow(
      <MemoryRouter>
        <LogIn />
      </MemoryRouter>
    );
    expect(wrapper).toBeTruthy();
  });
  test("login page should have username and password fields", () => {
    const wrapper = mount(
      <AuthContextProvider value={authStateInit}>
        <LogIn />
      </AuthContextProvider>
    );
    const loginField = findByTestAttr(wrapper, "username-field");
    const passwordField = findByTestAttr(wrapper, "password-field");
    expect(loginField.length).toBe(1);
    expect(passwordField.length).toBe(1);
  });

  test("login page should contain log in button", () => {
    const wrapper = mount(
      <AuthContextProvider value={authStateInit}>
        <LogIn />
      </AuthContextProvider>
    );
    const loginBtn = findByTestAttr(wrapper, "loginBtn");

    expect(loginBtn.length).toBe(1);
  });
});
