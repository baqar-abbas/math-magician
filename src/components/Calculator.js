import React from 'react';
import ChildComponent from './ChildComponent';

export default function Calculator() {
  return (
    <div className="calcDiv">
      <textarea name="calcScreen" id="calcScreen" className="calcScreen" value={0} readOnly />
      <ChildComponent />
    </div>
  );
}
