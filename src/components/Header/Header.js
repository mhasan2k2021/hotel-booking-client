import "./Header.css";
import React, { useContext } from "react";

import { AuthContext } from "../../Context/UserContext";
import { Link } from "react-router-dom";

const Header = () => {
  const { user, userLogOut } = useContext(AuthContext);

  const handleLogOut = () => {
    userLogOut()
      .then((result) => {})
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light bg ">
        <Link class="navbar-brand " to="/">
          Navbar
        </Link>
        <div
          class="collapse navbar-collapse d-flex justify-content-between align-items-center"
          id="navbarNav"
        >
          <ul class="navbar-nav">
            <li class="nav-item active">
              <Link class="nav-link" to="/">
                Home
              </Link>
            </li>
          </ul>
          <ul className="nav-side">
            <li>
              {user && user?.uid ? (
                <button
                  type="button"
                  class="btn btn-primary"
                  onClick={handleLogOut}
                >
                  Log Out
                </button>
              ) : (
                <>
                  <Link to="/signin">Sign In</Link>
                  <Link to="/signup">
                    <button type="button" class="btn btn-primary">
                      Sign Up
                    </button>
                  </Link>
                </>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
