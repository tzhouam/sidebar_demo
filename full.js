function loadFullWindow() {
  let grid = GridStack.init();

  grid.on("resize", function (e, items) {
    console.log("resizing", e);
    // fullChart1.reflow();
    // fullChart2.reflow();
    // fullChart3.reflow();
    fullChart1.setSize(
      $("#grid-stack-item-1").width() - 100,
      $("#grid-stack-item-1").height() - 100
    );
    fullChart2.setSize(
      $("#grid-stack-item-2").width() - 100,
      $("#grid-stack-item-2").height() - 100
    );
    fullChart3.setSize(
      $("#grid-stack-item-3").width() - 100,
      $("#grid-stack-item-3").height() - 100
    );
    console.log($("#grid-stack-item-1").width());
  });

  const width = $(window).width - 50;
  console.log($("#fulldiv1").width());
  // $("#full2").css("width", width);
  //   $("#full2").css("height", width + 50);
  // $("#full3").css("width", width);
  //   $("#full3").css("height", width + 50);
  // $("#full1").css("width", width);
  //   $("#full1").css("height", width + 50);

  fullChart1 = new Highcharts.Chart({
    chart: {
      renderTo: "fullchart1",
      type: "column",
      // reflow: true,
      events: {
        load: function () {
          // set up the updating of the chart each second
          var series = this.series[0];
          setInterval(function () {
            var data = [];
            data.push([
              "01:Inner brow raiser",
              Math.round(Math.random() * 100),
            ]);
            data.push([
              "02:Outer brow raiser",
              Math.round(Math.random() * 100),
            ]);
            data.push(["04:Brow lowerer", Math.round(Math.random() * 100)]);
            data.push(["05:Upper lid raiser", Math.round(Math.random() * 100)]);
            data.push(["06:Cheek raiser", Math.round(Math.random() * 100)]);
            data.push(["07:Lid tighter", Math.round(Math.random() * 100)]);
            data.push(["09:Nose wrinkler", Math.round(Math.random() * 100)]);
            data.push(["10:Upper lip raiser", Math.round(Math.random() * 100)]);
            data.push([
              "12:Lip corner puller",
              Math.round(Math.random() * 100),
            ]);
            data.push(["14:Dimpler", Math.round(Math.random() * 100)]);
            data.push([
              "15:Lip corner depressor",
              Math.round(Math.random() * 100),
            ]);
            data.push(["17:Chin raiser", Math.round(Math.random() * 100)]);
            data.push(["20:Lip stretcher", Math.round(Math.random() * 100)]);
            data.push(["23:Lip tightener", Math.round(Math.random() * 100)]);
            data.push(["25:Lip part", Math.round(Math.random() * 100)]);
            data.push(["26:Jaw drop", Math.round(Math.random() * 100)]);
            data.push(["45:Blink", Math.round(Math.random() * 100)]);

            series.setData(data);
          }, 2000);
        },
      },
    },
    title: {
      text: "The states of the class",
    },
    xAxis: {
      categories: [
        "01:Inner brow raiser",
        "02:Outer brow raiser",
        "04:Brow lowerer",
        "05:Upper lid raiser",
        "06:Cheek raiser",
        "07:Lid tighter",
        "09:Nose wrinkler",
        "10:Upper lip raiser",
        "12:Lip corner puller",
        "14:Dimpler",
        "15:Lip corner depressor",
        "17:Chin raiser",
        "20:Lip stretcher",
        "23:Lip tightener",
        "25:Lip part",
        "26:Jaw drop",
        "45:Blink",
      ],
    },
    yAxis: {
      min: 0,
      title: {
        text: "value",
      },
      stackLabels: {
        enabled: true,
        style: {
          fontWeight: "bold",
          color: (Highcharts.theme && Highcharts.theme.textColor) || "gray",
        },
      },
    },
    legend: {
      align: "right",
      x: -100,
      verticalAlign: "top",
      y: 20,
      floating: true,
      backgroundColor:
        (Highcharts.theme && Highcharts.theme.legendBackgroundColorSolid) ||
        "white",
      borderColor: "#CCC",
      borderWidth: 1,
      shadow: false,
    },
    tooltip: {
      formatter: function () {
        return (
          "<b>" +
          this.x +
          "</b><br/>" +
          this.series.name +
          ": " +
          Math.round(this.y) +
          "<br/>" +
          "Total: " +
          Math.round(this.point.stackTotal)
        );
      },
    },
    plotOptions: {
      column: {
        stacking: "normal",
        dataLabels: {
          enabled: false,
          color:
            (Highcharts.theme && Highcharts.theme.dataLabelsColor) || "white",
        },
      },
    },
    series: [
      {
        name: "Facial expression itensity",
        data: [5, 3, 4, 7, 2],
      },
    ],
  });

  // Age categories
  var categories = ["whether in/out of slides", "whether in/out of screen"];

  fullChart2 = Highcharts.chart("fullchart2", {
    chart: {
      type: "bar",
      events: {
        load: function () {
          // set up the updating of the chart each second
          var series = this.series[0];
          console.log(series);
          setInterval(function () {
            var data = [];
            data.push([
              //   Math.round(Math.random() * 100),
              Math.round(Math.random() * 100),
            ]);
            data.push(["In screen", Math.round(Math.random() * 100)]);
            series.setData(data);
          }, 2000);
        },
      },
    },
    title: {
      text: "Eye Gaze Focusing",
    },
    accessibility: {
      point: {
        valueDescriptionFormat: "{index}. {xDescription}, {value}%.",
      },
    },
    xAxis: [
      {
        categories: categories,
        reversed: false,
        labels: {
          step: 1,
        },
        accessibility: {
          description: "Age (male)",
        },
      },
      {
        // mirror axis on right side
        opposite: true,
        reversed: false,
        categories: categories,
        linkedTo: 0,
        labels: {
          step: 1,
        },
        accessibility: {
          description: "Age (female)",
        },
      },
    ],
    yAxis: {
      title: {
        text: null,
      },
      labels: {
        formatter: function () {
          return Math.abs(this.value) + "%";
        },
      },
      accessibility: {
        description: "Percentage population",
        rangeDescription: "Range: 0 to 5%",
      },
    },

    plotOptions: {
      series: {
        stacking: "normal",
      },
    },

    tooltip: {
      formatter: function () {
        // console.log(this);
        return (
          "<b>" +
          this.series.name +
          "</b><br/>" +
          "Population: " +
          Highcharts.numberFormat(Math.abs(this.point.y), 1) +
          "%"
        );
      },
    },

    series: [
      {
        name: "In Screen",
        data: [60, 90],
      },
      {
        name: "Out of Screen",
        data: [-23, -12],
      },
    ],
  });

  fullChart3 = Highcharts.chart("fullchart3", {
    chart: {
      type: "spline",
      animation: Highcharts.svg, // don't animate in old IE
      marginRight: 10,
      events: {
        load: function () {
          // set up the updating of the chart each second
          var series = this.series[0];
          setInterval(function () {
            var x = new Date().getTime(), // current time
              y = Math.random();
            series.addPoint([x, y], true, true);
          }, 1000);
        },
      },
    },

    time: {
      useUTC: false,
    },

    title: {
      text: "Live random data",
    },

    accessibility: {
      announceNewData: {
        enabled: true,
        minAnnounceInterval: 15000,
        announcementFormatter: function (allSeries, newSeries, newPoint) {
          if (newPoint) {
            return "New point added. Value: " + newPoint.y;
          }
          return false;
        },
      },
    },

    xAxis: {
      type: "datetime",
      tickPixelInterval: 150,
    },

    yAxis: {
      title: {
        text: "Value",
      },
      plotLines: [
        {
          value: 0,
          width: 1,
          color: "#808080",
        },
      ],
    },

    tooltip: {
      headerFormat: "<b>{series.name}</b><br/>",
      pointFormat: "{point.x:%Y-%m-%d %H:%M:%S}<br/>{point.y:.2f}",
    },

    legend: {
      enabled: false,
    },

    exporting: {
      enabled: false,
    },

    series: [
      {
        name: "Random data",
        data: (function () {
          // generate an array of random data
          var data = [],
            time = new Date().getTime(),
            i;

          for (i = -19; i <= 0; i += 1) {
            data.push({
              x: time + i * 1000,
              y: Math.random(),
            });
          }
          return data;
        })(),
      },
    ],
  });
}

const containers = ["fullchart1", "fullchart2", "fullchart3"];

function handleHighlight(container) {
  containers.forEach((item) => {
    if (item != container) $("#" + item).css("opacity", "0.5");
    else {
      $("#" + item).css("border-color", "orange");
      $("#" + item).css("border-width", "3");
    }
  });
}

function handleUndoHighlight(container) {
  containers.forEach((item) => {
    if (item != container) $("#" + item).css("opacity", "1");
    else {
      $("#" + item).css("border-color", "");
      $("#" + item).css("border-width", "1");
    }
  });
}
