var animalList = [{name:"pig", id: 1}, {name:"cow", id: 2}, {name:"dog", id: 3}, {name:"cat", id:4}, {name:"duck", id: 5}, {name:"horse", id: 6}, {name: "monkey", id: 7} , {name:"chicken", id: 8}, {name:"elephant", id: 9}, {name:"bird", id:10}];

var count = 0;
var attempts = 0;
var score =0;
var cells = [];
$(document).ready(function () {
    $("#reset").on('click', function (e){
        var optionsList = collectOptions();
            
            var cell1, cell2, cell3, cell4;
            var correctId =  Math.floor(Math.random() * (3 - 0) + 0);
            var correctName = optionsList[correctId];    
            var sound = document.getElementById("sound");
            source = "sounds/" + correctName + ".mp3";
            console.log(source);
            sound.src = "" + source + "";
            cells.push(document.getElementById('1'));
            cells.push(document.getElementById('2'));
            cells.push(document.getElementById('3'));
            cells.push(document.getElementById('4'));
            for(i = 0; i < optionsList.length; i++){
                
                var name = optionsList[i];
                var srcs = new Array();
                srcs.push("images/" + name + "/" + name + "1.jpg");
                srcs.push("images/" + name + "/" + name + "2.jpg");
                srcs.push("images/" + name + "/" + name + "3.jpg");
                console.log(srcs[0] + " " + srcs[1] + " " + srcs[2]);
                var pictureId =  Math.floor(Math.random() * (3 - 0) + 0);
                if(pictureId === 0){
                    cells[i].src = "" + srcs[0] + "";
                }else if(pictureId === 1){
                    cells[i].src = "" + srcs[1] + "";
                }else{
                    cells[i].src = "" + srcs[2] + "";
                }
            }
            count = count + 1;
    });
    $("#next").on('click', function (e){
        //$("#next").addClass('dead');
        var id =  Math.floor(Math.random() * (10 - 0) + 0);
        if(count === 4){
            
        }else{
            
            var optionsList = collectOptions();
            var cell1, cell2, cell3, cell4;
            cells.push(document.getElementById('1'));
            cells.push(document.getElementById('2'));
            cells.push(document.getElementById('3'));
            cells.push(document.getElementById('4'));
            for(i = 0; i < optionsList.length; i++){
                
                var name = optionsList[i];
                var srcs = new Array();
                srcs.push("images/" + name + "/" + name + "1.jpg");
                srcs.push("images/" + name + "/" + name + "2.jpg");
                srcs.push("images/" + name + "/" + name + "3.jpg");
                console.log(srcs[0] + " " + srcs[1] + " " + srcs[2]);
                var pictureId =  Math.floor(Math.random() * (3 - 0) + 0);
                if(pictureId === 0){
                    cells[i].src = "" + srcs[0] + "";
                }else if(pictureId === 1){
                    cells[i].src = "" + srcs[1] + "";
                }else{
                    cells[i].src = "" + srcs[2] + "";
                }
            }
            count = count + 1;
        }
        console.log(count);
    });
    var update_display = function (image_name, sound) {
		var audio = new Audio(""+sound);
		$("#next").removeClass('dead');
		alert("correct");
		audio.play();
	}
	$("img#1").on('click', function() {
	
		var aux = document.getElementById('1').getAttribute('src');
		var aux1 = document.getElementById('sound').getAttribute('src');
		var sound = aux1;
		aux1 = aux1.substr(7);
		var res = aux1.split(".");
		aux1 = res[0];
		if(aux.indexOf(aux1) > -1 ){ // correct
			update_display(aux, sound);
		}
	});
	
	$("img#2").on('click', function() {
	
		var aux = document.getElementById('2').getAttribute('src');
		var aux1 = document.getElementById('sound').getAttribute('src');
		var sound = aux1;
		aux1 = aux1.substr(7);
		var res = aux1.split(".");
		aux1 = res[0];
		if(aux.indexOf(aux1) > -1 ){ // correct
									update_display(aux, sound);
		}
	});
	
	$("img#3").on('click', function() {
	
		var aux = document.getElementById('3').getAttribute('src');
		var aux1 = document.getElementById('sound').getAttribute('src');
		var sound = aux1;
		aux1 = aux1.substr(7);
		var res = aux1.split(".");
		aux1 = res[0];
		if(aux.indexOf(aux1) > -1 ){ // correct
						update_display(aux, sound);
		}
	});
	
	$("img#4").on('click', function() {
	
		var aux = document.getElementById('4').getAttribute('src');
		var aux1 = document.getElementById('sound').getAttribute('src');
		var sound = aux1;
		aux1 = aux1.substr(7);
		var res = aux1.split(".");
		aux1 = res[0];
		if(aux.indexOf(aux1) > -1 ){ //correct
						update_display(aux, sound);
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

