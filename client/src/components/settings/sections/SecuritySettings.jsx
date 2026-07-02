import "../styles/Settings.css";

function SecuritySettings(){

  return(

    <section className="settings-card">

      <h2>Security</h2>

      <button
        className="settings-btn"
        onClick={()=>alert("Change Password module coming soon.")}
      >

        Change Password

      </button>

    </section>

  );

}

export default SecuritySettings;