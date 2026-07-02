import ProfileHeader from "../sections/ProfileHeader";
import ProfileCard from "../sections/ProfileCard";
import ProfileForm from "../sections/ProfileForm";

import "../styles/Profile.css";

function Profile() {

  // ==========================================
  // Admin Data (Temporary)
  // Replace with API after authentication
  // ==========================================

  const admin = {

    firstName: "Admin",

    lastName: "User",

    email: "admin@workforceiq.com",

    phone: "+91 9876543210",

    role: "Administrator",

    department: "Administration",

    employeeId: "ADM001",

    joinedDate: "15 Jan 2025",

    bio: "Responsible for managing employees, departments and system operations.",

  };

  return (

    <main className="profile-page">

      <ProfileHeader />

      <div className="profile-content">

        <ProfileCard admin={admin} />

        <ProfileForm admin={admin} />

      </div>

    </main>

  );

}

export default Profile;