import React from 'react';
import logo from '../images/logo.png';

export default function Home() {
  return (
    <main className="home animate--fade-in">
      <img className="home__logo animate--fade-down-in" src={logo} />
    </main>
  );
}
