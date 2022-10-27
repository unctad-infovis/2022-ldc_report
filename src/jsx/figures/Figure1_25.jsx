import React, { useState, useEffect } from 'react';

// Load helpers.
import CSVtoJSON from './../helpers/CSVtoJSON.js';
import ChartLine from './../charts/ChartLine.jsx';

function Figure1_25() {
  // Data states.
  const [dataFigure, setDataFigure] = useState(false);

  const cleanData = (data) => data.map((el) => ({
    data: Object.entries(el).map(val => ({ y: parseFloat(val[1]), name: val[0] })).filter(val => !Number.isNaN(val.y)),
    labels: Object.keys(el).filter(val => val !== 'Name'),
    name: el.Name
  }));

  useEffect(() => {
    const data_file = `${(window.location.href.includes('unctad.org')) ? 'https://storage.unctad.org/2022-ldc_report/' : './'}assets/data/2022-ldc_report_figure_1_25.csv`;
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
        data={dataFigure}
        data_decimals={1}
        idx="1_25"
        labels={false}
        note="Data refer to the ratio of corporate profits to gross production value."
        show_only_first_and_last_labels
        source="UNCTAD secretariat calculations based on OECD data."
        subtitle="United States, percentage, 1st quarter 2017–2nd quarter of 2021"
        tick_interval={1}
        title="Aggregate markup"
      />
      )}
      <noscript>Your browser does not support JavaScript!</noscript>
    </div>
  );
}

export default Figure1_25;
