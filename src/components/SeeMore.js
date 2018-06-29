import React from 'react';

export default function SeeMore({ className, onClick }) {
  return (
    <div className={`see-more ${className}`} onClick={onClick}>
      <i className="see-more__arrow" />
    </div>
  );
}
