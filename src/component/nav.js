import React from "react";
import logo from "./p1.jpg";

function nav() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a>
            <img
              src={logo}
              width="40"
              height="40"
              alt="logo"
              className="logo"
            ></img>
          </a>
          .<a className="navbar-brand">MOON LIGHT</a>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </>
  );
}

export default nav;
