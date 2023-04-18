import Layout from "./Layout";
import * as React from "react";
import { Routes, Route } from "react-router-dom";

const Footer = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="*" />
      </Route>
    </Routes>
  );
};

export default Footer;
