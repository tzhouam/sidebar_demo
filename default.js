function handleThresholdChange() {
  //   console.log($("#threshold")[0].value);
  const threshold = $("#threshold")[0].value;
  $("#thresholdtext").html("> " + threshold);
}

function handleHidden() {
  console.log($("#chart_type").is(":visible"));
  if ($("#chart_type").is(":visible")) $("#hidden_space").hide();
  else $("#hidden_space").show();
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

const themes = {
  theme_purple: {
    defaultTrigger: "247, 209, 205",
    defaultchart1: "179, 146, 172",
    defaultchart2: "209, 179, 196",
    defaultchart3: "232, 194, 202",
    defaultchart4: "115, 93, 120",
    // bar: "#f38375",
    // radial: "#f7a399",
    motor: [
      [0.1, "#e0b1cb"],
      [0.5, "#9f86c0"],
      [0.9, "#231942"],
    ],
  },
  theme_blue: {
    defaultTrigger: "173, 232, 244",
    defaultchart1: "56, 111, 164",
    defaultchart2: "89, 165, 216",
    defaultchart3: "144, 224, 239",
    defaultchart4: "19, 60, 85",
    // bar: "#f38375",
    // radial: "#f7a399",
    motor: [
      [0.1, "#caf0f8"],
      [0.5, "#59A5D8"],
      [0.9, "#133C55"],
    ],
  },
  theme_orange: {
    defaultTrigger: "247, 178, 103",
    defaultchart1: "242, 112, 89",
    defaultchart2: "244, 132, 95",
    defaultchart3: "247, 157, 101",
    defaultchart4: "242, 92, 84",
    // bar: "#f38375",
    // radial: "#f7a399",
    motor: [
      [0.1, "#f7b267"],
      [0.5, "#f4845f"],
      [0.9, "#a4243b"],
    ],
  },
};

function loadDefaultWindow() {
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

  // get theme
  var themeid,
    themeName = "themeid";
  cookieList.forEach((val) => {
    if (val.indexOf(themeName) === 0)
      themeid = val.substring(themeName.length + 1);
  });
  const theme = themes[themeid];
  console.log("theme:", theme);

  // set theme
  for (const [key, value] of Object.entries(theme)) {
    console.log(`${key}: ${value}`);
    $(`#${key}`).css("border-color", `rgb(${value})`);
    $(`#${key}Check`).css("background-color", `rgba(${value},0.5)`);
    // $(`#${key}Check`).css("opacity", 0.5);
  }

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

  // draw default 1 gaze
  if (barInterval1) clearInterval(barInterval1);
  if (radialInterval1) clearInterval(radialInterval1);
  if (motorInterval1) clearInterval(motorInterval1);

  if (gazeChartType == "Motor") {
    drawMotorChart("defaultchart1", "Gaze", theme);
    $("#defaultchart1").css("height", 120);
  } else if (gazeChartType == "Radial") {
    drawRadialChart("defaultchart1", "Gaze", theme);
    $("#defaultchart1").css("height", 140);
  } else {
    drawBarChart("defaultchart1", "Gaze", theme);
    $("#defaultchart1").css("height", 90);
  }

  // draw default 2 confused
  if (barInterval2) clearInterval(barInterval2);
  if (radialInterval2) clearInterval(radialInterval2);
  if (motorInterval2) clearInterval(motorInterval2);

  if (confusedChartType == "Motor") {
    drawMotorChart("defaultchart2", "Confused", theme);
    $("#defaultchart2").css("height", 120);
  } else if (confusedChartType == "Radial") {
    drawRadialChart("defaultchart2", "Confused", theme);
    $("#defaultchart2").css("height", 140);
  } else {
    drawBarChart("defaultchart2", "Confused", theme);
    $("#defaultchart2").css("height", 90);
  }

  // draw default 3 concentration
  if (barInterval3) clearInterval(barInterval3);
  if (radialInterval3) clearInterval(radialInterval3);
  if (motorInterval3) clearInterval(motorInterval3);

  if (concenChartType == "Motor") {
    drawMotorChart("defaultchart3", "Concentration", theme);
    $("#defaultchart3").css("height", 120);
  } else if (concenChartType == "Radial") {
    drawRadialChart("defaultchart3", "Concentration", theme);
    $("#defaultchart3").css("height", 140);
  } else {
    drawBarChart("defaultchart3", "Concentration", theme);
    $("#defaultchart3").css("height", 90);
  }

  // draw default 4 emotion
  if (barInterval4) clearInterval(barInterval4);
  if (radialInterval4) clearInterval(radialInterval4);
  if (motorInterval4) clearInterval(motorInterval4);

  if (emoChartType == "Motor") {
    drawMotorChart("defaultchart4", "Emotion", theme);
    $("#defaultchart4").css("height", 120);
  } else if (emoChartType == "Radial") {
    drawRadialChart("defaultchart4", "Emotion", theme);
    $("#defaultchart4").css("height", 140);
  } else {
    drawBarChart("defaultchart4", "Emotion", theme);
    $("#defaultchart4").css("height", 90);
  }

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
        "./emoji/frown.gif",
        "./emoji/laugh.gif",
        "./emoji/nod.gif",
        "./emoji/shake.gif",
        "./emoji/sleep.gif",
        "./emoji/smile.gif",
        "./emoji/speak.gif",
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

function drawRadialChart(container, name, theme) {
  var RadialChart = Highcharts.chart(container, {
    colors: [`rgb(${theme[container]})`],
    credits: false,
    chart: {
      type: "column",
      inverted: true,
      polar: true,
      margin: [30, 0, 40, 0],
      height: 140,
      // backgroundColor: "lightblue",
      // borderColor: "lightblue",
      // borderWidth: 2,
      // plotBackgroundImage: "info_img/engage.png",

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
      style: { fontSize: "13px" },
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

  RadialChart.renderer.image("info_img/confuse.png", 36, 53, 22, 22).add();

  var radialInterval = setInterval(function () {
    if (RadialChart) {
      data = [];
      data.push(Math.random() * 150);
      RadialChart.series[0].setData(data);
      // console.log("radial chart set data");
    }
  }, 2000);

  return radialInterval;
}

function drawMotorChart(container, name, theme) {
  console.log(theme);
  var gaugeOptions = {
    chart: {
      type: "solidgauge",
      margin: [30, 0, 0, 0],
      height: 118,
    },

    title: {
      text: name,
      style: { fontSize: "13px" },
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
      // stops: [
      //   [0.1, "#55BF3B"], // green
      //   [0.5, "#DDDF0D"], // yellow
      //   [0.9, "#DF5353"], // red
      // ],
      stops: theme.motor,
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

function drawBarChart(container, name, theme, barInterval) {
  var BarChart = Highcharts.chart(container, {
    colors: [`rgb(${theme[container]})`],
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
      style: { fontSize: "13px" },
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
      // console.log("bar chart set data");
    }
  }, 2000);

  return barInterval;
}

function handleDefaultChart1() {
  // get theme
  var cookieList = document.cookie.split("; ");
  var themeid,
    themeName = "themeid";
  cookieList.forEach((val) => {
    if (val.indexOf(themeName) === 0)
      themeid = val.substring(themeName.length + 1);
  });
  const theme = themes[themeid];

  console.log("handle default chart 1");
  if (barInterval1) clearInterval(barInterval1);
  if (radialInterval1) clearInterval(radialInterval1);
  if (motorInterval1) clearInterval(motorInterval1);

  if (default1 == 0) {
    motorInterval1 = drawMotorChart("defaultchart1", "Gaze", theme);
    document.cookie = "gazecharttype=Motor";
    $("#defaultchart1").css("height", 120);
  } else if (default1 == 1) {
    radialInterval1 = drawRadialChart("defaultchart1", "Gaze", theme);
    document.cookie = "gazecharttype=Radial";
    $("#defaultchart1").css("height", 140);
  } else {
    barInterval1 = drawBarChart("defaultchart1", "Gaze", theme);
    document.cookie = "gazecharttype=Bar";
    $("#defaultchart1").css("height", 90);
  }
  default1 = (default1 + 1) % 3;
}

function handleDefaultChart2() {
  // get theme
  var cookieList = document.cookie.split("; ");
  var themeid,
    themeName = "themeid";
  cookieList.forEach((val) => {
    if (val.indexOf(themeName) === 0)
      themeid = val.substring(themeName.length + 1);
  });
  const theme = themes[themeid];

  console.log("handle default chart 2");
  if (barInterval2) clearInterval(barInterval2);
  if (radialInterval2) clearInterval(radialInterval2);
  if (motorInterval2) clearInterval(motorInterval2);

  if (default2 == 0) {
    drawMotorChart("defaultchart2", "Confused", theme);
    document.cookie = "confusedcharttype=Motor";
    $("#defaultchart2").css("height", 120);
  } else if (default2 == 1) {
    drawRadialChart("defaultchart2", "Confused", theme);
    document.cookie = "confusedcharttype=Radial";
    $("#defaultchart2").css("height", 140);
  } else {
    drawBarChart("defaultchart2", "Confused", theme);
    document.cookie = "confusedcharttype=Bar";
    $("#defaultchart2").css("height", 90);
  }
  default2 = (default2 + 1) % 3;
}

function handleDefaultChart3() {
  // get theme
  var cookieList = document.cookie.split("; ");
  var themeid,
    themeName = "themeid";
  cookieList.forEach((val) => {
    if (val.indexOf(themeName) === 0)
      themeid = val.substring(themeName.length + 1);
  });
  const theme = themes[themeid];

  console.log("handle default chart 3");
  if (barInterval3) clearInterval(barInterval3);
  if (radialInterval3) clearInterval(radialInterval3);
  if (motorInterval3) clearInterval(motorInterval3);

  if (default3 == 0) {
    drawMotorChart("defaultchart3", "concentration", theme);
    document.cookie = "concencharttype=Motor";
    $("#defaultchart3").css("height", 120);
  } else if (default3 == 1) {
    drawRadialChart("defaultchart3", "concentration", theme);
    document.cookie = "concencharttype=Radial";
    $("#defaultchart3").css("height", 140);
  } else {
    drawBarChart("defaultchart3", "concentration", theme);
    document.cookie = "concencharttype=Bar";
    $("#defaultchart3").css("height", 90);
  }
  default3 = (default3 + 1) % 3;
}

function handleDefaultChart4() {
  // get theme
  var cookieList = document.cookie.split("; ");
  var themeid,
    themeName = "themeid";
  cookieList.forEach((val) => {
    if (val.indexOf(themeName) === 0)
      themeid = val.substring(themeName.length + 1);
  });
  const theme = themes[themeid];

  console.log("handle default chart 1");
  if (barInterval4) clearInterval(barInterval4);
  if (radialInterval4) clearInterval(radialInterval4);
  if (motorInterval4) clearInterval(motorInterval4);

  if (default4 == 0) {
    drawMotorChart("defaultchart4", "Emotion", theme);
    document.cookie = "emocharttype=Motor";
    $("#defaultchart4").css("height", 120);
  } else if (default4 == 1) {
    drawRadialChart("defaultchart4", "Emotion", theme);
    document.cookie = "emocharttype=Radial";
    $("#defaultchart4").css("height", 140);
  } else {
    drawBarChart("defaultchart4", "Emotion", theme);
    document.cookie = "emocharttype=Bar";
    $("#defaultchart4").css("height", 90);
  }
  default4 = (default4 + 1) % 3;
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
      // $("#" + item).css("border-color", "orange");
      $("#" + item).css("border-width", "5");
    }
  });
}

function handleUndoHighlight(container) {
  containers.forEach((item) => {
    if (item != container) $("#" + item).css("opacity", "1");
    else {
      // $("#" + item).css("border-color", "");
      $("#" + item).css("border-width", "3");
    }
  });
  // for (const [key, value] of Object.entries(theme)) {
  //   console.log(`${key}: ${value}`);
  //   $(`#${key}`).css("border-color", `rgb(${value})`);
  //   $(`#${key}Check`).css("background-color", `rgba(${value},0.5)`);
  //   // $(`#${key}Check`).css("opacity", 0.5);
  // }
}


function makeHighRes(canvas) {
        var ctx = canvas.getContext('2d');
        // Get the device pixel ratio, falling back to 1.
        var dpr = window.devicePixelRatio || window.webkitDevicePixelRatio || window.mozDevicePixelRatio || 1;

        // Get the size of the canvas in CSS pixels.
        var oldWidth = canvas.width;
        var oldHeight = canvas.height;
        // Give the canvas pixel dimensions of their CSS
        // size * the device pixel ratio.
        canvas.width = Math.round(oldWidth * dpr);
        canvas.height = Math.round(oldHeight * dpr);
        canvas.style.width = oldWidth + 'px';
        canvas.style.height = oldHeight + 'px';
        // Scale all drawing operations by the dpr, so you
        // don't have to worry about the difference.
        ctx.scale(dpr, dpr);
        return ctx;
      }


      function draw(a,b,cw,ch,threshold=10) {

          try {
              var list = [0, 0, 0, 0, 0, 0, 0, 0, 0];
              var ratio = 100 / 840;
              var min = 0;
              if (cw > ch) {
                  min = ch;
              } else {
                  min = cw;
              }
              var canvas = document.getElementById('emotion_wheel');
              if (!canvas.getContext) return;
              // const temp_canvas = document.createElement('canvas');
              // document.getElementById("emotion_container").insertBefore(temp_canvas,canvas);
              // //temp_canvas.style.display="none";
              // temp_canvas.width =cw; temp_canvas.height = ch;
              // temp_canvas.style.backgroundImage="url('eomtionwheel_bg.png'')";
              // temp_canvas.style.backgroundSize="100px 100px"
              // temp_canvas.style.backgroundRepeat="no-repeat";
              var ctx = makeHighRes(canvas);
              ctx.clearRect(0,0,cw,ch);
              for (var i = 0; i < a.length; i++) {
                  var angle = 0;
                  var index = 1;
                  if (a[i] !== 0) {
                      if(a[i]<0){
                          angle = Math.atan(b[i] / a[i])+Math.PI;
                      }
                      else {
                          if(b[i]>0){
                              angle = Math.atan(b[i] / a[i]);
                          }
                          else {
                              angle = Math.atan(b[i] / a[i])+Math.PI*2;
                          }
                      }
                      if (Math.abs(a[i]) >= Math.abs(b[i])) {
                          index = Math.abs(Math.cos(angle));
                      } else {
                          index = Math.abs(Math.sin(angle));
                      }
                  } else if (b[i] >= 0) {
                      angle = Math.PI / 2;
                  } else {
                      angle = Math.PI * 3 / 2;
                  }

                  if (Math.abs(a[i] * index) < 1 / 3 && Math.abs(b[i] * index) < 1 / 3) {
                      list[8]++;
                  } else {
                      var order = Math.floor(angle / (Math.PI / 4));
                      list[order]++;
                  }
              }

              for (var i_0 = 0; i_0 < list.length; i_0++) {
                  document.getElementById("data_test").innerText +=""+ list[i_0] + "\n";
              }

              for (var i_1 = 0; i_1 < list.length; i_1++) {
                  if (i_1 < 8 && list[i_1] >= threshold) {
                      var start_angle = 2*Math.PI - Math.PI * (i_1+1) / 4;
                      const delta_angle = Math.PI / 4;
                      ctx.beginPath();
                      ctx.arc(cw / 2, ch / 2, min / 2, start_angle, start_angle + delta_angle, false);
                      //ctx.arc(cw / 2, ch / 2, ratio * min, Math.PI * 3 / 2, Math.PI, true);
                      ctx.lineTo(min *975/2604/2*Math.cos(Math.PI * (i_1)/4)+cw/2,
                          -min *975/2604/2*Math.sin(Math.PI * (i_1)/4)+ch/2);
                      ctx.arc(cw / 2, ch / 2, min *975/2604/2, start_angle+ delta_angle, start_angle , true)
                      ctx.closePath();

                      ctx.moveTo(cw/2,ch/2);
                      ctx.fill();

                  } else if (list[i_1] >= threshold) {
                      ctx.arc(cw / 2, ch / 2, min *975/2604/2, 0, Math.PI * 2, false);

                      ctx.closePath();
                      ctx.fill();


                  }
              }

              ctx.globalCompositeOperation = "source-in";

              var img_1 = document.getElementById("emotion_wheel_neutral_img");
              img_1.onload = function () {
                  ctx.drawImage(this, 0, 0, 100, 100);
              }


          }catch (e) {
              alert(e.message)
          }
      }
