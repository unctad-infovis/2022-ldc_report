import React, { useState, useEffect } from 'react';

// Load helpers.
import CSVtoJSON from '../helpers/CSVtoJSON.js';
import ChartLine from '../charts/ChartLine.jsx';

function Figure2_09b() {
  // Data states.
  const [dataFigure, setDataFigure] = useState(false);

  const cleanData = (data) => data.map(el => ({
    data: Object.values(el).map(val => parseFloat(val)).filter(val => !Number.isNaN(val)),
    labels: Object.keys(el).filter(val => val !== 'Name'),
    name: el.Name
  }));

  useEffect(() => {
    const data_file = `${(window.location.href.includes('unctad.org')) ? 'https://storage.unctad.org/2022-ldc_report/' : './'}assets/data/2022-ldc_report_figure_2_09b_monthly.csv`;
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
        data_decimals={0}
        export_title_margin={50}
        idx="2_09b"
        labels={false}
        line_width={3}
        note="Monthly index averages. Price indices correspond to Dow Jones Commodity Index."
        show_only_first_and_last_labels
        source="UNCTAD secretariat calculations based on Refinitiv data."
        subtitle="Index numbers, 2015 = 100; January 2015–July 2022"
        tick_interval={3}
        title="Grain price indices"
        ymin={0}
      />
      )}
      <noscript>Your browser does not support JavaScript!</noscript>
    </div>
  );
}

export default Figure2_09b;
