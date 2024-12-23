import React, { useState } from 'react';
import { Bell, Shield, Moon } from 'lucide-react';
import SettingItem from './SettingItem';

const SettingsPanel: React.FC = () => {
  const [settings, setSettings] = useState({
    emailNotifications: false,
    pushNotifications: true,
    darkMode: false,
    twoFactor: false,
  });

  const handleSettingChange = (key: keyof typeof settings) => (value: boolean) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-6">Settings</h2>
        
        <div className="space-y-6">
          <section>
            <h3 className="text-lg font-medium mb-4">Notifications</h3>
            <div className="space-y-4">
              <SettingItem
                icon={Bell}
                label="Email Notifications"
                checked={settings.emailNotifications}
                onChange={handleSettingChange('emailNotifications')}
              />
              <SettingItem
                icon={Bell}
                label="Push Notifications"
                checked={settings.pushNotifications}
                onChange={handleSettingChange('pushNotifications')}
              />
            </div>
          </section>

          <section>
            <h3 className="text-lg font-medium mb-4">Appearance</h3>
            <SettingItem
              icon={Moon}
              label="Dark Mode"
              checked={settings.darkMode}
              onChange={handleSettingChange('darkMode')}
            />
          </section>

          <section>
            <h3 className="text-lg font-medium mb-4">Security</h3>
            <SettingItem
              icon={Shield}
              label="Two-Factor Authentication"
              checked={settings.twoFactor}
              onChange={handleSettingChange('twoFactor')}
            />
          </section>
        </div>
      </div>
    </div>
  );
};

export default SettingsPanel;