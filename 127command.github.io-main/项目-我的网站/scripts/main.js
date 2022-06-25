//$("body").mouseevent
//console.log("1");
let btn=document.querySelector('button');
// let par=document.querySelector('p');
// par.innerHTML="A";
btn.onclick=function test(e){
	e.stopPropagation();
	// alert('!');
	// console.log(2);
}
let clc=document.querySelector('html');
clc.onclick=function t1(pos){
	// console.log(pos.x.toString()+' '+pos.y.toString());
	let P=prompt();
	btn.setAttribute("style","margin-top:"+pos.y.toString()+"px"+";"+"margin-left:"+pos.x.toString()+"px"+";");
	btn.innerHTML=P.toString();
}