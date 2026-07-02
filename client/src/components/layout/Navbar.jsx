import { useLocation } from "react-router-dom";

import {
  FiBell,
  FiSearch,
  FiChevronDown,
  FiMenu,
} from "react-icons/fi";

import "../../styles/Navbar.css";

function Navbar({toggleSidebar}) {

  const location = useLocation();

  const pageTitles = {
    "/dashboard": "Dashboard",
    "/employees": "Employees",
    "/departments": "Departments",
    "/analytics": "Analytics",
    "/activity": "Activity Logs",
    "/profile": "Profile",
    "/settings": "Settings",
  };

  const pageTitle =
    pageTitles[location.pathname] || "WorkforceIQ";

  const today = new Date();

  const formattedDate = today.toLocaleDateString(
    "en-US",
    {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    }
  );

  const handleNotification = () => {

    alert(
      "🔔 Notifications module coming soon!"
    );

  };

  const handleProfile = () => {

    alert(
      "👤 Profile menu coming soon!"
    );

  };

  return (

    <header className="navbar">

      {/* Left */}

      <div className="navbar-left">

  <button
    className="menu-btn"
    onClick={toggleSidebar}
  >
    <FiMenu />
  </button>

  <div>

    <h1>{pageTitle}</h1>

    <p>{formattedDate}</p>

  </div>

</div>

      {/* Center */}

      <div className="navbar-center">

        <div className="search-box">

          <FiSearch className="search-icon"/>

          <input
            type="text"
            placeholder="Search..."
          />

        </div>

      </div>

      {/* Right */}

      <div className="navbar-right">

        <button
          className="notification-btn"
          onClick={handleNotification}
        >

          <FiBell />

          <span className="notification-dot"></span>

        </button>

        <div
          className="admin-profile"
          onClick={handleProfile}
        >

          <div className="admin-avatar">

            A

          </div>

          <div className="admin-info">

            <h4>Admin</h4>

            <p>Administrator</p>

          </div>

          <FiChevronDown />

        </div>

      </div>

    </header>

  );

}

export default Navbar;