import React, { /* useState, */ useEffect, useRef, memo } from 'react';
import PropTypes from 'prop-types';

function Video({ anchorClick }) {
  const videoRef = useRef();
  const mp4Ref = useRef();
  const webmRef = useRef();
  useEffect(() => {
    videoRef.current.src = (window.location.href.includes('unctad.org') ? 'https://storage.unctad.org/2022-ldc_report/' : './') + ((videoRef.current.offsetWidth < 768) ? 'assets/vid/2022-ldc_report_video.mp4' : 'assets/vid/2022-ldc_report_video.mp4');
    mp4Ref.current.src = (window.location.href.includes('unctad.org') ? 'https://storage.unctad.org/2022-ldc_report/' : './') + ((videoRef.current.offsetWidth < 768) ? 'assets/vid/2022-ldc_report_video.mp4' : 'assets/vid/2022-ldc_report_video.mp4');
    webmRef.current.src = (window.location.href.includes('unctad.org') ? 'https://storage.unctad.org/2022-ldc_report/' : './') + ((videoRef.current.offsetWidth < 768) ? 'assets/vid/2022-ldc_report_video.webm' : 'assets/vid/2022-ldc_report_video.webm');
    videoRef.current.poster = (window.location.href.includes('unctad.org') ? 'https://storage.unctad.org/2022-ldc_report/' : './') + ((videoRef.current.offsetWidth < 768) ? 'assets/img/2022-ldc_report_video_poster.png' : 'assets/img/2022-ldc_report_video_poster.png');
    if (!videoRef.current.playing) {
      videoRef.current.play();
    }
  }, []);
  return (
    <div className="video_container">
      <div className="title_container">
        <h4>
          Least Developed Countries Report
          {' '}
          <span className="year">2022</span>
        </h4>
      </div>
      <div className="video_headline_wrapper">
        <div className="video_headline">
          <h3>The low-carbon transition and its</h3>
          <h2>
            daunting
            <br />
            implications
          </h2>
          <h3>for structural transformation</h3>
          <h4 className="unctad_logo">
            <img src="https://unctad.org/sites/default/files/2022-11/unctad_logo_white.svg" alt="UNCTAD logo" />
          </h4>
        </div>
      </div>
      <video autoPlay muted playsInline ref={videoRef} poster="" loop>
        <source src="" type="video/mp4" ref={mp4Ref} />
        <source src="" type="video/webm" ref={webmRef} />
        <track default kind="captions" srcLang="en" src="" />
        Your browser does not support the video tag.
      </video>
      <svg className="arrows" onClick={() => anchorClick('.two_column_layout', 'Arrows')}>
        <path className="a1" d="M0 0 L30 32 L60 0" />
        <path className="a2" d="M0 20 L30 52 L60 20" />
        <path className="a3" d="M0 40 L30 72 L60 40" />
      </svg>
    </div>
  );
}

Video.propTypes = {
  anchorClick: PropTypes.instanceOf(Function).isRequired

};

Video.defaultProps = {

};

export default memo(Video);
