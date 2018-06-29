import React from 'react';
import SeeMore from './SeeMore';
import Bio from './Bio';

function scrollTo(page) {
  document.querySelector(`.about__page-${page}`).scrollIntoView({
    behavior: 'smooth'
  });
}

export default function About() {
  return (
    <main className="about">
      <div className="about__page-1 container">
        <Bio className="about__page-1__bio" />

        <SeeMore
          className="align--div-center about__page-1__see-more"
          onClick={() => scrollTo(2)}
        />
      </div>

      <div className="about__page-2">
        <h2>Skills & Experience</h2>
      </div>
    </main>
  );
}
