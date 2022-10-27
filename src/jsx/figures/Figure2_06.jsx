import React, { useState, useEffect } from 'react';

// Load helpers.
import CSVtoJSON from './../helpers/CSVtoJSON.js';
import ChartLine from './../charts/ChartLine.jsx';

function Figure2_06() {
  // Data states.
  const [dataFigure, setDataFigure] = useState(false);

  const cleanData = (data) => data.map(el => ({
    data: Object.values(el).map(val => parseFloat(val)).filter(val => !Number.isNaN(val)),
    labels: Object.keys(el).filter(val => val !== 'Name'),
    name: el.Name
  }));

  useEffect(() => {
    const data_file = `${(window.location.href.includes('unctad.org')) ? 'https://storage.unctad.org/2022-ldc_report/' : './'}assets/data/2022-ldc_report_figure_2_06.csv`;
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
        data_decimals={2}
        idx="2_06"
        labels={false}
        line_width={4}
        note="The index is normalized such that a zero indicates the index is at its average value, with positive values representing how many standard deviations the index is above this average value (and negative values representing the opposite)."
        show_only_first_and_last_labels
        source="Benigno et al. (2022)."
        subtitle="Standard deviations from average value, January 2005–June 2022"
        tick_interval={13}
        title="Global supply chain pressure index (GSCPI)"
      />
      )}
      <noscript>Your browser does not support JavaScript!</noscript>
    </div>
  );
}

export default Figure2_06;
