function ToDefaultView() {
  console.log("to default view...");
  // set default width as 1/10 screen width
  //   console.log(screen.width);
  //   var width = (1 / 10) * screen.width;
  // $("#fullchart1").hide();
  // $("#fullchart2").hide();
  // $("#fullchart3").hide();
  // $("#default2").show();
  // $("#default3").show();
  // $("#default1").show();

  window.close();
  defaultWindow = window.open("default.html", "", "width=100,height=100");
  console.log((1 / 10) * screen.width);
  defaultWindow.resizeTo((1 / 10) * screen.width, screen.height);
  defaultWindow.moveTo(screen.width, 0);
}

function ToFullView() {
  console.log("to full view...");
  // set default width as 1/4 screen width
  //   console.log(screen.width);
  //   var width = (1 / 4) * screen.width;
  // $("#fullchart1").show();
  // $("#fullchart2").show();
  // $("#fullchart3").show();
  // $("#default2").hide();
  // $("#default3").hide();
  // $("#default1").hide();

  window.close();
  fullWindow = window.open("full.html", "", "width=100,height=100");
  console.log(screen.width);
  fullWindow.resizeTo(screen.width, screen.height);
  fullWindow.moveTo(screen.width, 0);
}

function ToDashboard() {
  console.log("to dashboard...");
  window.close();
  dashboard = window.open("index.html", "", "width=100,height=100");
  dashboard.resizeTo(screen.width / 1.5, screen.height / 1.5);
  dashboard.moveTo(0, 0);
}

function handleWindowResize() {
  console.log(window.innerWidth);
  console.log("charts:", Highcharts.charts);
  var width = window.innerWidth - 50;
  $("#defaultchart2").css("width", width);
  $("#defaultchart2").css("height", width + 50);
  $("#defaultchart3").css("width", width);
  $("#defaultchart3").css("height", width + 50);
  $("#defaultchart1").css("width", width);
  $("#defaultchart1").css("height", width + 50);
  $("#defaultTrigger").css("width", width);
  $("#threshold").css("width", width - 50);

  // $("#fullchart1").css("width", width);
  // $("#fullchart2").css("width", width);
  // $("#fullchart3").css("width", width);
}

var gazeChartType = "Radial";

function handleRadioChange() {
  gazeChartType = $("input[name='gazeradio']:checked").val();
  console.log("handleRadioChange", gazeChartType);
}
