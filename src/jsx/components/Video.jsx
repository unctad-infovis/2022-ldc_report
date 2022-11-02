import React, { /* useState, */ useEffect, useRef, memo} from 'react';

function Video() {
  const videoRef = useRef();
  const mp4Ref = useRef();
  const webmRef = useRef();
  useEffect(() => {
    videoRef.current.src = (window.location.href.includes('unctad') ? 'https://storage.unctad.org/2022-ldc_report/' : './') + ((videoRef.current.offsetWidth < 768) ? 'assets/vid/2022-ldc_report_banner_animation_11.mp4' : 'assets/vid/2022-ldc_report_banner_animation_169.mp4');
    mp4Ref.current.src = (window.location.href.includes('unctad') ? 'https://storage.unctad.org/2022-ldc_report/' : './') + ((videoRef.current.offsetWidth < 768) ? 'assets/vid/2022-ldc_report_banner_animation_11.mp4' : 'assets/vid/2022-ldc_report_banner_animation_169.mp4');
    webmRef.current.src = (window.location.href.includes('unctad') ? 'https://storage.unctad.org/2022-ldc_report/' : './') + ((videoRef.current.offsetWidth < 768) ? 'assets/vid/2022-ldc_report_banner_animation_11.webm' : 'assets/vid/2022-ldc_report_banner_animation_169.webm');
    videoRef.current.poster = (window.location.href.includes('unctad') ? 'https://storage.unctad.org/2022-ldc_report/' : './') + ((videoRef.current.offsetWidth < 768) ? 'assets/img/2022-ldc_report_banner_animation_11.jpg' : 'assets/img/2022-ldc_report_banner_animation_169.jpg');
    if (!videoRef.current.playing) {
      videoRef.current.play();
    }
  }, []);
  return (
    <>
      <div className="video_container">
        {
        // eslint-disable-next-line
        <video autoPlay muted playsInline ref={videoRef} poster="">
          <source src="" type="video/mp4" ref={mp4Ref} />
          <source src="" type="video/webm" ref={webmRef} />
          <track default kind="captions" srcLang="en" src="" />
          Your browser does not support the video tag.
        </video>
        }

      </div>
      <noscript>Your browser does not support JavaScript!</noscript>
    </>
  );
}

export default memo(Video);
