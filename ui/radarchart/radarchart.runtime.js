/* global TW, Chart */
$("head").append('<link href="../Common/extensions/ChartJSWidget/ui/radarchart/jslibrary/Chart.min.css" rel="stylesheet">');
$("body").append('<script type="text/javascript" src="../Common/extensions/ChartJSWidget/ui/radarchart/jslibrary/Chart.min.js"></script>');
// Disable automatic style injection
Chart.platform.disableCSSInjection = true;

TW.Runtime.Widgets.radarchart = function () {
  var thisWidget = this;
  var uid = new Date().getTime() + "_" + Math.floor(1000 * Math.random());

  this.runtimeProperties = function () {
    return {
      'supportsAutoResize': true,
      'needsDataLoadingAndError': false
    };
  };

  this.renderHtml = function () {
    var html =
            '<div class="widget-content widget-radarchart widget-radarchart-' + uid + '">' +
            '  <canvas class="widget-content widget-radarchart-canvas widget-radarchart-canvas-' + uid + '">' +
            '  </canvas>' +
            '</div>';
    return html;
  };

  this.afterRender = function () {
  };

  this.resize = function (width, height) {
  };

  this.serviceInvoked = function (serviceName) {
    if (serviceName === "Render") {
      var data = thisWidget.getProperty('data');
      var dataSettings = thisWidget.getProperty('dataSettings');
      var debugMode = thisWidget.getProperty('debugMode');

      if (data) {
        var radarData = this.setRadarData(data, dataSettings);
        var radarOptions = this.setRadarOptions();
        var canvas = $('.widget-radarchart-canvas-' + uid).get(0);

        var radarChart = new Chart(canvas, {
          type: 'radar',
          data: radarData,
          options: radarOptions
        });
      } else {

      }
    }
  };

  this.setRadarData = function (data, dataSettings) {
    var pointRadius = thisWidget.getProperty('pointRadius');
    var pointBorderWidth = thisWidget.getProperty('pointBorderWidth');
    var pointHoverRadius = thisWidget.getProperty('pointHoverRadius');

    var datasetKey = data.isCompressed ? data.dataShape.fieldDefinitions.dataset.alias : "dataset";
    var fieldKey = data.isCompressed ? data.dataShape.fieldDefinitions.field.alias : "field";
    var valueKey = data.isCompressed ? data.dataShape.fieldDefinitions.value.alias : "value";

    var datasets = [];
    var labels = [];
    for (var index = 0; index < data.rows.length; index++) {
      var row = data.rows[index];
      if (labels.indexOf(row[fieldKey]) === -1) {
        labels.push(row[fieldKey]);
      }

      if (!datasets.find(element => element.label === row[datasetKey])) {
        var settingsKey = dataSettings.isCompressed ? dataSettings.dataShape.fieldDefinitions.dataset.alias : "dataset";

        var settings = dataSettings ? dataSettings.rows.find(element => element[settingsKey] === row[datasetKey]) : null;

        var json = {
          label: row[datasetKey],
          pointRadius: pointRadius,
          pointBorderWidth: pointBorderWidth,
          pointHoverRadius: pointHoverRadius,
          data: []
        };
        this.setSettings(json, settings, "backgroundColor");
        this.setSettings(json, settings, "borderColor");
        this.setSettings(json, settings, "pointBackgroundColor");
        this.setSettings(json, settings, "pointBorderColor");

        datasets.push(json);
      }
    }

    for (var index = 0; index < labels.length; index++) {
      for (var indexDataset = 0; indexDataset < datasets.length; indexDataset++) {
        var value = data.rows.find(element => element[fieldKey] === labels[index] && element[datasetKey] === datasets[indexDataset].label);
        datasets[indexDataset].data.push(value ? value[valueKey] : 0);
      }
    }

    return {
      labels: labels,
      datasets: datasets
    };
  };

  this.setSettings = function (json, settings, field) {
    if (settings && settings[field]) {
      json[field] = settings[field];
    }
  };

  this.setRadarOptions = function () {
    var beginAtZero = thisWidget.getProperty('beginAtZero');
    var minValue = thisWidget.getProperty('minValue');
    var maxValue = thisWidget.getProperty('maxValue');
    var stepSize = thisWidget.getProperty('stepSize');
    var fontSize = thisWidget.getProperty('fontSize');
    var legendPosition = thisWidget.getProperty('legendPosition');

    return {
      layout: {
        padding: 10
      },
      scale: {
        ticks: {
          beginAtZero: !!beginAtZero,
          min: minValue,
          max: maxValue,
          stepSize: stepSize,
          fontSize: fontSize
        },
        pointLabels: {
          fontSize: fontSize
        },
        scaleLabel: {
          fontSize: fontSize
        }
      },
      legend: {
        display: legendPosition !== "NO_LEGEND",
        position: legendPosition,
        labels: {
          fontSize: fontSize
        }
      }
    };
  };

  this.updateProperty = function (updatePropertyInfo) {
    if (updatePropertyInfo.TargetProperty === 'data') {
      this.setProperty("data", updatePropertyInfo.RawSinglePropertyValue);
    } else if (updatePropertyInfo.TargetProperty === 'dataSettings') {
      this.setProperty("dataSettings", updatePropertyInfo.RawSinglePropertyValue);
    }
  };
};