import "./ProfileCard.css";

function ProfileCard() {
  return (
    <aside className="profile-card">

      <div className="profile-top">

        <div className="profile-avatar">
          A
        </div>

        <div className="profile-user">

          <h2>Admin</h2>

          <p>System Administrator</p>

        </div>

      </div>

      <div className="profile-divider"></div>

      <div className="profile-info">

        <div>
          <span>Email</span>
          <strong>admin@workforceiq.com</strong>
        </div>

        <div>
          <span>Department</span>
          <strong>Administration</strong>
        </div>

        <div>
          <span>Employee ID</span>
          <strong>ADM001</strong>
        </div>

        <div>
          <span>Joined</span>
          <strong>15 Jan 2025</strong>
        </div>

      </div>

    </aside>
  );
}

export default ProfileCard;