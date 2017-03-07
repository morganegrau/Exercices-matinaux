var tabImg =['jaune.jpg','vert.jpg','rouge.jpg'];

DIV = document.getElementById('div');

for (var i = 0; i<tabImg.length; i++) { 
	DIV.innerHTML += "<img src="+tabImg[i]+">";
}

function sup() {
       tabImg.pop();
       DIV.innerHTML ="";
for (var i = 0; i<tabImg.length; i++) { 
	DIV.innerHTML += "<img src="+tabImg[i]+">";
}
}