import React, { /* useState, useEffect, useRef */ } from 'react';
import PropTypes from 'prop-types';

function PhotoHeadline({
  img, max_width, text_lower, text_upper
}) {
  return (
    <>
      <div className="photo_headline_container" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', backgroundImage: `url(${window.location.href.includes('unctad') ? 'https://storage.unctad.org/2022-ldc_report/' : './'}assets/img/${img})` }}>
        <div className="photo_headline_content">
          <div className="photo_headlines">
            <h2 className="" style={{ maxWidth: max_width }}>{text_upper}</h2>
            <h2 className="highlight">{text_lower}</h2>
          </div>
        </div>
      </div>
      <noscript>Your browser does not support JavaScript!</noscript>
    </>
  );
}

PhotoHeadline.propTypes = {
  img: PropTypes.string.isRequired,
  max_width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  text_upper: PropTypes.string.isRequired,
  text_lower: PropTypes.string.isRequired
};

PhotoHeadline.defaultProps = {
  max_width: 'auto'
};

export default PhotoHeadline;
