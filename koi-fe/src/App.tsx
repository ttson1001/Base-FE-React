import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./home-page/home";
import Admin from "./admin-page/admin";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
}

export default App;
