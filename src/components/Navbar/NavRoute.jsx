import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import About from "../../pages/About/About";
import Main from "../../pages/Main/Main";
import ProjectIdeas from "../../pages/ProjectIdeas/ProjectIdeas";
import RoadMap from "../../pages/RoadMap/RoadMap";
import UsefulLinks from "../../pages/UsefulLinks/UsefulLinks";

import Layout from "./Layout";

export const NavbarRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="rolam" element={<About />} />
        <Route path="roadmap" element={<RoadMap />} />
        <Route path="hasznos-linkek" element={<UsefulLinks />} />
        <Route path="otletek" element={<ProjectIdeas />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
};

function NoMatch() {
  return (
    <div className="pt-10 text-center">
      <h2 className="text-white text-4xl">
        Hüpp hüpp. 404 Nem található itt semmi.
      </h2>
      <p>
        <Link className="text-teal-500" to="/">
          Irány a főoldalra
        </Link>
      </p>
    </div>
  );
}

export default NavbarRoute;
