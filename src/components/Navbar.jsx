import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "../assets/css/navbar.css";
import logo from "../assets/img/logo.png";
import menuIcon from "../assets/img/menu-icon.svg";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 2);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
    <nav
      className={`navbar navbar-expand-lg navbar-dark fixed-top ${
        scrolled ? "scrolled" : ""
      }`}
    >
      <div className="container">
        {/* Logo */}
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Logo" className="company-logo" />
        </Link>

        <button
          className="navbar-toggler border-0 shadow-none"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#navbarMenu"
        >
          <img src={menuIcon} alt="Menu" className="menu-icon" />
        </button>

        <div className="offcanvas offcanvas-end" tabIndex="-1" id="navbarMenu">
          <div className="offcanvas-header d-lg-none">
            <img src={logo} alt="Logo" className="company-logo" />

            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
            ></button>
          </div>

          <div className="offcanvas-body">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About Us
                </Link>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#!"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  Services
                </a>

                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/web-development">
                      Web Development
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/app-development">
                      Mobile Development
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/digital-marketing">
                      Digital Marketing
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/email-support">
                      Email Support
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#!"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  Explore
                </a>

                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/careers">
                      Career
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/performancemarketing">
                      Performance Marketing
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/blog">
                      Blog
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>

            {/* <button className="btn project-btn">Post a Project</button> */}

            <Link className="project-btn" to="/quote">
              Post a Project
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
