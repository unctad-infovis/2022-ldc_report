import React, { /* useState,  useEffect, useRef */ } from 'react';

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
        <div className="download_button anchor_downloads"><a href="#1">Download the report</a></div>
        <div className="footer_elements">
          <div className="footer_element footer_element_1">
            <div className="footer_content anchor_video">
              <h3>Watch the video</h3>
              <div className="iframe_container youtube_iframe">
                <iframe src="" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
              </div>
              <ul>
                <li>
                  <a href="#1" target="_blank" rel="noreferrer">Français</a>
                  {', '}
                  <a href="#1" target="_blank" rel="noreferrer">Español</a>
                  {', '}
                  <a href="#1" target="_blank" rel="noreferrer">العربية</a>
                  {', '}
                  <a href="#1" target="_blank" rel="noreferrer">简体中文</a>
                  {', '}
                  <a href="#1" target="_blank" rel="noreferrer">Русский</a>
                  {', '}
                  <a href="#1" target="_blank" rel="noreferrer">Português</a>
                </li>
              </ul>
            </div>
            <div className="footer_content anchor_podcasts">
              <h3>Podcasts</h3>
              <p>Listen to the Weekly Tradecast episodes that explore some of the main issues in the report</p>
              <div className="iframe_container">
                <iframe title="The Weekly Tradecast by UNCTAD" height="150" width="100%" style={{ border: 'none', minWidth: 'min(100%, 430px)' }} scrolling="no" data-name="pb-iframe-player" src="" allowFullScreen />
              </div>
              <ul className="podcasts_container">
                <li>
                  <span className="icon" />
                  <span className="text"><a href="#1">Podcast 1</a></span>
                </li>
                <li>
                  <span className="icon" />
                  <span className="text"><a href="#1">Podcast 2</a></span>
                </li>
                <li>
                  <span className="icon" />
                  <span className="text"><a href="#1">Podcast 3</a></span>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer_element footer_element_2">
            <div className="footer_content anchor_press">
              <h3>Press material</h3>
              <ul>
                <li>
                  <h4>Press conference</h4>
                  <div className="iframe_container youtube_iframe">
                    <iframe src="" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                  </div>
                  <ul>
                    <li><a href="#1" target="_blank" rel="noreferrer">Download the press conference</a></li>
                  </ul>
                </li>
              </ul>
              <ul>
                <li>
                  <h4>Download the report video</h4>
                  <ul>
                    <li>
                      <a href="#1" target="_blank" rel="noreferrer">English</a>
                      {', '}
                      <a href="#1" target="_blank" rel="noreferrer">Français</a>
                      {', '}
                      <a href="#1" target="_blank" rel="noreferrer">Español</a>
                      {', '}
                      <a href="#1" target="_blank" rel="noreferrer">العربية</a>
                      {', '}
                      <a href="#1" target="_blank" rel="noreferrer">简体中文</a>
                      {', '}
                      <a href="#1" target="_blank" rel="noreferrer">Русский</a>
                      {', '}
                      <a href="#1" target="_blank" rel="noreferrer">Português</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <h4>Read the global press release</h4>
                  <ul>
                    <li>
                      <a href="#1" onClick={(event) => track(event.target.href)}>English</a>
                      {', '}
                      <a href="#1" onClick={(event) => track(event.target.href)}>Français</a>
                      {', '}
                      <a href="#1" onClick={(event) => track(event.target.href)}>Español</a>
                      {', '}
                      <a href="#1" onClick={(event) => track(event.target.href)}>العربية</a>
                      {', '}
                      <a href="#1" onClick={(event) => track(event.target.href)}>简体中文</a>
                      {', '}
                      <a href="#1" onClick={(event) => track(event.target.href)}>Русский</a>
                      {', '}
                      <a href="#1" onClick={(event) => track(event.target.href)}>Português</a>
                    </li>
                  </ul>
                </li>
                <h4>Read the regional press releases</h4>
                <li>
                  Africa
                  <ul>
                    <li>
                      <a href="#1" onClick={(event) => track(event.target.href)}>English</a>
                      {', '}
                      <a href="#1" onClick={(event) => track(event.target.href)}>Français</a>
                    </li>
                  </ul>
                </li>
                <li>
                  Latin America and the Caribbean
                  <ul>
                    <li>
                      <a href="#1" onClick={(event) => track(event.target.href)}>English</a>
                      {', '}
                      <a href="#1" onClick={(event) => track(event.target.href)}>Español</a>
                    </li>
                  </ul>
                </li>
                <li>
                  East and South-East Asia
                  <ul>
                    <li>
                      <a href="#1" onClick={(event) => track(event.target.href)}>English</a>
                      {', '}
                      <a href="#1" onClick={(event) => track(event.target.href)}>简体中文</a>
                    </li>
                  </ul>
                </li>
                <li>
                  South and West Asia
                  <ul>
                    <li>
                      <a href="#1" onClick={(event) => track(event.target.href)}>English</a>
                      {', '}
                      <a href="/system/files/press-material/PR22017_ar_TDR22_South_West_Asia_final.pdf" onClick={(event) => track(event.target.href)}>العربية</a>
                    </li>
                  </ul>
                </li>
              </ul>
              <h4><a href="#1">Download the report</a></h4>
              <div><a href="#1"><img src={`${window.location.href.includes('unctad') ? 'https://storage.unctad.org/2022-ldc_report/' : './'}assets/img/2022-ldc_report_cover-min.png`} alt="TDR 2022 Cover" /></a></div>
            </div>
          </div>
        </div>
      </div>
      <noscript>Your browser does not support JavaScript!</noscript>
    </>
  );
}

export default Footer;
