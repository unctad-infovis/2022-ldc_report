import React, { useState, useEffect } from 'react';

// Load helpers.
import CSVtoJSON from '../helpers/CSVtoJSON.js';
import ChartLine from '../charts/ChartLine.jsx';

function Figure2_05a() {
  // Data states.
  const [dataFigure, setDataFigure] = useState(false);

  const cleanData = (data) => data.map(el => ({
    data: Object.values(el).map(val => parseFloat(val)).filter(val => !Number.isNaN(val)),
    labels: Object.keys(el).filter(val => val !== 'Name'),
    name: el.Name
  }));

  useEffect(() => {
    const data_file = `${(window.location.href.includes('unctad.org')) ? 'https://storage.unctad.org/2022-ldc_report/' : './'}assets/data/2022-ldc_report_figure_2_05a.csv`;
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
        export_title_margin={20}
        idx="2_05a"
        labels={false}
        note="LMICs=Lower middle-income countries, LICs=Low-income countries, MICs=Middle-income countries, UMICs=Upper middle-income countries"
        show_only_first_and_last_labels
        source="UNCTAD secretariat calculations based on World Bank data."
        subtitle="Servicing costs on public and publicly guaranteed external debt as a percentage of government revenues; income group averages; 2010–2021"
        tick_interval={1}
        title="The rising costs of public debt for developing countries"
        xlabel="Year"
      />
      )}
      <noscript>Your browser does not support JavaScript!</noscript>
    </div>
  );
}

export default Figure2_05a;
