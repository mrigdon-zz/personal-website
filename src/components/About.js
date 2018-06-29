import React from 'react';
import SeeMore from './SeeMore';

const bio = 'Through years of professional experience & a deep passion for building great user experiences, Matt has developed expertise in HTML, CSS, JavaScript, and Ruby -- 4 fundamental building blocks for developing modern, responsive webapps.';

function scrollTo(page) {
  document.querySelector(`.about__page-${page}`).scrollIntoView({
    behavior: 'smooth'
  });
}

export default function About() {
  return (
    <main className="about">
      <div className="container about__page-1">
        <div className="about__page-1__bio">
          <div className="me-img animate--fade-down-in" />
          <h1 className="animate--fade-down-in align--text-center">
            Matt Rigdon
          </h1>
          <h3 className="text--secondary animate--fade-down-in align--text-center">
            Software Developer at Salesforce
          </h3>
          <p className="animate--fade-down-in">{bio}</p>
        </div>

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
