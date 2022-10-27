import React, { useState, useEffect } from 'react';

// Load helpers.
import CSVtoJSON from '../helpers/CSVtoJSON.js';
import ChartBar from '../charts/ChartBar.jsx';

function Figure2_03() {
  // Data states.
  const [dataFigure, setDataFigure] = useState(false);

  const cleanData = (data) => data.map(el => ({
    data: Object.values(el).map(val => parseFloat(val)).filter(val => !Number.isNaN(val)),
    labels: Object.keys(el).filter(val => val !== 'Name'),
    name: el.Name
  }));

  useEffect(() => {
    const data_file = `${(window.location.href.includes('unctad.org')) ? 'https://storage.unctad.org/2022-ldc_report/' : './'}assets/data/2022-ldc_report_figure_2_03.csv`;
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
      <ChartBar
        idx="2_03"
        data={dataFigure}
        data_decimals={1}
        export_title_margin={20}
        labels_inside
        source="UNCTAD secretariat calculations based on Refinitiv."
        note="Estimated change in per cent of the nominal exchange rate against the United States dollar between 1 January 2022 and 8 July 2022."
        subtitle="Selected developing countries, against the United States dollar; percentage; January–July 2022"
        title="Nominal exchange rate depreciations"
        ymax={100}
        ymin={0}
        ylabel="Percentage"
      />
      )}
      <noscript>Your browser does not support JavaScript!</noscript>
    </div>
  );
}

export default Figure2_03;
