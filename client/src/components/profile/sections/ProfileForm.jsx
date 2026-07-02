import { useState } from "react";

import "./ProfileForm.css";

function ProfileForm() {

  const [formData, setFormData] = useState({

    firstName: "Admin",

    lastName: "User",

    email: "admin@workforceiq.com",

    phone: "+91 9876543210",

    role: "Administrator",

    bio: "Responsible for managing employees, departments and system operations.",

  });

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value,

    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    alert("✅ Profile updated successfully.");

  };

  return (

    <form
      className="profile-form"
      onSubmit={handleSubmit}
    >

      <h2>Personal Information</h2>

      <div className="form-grid">

        <div className="form-group">

          <label>First Name</label>

          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />

        </div>

        <div className="form-group">

          <label>Last Name</label>

          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />

        </div>

        <div className="form-group">

          <label>Email</label>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />

        </div>

        <div className="form-group">

          <label>Phone</label>

          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />

        </div>

        <div className="form-group full-width">

          <label>Role</label>

          <input
            type="text"
            name="role"
            value={formData.role}
            onChange={handleChange}
          />

        </div>

      </div>

      <hr className="profile-divider" />

      <h2>About</h2>

      <div className="form-group">

        <label>Bio</label>

        <textarea

          rows="5"

          name="bio"

          value={formData.bio}

          onChange={handleChange}

        />

      </div>

      <div className="form-actions">

        <button type="submit">

          Save Changes

        </button>

      </div>

    </form>

  );

}

export default ProfileForm;