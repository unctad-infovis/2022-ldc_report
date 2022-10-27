import React, { useState, useEffect, useRef } from 'react';

// https://www.npmjs.com/package/react-is-visible
import 'intersection-observer';
import IsVisible from 'react-is-visible';

import '../styles/styles.less';

// import Video from './Video.jsx';
import Header from './components/Header.jsx';
import PageNavigation from './components/PageNavigation.jsx';
import Quote from './components/Quote.jsx';
import ProgressIndicator from './components/ProgressIndicator.jsx';
import PhotoHeadline from './components/PhotoHeadline.jsx';
import Recommendations from './components/Recommendations.jsx';
import Footer from './components/Footer.jsx';
// import Figure104 from './figures/Figure1_04.jsx';
// import Figure109 from './figures/Figure1_09.jsx';
// import Figure110 from './figures/Figure1_10.jsx';
// import Figure203 from './figures/Figure2_03.jsx';
// import Figure205a from './figures/Figure2_05a.jsx';
// import Figure205b from './figures/Figure2_05b.jsx';
// import Figure209a from './figures/Figure2_09a.jsx';
// import Figure209b from './figures/Figure2_09b.jsx';

const analytics = window.gtag || undefined;

function App() {
  const appRef = useRef();
  const section1 = useRef();
  const section2 = useRef();
  const section3 = useRef();
  const section4 = useRef();

  const [section1Seen, setSection1Seen] = useState(false);
  const [section2Seen, setSection2Seen] = useState(false);
  const [section3Seen, setSection3Seen] = useState(false);
  const [section4Seen, setSection4Seen] = useState(false);

  const [section1Progress, setSection1Progress] = useState(0);
  const [section2Progress, setSection2Progress] = useState(0);
  const [section3Progress, setSection3Progress] = useState(0);
  const [section4Progress, setSection4Progress] = useState(0);
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const windowHeight = 0;
    setSection1Progress((offset > section1.current.offsetTop - windowHeight) ? (Math.min(((offset - (section1.current.offsetTop - windowHeight)) / section1.current.offsetHeight) * 100, 100)) : 0);
    setSection2Progress((offset > section2.current.offsetTop - windowHeight) ? (Math.min(((offset - (section2.current.offsetTop - windowHeight)) / section2.current.offsetHeight) * 100, 100)) : 0);
    setSection3Progress((offset > section3.current.offsetTop - windowHeight) ? (Math.min(((offset - (section3.current.offsetTop - windowHeight)) / section3.current.offsetHeight) * 100, 100)) : 0);
    setSection4Progress((offset > section4.current.offsetTop - windowHeight) ? (Math.min(((offset - (section4.current.offsetTop - windowHeight)) / section4.current.offsetHeight) * 100, 100)) : 0);
  }, [offset]);

  useEffect(() => {
    if (section1Progress === 100 && section1Seen === false) {
      setSection1Seen(true);
      if (typeof analytics !== 'undefined') {
        analytics('event', 'Scroll', { event_category: '2022-ldc_report', event_label: 'Section 1', transport_type: 'beacon' });
      }
    }
  }, [section1Progress, section1Seen]);

  useEffect(() => {
    if (section2Progress === 100 && section2Seen === false) {
      setSection2Seen(true);
      if (typeof analytics !== 'undefined') {
        analytics('event', 'Scroll', { event_category: '2022-ldc_report', event_label: 'Section 2', transport_type: 'beacon' });
      }
    }
  }, [section2Progress, section2Seen]);

  useEffect(() => {
    if (section3Progress === 100 && section3Seen === false) {
      setSection3Seen(true);
      if (typeof analytics !== 'undefined') {
        analytics('event', 'Scroll', { event_category: '2022-ldc_report', event_label: 'Section 3', transport_type: 'beacon' });
      }
    }
  }, [section3Progress, section3Seen]);

  useEffect(() => {
    if (section4Progress === 100 && section4Seen === false) {
      setSection4Seen(true);
      if (typeof analytics !== 'undefined') {
        analytics('event', 'Scroll', { event_category: '2022-ldc_report', event_label: 'Section 4', transport_type: 'beacon' });
      }
    }
  }, [section4Progress, section4Seen]);

  return (
    <div className="app" ref={appRef}>
      <Header />
      <PageNavigation appRef={appRef} />
      <div className="two_column_layout">
        <div className="left_column">
          <div className="text_container">
            <p className="ingress">
              UNCTAD’s Least Developed Countries Report 2022 published on 3 November says LDCs are the “litmus test” against which history will judge how effectively efforts to make the low-carbon transition consider development needs and countries’ different obligations and capacities to fight climate change.
            </p>
            <IsVisible once>
              {(isVisible) => (
                <p className="ingress">
                  The world’s 46 least developed countries (LDC), home to about 1.1 billion people, have contributed minimally to CO2 emissions. In 2019 they accounted for less than 4% of total world greenhouse gas emissions. Yet over the last 50 years, 69% of worldwide deaths caused by climate-related disasters occurred in LDCs.
                  <span className={`highlight ${(isVisible) ? 'visible' : ''}`} />
                </p>
              )}
            </IsVisible>
            <p className="ingress" />
            <IsVisible once>
              {(isVisible) => (
                <p className="ingress">
                  <span className={`highlight ${(isVisible) ? 'visible' : ''}`}>International support</span>
                  {' '}
                  for LDCs is critical to address intertwined challenges that threaten their development and make them pay a disproportionately high price in addressing climate change.
                </p>
              )}
            </IsVisible>
          </div>
        </div>
        <div className="right_column">
          <Quote />
        </div>
      </div>
      <div className="section_wrapper">
        <ProgressIndicator appRef={appRef} section1Progress={section1Progress} section2Progress={section2Progress} section3Progress={section3Progress} section4Progress={section4Progress} />
        <div ref={section1} className="section_1_container">
          <PhotoHeadline img="" max_width={560} text_upper="Most LDCs depend in single commodity" text_lower="Vulnerable economies" />
          <div className="two_column_layout">
            <div className="left_column">
              <div className="text_container">
                <IsVisible once>
                  {(isVisible) => (
                    <p>
                      LDC economies largely depend on exports of commodities such as minerals, metals and fuels, which entail high CO2 emissions and are often inputs to carbon-intensive global value chains including metal products, cement, fertilizers or electricity.
                      <span className={`highlight ${(isVisible) ? 'visible' : ''}`} />
                    </p>
                  )}
                </IsVisible>
                <p>Between 2018 and 2020, some 80% of the LDCs were classified as commodity-dependent, meaning more than 60% of their merchandise exports consisted of primary products.</p>
                <IsVisible once>
                  {(isVisible) => (
                    <p>
                      Therefore, the global drive to reduce carbon emissions may adversely affect LDC export sectors, the report warns. The more than two thirds of LDCs whose economies depend on the export of high-carbon-emitting commodities could face severe fiscal constraints and loss of economic output should the extraction of such commodities suffer a steep cutback.
                      <span className={`highlight ${(isVisible) ? 'visible' : ''}`} />
                    </p>
                  )}
                </IsVisible>
                <p>The vulnerability caused by LDCs’ narrow export bases and high dependence on food imports has been compounded by the impacts of the war in Ukraine on global markets and the COVID-19 pandemic, which pushed an additional 32 million people in LDCs into extreme poverty (living on less than $1.90 a day) in 2020 alone.</p>
                <p>While boosting LDCs’ export capacity remains critical, UNCTAD urges these countries to use sustainable production methods and invest more in building new productive capacities and expanding their existing ones, especially in low-carbon activities. </p>
                <p>LDCs should also promote domestic value addition and stronger inter-sectoral production linkages, without which further extraction of resources will continue to degrade the environment but fail to redress the underdevelopment resulting from the commodity-dependence trap.</p>
              </div>
            </div>
            <div className="right_column">
              TODO: graph about commodity dependency
              <Recommendations headline="UNCTAD calls for" recommendation_list={['1', '2', '3']} />
            </div>
          </div>
        </div>
        <div ref={section2} className="section_2_container">
          <PhotoHeadline img="" text_upper="Need to boost resilience to climate risks" text_lower="Green transformation" />
          <div className="two_column_layout">
            <div className="left_column">
              <div className="text_container">
                <IsVisible once>
                  {(isVisible) => (
                    <p>
                      The report calls for a “green structural transformation” to reduce poverty in LDCs and enhance their resilience to better manage, adapt and respond to climate risks.
                      <span className={`highlight ${(isVisible) ? 'visible' : ''}`} />
                    </p>
                  )}
                </IsVisible>
                <p>Structural transformation means a transition from low-productivity, labour-intensive production to higher-value-added and higher-productivity economic activities.</p>
                <p>A green structural transformation combines economically, socially and environmentally responsible growth and structural economic transformation. It consists of a transition from carbon-intensive “sunset” sectors to low-carbon “sunrise” economic activities, promoting the efficient use of resources (materials, energy, land, water) along the development path.</p>
                <p>UNCTAD says a green structural transformation is a paramount policy objective for LDCs – and many other (non-LDC) developing countries – because it combines their development imperatives with climate considerations.</p>
                <p>The report raises concern that LDCs, which are marginalized in global trade, now face additional headwinds because of the environmental policies of their trade partners.</p>
                <p>Any trade partners’ policies targeting the carbon emissions generated in the production of exported goods could have a strong dampening impact on LDC exports, even indirectly if LDCs are exempted. </p>
                <IsVisible once>
                  {(isVisible) => (
                    <p>
                      UNCTAD urges the international community to consider the interests of LDCs and avoid policy measures that limit these countries’ policy space and increase the likelihood of pollution havens emerging among them.
                      <span className={`highlight ${(isVisible) ? 'visible' : ''}`} />
                    </p>
                  )}
                </IsVisible>
              </div>
            </div>
            <div className="right_column">
              TODO: graph about green transformation
              <Recommendations headline="UNCTAD calls for" recommendation_list={['1', '2', '3']} />
            </div>
          </div>
        </div>
        <div ref={section3} className="section_3_container">
          <PhotoHeadline img="" text_upper="LDCs need technology transfer and capacity building" text_lower="More finance" />
          <div className="two_column_layout">
            <div className="left_column">
              <div className="text_container">
                <IsVisible once>
                  {(isVisible) => (
                    <p>
                      UNCTAD urges development partners to extend special and differential treatment to LDCs by providing targeted, sufficiently flexible and long-term finance. This entails fulfilling their climate finance commitments and raising their level of ambition on financing targets.
                      <span className={`highlight ${(isVisible) ? 'visible' : ''}`} />
                    </p>
                  )}
                </IsVisible>
                <p>This should ideally be additional to funds from donor countries fulfilling their commitment to provide official development assistance to LDCs corresponding to 0.15% to 0.20% of donors’ gross national income.</p>
                <p>In addition, urgent steps are needed to enhance technology transfer to LDCs and boost their institutional capacities by vastly scaling up technical assistance and capacity-building support to all areas of the low-carbon transition, including data and statistical capabilities.</p>
                <IsVisible once>
                  {(isVisible) => (
                    <p>
                      <span className={`highlight ${(isVisible) ? 'visible' : ''}`} />
                    </p>
                  )}
                </IsVisible>
              </div>
            </div>
            <div className="right_column">
              TODO: graph
              <Recommendations headline="UNCTAD calls for" recommendation_list={['1', '2', '3']} />
            </div>
          </div>
        </div>
        <div ref={section4} className="section_4_container">
          <PhotoHeadline img="" text_upper="LDCs need to put in better taxation" text_lower="Better domestic policies" />
          <div className="two_column_layout">
            <div className="left_column">
              <div className="text_container">
                <IsVisible once>
                  {(isVisible) => (
                    <p>
                      The report says green industrial policies need to include measures to expand the development of local entrepreneurship, increase science, technology and innovation skills, enhance productive capacities, promote research and development, and provide supportive infrastructure.
                      <span className={`highlight ${(isVisible) ? 'visible' : ''}`} />
                    </p>
                  )}
                </IsVisible>
                <p>LDCs can also use public procurement policies to accelerate green structural transformation and induce positive change by economic actors and consumers.</p>
                <p>They should also strengthen their capacities to mobilize domestic resources to help finance their low-carbon transition, since their development financing needs far exceed their official development assistance.</p>
                <p>The report says this will involve revamping taxation, redoubling efforts to reduce and eventually eliminate illicit financial flows and retrofitting the roles of public development banks and central banks.</p>
                <IsVisible once>
                  {(isVisible) => (
                    <p>
                      <span className={`highlight ${(isVisible) ? 'visible' : ''}`} />
                    </p>
                  )}
                </IsVisible>
                <IsVisible once>
                  {(isVisible) => (
                    <p>
                      <span className={`highlight ${(isVisible) ? 'visible' : ''}`} />
                    </p>
                  )}
                </IsVisible>
              </div>
            </div>
            <div className="right_column">
              TODO: graph
              <Recommendations headline="UNCTAD calls for" recommendation_list={['1', '2']} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <noscript>Your browser does not support JavaScript!</noscript>
    </div>
  );
}

export default App;
