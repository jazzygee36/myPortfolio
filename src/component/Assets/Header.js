import React, { useEffect, useState } from "react";
import "./Style.css";

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(window.scrollY);
  useEffect(() => {
    const onScroll = () => {
      console.log("triggered");
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", onScroll, false);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };

    // eslint-disable-next-line
  }, []);
  console.log(scrollPosition);

  return (
    <div className="top-header">
      <div className="navbar gono-gone">
        <div className="row">
          <header>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
              <div
                className={`container ${
                  scrollPosition > 634 ? "header-container" : ""
                } `}
              >
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a className="navbar-brand" href="#">
                  {/* <img src={logo3} alt="appear" width="150" /> */}
                </a>
                <button
                  className="navbar-toggler tog navbar-toggler-right"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse  we navbar-collapse justify-content-end"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav mt-3 mb-2">
                    <li className="nav-item">
                      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                      <a
                        className="nav-flow active"
                        aria-current="page"
                        href="#"
                      >
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-flow" href="#about">
                        About
                      </a>
                    </li>

                    <li className="nav-item">
                      <a className="nav-flow" href="#resume">
                        Resume
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-flow" href="#service">
                        Services
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-flow" href="#skills">
                        Skills
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-flow" href="#projects">
                        Projects
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-flow" href="#contact">
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </header>
        </div>
      </div>
    </div>
  );
};

export default Header;
