import React from 'react';

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function Link({ active, route, onNavigate }) {
  return (
    <a
      href="javascript:void(0)"
      className={`navbar__link ${active ? 'navbar__link--active' : ''}`}
      onClick={() => onNavigate(route)}
    >
      {capitalize(route.slice(1))}
    </a>
  );
}

export default function Navbar({ activeRoute, onNavigate }) {
  return (
    <nav className="navbar">
      <a
        href="javascript:void(0)"
        className="navbar__logo"
        onClick={() => onNavigate('/')}
      >
        RWD
      </a>

      <div className="navbar__links-container">
        <Link
          active={activeRoute === '/about'}
          route="/about"
          onNavigate={onNavigate}
        />
        <Link
          active={activeRoute === '/contact'}
          route="/contact"
          onNavigate={onNavigate}
        />
      </div>
    </nav>
  );
}
