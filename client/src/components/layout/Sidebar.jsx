import { NavLink, useNavigate } from "react-router-dom";

import {
  FiX,
  FiHome,
  FiUsers,
  FiGrid,
  FiClipboard,
  FiUser,
  FiSettings,
  FiLogOut,
} from "react-icons/fi";

import "../../styles/Sidebar.css";

function Sidebar({ isOpen, closeSidebar }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("admin");

    navigate("/login");

    closeSidebar();
  };

  return (
    <>
      {/* Overlay */}

      {isOpen && (
        <div
          className="sidebar-overlay"
          onClick={closeSidebar}
        ></div>
      )}

      {/* Sidebar */}

      <aside className={`sidebar ${isOpen ? "open" : ""}`}>
        {/* Close Button */}

        <button
          className="close-sidebar"
          onClick={closeSidebar}
        >
          <FiX />
        </button>

        {/* Logo */}

        <div className="sidebar-content">
          <div className="sidebar-logo">
            <div className="logo">WI</div>

            <div className="logo-text">
              <h2>WorkforceIQ</h2>
              <p>Management Platform</p>
            </div>
          </div>

          {/* Navigation */}

          <nav className="sidebar-nav">
            <ul>

              <li>
                <NavLink
                  to="/dashboard"
                  onClick={closeSidebar}
                >
                  <FiHome />
                  Dashboard
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/employees"
                  onClick={closeSidebar}
                >
                  <FiUsers />
                  Employees
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/departments"
                  onClick={closeSidebar}
                >
                  <FiGrid />
                  Departments
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/activity"
                  onClick={closeSidebar}
                >
                  <FiClipboard />
                  Activity Logs
                </NavLink>
              </li>

            </ul>
          </nav>
        </div>

        {/* Bottom */}

        <div className="sidebar-bottom">
          <ul className="bottom-menu">

            <li>
              <NavLink
                to="/profile"
                onClick={closeSidebar}
              >
                <FiUser />
                Profile
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/settings"
                onClick={closeSidebar}
              >
                <FiSettings />
                Settings
              </NavLink>
            </li>

          </ul>

          <button
            className="logout-btn"
            onClick={handleLogout}
          >
            <FiLogOut />
            Logout
          </button>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;