import React from 'react';

export default function header(props) {
  return (
    <div className="header">
      <button>Previous</button>
      <h2>{props.month}</h2>
      <button>Next</button>
    </div>
  )
}

