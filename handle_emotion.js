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

    //alert(canvas.width);

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
          //var canvas = document.getElementById('emotion_wheel');
          //if (!canvas.getContext) return;
          // const temp_canvas = document.createElement('canvas');
          // document.getElementById("emotion_container").insertBefore(temp_canvas,canvas);
          // //temp_canvas.style.display="none";
          // temp_canvas.width =cw; temp_canvas.height = ch;
          // temp_canvas.style.backgroundImage="url('eomtionwheel_bg.png'')";
          // temp_canvas.style.backgroundSize="100px 100px"
          // temp_canvas.style.backgroundRepeat="no-repeat";

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
                  ctx.lineTo(min *660/2604/2*Math.cos(Math.PI * (i_1)/4)+cw/2,
                      -min *660/2604/2*Math.sin(Math.PI * (i_1)/4)+ch/2);
                  ctx.arc(cw / 2, ch / 2, min *660/2604/2, start_angle+ delta_angle, start_angle , true)
                  ctx.closePath();

                  ctx.moveTo(cw/2,ch/2);
                  ctx.fill();

              } else if (list[i_1] >= threshold) {
                  ctx.arc(cw / 2, ch / 2, min *660/2604/2, 0, Math.PI * 2, false);

                  ctx.closePath();
                  ctx.fill();


              }
          }

var img_1=new Image();

    img_1.onload = function () {
        ctx.drawImage(this, 0, 0, 90, 90);

    }
    img_1.src = "emotionwheel_background/emotionwheel.png";

          //img_1.src="emotionwheel_with_neutral.png";


      }catch (e) {
          alert(e.message)
      }

  }


// var new_win=window.open("test.html");var p=new_win.document.getElementById("data_test");
// setInterval(function () {
//     p.innerHTML="Engage:"+count(engagements)+"\nConfuse"+count(confusions)+"\ngaze"+count(gazes);
// },1000)


function create_emotion_wheel(threshold=5) {

    var temp_x=emotion_x;
    var temp_y=emotion_y;
    var if_euqal=1;
    // for (var m = 0; m < 100; m++) {
    //     temp_x[m] = Math.random() * 2 - 1;
    //     temp_y[m] = Math.random() * 2 - 1;

    // }
    list=[0,0,0,0,0,0,0,0,0];
    temp_list=[0,0,0,0,0,0,0,0,0];
    var true_list=[0,0,0,0,0,0,0,0,0];
    var temp_true_list=[0,0,0,0,0,0,0,0,0];
    var a=temp_x;var b=temp_y;
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
                  temp_list[8]++;
              } else {
                  var order = Math.floor(angle / (Math.PI / 4));
                  temp_list[order]++;
              }
          }
    for(i=0;i<temp_list.length;i++){
        if(temp_list[i]>=threshold){
            temp_true_list[i]=1;
        }
        if(list[i]>=threshold){
            temp_true_list[i]=1;
        }
        if(temp_true_list[i]!==true_list[i]){
            if_euqal=0;
        }
    }
    var test="";
    for(var asdf=0;asdf<list.length;asdf++){
        test+="x: "+ temp_list[asdf]+"\t\ty: "+temp_list[asdf]+"\n";
    }
   //alert(test);
    // var p=new_win.document.getElementById("data_test");
    // p.innerHTML=test;

    //if(if_euqal){return;}
    
    // var input = document.getElementById("check_input");
    // input.innerText="";
    // for (m = 0; m < 100; m++) {
    //
    //     input.innerText += x[m] + " " + y[m] + " ";
    //     if (m % 10 === 0) {
    //         input.innerText += "\n";
    //     }
    // }
    try{
    // canvas=document.createElement("canvas");
    // var real_canvas=document.getElementById("emotion_wheel");
    canvas=document.getElementById("emotion_wheel");
    var real_canvas=document.createElement("canvas");

    //var emotion_container=document.getElementById("emotion_container");
    //emotion_container.insertBefore(canvas,real_canvas);

    canvas.width=real_canvas.width;
    canvas.height=real_canvas.height;
    canvas.style.width=real_canvas.style.width;
    canvas.style.height=real_canvas.style.height;
    ctx=makeHighRes(canvas);
    real_ctx = makeHighRes(real_canvas);
    draw(temp_x, temp_y, 90, 90,threshold);

    real_ctx.drawImage(canvas,0,0);
    ctx.globalCompositeOperation = "source-in";

    }catch (e) {
        alert(e.message);
    }
}
//var new_win=window.open("test.html");