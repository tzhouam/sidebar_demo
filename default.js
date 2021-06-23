function handleThresholdChange() {
  //   console.log($("#threshold")[0].value);
  const threshold = $("#threshold")[0].value;
  $("#thresholdtext").html("Threshold:" + threshold + "%");
}

var radialInterval,
  motorInterval,
  barInterval,
  default1 = 0,
  default2 = 0,
  default3 = 0;

function loadDefaultWindow() {
  console.log(document.cookie);
  var cookieList = document.cookie.split(";");
  var gazeChartType,
    name = "gazecharttype";
  cookieList.forEach((val) => {
    if (val.indexOf(name) === 0) gazeChartType = val.substring(name.length + 1);
  });
  console.log(gazeChartType);

  // $("#draggable").draggable();
  $("#sortable").sortable({
    // placeholder: "ui-state-highlight",
  });
  $("#sortable").disableSelection();

  // original code
  const width = $(window).width - 50;
  $("#defaultchart2").css("width", width);
  $("#defaultchart2").css("height", width + 50);
  $("#defaultchart3").css("width", width);
  $("#defaultchart3").css("height", width + 50);
  $("#defaultchart1").css("width", width);
  $("#defaultchart1").css("height", width + 50);
  $("#defaultTrigger").css("width", width);
  $("#defaultTrigger").css("height", width + 50);
  //   console.log(width);

  defaultChart1 = Highcharts.chart("defaultchart1", {
    colors: ["#CD7F32"],
    chart: {
      type: "column",
      inverted: true,
      polar: true,
      margin: [30, 0, 40, 0],
      // height: 150,
      // width: 100,
      // events: {
      //   load: function () {
      //     var series = this.series[0];
      //     interval1 = setInterval(function () {
      //       data = [];
      //       data.push(Math.random() * 150);
      //       series.setData(data);
      //       // console.log(data);
      //     }, 2000);
      //   },

      // reflow: false,

      // redraw: function () {
      //   this.setSize(150, 100);
      //   console.log("redraw");
      // },
      // },
    },
    exporting: {
      enabled: false,
      buttons: {
        contextButton: {
          verticalAlign: "bottom",
          width: 10,
        },
      },
    },
    title: {
      text: "Gaze",
    },
    tooltip: {
      enabled: false,
      outside: true,
    },
    pane: {
      size: "100%",
      innerSize: "50%",
      endAngle: 360,
    },
    xAxis: {
      tickInterval: 1,
      lineWidth: 0,
      categories: [
        ' <span class="f16"><span id="flag" class="flag no">' +
          "</span></span>",
      ],
    },
    yAxis: {
      visible: false,
      crosshair: {
        enabled: true,
        color: "#333",
      },
      lineWidth: 0,
      tickInterval: 25,
      max: 150,
      reversedStacks: false,
      endOnTick: true,
      showLastLabel: true,
    },
    plotOptions: {
      column: {
        stacking: "normal",
        borderWidth: 0,
        pointPadding: 0,
        groupPadding: 0.15,
      },
    },
    legend: {
      // enabled: false,
      labelFormatter: function () {
        // console.log(this.yData);
        return Math.round((this.yData / 150) * 100) + "%";
      },
    },
    series: [
      {
        name: "",
        data: [100],
      },
    ],
  });

  radialInterval = setInterval(function () {
    if (defaultChart1) {
      data = [];
      data.push(Math.random() * 150);
      defaultChart1.series[0].setData(data);
      console.log("radial chart set data");
    }
  }, 2000);

  if (barInterval) clearInterval(barInterval);
  if (radialInterval) clearInterval(radialInterval);
  if (motorInterval) clearInterval(motorInterval);

  if (gazeChartType == "Motor") {
    drawMotorChart("defaultchart1", "Gaze");
  } else if (gazeChartType == "Radial") {
    drawRadialChart("defaultchart1", "Gaze");
  } else {
    drawBarChart("defaultchart1", "Gaze");
  }

  defaultChart2 = Highcharts.chart("defaultchart2", {
    colors: ["#FFD700"],
    chart: {
      type: "column",
      inverted: true,
      polar: true,
      margin: [30, 0, 40, 0],
      // height: 150,
      events: {
        load: function () {
          var series = this.series[0];
          setInterval(function () {
            data = [];
            data.push(Math.random() * 150);
            series.setData(data);
            // console.log(data);
          }, 2000);
        },
      },
    },
    exporting: {
      buttons: {
        contextButton: {
          verticalAlign: "bottom",
          width: 10,
        },
      },
    },
    title: {
      text: "Confused",
    },
    tooltip: {
      enabled: false,
      outside: true,
    },
    pane: {
      size: "100%",
      innerSize: "50%",
      endAngle: 360,
    },
    xAxis: {
      tickInterval: 1,
      // labels: {
      //   align: "right",
      //   useHTML: true,
      //   allowOverlap: true,
      //   step: 1,
      //   y: 1,
      //   style: {
      //     fontSize: "13px",
      //   },
      // },
      lineWidth: 0,
      categories: [
        ' <span class="f16"><span id="flag" class="flag no">' +
          "</span></span>",
        // 'United States <span class="f16"><span id="flag" class="flag us">' +
        //   "</span></span>",
        // 'Germany <span class="f16"><span id="flag" class="flag de">' +
        //   "</span></span>",
        // 'Canada <span class="f16"><span id="flag" class="flag ca">' +
        //   "</span></span>",
        // 'Austria <span class="f16"><span id="flag" class="flag at">' +
        //   "</span></span>",
      ],
    },
    yAxis: {
      visible: false,
      crosshair: {
        enabled: true,
        color: "#333",
      },
      lineWidth: 0,
      tickInterval: 25,
      max: 150,
      reversedStacks: false,
      endOnTick: true,
      showLastLabel: true,
    },
    plotOptions: {
      column: {
        stacking: "normal",
        borderWidth: 0,
        pointPadding: 0,
        groupPadding: 0.15,
      },
    },
    legend: {
      // enabled: false,
      labelFormatter: function () {
        // console.log(this.yData);
        return Math.round((this.yData / 150) * 100) + "%";
      },
    },
    series: [
      {
        name: "Gold medals",
        // data: [132, 105, 92, 73, 64],
        data: [100],
      },
      // {
      //   name: "Silver medals",
      //   // data: [125, 110, 86, 64, 81],
      //   data: [125],
      // },
      // {
      //   name: "Bronze medals",
      //   // data: [111, 90, 60, 62, 87],
      //   data: [111],
      // },
    ],
  });

  var gaugeOptions = {
    chart: {
      type: "solidgauge",
      margin: [30, 0, 0, 0],
      //   events: {
      // redraw() {
      //   console.log("redraw:", this.title.alignOptions.text);
      // this.series[0].update({ dataLabels: { style: { fontSize: 20 } } });
      // },
      //   },
    },

    title: {
      text: "Concentration",
      style: {
        fontSize: ($(window).width - 50) / 10,
      },
    },

    pane: {
      center: ["50%", "50%"],
      size: "100%",
      startAngle: -90,
      endAngle: 90,
      background: {
        backgroundColor:
          Highcharts.defaultOptions.legend.backgroundColor || "#EEE",
        innerRadius: "60%",
        outerRadius: "100%",
        shape: "arc",
      },
    },

    exporting: {
      enabled: false,
      buttons: {
        contextButton: {
          verticalAlign: "bottom",
          width: 10,
        },
      },
    },

    tooltip: {
      enabled: false,
    },

    // the value axis
    yAxis: {
      stops: [
        [0.1, "#55BF3B"], // green
        [0.5, "#DDDF0D"], // yellow
        [0.9, "#DF5353"], // red
      ],
      lineWidth: 0,
      tickWidth: 0,
      minorTickInterval: null,
      tickAmount: 2,
      // title: {},
      labels: {
        y: 16,
        enabled: false,
      },
    },

    plotOptions: {
      solidgauge: {
        dataLabels: {
          y: 5,
          borderWidth: 0,
          useHTML: true,
        },
      },
    },
  };

  defaultChart3 = Highcharts.chart(
    "defaultchart3",
    Highcharts.merge(gaugeOptions, {
      chart: {
        // height: 100,
      },
      yAxis: {
        min: 0,
        max: 200,
        // title: {
        //   text: "",
        // },
      },

      credits: {
        enabled: false,
      },

      series: [
        {
          name: "Concentration",
          data: [80],
          dataLabels: {
            formatter: function () {
              // console.log(this.y);
              var size = 20;
              return (
                '<div style="text-align:center">' +
                '<span style="font-size:{size}">' +
                Math.round((this.y / 200) * 100) +
                "</span>" +
                '<span style="font-size:12px;opacity:0.4">%</span>' +
                "</div>"
              );
            },
          },
          // tooltip: {
          //   valueSuffix: " km/h",
          // },
        },
      ],
    })
  );

  setInterval(function () {
    // concentration
    var point, newVal, inc;

    if (defaultChart3) {
      point = defaultChart3.series[0].points[0];
      inc = Math.round((Math.random() - 0.5) * 100);
      newVal = point.y + inc;

      if (newVal < 0 || newVal > 200) {
        newVal = point.y - inc;
      }

      point.update(newVal);
    }
  }, 2000);

  // trigger
  setInterval(function () {
    const value = Math.round(Math.random() * 100);
    const threshold = $("#threshold")[0].value;
    if (value > threshold) {
      $("#trigger-img").show();
      $("#trigger-text").show();

      imglist = [
        "./emoji/confused.jpeg",
        "./emoji/thinking.jpeg",
        "./emoji/goodjob.png",
        "./emoji/sleepy.jpeg",
        "./emoji/laugh.jpeg",
      ];
      const i = Math.floor(Math.random() * imglist.length);
      //   console.log(imglist[i]);

      $("#trigger-img").attr("src", imglist[i]);
      $("#trigger-text").html(value + "%");
    } else {
      $("#trigger-img").hide();
      $("#trigger-text").hide();
    }
  }, 3000);
}

function drawRadialChart(container, name) {
  var RadialChart = Highcharts.chart(container, {
    colors: ["#CD7F32"],
    chart: {
      type: "column",
      inverted: true,
      polar: true,
      margin: [30, 0, 40, 0],
      // events: {
      //   load: function () {
      //     var series = this.series[0];
      //     setInterval(function () {
      //       data = [];
      //       data.push(Math.random() * 150);
      //       series.setData(data);
      //     }, 2000);
      //   },
      // },
    },
    exporting: {
      enabled: false,
      buttons: {
        contextButton: {
          verticalAlign: "bottom",
          width: 10,
        },
      },
    },
    title: {
      text: name,
    },
    tooltip: {
      enabled: false,
      outside: true,
    },
    pane: {
      size: "100%",
      innerSize: "50%",
      endAngle: 360,
    },
    xAxis: {
      tickInterval: 1,
      lineWidth: 0,
      categories: [
        ' <span class="f16"><span id="flag" class="flag no">' +
          "</span></span>",
      ],
    },
    yAxis: {
      visible: false,
      crosshair: {
        enabled: true,
        color: "#333",
      },
      lineWidth: 0,
      tickInterval: 25,
      max: 150,
      reversedStacks: false,
      endOnTick: true,
      showLastLabel: true,
    },
    plotOptions: {
      column: {
        stacking: "normal",
        borderWidth: 0,
        pointPadding: 0,
        groupPadding: 0.15,
      },
    },
    legend: {
      labelFormatter: function () {
        return Math.round((this.yData / 150) * 100) + "%";
      },
    },
    series: [
      {
        name: "",
        data: [100],
      },
    ],
  });

  radialInterval = setInterval(function () {
    if (RadialChart) {
      data = [];
      data.push(Math.random() * 150);
      RadialChart.series[0].setData(data);
      console.log("radial chart set data");
    }
  }, 2000);
}

function drawMotorChart(container, name) {
  var gaugeOptions = {
    chart: {
      type: "solidgauge",
      margin: [30, 0, 0, 0],
    },

    title: {
      text: name,
      style: {
        fontSize: ($(window).width - 50) / 10,
      },
    },

    pane: {
      center: ["50%", "50%"],
      size: "100%",
      startAngle: -90,
      endAngle: 90,
      background: {
        backgroundColor:
          Highcharts.defaultOptions.legend.backgroundColor || "#EEE",
        innerRadius: "60%",
        outerRadius: "100%",
        shape: "arc",
      },
    },

    exporting: {
      enabled: false,
      buttons: {
        contextButton: {
          verticalAlign: "bottom",
          width: 10,
        },
      },
    },

    tooltip: {
      enabled: false,
    },

    // the value axis
    yAxis: {
      stops: [
        [0.1, "#55BF3B"], // green
        [0.5, "#DDDF0D"], // yellow
        [0.9, "#DF5353"], // red
      ],
      lineWidth: 0,
      tickWidth: 0,
      minorTickInterval: null,
      tickAmount: 2,
      // title: {},
      labels: {
        y: 16,
        enabled: false,
      },
    },

    plotOptions: {
      solidgauge: {
        dataLabels: {
          y: 5,
          borderWidth: 0,
          useHTML: true,
        },
      },
    },
  };

  var MotorChart = Highcharts.chart(
    container,
    Highcharts.merge(gaugeOptions, {
      yAxis: {
        min: 0,
        max: 200,
      },

      credits: {
        enabled: false,
      },

      series: [
        {
          data: [80],
          dataLabels: {
            formatter: function () {
              // console.log(this.y);
              var size = 20;
              return (
                '<div style="text-align:center">' +
                '<span style="font-size:{size}">' +
                Math.round((this.y / 200) * 100) +
                "</span>" +
                '<span style="font-size:12px;opacity:0.4">%</span>' +
                "</div>"
              );
            },
          },
        },
      ],
    })
  );

  motorInterval = setInterval(function () {
    var point, newVal, inc;

    if (MotorChart) {
      point = MotorChart.series[0].points[0];
      inc = Math.round((Math.random() - 0.5) * 100);
      newVal = point.y + inc;

      if (newVal < 0 || newVal > 200) {
        newVal = point.y - inc;
      }

      point.update(newVal);
    }
  }, 2000);
}

function drawBarChart(container, name) {
  var BarChart = Highcharts.chart(container, {
    chart: {
      type: "bar",
      margin: [20, 0, 40, 0],
      height: 120,
    },
    exporting: {
      enabled: false,
    },
    title: {
      text: name,
    },
    tooltip: {
      enabled: false,
    },
    xAxis: {
      tickInterval: 1,
      lineWidth: 0,
    },
    yAxis: {
      crosshair: {
        enabled: true,
        color: "#333",
      },
      lineWidth: 0,
      tickInterval: 25,
      max: 150,
      reversedStacks: false,
      labels: {
        enabled: false,
      },
      title: undefined,
    },
    plotOptions: {
      column: {
        stacking: "normal",
        borderWidth: 0,
        pointPadding: 0,
        groupPadding: 0.15,
      },
    },
    legend: {
      labelFormatter: function () {
        return Math.round((this.yData / 150) * 100) + "%";
      },
    },
    series: [
      {
        name: "",
        data: [100],
      },
    ],
  });

  barInterval = setInterval(function () {
    if (BarChart) {
      data = [];
      data.push(Math.random() * 150);
      BarChart.series[0].setData(data);
      console.log("bar chart set data");
    }
  }, 2000);
}

function handleDefaultChart1() {
  console.log("handle default chart 1");
  if (barInterval) clearInterval(barInterval);
  if (radialInterval) clearInterval(radialInterval);
  if (motorInterval) clearInterval(motorInterval);

  if (default1 == 0) {
    drawMotorChart("defaultchart1", "Gaze");
    document.cookie = "gazecharttype=Motor";
  } else if (default1 == 1) {
    drawRadialChart("defaultchart1", "Gaze");
    document.cookie = "gazecharttype=Radial";
  } else {
    drawBarChart("defaultchart1", "Gaze");
    document.cookie = "gazecharttype=Bar";
    // $("#defaultchart1").css("height", 200);
  }
  default1 = (default1 + 1) % 3;
}

function handleDefault1() {
  //   console.log("handle default 1");
  //   console.log($("#defaultcheck1")[0].checked);
  if ($("#defaultcheck1")[0].checked) {
    $("#defaultchart1").show();
  } else {
    $("#defaultchart1").hide();
  }
}

function handleDefault2() {
  if ($("#defaultcheck2")[0].checked) {
    $("#defaultchart2").show();
  } else {
    $("#defaultchart2").hide();
  }
}

function handleDefault3() {
  if ($("#defaultcheck3")[0].checked) {
    $("#defaultchart3").show();
  } else {
    $("#defaultchart3").hide();
  }
}

function handleDefaultT() {
  if ($("#defaultcheckt")[0].checked) {
    $("#defaultTrigger").show();
  } else {
    $("#defaultTrigger").hide();
  }
}
