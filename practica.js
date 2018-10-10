console.log("hello")


var myarray = [];



var i = 0;
while(i<10){

	var myUserInput = prompt("enter 10 numbers plz");
	myarray.push(myUserInput);	
	i++;

}

console.log("this is the original array" + " >  " + myarray.join("/"));


document.write("this is " + myarray.join("/") + "<br/>");
var myarray2 = myarray.sort((a,b) => a-b);
document.write("this is " + myarray2);
console.log("this is ascending array" + " " + myarray2.join("/") + "<br/>" );

 //ascending sort

var myarra3 =  myarray.sort((a,b) => b-a);
console.log("this is reverse array" + " "  + myarra3.join("/") + "<br/>"); //descending sort

document.write(myarra3 + + "<br/>");
var myUserInput2 = prompt("pida un numero");

var newVar = myarray2.indexOf(myUserInput2);

console.log(newVar);
document.write("<br/>" + newVar);
var arri = [];
myarray.forEach(function(item){ //funcion anonima para hacer el loop. la funcion forEach anima acepta 3 argumentos 

	console.log(item);
	if(item > myUserInput2){

		arri.push(item);
		arri.sort((a,b) => a-b);
	}

});
console.log(arri);
document.write("<br/>" + arri);

