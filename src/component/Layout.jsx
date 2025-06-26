import React from "react";
import Sidebar from "./Sidebar";
import Content from "./content";
import Extras from "./Extras";

const Layout = () => (
  <main className="grid-container">
    <Sidebar />
    <Content />
    <Extras />
  </main>
);

export default Layout;
