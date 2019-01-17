
var choice=0;
$("#t1").click(function(){
  choice=1;
  update_chrome_color(choice);
  $("#custom_colors").css('display', 'none');

});

$("#t2").click(function(){
  choice=2;
  update_chrome_color(choice);
  $("#custom_colors").css('display', 'none');

});

$("#t3").click(function(){
  choice=3;
  update_chrome_color(choice);
  $("#custom_colors").css('display', 'none');

});

$("#t4").click(function(){
  choice=4;
  update_chrome_color(choice);
  $("#custom_colors").css('display', 'block');

});

$("#color_picked").click(function(){
  var color_1 = $('#c1').val();
  var color_2 = $('#c2').val();
  var color_3 = $('#c3').val();
  console.log(color_1);
  console.log(color_2);
  console.log(color_3);
  chrome.storage.local.set({"c_1": color_1}, function() {
  });
  chrome.storage.local.set({"c_2": color_2}, function() {
  });
  chrome.storage.local.set({"c_3": color_3}, function() {
  });


});



$(document).ready(function() {
  chrome.storage.local.get(["color_style"], function(result) {
            var saved_choice=result.color_style;
            if(saved_choice==1){
              $("#t1").attr("checked","checked");
            }
            else if(saved_choice==2){
              $("#t2").attr("checked","checked");
            }
            else if(saved_choice==3){
              $("#t3").attr("checked","checked");
            }
            else if(saved_choice==4){
              $("#custom_colors").css('display', 'block');
              $("#t4").attr("checked","checked");
              chrome.storage.local.get(["c_1"],function(result){
                $("#c1").attr("value",result.c_1);
              });
              chrome.storage.local.get(["c_2"],function(result){
                $("#c2").attr("value",result.c_2);
              });
              chrome.storage.local.get(["c_3"],function(result){
                $("#c3").attr("value",result.c_3);
              });
            }
            else{
              //nothing
            }

          });
});

document.getElementById('w_new').addEventListener('click', change_image);
function change_image(){
  var urlHere=document.getElementById("wallpaper").value;
  update_chrome(urlHere);
  chrome.storage.local.get(["bgimage"], function(result) {
            console.log('Value currently is ' + result.bgimage);
          });
}

function update_chrome(urlHere){
  chrome.storage.local.set({"bgimage": urlHere}, function() {
  });
  var test=1;
  chrome.storage.local.set({"color_style": test}, function() {
      console.log('Settings saved');
  });
}

function update_chrome_color(choice){
  chrome.storage.local.set({"color_style": choice}, function() {
  });


}
