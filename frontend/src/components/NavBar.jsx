import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.jpg';
import { Map, QrCode, Star, MessageSquare, Camera } from 'lucide-react';

const navItems = [
  { to: '/find', label: 'Find', icon: <Map size={16} /> },
  { to: '/scanner', label: 'Scanner', icon: <QrCode size={16} /> },
  { to: '/feedback', label: 'Feedback', icon: <Star size={16} /> },
  { to: '/complaint', label: 'Complaint', icon: <MessageSquare size={16} /> },
  { to: '/cleaner', label: 'Cleaner', icon: <Camera size={16} /> },
];

const Navbar = () => {
  return (
    <nav className="bg-[#1C1C1C] border-b border-[#C0C0C0] sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">

          {/* Logo + Title */}
          <a href="/" className="flex items-center space-x-3">
           <img className="h-10 w-auto" src={logo} alt="React Jobs" />
            <span className="text-[#EAEAEA] text-lg font-bold font-display">Digi-Sulabh</span>
          </a>

          {/* Navigation Links */}
          <div className="flex space-x-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `flex items-center gap-1 rounded-lg px-3 py-2 font-medium transition-all duration-300 ${
                    isActive
                      ? 'bg-[#3F51B5] text-[#EAEAEA] shadow-[0_0_8px_#3F51B5]'
                      : 'text-[#A9A9A9] hover:text-[#EAEAEA] hover:bg-[#2E2E2E] hover:shadow-[0_0_5px_#3F51B5]/20'
                  }`
                }
              >
                {item.icon}
                {item.label}
              </NavLink>
            ))}
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
