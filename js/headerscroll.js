//start headScroll
//Var t är daly för animationen, ändra detta om du vill ändra tiden mellan varje animation
var t = 5000;
// speed är hastigheten
var speed = 1500;
function runIt(){
     $("#kacper-index").delay(t).animate({"left": "-100%"}, speed);
     $("#kacper-index").delay(t).animate({"left": "-200%"}, speed);
     $("#kacper-index").delay(t).animate({"left": "-300%"}, speed);
     $("#kacper-index").delay(t).animate({"left": "-400%"}, speed);
     $("#kacper-index").animate({"left": "0%"}, 0);
     setTimeout(runIt, 0);
}
$("#kacper-index").ready(function (){
  $("#kacper-index").animate({"opacity":"1"}, "slow");
  runIt();
  //Blev konstigt här. .delay() funkar tudligen inte med .css(), fick komma på något nytt. Funkar.
  //Ville ha bort bakgrunden efter att animationen blev klar, det blev någon konstig artifakt när animationen kördes sen.
  setTimeout(function() {
    $("#hassan-index").css("background","none");
  }, 3000);
});
//end headScroll

//start colorAnimation
var color = '#6699FF';
var colorAnimtime = 300;
$("#whoarewe").hover(function (){
	$(this).stop().animate({
		color: color
	}, colorAnimtime);
},
function() {
	$(this).stop().animate({
		color: '#FFF'
	}, colorAnimtime);
});

$("#latestvideo").hover(function (){
	$(this).animate({
		color: color
	}, colorAnimtime);
},
function() {
	$(this).animate({
		color: '#FFF'
	}, colorAnimtime);
});
//end colorAnimation

//start youtubeCalc
var width = $("#latestyoutube").width();
var height = width * 0.5941;
$("#latestyoutube").css({"height" : height});
//end youtubeCalc

//youtubeArrowHide
/*$("#latestyoutube").hover(function() { 
	$("#youtubearrow").stop().animate({
		opacity: 0
	}, colorAnimtime);
}); */
//end youtubeArrowHide

//start bananaKnight boxEffect
var flow = "fast";
$('#bananaknightd').hover(function () {
	$("#boxtextd").stop().animate({"opacity": "0.5"}, flow);
	},
	function () {
	$("#boxtextd").stop().animate({"opacity": "0"}, flow);
});

$('#bananaknightk').hover(function () {
	$("#boxtextk").stop().animate({"opacity": "0.5"}, flow);
	},
	function () {
	$("#boxtextk").stop().animate({"opacity": "0"}, flow);
});

$('#bananaknighth').hover(function () {
	$("#boxtexth").stop().animate({"opacity": "0.5"}, flow);
	},
	function () {
	$("#boxtexth").stop().animate({"opacity": "0"}, flow);
});

$('#join').hover(function () {
	
	$("#joinShadow").stop().animate({"opacity": "1"}, flow);
	},
	function () {
	$("#joinShadow").stop().animate({"opacity": "0"}, flow);
});

$("#beta").click(function () {
	$(this).hide("slow");
});
//end bananaKnight boxEffect
