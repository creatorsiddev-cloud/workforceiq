import { Link } from "react-router-dom";
import dashboardPreview from "../../../assets/images/dashboard-preview.png";

import "../styles/Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <span className="hero-badge">WorkforceIQ V1</span>

        <h1>
          Employee & Department
          <br />
          Management System
        </h1>

        <p>
          WorkforceIQ helps organizations manage employees, departments and
          activity logs through a clean, modern and responsive dashboard.
        </p>

        <Link to="/login" className="hero-btn">
          Login to Dashboard
        </Link>
      </div>

      <div className="hero-right">
        <div className="dashboard-preview">
          <img
            src={dashboardPreview}
            alt="WorkforceIQ Dashboard"
            className="dashboard-image"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
