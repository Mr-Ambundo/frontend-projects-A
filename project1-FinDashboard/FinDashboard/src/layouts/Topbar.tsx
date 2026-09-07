import React from 'react';
import { Bell, Search, User } from 'lucide-react';

export const Topbar: React.FC = () => {
  return (
    <header className="h-16 bg-slate-950 border-b border-slate-800 flex items-center justify-between px-8 sticky top-0 z-10">
      {/* Search */}
      <div className="flex-1 max-w-xs">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-500" />
          <input
            type="text"
            placeholder="Search anything..."
            className="w-full bg-slate-900 border border-slate-800 rounded-lg pl-10 pr-4 py-2 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-slate-700 focus:ring-1 focus:ring-purple-500/50"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-6 ml-auto">
        <button className="relative text-slate-400 hover:text-slate-300 transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute -top-2 -right-2 w-2.5 h-2.5 bg-red-500 rounded-full"></span>
        </button>

        <button className="flex items-center gap-2 text-slate-400 hover:text-slate-300 transition-colors">
          <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center">
            <User className="w-4 h-4 text-white" />
          </div>
        </button>
      </div>
    </header>
  );
};
