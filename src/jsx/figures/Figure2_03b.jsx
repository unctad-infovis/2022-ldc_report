import React, { useState, useEffect } from 'react';

// Load helpers.
import CSVtoJSON from '../helpers/CSVtoJSON.js';
import ChartLine from '../charts/ChartLine.jsx';

function Figure3() {
  // Data states.
  const [dataFigure, setDataFigure] = useState(false);

  const cleanData = (data) => (data.map(el => ({
    data: Object.values(el).map(val => parseFloat(val)).filter(val => !Number.isNaN(val)),
    labels: Object.keys(el).filter(val => val !== 'Name'),
    name: el.Name
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
    <div>
      {dataFigure && (
      <ChartLine
        allow_decimals={false}
        data={dataFigure}
        data_decimals={1}
        export_title_margin={30}
        idx="2_03b"
        labels={false}
        note="To smooth year-to-year variability, the indicator “Share of world total” is computed as a moving average of a five-year window (MA-5)."
        show_first_label={false}
        source="UNCTAD Secretariat calculations based on data from the Emergency Events Database [accessed April 2022]."
        subtitle="Weather, climate and water-related hazards and the number of people affected (in the least developed countries, 1970-2020),"
        suffix="M"
        tick_interval={2}
        tick_interval_y={0.5}
        title="Climate disasters increasingly affect more people in LDC"
        xlabel="Week"
      />
      )}
      <noscript>Your browser does not support JavaScript!</noscript>
    </div>
  );
}

export default Figure3;
