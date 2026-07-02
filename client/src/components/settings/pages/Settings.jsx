import SettingsHeader from "../sections/SettingsHeader";
import AppearanceSettings from "../sections/AppearanceSettings";
import NotificationSettings from "../sections/NotificationSettings";
import SecuritySettings from "../sections/SecuritySettings";
import SystemSettings from "../sections/SystemSettings";

import "../styles/Settings.css";

function Settings() {

  return (

    <main className="settings-page">

      <SettingsHeader />

      <AppearanceSettings />

      <NotificationSettings />

      <SecuritySettings />

      <SystemSettings />

    </main>

  );

}

export default Settings;