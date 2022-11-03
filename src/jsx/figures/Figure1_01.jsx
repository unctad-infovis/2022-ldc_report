import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import '../../styles/chart_styles.less';

import { transpose } from 'csv-transpose';

// Load helpers.
import CSVtoJSON from '../helpers/CSVtoJSON.js';
import ChartColumn from '../charts/ChartColumn.jsx';

function Figure1_01({ standalone }) {
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
        idx={(standalone) ? '1_01_standalone' : '1_01'}
        note="LDCs: least developed countries; ODCs: other developing countries."
        source="UNCTAD secretariat calculations based on data from the UNCTADStat database and ILOSTAT database [both accessed July 2022]."
        standalone={standalone}
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

Figure1_01.propTypes = {
  standalone: PropTypes.bool
};
Figure1_01.defaultProps = {
  standalone: true
};

export default Figure1_01;
