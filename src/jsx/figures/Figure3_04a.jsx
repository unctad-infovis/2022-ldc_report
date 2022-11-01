import React, { useState, useEffect } from 'react';

// Load helpers.
import CSVtoJSON from '../helpers/CSVtoJSON.js';
import ChartPie from '../charts/ChartPie.jsx';

function Figure7() {
  // Data states.
  const [dataFigure, setDataFigure] = useState(false);

  const cleanData = (data) => ([{
    data: (data).map(el => ({
      y: parseFloat(Object.values(el)[1]),
      name: el.Region,
      sliced: false,
      selected: true,
      dataLabels: {
        distance: -10,
        x: 0,
        y: 0
      }
    })),
    name: 'Export'
  }]);

  useEffect(() => {
    const data_file = `${(window.location.href.includes('unctad.org')) ? 'https://storage.unctad.org/2022-ldc_report/' : './'}assets/data/2022-ldc_report_figure_3_04a.csv`;
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
      <ChartPie
        allow_decimals={false}
        data={dataFigure}
        data_decimals={0}
        export_title_margin={30}
        idx="3_04a"
        labels
        source="Source:UNCTAD secretariat calculations based on data from the UNCTADStat database [accessed in May 2022]."
        subtitle="Main export partners of least developed countries, 2020 (per cent)"
        tick_interval={2}
        title="Trading partners' new climate policies could hit LDC exports"
        xlabel="Week"
      />
      )}
      <noscript>Your browser does not support JavaScript!</noscript>
    </div>
  );
}

export default Figure7;
