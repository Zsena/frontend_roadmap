import * as React from "react";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <section className="my-10">
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <header>
        <nav className="bg-white py-5 fixed top-0 w-full border-b-4 border-teal-500">
          <ul className="flex items-center justify-around">
            <li>
              <Link to="/">Főoldal</Link>
            </li>
            <li>
              <Link to="/roadmap">Roadmap</Link>
            </li>
            <li>
              <Link to="/otletek">Ötletek</Link>
            </li>
            <li>
              <Link target={"_blank"} to="https://coder-girl.blog.hu/tags/frontend">Blog</Link>
            </li>
            <li>
              <Link to="/hasznos-linkek">Hasznos linkek</Link>
            </li>
            <li>
              <Link to="/rolam">Rólam</Link>
            </li>
          </ul>
        </nav>
      </header>
      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet/>
    </section>
  );
};

export default Layout;
