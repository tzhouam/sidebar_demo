function handleThresholdChange() {
  //   console.log($("#threshold")[0].value);
  const threshold = $("#threshold")[0].value;
  $("#thresholdtext").html("> " + threshold);
}

var radialInterval1,
  motorInterval1,
  barInterval1,
  radialInterval2,
  motorInterval2,
  barInterval2,
  radialInterval3,
  motorInterval3,
  barInterval3,
  radialInterval4,
  motorInterval4,
  barInterval4,
  default1 = 0,
  default2 = 0,
  default3 = 0,
  default4 = 0;

function loadDefaultWindow() {
  // d3.select("svg.highcharts-root").selectAll("rect").remove();
  // .append("circle")
  // .attr("cx", 50)
  // .attr("cy", 10)
  // .attr("r", 10)
  // .attr("fill", "red");

  // get the chart type
  console.log(document.cookie);
  var cookieList = document.cookie.split("; ");

  console.log("cookie list:", cookieList);

  var gazeChartType,
    gazeChartName = "gazecharttype";
  cookieList.forEach((val) => {
    if (val.indexOf(gazeChartName) === 0)
      gazeChartType = val.substring(gazeChartName.length + 1);
  });
  console.log("gaze:", gazeChartType);

  var concenChartType,
    concenChartName = "concencharttype";
  cookieList.forEach((val) => {
    if (val.indexOf(concenChartName) === 0)
      concenChartType = val.substring(concenChartName.length + 1);
  });
  console.log("concen:", concenChartType);

  var confusedChartType,
    confusedChartName = "confusedcharttype";
  cookieList.forEach((val) => {
    if (val.indexOf(confusedChartName) === 0)
      confusedChartType = val.substring(confusedChartName.length + 1);
  });
  console.log("confused:", confusedChartType);

  var emoChartType,
    emoChartName = "emocharttype";
  cookieList.forEach((val) => {
    if (val.indexOf(emoChartName) === 0)
      emoChartType = val.substring(emoChartName.length + 1);
  });
  console.log("emo:", emoChartType);

  // make it sortable
  // $("#draggable").draggable();
  $("#sortable").sortable({
    // placeholder: "ui-state-highlight",
  });
  $("#sortable").disableSelection();

  // initial width
  const width = $(window).width - 50;
  $("#defaultchart2").css("width", width);
  // $("#defaultchart2").css("height", width + 50);
  $("#defaultchart3").css("width", width);
  // $("#defaultchart3").css("height", 120);
  $("#defaultchart1").css("width", width);
  // $("#defaultchart1").css("height", width + 50 - 100);
  $("#defaultTrigger").css("width", width);
  // $("#defaultTrigger").css("height", width + 50);
  //   console.log(width);

  // defaultChart1 = Highcharts.chart("defaultchart1", {
  //   colors: ["#CD7F32"],
  //   chart: {
  //     type: "column",
  //     inverted: true,
  //     polar: true,
  //     margin: [30, 0, 40, 0],
  //     // height: 150,
  //     // width: 100,
  //     // events: {
  //     //   load: function () {
  //     //     var series = this.series[0];
  //     //     interval1 = setInterval(function () {
  //     //       data = [];
  //     //       data.push(Math.random() * 150);
  //     //       series.setData(data);
  //     //       // console.log(data);
  //     //     }, 2000);
  //     //   },

  //     // reflow: false,

  //     // redraw: function () {
  //     //   this.setSize(150, 100);
  //     //   console.log("redraw");
  //     // },
  //     // },
  //   },
  //   exporting: {
  //     enabled: false,
  //     buttons: {
  //       contextButton: {
  //         verticalAlign: "bottom",
  //         width: 10,
  //       },
  //     },
  //   },
  //   title: {
  //     text: "Gaze",
  //   },
  //   tooltip: {
  //     enabled: false,
  //     outside: true,
  //   },
  //   pane: {
  //     size: "100%",
  //     innerSize: "50%",
  //     endAngle: 360,
  //   },
  //   xAxis: {
  //     tickInterval: 1,
  //     lineWidth: 0,
  //     categories: [
  //       ' <span class="f16"><span id="flag" class="flag no">' +
  //         "</span></span>",
  //     ],
  //   },
  //   yAxis: {
  //     visible: false,
  //     crosshair: {
  //       enabled: true,
  //       color: "#333",
  //     },
  //     lineWidth: 0,
  //     tickInterval: 25,
  //     max: 150,
  //     reversedStacks: false,
  //     endOnTick: true,
  //     showLastLabel: true,
  //   },
  //   plotOptions: {
  //     column: {
  //       stacking: "normal",
  //       borderWidth: 0,
  //       pointPadding: 0,
  //       groupPadding: 0.15,
  //     },
  //   },
  //   legend: {
  //     // enabled: false,
  //     labelFormatter: function () {
  //       // console.log(this.yData);
  //       return Math.round((this.yData / 150) * 100) + "%";
  //     },
  //   },
  //   series: [
  //     {
  //       name: "",
  //       data: [100],
  //     },
  //   ],
  // });

  // radialInterval = setInterval(function () {
  //   if (defaultChart1) {
  //     data = [];
  //     data.push(Math.random() * 150);
  //     defaultChart1.series[0].setData(data);
  //     console.log("radial chart set data");
  //   }
  // }, 2000);

  // draw default 1 gaze
  if (barInterval1) clearInterval(barInterval1);
  if (radialInterval1) clearInterval(radialInterval1);
  if (motorInterval1) clearInterval(motorInterval1);

  if (gazeChartType == "Motor") {
    drawMotorChart("defaultchart1", "Gaze");
    $("#defaultchart1").css("height", 120);
  } else if (gazeChartType == "Radial") {
    drawRadialChart("defaultchart1", "Gaze");
    $("#defaultchart1").css("height", 160);
  } else {
    drawBarChart("defaultchart1", "Gaze");
    $("#defaultchart1").css("height", 90);
  }

  // draw default 2 confused
  if (barInterval2) clearInterval(barInterval2);
  if (radialInterval2) clearInterval(radialInterval2);
  if (motorInterval2) clearInterval(motorInterval2);

  if (confusedChartType == "Motor") {
    drawMotorChart("defaultchart2", "Confused");
    $("#defaultchart2").css("height", 120);
  } else if (confusedChartType == "Radial") {
    drawRadialChart("defaultchart2", "Confused");
    $("#defaultchart2").css("height", 160);
  } else {
    drawBarChart("defaultchart2", "Confused");
    $("#defaultchart2").css("height", 90);
  }

  // draw default 3 concentration
  if (barInterval3) clearInterval(barInterval3);
  if (radialInterval3) clearInterval(radialInterval3);
  if (motorInterval3) clearInterval(motorInterval3);

  if (concenChartType == "Motor") {
    drawMotorChart("defaultchart3", "Concentration");
    $("#defaultchart3").css("height", 120);
  } else if (concenChartType == "Radial") {
    drawRadialChart("defaultchart3", "Concentration");
    $("#defaultchart3").css("height", 160);
  } else {
    drawBarChart("defaultchart3", "Concentration");
    $("#defaultchart3").css("height", 90);
  }

  // draw default 4 emotion
  if (barInterval4) clearInterval(barInterval4);
  if (radialInterval4) clearInterval(radialInterval4);
  if (motorInterval4) clearInterval(motorInterval4);

  if (emoChartType == "Motor") {
    drawMotorChart("defaultchart4", "Emotion");
    $("#defaultchart4").css("height", 120);
  } else if (emoChartType == "Radial") {
    drawRadialChart("defaultchart4", "Emotion");
    $("#defaultchart4").css("height", 160);
  } else {
    drawBarChart("defaultchart4", "Emotion");
    $("#defaultchart4").css("height", 90);
  }

  // defaultChart2 = Highcharts.chart("defaultchart2", {
  //   colors: ["#FFD700"],
  //   chart: {
  //     type: "column",
  //     inverted: true,
  //     polar: true,
  //     margin: [30, 0, 40, 0],
  //     // height: 150,
  //     events: {
  //       load: function () {
  //         var series = this.series[0];
  //         setInterval(function () {
  //           data = [];
  //           data.push(Math.random() * 150);
  //           series.setData(data);
  //           // console.log(data);
  //         }, 2000);
  //       },
  //     },
  //   },
  //   exporting: {
  //     buttons: {
  //       contextButton: {
  //         verticalAlign: "bottom",
  //         width: 10,
  //       },
  //     },
  //   },
  //   title: {
  //     text: "Confused",
  //   },
  //   tooltip: {
  //     enabled: false,
  //     outside: true,
  //   },
  //   pane: {
  //     size: "100%",
  //     innerSize: "50%",
  //     endAngle: 360,
  //   },
  //   xAxis: {
  //     tickInterval: 1,
  //     // labels: {
  //     //   align: "right",
  //     //   useHTML: true,
  //     //   allowOverlap: true,
  //     //   step: 1,
  //     //   y: 1,
  //     //   style: {
  //     //     fontSize: "13px",
  //     //   },
  //     // },
  //     lineWidth: 0,
  //     categories: [
  //       ' <span class="f16"><span id="flag" class="flag no">' +
  //         "</span></span>",
  //       // 'United States <span class="f16"><span id="flag" class="flag us">' +
  //       //   "</span></span>",
  //       // 'Germany <span class="f16"><span id="flag" class="flag de">' +
  //       //   "</span></span>",
  //       // 'Canada <span class="f16"><span id="flag" class="flag ca">' +
  //       //   "</span></span>",
  //       // 'Austria <span class="f16"><span id="flag" class="flag at">' +
  //       //   "</span></span>",
  //     ],
  //   },
  //   yAxis: {
  //     visible: false,
  //     crosshair: {
  //       enabled: true,
  //       color: "#333",
  //     },
  //     lineWidth: 0,
  //     tickInterval: 25,
  //     max: 150,
  //     reversedStacks: false,
  //     endOnTick: true,
  //     showLastLabel: true,
  //   },
  //   plotOptions: {
  //     column: {
  //       stacking: "normal",
  //       borderWidth: 0,
  //       pointPadding: 0,
  //       groupPadding: 0.15,
  //     },
  //   },
  //   legend: {
  //     // enabled: false,
  //     labelFormatter: function () {
  //       // console.log(this.yData);
  //       return Math.round((this.yData / 150) * 100) + "%";
  //     },
  //   },
  //   series: [
  //     {
  //       name: "Gold medals",
  //       // data: [132, 105, 92, 73, 64],
  //       data: [100],
  //     },
  //     // {
  //     //   name: "Silver medals",
  //     //   // data: [125, 110, 86, 64, 81],
  //     //   data: [125],
  //     // },
  //     // {
  //     //   name: "Bronze medals",
  //     //   // data: [111, 90, 60, 62, 87],
  //     //   data: [111],
  //     // },
  //   ],
  // });

  // var gaugeOptions = {
  //   chart: {
  //     type: "solidgauge",
  //     margin: [30, 0, 0, 0],
  //     height: 118,
  //     //   events: {
  //     // redraw() {
  //     //   console.log("redraw:", this.title.alignOptions.text);
  //     // this.series[0].update({ dataLabels: { style: { fontSize: 20 } } });
  //     // },
  //     //   },
  //   },

  //   title: {
  //     text: "Concentration",
  //     style: {
  //       fontSize: ($(window).width - 50) / 10,
  //     },
  //   },

  //   pane: {
  //     center: ["50%", "50%"],
  //     size: "100%",
  //     startAngle: -90,
  //     endAngle: 90,
  //     background: {
  //       backgroundColor:
  //         Highcharts.defaultOptions.legend.backgroundColor || "#EEE",
  //       innerRadius: "60%",
  //       outerRadius: "100%",
  //       shape: "arc",
  //     },
  //   },

  //   exporting: {
  //     enabled: false,
  //     buttons: {
  //       contextButton: {
  //         verticalAlign: "bottom",
  //         width: 10,
  //       },
  //     },
  //   },

  //   tooltip: {
  //     enabled: false,
  //   },

  //   // the value axis
  //   yAxis: {
  //     stops: [
  //       [0.1, "#55BF3B"], // green
  //       [0.5, "#DDDF0D"], // yellow
  //       [0.9, "#DF5353"], // red
  //     ],
  //     lineWidth: 0,
  //     tickWidth: 0,
  //     minorTickInterval: null,
  //     tickAmount: 2,
  //     // title: {},
  //     labels: {
  //       y: 16,
  //       enabled: false,
  //     },
  //   },

  //   plotOptions: {
  //     solidgauge: {
  //       dataLabels: {
  //         y: 5,
  //         borderWidth: 0,
  //         useHTML: true,
  //       },
  //     },
  //   },
  // };

  // defaultChart3 = Highcharts.chart(
  //   "defaultchart3",
  //   Highcharts.merge(gaugeOptions, {
  //     chart: {
  //       // height: 100,
  //     },
  //     yAxis: {
  //       min: 0,
  //       max: 200,
  //       // title: {
  //       //   text: "",
  //       // },
  //     },

  //     credits: {
  //       enabled: false,
  //     },

  //     series: [
  //       {
  //         name: "Concentration",
  //         data: [80],
  //         dataLabels: {
  //           formatter: function () {
  //             // console.log(this.y);
  //             var size = 20;
  //             return (
  //               '<div style="text-align:center">' +
  //               '<span style="font-size:{size}">' +
  //               Math.round((this.y / 200) * 100) +
  //               "</span>" +
  //               '<span style="font-size:12px;opacity:0.4">%</span>' +
  //               "</div>"
  //             );
  //           },
  //         },
  //         // tooltip: {
  //         //   valueSuffix: " km/h",
  //         // },
  //       },
  //     ],
  //   })
  // );

  // setInterval(function () {
  //   // concentration
  //   var point, newVal, inc;

  //   if (defaultChart3) {
  //     point = defaultChart3.series[0].points[0];
  //     inc = Math.round((Math.random() - 0.5) * 100);
  //     newVal = point.y + inc;

  //     if (newVal < 0 || newVal > 200) {
  //       newVal = point.y - inc;
  //     }

  //     point.update(newVal);
  //   }
  // }, 2000);

  // trigger
  setInterval(function () {
    const value = Math.round(Math.random() * 100);
    const threshold = $("#threshold")[0].value;
    if (value > threshold) {
      // $("#trigger-img").show();
      // $("#trigger-text").show();

      // change the height of the card
      $("#defaultTrigger").css("height", "8rem");

      imglist = [
        "./emoji/confused.jpeg",
        "./emoji/thinking.jpeg",
        "./emoji/goodjob.png",
        "./emoji/sleepy.jpeg",
        "./emoji/laugh.jpeg",
      ];
      const i = Math.floor(Math.random() * imglist.length);
      //   console.log(imglist[i]);

      // $("#trigger-img").attr("src", imglist[i]);
      // $("#trigger-text").html(value + "%");

      // svg
      var svg = d3.select("svg#trigger-svg");
      svg.selectAll("image").remove();
      svg.selectAll("circle").remove();
      svg.selectAll("text").remove();

      var img = svg
        .append("image")
        .attr("xlink:href", imglist[i])
        .attr("width", 60)
        .attr("height", 60)
        .attr("x", 0)
        .attr("y", 0);

      var hint = svg
        .append("circle")
        .attr("cx", 50)
        .attr("cy", 10)
        .attr("r", 10)
        .attr("fill", "red");

      var text = svg
        .append("text")
        .attr("x", 50)
        .attr("y", 15)
        .attr("fill", "white")
        .attr("font-size", 15)
        .text(value)
        .attr("text-anchor", "middle");
    } else {
      // change the height of the card
      $("#defaultTrigger").css("height", "3rem");

      var svg = d3.select("svg#trigger-svg");
      svg.selectAll("image").remove();
      svg.selectAll("circle").remove();
      svg.selectAll("text").remove();

      // $("#trigger-img").hide();
      // $("#trigger-text").hide();
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
      height: 140,
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

  var radialInterval = setInterval(function () {
    if (RadialChart) {
      data = [];
      data.push(Math.random() * 150);
      RadialChart.series[0].setData(data);
      console.log("radial chart set data");
    }
  }, 2000);

  return radialInterval;
}

function drawMotorChart(container, name) {
  var gaugeOptions = {
    chart: {
      type: "solidgauge",
      margin: [30, 0, 0, 0],
      height: 118,
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

  var motorInterval = setInterval(function () {
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

  return motorInterval;
}

function drawBarChart(container, name, barInterval) {
  var BarChart = Highcharts.chart(container, {
    chart: {
      type: "bar",
      margin: [20, 0, 40, 0],
      height: 100,
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

  var barInterval = setInterval(function () {
    if (BarChart) {
      data = [];
      data.push(Math.random() * 150);
      BarChart.series[0].setData(data);
      console.log("bar chart set data");
    }
  }, 2000);

  return barInterval;
}

function handleDefaultChart1() {
  console.log("handle default chart 1");
  if (barInterval1) clearInterval(barInterval1);
  if (radialInterval1) clearInterval(radialInterval1);
  if (motorInterval1) clearInterval(motorInterval1);

  if (default1 == 0) {
    motorInterval1 = drawMotorChart("defaultchart1", "Gaze");
    document.cookie = "gazecharttype=Motor";
    $("#defaultchart1").css("height", 120);
  } else if (default1 == 1) {
    radialInterval1 = drawRadialChart("defaultchart1", "Gaze");
    document.cookie = "gazecharttype=Radial";
    $("#defaultchart1").css("height", 160);
  } else {
    barInterval1 = drawBarChart("defaultchart1", "Gaze");
    document.cookie = "gazecharttype=Bar";
    $("#defaultchart1").css("height", 90);
  }
  default1 = (default1 + 1) % 3;
}

function handleDefaultChart2() {
  console.log("handle default chart 2");
  if (barInterval2) clearInterval(barInterval2);
  if (radialInterval2) clearInterval(radialInterval2);
  if (motorInterval2) clearInterval(motorInterval2);

  if (default2 == 0) {
    drawMotorChart("defaultchart2", "Confused");
    document.cookie = "confusedcharttype=Motor";
    $("#defaultchart2").css("height", 120);
  } else if (default2 == 1) {
    drawRadialChart("defaultchart2", "Confused");
    document.cookie = "confusedcharttype=Radial";
    $("#defaultchart2").css("height", 160);
  } else {
    drawBarChart("defaultchart2", "Confused");
    document.cookie = "confusedcharttype=Bar";
    $("#defaultchart2").css("height", 90);
  }
  default2 = (default2 + 1) % 3;
}

function handleDefaultChart3() {
  console.log("handle default chart 3");
  if (barInterval3) clearInterval(barInterval3);
  if (radialInterval3) clearInterval(radialInterval3);
  if (motorInterval3) clearInterval(motorInterval3);

  if (default3 == 0) {
    drawMotorChart("defaultchart3", "concentration");
    document.cookie = "concencharttype=Motor";
    $("#defaultchart3").css("height", 120);
  } else if (default3 == 1) {
    drawRadialChart("defaultchart3", "concentration");
    document.cookie = "concencharttype=Radial";
    $("#defaultchart3").css("height", 160);
  } else {
    drawBarChart("defaultchart3", "concentration");
    document.cookie = "concencharttype=Bar";
    $("#defaultchart3").css("height", 90);
  }
  default3 = (default3 + 1) % 3;
}

function handleDefaultChart4() {
  console.log("handle default chart 1");
  if (barInterval4) clearInterval(barInterval4);
  if (radialInterval4) clearInterval(radialInterval4);
  if (motorInterval4) clearInterval(motorInterval4);

  if (default4 == 0) {
    drawMotorChart("defaultchart4", "Emotion");
    document.cookie = "emocharttype=Motor";
    $("#defaultchart4").css("height", 120);
  } else if (default4 == 1) {
    drawRadialChart("defaultchart4", "Emotion");
    document.cookie = "emocharttype=Radial";
    $("#defaultchart4").css("height", 160);
  } else {
    drawBarChart("defaultchart4", "Emotion");
    document.cookie = "emocharttype=Bar";
    $("#defaultchart4").css("height", 90);
  }
  default4 = (default4 + 1) % 3;
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

function handleDefault4() {
  if ($("#defaultcheck4")[0].checked) {
    $("#defaultchart4").show();
  } else {
    $("#defaultchart4").hide();
  }
}

function handleDefaultT() {
  if ($("#defaultcheckt")[0].checked) {
    $("#defaultTrigger").show();
  } else {
    $("#defaultTrigger").hide();
  }
}

const containers = [
  "defaultchart1",
  "defaultchart2",
  "defaultchart3",
  "defaultchart4",
  "defaultTrigger",
];

function handleHighlight(container) {
  containers.forEach((item) => {
    if (item != container) $("#" + item).css("opacity", "0.5");
    else {
      $("#" + item).css("border-color", "orange");
      $("#" + item).css("border-width", "3");
    }
  });
  // $("#defaultchart1").css("background-color", "orange");
  // $("#defaultchart2").css("opacity", "0.5");
  // $("#defaultchart3").css("opacity", "0.5");
  // $("#defaultchart4").css("opacity", "0.5");
  // $("#defaultTrigger").css("opacity", "0.5");
}

function handleUndoHighlight(container) {
  containers.forEach((item) => {
    if (item != container) $("#" + item).css("opacity", "1");
    else {
      $("#" + item).css("border-color", "");
      $("#" + item).css("border-width", "1");
    }
  });
  // $("#defaultchart1").css("background-color", "");
  // $("#defaultchart2").css("opacity", "1");
  // $("#defaultchart3").css("opacity", "1");
  // $("#defaultchart4").css("opacity", "1");
  // $("#defaultTrigger").css("opacity", "1");
}
