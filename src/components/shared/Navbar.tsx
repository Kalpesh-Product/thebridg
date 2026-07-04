import { Link, useLocation } from 'react-router';

const navItems = [
  { label: 'OUR COMPANIES', path: '/companies' },
  { label: 'OUR TEAM', path: '/team' },
  { label: 'CONCEPTS', path: '/concepts' },
  { label: 'CONNECT', path: '/connect' },
  { label: 'INVEST', path: '/invest' },
  { label: 'CAREERS', path: '/careers' },
];

export default function Navbar() {
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => {
    if (path === '/companies' && (currentPath === '/companies' || currentPath === '/companies-list' || currentPath.startsWith('/company/'))) {
      return true;
    }
    if (path === '/team' && (currentPath === '/team' || currentPath.startsWith('/team/'))) {
      return true;
    }
    return currentPath === path;
  };

  return (
    <nav className="w-full relative" style={{ backgroundColor: '#FFF0EB' }}>
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 py-3 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold tracking-tight" style={{ color: '#1A1A1A' }}>
          BRIDG
        </Link>
        <div className="hidden md:flex items-center gap-5 lg:gap-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-link ${isActive(item.path) ? 'active' : ''}`}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <MobileMenu isActive={isActive} />
      </div>
      <div className="max-w-[1800px] mx-auto px-6 md:px-12">
        <div className="w-full h-0.5" style={{ backgroundColor: '#1A1A1A' }} />
      </div>
    </nav>
  );
}

function MobileMenu({ isActive }: { isActive: (path: string) => boolean }) {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="md:hidden">
      <button onClick={() => setOpen(!open)} className="p-2">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1A1A1A" strokeWidth="2">
          {open ? (
            <>
              <line x1="6" y1="6" x2="18" y2="18" />
              <line x1="6" y1="18" x2="18" y2="6" />
            </>
          ) : (
            <>
              <line x1="4" y1="7" x2="20" y2="7" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="17" x2="20" y2="17" />
            </>
          )}
        </svg>
      </button>
      {open && (
        <div className="absolute top-full left-0 right-0 z-50 p-6 shadow-lg" style={{ backgroundColor: '#FFF0EB' }}>
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setOpen(false)}
              className={`block py-3 nav-link ${isActive(item.path) ? 'active' : ''}`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

import React from 'react';
