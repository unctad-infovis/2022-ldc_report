import React, { useState, useEffect } from 'react';

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
        idx="1_01"
        note="“Other natural resources” consist mainly of fuels, metals, and other minerals. “Agriculture” refers to agriculture, hunting, forestry, and fishing. Data refer to 2020 for GDP and to 2021 for employment and merchandise exports. GDP data for other natural resources include utilities. LDCs: least developed countries; ODCs: other developing countries."
        source="UNCTAD Secretariat calculations based on data from the UNCTADStat database and ILOSTAT database [both accessed July 2022]."
        subtitle="Dependence of economies on natural resources, by country group, 2020–2021"
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
