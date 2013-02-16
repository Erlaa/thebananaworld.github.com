//Var t är daly för animationen, ändra detta om du vill ändra tiden mellan varje animation
var t = 5000;
// speed är hastigheten
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
  //Blev konstigt här. .delay() funkar tudligen inte med .css(), fick komma på något nytt. Funkar.
  //Ville ha bort bakgrunden efter att animationen blev klar, det blev någon konstig artifakt när animationen kördes sen.
  setTimeout(function() {
    $("#hassan").css("background","none");
  }, 300);
  });

