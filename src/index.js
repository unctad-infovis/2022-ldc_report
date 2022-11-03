import React from 'react';

import { createRoot } from 'react-dom/client';

import App from './jsx/App.jsx';
import Figure101 from './jsx/figures/Figure1_01.jsx';
import Figure203b from './jsx/figures/Figure2_03b.jsx';
import Figure304a from './jsx/figures/Figure3_04a.jsx';
import Globe from './jsx/components/Map.jsx';

const AppRoot = document.getElementById('app-root-2022-ldc_report');
if (AppRoot) {
  const root = createRoot(AppRoot);
  root.render(<App />);
}

const Figure1_01Root = document.getElementById('app-root-2022-ldc_report_figure_1_01');
if (Figure1_01Root) {
  const root = createRoot(Figure1_01Root);
  root.render(<Figure101 />);
}

const Figure2_03bRoot = document.getElementById('app-root-2022-ldc_report_figure_2_03b');
if (Figure2_03bRoot) {
  const root = createRoot(Figure2_03bRoot);
  root.render(<Figure203b />);
}

const Figure3_04aRoot = document.getElementById('app-root-2022-ldc_report_figure_3_04a');
if (Figure3_04aRoot) {
  const root = createRoot(Figure3_04aRoot);
  root.render(<Figure304a />);
}

const GlobeRoot = document.getElementById('app-root-2022-ldc_report_figure_globe');
if (GlobeRoot) {
  const root = createRoot(GlobeRoot);
  root.render(<Globe />);
}
