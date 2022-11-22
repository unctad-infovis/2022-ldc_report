import React, { /* useState,  useEffect, useRef */ memo } from 'react';

const analytics = window.gtag || undefined;

function Footer() {
  const track = (name) => {
    if (typeof analytics !== 'undefined') {
      analytics('event', 'Press material', {
        event_category: '2022-ldc_report',
        event_label: name,
        transport_type: 'beacon'
      });
    }
  };
  return (
    <>
      <div className="footer_container">
        <h2>What do you want to do next?</h2>
        <div className="download_button anchor_downloads"><a href="https://unctad.org/webflyer/least-developed-countries-report-2022">Download the report</a></div>
        <div className="footer_elements">
          <div className="footer_element footer_element_1">
            <div className="footer_content anchor_video">
              <h3>Watch the video</h3>
              <div className="iframe_container youtube_iframe">
                <iframe src="https://www.youtube.com/embed/d302G7PwTl4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
              </div>
              <ul>
                <li>
                  <a href="https://youtu.be/G8ersQtJIRI" target="_blank" rel="noreferrer">Français</a>
                  {', '}
                  <a href="https://youtu.be/r9VF61nA9gQ" target="_blank" rel="noreferrer">Español</a>
                  {', '}
                  <a href="https://youtu.be/7Ls_-C4ZzwU" target="_blank" rel="noreferrer">العربية</a>
                  {', '}
                  <a href="https://youtu.be/4ci7M66WaYQ" target="_blank" rel="noreferrer">简体中文</a>
                  {', '}
                  <a href="https://youtu.be/IaKjvYQ4ZoI" target="_blank" rel="noreferrer">Русский</a>
                  {', '}
                  <a href="https://youtu.be/KjR9cjBwBcs" target="_blank" rel="noreferrer">Português</a>
                </li>
              </ul>
            </div>
            <div className="footer_content anchor_podcasts">
              <h3>Podcast</h3>
              <p>Listen to the Weekly Tradecast episodes that explore some of the main issues in the report</p>
              <div className="iframe_container">
                <iframe title="18. Bearing the brunt: Why least developed countries need more climate help" height="150" width="100%" style={{ border: 'none', minWidth: 'min(100%, 430px)' }} scrolling="no" data-name="pb-iframe-player" src="https://www.podbean.com/player-v2/?i=fx45m-1302bc7-pb&from=pb6admin&share=1&download=1&rtl=0&fonts=Verdana&skin=f6f6f6&font-color=000000&logo_link=none&btn-skin=60a0c8" allowFullScreen />
              </div>
            </div>
          </div>
          <div className="footer_element footer_element_2">
            <div className="footer_content anchor_press">
              <h3>Press material</h3>
              <ul>
                <li>
                  <h4>Press conference</h4>
                  <div className="iframe_container youtube_iframe">
                    <iframe src="https://www.youtube.com/embed/NVR8KhMy8P4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                  </div>
                  <ul>
                    <li><a href="https://vimeo.com/767263767" target="_blank" rel="noreferrer">Download the press conference</a></li>
                  </ul>
                </li>
              </ul>
              <ul>
                <li>
                  <h4>Download the report video</h4>
                  <ul>
                    <li>
                      <a href="https://vimeo.com/766235566" target="_blank" rel="noreferrer">English</a>
                      {', '}
                      <a href="https://vimeo.com/766664451" target="_blank" rel="noreferrer">Français</a>
                      {', '}
                      <a href="https://vimeo.com/766664605" target="_blank" rel="noreferrer">Español</a>
                      {', '}
                      <a href="https://vimeo.com/766664254" target="_blank" rel="noreferrer">العربية</a>
                      {', '}
                      <a href="https://vimeo.com/766664302" target="_blank" rel="noreferrer">简体中文</a>
                      {', '}
                      <a href="https://vimeo.com/766665486" target="_blank" rel="noreferrer">Русский</a>
                      {', '}
                      <a href="https://vimeo.com/766664533" target="_blank" rel="noreferrer">Português</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <h4>Read the global press release</h4>
                  <ul>
                    <li>
                      <a href="https://unctad.org/press-material/unctad-sets-out-actions-support-least-developed-countries-global-low-carbon" onClick={(event) => track(event.target.href)}>English</a>
                      {', '}
                      <a href="https://unctad.org/fr/press-material/la-cnuced-definit-des-actions-pour-soutenir-les-pays-les-moins-avances-dans-la" onClick={(event) => track(event.target.href)}>Français</a>
                      {', '}
                      <a href="https://unctad.org/es/press-material/la-unctad-establece-acciones-para-apoyar-los-paises-menos-adelantados-en-la" onClick={(event) => track(event.target.href)}>Español</a>
                      {', '}
                      <a href="https://unctad.org/system/files/press-material/pr2022-022_ar.pdf" onClick={(event) => track(event.target.href)}>العربية</a>
                      {', '}
                      <a href="https://unctad.org/system/files/press-material/pr2022-022_ch.pdf" onClick={(event) => track(event.target.href)}>简体中文</a>
                      {', '}
                      <a href="https://unctad.org/system/files/press-material/pr2022-022_ru.pdf" onClick={(event) => track(event.target.href)}>Русский</a>
                      {', '}
                      <a href="https://unctad.org/system/files/press-material/pr2022-022_pt.pdf" onClick={(event) => track(event.target.href)}>Português</a>
                    </li>
                  </ul>
                </li>
              </ul>
              <h4><a href="https://unctad.org/webflyer/least-developed-countries-report-2022">Download the report</a></h4>
              <div><a href="https://unctad.org/webflyer/least-developed-countries-report-2022"><img src={`${window.location.href.includes('unctad') ? 'https://storage.unctad.org/2022-ldc_report/' : './'}assets/img/2022-ldc_report_cover-min.png`} alt="LDC 2022 Cover" /></a></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default memo(Footer);
