import React, { useState } from 'react';
import { Card } from '../../components/ui/Card.tsx';
import { Toggle, Bell, Lock, Moon, User } from 'lucide-react';

const Settings: React.FC = () => {
  const [settings, setSettings] = useState({
    notifications: true,
    darkMode: true,
    twoFactor: false,
    currency: 'USD',
  });

  const handleToggle = (key: keyof typeof settings) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-slate-100">Settings</h1>
        <p className="text-slate-400 mt-2">Customize your dashboard and account preferences.</p>
      </div>

      <Card>
        <h2 className="text-lg font-semibold text-slate-100 mb-4">Account Settings</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-slate-800/50 rounded-lg">
            <div className="flex items-center gap-3">
              <User className="w-5 h-5 text-purple-400" />
              <div>
                <p className="font-medium text-slate-100">Email Address</p>
                <p className="text-sm text-slate-400">user@example.com</p>
              </div>
            </div>
            <button className="text-sm px-3 py-1 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors">Edit</button>
          </div>
          <div className="flex items-center justify-between p-4 bg-slate-800/50 rounded-lg">
            <div>
              <p className="font-medium text-slate-100">Password</p>
              <p className="text-sm text-slate-400">Last changed 3 months ago</p>
            </div>
            <button className="text-sm px-3 py-1 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors">Change</button>
          </div>
        </div>
      </Card>

      <Card>
        <h2 className="text-lg font-semibold text-slate-100 mb-4">Preferences</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-slate-800/50 rounded-lg">
            <div className="flex items-center gap-3">
              <Bell className="w-5 h-5 text-blue-400" />
              <div>
                <p className="font-medium text-slate-100">Notifications</p>
                <p className="text-sm text-slate-400">Receive alerts for budget warnings</p>
              </div>
            </div>
            <button onClick={() => handleToggle('notifications')} className={`w-12 h-6 rounded-full transition-colors ${settings.notifications ? 'bg-purple-600' : 'bg-slate-700'}`}></button>
          </div>

          <div className="flex items-center justify-between p-4 bg-slate-800/50 rounded-lg">
            <div className="flex items-center gap-3">
              <Moon className="w-5 h-5 text-indigo-400" />
              <div>
                <p className="font-medium text-slate-100">Dark Mode</p>
                <p className="text-sm text-slate-400">Always enabled</p>
              </div>
            </div>
            <button onClick={() => handleToggle('darkMode')} className={`w-12 h-6 rounded-full transition-colors ${settings.darkMode ? 'bg-purple-600' : 'bg-slate-700'}`}></button>
          </div>

          <div className="flex items-center justify-between p-4 bg-slate-800/50 rounded-lg">
            <div className="flex items-center gap-3">
              <Lock className="w-5 h-5 text-red-400" />
              <div>
                <p className="font-medium text-slate-100">Two-Factor Authentication</p>
                <p className="text-sm text-slate-400">Enhance account security</p>
              </div>
            </div>
            <button onClick={() => handleToggle('twoFactor')} className={`w-12 h-6 rounded-full transition-colors ${settings.twoFactor ? 'bg-purple-600' : 'bg-slate-700'}`}></button>
          </div>

          <div className="flex items-center justify-between p-4 bg-slate-800/50 rounded-lg">
            <div>
              <p className="font-medium text-slate-100">Currency</p>
              <p className="text-sm text-slate-400">Display format</p>
            </div>
            <select value={settings.currency} onChange={(e) => setSettings((prev) => ({ ...prev, currency: e.target.value }))} className="bg-slate-700 border border-slate-600 rounded-lg px-3 py-1 text-slate-100 focus:outline-none focus:border-purple-500">
              <option value="USD">USD ($)</option>
              <option value="EUR">EUR (€)</option>
              <option value="GBP">GBP (£)</option>
              <option value="JPY">JPY (¥)</option>
            </select>
          </div>
        </div>
      </Card>

      <Card>
        <h2 className="text-lg font-semibold text-slate-100 mb-4">Danger Zone</h2>
        <button className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-2 rounded-lg transition-colors">Delete Account</button>
      </Card>

      <div className="flex gap-3">
        <button className="flex-1 bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 rounded-lg transition-colors">Save Changes</button>
        <button className="flex-1 bg-slate-700 hover:bg-slate-600 text-slate-100 font-medium py-2 rounded-lg transition-colors">Cancel</button>
      </div>
    </div>
  );
};

export default Settings;
