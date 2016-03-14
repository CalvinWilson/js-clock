setInterval(Increment, 1000);
function Increment () {
	var date = new Date();
	var hours = date.getHours();
	var minutes = date.getMinutes();
	var seconds = date.getSeconds();
	if(hours <= 9) hours = '0'+hours;
	if(minutes <= 9) minutes = '0'+minutes;
	if(seconds <= 9) seconds = '0'+seconds;
	$("#clock").html(hours+ ":" + minutes + ":" + seconds);
};
