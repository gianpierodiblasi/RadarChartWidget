# RadarChartWidget
An extension to show a radar chart.

## Description
This extension provides a widget to show a radar chart based on the chart.js library (see dependencies). The chart is described by the ds_RadarChartData DataShape for data and the ds_RadarChartDataSettings for settings (see below); the DataShape structures are mandatory, but they can be extended with additional fields.

## Properties
- debugMode - BOOLEAN (default = false): if set to true it sends to the browser's JS console a set of information useful for debugging the widget
- data - INFOTABLE (no default value): the data to show (use or duplicate & extend the Data Shape ds_RadarChartData, see below)
- dataSettings - INFOTABLE (no default value): the settings of the data (use or duplicate & extend the Data Shape ds_RadarChartDataSettings, see below)
- beginAtZero - BOOLEAN (default = true): if true, scale will include 0 if it is not already included
- minValue - NUMBER (default = 0): the minimum value
- maxValue - NUMBER (default = 100): the maximum value
- stepSize - NUMBER (default = 20): the step size between min and max
- fontSize - NUMBER (default = 12): the font size
- pointRadius - NUMBER (default = 3): the radius of the point shape
- pointBorderWidth - NUMBER (default = 1): the width of the point border
- pointHoverRadius - NUMBER (default = 4): the radius of the point when hovered
- legendPosition - STRING (default = 'top'): the (optional) legend position (options: NO_LEGEND, top, left, right, bottom

## Services
- Render: service to render the chart

## DataShapes
- ds_RadarChartData
  - dataset: the dataset name - STRING
  - field: the field name - STRING
  - value: the field value - NUMBER
- ds_RadarChartDataSettings
  - dataset: the dataset name - STRING
  - backgroundColor: the background color - STRING
  - borderColor: the border color - STRING
  - pointBackgroundColor: the background color of the point - STRING
  - pointBorderColor - the border color of the point - STRING

## Dependencies
chart.js - [link](https://github.com/chartjs/Chart.js)

## Donate
If you would like to support the development of this and/or other extensions, consider making a [donation](https://www.paypal.com/donate/?business=HCDX9BAEYDF4C&no_recurring=0&currency_code=EUR).
