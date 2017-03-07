var tabImg =['jaune.jpg','vert.jpg','rouge.jpg'];
var myArray = [];
DIV = document.getElementById('div');

// for (var i = 0; i<tabImg.length; i++) { 
// 	DIV.innerHTML += "<img src= "+tabImg[i]+">";
// }

// function sup() {
//        tabImg.pop();
//        DIV.innerHTML ="";
// for (var i = 0; i<tabImg.length; i++) { 
// 	DIV.innerHTML += "<img src="+tabImg[i]+">";
// }
// }


function getinput()
{
var input = document.getElementById("input").value;
	if (input > 0 && input < 20) {
		DIV.innerHTML += "<img src="+tabImg[2]+">"
	}
	else if (input < 0) {
		DIV.innerHTML += "<img src="+tabImg[1]+">"
	}
	else {
		DIV.innerHTML += "<img src="+tabImg[0]+">"
	}
} 129



// function adinput(){
// var input = document.getElementById("input").value;
// 	if (input != null){
// 	myArray.push(input);
// 	document.getElementById('recup').innerHTML = myArray.sort();
// 	}
// }


function adinput() {
	var input = document.getElementById("input").value;
	if (input != null){
	myArray.push(input);
    myArray.sort(function(a, b){return a-b});
    document.getElementById('recup').innerHTML = myArray;
	document.getElementById('afficher').innerHTML =(myArray.length[0] && myArray.length[-1])

	}
}
