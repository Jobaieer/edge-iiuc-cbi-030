import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Favorites from "./pages/Favorites";
import MyShelf from "./pages/MyShelf";

const App = () => {
  return (
    <Router>
      <Dashboard>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Search" element={<Search />} />
          <Route path="/MyShelf" element={<MyShelf/>} />
          <Route path="/Favorites" element={<Favorites/>} />
        </Routes>
      </Dashboard>
    </Router>
  );
};

export default App;
