import React, { useState, useEffect } from 'react';

// Load helpers.
import CSVtoJSON from '../helpers/CSVtoJSON.js';
import ChartColumn from '../charts/ChartColumn.jsx';

function Figure1_10() {
  // Data states.
  const [dataFigure, setDataFigure] = useState(false);

  const cleanData = (data) => data.map(el => ({
    data: Object.values(el).map(val => parseFloat(val)).filter(val => !Number.isNaN(val)),
    labels: Object.keys(el).filter(val => val !== 'Name'),
    name: el.Name
  }));

  useEffect(() => {
    const data_file = `${(window.location.href.includes('unctad.org')) ? 'https://storage.unctad.org/2022-ldc_report/' : './'}assets/data/2022-ldc_report_figure_1_10.csv`;
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
      <ChartColumn
        data={dataFigure}
        data_decimals={1}
        export_title_margin={80}
        idx="1_10"
        source="UNCTAD secretariat calculations based on the United Nations Global Policy Model."
        subtitle="Expected output gap in 2023 in G20 countries; percentage"
        title="Lost economic potential"
        xlabelrotation={-60}
        ymax={10}
        ymin={-16}
      />
      )}
      <noscript>Your browser does not support JavaScript!</noscript>
    </div>
  );
}

export default Figure1_10;
