import React, { useState, useEffect } from 'react';

import { transpose } from 'csv-transpose';

// Load helpers.
import CSVtoJSON from '../helpers/CSVtoJSON.js';
import ChartColumn from '../charts/ChartColumn.jsx';

function Figure1_10() {
  // Data states.
  const [dataFigure, setDataFigure] = useState(false);

  const cleanData = (data) => data.map(el => ({
    data: Object.values(el).map(val => parseFloat(val)).filter(val => !Number.isNaN(val)),
    labels: Object.keys(el).filter(val => val !== 'Exports'),
    name: el.Exports
  }));

  useEffect(() => {
    const data_file = `${(window.location.href.includes('unctad.org')) ? 'https://storage.unctad.org/2022-ldc_report/' : './'}assets/data/2022-ldc_report_figure_1_01.csv`;
    try {
      fetch(data_file)
        .then((response) => {
          if (!response.ok) {
            throw Error(response.statusText);
          }
          return response.text();
        })
        .then(body => setDataFigure(cleanData(CSVtoJSON(transpose(body)))));
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <div>
      {dataFigure && (
      <ChartColumn
        data={dataFigure}
        data_decimals={0}
        export_title_margin={10}
        idx="1_01"
        note="LDCs: least developed countries; ODCs: other developing countries."
        source="UNCTAD Secretariat calculations based on data from the UNCTADStat database and ILOSTAT database [both accessed July 2022]."
        subtitle="Dependence of economies on natural resources, by country group, 2020–2021"
        suffix="%"
        title="LDCs overly depend on exporting a few commodities"
        xlabelrotation={0}
        ymax={100}
        ymin={0}
      />
      )}
      <noscript>Your browser does not support JavaScript!</noscript>
    </div>
  );
}

export default Figure1_10;
