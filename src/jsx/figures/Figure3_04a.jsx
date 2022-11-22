import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import '../../styles/chart_styles.less';

// Load helpers.
import CSVtoJSON from '../helpers/CSVtoJSON.js';
import ChartPie from '../charts/ChartPie.jsx';

function Figure3_04a({ standalone }) {
  // Data states.
  const [dataFigure, setDataFigure] = useState(false);

  const cleanData = (data) => ([{
    data: (data).map(el => ({
      dataLabels: {
        distance: -30,
        formatter() {
          // eslint-disable-next-line react/no-this-in-sfc
          return `${Math.round(this.percentage)}%`;
        },
        x: 0,
        y: 0
      },
      name: el.Region,
      selected: true,
      sliced: false,
      y: parseFloat(Object.values(el)[1]),
    })),
    name: 'Export'
  }, {
    data: (data).map(el => ({
      dataLabels: {
        color: 'rgba(0, 0, 0, 0.8)',
        connectorColor: '#aaa096',
        fontFamily: 'Roboto',
        connectorWidth: 2,
        style: {
          fontSize: '20px',
          fontWeight: 400,
          letterSpacing: '0.02em',
          textOutline: 0
        },
        formatter() {
          // eslint-disable-next-line react/no-this-in-sfc
          return this.point.name;
        },
        distance: 20,
        softConnector: true,
        verticalAlign: 'top'
      },
      name: el.Region,
      selected: true,
      sliced: false,
      y: parseFloat(Object.values(el)[1])
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
        export_title_margin={0}
        idx={(standalone) ? '3_04a_standalone' : '3_04a'}
        labels
        source="UNCTAD secretariat calculations based on data from the UNCTADStat database [accessed in May 2022]."
        standalone={standalone}
        subtitle="Main export partners of least developed countries, 2020, percentage"
        tick_interval={2}
        title="Trading partners' new climate policies could hit LDC exports"
        xlabel="Week"
      />
      )}
    </div>
  );
}

Figure3_04a.propTypes = {
  standalone: PropTypes.bool
};
Figure3_04a.defaultProps = {
  standalone: true
};

export default Figure3_04a;
