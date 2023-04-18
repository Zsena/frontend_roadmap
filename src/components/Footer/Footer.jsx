import Layout from "./Layout";
import * as React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../../pages/About/About";
import Main from "../../pages/Main/Main";
import ProjectIdeas from "../../pages/ProjectIdeas/ProjectIdeas";
import RoadMap from "../../pages/RoadMap/RoadMap";
import UsefulLinks from "../../pages/UsefulLinks/UsefulLinks";
import Contact from "../../pages/Contact/Contact";

const Footer = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="rolam" element={<About />} />
        <Route path="roadmap" element={<RoadMap />} />
        <Route path="hasznos-linkek" element={<UsefulLinks />} />
        <Route path="otletek" element={<ProjectIdeas />} />
        <Route path="kapcsolat" element={<Contact />} />
      </Route>
    </Routes>
  );
};

export default Footer;
