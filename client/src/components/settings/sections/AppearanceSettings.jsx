import { useState } from "react";

import "../styles/Settings.css";

function AppearanceSettings() {

  const [darkMode,setDarkMode]=useState(false);

  return(

    <section className="settings-card">

      <h2>Appearance</h2>

      <label className="setting-row">

        <span>Dark Mode</span>

        <input
          type="checkbox"
          checked={darkMode}
          onChange={()=>{

            setDarkMode(!darkMode);

            alert("Dark Mode coming soon.");

          }}
        />

      </label>

    </section>

  );

}

export default AppearanceSettings;