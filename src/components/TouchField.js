import React from "react";

import "./TouchField.css";

const TouchTrack = () => (
  <React.Fragment>
    <rect x="15" y="20" width="10" height="60" fill="#131712" />
    <rect x="20" y="15" width="60" height="10" fill="#131712" />
    <rect x="20" y="75" width="60" height="10" fill="#131712" />
    <rect x="75" y="20" width="10" height="60" fill="#131712" />
  </React.Fragment>
);

const TouchField = () => (
  <div className="touch-field">
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <TouchTrack />

      <circle cx="20" cy="20" r="10" fill="#36642F" />
      <circle cx="80" cy="20" r="10" fill="#36642F" />
      <circle cx="80" cy="80" r="10" fill="#36642F" />
      <circle cx="20" cy="80" r="10" fill="#36642F" />
    </svg>
  </div>
);

export default TouchField;
