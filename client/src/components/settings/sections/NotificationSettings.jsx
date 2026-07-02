import { useState } from "react";

import "../styles/Settings.css";

function NotificationSettings(){

  const [email,setEmail]=useState(true);

  const [activity,setActivity]=useState(true);

  return(

    <section className="settings-card">

      <h2>Notifications</h2>

      <label className="setting-row">

        <span>Email Notifications</span>

        <input
          type="checkbox"
          checked={email}
          onChange={()=>setEmail(!email)}
        />

      </label>

      <label className="setting-row">

        <span>Activity Alerts</span>

        <input
          type="checkbox"
          checked={activity}
          onChange={()=>setActivity(!activity)}
        />

      </label>

    </section>

  );

}

export default NotificationSettings;