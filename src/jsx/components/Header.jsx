import React, { /* useState, useEffect, useRef */memo } from 'react';

import Map from './Map.jsx';

function Header() {
  return (
    <>
      <div className="header_container">
        <div className="header_layout">
          <div className="content_wrapper">
            <h2>
              Least Developed Countries
              <br />
              Report 2022
            </h2>
            <h3>46 countries</h3>
            <h4>33 in Africa, 9 in Asia, 3 in the Pacific and 1 in The Caribbean</h4>
            <h3>1.1 billion people</h3>
            <h4>14% of the world’s population</h4>
            <h3>
              Suffered 69% of climate-related
              <br />
              deaths in the last 50 years
            </h3>
            <h4>But only account for 4% of greenhouse gas emissions</h4>
            <h3>UNCTAD calls for action</h3>
          </div>
          <div className="map_wrapper">
            <Map />
          </div>
        </div>
        <svg className="arrows">
          <path className="a1" d="M0 0 L30 32 L60 0" />
          <path className="a2" d="M0 20 L30 52 L60 20" />
          <path className="a3" d="M0 40 L30 72 L60 40" />
        </svg>
      </div>
      <noscript>Your browser does not support JavaScript!</noscript>
    </>
  );
}

export default memo(Header);
