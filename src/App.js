import "./App.css";
import UserList from "./components/UserList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LogIn from "./screens/Login";
import AuthContextProvider from "./context/AuthContext";

function App() {
  return (
    <AuthContextProvider>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<LogIn />}></Route>
            <Route path="/home" element={<UserList />}></Route>
          </Routes>
        </Router>
      </div>
    </AuthContextProvider>
  );
}

export default App;
