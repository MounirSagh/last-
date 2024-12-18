import axios from "axios";
import { useState, useEffect } from "react";
import {Routes, Route } from "react-router-dom";
import NoPage from "../pages/nopage";
import Dashboard from "../pages/dashboard";
import Layout from "../pages/layout";
import Add from "../pages/add";

function App() {

  return (
    <main className="flex-1 h-screen w-screen">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="/add" element={<Add />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;