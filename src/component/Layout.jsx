import React from "react";
import Sidebar from "./Sidebar";
import Content from "./Content";
import Extras from "./Extras";

const Layout = () => (
  <main className="grid-container">
    <Sidebar />
    <Content />
    <Extras />
  </main>
);

export default Layout;
