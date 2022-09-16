/*
	WEB 303 Assignment 1 - jQuery
	
	Patel Tarang Jigarbhai
	ID: 0799009
*/
$(document).ready(function(){
	$("input").change(function(){
		let salary = $("#yearly-salary").val();
		let per = $("#percent").val();

		let amo= ((salary*per)/100).toFixed(2);
		$("#amount").text('$'+ amo);
	});
});
