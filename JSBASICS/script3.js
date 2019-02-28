/*//onmouseover
document.getElementById('btn').onmouseover=changeOnMouseOver;
document.getElementById('btn').onmouseout=changeOnMouseOut;
function changeOnMouseOver(){
    var but=document.getElementById('btn');
    but.style.background="red";
}
function changeOnMouseOut(){
    var but=document.getElementById('btn');
    but.style.background="blue";
}
//using this keyword
function changeOnMouseOver(){
    //var but=document.getElementById('btn');
    this.style.background="red";
}
function changeOnMouseOut(){
    //var but=document.getElementById('btn');
    this.style.background="blue";
}

//anonymous function
document.getElementById('btn').onmouseover=function(){
    this.style.background="red";
}
document.getElementById('btn').onmouseout=function(){
    this.style.background="blue";
}
document.getElementById('btn').onclick=function(){
   alert("You clicked on this button");
}
*/
//add event listener
var but=document.getElementById('btn');
but.addEventListener('mouseover',changeOnMouseOver);
but.addEventListener('mouseout',changeOnMouseOut);
function changeOnMouseOver(){
    var but=document.getElementById('btn');
    but.style.background="red";
}
function changeOnMouseOut(){
    var but=document.getElementById('btn');
    but.style.background="blue";
}
document.querySelector('#hid').textContent="New text";
