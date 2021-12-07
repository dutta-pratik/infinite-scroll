import "./App.css";
import UserList from "./components/UserList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LogIn from "./screens/Login";
import AuthContextProvider from "./context/AuthContext";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<LogIn />}></Route>
            <Route path="/home" element={<UserList />}></Route>
          </Routes>
        </Router>
      </AuthContextProvider>
    </div>
  );
}

export default App;
