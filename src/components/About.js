import React from 'react';
import SeeMore from './SeeMore';

const bio = 'Through years of professional experience & a deep passion for building great user experiences, Matt has developed expertise in HTML, CSS, JavaScript, and Ruby -- 4 fundamental building blocks for developing modern, responsive webapps.';

export default function About() {

  return (
    <main className="about">
      <div className="container about__page-1">
        <div className="about__page-1__bio">
          <div className="me-img" />
          <h1>Matt Rigdon</h1>
          <h3 className="text--secondary">Software Developer at Salesforce</h3>
          <p>{bio}</p>
        </div>

        <SeeMore className="align--div-center" />
      </div>
    </main>
  );
}
