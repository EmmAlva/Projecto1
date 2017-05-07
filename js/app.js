var text = document.getElementsByClassName("text1"),
	box = document.getElementsByClassName("box1");


for(var i=0; i<box.lenght;i++){
	box[i].addEventListener('click',function(){
		text[i].innerHTML = "933 People liked you! page the las 24 hours. Whooo!!!";
	});
	
}
console.log(text[2]);