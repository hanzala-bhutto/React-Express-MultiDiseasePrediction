import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Diabetes from "./pages/Diabetes";
import Heart from "./pages/Heart";
import User from "./pages/User";
import Layout from "./pages/Layout";
import Signin from "./pages/Signin";

const App = () => {
  return (
    <div>
        <Routes>
          <Route path="/signin" element={<Signin />} />
          <Route path="/" element={<Layout />} >            
            <Route index element={<Dashboard />} />
            <Route path="/user" element={<User />} />
            <Route path="/heart" element={<Heart />} />
            <Route path="/diabetes" element={<Diabetes />} />
          </Route>
        </Routes>
    </div>
  );
};

export default App;
