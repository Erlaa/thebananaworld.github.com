var speed = "fast";
$(".box").hover(function () {
	$(".boxtext").stop().animate({"left": "0px"}, speed);
	},
	function () {
	$(".boxtext").stop().animate({"left": "-300px"}, speed);
});