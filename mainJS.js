var animalList = [{name:"pig", id: 1}, {name:"cow", id: 2}, {name:"dog", id: 3}, {name:"cat", id:4}, {name:"duck", id: 5}, {name:"lion", id: 6}, {name: "monkey", id: 7} , {name:"chicken", id: 8}, {name:"elephant", id: 9}, {name:"bird", id:10}];

var count = 0;
var attempts = 0;
var score =0;
var cell1, cell2, cell3, cell4;
$(document).ready(function () {
    $(document).on('click', 'td', function (e){
        var optionsList = collectOptions();
        for(i = 0; i < optionsList.length; i ++){
            console.log(optionsList[i]);   
        }
    });
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


function collectOptions(){
    var options = new Array();
    var ids = [];
    
    while(ids.length < 4){
        var id =  Math.floor(Math.random() * (10 - 0) + 0);
        var duplicate = false;
        for(i = 0; i < ids.length; i++){
            if(ids[i] == id){
                duplicate = true;
                break;
            }
        }
        if(duplicate === false){
            //console.log(id);
            ids[ids.length] = id;   
            
        }
    }
    for(i = 0; i < 4; i++){
        console.log(ids[i]);
        options.push(animalList[ids[i]].name);   
    }
    return options;
}
function popUp(inputAnswer){
    if(answer === "correct"){
        alert("CORRECT, GREAT JOB");   
    }else{
        alert("OOPS, TRY AGAIN");  
    }
}
