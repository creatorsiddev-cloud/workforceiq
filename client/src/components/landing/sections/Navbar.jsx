import { Link } from "react-router-dom";

import "../styles/Navbar.css";

function Navbar() {
  return (
    <header className="landing-navbar">

    <div className="landing-logo">

        <div className="landing-logo-icon">
            WI
        </div>

        <div>

            <h2>WorkforceIQ</h2>

            <p>Management System</p>

        </div>

    </div>

    <Link
        to="/login"
        className="login-btn-landing"
    >
        Login
    </Link>

</header>
  );
}

export default Navbar;