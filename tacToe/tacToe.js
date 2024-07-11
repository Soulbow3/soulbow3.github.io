const counter=document.getElementById("node");
const text=document.getElementById("words");
const btn=document.getElementById("btn1");
function func(element) {
if (text.innerHTML==="Player X") {
element.style.background="teal";
counter.style.background="teal";
text.innerHTML="Player O";
element.innerHTML="X";
btn.style.background="hotpink";
btn.innerHTML="Turn Toggle"
}
else if (text.innerHTML==="Player O") {
element.style.background="purple";
counter.style.background="purple";
text.innerHTML="Player X";
element.innerHTML="O";
btn.style.background="hotpink";
btn.innerHTML="Turn Toggle"
}
else if (element.style.background==="hotpink") {
}}
