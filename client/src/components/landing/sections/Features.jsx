import {
  FaUsers,
  FaBuilding,
  FaClipboardList,
} from "react-icons/fa";

import "../styles/Features.css";

function Features() {
  return (
    <section className="features">

      <div className="section-title">

        <h2>Core Features</h2>

        <p>
          Everything you need to manage your workforce.
        </p>

      </div>

      <div className="features-grid">

        <div className="feature-card">

          <div className="feature-icon">
            <FaUsers />
          </div>

          <h3>Employee Management</h3>

          <p>
            Add, update, search and manage employee
            records efficiently.
          </p>

        </div>

        <div className="feature-card">

          <div className="feature-icon">
            <FaBuilding />
          </div>

          <h3>Department Management</h3>

          <p>
            Organize departments and assign managers
            with ease.
          </p>

        </div>

        <div className="feature-card">

          <div className="feature-icon">
            <FaClipboardList />
          </div>

          <h3>Activity Logs</h3>

          <p>
            Monitor important actions performed
            throughout the system.
          </p>

        </div>

      </div>

    </section>
  );
}

export default Features;