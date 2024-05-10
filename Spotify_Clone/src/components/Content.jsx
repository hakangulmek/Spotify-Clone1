import React from "react";
import NavBar from "../components/NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "../views/Home";
import Search from "../views/Search";
import Collection from "../views/Collection";

function Content() {
  return (
    <main className="flex-auto overflow-auto">
      <NavBar />
      <div
        className="px-8 pt-5
      "
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Search" element={<Search />} />
          <Route path="/Collection" element={<Collection />} />
        </Routes>
      </div>
    </main>
  );
}

export default Content;
