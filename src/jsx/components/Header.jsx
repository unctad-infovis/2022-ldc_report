import React, { /* useState, useEffect, useRef */ } from 'react';

function Header() {
  return (
    <>
      <div className="header_container">
        <h2>LDC Report 2022</h2>
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

export default Header;
