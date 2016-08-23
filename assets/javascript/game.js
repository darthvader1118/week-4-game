$(document).ready(function(){
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var targetNum = getRandomInt(1,100);
$('#randNum').html(targetNum);
var sum = 0;
var diamondNum = 0;
var rubyNum = 0;
var saphNum = 0;
var wins = 0;
var losses = 0;
function resetVars(){
	sum = 0;
	diamondNum = 0;
	rubyNum = 0;
	saphNum = 0;
	targetNum = getRandomInt(1,100);
	$('#randNum').html(targetNum);
	$('#sumNum').html('');
}
$('#diamond').click(function(){
	if(diamondNum == 0){
		diamondNum = getRandomInt(1,33);
	}
	sum = sum + diamondNum;
	$('#sumNum').html(sum);
	console.log(sum);
	if(sum > targetNum){
		losses++;
		$('.losses').html(losses);
		resetVars();
	}	
else if(sum == targetNum){
	wins++;
	$('.wins').html(wins);
	resetVars();	
}

})

$('#ruby').on('click', function(){
	if(rubyNum == 0){
		rubyNum = getRandomInt(1,33);
	}
	sum = sum + rubyNum;
	$('#sumNum').html(sum);
	if(sum > targetNum){
	losses++;
	$('.losses').html(losses);
	resetVars();
}
else if(sum == targetNum){
	wins++;
	$('.wins').html(wins);
	resetVars();	
}

})

$('#saphire').on('click', function(){
	if(saphNum == 0){
		saphNum = getRandomInt(1,33);
	}
	sum = sum + saphNum;
	$('#sumNum').html(sum);
	if(sum > targetNum){
	losses++;
	$('.losses').html(losses);
	resetVars();
}
else if(sum == targetNum){
	wins++;
	$('.wins').html(wins);
	resetVars();	
}

})


})