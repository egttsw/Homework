import { AuthContext } from "context/AuthContext";
import ErrorPage from "pages/errorPage/ErrorPage";
import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import UserList from "./pages/userList/UserList";

function App() {
  const {user} = useContext(AuthContext);

  return (
    <Router>
      <Routes>
        <Route path="/" element={user ? <Home /> : <Register />}>
        </Route> 
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />}>
        </Route>
        <Route path="/register" element={user ? <Navigate to="/" /> : <Register />}>
        </Route>
        <Route path="/userList" element={user ? <UserList /> : <Login />}>
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
