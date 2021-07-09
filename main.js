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
  console.log((1 / 20) * screen.width);
  defaultWindow.resizeTo((1 / 10) * screen.width, screen.height);
  defaultWindow.moveTo(screen.width, 0);
}

function ToFullView(rate) {
  console.log("to full view...");

  // click on full view without setting the rate
  if (!rate) {
    // get the rate from cookie
    var cookieList = document.cookie.split("; ");
    var name = "fullsize";
    cookieList.forEach((val) => {
      if (val.indexOf(name) === 0) rate = val.substring(name.length + 1);
    });
    // if no rate info in cookie, initialize it
    if (!rate) rate = 1;
  }
  // click on full view with setting the rate
  else {
    // update the rate in cookie
    document.cookie = "fullsize=" + rate;
  }

  window.close();
  fullWindow = window.open("full.html", "", "width=100,height=100");
  console.log(screen.width);
  fullWindow.resizeTo(rate * screen.width, screen.height);
  fullWindow.moveTo(screen.width, 0);
}

function ToDashboard() {
  console.log("to dashboard...");
  window.close();
  dashboard = window.open("index.html", "", "width=100,height=100");
  dashboard.resizeTo(screen.width, screen.height);
  dashboard.moveTo(0, 0);
}

function handleWindowResize() {
  console.log(window.innerWidth);
  // console.log("charts:", Highcharts.charts);
  var width = window.innerWidth - 50;
  $("#defaultchart2").css("width", width);
  // $("#defaultchart2").css("height", width + 50);
  $("#defaultchart3").css("width", width);
  $("#defaultchart4").css("width", width);
  // $("#defaultchart3").css("height", width + 50);
  $("#defaultchart1").css("width", width);
  // $("#defaultchart1").css("height", 100);
  $("#defaultTrigger").css("width", width);
  $("#threshold").css("width", width - 50);
  $("#emotion_container").css("width",width);
  // $("#fullchart1").css("width", width);
  // $("#fullchart2").css("width", width);
  // $("#fullchart3").css("width", width);
}

function loadWindow() {
  // update chart type status
  var cookieList = document.cookie.split("; ");
  console.log("on load window cookie", cookieList);

  var gazeChartType,
    gazeChartName = "gazecharttype";
  cookieList.forEach((val) => {
    if (val.indexOf(gazeChartName) === 0)
      gazeChartType = val.substring(gazeChartName.length + 1);
  });
  $("input[name='gazeradio'][value=" + gazeChartType + "]").prop(
    "checked",
    true
  );

  var concenChartType,
    concenChartName = "concencharttype";
  cookieList.forEach((val) => {
    if (val.indexOf(concenChartName) === 0)
      concenChartType = val.substring(concenChartName.length + 1);
  });
  $("input[name='concenradio'][value=" + concenChartType + "]").prop(
    "checked",
    true
  );

  var confusedChartType,
    confusedChartName = "confusedcharttype";
  cookieList.forEach((val) => {
    if (val.indexOf(confusedChartName) === 0)
      confusedChartType = val.substring(confusedChartName.length + 1);
  });
  $("input[name='confusedradio'][value=" + confusedChartType + "]").prop(
    "checked",
    true
  );

  var emoChartType,
    emoChartName = "emocharttype";
  cookieList.forEach((val) => {
    if (val.indexOf(emoChartName) === 0)
      emoChartType = val.substring(emoChartName.length + 1);
  });
  $("input[name='emoradio'][value=" + emoChartType + "]").prop("checked", true);

  // update theme status
  var themeid,
    themeName = "themeid";
  cookieList.forEach((val) => {
    if (val.indexOf(themeName) === 0)
      themeid = val.substring(themeName.length + 1);
  });
  $("input[name='themeradio'][value=" + themeid + "]").prop("checked", true);
  // initial store in cookies when first load
  if (!gazeChartType) {
    gazeChartType = $("input[name='gazeradio']:checked").val();
    document.cookie = "gazecharttype=" + gazeChartType;
  }

  if (!confusedChartType) {
    confusedChartType = $("input[name='confusedradio']:checked").val();
    document.cookie = "confusedcharttype=" + confusedChartType;
  }

  if (!concenChartType) {
    concenChartType = $("input[name='concenradio']:checked").val();
    document.cookie = "concencharttype=" + concenChartType;
  }

  if (!emoChartType) {
    emoChartType = $("input[name='emoradio']:checked").val();
    document.cookie = "emocharttype=" + emoChartType;
  }

  if (!themeid) {
    themeid = $("input[name='themeradio']:checked").val();
    document.cookie = "themeid=" + themeid;
  }
}

var gazeChartType = "Radial";

function handleRadioChange() {
  gazeChartType = $("input[name='gazeradio']:checked").val();
  console.log("gazeradio", $("input[name='gazeradio']:checked"));
  document.cookie = "gazecharttype=" + gazeChartType;
  // document.cookie = "gazecharttype=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";

  confusedChartType = $("input[name='confusedradio']:checked").val();
  console.log("confusedradio:", $("input[name='confusedradio']:checked"));
  document.cookie = "confusedcharttype=" + confusedChartType;

  concenChartType = $("input[name='concenradio']:checked").val();
  document.cookie = "concencharttype=" + concenChartType;

  emoChartType = $("input[name='emoradio']:checked").val();
  document.cookie = "emocharttype=" + emoChartType;

  console.log(document.cookie);
}

function handleDisplay(checkButton, chartContainer) {
  if ($("#" + checkButton)[0].checked) {
    $("#" + chartContainer).show();
  } else {
    $("#" + chartContainer).hide();
  }
}

function handleThemeChange() {
  themeid = $("input[name='themeradio']:checked").val();
  console.log("themeradio:", $("input[name='themeradio']:checked"));
  document.cookie = "themeid=" + themeid;
}
// function Handle_select_full_view_size() {
//   var full_view_ratio = -1;
//   // var myselect=window.document.getElementById("selection");
//   //
//   // var index=myselect.selectedIndex;
//   // var win=window.open();
//   // win.alert(index);
//   // if(index) {
//   //   full_view_ratio = myselect.options[index].value;
//   // }
//   var selection_list = [];

//   var base = document.getElementById("full_size_selection");
//   for (var i = 0; i < 3; i++) {
//     if (base.children[i].firstElementChild.checked) {
//       full_view_ratio = i;
//       break;
//     }
//   }
//   // var win=window.open();
//   // win.alert(full_view_ratio);
//   full_view_ratio = (full_view_ratio + 1) / 4;
//   if (full_view_ratio > 0.6) {
//     full_view_ratio = 1;
//   }
//   if (full_view_ratio == 0) {
//     full_view_ratio = 0.25;
//   }
//   return full_view_ratio;
// }
