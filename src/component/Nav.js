import React, { useState } from "react";
import logo from "./p1.jpg";

function Nav() {
  // let [SearchVal, setSearchVal] = useState("AAA");
  const [val1, setval1] = useState(0);

  const SearchHandler = (Data) => {
    console.log(Data);
  };

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
              //   value={val1}
              //   onChange={() => setval1((e) => e.targe.value)}
            />
            <button className="btn btn-outline-success mx-4">
              <i className="bi bi-cart-plus-fill"></i>
            </button>
          </form>
        </div>
      </nav>
    </>
  );
}

export default Nav;
