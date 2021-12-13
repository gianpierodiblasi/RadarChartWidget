/* global TW */
TW.IDE.Widgets.radarchart = function () {
  this.widgetIconUrl = function () {
    return '../Common/extensions/RadarChartWidget/ui/radarchart/radarchart.png';
  };

  this.widgetProperties = function () {
    return {
      'name': 'RadarChart',
      'description': 'Widget to show a radar chart',
      'category': ['Common'],
      'iconImage': 'radarchart.png',
      'supportsAutoResize': true,
      'properties': {
        'Width': {
          'description': 'width',
          'defaultValue': 200
        },
        'Height': {
          'description': 'height',
          'defaultValue': 200
        },
        'data': {
          'isVisible': true,
          'baseType': 'INFOTABLE',
          'isBindingTarget': true,
          'isEditable': false,
          'description': 'The data to show (use the Data Shape ds_RadarChartData)'
        },
        'dataSettings': {
          'isVisible': true,
          'baseType': 'INFOTABLE',
          'isBindingTarget': true,
          'isEditable': false,
          'description': 'The settings of the data (use the Data Shape ds_RadarChartDataSettings)'
        },
        'beginAtZero': {
          'isVisible': true,
          'baseType': 'BOOLEAN',
          'isBindingTarget': false,
          'isEditable': true,
          'description': 'if true, scale will include 0 if it is not already included',
          'defaultValue': true
        },
        'minValue': {
          'isVisible': true,
          'baseType': 'NUMBER',
          'isBindingTarget': false,
          'isEditable': true,
          'description': 'The minimum value',
          'defaultValue': 0
        },
        'maxValue': {
          'isVisible': true,
          'baseType': 'NUMBER',
          'isBindingTarget': false,
          'isEditable': true,
          'description': 'The maximum value',
          'defaultValue': 100
        },
        'stepSize': {
          'isVisible': true,
          'baseType': 'NUMBER',
          'isBindingTarget': false,
          'isEditable': true,
          'description': 'The step size between min and max',
          'defaultValue': 20
        },
        'fontSize': {
          'isVisible': true,
          'baseType': 'NUMBER',
          'isBindingTarget': false,
          'isEditable': true,
          'description': 'The font size',
          'defaultValue': 12
        },
        'pointRadius': {
          'isVisible': true,
          'baseType': 'NUMBER',
          'isBindingTarget': false,
          'isEditable': true,
          'description': 'The radius of the point shape',
          'defaultValue': 3
        },
        'pointBorderWidth': {
          'isVisible': true,
          'baseType': 'NUMBER',
          'isBindingTarget': false,
          'isEditable': true,
          'description': 'The width of the point border',
          'defaultValue': 1
        },
        'pointHoverRadius': {
          'isVisible': true,
          'baseType': 'NUMBER',
          'isBindingTarget': false,
          'isEditable': true,
          'description': 'The radius of the point when hovered',
          'defaultValue': 4
        },
        'legendPosition': {
          'isVisible': true,
          'baseType': 'STRING',
          'isEditable': true,
          'description': 'The (optional) legend position',
          'defaultValue': 'top',
          'selectOptions': [
            {value: 'NO_LEGEND', text: 'No Legend'},
            {value: 'top', text: 'Top'},
            {value: 'left', text: 'Left'},
            {value: 'right', text: 'Right'},
            {value: 'bottom', text: 'Bottom'}
          ]
        },
        'debugMode': {
          'isVisible': true,
          'baseType': 'BOOLEAN',
          'isEditable': true,
          'defaultValue': false,
          'description': 'true to activate the debug'
        }
      }
    };
  };

  this.renderHtml = function () {
    return '<div class="widget-content widget-radarchart">' + '<span class="radarchart-property">Radar Chart</span>' + '</div>';
  };
  
  this.widgetServices = function () {
    return {
      'Render': {
        'warnIfNotBound': true
      }
    };
  };
};