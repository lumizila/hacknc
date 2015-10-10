window.addEventListener("load", function() {
	var update_display = function (image_name) { 
		
	}
	$("img#1").on('click', function() {
	
		var aux = document.getElementById('1').getAttribute('src');
		var aux1 = document.getElementById('sound').getAttribute('src');
		aux1 = aux1.substr(7);
		var res = aux1.split(".");
		aux1 = res[0];
		if(aux.indexOf(aux1) > -1 ){ // correct
			alert("clicked on image 1, its correct");
		}
	});
	
	$("img#2").on('click', function() {
	
		var aux = document.getElementById('2').getAttribute('src');
		var aux1 = document.getElementById('sound').getAttribute('src');
		aux1 = aux1.substr(7);
		var res = aux1.split(".");
		aux1 = res[0];
		if(aux.indexOf(aux1) > -1 ){ // correct
			alert("wow");
		}
	});
	
	$("img#3").on('click', function() {
	
		var aux = document.getElementById('3').getAttribute('src');
		var aux1 = document.getElementById('sound').getAttribute('src');
		aux1 = aux1.substr(7);
		var res = aux1.split(".");
		aux1 = res[0];

		if(aux.indexOf(aux1) > -1 ){ // correct
			alert("wow");
		}
	});
	
	$("img#4").on('click', function() {
	
		var aux = document.getElementById('4').getAttribute('src');
		var aux1 = document.getElementById('sound').getAttribute('src');
		aux1 = aux1.substr(7);
		var res = aux1.split(".");
		aux1 = res[0];
		if(aux.indexOf(aux1) > -1 ){ //correct
			alert("wow");
		}
	});

});
