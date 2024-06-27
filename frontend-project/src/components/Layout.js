import React from "react";
import { Navbar } from "react-bootstrap";

import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <div className="d-flex">
      <div id="sidebar"></div>

      <div className="flex-grow-1">
        <Navbar bg="light" expand="lg" className="mb-3"></Navbar>
        <div className="container-fluid">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
