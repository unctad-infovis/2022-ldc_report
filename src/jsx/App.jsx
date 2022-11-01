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
import Figure101 from './figures/Figure1_01.jsx';
import Figure203b from './figures/Figure2_03b.jsx';
import Figure304a from './figures/Figure3_04a.jsx';

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
              There are currently 46 economies designated by the UN as the least developed countries (LDCs), entitling them to preferential market access, aid, technological capabilities-building and special technical assistance, among other concessions and international support measures.
            </p>
            <IsVisible once>
              {(isVisible) => (
                <p className="ingress">
                  UNCTAD’s Least Developed Countries Report 2022 published on 3 November says LDCs are the “litmus test” against which history will judge how effectively efforts to make the low-carbon transition consider development needs and countries’ different obligations and capacities to fight climate change.
                  <span className={`highlight ${(isVisible) ? 'visible' : ''}`} />
                </p>
              )}
            </IsVisible>
            <p className="ingress">
              Home to about 1.1 billion people or 14% of the global population, LDCs have contributed minimally to CO2 emissions. In 2019 they accounted for less than 4% of total world greenhouse gas emissions. Yet over the last 50 years, 69% of worldwide deaths caused by climate-related disasters occurred in LDCs.
            </p>
            <IsVisible once>
              {(isVisible) => (
                <p className="ingress">
                  <span className={`highlight ${(isVisible) ? 'visible' : ''}`} />
                  International support for this group of the world’s most vulnerable economies is critical to address intertwined challenges that threaten their development, challenge their participation in global trade and make them pay a disproportionately high price in addressing climate change.
                </p>
              )}
            </IsVisible>
          </div>
        </div>
        <div className="right_column">
          <Quote author_name="Rebeca Grynspan" author_title="UNCTAD Secretary-General" first_line="LDCs disproportionately bear the burden of climate change impacts" second_line="The international community must consider their development needs and fully support them to ensure a just, balanced and sustainable low-carbon transition." />
          <Quote author_name="Sheikh Hasina" author_title="Prime minister of Bangladesh" first_line="Climate finance, technology transfer and burden-sharing mechanisms are overdue" second_line="It's critical to deliver on LDCs' call for meaningful climate actions by developed and emerging economies are delivered" />
        </div>
      </div>
      <div className="section_wrapper">
        <ProgressIndicator appRef={appRef} section1Progress={section1Progress} section2Progress={section2Progress} section3Progress={section3Progress} section4Progress={section4Progress} />
        <div ref={section1} className="section_1_container">
          <PhotoHeadline img="2022-ldc_report_section1-min.jpg" max_width={560} text_upper="LDCs are highly vulnerable due to " text_lower="commodity dependence" />
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
                <p>Between 2018 and 2020, some 80% of the LDCs were classified as commodity-dependent, meaning more than 60% of their merchandise exports consisted of primary products. In the global low-carbon transition, these countries could face severe fiscal constraints and loss of economic output should the extraction of such commodities suffer a steep cutback.</p>
                <IsVisible once>
                  {(isVisible) => (
                    <p>
                      The vulnerability caused by LDCs’ narrow export bases and high dependence on food imports has been compounded by the impacts of the war in Ukraine on global markets and the COVID-19 pandemic, which pushed an additional 32 million people in LDCs into extreme poverty (living on less than $1.90 a day) in 2020 alone.
                      <span className={`highlight ${(isVisible) ? 'visible' : ''}`} />
                    </p>
                  )}
                </IsVisible>
                <p>While boosting LDCs’ export capacity remains critical, UNCTAD urges these countries to use sustainable production methods and invest more in building new productive capacities and expanding their existing ones, especially in low-carbon activities. </p>
                <p>LDCs should also promote domestic value addition and stronger inter-sectoral production linkages, without which further extraction of resources will continue to degrade the environment but fail to redress the underdevelopment resulting from the commodity-dependence trap.</p>
              </div>
            </div>
            <div className="right_column">
              <Figure101 />
              <Recommendations headline="UNCTAD calls on" recommendation_list={['LDCs to promote domestic value addition and stronger inter-sectoral production linkages.', 'LDCs to pursue a “green structural transformation” to reduce poverty and enhance their resilience.', 'LDCs to adopt “green industrial policies” that accelerate the transition from carbon-intensive to low-carbon industries.']} />
            </div>
          </div>
        </div>
        <div ref={section2} className="section_2_container">
          <PhotoHeadline img="2022-ldc_report_section2-min.jpg" max_width={560} text_upper="Trading partners' policies raise" text_lower="new challenges for LDCs" />
          <div className="two_column_layout">
            <div className="left_column">
              <div className="text_container">
                <IsVisible once>
                  {(isVisible) => (
                    <p>
                      LDCs, which are marginalized in global trade, may now face additional headwinds because of the environmental policies of their trade partners.
                      <span className={`highlight ${(isVisible) ? 'visible' : ''}`} />
                    </p>
                  )}
                </IsVisible>
                <p>Any trade partners’ policies targeting the carbon emissions generated in the production of exported goods could have a strong dampening impact on LDC exports, even indirectly if LDCs were to be exempted.</p>
                <p>Such policies could have serious consequences if they were to provide an incentive to displacing polluting industries out of developed countries and into LDCs as a way for the former countries to meet their commitments to reduce CO2 emissions – this is known as carbon leakage.</p>
              </div>
            </div>
            <div className="right_column">
              <Figure304a />
              <Recommendations headline="UNCTAD calls on" recommendation_list={['The international community to consider the interests of LDCs and avoid policy measures that limit these countries’ policy space, slow their development, and increase the likelihood of pollution havens emerging among them. ', 'LDCs to intensify intra-regional trade and cooperation with neighboring countries and improve the quality and diversity of their products and infrastructure to unlock intra-regional trade.', 'LDC development partners and LDCs to strengthen the synergies between South-South cooperation and North-South cooperation on the low-carbon transition of LDCs.']} />
            </div>
          </div>
        </div>
        <div ref={section3} className="section_3_container">
          <PhotoHeadline img="2022-ldc_report_section3-min.jpg" max_width={560} text_upper="LDCs need more" text_lower="finance, technologies and capacities" />
          <div className="two_column_layout">
            <div className="left_column">
              <div className="text_container">
                <IsVisible once>
                  {(isVisible) => (
                    <p>
                      LDCs account for about 22% of countries with the most recurring appeals for funds in reaction to extreme weather crises.
                      <span className={`highlight ${(isVisible) ? 'visible' : ''}`} />
                    </p>
                  )}
                </IsVisible>
                <p>Despite an urgent plea from climate-vulnerable countries, there remains no international agreement on financing costs related to loss and damage from fast-onset events related to climate change.</p>
                <p>Climate risks are aggravated by the failure of developed countries to meet the annual $100 billion goal in climate finance they originally promised to achieve by 2020 to support developing nations to adapt to the climate crisis.</p>
                <IsVisible once>
                  {(isVisible) => (
                    <p>
                      Climate adaptation has received far less international support than mitigation, not only in terms of financing, but also in terms of technology development and transfer, capacity development and technical assistance.
                      <span className={`highlight ${(isVisible) ? 'visible' : ''}`} />
                    </p>
                  )}
                </IsVisible>
              </div>
            </div>
            <div className="right_column">
              <Figure203b />
              <Recommendations headline="UNCTAD calls on" recommendation_list={['The international community to “reboot” its support for LDCs by fulfilling climate funding commitments and extending special and differential treatment to LDCs by providing targeted, sufficiently flexible and long-term finance. Climate finance to LDCs should ideally be additional to funds from donor countries fulfilling their commitment to provide official development assistance to LDCs corresponding to 0.15% to 0.20% of donors’ gross national income.', 'Advanced economies to enhance technology transfer to LDCs, especially of green technologies.', 'Advanced countries to boost the institutional capacities of LDCs by vastly scaling up technical assistance and capacity-building support to all areas of the low-carbon transition, including climate, development and economic policymaking capabilities.']} />
            </div>
          </div>
        </div>
        <div ref={section4} className="section_4_container">
          <PhotoHeadline img="" text_upper="" text_lower="Facts and figures" />
          <div className="two_column_layout">
            <div className="left_column">
              <div className="text_container">
                <h3>Where are LDCs located?</h3>
                <IsVisible once>
                  {(isVisible) => (
                    <p>
                      The UN established the LDC category 51 years ago. The list of LDCs has expanded from an initial 25 countries in 1971, peaking at 52 in 1991, and stands at 46 today, with only six countries having graduated – stopped being an LDC – to date.
                      <span className={`highlight ${(isVisible) ? 'visible' : ''}`} />
                    </p>
                  )}
                </IsVisible>
                <p>They are distributed among the following regions:</p>
                <ul>
                  <li>Africa (33): Angola, Benin, Burkina Faso, Burundi, Central African Republic, Chad, Comoros, Democratic Republic of the Congo, Djibouti, Eritrea, Ethiopia, Gambia, Guinea, Guinea-Bissau, Lesotho, Liberia, Madagascar, Malawi, Mali, Mauritania, Mozambique, Niger, Rwanda, Sao Tome and Principe, Senegal, Sierra Leone, Somalia, South Sudan, Sudan, Togo, Uganda, United Republic of Tanzania and Zambia.</li>
                  <li>Asia (9): Afghanistan, Bangladesh, Bhutan, Cambodia, Lao People’s Democratic Republic, Myanmar, Nepal, Timor-Leste and Yemen.</li>
                  <li>Caribbean (1): Haiti.</li>
                  <li>Pacific (3): Kiribati, Solomon Islands and Tuvalu.</li>
                </ul>
                <h3>How do countries ‘graduate’ from least developed country status?</h3>
                <p>The list of LDCs is reviewed every three years by the Committee for Development Policy (CDP), a group of independent experts who report to the UN Economic and Social Council (ECOSOC). Following a triennial review of the list, the CDP may recommend to ECOSOC, countries for addition to the list or graduation from LDC status.</p>
                <p>To graduate from the LDC category, a country must meet the established graduation thresholds of at least two of the three criteria for two consecutive triennial reviews: namely: (i) income per capita, (ii) an index of human assets, and (iii) an index of economic and environmental vulnerability.</p>
                <p>Countries that are highly vulnerable, or have very low human assets, are eligible for graduation only if they meet the other two criteria by a sufficiently high margin. As an exception, a country whose per capita income is sustainably above the “income-only” graduation threshold, set at twice the graduation threshold ($2,444 at the 2021 triennial review), becomes eligible for graduation, even if it fails to meet the other two criteria.</p>
                <p>The six countries that have graduated from least developed country status since the creation of the category are:</p>
                <ol>
                  <li>Botswana in December 1994</li>
                  <li>Cabo Verde in December 2007</li>
                  <li>Maldives in January 2011</li>
                  <li>Samoa in January 2014</li>
                  <li>Equatorial Guinea in June 2017</li>
                  <li>Vanuatu in December 2020</li>
                </ol>
              </div>
            </div>
            <div className="right_column" />
          </div>
        </div>
      </div>
      <Footer />
      <noscript>Your browser does not support JavaScript!</noscript>
    </div>
  );
}

export default App;
