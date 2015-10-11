var animalList = [{name:"pig", id: 1}, {name:"cow", id: 2}, {name:"dog", id: 3}, {name:"cat", id:4}, {name:"duck", id: 5}, {name:"horse", id: 6}, {name: "monkey", id: 7} , {name:"chicken", id: 8}, {name:"elephant", id: 9}, {name:"bird", id:10}];

var count = 0;
var attempts = 0;
var score =0;
var cells = [];
var update_display = function (image_name, sound) {
		var audio = new Audio(""+sound);
		audio.play();
}
$(document).ready(function () {
<<<<<<< HEAD
    $("#reset").on('click', function (e){
		$("h2").removeClass('dead');
        var optionsList = collectOptions();
            var cell1, cell2, cell3, cell4;
            var correctId =  Math.floor(Math.random() * (3 - 0) + 0);
            var correctName = optionsList[correctId];    
            var sound = $("audio");
            source = "sounds/" + correctName + ".mp3";
            console.log(source);
            sound.attr('src', source);
            sound.load();
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
        $("#next").addClass('dead');
=======
    $("#next").on('click', function (e){
>>>>>>> master
        var id =  Math.floor(Math.random() * (10 - 0) + 0);
        if(count === 4){
            
        }else{
<<<<<<< HEAD
            
=======
>>>>>>> master
            var optionsList = collectOptions();
            var cell1, cell2, cell3, cell4;
            cells.push(document.getElementById('1'));
            cells.push(document.getElementById('2'));
            cells.push(document.getElementById('3'));
            cells.push(document.getElementById('4'));
            for(i = 0; i < optionsList.length; i++){
<<<<<<< HEAD
                
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
	//	var audio = new Audio(""+sound);
		$("#next").removeClass('dead');
		alert("correct");
	//	audio.play();
	}
	$("img#1").on('click', function() {
		var sounds = $("audio");
		var aux = document.getElementById('1').getAttribute('src');
		var aux1 = sounds.attr("src");
		var sound = aux1;
=======
                var identifier = cells[i].getAttribute('src');
            }
        }
        count = count + 1;
    });
    $("img#1").on('click', function() {
	
		var aux = document.getElementById('1').getAttribute('src');
		var aux1 = document.getElementById('sound').getAttribute('src');
>>>>>>> master
		aux1 = aux1.substr(7);
		var res = aux1.split(".");
		aux1 = res[0];
		if(aux.indexOf(aux1) > -1 ){ // correct
<<<<<<< HEAD
			update_display(aux, sound);
=======
			alert("clicked on image 1, its correct");
>>>>>>> master
		}
	});
	
	$("img#2").on('click', function() {
<<<<<<< HEAD
		var sounds = $("audio");
		var aux = document.getElementById('2').getAttribute('src');
		var aux1 = sounds.attr("src");
		var sound = aux1;
=======
	
		var aux = document.getElementById('2').getAttribute('src');
		var aux1 = document.getElementById('sound').getAttribute('src');
>>>>>>> master
		aux1 = aux1.substr(7);
		var res = aux1.split(".");
		aux1 = res[0];
		if(aux.indexOf(aux1) > -1 ){ // correct
<<<<<<< HEAD
									update_display(aux, sound);
=======
			alert("wow");
>>>>>>> master
		}
	});
	
	$("img#3").on('click', function() {
<<<<<<< HEAD
		var sounds = $("audio");
		var aux = document.getElementById('3').getAttribute('src');
		var aux1 = sounds.attr("src");
		var sound = aux1;
		aux1 = aux1.substr(7);
		var res = aux1.split(".");
		aux1 = res[0];
		if(aux.indexOf(aux1) > -1 ){ // correct
						update_display(aux, sound);
=======
	
		var aux = document.getElementById('3').getAttribute('src');
		var aux1 = document.getElementById('sound').getAttribute('src');
		aux1 = aux1.substr(7);
		var res = aux1.split(".");
		aux1 = res[0];

		if(aux.indexOf(aux1) > -1 ){ // correct
			alert("wow");
>>>>>>> master
		}
	});
	
	$("img#4").on('click', function() {
<<<<<<< HEAD
		var sounds = $("audio");
		var aux = document.getElementById('4').getAttribute('src');
		var aux1 = sounds.attr("src");
		var sound = aux1;
=======
	
		var aux = document.getElementById('4').getAttribute('src');
		var aux1 = document.getElementById('sound').getAttribute('src');
>>>>>>> master
		aux1 = aux1.substr(7);
		var res = aux1.split(".");
		aux1 = res[0];
		if(aux.indexOf(aux1) > -1 ){ //correct
<<<<<<< HEAD
						update_display(aux, sound);
=======
			alert("wow");
>>>>>>> master
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

