window.onload = function(){
	
	document.getElementById("btn-ac").onclick = function(){
		cleartext();
	}
	
	document.getElementById("btn-plusmin").onclick = function(){
		addPlusMin();
	}
	
	document.getElementById("btn-dot").onclick = function(){
		addNumber(".");
		setClear();
	}
	
	document.getElementById("btn-1").onclick = function(){
		addNumber(1);
		setClear();
	}
	
	document.getElementById("btn-2").onclick = function(){
		addNumber(2);
		setClear();
	}
	
	document.getElementById("btn-3").onclick = function(){
		addNumber(3);
		setClear();
	}
	
	document.getElementById("btn-4").onclick = function(){
		addNumber(4);
		setClear();
	}
	
	document.getElementById("btn-5").onclick = function(){
		addNumber(5);
		setClear();
	}
	
	document.getElementById("btn-6").onclick = function(){
		addNumber(6);
		setClear();
	}
	
	document.getElementById("btn-7").onclick = function(){
		addNumber(7);
		setClear();
	}
	
	document.getElementById("btn-8").onclick = function(){
		addNumber(8);
		setClear();
	}
	
	document.getElementById("btn-9").onclick = function(){
		addNumber(9);
		setClear();
	}
	
	document.getElementById("btn-0").onclick = function(){
		addNumber(0);
		setClear();
	}
	
	document.getElementById("btn-plus").onclick = function(){
		addButton("+");
		setClear();
	}
	
	document.getElementById("btn-min").onclick = function(){
		addButton("-");
		setClear();
	}
	
	document.getElementById("btn-x").onclick = function(){
		addButton("x");
		setClear();
	}
	
	document.getElementById("btn-divide").onclick = function(){
		addButton("/");
		setClear();
	}
	
	document.getElementById("btn-eq").onclick = function(){
		addButton("=");
		setClear();
	}
	
	document.getElementById("btn-perc").onclick = function(){
		var currentText = document.getElementById("current_text");
		currentText.innerHTML = currentText.innerHTML/100;
	}
	
}

function addNumber(str){
	var currentText = document.getElementById("current_text");
	if (currentText.innerHTML === "0"){
		currentText.innerHTML = str;
	} else if (currentText.innerHTML === "-0"){
		currentText.innerHTML = "-" + str;
	} else {
		currentText.innerHTML += str;
	}
}

function addButton(str){
	var text = document.getElementById("text");
	var currentText = document.getElementById("current_text");
	
	if (text.innerHTML === "Javascript Calculator" || text.innerHTML.indexOf("=") !== -1) {
		if(currentText.innerHTML.indexOf("-")!== -1){
			text.innerHTML = "(" + currentText.innerHTML + ")" + str;
		} else {
			text.innerHTML = currentText.innerHTML + str;
		}
	} else if(currentText.innerHTML.indexOf("-")!== -1){
		text.innerHTML += "(" + currentText.innerHTML + ")" + str;
	} else {
		text.innerHTML += currentText.innerHTML + str;
	}
	
	if (str === "="){
		var result = calculate();
		result = Math.round(result*10000)/10000;
		currentText.innerHTML = result.toString();
	} else {
		currentText.innerHTML = 0;
	}
	
}



function cleartext(){
	var buttonText = document.getElementById("ac-text");
	var currentText = document.getElementById("current_text");
	var text = document.getElementById("text");
	if (buttonText.innerHTML === "AC"){
		text.innerHTML = "Javascript Calculator";
		currentText.innerHTML = 0;
	} else if (buttonText.innerHTML ==="C"){
		currentText.innerHTML = 0;
		buttonText.innerHTML = "AC";
	}
}

function setClear(){
	var buttonText = document.getElementById("ac-text");
	buttonText.innerHTML = "C";
}


function addPlusMin(){
	var text = document.getElementById("current_text");
	
	if (text.innerHTML.indexOf("-") === -1){
		text.innerHTML = "-" + text.innerHTML;
	}
	
}

function calculate(){
	var text = document.getElementById("text");
	//parse currentText, first look for times and divide
	var newtext = text.innerHTML;
	
	newtext = newtext.replace(/\(-/g, "-")
	newtext = newtext.replace(/\-\-/g, ",-,-")
	newtext = newtext.replace(/\)/g, "")
	newtext = newtext.replace(/\+/g, ",+,");
	newtext = newtext.replace(/(\d)\-/g, "$1,-,");
	newtext = newtext.replace(/x/g, ",x,");
	newtext = newtext.replace(/\//g, ",/,");
	newtext = newtext.replace(/\=/g, "");
	var arr = newtext.split(",");
	
	var newarr = [parseFloat(arr[0])];
	//loop for x / divide:
	for (var i = 1; i < arr.length; i+=2){
		if (arr[i] === "x"){
			newarr[newarr.length-1] *= parseFloat(arr[i+1]);
		} else if (arr[i] === "/"){
			newarr[newarr.length-1]/=parseFloat(arr[i+1]);
		} else {
			newarr.push(arr[i]);
			newarr.push(parseFloat(arr[i+1]));
		}
		
	}
	
	var result = newarr[0];
	
	//loop for +/-
	for (var j = 1; j < newarr.length; j+=2){
		if (newarr[j] === "+"){
			result += newarr[j+1];
		} else if(newarr[j] === "-"){
			result -= newarr[j+1];
		}
	}
	
	return result;
}