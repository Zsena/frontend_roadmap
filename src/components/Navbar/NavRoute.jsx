import * as React from "react";
import { Routes, Route,  Link } from "react-router-dom";

import Layout from "./Layout";

export const NavbarRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
};

function Home() {
    return (
      <div className="pt-10">
        <h2 className="text-white text-4xl">Home</h2>
      </div>
    );
  }
  
  function About() {
    return (
      <div className="pt-10">
        <h2 className="text-white text-4xl">About</h2>
      </div>
    );
  }
  
  function Dashboard() {
    return (
      <div className="pt-10">
        <h2 className="text-white text-4xl">Dashboard</h2>
      </div>
    );
  }
  
  function NoMatch() {
    return (
      <div className="pt-10">
        <h2 className="text-white text-4xl">Nothing to see here!</h2>
        <p>
          <Link className="text-teal-500" to="/">Go to the home page</Link>
        </p>
      </div>
    );
  }

export default NavbarRoute;
