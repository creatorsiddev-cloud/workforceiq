import { useState } from "react";

import "../styles/Settings.css";

function SystemSettings(){

  const [language,setLanguage]=useState("English");

  const [timezone,setTimezone]=useState("Asia/Kolkata");

  const handleSave=()=>{

    alert("Settings saved successfully.");

  };

  return(

    <section className="settings-card">

      <h2>System Preferences</h2>

      <div className="setting-group">

        <label>Language</label>

        <select

          value={language}

          onChange={(e)=>setLanguage(e.target.value)}

        >

          <option>English</option>

        </select>

      </div>

      <div className="setting-group">

        <label>Time Zone</label>

        <select

          value={timezone}

          onChange={(e)=>setTimezone(e.target.value)}

        >

          <option>Asia/Kolkata</option>

        </select>

      </div>

      <button

        className="settings-btn"

        onClick={handleSave}

      >

        Save Settings

      </button>

    </section>

  );

}

export default SystemSettings;