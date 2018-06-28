import React from 'react';

export default function SeeMore({ className }) {
  return (
    <div className={`see-more ${className}`}>
      <i className="see-more__arrow" />
    </div>
  );
}
