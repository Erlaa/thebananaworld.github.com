//Var t �r daly f�r animationen, �ndra detta om du vill �ndra tiden mellan varje animation
var t = 5000;
// speed �r hastigheten
var speed = 1500;
function runIt(){
     $("#kacper").delay(t).animate({"left": "-100%"}, speed);
     $("#kacper").delay(t).animate({"left": "-200%"}, speed);
     $("#kacper").delay(t).animate({"left": "-300%"}, speed);
     $("#kacper").delay(t).animate({"left": "-400%"}, speed);
     $("#kacper").animate({"left": "0%"}, 0);
     setTimeout(runIt, 0);
}
$("#kacper").ready(function (){
  $("#kacper").animate({"opacity":"1"}, "slow");
  runIt();
  //Blev konstigt h�r. .delay() funkar tudligen inte med .css(), fick komma p� n�got nytt. Funkar.
  //Ville ha bort bakgrunden efter att animationen blev klar, det blev n�gon konstig artifakt n�r animationen k�rdes sen.
  setTimeout(function() {
    $("#hassan").css("background","none");
  }, 300);
  });

