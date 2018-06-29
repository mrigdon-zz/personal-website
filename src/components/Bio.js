import React from 'react';

const bio = 'Through years of professional experience & a deep passion for building great user experiences, Matt has developed expertise in HTML, CSS, JavaScript, and Ruby -- 4 fundamental building blocks for developing modern, responsive webapps.';

export default function Bio({ className }) {
  return (
    <div className={`bio ${className}`}>
      <div className="me-img animate--fade-down-in" />
      <h1 className="animate--fade-down-in align--text-center">
        Matt Rigdon
      </h1>
      <h3 className="text--secondary animate--fade-down-in align--text-center">
        Software Developer at Salesforce
      </h3>
      <p className="animate--fade-down-in">{bio}</p>
    </div>
  );
}
