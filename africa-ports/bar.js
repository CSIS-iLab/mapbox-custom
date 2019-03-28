$(function() {
  $("#hcContainer").highcharts({
    data: {
      googleSpreadsheetKey: "1xV-satpNAyQS8CLI_hwI19Edyyk93Ab7aYmtBlLhRcw",
      googleSpreadsheetWorksheet: 1,
      complete: function(data) {
        var region = data.series.pop();
      }
    },
    chart: {
      type: "column",
      // inverted: true,
      // width: 200,
      height: 250
    },
    colors: [
      Highcharts.getOptions().colors[4],
      Highcharts.getOptions().colors[2],
      Highcharts.getOptions().colors[0]
    ],
    // title: {
    //   text: "Highest Grossing English Language Films in China"
    // },
    // subtitle: {
    //   text: "(As of February of 2019, not adjusted for inflation.)"
    // },
    credits: {
      enabled: true,
      href: false,
      text: "CSIS China Power Project | Sources: The Numbers, EntGroup"
    },
    // Chart Legend
    legend: {
      reversed: true,

      align: "center",
      verticalAlign: "bottom",
      layout: "horizontal"
    },
    // Y Axis
    yAxis: {
      title: {
        text: ""
      },
      labels: {
        formatter: function() {
          return ``;
        }
      }
    },
    // Tooltip
    tooltip: {
      enabled: false
    },
    // Additional Plot Options
    plotOptions: {
      column: {
        groupPadding: 0.25,
        pointWidth: 20,
        borderWidth: 0,
        stacking: "normal"
      }
    }
  });
});
