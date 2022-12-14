import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import '../../styles/chart_styles.less';

// Load helpers.
import CSVtoJSON from '../helpers/CSVtoJSON.js';
import ChartLine from '../charts/ChartLine.jsx';

function Figure2_03b({ standalone }) {
  // Data states.
  const [dataFigure, setDataFigure] = useState(false);

  const cleanData = (data) => (data.map(el => ({
    data: Object.values(el).map(val => parseFloat(val)).filter(val => !Number.isNaN(val)),
    labels: Object.keys(el).filter(val => val !== 'Share of world total'),
    color: (document.querySelector('#app-root-2022-ldc_report_figure_2_03b')?.getAttribute('line-color')) ? document.querySelector('#app-root-2022-ldc_report_figure_2_03b').getAttribute('line-color') : undefined,
    name: 'Share of world total'
  })));

  useEffect(() => {
    const data_file = `${(window.location.href.includes('unctad.org')) ? 'https://storage.unctad.org/2022-ldc_report/' : './'}assets/data/2022-ldc_report_figure_2_03b.csv`;
    try {
      fetch(data_file)
        .then((response) => {
          if (!response.ok) {
            throw Error(response.statusText);
          }
          return response.text();
        })
        .then(body => setDataFigure(cleanData(CSVtoJSON(body))));
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <div style={{ marginTop: (document.querySelector('#app-root-2022-ldc_report_figure_2_03b')?.getAttribute('margin-top')) ? document.querySelector('#app-root-2022-ldc_report_figure_2_03b').getAttribute('margin-top') : (standalone) ? '40px' : 0 }}>
      {dataFigure && (
      <ChartLine
        allow_decimals={false}
        data={dataFigure}
        data_decimals={1}
        export_title_margin={30}
        idx={(standalone) ? '2_03b_standalone' : '2_03b'}
        labels={false}
        note="To smooth year-to-year variability, the indicator “Share of world total” is computed as a moving average of a five-year window (MA-5)."
        show_first_label={false}
        show_only_first_and_last_labels
        source="UNCTAD secretariat calculations based on data from the Emergency Events Database [accessed April 2022]."
        standalone={standalone}
        subtitle="Share of people in least developed countries out of total affected people in the world, 2000–2019"
        tick_interval={3}
        tick_interval_y={10}
        title="Climate disasters increasingly affect more people in LDCs"
        xlabel="Year"
      />
      )}
    </div>
  );
}

Figure2_03b.propTypes = {
  standalone: PropTypes.bool
};
Figure2_03b.defaultProps = {
  standalone: true
};

export default Figure2_03b;
