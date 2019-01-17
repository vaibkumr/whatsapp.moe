change_bg();
var svg_color="#E2E5E6";
$(document).ready(function(){
  $('.chmln').chameleon();
  change_bg();
  checkContainer();
});


function change_bg(){
  chrome.storage.local.get(["bgimage"], function(result) {
            var url=result.bgimage;
            // console.log('Value currently is ' + result.bgimage );
            if(result.bgimage){
              document.documentElement.style.setProperty('--bg_image', "url(\""+result.bgimage+"\")" );
            }
            var img = result.bgimage;
            chrome.storage.local.get(["color_style"], function(result) {
              if(result.color_style=="1"){

                $().chameleon("getImageColors", {
                  "sort_type": "disabled",
                  "color_format": "hex",
                  "img_src": url,
                  "color_alpha": 200,
                  "color_difference": 200,
                  "canvas_side": 400,
                  "debug": false,
                  "onGetColorsSuccess": function(img_colors, $container, s) {
                    // console.log("chmln is working!!");
                    document.documentElement.style.setProperty('--main-color',"#"+img_colors[0].hex);
                    document.documentElement.style.setProperty('--secondary-font-color',"#"+img_colors[1].hex);
                    document.documentElement.style.setProperty('--primary-font-color',"#"+img_colors[2].hex);
                    svg_color="#"+img_colors[1].hex;
                  },
                });

              }
              else if(result.color_style=="2"){
                document.documentElement.style.setProperty('--main-color',"#000000");
                document.documentElement.style.setProperty('--secondary-font-color',"#ababab");
                document.documentElement.style.setProperty('--primary-font-color',"#fdfbfb");
                svg_color="#ababab";
              }
              else if(result.color_style=="3"){
                document.documentElement.style.setProperty('--main-color',"#fdfbfb");
                document.documentElement.style.setProperty('--secondary-font-color',"#404040");
                document.documentElement.style.setProperty('--primary-font-color',"#000000");
                svg_color="#8d2663";
              }
              else if(result.color_style=="4"){
                chrome.storage.local.get(["c_1"],function(result){
                  document.documentElement.style.setProperty('--main-color',result.c_1);
                });
                chrome.storage.local.get(["c_2"],function(result){
                  document.documentElement.style.setProperty('--secondary-font-color',result.c_2);
                  svg_color=result.c_2;
                });
                chrome.storage.local.get(["c_3"],function(result){
                  document.documentElement.style.setProperty('--primary-font-color',result.c_3);
                });

              }
              else{
                // nothing
              }

            });
          });


}

// This is such an easy fix which took me more than 3 hour to think of. Took me so long to detect why my SVGs kept changing colors
$(document).on('click','#pane-side',function(){
  load_top();
  setTimeout(load_top(),100);
});
$(document).on('click','.copyable-text',function(){
  load_top();
  setTimeout(load_top(),100);
});
$(document).on('keypress','.copyable-text',function(){
  load_top();
  setTimeout(load_top(),100);
});
$('.rAUz7').on('load',function(){
  var all_paths = $('path');
  // console.log("test")

  for(var i=0;i<path.length;i++){
    // console.log(all_paths[i])
    all_paths[i].attr("fill",svg_color);
  }
});
$('.rAUz7').on('ready',function(){
  var all_paths = $('path');
  // console.log("test")

  for(var i=0;i<path.length;i++){
    // console.log(all_paths[i])
    all_paths[i].attr("fill",svg_color);
  }
});


function checkContainer () {
  if($('.rAUz7').is(':visible') ){
    load_top();
    change_bg();
  }
  else {
    setTimeout(checkContainer, 50);
  }
}
function load_top(){
  var all_paths = $('path');
  console.log("test")
  for(var i=0;i<all_paths.length;i++){
    $(all_paths[i]).attr("fill",svg_color);
    $(all_paths[i]).attr("opacity","1");
    $(all_paths[i]).attr("fill-opacity","1");
  }
}
