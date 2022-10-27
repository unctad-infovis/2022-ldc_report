import React, { /* useState, */ useEffect, useRef } from 'react';

// https://www.npmjs.com/package/react-is-visible
import 'intersection-observer';
import { useIsVisible } from 'react-is-visible';

function Quote() {
  const quoteRef = useRef();

  const isVisible = useIsVisible(quoteRef, { once: true });

  useEffect(() => {
    if (isVisible === true) {
      setTimeout(() => {
        quoteRef.current.querySelectorAll('.quote_container div').forEach(el => el.classList.add('visible'));
      }, 700);
    }
  }, [isVisible]);

  return (
    <>
      <div ref={quoteRef}>
        {(isVisible) && (
          <div className="quote_container">
            <div className="quote_element quote_mark">
              <img src={`${window.location.href.includes('unctad') ? 'https://storage.unctad.org/2022-ldc_report/' : './'}assets/img/icons/2022-ldc_report_quote.png`} alt="Quote icon" />
            </div>
            <div className="quote_element quote_text_upper">
              LDCs disproportionately bear the burden of climate change impacts
            </div>
            <div className="quote_element quote_text_lower">
              The international community must consider their development needs and fully support them to ensure a just, balanced and sustainable low-carbon transition.
            </div>
            <div className="quote_element quote_signature">
              <div className="title">UNCTAD Secretary-General</div>
              <div className="name">Rebeca Grynspan</div>
            </div>
          </div>
        )}
      </div>
      <noscript>Your browser does not support JavaScript!</noscript>
    </>
  );
}

export default Quote;
