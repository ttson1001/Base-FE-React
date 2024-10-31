import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./home-page/home";
import Admin from "./admin-page/admin";
import Login from "./home-page/login";
import Register from "./home-page/register";
import HomeLayout from "./home-page/home-layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
}

export default App;
