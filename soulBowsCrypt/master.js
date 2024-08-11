function times1() {
var one=document.getElementById("oneM");
var three=document.getElementById("timesOne");
var back=document.getElementById("timesBack1");
var four=document.getElementById("threeM");
var sell1=document.getElementById("sel1");
var sell3=document.getElementById("sel3");
if (sell1.style.background==="grey" && three.innerHTML==="x30") 
{back.style.background="grey";
three.innerHTML="Sold P1";}
else if (three.innerHTML==="Sold P1" && sell1.style.background==="black") 
{back.style.background="red";
three.innerHTML="x30";}
else if (three.innerHTML==="Sold P1" && sell3.style.background==="black") 
{back.style.background="green";
three.innerHTML="x30";}
else if (sell3.style.background==="grey" && three.innerHTML==="x30") 
{back.style.background="grey";
three.innerHTML="Sold P3";}
else if (three.innerHTML==="Sold P3" && sell1.style.background==="black") 
{back.style.background="red";
three.innerHTML="x30";}
else if (three.innerHTML==="Sold P3" && sell3.style.background==="black") 
{back.style.background="green";
three.innerHTML="x30";}
else if (sell1.style.background==="white" && back.style.background==="red") {
three.innerHTML="x30 $100";
back.style.background="linear-gradient(180deg, yellow, green, yellow)";}
else if (sell3.style.background==="white" && back.style.background==="green") {
three.innerHTML="x30 $100";
back.style.background="linear-gradient(180deg, yellow, green, yellow)";}
else if (back.style.background==="red") {
back.style.background="green";}
else if (back.style.background==="green") {
back.style.background="red";}
else if (one.innerHTML==="One" && back.style.background==="linear-gradient(180deg, yellow, green, yellow)") {
three.innerHTML="x30";
back.style.background="red";}
else if (four.innerHTML==="Three" && back.style.background==="linear-gradient(180deg, yellow, green, yellow)") {
three.innerHTML="x30";
back.style.background="green";}}

function times2() {
var one=document.getElementById("done");
var three=document.getElementById("timesTwo");
var back=document.getElementById("timesBack2");
var four=document.getElementById("dthree");
var sell1=document.getElementById("sel1");
var sell3=document.getElementById("sel3");
if (sell1.style.background==="grey" && three.innerHTML==="x40") 
{back.style.background="grey";
three.innerHTML="Sold P1";}
else if (three.innerHTML==="Sold P1" && sell1.style.background==="black") 
{back.style.background="red";
three.innerHTML="x40";}
else if (three.innerHTML==="Sold P1" && sell3.style.background==="black") 
{back.style.background="green";
three.innerHTML="x40";}
else if (sell3.style.background==="grey" && three.innerHTML==="x40") 
{back.style.background="grey";
three.innerHTML="Sold P3";}
else if (three.innerHTML==="Sold P3" && sell1.style.background==="black") 
{back.style.background="red";
three.innerHTML="x40";}
else if (three.innerHTML==="Sold P3" && sell3.style.background==="black") 
{back.style.background="green";
three.innerHTML="x40";}
else if (sell1.style.background==="white" && back.style.background==="red") {
three.innerHTML="x40 $100";
back.style.background="linear-gradient(180deg, yellow, green, yellow)";}
else if (sell3.style.background==="white" && back.style.background==="green") {
three.innerHTML="x40 $100";
back.style.background="linear-gradient(180deg, yellow, green, yellow)";}
else if (back.style.background==="red") {
back.style.background="green";}
else if (back.style.background==="green") {
back.style.background="red";}
else if (one.innerHTML==="One" && back.style.background==="linear-gradient(180deg, yellow, green, yellow)") {
three.innerHTML="x40";
back.style.background="red";}
else if (four.innerHTML==="Three" && back.style.background==="linear-gradient(180deg, yellow, green, yellow)") {
three.innerHTML="x40";
back.style.background="green";}}

function plum1() {
var one=document.getElementById("oneB");
var three=document.getElementById("plumOne");
var back=document.getElementById("plumBack1");
var four=document.getElementById("threeB");
var sell1=document.getElementById("sel1");
var sell3=document.getElementById("sel3");
if (sell1.style.background==="grey" && three.innerHTML==="Rent $20") 
{back.style.background="grey";
three.innerHTML="Sold P1";}
else if (three.innerHTML==="Sold P1" && sell1.style.background==="black") 
{back.style.background="red";
three.innerHTML="Rent $20";}
else if (three.innerHTML==="Sold P1" && sell3.style.background==="black") 
{back.style.background="green";
three.innerHTML="Rent $20";}
else if (sell3.style.background==="grey" && three.innerHTML==="Rent $20") 
{back.style.background="grey";
three.innerHTML="Sold P3";}
else if (three.innerHTML==="Sold P3" && sell1.style.background==="black") 
{back.style.background="red";
three.innerHTML="Rent $20";}
else if (three.innerHTML==="Sold P3" && sell3.style.background==="black") 
{back.style.background="green";
three.innerHTML="Rent $20";}
else if (sell1.style.background==="white" && three.innerHTML==="Rent $20") {
three.innerHTML="Plum $60";
back.style.background="linear-gradient(90deg, orange, grey, silver, white, orange)";}
else if (sell3.style.background==="white" && three.innerHTML==="Rent $20") {
three.innerHTML="Plum $60";
back.style.background="linear-gradient(90deg, orange, grey, silver, white, orange)";}
else if (back.style.background==="red") {
back.style.background="green";}
else if (back.style.background==="green") {
back.style.background="red";}
else if (one.innerHTML==="One" && back.style.background==="linear-gradient(90deg, orange, grey, silver, white, orange)") {
three.innerHTML="Rent $20";
back.style.background="red";}
else if (four.innerHTML==="Three" && back.style.background==="linear-gradient(90deg, orange, grey, silver, white, orange)") {
three.innerHTML="Rent $20";
back.style.background="green";}}

function plum2() {
var one=document.getElementById("oneC");
var three=document.getElementById("plumTwo");
var back=document.getElementById("plumBack2");
var four=document.getElementById("threeC");
var sell1=document.getElementById("sel1");
var sell3=document.getElementById("sel3");
if (sell1.style.background==="grey" && three.innerHTML==="Rent $20") 
{back.style.background="grey";
three.innerHTML="Sold P1";}
else if (three.innerHTML==="Sold P1" && sell1.style.background==="black") 
{back.style.background="red";
three.innerHTML="Rent $20";}
else if (three.innerHTML==="Sold P1" && sell3.style.background==="black") 
{back.style.background="green";
three.innerHTML="Rent $20";}
else if (sell3.style.background==="grey" && three.innerHTML==="Rent $20") 
{back.style.background="grey";
three.innerHTML="Sold P3";}
else if (three.innerHTML==="Sold P3" && sell1.style.background==="black") 
{back.style.background="red";
three.innerHTML="Rent $20";}
else if (three.innerHTML==="Sold P3" && sell3.style.background==="black") 
{back.style.background="green";
three.innerHTML="Rent $20";}
else if (sell1.style.background==="white" && three.innerHTML==="Rent $20") {
three.innerHTML="Plum $80";
back.style.background="linear-gradient(90deg, orange, grey, silver, white, orange)";}
else if (sell3.style.background==="white" && three.innerHTML==="Rent $20") {
three.innerHTML="Plum $80";
back.style.background="linear-gradient(90deg, orange, grey, silver, white, orange)";}
else if (back.style.background==="red") {
back.style.background="green";}
else if (back.style.background==="green") {
back.style.background="red";}
else if (one.innerHTML==="One" && back.style.background==="linear-gradient(90deg, orange, grey, silver, white, orange)") {
three.innerHTML="Rent $20";
back.style.background="red";}
else if (four.innerHTML==="Three" && back.style.background==="linear-gradient(90deg, orange, grey, silver, white, orange)") {
three.innerHTML="Rent $20";
back.style.background="green";}}

function teal1() {
var one=document.getElementById("oneE");
var three=document.getElementById("tealOne");
var back=document.getElementById("tealBack1");
var four=document.getElementById("threeE");
var sell1=document.getElementById("sel1");
var sell3=document.getElementById("sel3");
if (sell1.style.background==="grey" && three.innerHTML==="Rent $30") 
{back.style.background="grey";
three.innerHTML="Sold P1";}
else if (three.innerHTML==="Sold P1" && sell1.style.background==="black") 
{back.style.background="red";
three.innerHTML="Rent $30";}
else if (three.innerHTML==="Sold P1" && sell3.style.background==="black") 
{back.style.background="green";
three.innerHTML="Rent $30";}
else if (sell3.style.background==="grey" && three.innerHTML==="Rent $30") 
{back.style.background="grey";
three.innerHTML="Sold P3";}
else if (three.innerHTML==="Sold P3" && sell1.style.background==="black") 
{back.style.background="red";
three.innerHTML="Rent $30";}
else if (three.innerHTML==="Sold P3" && sell3.style.background==="black") 
{back.style.background="green";
three.innerHTML="Rent $30";}
else if (sell1.style.background==="white" && three.innerHTML==="Rent $30") {
three.innerHTML="Teal $100";
back.style.background="linear-gradient(90deg, orange, silver, grey, white, orange)";}
else if (sell3.style.background==="white" && three.innerHTML==="Rent $30") {
three.innerHTML="Teal $100";
back.style.background="linear-gradient(90deg, orange, silver, grey, white, orange)";}
else if (back.style.background==="red") {
back.style.background="green";}
else if (back.style.background==="green") {
back.style.background="red";}
else if (one.innerHTML==="One" && back.style.background==="linear-gradient(90deg, orange, silver, grey, white, orange)") {
three.innerHTML="Rent $30";
back.style.background="red";}
else if (four.innerHTML==="Three" && back.style.background==="linear-gradient(90deg, orange, silver, grey, white, orange)") {
three.innerHTML="Rent $30";
back.style.background="green";}}

function teal2() {
var one=document.getElementById("oneF");
var three=document.getElementById("tealTwo");
var back=document.getElementById("tealBack2");
var four=document.getElementById("threeF");
var sell1=document.getElementById("sel1");
var sell3=document.getElementById("sel3");
if (sell1.style.background==="grey" && three.innerHTML==="Rent $30") 
{back.style.background="grey";
three.innerHTML="Sold P1";}
else if (three.innerHTML==="Sold P1" && sell1.style.background==="black") 
{back.style.background="red";
three.innerHTML="Rent $30";}
else if (three.innerHTML==="Sold P1" && sell3.style.background==="black") 
{back.style.background="green";
three.innerHTML="Rent $30";}
else if (sell3.style.background==="grey" && three.innerHTML==="Rent $30") 
{back.style.background="grey";
three.innerHTML="Sold P3";}
else if (three.innerHTML==="Sold P3" && sell1.style.background==="black") 
{back.style.background="red";
three.innerHTML="Rent $30";}
else if (three.innerHTML==="Sold P3" && sell3.style.background==="black") 
{back.style.background="green";
three.innerHTML="Rent $30";}
else if (sell1.style.background==="white" && three.innerHTML==="Rent $30") {
three.innerHTML="Teal $100";
back.style.background="linear-gradient(90deg, orange, silver, grey, white, orange)";}
else if (sell3.style.background==="white" && three.innerHTML==="Rent $30") {
three.innerHTML="Teal $100";
back.style.background="linear-gradient(90deg, orange, silver, grey, white, orange)";}
else if (back.style.background==="red") {
back.style.background="green";}
else if (back.style.background==="green") {
back.style.background="red";}
else if (one.innerHTML==="One" && back.style.background==="linear-gradient(90deg, orange, silver, grey, white, orange)") {
three.innerHTML="Rent $30";
back.style.background="red";}
else if (four.innerHTML==="Three" && back.style.background==="linear-gradient(90deg, orange, silver, grey, white, orange)") {
three.innerHTML="Rent $30";
back.style.background="green";}}

function teal3() {
var one=document.getElementById("oneG");
var three=document.getElementById("tealThree");
var back=document.getElementById("tealBack3");
var four=document.getElementById("threeG");
var sell1=document.getElementById("sel1");
var sell3=document.getElementById("sel3");
if (sell1.style.background==="grey" && three.innerHTML==="Rent $40") 
{back.style.background="grey";
three.innerHTML="Sold P1";}
else if (three.innerHTML==="Sold P1" && sell1.style.background==="black") 
{back.style.background="red";
three.innerHTML="Rent $40";}
else if (three.innerHTML==="Sold P1" && sell3.style.background==="black") 
{back.style.background="green";
three.innerHTML="Rent $40";}
else if (sell3.style.background==="grey" && three.innerHTML==="Rent $40") 
{back.style.background="grey";
three.innerHTML="Sold P3";}
else if (three.innerHTML==="Sold P3" && sell1.style.background==="black") 
{back.style.background="red";
three.innerHTML="Rent $40";}
else if (three.innerHTML==="Sold P3" && sell3.style.background==="black") 
{back.style.background="green";
three.innerHTML="Rent $40";}
else if (sell1.style.background==="white" && three.innerHTML==="Rent $40") {
three.innerHTML="Teal $120";
back.style.background="linear-gradient(90deg, orange, silver, grey, white, orange)";}
else if (sell3.style.background==="white" && three.innerHTML==="Rent $40") {
three.innerHTML="Teal $120";
back.style.background="linear-gradient(90deg, orange, silver, grey, white, orange)";}
else if (back.style.background==="red") {
back.style.background="green";}
else if (back.style.background==="green") {
back.style.background="red";}
else if (one.innerHTML==="One" && back.style.background==="linear-gradient(90deg, orange, silver, grey, white, orange)") {
three.innerHTML="Rent $40";
back.style.background="red";}
else if (four.innerHTML==="Three" && back.style.background==="linear-gradient(90deg, orange, silver, grey, white, orange)") {
three.innerHTML="Rent $40";
back.style.background="green";}}

function cyan1() {
var one=document.getElementById("oneI");
var three=document.getElementById("cyanOne");
var back=document.getElementById("cyanBack1");
var four=document.getElementById("threeI");
var sell1=document.getElementById("sel1");
var sell3=document.getElementById("sel3");
if (sell1.style.background==="grey" && three.innerHTML==="Rent $60") 
{back.style.background="grey";
three.innerHTML="Sold P1";}
else if (three.innerHTML==="Sold P1" && sell1.style.background==="black") 
{back.style.background="red";
three.innerHTML="Rent $60";}
else if (three.innerHTML==="Sold P1" && sell3.style.background==="black") 
{back.style.background="green";
three.innerHTML="Rent $60";}
else if (sell3.style.background==="grey" && three.innerHTML==="Rent $60") 
{back.style.background="grey";
three.innerHTML="Sold P3";}
else if (three.innerHTML==="Sold P3" && sell1.style.background==="black") 
{back.style.background="red";
three.innerHTML="Rent $60";}
else if (three.innerHTML==="Sold P3" && sell3.style.background==="black") 
{back.style.background="green";
three.innerHTML="Rent $60";}
else if (sell1.style.background==="white" && three.innerHTML==="Rent $60") {
three.innerHTML="Cyan $120";
back.style.background="linear-gradient(90deg, orange, silver, white, grey, orange)";}
else if (sell3.style.background==="white" && three.innerHTML==="Rent $60") {
three.innerHTML="Cyan $120";
back.style.background="linear-gradient(90deg, orange, silver, white, grey, orange)";}
else if (back.style.background==="red") {
back.style.background="green";}
else if (back.style.background==="green") {
back.style.background="red";}
else if (one.innerHTML==="One" && back.style.background==="linear-gradient(90deg, orange, silver, white, grey, orange)") {
three.innerHTML="Rent $60";
back.style.background="red";}
else if (four.innerHTML==="Three" && back.style.background==="linear-gradient(90deg, orange, silver, white, grey, orange)") {
three.innerHTML="Rent $60";
back.style.background="green";}}

function cyan2() {
var one=document.getElementById("oneJ");
var three=document.getElementById("cyanTwo");
var back=document.getElementById("cyanBack2");
var four=document.getElementById("threeJ");
var sell1=document.getElementById("sel1");
var sell3=document.getElementById("sel3");
if (sell1.style.background==="grey" && three.innerHTML==="Rent $60") 
{back.style.background="grey";
three.innerHTML="Sold P1";}
else if (three.innerHTML==="Sold P1" && sell1.style.background==="black") 
{back.style.background="red";
three.innerHTML="Rent $60";}
else if (three.innerHTML==="Sold P1" && sell3.style.background==="black") 
{back.style.background="green";
three.innerHTML="Rent $60";}
else if (sell3.style.background==="grey" && three.innerHTML==="Rent $60") 
{back.style.background="grey";
three.innerHTML="Sold P3";}
else if (three.innerHTML==="Sold P3" && sell1.style.background==="black") 
{back.style.background="red";
three.innerHTML="Rent $60";}
else if (three.innerHTML==="Sold P3" && sell3.style.background==="black") 
{back.style.background="green";
three.innerHTML="Rent $60";}
else if (sell1.style.background==="white" && three.innerHTML==="Rent $60") {
three.innerHTML="Cyan $120";
back.style.background="linear-gradient(90deg, orange, silver, white, grey, orange)";}
else if (sell3.style.background==="white" && three.innerHTML==="Rent $60") {
three.innerHTML="Cyan $120";
back.style.background="linear-gradient(90deg, orange, silver, white, grey, orange)";}
else if (back.style.background==="red") {
back.style.background="green";}
else if (back.style.background==="green") {
back.style.background="red";}
else if (one.innerHTML==="One" && back.style.background==="linear-gradient(90deg, orange, silver, white, grey, orange)") {
three.innerHTML="Rent $60";
back.style.background="red";}
else if (four.innerHTML==="Three" && back.style.background==="linear-gradient(90deg, orange, silver, white, grey, orange)") {
three.innerHTML="Rent $60";
back.style.background="green";}}

function cyan3() {
var one=document.getElementById("oneK");
var three=document.getElementById("cyanThree");
var back=document.getElementById("cyanBack3");
var four=document.getElementById("threeK");
var sell1=document.getElementById("sel1");
var sell3=document.getElementById("sel3");
if (sell1.style.background==="grey" && three.innerHTML==="Rent $70") 
{back.style.background="grey";
three.innerHTML="Sold P1";}
else if (three.innerHTML==="Sold P1" && sell1.style.background==="black") 
{back.style.background="red";
three.innerHTML="Rent $70";}
else if (three.innerHTML==="Sold P1" && sell3.style.background==="black") 
{back.style.background="green";
three.innerHTML="Rent $70";}
else if (sell3.style.background==="grey" && three.innerHTML==="Rent $70") 
{back.style.background="grey";
three.innerHTML="Sold P3";}
else if (three.innerHTML==="Sold P3" && sell1.style.background==="black") 
{back.style.background="red";
three.innerHTML="Rent $70";}
else if (three.innerHTML==="Sold P3" && sell3.style.background==="black") 
{back.style.background="green";
three.innerHTML="Rent $70";}
else if (sell1.style.background==="white" && three.innerHTML==="Rent $70") {
three.innerHTML="Cyan $140";
back.style.background="linear-gradient(90deg, orange, silver, white, grey, orange)";}
else if (sell3.style.background==="white" && three.innerHTML==="Rent $70") {
three.innerHTML="Cyan $140";
back.style.background="linear-gradient(90deg, orange, silver, white, grey, orange)";}
else if (back.style.background==="red") {
back.style.background="green";}
else if (back.style.background==="green") {
back.style.background="red";}
else if (one.innerHTML==="One" && back.style.background==="linear-gradient(90deg, orange, silver, white, grey, orange)") {
three.innerHTML="Rent $70";
back.style.background="red";}
else if (four.innerHTML==="Three" && back.style.background==="linear-gradient(90deg, orange, silver, white, grey, orange)") {
three.innerHTML="Rent $70";
back.style.background="green";}}


function blue1() {
var one=document.getElementById("oneN");
var three=document.getElementById("blueOne");
var back=document.getElementById("blueBack1");
var four=document.getElementById("threeN");
var sell1=document.getElementById("sel1");
var sell3=document.getElementById("sel3");
if (sell1.style.background==="grey" && three.innerHTML==="Rent $70") 
{back.style.background="grey";
three.innerHTML="Sold P1";}
else if (three.innerHTML==="Sold P1" && sell1.style.background==="black") 
{back.style.background="red";
three.innerHTML="Rent $70";}
else if (three.innerHTML==="Sold P1" && sell3.style.background==="black") 
{back.style.background="green";
three.innerHTML="Rent $70";}
else if (sell3.style.background==="grey" && three.innerHTML==="Rent $70") 
{back.style.background="grey";
three.innerHTML="Sold P3";}
else if (three.innerHTML==="Sold P3" && sell1.style.background==="black") 
{back.style.background="red";
three.innerHTML="Rent $70";}
else if (three.innerHTML==="Sold P3" && sell3.style.background==="black") 
{back.style.background="green";
three.innerHTML="Rent $70";}
else if (sell1.style.background==="white" && three.innerHTML==="Rent $70") {
three.innerHTML="Blue $140";
back.style.background="linear-gradient(90deg, orange, white, silver, grey, orange)";}
else if (sell3.style.background==="white" && three.innerHTML==="Rent $70") {
three.innerHTML="Blue $140";
back.style.background="linear-gradient(90deg, orange, white, silver, grey, orange)";}
else if (back.style.background==="red") {
back.style.background="green";}
else if (back.style.background==="green") {
back.style.background="red";}
else if (one.innerHTML==="One" && back.style.background==="linear-gradient(90deg, orange, white, silver, grey, orange)") {
three.innerHTML="Rent $70";
back.style.background="red";}
else if (four.innerHTML==="Three" && back.style.background==="linear-gradient(90deg, orange, white, silver, grey, orange)") {
three.innerHTML="Rent $70";
back.style.background="green";}}

function blue2() {
var one=document.getElementById("oneO");
var three=document.getElementById("blueTwo");
var back=document.getElementById("blueBack2");
var four=document.getElementById("threeO");
var sell1=document.getElementById("sel1");
var sell3=document.getElementById("sel3");
if (sell1.style.background==="grey" && three.innerHTML==="Rent $80") 
{back.style.background="grey";
three.innerHTML="Sold P1";}
else if (three.innerHTML==="Sold P1" && sell1.style.background==="black") 
{back.style.background="red";
three.innerHTML="Rent $80";}
else if (three.innerHTML==="Sold P1" && sell3.style.background==="black") 
{back.style.background="green";
three.innerHTML="Rent $80";}
else if (sell3.style.background==="grey" && three.innerHTML==="Rent $80") 
{back.style.background="grey";
three.innerHTML="Sold P3";}
else if (three.innerHTML==="Sold P3" && sell1.style.background==="black") 
{back.style.background="red";
three.innerHTML="Rent $80";}
else if (three.innerHTML==="Sold P3" && sell3.style.background==="black") 
{back.style.background="green";
three.innerHTML="Rent $80";}
else if (sell1.style.background==="white" && three.innerHTML==="Rent $80") {
three.innerHTML="Blue $140";
back.style.background="linear-gradient(90deg, orange, white, silver, grey, orange)";}
else if (sell3.style.background==="white" && three.innerHTML==="Rent $80") {
three.innerHTML="Blue $140";
back.style.background="linear-gradient(90deg, orange, white, silver, grey, orange)";}
else if (back.style.background==="red") {
back.style.background="green";}
else if (back.style.background==="green") {
back.style.background="red";}
else if (one.innerHTML==="One" && back.style.background==="linear-gradient(90deg, orange, white, silver, grey, orange)") {
three.innerHTML="Rent $80";
back.style.background="red";}
else if (four.innerHTML==="Three" && back.style.background==="linear-gradient(90deg, orange, white, silver, grey, orange)") {
three.innerHTML="Rent $80";
back.style.background="green";}}

function blue3() {
var one=document.getElementById("oneP");
var three=document.getElementById("blueThree");
var back=document.getElementById("blueBack3");
var four=document.getElementById("threeP");
var sell1=document.getElementById("sel1");
var sell3=document.getElementById("sel3");
if (sell1.style.background==="grey" && three.innerHTML==="Rent $90") 
{back.style.background="grey";
three.innerHTML="Sold P1";}
else if (three.innerHTML==="Sold P1" && sell1.style.background==="black") 
{back.style.background="red";
three.innerHTML="Rent $90";}
else if (three.innerHTML==="Sold P1" && sell3.style.background==="black") 
{back.style.background="green";
three.innerHTML="Rent $90";}
else if (sell3.style.background==="grey" && three.innerHTML==="Rent $90") 
{back.style.background="grey";
three.innerHTML="Sold P3";}
else if (three.innerHTML==="Sold P3" && sell1.style.background==="black") 
{back.style.background="red";
three.innerHTML="Rent $90";}
else if (three.innerHTML==="Sold P3" && sell2.style.background==="black") 
{back.style.background="purple";
three.innerHTML="Rent $90";}
else if (sell1.style.background==="white" && three.innerHTML==="Rent $90") {
three.innerHTML="Blue $160";
back.style.background="linear-gradient(90deg, orange, white, silver, grey, orange)";}
else if (sell3.style.background==="white" && three.innerHTML==="Rent $90") {
three.innerHTML="Blue $160";
back.style.background="linear-gradient(90deg, orange, white, silver, grey, orange)";}
else if (back.style.background==="red") {
back.style.background="green";}
else if (back.style.background==="green") {
back.style.background="red";}
else if (one.innerHTML==="One" && back.style.background==="linear-gradient(90deg, orange, white, silver, grey, orange)") {
three.innerHTML="Rent $90";
back.style.background="red";}
else if (four.innerHTML==="Three" && back.style.background==="linear-gradient(90deg, orange, white, silver, grey, orange)") {
three.innerHTML="Rent $90";
back.style.background="green";}}

function pink1() {
var one=document.getElementById("oneR");
var three=document.getElementById("pinkOne");
var back=document.getElementById("pinkBack1");
var four=document.getElementById("threeR");
var sell1=document.getElementById("sel1");
var sell3=document.getElementById("sel3");
if (sell1.style.background==="grey" && three.innerHTML==="Rent $90") 
{back.style.background="grey";
three.innerHTML="Sold P1";}
else if (three.innerHTML==="Sold P1" && sell1.style.background==="black") 
{back.style.background="red";
three.innerHTML="Rent $90";}
else if (three.innerHTML==="Sold P1" && sell3.style.background==="black") 
{back.style.background="green";
three.innerHTML="Rent $90";}
else if (sell3.style.background==="grey" && three.innerHTML==="Rent $90") 
{back.style.background="grey";
three.innerHTML="Sold P3";}
else if (three.innerHTML==="Sold P3" && sell1.style.background==="black") 
{back.style.background="red";
three.innerHTML="Rent $90";}
else if (three.innerHTML==="Sold P3" && sell3.style.background==="black") 
{back.style.background="green";
three.innerHTML="Rent $90";}
else if (sell1.style.background==="white" && three.innerHTML==="Rent $90") {
three.innerHTML="Pink $160";
back.style.background="linear-gradient(90deg, orange, grey, silver, grey, orange)";}
else if (sell3.style.background==="white" && three.innerHTML==="Rent $90") {
three.innerHTML="Pink $160";
back.style.background="linear-gradient(90deg, orange, grey, silver, grey, orange)";}
else if (back.style.background==="red") {
back.style.background="green";}
else if (back.style.background==="green") {
back.style.background="red";}
else if (one.innerHTML==="One" && back.style.background==="linear-gradient(90deg, orange, grey, silver, grey, orange)") {
three.innerHTML="Rent $90";
back.style.background="red";}
else if (four.innerHTML==="Three" && back.style.background==="linear-gradient(90deg, orange, grey, silver, grey, orange)") {
three.innerHTML="Rent $90";
back.style.background="green";}}

function pink2() {
var one=document.getElementById("oneS");
var three=document.getElementById("pinkTwo");
var back=document.getElementById("pinkBack2");
var four=document.getElementById("threeS");
var sell1=document.getElementById("sel1");
var sell3=document.getElementById("sel3");
if (sell1.style.background==="grey" && three.innerHTML==="Rent $90") 
{back.style.background="grey";
three.innerHTML="Sold P1";}
else if (three.innerHTML==="Sold P1" && sell1.style.background==="black") 
{back.style.background="red";
three.innerHTML="Rent $90";}
else if (three.innerHTML==="Sold P1" && sell3.style.background==="black") 
{back.style.background="green";
three.innerHTML="Rent $90";}
else if (sell3.style.background==="grey" && three.innerHTML==="Rent $90") 
{back.style.background="grey";
three.innerHTML="Sold P3";}
else if (three.innerHTML==="Sold P3" && sell1.style.background==="black") 
{back.style.background="red";
three.innerHTML="Rent $90";}
else if (three.innerHTML==="Sold P3" && sell3.style.background==="black") 
{back.style.background="green";
three.innerHTML="Rent $90";}
else if (sell1.style.background==="white" && three.innerHTML==="Rent $90") {
three.innerHTML="Pink $160";
back.style.background="linear-gradient(90deg, orange, grey, silver, grey, orange)";}
else if (sell3.style.background==="white" && three.innerHTML==="Rent $90") {
three.innerHTML="Pink $160";
back.style.background="linear-gradient(90deg, orange, grey, silver, grey, orange)";}
else if (back.style.background==="red") {
back.style.background="green";}
else if (back.style.background==="green") {
back.style.background="red";}
else if (one.innerHTML==="One" && back.style.background==="linear-gradient(90deg, orange, grey, silver, grey, orange)") {
three.innerHTML="Rent $90";
back.style.background="red";}
else if (four.innerHTML==="Three" && back.style.background==="linear-gradient(90deg, orange, grey, silver, grey, orange)") {
three.innerHTML="Rent $90";
back.style.background="green";}}

function pink3() {
var one=document.getElementById("oneT");
var three=document.getElementById("pinkThree");
var back=document.getElementById("pinkBack3");
var four=document.getElementById("threeT");
var sell1=document.getElementById("sel1");
var sell3=document.getElementById("sel3");
if (sell1.style.background==="grey" && three.innerHTML==="Rent $100") 
{back.style.background="grey";
three.innerHTML="Sold P1";}
else if (three.innerHTML==="Sold P1" && sell1.style.background==="black") 
{back.style.background="red";
three.innerHTML="Rent $100";}
else if (three.innerHTML==="Sold P1" && sell3.style.background==="black") 
{back.style.background="green";
three.innerHTML="Rent $100";}
else if (sell3.style.background==="grey" && three.innerHTML==="Rent $100") 
{back.style.background="grey";
three.innerHTML="Sold P3";}
else if (three.innerHTML==="Sold P3" && sell1.style.background==="black") 
{back.style.background="red";
three.innerHTML="Rent $100";}
else if (three.innerHTML==="Sold P3" && sell3.style.background==="black") 
{back.style.background="green";
three.innerHTML="Rent $100";}
else if (sell1.style.background==="white" && three.innerHTML==="Rent $100") {
three.innerHTML="Pink $180";
back.style.background="linear-gradient(90deg, orange, grey, silver, grey, orange)";}
else if (sell3.style.background==="white" && three.innerHTML==="Rent $100") {
three.innerHTML="Pink $180";
back.style.background="linear-gradient(90deg, orange, grey, silver, grey, orange)";}
else if (back.style.background==="red") {
back.style.background="green";}
else if (back.style.background==="green") {
back.style.background="red";}
else if (one.innerHTML==="One" && back.style.background==="linear-gradient(90deg, orange, grey, silver, grey, orange)") {
three.innerHTML="Rent $100";
back.style.background="red";}
else if (four.innerHTML==="Three" && back.style.background==="linear-gradient(90deg, orange, grey, silver, grey, orange)") {
three.innerHTML="Rent $100";
back.style.background="green";}}

function red1() {
var one=document.getElementById("oneV");
var three=document.getElementById("redOne");
var back=document.getElementById("redBack1");
var four=document.getElementById("threeV");
var sell1=document.getElementById("sel1");
var sell3=document.getElementById("sel3");
if (sell1.style.background==="grey" && three.innerHTML==="Rent $100") 
{back.style.background="grey";
three.innerHTML="Sold P1";}
else if (three.innerHTML==="Sold P1" && sell1.style.background==="black") 
{back.style.background="red";
three.innerHTML="Rent $100";}
else if (three.innerHTML==="Sold P1" && sell3.style.background==="black") 
{back.style.background="green";
three.innerHTML="Rent $100";}
else if (sell3.style.background==="grey" && three.innerHTML==="Rent $100") 
{back.style.background="grey";
three.innerHTML="Sold P3";}
else if (three.innerHTML==="Sold P3" && sell1.style.background==="black") 
{back.style.background="red";
three.innerHTML="Rent $100";}
else if (three.innerHTML==="Sold P3" && sell3.style.background==="black") 
{back.style.background="green";
three.innerHTML="Rent $100";}
else if (sell1.style.background==="white" && three.innerHTML==="Rent $100") {
three.innerHTML="Red $200";
back.style.background="linear-gradient(90deg, orange, white, silver, white, orange)";}
else if (sell3.style.background==="white" && three.innerHTML==="Rent $100") {
three.innerHTML="Red $200";
back.style.background="linear-gradient(90deg, orange, white, silver, white, orange)";}
else if (back.style.background==="red") {
back.style.background="green";}
else if (back.style.background==="green") {
back.style.background="red";}
else if (one.innerHTML==="One" && back.style.background==="linear-gradient(90deg, orange, white, silver, white, orange)") {
three.innerHTML="Rent $100";
back.style.background="red";}
else if (four.innerHTML==="Three" && back.style.background==="linear-gradient(90deg, orange, white, silver, white, orange)") {
three.innerHTML="Rent $100";
back.style.background="green";}}

function red2() {
var one=document.getElementById("oneW");
var three=document.getElementById("redTwo");
var back=document.getElementById("redBack2");
var four=document.getElementById("threeW");
var sell1=document.getElementById("sel1");
var sell3=document.getElementById("sel3");
if (sell1.style.background==="grey" && three.innerHTML==="Rent $110") 
{back.style.background="grey";
three.innerHTML="Sold P1";}
else if (three.innerHTML==="Sold P1" && sell1.style.background==="black") 
{back.style.background="red";
three.innerHTML="Rent $110";}
else if (three.innerHTML==="Sold P1" && sell3.style.background==="black") 
{back.style.background="green";
three.innerHTML="Rent $110";}
else if (sell3.style.background==="grey" && three.innerHTML==="Rent $110") 
{back.style.background="grey";
three.innerHTML="Sold P3";}
else if (three.innerHTML==="Sold P3" && sell1.style.background==="black") 
{back.style.background="red";
three.innerHTML="Rent $110";}
else if (three.innerHTML==="Sold P3" && sell3.style.background==="black") 
{back.style.background="green";
three.innerHTML="Rent $110";}
else if (sell1.style.background==="white" && three.innerHTML==="Rent $110") {
three.innerHTML="Red $220";
back.style.background="linear-gradient(90deg, orange, white, silver, white, orange)";}
else if (sell3.style.background==="white" && three.innerHTML==="Rent $110") {
three.innerHTML="Red $220";
back.style.background="linear-gradient(90deg, orange, white, silver, white, orange)";}
else if (back.style.background==="red") {
back.style.background="green";}
else if (back.style.background==="green") {
back.style.background="red";}
else if (one.innerHTML==="One" && back.style.background==="linear-gradient(90deg, orange, white, silver, white, orange)") {
three.innerHTML="Rent $110";
back.style.background="red";}
else if (four.innerHTML==="Three" && back.style.background==="linear-gradient(90deg, orange, white, silver, white, orange)") {
three.innerHTML="Rent $110";
back.style.background="green";}}

function lime1() {
var one=document.getElementById("oneY");
var three=document.getElementById("limeOne");
var back=document.getElementById("limeBack1");
var four=document.getElementById("threeY");
var sell1=document.getElementById("sel1");
var sell3=document.getElementById("sel3");
if (sell1.style.background==="grey" && three.innerHTML==="Rent $100") 
{back.style.background="grey";
three.innerHTML="Sold P1";}
else if (three.innerHTML==="Sold P1" && sell1.style.background==="black") 
{back.style.background="red";
three.innerHTML="Rent $100";}
else if (three.innerHTML==="Sold P1" && sell3.style.background==="black") 
{back.style.background="green";
three.innerHTML="Rent $100";}
else if (sell3.style.background==="grey" && three.innerHTML==="Rent $100") 
{back.style.background="grey";
three.innerHTML="Sold P3";}
else if (three.innerHTML==="Sold P3" && sell1.style.background==="black") 
{back.style.background="red";
three.innerHTML="Rent $100";}
else if (three.innerHTML==="Sold P3" && sell3.style.background==="black") 
{back.style.background="green";
three.innerHTML="Rent $100";}
else if (sell1.style.background==="white" && three.innerHTML==="Rent $100") {
three.innerHTML="Lime $240";
back.style.background="linear-gradient(90deg, orange, grey, white, silver, orange)";}
else if (sell3.style.background==="white" && three.innerHTML==="Rent $100") {
three.innerHTML="Lime $240";
back.style.background="linear-gradient(90deg, orange, grey, white, silver, orange)";}
else if (back.style.background==="red") {
back.style.background="green";}
else if (back.style.background==="green") {
back.style.background="red";}
else if (one.innerHTML==="One" && back.style.background==="linear-gradient(90deg, orange, grey, white, silver, orange)") {
three.innerHTML="Rent $100";
back.style.background="red";}
else if (four.innerHTML==="Three" && back.style.background==="linear-gradient(90deg, orange, grey, white, silver, orange)") {
three.innerHTML="Rent $100";
back.style.background="green";}}

function lime2() {
var one=document.getElementById("oneZ");
var three=document.getElementById("limeTwo");
var back=document.getElementById("limeBack2");
var four=document.getElementById("threeZ");
var sell1=document.getElementById("sel1");
var sell3=document.getElementById("sel3");
if (sell1.style.background==="grey" && three.innerHTML==="Rent $100") 
{back.style.background="grey";
three.innerHTML="Sold P1";}
else if (three.innerHTML==="Sold P1" && sell1.style.background==="black") 
{back.style.background="red";
three.innerHTML="Rent $100";}
else if (three.innerHTML==="Sold P1" && sell3.style.background==="black") 
{back.style.background="green";
three.innerHTML="Rent $100";}
else if (sell3.style.background==="grey" && three.innerHTML==="Rent $100") 
{back.style.background="grey";
three.innerHTML="Sold P3";}
else if (three.innerHTML==="Sold P3" && sell1.style.background==="black") 
{back.style.background="red";
three.innerHTML="Rent $100";}
else if (three.innerHTML==="Sold P3" && sell3.style.background==="black") 
{back.style.background="green";
three.innerHTML="Rent $100";}
else if (sell1.style.background==="white" && three.innerHTML==="Rent $100") {
three.innerHTML="Lime $240";
back.style.background="linear-gradient(90deg, orange, grey, white, silver, orange)";}
else if (sell3.style.background==="white" && three.innerHTML==="Rent $100") {
three.innerHTML="Lime $240";
back.style.background="linear-gradient(90deg, orange, grey, white, silver, orange)";}
else if (back.style.background==="red") {
back.style.background="green";}
else if (back.style.background==="green") {
back.style.background="red";}
else if (one.innerHTML==="One" && back.style.background==="linear-gradient(90deg, orange, grey, white, silver, orange)") {
three.innerHTML="Rent $100";
back.style.background="red";}
else if (four.innerHTML==="Three" && back.style.background==="linear-gradient(90deg, orange, grey, white, silver, orange)") {
three.innerHTML="Rent $100";
back.style.background="green";}}

function lime3() {
var one=document.getElementById("aone");
var three=document.getElementById("limeThree");
var back=document.getElementById("limeBack3");
var four=document.getElementById("athree");
var sell1=document.getElementById("sel1");
var sell3=document.getElementById("sel3");
if (sell1.style.background==="grey" && three.innerHTML==="Rent $120") 
{back.style.background="grey";
three.innerHTML="Sold P1";}
else if (three.innerHTML==="Sold P1" && sell1.style.background==="black") 
{back.style.background="red";
three.innerHTML="Rent $120";}
else if (three.innerHTML==="Sold P1" && sell3.style.background==="black") 
{back.style.background="green";
three.innerHTML="Rent $120";}
else if (sell3.style.background==="grey" && three.innerHTML==="Rent $120") 
{back.style.background="grey";
three.innerHTML="Sold P3";}
else if (three.innerHTML==="Sold P3" && sell1.style.background==="black") 
{back.style.background="red";
three.innerHTML="Rent $120";}
else if (three.innerHTML==="Sold P3" && sell3.style.background==="black") 
{back.style.background="green";
three.innerHTML="Rent $120";}
else if (sell1.style.background==="white" && three.innerHTML==="Rent $120") {
three.innerHTML="Lime $260";
back.style.background="linear-gradient(90deg, orange, grey, white, silver, orange)";}
else if (sell3.style.background==="white" && three.innerHTML==="Rent $120") {
three.innerHTML="Lime $260";
back.style.background="linear-gradient(90deg, orange, grey, white, silver, orange)";}
else if (back.style.background==="red") {
back.style.background="green";}
else if (back.style.background==="green") {
back.style.background="red";}
else if (one.innerHTML==="One" && back.style.background==="linear-gradient(90deg, orange, grey, white, silver, orange)") {
three.innerHTML="Rent $120";
back.style.background="red";}
else if (four.innerHTML==="Three" && back.style.background==="linear-gradient(90deg, orange, grey, white, silver, orange)") {
three.innerHTML="Rent $120";
back.style.background="green";}}

function gold1() {
var one=document.getElementById("fone");
var three=document.getElementById("goldOne");
var back=document.getElementById("goldBack1");
var four=document.getElementById("fthree");
var sell1=document.getElementById("sel1");
var sell3=document.getElementById("sel3");
if (sell1.style.background==="grey" && three.innerHTML==="Rent $160") 
{back.style.background="grey";
three.innerHTML="Sold P1";}
else if (three.innerHTML==="Sold P1" && sell1.style.background==="black") 
{back.style.background="red";
three.innerHTML="Rent $160";}
else if (three.innerHTML==="Sold P1" && sell3.style.background==="black") 
{back.style.background="green";
three.innerHTML="Rent $160";}
else if (sell3.style.background==="grey" && three.innerHTML==="Rent $160") 
{back.style.background="grey";
three.innerHTML="Sold P3";}
else if (three.innerHTML==="Sold P3" && sell1.style.background==="black") 
{back.style.background="red";
three.innerHTML="Rent $160";}
else if (three.innerHTML==="Sold P3" && sell3.style.background==="black") 
{back.style.background="green";
three.innerHTML="Rent $160";}
else if (sell1.style.background==="white" && three.innerHTML==="Rent $160") {
three.innerHTML="Gold $350";
back.style.background="linear-gradient(90deg, orange, white, grey, silver, orange)";}
else if (sell3.style.background==="white" && three.innerHTML==="Rent $160") {
three.innerHTML="Gold $350";
back.style.background="linear-gradient(90deg, orange, white, grey, silver, orange)";}
else if (back.style.background==="red") {
back.style.background="green";}
else if (back.style.background==="green") {
back.style.background="red";}
else if (one.innerHTML==="One" && back.style.background==="linear-gradient(90deg, orange, white, grey, silver, orange)") {
three.innerHTML="Rent $160";
back.style.background="red";}
else if (four.innerHTML==="Three" && back.style.background==="linear-gradient(90deg, orange, white, grey, silver, orange)") {
three.innerHTML="Rent $160";
back.style.background="green";}}

function gold2() {
var one=document.getElementById("eone");
var three=document.getElementById("goldTwo");
var back=document.getElementById("goldBack2");
var four=document.getElementById("ethree");
var sell1=document.getElementById("sel1");
var sell3=document.getElementById("sel3");
if (sell1.style.background==="grey" && three.innerHTML==="Rent $150") 
{back.style.background="grey";
three.innerHTML="Sold P1";}
else if (three.innerHTML==="Sold P1" && sell1.style.background==="black") 
{back.style.background="red";
three.innerHTML="Rent $150";}
else if (three.innerHTML==="Sold P1" && sell3.style.background==="black") 
{back.style.background="green";
three.innerHTML="Rent $150";}
else if (sell3.style.background==="grey" && three.innerHTML==="Rent $150") 
{back.style.background="grey";
three.innerHTML="Sold P3";}
else if (three.innerHTML==="Sold P3" && sell1.style.background==="black") 
{back.style.background="red";
three.innerHTML="Rent $150";}
else if (three.innerHTML==="Sold P3" && sell3.style.background==="black") 
{back.style.background="green";
three.innerHTML="Rent $150";}
else if (sell1.style.background==="white" && three.innerHTML==="Rent $150") {
three.innerHTML="Gold $300";
back.style.background="linear-gradient(90deg, orange, white, grey, silver, orange)";}
else if (sell3.style.background==="white" && three.innerHTML==="Rent $150") {
three.innerHTML="Gold $300";
back.style.background="linear-gradient(90deg, orange, white, grey, silver, orange)";}
else if (back.style.background==="red") {
back.style.background="green";}
else if (back.style.background==="green") {
back.style.background="red";}
else if (one.innerHTML==="One" && back.style.background==="linear-gradient(90deg, orange, white, grey, silver, orange)") {
three.innerHTML="Rent $150";
back.style.background="red";}
else if (four.innerHTML==="Three" && back.style.background==="linear-gradient(90deg, orange, white, grey, silver, orange)") {
three.innerHTML="Rent $150";
back.style.background="green";}}

function change1(element) {
if (element.style.background==="silver") {
element.style.background="grey";
element.innerHTML="Sell";}
else if (element.style.background==="grey") {
element.style.background="black";
element.innerHTML="Place";}
else if (element.style.background==="black") {
element.style.background="white";
element.innerHTML="Re- move";}
else {element.style.background="silver";
element.innerHTML="Toggle P1 Off";}}

function change3(element) {
if (element.style.background==="silver") {
element.style.background="grey";
element.innerHTML="Sell";}
else if (element.style.background==="grey") {
element.style.background="black";
element.innerHTML="Place";}
else if (element.style.background==="black") {
element.style.background="white";
element.innerHTML="Re- move";}
else {element.style.background="silver";
element.innerHTML="Toggle P3 Off";}}

function bacZ() {
var change=document.getElementById("value1");
var backa=document.getElementById("bac1a");
var backb=document.getElementById("bac1b");
var y=document.getElementById("+a");
var z=document.getElementById("-a");
var abc=document.getElementById("a111");
if (change.style.background==="darkslategrey" && abc.innerHTML==="P1") {
backa.style.background="darkslategrey";
backb.style.background="darkslategrey";
change.style.background="rebeccapurple";
y.innerHTML="+$100";
z.innerHTML="-$100";}
else {
backb.style.background="rebeccapurple";
backa.style.background="rebeccapurple";
change.style.background="darkslategrey";
y.innerHTML="+$10";
z.innerHTML="-$10";}}

function bacY() {
var change=document.getElementById("value2");
var backa=document.getElementById("bac2a");
var backb=document.getElementById("bac2b");
var y=document.getElementById("+b");
var z=document.getElementById("-b");
var abc=document.getElementById("b111");
if (change.style.background==="darkslategrey" && abc.innerHTML==="P3") {
backa.style.background="darkslategrey";
backb.style.background="darkslategrey";
change.style.background="rebeccapurple";
y.innerHTML="+$100";
z.innerHTML="-$100";}
else {
backb.style.background="rebeccapurple";
backa.style.background="rebeccapurple";
change.style.background="darkslategrey";
y.innerHTML="+$10";
z.innerHTML="-$10";}}

function plus2() {
var wallet2=document.getElementById("wal2");
var back2=document.getElementById("bac2a");
if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$0") {
wallet2.innerHTML="$100";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$10") {
wallet2.innerHTML="$110";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$20") {
wallet2.innerHTML="$120";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$30") {
wallet2.innerHTML="$130";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$40") {
wallet2.innerHTML="$140";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$50") {
wallet2.innerHTML="$150";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$60") {
wallet2.innerHTML="$160";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$70") {
wallet2.innerHTML="$170";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$80") {
wallet2.innerHTML="$180";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$90") {
wallet2.innerHTML="$190";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$100") {
wallet2.innerHTML="$200";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$110") {
wallet2.innerHTML="$210";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$120") {
wallet2.innerHTML="$220";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$130") {
wallet2.innerHTML="$230";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$140") {
wallet2.innerHTML="$240";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$150") {
wallet2.innerHTML="$250";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$160") {
wallet2.innerHTML="$260";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$170") {
wallet2.innerHTML="$270";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$180") {
wallet2.innerHTML="$280";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$190") {
wallet2.innerHTML="$290";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$200") {
wallet2.innerHTML="300";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$210") {
wallet2.innerHTML="$310";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$220") {
wallet2.innerHTML="$320";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$230") {
wallet2.innerHTML="$330";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$240") {
wallet2.innerHTML="$340";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$250") {
wallet2.innerHTML="$350";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$260") {
wallet2.innerHTML="$360";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$270") {
wallet2.innerHTML="$370";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$280") {
wallet2.innerHTML="$380";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$290") {
wallet2.innerHTML="$390";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$300") {
wallet2.innerHTML="$400";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$310") {
wallet2.innerHTML="$410";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$320") {
wallet2.innerHTML="$420";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$330") {
wallet2.innerHTML="$430";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$340") {
wallet2.innerHTML="$440";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$350") {
wallet2.innerHTML="$450";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$360") {
wallet2.innerHTML="$460";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$370") {
wallet2.innerHTML="$470";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$380") {
wallet2.innerHTML="$480";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$390") {
wallet2.innerHTML="$490";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$400") {
wallet2.innerHTML="$500";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$410") {
wallet2.innerHTML="$510";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$420") {
wallet2.innerHTML="$520";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$430") {
wallet2.innerHTML="$530";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$440") {
wallet2.innerHTML="$540";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$450") {
wallet2.innerHTML="$550";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$460") {
wallet2.innerHTML="$560";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$470") {
wallet2.innerHTML="$570";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$480") {
wallet2.innerHTML="$580";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$490") {
wallet2.innerHTML="$590";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$500") {
wallet2.innerHTML="$600";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$510") {
wallet2.innerHTML="$610";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$520") {
wallet2.innerHTML="$620";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$530") {
wallet2.innerHTML="$630";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$540") {
wallet2.innerHTML="$640";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$550") {
wallet2.innerHTML="$650";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$560") {
wallet2.innerHTML="$660";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$570") {
wallet2.innerHTML="$670";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$580") {
wallet2.innerHTML="$680";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$590") {
wallet2.innerHTML="$690";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$600") {
wallet2.innerHTML="$700";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$610") {
wallet2.innerHTML="$710";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$620") {
wallet2.innerHTML="$720";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$630") {
wallet2.innerHTML="$730";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$640") {
wallet2.innerHTML="$740";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$650") {
wallet2.innerHTML="$750";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$660") {
wallet2.innerHTML="$760";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$670") {
wallet2.innerHTML="$770";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$680") {
wallet2.innerHTML="$780";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$690") {
wallet2.innerHTML="$790";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$700") {
wallet2.innerHTML="$800";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$710") {
wallet2.innerHTML="$810";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$720") {
wallet2.innerHTML="$820";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$730") {
wallet2.innerHTML="$830";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$740") {
wallet2.innerHTML="$840";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$750") {
wallet2.innerHTML="$850";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$760") {
wallet2.innerHTML="$860";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$770") {
wallet2.innerHTML="$870";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$780") {
wallet2.innerHTML="$880";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$790") {
wallet2.innerHTML="$890";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$800") {
wallet2.innerHTML="$900";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$810") {
wallet2.innerHTML="$910";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$820") {
wallet2.innerHTML="$920";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$830") {
wallet2.innerHTML="$930";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$840") {
wallet2.innerHTML="$940";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$850") {
wallet2.innerHTML="$950";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$860") {
wallet2.innerHTML="$960";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$870") {
wallet2.innerHTML="$970";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$880") {
wallet2.innerHTML="$980";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$890") {
wallet2.innerHTML="$990";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$900") {
wallet2.innerHTML="$1000";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$910") {
wallet2.innerHTML="$1010";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$920") {
wallet2.innerHTML="$1020";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$930") {
wallet2.innerHTML="$1030";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$940") {
wallet2.innerHTML="$1040";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$950") {
wallet2.innerHTML="$1050";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$960") {
wallet2.innerHTML="$1060";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$970") {
wallet2.innerHTML="$1070";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$980") {
wallet2.innerHTML="$1080";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$990") {
wallet2.innerHTML="$1090";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$1000") {
wallet2.innerHTML="$1100";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$1010") {
wallet2.innerHTML="$1110";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$1020") {
wallet2.innerHTML="$1120";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$1030") {
wallet2.innerHTML="$1130";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$1040") {
wallet2.innerHTML="$1140";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$1050") {
wallet2.innerHTML="$1150";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$1060") {
wallet2.innerHTML="$1160";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$1070") {
wallet2.innerHTML="$1170";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$1080") {
wallet2.innerHTML="$1180";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$1090") {
wallet2.innerHTML="$1190";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$1100") {
wallet2.innerHTML="$1200";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$1110") {
wallet2.innerHTML="$1210";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$1120") {
wallet2.innerHTML="$1220";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$1130") {
wallet2.innerHTML="$1230";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$1140") {
wallet2.innerHTML="$1240";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$1150") {
wallet2.innerHTML="$1250";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$1160") {
wallet2.innerHTML="$1260";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$1170") {
wallet2.innerHTML="$1270";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$1180") {
wallet2.innerHTML="$1280";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$1190") {
wallet2.innerHTML="$1290";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$1200") {
wallet2.innerHTML="$1300";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$1210") {
wallet2.innerHTML="$1310";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$1220") {
wallet2.innerHTML="$1320";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$1230") {
wallet2.innerHTML="$1330";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$1240") {
wallet2.innerHTML="$1340";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$1250") {
wallet2.innerHTML="$1350";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$1260") {
wallet2.innerHTML="$1360";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$1270") {
wallet2.innerHTML="$1370";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$1280") {
wallet2.innerHTML="$1380";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$1290") {
wallet2.innerHTML="$1390";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$1300") {
wallet2.innerHTML="$1400";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$1310") {
wallet2.innerHTML="$1410";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$1320") {
wallet2.innerHTML="$1420";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$1330") {
wallet2.innerHTML="$1430";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$1340") {
wallet2.innerHTML="$1440";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$1350") {
wallet2.innerHTML="$1450";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$1360") {
wallet2.innerHTML="$1460";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$1370") {
wallet2.innerHTML="$1470";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$1380") {
wallet2.innerHTML="$1480";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$1390") {
wallet2.innerHTML="$1490";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$1400") {
wallet2.innerHTML="$1500";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$1410") {
wallet2.innerHTML="$1510";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$1420") {
wallet2.innerHTML="$1520";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$1430") {
wallet2.innerHTML="$1530";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$1440") {
wallet2.innerHTML="$1540";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$1450") {
wallet2.innerHTML="$1550";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$1460") {
wallet2.innerHTML="$1560";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$1470") {
wallet2.innerHTML="$1570";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$1480") {
wallet2.innerHTML="$1580";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$1490") {
wallet2.innerHTML="$1590";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$1500") {
wallet2.innerHTML="$1600";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$1510") {
wallet2.innerHTML="$1610";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$1520") {
wallet2.innerHTML="$1620";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$1530") {
wallet2.innerHTML="$1630";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$1540") {
wallet2.innerHTML="$1640";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$1550") {
wallet2.innerHTML="$1650";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$1560") {
wallet2.innerHTML="$1660";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$1570") {
wallet2.innerHTML="$1670";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$1580") {
wallet2.innerHTML="$1680";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$1590") {
wallet2.innerHTML="$1690";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$1600") {
wallet2.innerHTML="$1700";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$1610") {
wallet2.innerHTML="$1710";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$1620") {
wallet2.innerHTML="$1720";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$1630") {
wallet2.innerHTML="$1730";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$1640") {
wallet2.innerHTML="$1740";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$1650") {
wallet2.innerHTML="$1750";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$1660") {
wallet2.innerHTML="$1760";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$1670") {
wallet2.innerHTML="$1770";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$1680") {
wallet2.innerHTML="$1780";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$1690") {
wallet2.innerHTML="$1790";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$1700") {
wallet2.innerHTML="$1800";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$1710") {
wallet2.innerHTML="$1810";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$1720") {
wallet2.innerHTML="$1820";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$1730") {
wallet2.innerHTML="$1830";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$1740") {
wallet2.innerHTML="$1840";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$1750") {
wallet2.innerHTML="$1850";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$1760") {
wallet2.innerHTML="$1860";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$1770") {
wallet2.innerHTML="$1870";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$1780") {
wallet2.innerHTML="$1880";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$1790") {
wallet2.innerHTML="$1890";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$1800") {
wallet2.innerHTML="$1900";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$1810") {
wallet2.innerHTML="$1910";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$1820") {
wallet2.innerHTML="$1920";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$1830") {
wallet2.innerHTML="$1930";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$1840") {
wallet2.innerHTML="$1940";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$1850") {
wallet2.innerHTML="$1950";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$1860") {
wallet2.innerHTML="$1960";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$1870") {
wallet2.innerHTML="$1970";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$1880") {
wallet2.innerHTML="$1980";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$1890") {
wallet2.innerHTML="$1990";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$1900") {
wallet2.innerHTML="$2000";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$1910") {
wallet2.innerHTML="$2010";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$1920") {
wallet2.innerHTML="$2020";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$1930") {
wallet2.innerHTML="$2030";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$1940") {
wallet2.innerHTML="$2040";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$1950") {
wallet2.innerHTML="$2050";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$1960") {
wallet2.innerHTML="$2060";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$1970") {
wallet2.innerHTML="$2060";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$1980") {
wallet2.innerHTML="$2060";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$1990") {
wallet2.innerHTML="$2060";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$2000") {
wallet2.innerHTML="$2060";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$2010") {
wallet2.innerHTML="$2060";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$2020") {
wallet2.innerHTML="$2060";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$2030") {
wallet2.innerHTML="$2060";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$2040") {
wallet2.innerHTML="$2060";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$2050") {
wallet2.innerHTML="$2060";}
else if (back2.style.background==="darkslategrey" && wallet2.innerHTML==="$2060") {
wallet2.innerHTML="$2060";}
else if (wallet2.innerHTML==="$0") {
wallet2.innerHTML="$10";}
else if (wallet2.innerHTML==="$10") {
wallet2.innerHTML="$20";}
else if (wallet2.innerHTML==="$20") {
wallet2.innerHTML="$30";}
else if (wallet2.innerHTML==="$30") {
wallet2.innerHTML="$40";}
else if (wallet2.innerHTML==="$40") {
wallet2.innerHTML="$50";}
else if (wallet2.innerHTML==="$50") {
wallet2.innerHTML="$60";}
else if (wallet2.innerHTML==="$60") {
wallet2.innerHTML="$70";}
else if (wallet2.innerHTML==="$70") {
wallet2.innerHTML="$80";}
else if (wallet2.innerHTML==="$80") {
wallet2.innerHTML="$90";}
else if (wallet2.innerHTML==="$90") {
wallet2.innerHTML="$100";}
else if (wallet2.innerHTML==="$100") {
wallet2.innerHTML="$110";}
else if (wallet2.innerHTML==="$110") {
wallet2.innerHTML="$120";}
else if (wallet2.innerHTML==="$120") {
wallet2.innerHTML="$130";}
else if (wallet2.innerHTML==="$130") {
wallet2.innerHTML="$140";}
else if (wallet2.innerHTML==="$140") {
wallet2.innerHTML="$150";}
else if (wallet2.innerHTML==="$150") {
wallet2.innerHTML="$160";}
else if (wallet2.innerHTML==="$160") {
wallet2.innerHTML="$170";}
else if (wallet2.innerHTML==="$170") {
wallet2.innerHTML="$180";}
else if (wallet2.innerHTML==="$180") {
wallet2.innerHTML="$190";}
else if (wallet2.innerHTML==="$190") {
wallet2.innerHTML="$200";}
else if (wallet2.innerHTML==="$200") {
wallet2.innerHTML="$210";}
else if (wallet2.innerHTML==="$210") {
wallet2.innerHTML="$220";}
else if (wallet2.innerHTML==="$220") {
wallet2.innerHTML="$230";}
else if (wallet2.innerHTML==="$230") {
wallet2.innerHTML="$240";}
else if (wallet2.innerHTML==="$240") {
wallet2.innerHTML="$250";}
else if (wallet2.innerHTML==="$250") {
wallet2.innerHTML="$260";}
else if (wallet2.innerHTML==="$260") {
wallet2.innerHTML="$270";}
else if (wallet2.innerHTML==="$270") {
wallet2.innerHTML="$280";}
else if (wallet2.innerHTML==="$280") {
wallet2.innerHTML="$290";}
else if (wallet2.innerHTML==="$290") {
wallet2.innerHTML="$300";}
else if (wallet2.innerHTML==="$300") {
wallet2.innerHTML="$310";}
else if (wallet2.innerHTML==="$310") {
wallet2.innerHTML="$320";}
else if (wallet2.innerHTML==="$320") {
wallet2.innerHTML="$330";}
else if (wallet2.innerHTML==="$330") {
wallet2.innerHTML="$340";}
else if (wallet2.innerHTML==="$340") {
wallet2.innerHTML="$350";}
else if (wallet2.innerHTML==="$350") {
wallet2.innerHTML="$360";}
else if (wallet2.innerHTML==="$360") {
wallet2.innerHTML="$370";}
else if (wallet2.innerHTML==="$370") {
wallet2.innerHTML="$380";}
else if (wallet2.innerHTML==="$380") {
wallet2.innerHTML="$390";}
else if (wallet2.innerHTML==="$390") {
wallet2.innerHTML="$400";}
else if (wallet2.innerHTML==="$400") {
wallet2.innerHTML="$410";}
else if (wallet2.innerHTML==="$410") {
wallet2.innerHTML="$420";}
else if (wallet2.innerHTML==="$420") {
wallet2.innerHTML="$430";}
else if (wallet2.innerHTML==="$430") {
wallet2.innerHTML="$440";}
else if (wallet2.innerHTML==="$440") {
wallet2.innerHTML="$450";}
else if (wallet2.innerHTML==="$450") {
wallet2.innerHTML="$460";}
else if (wallet2.innerHTML==="$460") {
wallet2.innerHTML="$470";}
else if (wallet2.innerHTML==="$470") {
wallet2.innerHTML="$480";}
else if (wallet2.innerHTML==="$480") {
wallet2.innerHTML="$490";}
else if (wallet2.innerHTML==="$490") {
wallet2.innerHTML="$500";}
else if (wallet2.innerHTML==="$500") {
wallet2.innerHTML="$510";}
else if (wallet2.innerHTML==="$510") {
wallet2.innerHTML="$520";}
else if (wallet2.innerHTML==="$520") {
wallet2.innerHTML="$530";}
else if (wallet2.innerHTML==="$530") {
wallet2.innerHTML="$540";}
else if (wallet2.innerHTML==="$540") {
wallet2.innerHTML="$550";}
else if (wallet2.innerHTML==="$550") {
wallet2.innerHTML="$560";}
else if (wallet2.innerHTML==="$560") {
wallet2.innerHTML="$570";}
else if (wallet2.innerHTML==="$570") {
wallet2.innerHTML="$580";}
else if (wallet2.innerHTML==="$580") {
wallet2.innerHTML="$590";}
else if (wallet2.innerHTML==="$590") {
wallet2.innerHTML="$600";}
else if (wallet2.innerHTML==="$600") {
wallet2.innerHTML="$610";}
else if (wallet2.innerHTML==="$610") {
wallet2.innerHTML="$620";}
else if (wallet2.innerHTML==="$620") {
wallet2.innerHTML="$630";}
else if (wallet2.innerHTML==="$630") {
wallet2.innerHTML="$640";}
else if (wallet2.innerHTML==="$640") {
wallet2.innerHTML="$650";}
else if (wallet2.innerHTML==="$650") {
wallet2.innerHTML="$660";}
else if (wallet2.innerHTML==="$660") {
wallet2.innerHTML="$670";}
else if (wallet2.innerHTML==="$670") {
wallet2.innerHTML="$680";}
else if (wallet2.innerHTML==="$680") {
wallet2.innerHTML="$690";}
else if (wallet2.innerHTML==="$690") {
wallet2.innerHTML="$700";}
else if (wallet2.innerHTML==="$700") {
wallet2.innerHTML="$710";}
else if (wallet2.innerHTML==="$710") {
wallet2.innerHTML="$720";}
else if (wallet2.innerHTML==="$720") {
wallet2.innerHTML="$730";}
else if (wallet2.innerHTML==="$730") {
wallet2.innerHTML="$740";}
else if (wallet2.innerHTML==="$740") {
wallet2.innerHTML="$750";}
else if (wallet2.innerHTML==="$750") {
wallet2.innerHTML="$760";}
else if (wallet2.innerHTML==="$760") {
wallet2.innerHTML="$770";}
else if (wallet2.innerHTML==="$770") {
wallet2.innerHTML="$780";}
else if (wallet2.innerHTML==="$780") {
wallet2.innerHTML="$790";}
else if (wallet2.innerHTML==="$790") {
wallet2.innerHTML="$800";}
else if (wallet2.innerHTML==="$800") {
wallet2.innerHTML="$810";}
else if (wallet2.innerHTML==="$810") {
wallet2.innerHTML="$820";}
else if (wallet2.innerHTML==="$820") {
wallet2.innerHTML="$830";}
else if (wallet2.innerHTML==="$830") {
wallet2.innerHTML="$840";}
else if (wallet2.innerHTML==="$840") {
wallet2.innerHTML="$850";}
else if (wallet2.innerHTML==="$850") {
wallet2.innerHTML="$860";}
else if (wallet2.innerHTML==="$860") {
wallet2.innerHTML="$870";}
else if (wallet2.innerHTML==="$870") {
wallet2.innerHTML="$880";}
else if (wallet2.innerHTML==="$880") {
wallet2.innerHTML="$890";}
else if (wallet2.innerHTML==="$890") {
wallet2.innerHTML="$900";}
else if (wallet2.innerHTML==="$900") {
wallet2.innerHTML="$910";}
else if (wallet2.innerHTML==="$910") {
wallet2.innerHTML="$920";}
else if (wallet2.innerHTML==="$920") {
wallet2.innerHTML="$930";}
else if (wallet2.innerHTML==="$930") {
wallet2.innerHTML="$940";}
else if (wallet2.innerHTML==="$940") {
wallet2.innerHTML="$950";}
else if (wallet2.innerHTML==="$950") {
wallet2.innerHTML="$960";}
else if (wallet2.innerHTML==="$960") {
wallet2.innerHTML="$970";}
else if (wallet2.innerHTML==="$970") {
wallet2.innerHTML="$980";}
else if (wallet2.innerHTML==="$980") {
wallet2.innerHTML="$990";}
else if (wallet2.innerHTML==="$990") {
wallet2.innerHTML="$1000";}
else if (wallet2.innerHTML==="$1000") {
wallet2.innerHTML="$1010";}
else if (wallet2.innerHTML==="$1010") {
wallet2.innerHTML="$1020";}
else if (wallet2.innerHTML==="$1020") {
wallet2.innerHTML="$1030";}
else if (wallet2.innerHTML==="$1030") {
wallet2.innerHTML="$1040";}
else if (wallet2.innerHTML==="$1040") {
wallet2.innerHTML="$1050";}
else if (wallet2.innerHTML==="$1050") {
wallet2.innerHTML="$1060";}
else if (wallet2.innerHTML==="$1060") {
wallet2.innerHTML="$1070";}
else if (wallet2.innerHTML==="$1070") {
wallet2.innerHTML="$1080";}
else if (wallet2.innerHTML==="$1080") {
wallet2.innerHTML="$1090";}
else if (wallet2.innerHTML==="$1090") {
wallet2.innerHTML="$1100";}
else if (wallet2.innerHTML==="$1100") {
wallet2.innerHTML="$1110";}
else if (wallet2.innerHTML==="$1110") {
wallet2.innerHTML="$1120";}
else if (wallet2.innerHTML==="$1120") {
wallet2.innerHTML="$1130";}
else if (wallet2.innerHTML==="$1130") {
wallet2.innerHTML="$1140";}
else if (wallet2.innerHTML==="$1140") {
wallet2.innerHTML="$1150";}
else if (wallet2.innerHTML==="$1150") {
wallet2.innerHTML="$1160";}
else if (wallet2.innerHTML==="$1160") {
wallet2.innerHTML="$1170";}
else if (wallet2.innerHTML==="$1170") {
wallet2.innerHTML="$1180";}
else if (wallet2.innerHTML==="$1180") {
wallet2.innerHTML="$1190";}
else if (wallet2.innerHTML==="$1190") {
wallet2.innerHTML="$1200";}
else if (wallet2.innerHTML==="$1200") {
wallet2.innerHTML="$1210";}
else if (wallet2.innerHTML==="$1210") {
wallet2.innerHTML="$1220";}
else if (wallet2.innerHTML==="$1220") {
wallet2.innerHTML="$1230";}
else if (wallet2.innerHTML==="$1230") {
wallet2.innerHTML="$1240";}
else if (wallet2.innerHTML==="$1240") {
wallet2.innerHTML="$1250";}
else if (wallet2.innerHTML==="$1250") {
wallet2.innerHTML="$1260";}
else if (wallet2.innerHTML==="$1260") {
wallet2.innerHTML="$1270";}
else if (wallet2.innerHTML==="$1270") {
wallet2.innerHTML="$1280";}
else if (wallet2.innerHTML==="$1280") {
wallet2.innerHTML="$1290";}
else if (wallet2.innerHTML==="$1290") {
wallet2.innerHTML="$1300";}
else if (wallet2.innerHTML==="$1300") {
wallet2.innerHTML="$1310";}
else if (wallet2.innerHTML==="$1310") {
wallet2.innerHTML="$1320";}
else if (wallet2.innerHTML==="$1320") {
wallet2.innerHTML="$1330";}
else if (wallet2.innerHTML==="$1330") {
wallet2.innerHTML="$1340";}
else if (wallet2.innerHTML==="$1340") {
wallet2.innerHTML="$1350";}
else if (wallet2.innerHTML==="$1350") {
wallet2.innerHTML="$1360";}
else if (wallet2.innerHTML==="$1360") {
wallet2.innerHTML="$1370";}
else if (wallet2.innerHTML==="$1370") {
wallet2.innerHTML="$1380";}
else if (wallet2.innerHTML==="$1380") {
wallet2.innerHTML="$1390";}
else if (wallet2.innerHTML==="$1390") {
wallet2.innerHTML="$1400";}
else if (wallet2.innerHTML==="$1400") {
wallet2.innerHTML="$1410";}
else if (wallet2.innerHTML==="$1410") {
wallet2.innerHTML="$1420";}
else if (wallet2.innerHTML==="$1420") {
wallet2.innerHTML="$1430";}
else if (wallet2.innerHTML==="$1430") {
wallet2.innerHTML="$1440";}
else if (wallet2.innerHTML==="$1440") {
wallet2.innerHTML="$1450";}
else if (wallet2.innerHTML==="$1450") {
wallet2.innerHTML="$1460";}
else if (wallet2.innerHTML==="$1460") {
wallet2.innerHTML="$1470";}
else if (wallet2.innerHTML==="$1470") {
wallet2.innerHTML="$1480";}
else if (wallet2.innerHTML==="$1480") {
wallet2.innerHTML="$1490";}
else if (wallet2.innerHTML==="$1490") {
wallet2.innerHTML="$1500";}
else if (wallet2.innerHTML==="$1500") {
wallet2.innerHTML="$1510";}
else if (wallet2.innerHTML==="$1510") {
wallet2.innerHTML="$1520";}
else if (wallet2.innerHTML==="$1520") {
wallet2.innerHTML="$1530";}
else if (wallet2.innerHTML==="$1530") {
wallet2.innerHTML="$1540";}
else if (wallet2.innerHTML==="$1540") {
wallet2.innerHTML="$1550";}
else if (wallet2.innerHTML==="$1550") {
wallet2.innerHTML="$1560";}
else if (wallet2.innerHTML==="$1560") {
wallet2.innerHTML="$1570";}
else if (wallet2.innerHTML==="$1570") {
wallet2.innerHTML="$1580";}
else if (wallet2.innerHTML==="$1580") {
wallet2.innerHTML="$1590";}
else if (wallet2.innerHTML==="$1590") {
wallet2.innerHTML="$1600";}
else if (wallet2.innerHTML==="$1600") {
wallet2.innerHTML="$1610";}
else if (wallet2.innerHTML==="$1610") {
wallet2.innerHTML="$1620";}
else if (wallet2.innerHTML==="$1620") {
wallet2.innerHTML="$1630";}
else if (wallet2.innerHTML==="$1630") {
wallet2.innerHTML="$1640";}
else if (wallet2.innerHTML==="$1640") {
wallet2.innerHTML="$1650";}
else if (wallet2.innerHTML==="$1650") {
wallet2.innerHTML="$1660";}
else if (wallet2.innerHTML==="$1660") {
wallet2.innerHTML="$1670";}
else if (wallet2.innerHTML==="$1670") {
wallet2.innerHTML="$1680";}
else if (wallet2.innerHTML==="$1680") {
wallet2.innerHTML="$1690";}
else if (wallet2.innerHTML==="$1690") {
wallet2.innerHTML="$1700";}
else if (wallet2.innerHTML==="$1700") {
wallet2.innerHTML="$1710";}
else if (wallet2.innerHTML==="$1710") {
wallet2.innerHTML="$1720";}
else if (wallet2.innerHTML==="$1720") {
wallet2.innerHTML="$1730";}
else if (wallet2.innerHTML==="$1730") {
wallet2.innerHTML="$1740";}
else if (wallet2.innerHTML==="$1740") {
wallet2.innerHTML="$1750";}
else if (wallet2.innerHTML==="$1750") {
wallet2.innerHTML="$1760";}
else if (wallet2.innerHTML==="$1760") {
wallet2.innerHTML="$1770";}
else if (wallet2.innerHTML==="$1770") {
wallet2.innerHTML="$1780";}
else if (wallet2.innerHTML==="$1780") {
wallet2.innerHTML="$1790";}
else if (wallet2.innerHTML==="$1790") {
wallet2.innerHTML="$1800";}
else if (wallet2.innerHTML==="$1800") {
wallet2.innerHTML="$1810";}
else if (wallet2.innerHTML==="$1810") {
wallet2.innerHTML="$1820";}
else if (wallet2.innerHTML==="$1820") {
wallet2.innerHTML="$1830";}
else if (wallet2.innerHTML==="$1830") {
wallet2.innerHTML="$1840";}
else if (wallet2.innerHTML==="$1840") {
wallet2.innerHTML="$1850";}
else if (wallet2.innerHTML==="$1850") {
wallet2.innerHTML="$1860";}
else if (wallet2.innerHTML==="$1860") {
wallet2.innerHTML="$1870";}
else if (wallet2.innerHTML==="$1870") {
wallet2.innerHTML="$1880";}
else if (wallet2.innerHTML==="$1880") {
wallet2.innerHTML="$1890";}
else if (wallet2.innerHTML==="$1890") {
wallet2.innerHTML="$1900";}
else if (wallet2.innerHTML==="$1900") {
wallet2.innerHTML="$1910";}
else if (wallet2.innerHTML==="$1910") {
wallet2.innerHTML="$1920";}
else if (wallet2.innerHTML==="$1920") {
wallet2.innerHTML="$1930";}
else if (wallet2.innerHTML==="$1930") {
wallet2.innerHTML="$1940";}
else if (wallet2.innerHTML==="$1940") {
wallet2.innerHTML="$1950";}
else if (wallet2.innerHTML==="$1950") {
wallet2.innerHTML="$1960";}
else if (wallet2.innerHTML==="$1960") {
wallet2.innerHTML="$1970";}
else if (wallet2.innerHTML==="$1970") {
wallet2.innerHTML="$1980";}
else if (wallet2.innerHTML==="$1980") {
wallet2.innerHTML="$1990";}
else if (wallet2.innerHTML==="$1990") {
wallet2.innerHTML="$2000";}
else if (wallet2.innerHTML==="$2000") {
wallet2.innerHTML="$2010";}
else if (wallet2.innerHTML==="$2010") {
wallet2.innerHTML="$2020";}
else if (wallet2.innerHTML==="$2020") {
wallet2.innerHTML="$2030";}
else if (wallet2.innerHTML==="$2030") {
wallet2.innerHTML="$2040";}
else if (wallet2.innerHTML==="$2040") {
wallet2.innerHTML="$2050";}
else if (wallet2.innerHTML==="$2050") {
wallet2.innerHTML="$2060";}}

function minus2() {
var wallet2=document.getElementById("wal2");
var back=document.getElementById("bac2b");
if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$0") {
wallet2.innerHTML="Bank rupt";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$10") {
wallet2.innerHTML="Bank rupt";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$20") {
wallet2.innerHTML="Bank rupt";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$30") {
wallet2.innerHTML="Bank rupt";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$40") {
wallet2.innerHTML="Bank rupt";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$50") {
wallet2.innerHTML="Bank rupt";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$60") {
wallet2.innerHTML="Bank rupt";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$70") {
wallet2.innerHTML="Bank rupt";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$80") {
wallet2.innerHTML="Bank rupt";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$90") {
wallet2.innerHTML="Bank rupt";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$100") {
wallet2.innerHTML="$0";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$110") {
wallet2.innerHTML="$10";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$120") {
wallet2.innerHTML="$20";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$130") {
wallet2.innerHTML="$30";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$140") {
wallet2.innerHTML="$40";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$150") {
wallet2.innerHTML="$50";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$160") {
wallet2.innerHTML="$60";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$170") {
wallet2.innerHTML="$70";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$180") {
wallet2.innerHTML="$80";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$190") {
wallet2.innerHTML="$90";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$200") {
wallet2.innerHTML="$100";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$210") {
wallet2.innerHTML="$110";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$220") {
wallet2.innerHTML="$120";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$230") {
wallet2.innerHTML="$130";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$240") {
wallet2.innerHTML="$140";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$250") {
wallet2.innerHTML="$150";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$260") {
wallet2.innerHTML="$160";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$270") {
wallet2.innerHTML="$170";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$280") {
wallet2.innerHTML="$180";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$290") {
wallet2.innerHTML="$190";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$300") {
wallet2.innerHTML="$200";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$310") {
wallet2.innerHTML="$210";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$320") {
wallet2.innerHTML="$220";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$330") {
wallet2.innerHTML="$230";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$340") {
wallet2.innerHTML="$240";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$350") {
wallet2.innerHTML="$250";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$360") {
wallet2.innerHTML="$260";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$370") {
wallet2.innerHTML="$270";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$380") {
wallet2.innerHTML="$280";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$390") {
wallet2.innerHTML="$290";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$400") {
wallet2.innerHTML="$300";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$410") {
wallet2.innerHTML="$310";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$420") {
wallet2.innerHTML="$320";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$430") {
wallet2.innerHTML="$330";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$440") {
wallet2.innerHTML="$340";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$450") {
wallet2.innerHTML="$350";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$460") {
wallet2.innerHTML="$360";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$470") {
wallet2.innerHTML="$370";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$480") {
wallet2.innerHTML="$380";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$490") {
wallet2.innerHTML="$390";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$500") {
wallet2.innerHTML="$400";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$510") {
wallet2.innerHTML="$410";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$520") {
wallet2.innerHTML="$420";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$530") {
wallet2.innerHTML="$430";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$540") {
wallet2.innerHTML="$440";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$550") {
wallet2.innerHTML="$450";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$560") {
wallet2.innerHTML="$460";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$570") {
wallet2.innerHTML="$470";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$580") {
wallet2.innerHTML="$480";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$590") {
wallet2.innerHTML="$490";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$600") {
wallet2.innerHTML="$500";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$610") {
wallet2.innerHTML="$510";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$620") {
wallet2.innerHTML="$520";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$630") {
wallet2.innerHTML="$530";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$640") {
wallet2.innerHTML="$540";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$650") {
wallet2.innerHTML="$550";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$660") {
wallet2.innerHTML="$560";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$670") {
wallet2.innerHTML="$570";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$680") {
wallet2.innerHTML="$580";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$690") {
wallet2.innerHTML="$590";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$700") {
wallet2.innerHTML="$600";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$710") {
wallet2.innerHTML="$610";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$720") {
wallet2.innerHTML="$620";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$730") {
wallet2.innerHTML="$630";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$740") {
wallet2.innerHTML="$640";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$750") {
wallet2.innerHTML="$650";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$760") {
wallet2.innerHTML="$660";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$770") {
wallet2.innerHTML="$670";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$780") {
wallet2.innerHTML="$680";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$790") {
wallet2.innerHTML="$690";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$800") {
wallet2.innerHTML="$700";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$810") {
wallet2.innerHTML="$710";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$820") {
wallet2.innerHTML="$720";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$830") {
wallet2.innerHTML="$730";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$840") {
wallet2.innerHTML="$740";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$850") {
wallet2.innerHTML="$750";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$860") {
wallet2.innerHTML="$760";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$870") {
wallet2.innerHTML="$770";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$880") {
wallet2.innerHTML="$780";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$890") {
wallet2.innerHTML="$690";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$900") {
wallet2.innerHTML="$700";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$910") {
wallet2.innerHTML="$710";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$920") {
wallet2.innerHTML="$720";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$930") {
wallet2.innerHTML="$830";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$940") {
wallet2.innerHTML="$840";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$950") {
wallet2.innerHTML="$850";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$960") {
wallet2.innerHTML="$860";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$970") {
wallet2.innerHTML="$870";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$980") {
wallet2.innerHTML="$880";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$990") {
wallet2.innerHTML="$890";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$1000") {
wallet2.innerHTML="$900";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$1010") {
wallet2.innerHTML="$910";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$1020") {
wallet2.innerHTML="$920";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$1030") {
wallet2.innerHTML="$930";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$1040") {
wallet2.innerHTML="$940";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$1050") {
wallet2.innerHTML="$950";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$1060") {
wallet2.innerHTML="$960";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$1070") {
wallet2.innerHTML="$970";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$1080") {
wallet2.innerHTML="$980";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$1090") {
wallet2.innerHTML="$990";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$1100") {
wallet2.innerHTML="$1000";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$1110") {
wallet2.innerHTML="$1010";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$1120") {
wallet2.innerHTML="$1020";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$1130") {
wallet2.innerHTML="$1030";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$1140") {
wallet2.innerHTML="$1040";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$1150") {
wallet2.innerHTML="$1050";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$1160") {
wallet2.innerHTML="$1060";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$1170") {
wallet2.innerHTML="$1070";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$1180") {
wallet2.innerHTML="$1080";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$1190") {
wallet2.innerHTML="$1090";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$1200") {
wallet2.innerHTML="$1100";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$1210") {
wallet2.innerHTML="$1110";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$1220") {
wallet2.innerHTML="$1120";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$1230") {
wallet2.innerHTML="$1130";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$1240") {
wallet2.innerHTML="$1140";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$1250") {
wallet2.innerHTML="$1150";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$1260") {
wallet2.innerHTML="$1160";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$1270") {
wallet2.innerHTML="$1170";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$1280") {
wallet2.innerHTML="$1180";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$1290") {
wallet2.innerHTML="$1190";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$1300") {
wallet2.innerHTML="$1200";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$1310") {
wallet2.innerHTML="$1210";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$1320") {
wallet2.innerHTML="$1220";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$1330") {
wallet2.innerHTML="$1230";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$1340") {
wallet2.innerHTML="$1240";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$1350") {
wallet2.innerHTML="$1250";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$1360") {
wallet2.innerHTML="$1260";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$1370") {
wallet2.innerHTML="$1270";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$1380") {
wallet2.innerHTML="$1280";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$1390") {
wallet2.innerHTML="$1290";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$1400") {
wallet2.innerHTML="$1300";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$1410") {
wallet2.innerHTML="$1310";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$1420") {
wallet2.innerHTML="$1320";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$1430") {
wallet2.innerHTML="$1330";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$1440") {
wallet2.innerHTML="$1340";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$1450") {
wallet2.innerHTML="$1350";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$1460") {
wallet2.innerHTML="$1360";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$1470") {
wallet2.innerHTML="$1370";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$1480") {
wallet2.innerHTML="$1390";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$1490") {
wallet2.innerHTML="$1400";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$1500") {
wallet2.innerHTML="$1400";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$1510") {
wallet2.innerHTML="$1410";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$1520") {
wallet2.innerHTML="$1420";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$1530") {
wallet2.innerHTML="$1430";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$1540") {
wallet2.innerHTML="$1440";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$1550") {
wallet2.innerHTML="$1450";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$1560") {
wallet2.innerHTML="$1460";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$1570") {
wallet2.innerHTML="$1470";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$1580") {
wallet2.innerHTML="$1480";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$1590") {
wallet2.innerHTML="$1490";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$1600") {
wallet2.innerHTML="$1500";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$1610") {
wallet2.innerHTML="$1510";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$1620") {
wallet2.innerHTML="$1520";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$1630") {
wallet2.innerHTML="$1530";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$1640") {
wallet2.innerHTML="$1540";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$1650") {
wallet2.innerHTML="$1550";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$1660") {
wallet2.innerHTML="$1560";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$1670") {
wallet2.innerHTML="$1570";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$1680") {
wallet2.innerHTML="$1580";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$1690") {
wallet2.innerHTML="$1590";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$1700") {
wallet2.innerHTML="$1600";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$1710") {
wallet2.innerHTML="$1610";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$1720") {
wallet2.innerHTML="$1620";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$1730") {
wallet2.innerHTML="$1630";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$1740") {
wallet2.innerHTML="$1640";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$1750") {
wallet2.innerHTML="$1650";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$1760") {
wallet2.innerHTML="$1660";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$1770") {
wallet2.innerHTML="$1670";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$1780") {
wallet2.innerHTML="$1680";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$1790") {
wallet2.innerHTML="$1690";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$1800") {
wallet2.innerHTML="$1700";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$1810") {
wallet2.innerHTML="$1710";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$1820") {
wallet2.innerHTML="$1720";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$1830") {
wallet2.innerHTML="$1730";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$1840") {
wallet2.innerHTML="$1740";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$1850") {
wallet2.innerHTML="$1750";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$1860") {
wallet2.innerHTML="$1760";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$1870") {
wallet2.innerHTML="$1770";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$1880") {
wallet2.innerHTML="$1780";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$1890") {
wallet2.innerHTML="$1790";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$1900") {
wallet2.innerHTML="$1800";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$1910") {
wallet2.innerHTML="$1810";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$1920") {
wallet2.innerHTML="$1820";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$1930") {
wallet2.innerHTML="$1830";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$1940") {
wallet2.innerHTML="$1840";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$1950") {
wallet2.innerHTML="$1850";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$1960") {
wallet2.innerHTML="$1860";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$1970") {
wallet2.innerHTML="$1870";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$1980") {
wallet2.innerHTML="$1880";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$1990") {
wallet2.innerHTML="$1890";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$2000") {
wallet2.innerHTML="$1900";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$2010") {
wallet2.innerHTML="$1910";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$2020") {
wallet2.innerHTML="$1920";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$2030") {
wallet2.innerHTML="$1930";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$2040") {
wallet2.innerHTML="$1940";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$2050") {
wallet2.innerHTML="$1950";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$2060") {
wallet2.innerHTML="$1960";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$2070") {
wallet2.innerHTML="$1970";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$2080") {
wallet2.innerHTML="$1980";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$2090") {
wallet2.innerHTML="$1990";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$2100") {
wallet2.innerHTML="$2000";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$2110") {
wallet2.innerHTML="$2010";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$2120") {
wallet2.innerHTML="$2020";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$2130") {
wallet2.innerHTML="$2030";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$2140") {
wallet2.innerHTML="$2040";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$2150") {
wallet2.innerHTML="$2050";}
else if (back.style.background==="darkslategrey" && wallet2.innerHTML==="$2160") {
wallet2.innerHTML="$2060";}
else if (wallet2.innerHTML==="$0") {
wallet2.innerHTML="Bank rupt";}
else if (wallet2.innerHTML==="$10") {
wallet2.innerHTML="$0";}
else if (wallet2.innerHTML==="$20") {
wallet2.innerHTML="$10";}
else if (wallet2.innerHTML==="$30") {
wallet2.innerHTML="$20";}
else if (wallet2.innerHTML==="$40") {
wallet2.innerHTML="$30";}
else if (wallet2.innerHTML==="$50") {
wallet2.innerHTML="$40";}
else if (wallet2.innerHTML==="$60") {
wallet2.innerHTML="$50";}
else if (wallet2.innerHTML==="$70") {
wallet2.innerHTML="$60";}
else if (wallet2.innerHTML==="$80") {
wallet2.innerHTML="$70";}
else if (wallet2.innerHTML==="$90") {
wallet2.innerHTML="$80";}
else if (wallet2.innerHTML==="$100") {
wallet2.innerHTML="$90";}
else if (wallet2.innerHTML==="$110") {
wallet2.innerHTML="$100";}
else if (wallet2.innerHTML==="$110") {
wallet2.innerHTML="$100";}
else if (wallet2.innerHTML==="$120") {
wallet2.innerHTML="$110";}
else if (wallet2.innerHTML==="$130") {
wallet2.innerHTML="$120";}
else if (wallet2.innerHTML==="$140") {
wallet2.innerHTML="$130";}
else if (wallet2.innerHTML==="$150") {
wallet2.innerHTML="$140";}
else if (wallet2.innerHTML==="$160") {
wallet2.innerHTML="$150";}
else if (wallet2.innerHTML==="$170") {
wallet2.innerHTML="$160";}
else if (wallet2.innerHTML==="$180") {
wallet2.innerHTML="$170";}
else if (wallet2.innerHTML==="$190") {
wallet2.innerHTML="$180";}
else if (wallet2.innerHTML==="$200") {
wallet2.innerHTML="$190";}
else if (wallet2.innerHTML==="$210") {
wallet2.innerHTML="$200";}
else if (wallet2.innerHTML==="$210") {
wallet2.innerHTML="$200";}
else if (wallet2.innerHTML==="$220") {
wallet2.innerHTML="$210";}
else if (wallet2.innerHTML==="$230") {
wallet2.innerHTML="$220";}
else if (wallet2.innerHTML==="$240") {
wallet2.innerHTML="$230";}
else if (wallet2.innerHTML==="$250") {
wallet2.innerHTML="$240";}
else if (wallet2.innerHTML==="$260") {
wallet2.innerHTML="$250";}
else if (wallet2.innerHTML==="$270") {
wallet2.innerHTML="$260";}
else if (wallet2.innerHTML==="$280") {
wallet2.innerHTML="$270";}
else if (wallet2.innerHTML==="$290") {
wallet2.innerHTML="$280";}
else if (wallet2.innerHTML==="$300") {
wallet2.innerHTML="$290";}
else if (wallet2.innerHTML==="$310") {
wallet2.innerHTML="$300";}
else if (wallet2.innerHTML==="$310") {
wallet2.innerHTML="$300";}
else if (wallet2.innerHTML==="$320") {
wallet2.innerHTML="$310";}
else if (wallet2.innerHTML==="$330") {
wallet2.innerHTML="$320";}
else if (wallet2.innerHTML==="$340") {
wallet2.innerHTML="$330";}
else if (wallet2.innerHTML==="$350") {
wallet2.innerHTML="$340";}
else if (wallet2.innerHTML==="$360") {
wallet2.innerHTML="$350";}
else if (wallet2.innerHTML==="$370") {
wallet2.innerHTML="$360";}
else if (wallet2.innerHTML==="$380") {
wallet2.innerHTML="$370";}
else if (wallet2.innerHTML==="$390") {
wallet2.innerHTML="$380";}
else if (wallet2.innerHTML==="$400") {
wallet2.innerHTML="$390";}
else if (wallet2.innerHTML==="$410") {
wallet2.innerHTML="$400";}
else if (wallet2.innerHTML==="$420") {
wallet2.innerHTML="$410";}
else if (wallet2.innerHTML==="$430") {
wallet2.innerHTML="$420";}
else if (wallet2.innerHTML==="$440") {
wallet2.innerHTML="$430";}
else if (wallet2.innerHTML==="$450") {
wallet2.innerHTML="$440";}
else if (wallet2.innerHTML==="$460") {
wallet2.innerHTML="$450";}
else if (wallet2.innerHTML==="$470") {
wallet2.innerHTML="$460";}
else if (wallet2.innerHTML==="$480") {
wallet2.innerHTML="$470";}
else if (wallet2.innerHTML==="$490") {
wallet2.innerHTML="$480";}
else if (wallet2.innerHTML==="$500") {
wallet2.innerHTML="$490";}
else if (wallet2.innerHTML==="$510") {
wallet2.innerHTML="$500";}
else if (wallet2.innerHTML==="$510") {
wallet2.innerHTML="$500";}
else if (wallet2.innerHTML==="$510") {
wallet2.innerHTML="$500";}
else if (wallet2.innerHTML==="$520") {
wallet2.innerHTML="$510";}
else if (wallet2.innerHTML==="$530") {
wallet2.innerHTML="$520";}
else if (wallet2.innerHTML==="$540") {
wallet2.innerHTML="$530";}
else if (wallet2.innerHTML==="$550") {
wallet2.innerHTML="$540";}
else if (wallet2.innerHTML==="$560") {
wallet2.innerHTML="$550";}
else if (wallet2.innerHTML==="$570") {
wallet2.innerHTML="$560";}
else if (wallet2.innerHTML==="$580") {
wallet2.innerHTML="$570";}
else if (wallet2.innerHTML==="$590") {
wallet2.innerHTML="$580";}
else if (wallet2.innerHTML==="$600") {
wallet2.innerHTML="$590";}
else if (wallet2.innerHTML==="$610") {
wallet2.innerHTML="$600";}
else if (wallet2.innerHTML==="$620") {
wallet2.innerHTML="$610";}
else if (wallet2.innerHTML==="$630") {
wallet2.innerHTML="$620";}
else if (wallet2.innerHTML==="$640") {
wallet2.innerHTML="$630";}
else if (wallet2.innerHTML==="$650") {
wallet2.innerHTML="$640";}
else if (wallet2.innerHTML==="$660") {
wallet2.innerHTML="$650";}
else if (wallet2.innerHTML==="$670") {
wallet2.innerHTML="$660";}
else if (wallet2.innerHTML==="$680") {
wallet2.innerHTML="$670";}
else if (wallet2.innerHTML==="$690") {
wallet2.innerHTML="$680";}
else if (wallet2.innerHTML==="$700") {
wallet2.innerHTML="$690";}
else if (wallet2.innerHTML==="$710") {
wallet2.innerHTML="$700";}
else if (wallet2.innerHTML==="$710") {
wallet2.innerHTML="$700";}
else if (wallet2.innerHTML==="$720") {
wallet2.innerHTML="$710";}
else if (wallet2.innerHTML==="$730") {
wallet2.innerHTML="$720";}
else if (wallet2.innerHTML==="$740") {
wallet2.innerHTML="$730";}
else if (wallet2.innerHTML==="$750") {
wallet2.innerHTML="$740";}
else if (wallet2.innerHTML==="$760") {
wallet2.innerHTML="$750";}
else if (wallet2.innerHTML==="$770") {
wallet2.innerHTML="$760";}
else if (wallet2.innerHTML==="$780") {
wallet2.innerHTML="$770";}
else if (wallet2.innerHTML==="$790") {
wallet2.innerHTML="$780";}
else if (wallet2.innerHTML==="$800") {
wallet2.innerHTML="$790";}
else if (wallet2.innerHTML==="$810") {
wallet2.innerHTML="$800";}
else if (wallet2.innerHTML==="$810") {
wallet2.innerHTML="$800";}
else if (wallet2.innerHTML==="$820") {
wallet2.innerHTML="$810";}
else if (wallet2.innerHTML==="$830") {
wallet2.innerHTML="$820";}
else if (wallet2.innerHTML==="$840") {
wallet2.innerHTML="$830";}
else if (wallet2.innerHTML==="$850") {
wallet2.innerHTML="$840";}
else if (wallet2.innerHTML==="$860") {
wallet2.innerHTML="$850";}
else if (wallet2.innerHTML==="$870") {
wallet2.innerHTML="$860";}
else if (wallet2.innerHTML==="$880") {
wallet2.innerHTML="$870";}
else if (wallet2.innerHTML==="$890") {
wallet2.innerHTML="$880";}
else if (wallet2.innerHTML==="$900") {
wallet2.innerHTML="$890";}
else if (wallet2.innerHTML==="$910") {
wallet2.innerHTML="$900";}
else if (wallet2.innerHTML==="$920") {
wallet2.innerHTML="$910";}
else if (wallet2.innerHTML==="$930") {
wallet2.innerHTML="$920";}
else if (wallet2.innerHTML==="$940") {
wallet2.innerHTML="$930";}
else if (wallet2.innerHTML==="$950") {
wallet2.innerHTML="$940";}
else if (wallet2.innerHTML==="$960") {
wallet2.innerHTML="$950";}
else if (wallet2.innerHTML==="$970") {
wallet2.innerHTML="$960";}
else if (wallet2.innerHTML==="$980") {
wallet2.innerHTML="$970";}
else if (wallet2.innerHTML==="$990") {
wallet2.innerHTML="$980";}
else if (wallet2.innerHTML==="$1000") {
wallet2.innerHTML="$990";}
else if (wallet2.innerHTML==="$1010") {
wallet2.innerHTML="$1000";}
else if (wallet2.innerHTML==="$1010") {
wallet2.innerHTML="$1000";}
else if (wallet2.innerHTML==="$1020") {
wallet2.innerHTML="$1010";}
else if (wallet2.innerHTML==="$1030") {
wallet2.innerHTML="$1020";}
else if (wallet2.innerHTML==="$1040") {
wallet2.innerHTML="$1030";}
else if (wallet2.innerHTML==="$1050") {
wallet2.innerHTML="$1040";}
else if (wallet2.innerHTML==="$1060") {
wallet2.innerHTML="$1050";}
else if (wallet2.innerHTML==="$1070") {
wallet2.innerHTML="$1060";}
else if (wallet2.innerHTML==="$1080") {
wallet2.innerHTML="$1070";}
else if (wallet2.innerHTML==="$1090") {
wallet2.innerHTML="$1080";}
else if (wallet2.innerHTML==="$1100") {
wallet2.innerHTML="$1090";}
else if (wallet2.innerHTML==="$1110") {
wallet2.innerHTML="$1100";}
else if (wallet2.innerHTML==="$1110") {
wallet2.innerHTML="$1100";}
else if (wallet2.innerHTML==="$1120") {
wallet2.innerHTML="$1110";}
else if (wallet2.innerHTML==="$1130") {
wallet2.innerHTML="$1120";}
else if (wallet2.innerHTML==="$1140") {
wallet2.innerHTML="$1130";}
else if (wallet2.innerHTML==="$1150") {
wallet2.innerHTML="$1140";}
else if (wallet2.innerHTML==="$1160") {
wallet2.innerHTML="$1150";}
else if (wallet2.innerHTML==="$1170") {
wallet2.innerHTML="$1160";}
else if (wallet2.innerHTML==="$1180") {
wallet2.innerHTML="$1170";}
else if (wallet2.innerHTML==="$1190") {
wallet2.innerHTML="$1180";}
else if (wallet2.innerHTML==="$1200") {
wallet2.innerHTML="$1190";}
else if (wallet2.innerHTML==="$1210") {
wallet2.innerHTML="$1200";}
else if (wallet2.innerHTML==="$1220") {
wallet2.innerHTML="$1210";}
else if (wallet2.innerHTML==="$1230") {
wallet2.innerHTML="$1220";}
else if (wallet2.innerHTML==="$1240") {
wallet2.innerHTML="$1230";}
else if (wallet2.innerHTML==="$1250") {
wallet2.innerHTML="$1240";}
else if (wallet2.innerHTML==="$1260") {
wallet2.innerHTML="$1250";}
else if (wallet2.innerHTML==="$1270") {
wallet2.innerHTML="$1260";}
else if (wallet2.innerHTML==="$1280") {
wallet2.innerHTML="$1270";}
else if (wallet2.innerHTML==="$1290") {
wallet2.innerHTML="$1280";}
else if (wallet2.innerHTML==="$1300") {
wallet2.innerHTML="$1290";}
else if (wallet2.innerHTML==="$1310") {
wallet2.innerHTML="$1300";}
else if (wallet2.innerHTML==="$1310") {
wallet2.innerHTML="$1300";}
else if (wallet2.innerHTML==="$1320") {
wallet2.innerHTML="$1310";}
else if (wallet2.innerHTML==="$1330") {
wallet2.innerHTML="$1320";}
else if (wallet2.innerHTML==="$1340") {
wallet2.innerHTML="$1330";}
else if (wallet2.innerHTML==="$1350") {
wallet2.innerHTML="$1340";}
else if (wallet2.innerHTML==="$1360") {
wallet2.innerHTML="$1350";}
else if (wallet2.innerHTML==="$1370") {
wallet2.innerHTML="$1360";}
else if (wallet2.innerHTML==="$1380") {
wallet2.innerHTML="$1370";}
else if (wallet2.innerHTML==="$1390") {
wallet2.innerHTML="$1380";}
else if (wallet2.innerHTML==="$1400") {
wallet2.innerHTML="$1390";}
else if (wallet2.innerHTML==="$1410") {
wallet2.innerHTML="$1400";}
else if (wallet2.innerHTML==="$1420") {
wallet2.innerHTML="$1410";}
else if (wallet2.innerHTML==="$1430") {
wallet2.innerHTML="$1420";}
else if (wallet2.innerHTML==="$1440") {
wallet2.innerHTML="$1430";}
else if (wallet2.innerHTML==="$1450") {
wallet2.innerHTML="$1440";}
else if (wallet2.innerHTML==="$1460") {
wallet2.innerHTML="$1450";}
else if (wallet2.innerHTML==="$1470") {
wallet2.innerHTML="$1460";}
else if (wallet2.innerHTML==="$1480") {
wallet2.innerHTML="$1470";}
else if (wallet2.innerHTML==="$1490") {
wallet2.innerHTML="$1480";}
else if (wallet2.innerHTML==="$1500") {
wallet2.innerHTML="$1490";}
else if (wallet2.innerHTML==="$1510") {
wallet2.innerHTML="$1500";}
else if (wallet2.innerHTML==="$1510") {
wallet2.innerHTML="$1500";}
else if (wallet2.innerHTML==="$1520") {
wallet2.innerHTML="$1510";}
else if (wallet2.innerHTML==="$1530") {
wallet2.innerHTML="$1520";}
else if (wallet2.innerHTML==="$1540") {
wallet2.innerHTML="$1530";}
else if (wallet2.innerHTML==="$1550") {
wallet2.innerHTML="$1540";}
else if (wallet2.innerHTML==="$1560") {
wallet2.innerHTML="$1550";}
else if (wallet2.innerHTML==="$1570") {
wallet2.innerHTML="$1560";}
else if (wallet2.innerHTML==="$1580") {
wallet2.innerHTML="$1570";}
else if (wallet2.innerHTML==="$1590") {
wallet2.innerHTML="$1580";}
else if (wallet2.innerHTML==="$1600") {
wallet2.innerHTML="$1590";}
else if (wallet2.innerHTML==="$1610") {
wallet2.innerHTML="$1600";}
else if (wallet2.innerHTML==="$1620") {
wallet2.innerHTML="$1610";}
else if (wallet2.innerHTML==="$1630") {
wallet2.innerHTML="$1620";}
else if (wallet2.innerHTML==="$1640") {
wallet2.innerHTML="$1630";}
else if (wallet2.innerHTML==="$1650") {
wallet2.innerHTML="$1640";}
else if (wallet2.innerHTML==="$1660") {
wallet2.innerHTML="$1650";}
else if (wallet2.innerHTML==="$1670") {
wallet2.innerHTML="$1660";}
else if (wallet2.innerHTML==="$1680") {
wallet2.innerHTML="$1670";}
else if (wallet2.innerHTML==="$1690") {
wallet2.innerHTML="$1680";}
else if (wallet2.innerHTML==="$1700") {
wallet2.innerHTML="$1690";}
else if (wallet2.innerHTML==="$1710") {
wallet2.innerHTML="$1700";}
else if (wallet2.innerHTML==="$1710") {
wallet2.innerHTML="$1700";}
else if (wallet2.innerHTML==="$1720") {
wallet2.innerHTML="$1710";}
else if (wallet2.innerHTML==="$1730") {
wallet2.innerHTML="$1720";}
else if (wallet2.innerHTML==="$1740") {
wallet2.innerHTML="$1730";}
else if (wallet2.innerHTML==="$1750") {
wallet2.innerHTML="$1740";}
else if (wallet2.innerHTML==="$1760") {
wallet2.innerHTML="$1750";}
else if (wallet2.innerHTML==="$1770") {
wallet2.innerHTML="$1760";}
else if (wallet2.innerHTML==="$1780") {
wallet2.innerHTML="$1770";}
else if (wallet2.innerHTML==="$1790") {
wallet2.innerHTML="$1780";}
else if (wallet2.innerHTML==="$1800") {
wallet2.innerHTML="$1790";}
else if (wallet2.innerHTML==="$1810") {
wallet2.innerHTML="$1800";}
else if (wallet2.innerHTML==="$1810") {
wallet2.innerHTML="$1800";}
else if (wallet2.innerHTML==="$1820") {
wallet2.innerHTML="$1810";}
else if (wallet2.innerHTML==="$1830") {
wallet2.innerHTML="$1820";}
else if (wallet2.innerHTML==="$1840") {
wallet2.innerHTML="$1830";}
else if (wallet2.innerHTML==="$1850") {
wallet2.innerHTML="$1840";}
else if (wallet2.innerHTML==="$1860") {
wallet2.innerHTML="$1850";}
else if (wallet2.innerHTML==="$1870") {
wallet2.innerHTML="$1860";}
else if (wallet2.innerHTML==="$1880") {
wallet2.innerHTML="$1870";}
else if (wallet2.innerHTML==="$1890") {
wallet2.innerHTML="$1880";}
else if (wallet2.innerHTML==="$1900") {
wallet2.innerHTML="$1890";}
else if (wallet2.innerHTML==="$1910") {
wallet2.innerHTML="$1900";}
else if (wallet2.innerHTML==="$1910") {
wallet2.innerHTML="$1900";}
else if (wallet2.innerHTML==="$1920") {
wallet2.innerHTML="$1910";}
else if (wallet2.innerHTML==="$1930") {
wallet2.innerHTML="$1920";}
else if (wallet2.innerHTML==="$1940") {
wallet2.innerHTML="$1930";}
else if (wallet2.innerHTML==="$1950") {
wallet2.innerHTML="$1940";}
else if (wallet2.innerHTML==="$1960") {
wallet2.innerHTML="$1950";}
else if (wallet2.innerHTML==="$1970") {
wallet2.innerHTML="$1960";}
else if (wallet2.innerHTML==="$1980") {
wallet2.innerHTML="$1970";}
else if (wallet2.innerHTML==="$1990") {
wallet2.innerHTML="$1980";}
else if (wallet2.innerHTML==="$2000") {
wallet2.innerHTML="$1990";}
else if (wallet2.innerHTML==="$2010") {
wallet2.innerHTML="$2000";}
else if (wallet2.innerHTML==="$2020") {
wallet2.innerHTML="$2010";}
else if (wallet2.innerHTML==="$2030") {
wallet2.innerHTML="$2020";}
else if (wallet2.innerHTML==="$2040") {
wallet2.innerHTML="$2030";}
else if (wallet2.innerHTML==="$2050") {
wallet2.innerHTML="$2040";}
else if (wallet2.innerHTML==="$2060") {
wallet2.innerHTML="$2050";}}

function plus1() {
var wallet1=document.getElementById("wal1");
var back2=document.getElementById("bac1a");
if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$0") {
wallet1.innerHTML="$100";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$10") {
wallet1.innerHTML="$110";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$20") {
wallet1.innerHTML="$120";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$30") {
wallet1.innerHTML="$130";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$40") {
wallet1.innerHTML="$140";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$50") {
wallet1.innerHTML="$150";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$60") {
wallet1.innerHTML="$160";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$70") {
wallet1.innerHTML="$170";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$80") {
wallet1.innerHTML="$180";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$90") {
wallet1.innerHTML="$190";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$100") {
wallet1.innerHTML="$200";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$110") {
wallet1.innerHTML="$210";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$120") {
wallet1.innerHTML="$220";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$130") {
wallet1.innerHTML="$230";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$140") {
wallet1.innerHTML="$240";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$150") {
wallet1.innerHTML="$250";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$160") {
wallet1.innerHTML="$260";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$170") {
wallet1.innerHTML="$270";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$180") {
wallet1.innerHTML="$280";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$190") {
wallet1.innerHTML="$290";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$200") {
wallet1.innerHTML="$300";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$210") {
wallet1.innerHTML="$310";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$220") {
wallet1.innerHTML="$320";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$230") {
wallet1.innerHTML="$330";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$240") {
wallet1.innerHTML="$340";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$250") {
wallet1.innerHTML="$350";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$260") {
wallet1.innerHTML="$360";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$270") {
wallet1.innerHTML="$370";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$280") {
wallet1.innerHTML="$380";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$290") {
wallet1.innerHTML="$390";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$300") {
wallet1.innerHTML="$400";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$310") {
wallet1.innerHTML="$410";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$320") {
wallet1.innerHTML="$420";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$330") {
wallet1.innerHTML="$430";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$340") {
wallet1.innerHTML="$440";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$350") {
wallet1.innerHTML="$450";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$360") {
wallet1.innerHTML="$460";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$370") {
wallet1.innerHTML="$470";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$380") {
wallet1.innerHTML="$480";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$390") {
wallet1.innerHTML="$490";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$400") {
wallet1.innerHTML="$500";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$410") {
wallet1.innerHTML="$510";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$420") {
wallet1.innerHTML="$520";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$430") {
wallet1.innerHTML="$530";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$440") {
wallet1.innerHTML="$540";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$450") {
wallet1.innerHTML="$550";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$460") {
wallet1.innerHTML="$560";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$470") {
wallet1.innerHTML="$570";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$480") {
wallet1.innerHTML="$580";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$490") {
wallet1.innerHTML="$590";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$500") {
wallet1.innerHTML="$600";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$510") {
wallet1.innerHTML="$610";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$520") {
wallet1.innerHTML="$620";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$530") {
wallet1.innerHTML="$630";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$540") {
wallet1.innerHTML="$640";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$550") {
wallet1.innerHTML="$650";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$560") {
wallet1.innerHTML="$660";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$570") {
wallet1.innerHTML="$670";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$580") {
wallet1.innerHTML="$680";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$590") {
wallet1.innerHTML="$690";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$600") {
wallet1.innerHTML="$700";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$610") {
wallet1.innerHTML="$710";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$620") {
wallet1.innerHTML="$720";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$630") {
wallet1.innerHTML="$730";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$640") {
wallet1.innerHTML="$740";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$650") {
wallet1.innerHTML="$750";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$660") {
wallet1.innerHTML="$760";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$670") {
wallet1.innerHTML="$770";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$680") {
wallet1.innerHTML="$780";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$690") {
wallet1.innerHTML="$790";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$700") {
wallet1.innerHTML="$800";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$710") {
wallet1.innerHTML="$810";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$720") {
wallet1.innerHTML="$820";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$730") {
wallet1.innerHTML="$830";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$740") {
wallet1.innerHTML="$840";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$750") {
wallet1.innerHTML="$850";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$760") {
wallet1.innerHTML="$860";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$770") {
wallet1.innerHTML="$870";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$780") {
wallet1.innerHTML="$880";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$790") {
wallet1.innerHTML="$890";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$800") {
wallet1.innerHTML="$900";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$810") {
wallet1.innerHTML="$910";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$820") {
wallet1.innerHTML="$920";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$830") {
wallet1.innerHTML="$930";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$840") {
wallet1.innerHTML="$940";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$850") {
wallet1.innerHTML="$950";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$860") {
wallet1.innerHTML="$960";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$870") {
wallet1.innerHTML="$970";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$880") {
wallet1.innerHTML="$980";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$890") {
wallet1.innerHTML="$990";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$900") {
wallet1.innerHTML="$1000";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$910") {
wallet1.innerHTML="$1010";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$920") {
wallet1.innerHTML="$1020";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$930") {
wallet1.innerHTML="$1030";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$940") {
wallet1.innerHTML="$1040";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$950") {
wallet1.innerHTML="$1050";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$960") {
wallet1.innerHTML="$1060";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$970") {
wallet1.innerHTML="$1070";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$980") {
wallet1.innerHTML="$1080";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$990") {
wallet1.innerHTML="$1090";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$1000") {
wallet1.innerHTML="$1100";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$1010") {
wallet1.innerHTML="$1110";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$1020") {
wallet1.innerHTML="$1120";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$1030") {
wallet1.innerHTML="$1130";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$1040") {
wallet1.innerHTML="$1140";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$1050") {
wallet1.innerHTML="$1150";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$1060") {
wallet1.innerHTML="$1160";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$1070") {
wallet1.innerHTML="$1170";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$1080") {
wallet1.innerHTML="$1180";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$1090") {
wallet1.innerHTML="$1190";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$1100") {
wallet1.innerHTML="$1200";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$1110") {
wallet1.innerHTML="$1210";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$1120") {
wallet1.innerHTML="$1220";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$1130") {
wallet1.innerHTML="$1230";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$1140") {
wallet1.innerHTML="$1240";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$1150") {
wallet1.innerHTML="$1250";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$1160") {
wallet1.innerHTML="$1260";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$1170") {
wallet1.innerHTML="$1270";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$1180") {
wallet1.innerHTML="$1280";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$1190") {
wallet1.innerHTML="$1290";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$1200") {
wallet1.innerHTML="$1300";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$1210") {
wallet1.innerHTML="$1310";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$1220") {
wallet1.innerHTML="$1320";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$1230") {
wallet1.innerHTML="$1330";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$1240") {
wallet1.innerHTML="$1340";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$1250") {
wallet1.innerHTML="$1350";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$1260") {
wallet1.innerHTML="$1360";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$1270") {
wallet1.innerHTML="$1370";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$1280") {
wallet1.innerHTML="$1380";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$1290") {
wallet1.innerHTML="$1390";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$1300") {
wallet1.innerHTML="$1400";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$1310") {
wallet1.innerHTML="$1410";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$1320") {
wallet1.innerHTML="$1420";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$1330") {
wallet1.innerHTML="$1430";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$1340") {
wallet1.innerHTML="$1440";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$1350") {
wallet1.innerHTML="$1450";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$1360") {
wallet1.innerHTML="$1460";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$1370") {
wallet1.innerHTML="$1470";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$1380") {
wallet1.innerHTML="$1480";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$1390") {
wallet1.innerHTML="$1490";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$1400") {
wallet1.innerHTML="$1500";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$1410") {
wallet1.innerHTML="$1510";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$1420") {
wallet1.innerHTML="$1520";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$1430") {
wallet1.innerHTML="$1530";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$1440") {
wallet1.innerHTML="$1540";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$1450") {
wallet1.innerHTML="$1550";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$1460") {
wallet1.innerHTML="$1560";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$1470") {
wallet1.innerHTML="$1570";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$1480") {
wallet1.innerHTML="$1580";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$1490") {
wallet1.innerHTML="$1590";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$1500") {
wallet1.innerHTML="$1600";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$1510") {
wallet1.innerHTML="$1610";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$1520") {
wallet1.innerHTML="$1620";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$1530") {
wallet1.innerHTML="$1630";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$1540") {
wallet1.innerHTML="$1640";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$1550") {
wallet1.innerHTML="$1650";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$1560") {
wallet1.innerHTML="$1660";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$1570") {
wallet1.innerHTML="$1670";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$1580") {
wallet1.innerHTML="$1680";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$1590") {
wallet1.innerHTML="$1690";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$1600") {
wallet1.innerHTML="$1700";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$1610") {
wallet1.innerHTML="$1710";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$1620") {
wallet1.innerHTML="$1720";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$1630") {
wallet1.innerHTML="$1730";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$1640") {
wallet1.innerHTML="$1740";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$1650") {
wallet1.innerHTML="$1750";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$1660") {
wallet1.innerHTML="$1760";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$1670") {
wallet1.innerHTML="$1770";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$1680") {
wallet1.innerHTML="$1780";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$1690") {
wallet1.innerHTML="$1790";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$1700") {
wallet1.innerHTML="$1800";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$1710") {
wallet1.innerHTML="$1810";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$1720") {
wallet1.innerHTML="$1820";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$1730") {
wallet1.innerHTML="$1830";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$1740") {
wallet1.innerHTML="$1840";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$1750") {
wallet1.innerHTML="$1850";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$1760") {
wallet1.innerHTML="$1860";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$1770") {
wallet1.innerHTML="$1870";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$1780") {
wallet1.innerHTML="$1880";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$1790") {
wallet1.innerHTML="$1890";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$1800") {
wallet1.innerHTML="$1900";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$1810") {
wallet1.innerHTML="$1910";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$1820") {
wallet1.innerHTML="$1920";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$1830") {
wallet1.innerHTML="$1930";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$1840") {
wallet1.innerHTML="$1940";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$1850") {
wallet1.innerHTML="$1950";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$1860") {
wallet1.innerHTML="$1960";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$1870") {
wallet1.innerHTML="$1970";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$1880") {
wallet1.innerHTML="$1980";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$1890") {
wallet1.innerHTML="$1990";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$1900") {
wallet1.innerHTML="$2000";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$1910") {
wallet1.innerHTML="$2010";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$1920") {
wallet1.innerHTML="$2020";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$1930") {
wallet1.innerHTML="$2030";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$1940") {
wallet1.innerHTML="$2040";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$1950") {
wallet1.innerHTML="$2050";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$1960") {
wallet1.innerHTML="$2060";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$1970") {
wallet1.innerHTML="$2060";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$1980") {
wallet1.innerHTML="$2060";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$1990") {
wallet1.innerHTML="$2060";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$2000") {
wallet1.innerHTML="$2060";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$2010") {
wallet1.innerHTML="$2060";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$2020") {
wallet1.innerHTML="$2060";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$2030") {
wallet1.innerHTML="$2060";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$2040") {
wallet1.innerHTML="$2060";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$2050") {
wallet1.innerHTML="$2060";}
else if (back2.style.background==="darkslategrey" && wallet1.innerHTML==="$2060") {
wallet1.innerHTML="$2060";}
else if (wallet1.innerHTML==="$0") {
wallet1.innerHTML="$10";}
else if (wallet1.innerHTML==="$10") {
wallet1.innerHTML="$20";}
else if (wallet1.innerHTML==="$20") {
wallet1.innerHTML="$30";}
else if (wallet1.innerHTML==="$30") {
wallet1.innerHTML="$40";}
else if (wallet1.innerHTML==="$40") {
wallet1.innerHTML="$50";}
else if (wallet1.innerHTML==="$50") {
wallet1.innerHTML="$60";}
else if (wallet1.innerHTML==="$60") {
wallet1.innerHTML="$70";}
else if (wallet1.innerHTML==="$70") {
wallet1.innerHTML="$80";}
else if (wallet1.innerHTML==="$80") {
wallet1.innerHTML="$90";}
else if (wallet1.innerHTML==="$90") {
wallet1.innerHTML="$100";}
else if (wallet1.innerHTML==="$100") {
wallet1.innerHTML="$110";}
else if (wallet1.innerHTML==="$110") {
wallet1.innerHTML="$120";}
else if (wallet1.innerHTML==="$120") {
wallet1.innerHTML="$130";}
else if (wallet1.innerHTML==="$130") {
wallet1.innerHTML="$140";}
else if (wallet1.innerHTML==="$140") {
wallet1.innerHTML="$150";}
else if (wallet1.innerHTML==="$150") {
wallet1.innerHTML="$160";}
else if (wallet1.innerHTML==="$160") {
wallet1.innerHTML="$170";}
else if (wallet1.innerHTML==="$170") {
wallet1.innerHTML="$180";}
else if (wallet1.innerHTML==="$180") {
wallet1.innerHTML="$190";}
else if (wallet1.innerHTML==="$190") {
wallet1.innerHTML="$200";}
else if (wallet1.innerHTML==="$200") {
wallet1.innerHTML="$210";}
else if (wallet1.innerHTML==="$210") {
wallet1.innerHTML="$220";}
else if (wallet1.innerHTML==="$220") {
wallet1.innerHTML="$230";}
else if (wallet1.innerHTML==="$230") {
wallet1.innerHTML="$240";}
else if (wallet1.innerHTML==="$240") {
wallet1.innerHTML="$250";}
else if (wallet1.innerHTML==="$250") {
wallet1.innerHTML="$260";}
else if (wallet1.innerHTML==="$260") {
wallet1.innerHTML="$270";}
else if (wallet1.innerHTML==="$270") {
wallet1.innerHTML="$280";}
else if (wallet1.innerHTML==="$280") {
wallet1.innerHTML="$290";}
else if (wallet1.innerHTML==="$290") {
wallet1.innerHTML="$300";}
else if (wallet1.innerHTML==="$300") {
wallet1.innerHTML="$310";}
else if (wallet1.innerHTML==="$310") {
wallet1.innerHTML="$320";}
else if (wallet1.innerHTML==="$320") {
wallet1.innerHTML="$330";}
else if (wallet1.innerHTML==="$330") {
wallet1.innerHTML="$340";}
else if (wallet1.innerHTML==="$340") {
wallet1.innerHTML="$350";}
else if (wallet1.innerHTML==="$350") {
wallet1.innerHTML="$360";}
else if (wallet1.innerHTML==="$360") {
wallet1.innerHTML="$370";}
else if (wallet1.innerHTML==="$370") {
wallet1.innerHTML="$380";}
else if (wallet1.innerHTML==="$380") {
wallet1.innerHTML="$390";}
else if (wallet1.innerHTML==="$390") {
wallet1.innerHTML="$400";}
else if (wallet1.innerHTML==="$400") {
wallet1.innerHTML="$410";}
else if (wallet1.innerHTML==="$410") {
wallet1.innerHTML="$420";}
else if (wallet1.innerHTML==="$420") {
wallet1.innerHTML="$430";}
else if (wallet1.innerHTML==="$430") {
wallet1.innerHTML="$440";}
else if (wallet1.innerHTML==="$440") {
wallet1.innerHTML="$450";}
else if (wallet1.innerHTML==="$450") {
wallet1.innerHTML="$460";}
else if (wallet1.innerHTML==="$460") {
wallet1.innerHTML="$470";}
else if (wallet1.innerHTML==="$470") {
wallet1.innerHTML="$480";}
else if (wallet1.innerHTML==="$480") {
wallet1.innerHTML="$490";}
else if (wallet1.innerHTML==="$490") {
wallet1.innerHTML="$500";}
else if (wallet1.innerHTML==="$500") {
wallet1.innerHTML="$510";}
else if (wallet1.innerHTML==="$510") {
wallet1.innerHTML="$520";}
else if (wallet1.innerHTML==="$520") {
wallet1.innerHTML="$530";}
else if (wallet1.innerHTML==="$530") {
wallet1.innerHTML="$540";}
else if (wallet1.innerHTML==="$540") {
wallet1.innerHTML="$550";}
else if (wallet1.innerHTML==="$550") {
wallet1.innerHTML="$560";}
else if (wallet1.innerHTML==="$560") {
wallet1.innerHTML="$570";}
else if (wallet1.innerHTML==="$570") {
wallet1.innerHTML="$580";}
else if (wallet1.innerHTML==="$580") {
wallet1.innerHTML="$590";}
else if (wallet1.innerHTML==="$590") {
wallet1.innerHTML="$600";}
else if (wallet1.innerHTML==="$600") {
wallet1.innerHTML="$610";}
else if (wallet1.innerHTML==="$610") {
wallet1.innerHTML="$620";}
else if (wallet1.innerHTML==="$620") {
wallet1.innerHTML="$630";}
else if (wallet1.innerHTML==="$630") {
wallet1.innerHTML="$640";}
else if (wallet1.innerHTML==="$640") {
wallet1.innerHTML="$650";}
else if (wallet1.innerHTML==="$650") {
wallet1.innerHTML="$660";}
else if (wallet1.innerHTML==="$660") {
wallet1.innerHTML="$670";}
else if (wallet1.innerHTML==="$670") {
wallet1.innerHTML="$680";}
else if (wallet1.innerHTML==="$680") {
wallet1.innerHTML="$690";}
else if (wallet1.innerHTML==="$690") {
wallet1.innerHTML="$700";}
else if (wallet1.innerHTML==="$700") {
wallet1.innerHTML="$710";}
else if (wallet1.innerHTML==="$710") {
wallet1.innerHTML="$720";}
else if (wallet1.innerHTML==="$720") {
wallet1.innerHTML="$730";}
else if (wallet1.innerHTML==="$730") {
wallet1.innerHTML="$740";}
else if (wallet1.innerHTML==="$740") {
wallet1.innerHTML="$750";}
else if (wallet1.innerHTML==="$750") {
wallet1.innerHTML="$760";}
else if (wallet1.innerHTML==="$760") {
wallet1.innerHTML="$770";}
else if (wallet1.innerHTML==="$770") {
wallet1.innerHTML="$780";}
else if (wallet1.innerHTML==="$780") {
wallet1.innerHTML="$790";}
else if (wallet1.innerHTML==="$790") {
wallet1.innerHTML="$800";}
else if (wallet1.innerHTML==="$800") {
wallet1.innerHTML="$810";}
else if (wallet1.innerHTML==="$810") {
wallet1.innerHTML="$820";}
else if (wallet1.innerHTML==="$820") {
wallet1.innerHTML="$830";}
else if (wallet1.innerHTML==="$830") {
wallet1.innerHTML="$840";}
else if (wallet1.innerHTML==="$840") {
wallet1.innerHTML="$850";}
else if (wallet1.innerHTML==="$850") {
wallet1.innerHTML="$860";}
else if (wallet1.innerHTML==="$860") {
wallet1.innerHTML="$870";}
else if (wallet1.innerHTML==="$870") {
wallet1.innerHTML="$880";}
else if (wallet1.innerHTML==="$880") {
wallet1.innerHTML="$890";}
else if (wallet1.innerHTML==="$890") {
wallet1.innerHTML="$900";}
else if (wallet1.innerHTML==="$900") {
wallet1.innerHTML="$910";}
else if (wallet1.innerHTML==="$910") {
wallet1.innerHTML="$920";}
else if (wallet1.innerHTML==="$920") {
wallet1.innerHTML="$930";}
else if (wallet1.innerHTML==="$930") {
wallet1.innerHTML="$940";}
else if (wallet1.innerHTML==="$940") {
wallet1.innerHTML="$950";}
else if (wallet1.innerHTML==="$950") {
wallet1.innerHTML="$960";}
else if (wallet1.innerHTML==="$960") {
wallet1.innerHTML="$970";}
else if (wallet1.innerHTML==="$970") {
wallet1.innerHTML="$980";}
else if (wallet1.innerHTML==="$980") {
wallet1.innerHTML="$990";}
else if (wallet1.innerHTML==="$990") {
wallet1.innerHTML="$1000";}
else if (wallet1.innerHTML==="$1000") {
wallet1.innerHTML="$1010";}
else if (wallet1.innerHTML==="$1010") {
wallet1.innerHTML="$1020";}
else if (wallet1.innerHTML==="$1020") {
wallet1.innerHTML="$1030";}
else if (wallet1.innerHTML==="$1030") {
wallet1.innerHTML="$1040";}
else if (wallet1.innerHTML==="$1040") {
wallet1.innerHTML="$1050";}
else if (wallet1.innerHTML==="$1050") {
wallet1.innerHTML="$1060";}
else if (wallet1.innerHTML==="$1060") {
wallet1.innerHTML="$1070";}
else if (wallet1.innerHTML==="$1070") {
wallet1.innerHTML="$1080";}
else if (wallet1.innerHTML==="$1080") {
wallet1.innerHTML="$1090";}
else if (wallet1.innerHTML==="$1090") {
wallet1.innerHTML="$1100";}
else if (wallet1.innerHTML==="$1100") {
wallet1.innerHTML="$1110";}
else if (wallet1.innerHTML==="$1110") {
wallet1.innerHTML="$1120";}
else if (wallet1.innerHTML==="$1120") {
wallet1.innerHTML="$1130";}
else if (wallet1.innerHTML==="$1130") {
wallet1.innerHTML="$1140";}
else if (wallet1.innerHTML==="$1140") {
wallet1.innerHTML="$1150";}
else if (wallet1.innerHTML==="$1150") {
wallet1.innerHTML="$1160";}
else if (wallet1.innerHTML==="$1160") {
wallet1.innerHTML="$1170";}
else if (wallet1.innerHTML==="$1170") {
wallet1.innerHTML="$1180";}
else if (wallet1.innerHTML==="$1180") {
wallet1.innerHTML="$1190";}
else if (wallet1.innerHTML==="$1190") {
wallet1.innerHTML="$1200";}
else if (wallet1.innerHTML==="$1200") {
wallet1.innerHTML="$1210";}
else if (wallet1.innerHTML==="$1210") {
wallet1.innerHTML="$1220";}
else if (wallet1.innerHTML==="$1220") {
wallet1.innerHTML="$1230";}
else if (wallet1.innerHTML==="$1230") {
wallet1.innerHTML="$1240";}
else if (wallet1.innerHTML==="$1240") {
wallet1.innerHTML="$1250";}
else if (wallet1.innerHTML==="$1250") {
wallet1.innerHTML="$1260";}
else if (wallet1.innerHTML==="$1260") {
wallet1.innerHTML="$1270";}
else if (wallet1.innerHTML==="$1270") {
wallet1.innerHTML="$1280";}
else if (wallet1.innerHTML==="$1280") {
wallet1.innerHTML="$1290";}
else if (wallet1.innerHTML==="$1290") {
wallet1.innerHTML="$1300";}
else if (wallet1.innerHTML==="$1300") {
wallet1.innerHTML="$1310";}
else if (wallet1.innerHTML==="$1310") {
wallet1.innerHTML="$1320";}
else if (wallet1.innerHTML==="$1320") {
wallet1.innerHTML="$1330";}
else if (wallet1.innerHTML==="$1330") {
wallet1.innerHTML="$1340";}
else if (wallet1.innerHTML==="$1340") {
wallet1.innerHTML="$1350";}
else if (wallet1.innerHTML==="$1350") {
wallet1.innerHTML="$1360";}
else if (wallet1.innerHTML==="$1360") {
wallet1.innerHTML="$1370";}
else if (wallet1.innerHTML==="$1370") {
wallet1.innerHTML="$1380";}
else if (wallet1.innerHTML==="$1380") {
wallet1.innerHTML="$1390";}
else if (wallet1.innerHTML==="$1390") {
wallet1.innerHTML="$1400";}
else if (wallet1.innerHTML==="$1400") {
wallet1.innerHTML="$1410";}
else if (wallet1.innerHTML==="$1410") {
wallet1.innerHTML="$1420";}
else if (wallet1.innerHTML==="$1420") {
wallet1.innerHTML="$1430";}
else if (wallet1.innerHTML==="$1430") {
wallet1.innerHTML="$1440";}
else if (wallet1.innerHTML==="$1440") {
wallet1.innerHTML="$1450";}
else if (wallet1.innerHTML==="$1450") {
wallet1.innerHTML="$1460";}
else if (wallet1.innerHTML==="$1460") {
wallet1.innerHTML="$1470";}
else if (wallet1.innerHTML==="$1470") {
wallet1.innerHTML="$1480";}
else if (wallet1.innerHTML==="$1480") {
wallet1.innerHTML="$1490";}
else if (wallet1.innerHTML==="$1490") {
wallet1.innerHTML="$1500";}
else if (wallet1.innerHTML==="$1500") {
wallet1.innerHTML="$1510";}
else if (wallet1.innerHTML==="$1510") {
wallet1.innerHTML="$1520";}
else if (wallet1.innerHTML==="$1520") {
wallet1.innerHTML="$1530";}
else if (wallet1.innerHTML==="$1530") {
wallet1.innerHTML="$1540";}
else if (wallet1.innerHTML==="$1540") {
wallet1.innerHTML="$1550";}
else if (wallet1.innerHTML==="$1550") {
wallet1.innerHTML="$1560";}
else if (wallet1.innerHTML==="$1560") {
wallet1.innerHTML="$1570";}
else if (wallet1.innerHTML==="$1570") {
wallet1.innerHTML="$1580";}
else if (wallet1.innerHTML==="$1580") {
wallet1.innerHTML="$1590";}
else if (wallet1.innerHTML==="$1590") {
wallet1.innerHTML="$1600";}
else if (wallet1.innerHTML==="$1600") {
wallet1.innerHTML="$1610";}
else if (wallet1.innerHTML==="$1610") {
wallet1.innerHTML="$1620";}
else if (wallet1.innerHTML==="$1620") {
wallet1.innerHTML="$1630";}
else if (wallet1.innerHTML==="$1630") {
wallet1.innerHTML="$1640";}
else if (wallet1.innerHTML==="$1640") {
wallet1.innerHTML="$1650";}
else if (wallet1.innerHTML==="$1650") {
wallet1.innerHTML="$1660";}
else if (wallet1.innerHTML==="$1660") {
wallet1.innerHTML="$1670";}
else if (wallet1.innerHTML==="$1670") {
wallet1.innerHTML="$1680";}
else if (wallet1.innerHTML==="$1680") {
wallet1.innerHTML="$1690";}
else if (wallet1.innerHTML==="$1690") {
wallet1.innerHTML="$1700";}
else if (wallet1.innerHTML==="$1700") {
wallet1.innerHTML="$1710";}
else if (wallet1.innerHTML==="$1710") {
wallet1.innerHTML="$1720";}
else if (wallet1.innerHTML==="$1720") {
wallet1.innerHTML="$1730";}
else if (wallet1.innerHTML==="$1730") {
wallet1.innerHTML="$1740";}
else if (wallet1.innerHTML==="$1740") {
wallet1.innerHTML="$1750";}
else if (wallet1.innerHTML==="$1750") {
wallet1.innerHTML="$1760";}
else if (wallet1.innerHTML==="$1760") {
wallet1.innerHTML="$1770";}
else if (wallet1.innerHTML==="$1770") {
wallet1.innerHTML="$1780";}
else if (wallet1.innerHTML==="$1780") {
wallet1.innerHTML="$1790";}
else if (wallet1.innerHTML==="$1790") {
wallet1.innerHTML="$1800";}
else if (wallet1.innerHTML==="$1800") {
wallet1.innerHTML="$1810";}
else if (wallet1.innerHTML==="$1810") {
wallet1.innerHTML="$1820";}
else if (wallet1.innerHTML==="$1820") {
wallet1.innerHTML="$1830";}
else if (wallet1.innerHTML==="$1830") {
wallet1.innerHTML="$1840";}
else if (wallet1.innerHTML==="$1840") {
wallet1.innerHTML="$1850";}
else if (wallet1.innerHTML==="$1850") {
wallet1.innerHTML="$1860";}
else if (wallet1.innerHTML==="$1860") {
wallet1.innerHTML="$1870";}
else if (wallet1.innerHTML==="$1870") {
wallet1.innerHTML="$1880";}
else if (wallet1.innerHTML==="$1880") {
wallet1.innerHTML="$1890";}
else if (wallet1.innerHTML==="$1890") {
wallet1.innerHTML="$1900";}
else if (wallet1.innerHTML==="$1900") {
wallet1.innerHTML="$1910";}
else if (wallet1.innerHTML==="$1910") {
wallet1.innerHTML="$1920";}
else if (wallet1.innerHTML==="$1920") {
wallet1.innerHTML="$1930";}
else if (wallet1.innerHTML==="$1930") {
wallet1.innerHTML="$1940";}
else if (wallet1.innerHTML==="$1940") {
wallet1.innerHTML="$1950";}
else if (wallet1.innerHTML==="$1950") {
wallet1.innerHTML="$1960";}
else if (wallet1.innerHTML==="$1960") {
wallet1.innerHTML="$1970";}
else if (wallet1.innerHTML==="$1970") {
wallet1.innerHTML="$1980";}
else if (wallet1.innerHTML==="$1980") {
wallet1.innerHTML="$1990";}
else if (wallet1.innerHTML==="$1990") {
wallet1.innerHTML="$2000";}
else if (wallet1.innerHTML==="$2000") {
wallet1.innerHTML="$2010";}
else if (wallet1.innerHTML==="$2010") {
wallet1.innerHTML="$2020";}
else if (wallet1.innerHTML==="$2020") {
wallet1.innerHTML="$2030";}
else if (wallet1.innerHTML==="$2030") {
wallet1.innerHTML="$2040";}
else if (wallet1.innerHTML==="$2040") {
wallet1.innerHTML="$2050";}
else if (wallet1.innerHTML==="$2050") {
wallet1.innerHTML="$2060";}}

function minus1() {
var wallet1=document.getElementById("wal1");
var back=document.getElementById("bac1b");
if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$0") {
wallet1.innerHTML="Bank rupt";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$10") {
wallet1.innerHTML="Bank rupt";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$20") {
wallet1.innerHTML="Bank rupt";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$30") {
wallet1.innerHTML="Bank rupt";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$40") {
wallet1.innerHTML="Bank rupt";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$50") {
wallet1.innerHTML="Bank rupt";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$60") {
wallet1.innerHTML="Bank rupt";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$70") {
wallet1.innerHTML="Bank rupt";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$80") {
wallet1.innerHTML="Bank rupt";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$90") {
wallet1.innerHTML="Bank rupt";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$100") {
wallet1.innerHTML="$0";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$110") {
wallet1.innerHTML="$10";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$120") {
wallet1.innerHTML="$20";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$130") {
wallet1.innerHTML="$30";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$140") {
wallet1.innerHTML="$40";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$150") {
wallet1.innerHTML="$50";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$160") {
wallet1.innerHTML="$60";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$170") {
wallet1.innerHTML="$70";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$180") {
wallet1.innerHTML="$80";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$190") {
wallet1.innerHTML="$90";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$200") {
wallet1.innerHTML="$100";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$210") {
wallet1.innerHTML="$110";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$220") {
wallet1.innerHTML="$120";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$230") {
wallet1.innerHTML="$130";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$240") {
wallet1.innerHTML="$140";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$250") {
wallet1.innerHTML="$150";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$260") {
wallet1.innerHTML="$160";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$270") {
wallet1.innerHTML="$170";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$280") {
wallet1.innerHTML="$180";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$290") {
wallet1.innerHTML="$190";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$300") {
wallet1.innerHTML="$200";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$310") {
wallet1.innerHTML="$210";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$320") {
wallet1.innerHTML="$220";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$330") {
wallet1.innerHTML="$230";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$340") {
wallet1.innerHTML="$240";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$350") {
wallet1.innerHTML="$250";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$360") {
wallet1.innerHTML="$260";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$370") {
wallet1.innerHTML="$270";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$380") {
wallet1.innerHTML="$280";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$390") {
wallet1.innerHTML="$290";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$400") {
wallet1.innerHTML="$300";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$410") {
wallet1.innerHTML="$310";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$420") {
wallet1.innerHTML="$320";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$430") {
wallet1.innerHTML="$330";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$440") {
wallet1.innerHTML="$340";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$450") {
wallet1.innerHTML="$350";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$460") {
wallet1.innerHTML="$360";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$470") {
wallet1.innerHTML="$370";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$480") {
wallet1.innerHTML="$380";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$490") {
wallet1.innerHTML="$390";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$500") {
wallet1.innerHTML="$400";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$510") {
wallet1.innerHTML="$410";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$520") {
wallet1.innerHTML="$420";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$530") {
wallet1.innerHTML="$430";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$540") {
wallet1.innerHTML="$440";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$550") {
wallet1.innerHTML="$450";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$560") {
wallet1.innerHTML="$460";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$570") {
wallet1.innerHTML="$470";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$580") {
wallet1.innerHTML="$480";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$590") {
wallet1.innerHTML="$490";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$600") {
wallet1.innerHTML="$500";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$610") {
wallet1.innerHTML="$510";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$620") {
wallet1.innerHTML="$520";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$630") {
wallet1.innerHTML="$530";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$640") {
wallet1.innerHTML="$540";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$650") {
wallet1.innerHTML="$550";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$660") {
wallet1.innerHTML="$560";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$670") {
wallet1.innerHTML="$570";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$680") {
wallet1.innerHTML="$580";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$690") {
wallet1.innerHTML="$590";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$700") {
wallet1.innerHTML="$600";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$710") {
wallet1.innerHTML="$610";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$720") {
wallet1.innerHTML="$620";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$730") {
wallet1.innerHTML="$630";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$740") {
wallet1.innerHTML="$640";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$750") {
wallet1.innerHTML="$650";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$760") {
wallet1.innerHTML="$660";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$770") {
wallet1.innerHTML="$670";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$780") {
wallet1.innerHTML="$680";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$790") {
wallet1.innerHTML="$690";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$800") {
wallet1.innerHTML="$700";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$810") {
wallet1.innerHTML="$710";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$820") {
wallet1.innerHTML="$720";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$830") {
wallet1.innerHTML="$730";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$840") {
wallet1.innerHTML="$740";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$850") {
wallet1.innerHTML="$750";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$860") {
wallet1.innerHTML="$760";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$870") {
wallet1.innerHTML="$770";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$880") {
wallet1.innerHTML="$780";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$890") {
wallet1.innerHTML="$690";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$900") {
wallet1.innerHTML="$700";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$910") {
wallet1.innerHTML="$710";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$920") {
wallet1.innerHTML="$720";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$930") {
wallet1.innerHTML="$830";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$940") {
wallet1.innerHTML="$840";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$950") {
wallet1.innerHTML="$850";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$960") {
wallet1.innerHTML="$860";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$970") {
wallet1.innerHTML="$870";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$980") {
wallet1.innerHTML="$880";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$990") {
wallet1.innerHTML="$890";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$1000") {
wallet1.innerHTML="$900";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$1010") {
wallet1.innerHTML="$910";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$1020") {
wallet1.innerHTML="$920";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$1030") {
wallet1.innerHTML="$930";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$1040") {
wallet1.innerHTML="$940";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$1050") {
wallet1.innerHTML="$950";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$1060") {
wallet1.innerHTML="$960";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$1070") {
wallet1.innerHTML="$970";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$1080") {
wallet1.innerHTML="$980";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$1090") {
wallet1.innerHTML="$990";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$1100") {
wallet1.innerHTML="$1000";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$1110") {
wallet1.innerHTML="$1010";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$1120") {
wallet1.innerHTML="$1020";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$1130") {
wallet1.innerHTML="$1030";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$1140") {
wallet1.innerHTML="$1040";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$1150") {
wallet1.innerHTML="$1050";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$1160") {
wallet1.innerHTML="$1060";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$1170") {
wallet1.innerHTML="$1070";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$1180") {
wallet1.innerHTML="$1080";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$1190") {
wallet1.innerHTML="$1090";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$1200") {
wallet1.innerHTML="$1100";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$1210") {
wallet1.innerHTML="$1110";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$1220") {
wallet1.innerHTML="$1120";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$1230") {
wallet1.innerHTML="$1130";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$1240") {
wallet1.innerHTML="$1140";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$1250") {
wallet1.innerHTML="$1150";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$1260") {
wallet1.innerHTML="$1160";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$1270") {
wallet1.innerHTML="$1170";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$1280") {
wallet1.innerHTML="$1180";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$1290") {
wallet1.innerHTML="$1190";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$1300") {
wallet1.innerHTML="$1200";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$1310") {
wallet1.innerHTML="$1210";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$1320") {
wallet1.innerHTML="$1220";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$1330") {
wallet1.innerHTML="$1230";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$1340") {
wallet1.innerHTML="$1240";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$1350") {
wallet1.innerHTML="$1250";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$1360") {
wallet1.innerHTML="$1260";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$1370") {
wallet1.innerHTML="$1270";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$1380") {
wallet1.innerHTML="$1280";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$1390") {
wallet1.innerHTML="$1290";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$1400") {
wallet1.innerHTML="$1300";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$1410") {
wallet1.innerHTML="$1310";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$1420") {
wallet1.innerHTML="$1320";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$1430") {
wallet1.innerHTML="$1330";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$1440") {
wallet1.innerHTML="$1340";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$1450") {
wallet1.innerHTML="$1350";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$1460") {
wallet1.innerHTML="$1360";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$1470") {
wallet1.innerHTML="$1370";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$1480") {
wallet1.innerHTML="$1390";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$1490") {
wallet1.innerHTML="$1400";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$1500") {
wallet1.innerHTML="$1400";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$1510") {
wallet1.innerHTML="$1410";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$1520") {
wallet1.innerHTML="$1420";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$1530") {
wallet1.innerHTML="$1430";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$1540") {
wallet1.innerHTML="$1440";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$1550") {
wallet1.innerHTML="$1450";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$1560") {
wallet1.innerHTML="$1460";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$1570") {
wallet1.innerHTML="$1470";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$1580") {
wallet1.innerHTML="$1480";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$1590") {
wallet1.innerHTML="$1490";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$1600") {
wallet1.innerHTML="$1500";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$1610") {
wallet1.innerHTML="$1510";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$1620") {
wallet1.innerHTML="$1520";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$1630") {
wallet1.innerHTML="$1530";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$1640") {
wallet1.innerHTML="$1540";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$1650") {
wallet1.innerHTML="$1550";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$1660") {
wallet1.innerHTML="$1560";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$1670") {
wallet1.innerHTML="$1570";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$1680") {
wallet1.innerHTML="$1580";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$1690") {
wallet1.innerHTML="$1590";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$1700") {
wallet1.innerHTML="$1600";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$1710") {
wallet1.innerHTML="$1610";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$1720") {
wallet1.innerHTML="$1620";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$1730") {
wallet1.innerHTML="$1630";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$1740") {
wallet1.innerHTML="$1640";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$1750") {
wallet1.innerHTML="$1650";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$1760") {
wallet1.innerHTML="$1660";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$1770") {
wallet1.innerHTML="$1670";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$1780") {
wallet1.innerHTML="$1680";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$1790") {
wallet1.innerHTML="$1690";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$1800") {
wallet1.innerHTML="$1700";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$1810") {
wallet1.innerHTML="$1710";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$1820") {
wallet1.innerHTML="$1720";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$1830") {
wallet1.innerHTML="$1730";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$1840") {
wallet1.innerHTML="$1740";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$1850") {
wallet1.innerHTML="$1750";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$1860") {
wallet1.innerHTML="$1760";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$1870") {
wallet1.innerHTML="$1770";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$1880") {
wallet1.innerHTML="$1780";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$1890") {
wallet1.innerHTML="$1790";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$1900") {
wallet1.innerHTML="$1800";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$1910") {
wallet1.innerHTML="$1810";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$1920") {
wallet1.innerHTML="$1820";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$1930") {
wallet1.innerHTML="$1830";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$1940") {
wallet1.innerHTML="$1840";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$1950") {
wallet1.innerHTML="$1850";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$1960") {
wallet1.innerHTML="$1860";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$1970") {
wallet1.innerHTML="$1870";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$1980") {
wallet1.innerHTML="$1880";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$1990") {
wallet1.innerHTML="$1890";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$2000") {
wallet1.innerHTML="$1900";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$2010") {
wallet1.innerHTML="$1910";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$2020") {
wallet1.innerHTML="$1920";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$2030") {
wallet1.innerHTML="$1930";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$2040") {
wallet1.innerHTML="$1940";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$2050") {
wallet1.innerHTML="$1950";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$2060") {
wallet1.innerHTML="$1960";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$2070") {
wallet1.innerHTML="$1970";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$2080") {
wallet1.innerHTML="$1980";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$2090") {
wallet1.innerHTML="$1990";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$2100") {
wallet1.innerHTML="$2000";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$2110") {
wallet1.innerHTML="$2010";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$2120") {
wallet1.innerHTML="$2020";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$2130") {
wallet1.innerHTML="$2030";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$2140") {
wallet1.innerHTML="$2040";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$2150") {
wallet1.innerHTML="$2050";}
else if (back.style.background==="darkslategrey" && wallet1.innerHTML==="$2160") {
wallet1.innerHTML="$2060";}
else if (wallet1.innerHTML==="$0") {
wallet1.innerHTML="Bank rupt";}
else if (wallet1.innerHTML==="$10") {
wallet1.innerHTML="$0";}
else if (wallet1.innerHTML==="$20") {
wallet1.innerHTML="$10";}
else if (wallet1.innerHTML==="$30") {
wallet1.innerHTML="$20";}
else if (wallet1.innerHTML==="$40") {
wallet1.innerHTML="$30";}
else if (wallet1.innerHTML==="$50") {
wallet1.innerHTML="$40";}
else if (wallet1.innerHTML==="$60") {
wallet1.innerHTML="$50";}
else if (wallet1.innerHTML==="$70") {
wallet1.innerHTML="$60";}
else if (wallet1.innerHTML==="$80") {
wallet1.innerHTML="$70";}
else if (wallet1.innerHTML==="$90") {
wallet1.innerHTML="$80";}
else if (wallet1.innerHTML==="$100") {
wallet1.innerHTML="$90";}
else if (wallet1.innerHTML==="$110") {
wallet1.innerHTML="$100";}
else if (wallet1.innerHTML==="$110") {
wallet1.innerHTML="$100";}
else if (wallet1.innerHTML==="$120") {
wallet1.innerHTML="$110";}
else if (wallet1.innerHTML==="$130") {
wallet1.innerHTML="$120";}
else if (wallet1.innerHTML==="$140") {
wallet1.innerHTML="$130";}
else if (wallet1.innerHTML==="$150") {
wallet1.innerHTML="$140";}
else if (wallet1.innerHTML==="$160") {
wallet1.innerHTML="$150";}
else if (wallet1.innerHTML==="$170") {
wallet1.innerHTML="$160";}
else if (wallet1.innerHTML==="$180") {
wallet1.innerHTML="$170";}
else if (wallet1.innerHTML==="$190") {
wallet1.innerHTML="$180";}
else if (wallet1.innerHTML==="$200") {
wallet1.innerHTML="$190";}
else if (wallet1.innerHTML==="$210") {
wallet1.innerHTML="$200";}
else if (wallet1.innerHTML==="$210") {
wallet1.innerHTML="$200";}
else if (wallet1.innerHTML==="$220") {
wallet1.innerHTML="$210";}
else if (wallet1.innerHTML==="$230") {
wallet1.innerHTML="$220";}
else if (wallet1.innerHTML==="$240") {
wallet1.innerHTML="$230";}
else if (wallet1.innerHTML==="$250") {
wallet1.innerHTML="$240";}
else if (wallet1.innerHTML==="$260") {
wallet1.innerHTML="$250";}
else if (wallet1.innerHTML==="$270") {
wallet1.innerHTML="$260";}
else if (wallet1.innerHTML==="$280") {
wallet1.innerHTML="$270";}
else if (wallet1.innerHTML==="$290") {
wallet1.innerHTML="$280";}
else if (wallet1.innerHTML==="$300") {
wallet1.innerHTML="$290";}
else if (wallet1.innerHTML==="$310") {
wallet1.innerHTML="$300";}
else if (wallet1.innerHTML==="$310") {
wallet1.innerHTML="$300";}
else if (wallet1.innerHTML==="$320") {
wallet1.innerHTML="$310";}
else if (wallet1.innerHTML==="$330") {
wallet1.innerHTML="$320";}
else if (wallet1.innerHTML==="$340") {
wallet1.innerHTML="$330";}
else if (wallet1.innerHTML==="$350") {
wallet1.innerHTML="$340";}
else if (wallet1.innerHTML==="$360") {
wallet1.innerHTML="$350";}
else if (wallet1.innerHTML==="$370") {
wallet1.innerHTML="$360";}
else if (wallet1.innerHTML==="$380") {
wallet1.innerHTML="$370";}
else if (wallet1.innerHTML==="$390") {
wallet1.innerHTML="$380";}
else if (wallet1.innerHTML==="$400") {
wallet1.innerHTML="$390";}
else if (wallet1.innerHTML==="$410") {
wallet1.innerHTML="$400";}
else if (wallet1.innerHTML==="$420") {
wallet1.innerHTML="$410";}
else if (wallet1.innerHTML==="$430") {
wallet1.innerHTML="$420";}
else if (wallet1.innerHTML==="$440") {
wallet1.innerHTML="$430";}
else if (wallet1.innerHTML==="$450") {
wallet1.innerHTML="$440";}
else if (wallet1.innerHTML==="$460") {
wallet1.innerHTML="$450";}
else if (wallet1.innerHTML==="$470") {
wallet1.innerHTML="$460";}
else if (wallet1.innerHTML==="$480") {
wallet1.innerHTML="$470";}
else if (wallet1.innerHTML==="$490") {
wallet1.innerHTML="$480";}
else if (wallet1.innerHTML==="$500") {
wallet1.innerHTML="$490";}
else if (wallet1.innerHTML==="$510") {
wallet1.innerHTML="$500";}
else if (wallet1.innerHTML==="$510") {
wallet1.innerHTML="$500";}
else if (wallet1.innerHTML==="$510") {
wallet1.innerHTML="$500";}
else if (wallet1.innerHTML==="$520") {
wallet1.innerHTML="$510";}
else if (wallet1.innerHTML==="$530") {
wallet1.innerHTML="$520";}
else if (wallet1.innerHTML==="$540") {
wallet1.innerHTML="$530";}
else if (wallet1.innerHTML==="$550") {
wallet1.innerHTML="$540";}
else if (wallet1.innerHTML==="$560") {
wallet1.innerHTML="$550";}
else if (wallet1.innerHTML==="$570") {
wallet1.innerHTML="$560";}
else if (wallet1.innerHTML==="$580") {
wallet1.innerHTML="$570";}
else if (wallet1.innerHTML==="$590") {
wallet1.innerHTML="$580";}
else if (wallet1.innerHTML==="$600") {
wallet1.innerHTML="$590";}
else if (wallet1.innerHTML==="$610") {
wallet1.innerHTML="$600";}
else if (wallet1.innerHTML==="$620") {
wallet1.innerHTML="$610";}
else if (wallet1.innerHTML==="$630") {
wallet1.innerHTML="$620";}
else if (wallet1.innerHTML==="$640") {
wallet1.innerHTML="$630";}
else if (wallet1.innerHTML==="$650") {
wallet1.innerHTML="$640";}
else if (wallet1.innerHTML==="$660") {
wallet1.innerHTML="$650";}
else if (wallet1.innerHTML==="$670") {
wallet1.innerHTML="$660";}
else if (wallet1.innerHTML==="$680") {
wallet1.innerHTML="$670";}
else if (wallet1.innerHTML==="$690") {
wallet1.innerHTML="$680";}
else if (wallet1.innerHTML==="$700") {
wallet1.innerHTML="$690";}
else if (wallet1.innerHTML==="$710") {
wallet1.innerHTML="$700";}
else if (wallet1.innerHTML==="$710") {
wallet1.innerHTML="$700";}
else if (wallet1.innerHTML==="$720") {
wallet1.innerHTML="$710";}
else if (wallet1.innerHTML==="$730") {
wallet1.innerHTML="$720";}
else if (wallet1.innerHTML==="$740") {
wallet1.innerHTML="$730";}
else if (wallet1.innerHTML==="$750") {
wallet1.innerHTML="$740";}
else if (wallet1.innerHTML==="$760") {
wallet1.innerHTML="$750";}
else if (wallet1.innerHTML==="$770") {
wallet1.innerHTML="$760";}
else if (wallet1.innerHTML==="$780") {
wallet1.innerHTML="$770";}
else if (wallet1.innerHTML==="$790") {
wallet1.innerHTML="$780";}
else if (wallet1.innerHTML==="$800") {
wallet1.innerHTML="$790";}
else if (wallet1.innerHTML==="$810") {
wallet1.innerHTML="$800";}
else if (wallet1.innerHTML==="$810") {
wallet1.innerHTML="$800";}
else if (wallet1.innerHTML==="$820") {
wallet1.innerHTML="$810";}
else if (wallet1.innerHTML==="$830") {
wallet1.innerHTML="$820";}
else if (wallet1.innerHTML==="$840") {
wallet1.innerHTML="$830";}
else if (wallet1.innerHTML==="$850") {
wallet1.innerHTML="$840";}
else if (wallet1.innerHTML==="$860") {
wallet1.innerHTML="$850";}
else if (wallet1.innerHTML==="$870") {
wallet1.innerHTML="$860";}
else if (wallet1.innerHTML==="$880") {
wallet1.innerHTML="$870";}
else if (wallet1.innerHTML==="$890") {
wallet1.innerHTML="$880";}
else if (wallet1.innerHTML==="$900") {
wallet1.innerHTML="$890";}
else if (wallet1.innerHTML==="$910") {
wallet1.innerHTML="$900";}
else if (wallet1.innerHTML==="$920") {
wallet1.innerHTML="$910";}
else if (wallet1.innerHTML==="$930") {
wallet1.innerHTML="$920";}
else if (wallet1.innerHTML==="$940") {
wallet1.innerHTML="$930";}
else if (wallet1.innerHTML==="$950") {
wallet1.innerHTML="$940";}
else if (wallet1.innerHTML==="$960") {
wallet1.innerHTML="$950";}
else if (wallet1.innerHTML==="$970") {
wallet1.innerHTML="$960";}
else if (wallet1.innerHTML==="$980") {
wallet1.innerHTML="$970";}
else if (wallet1.innerHTML==="$990") {
wallet1.innerHTML="$980";}
else if (wallet1.innerHTML==="$1000") {
wallet1.innerHTML="$990";}
else if (wallet1.innerHTML==="$1010") {
wallet1.innerHTML="$1000";}
else if (wallet1.innerHTML==="$1010") {
wallet1.innerHTML="$1000";}
else if (wallet1.innerHTML==="$1020") {
wallet1.innerHTML="$1010";}
else if (wallet1.innerHTML==="$1030") {
wallet1.innerHTML="$1020";}
else if (wallet1.innerHTML==="$1040") {
wallet1.innerHTML="$1030";}
else if (wallet1.innerHTML==="$1050") {
wallet1.innerHTML="$1040";}
else if (wallet1.innerHTML==="$1060") {
wallet1.innerHTML="$1050";}
else if (wallet1.innerHTML==="$1070") {
wallet1.innerHTML="$1060";}
else if (wallet1.innerHTML==="$1080") {
wallet1.innerHTML="$1070";}
else if (wallet1.innerHTML==="$1090") {
wallet1.innerHTML="$1080";}
else if (wallet1.innerHTML==="$1100") {
wallet1.innerHTML="$1090";}
else if (wallet1.innerHTML==="$1110") {
wallet1.innerHTML="$1100";}
else if (wallet1.innerHTML==="$1110") {
wallet1.innerHTML="$1100";}
else if (wallet1.innerHTML==="$1120") {
wallet1.innerHTML="$1110";}
else if (wallet1.innerHTML==="$1130") {
wallet1.innerHTML="$1120";}
else if (wallet1.innerHTML==="$1140") {
wallet1.innerHTML="$1130";}
else if (wallet1.innerHTML==="$1150") {
wallet1.innerHTML="$1140";}
else if (wallet1.innerHTML==="$1160") {
wallet1.innerHTML="$1150";}
else if (wallet1.innerHTML==="$1170") {
wallet1.innerHTML="$1160";}
else if (wallet1.innerHTML==="$1180") {
wallet1.innerHTML="$1170";}
else if (wallet1.innerHTML==="$1190") {
wallet1.innerHTML="$1180";}
else if (wallet1.innerHTML==="$1200") {
wallet1.innerHTML="$1190";}
else if (wallet1.innerHTML==="$1210") {
wallet1.innerHTML="$1200";}
else if (wallet1.innerHTML==="$1220") {
wallet1.innerHTML="$1210";}
else if (wallet1.innerHTML==="$1230") {
wallet1.innerHTML="$1220";}
else if (wallet1.innerHTML==="$1240") {
wallet1.innerHTML="$1230";}
else if (wallet1.innerHTML==="$1250") {
wallet1.innerHTML="$1240";}
else if (wallet1.innerHTML==="$1260") {
wallet1.innerHTML="$1250";}
else if (wallet1.innerHTML==="$1270") {
wallet1.innerHTML="$1260";}
else if (wallet1.innerHTML==="$1280") {
wallet1.innerHTML="$1270";}
else if (wallet1.innerHTML==="$1290") {
wallet1.innerHTML="$1280";}
else if (wallet1.innerHTML==="$1300") {
wallet1.innerHTML="$1290";}
else if (wallet1.innerHTML==="$1310") {
wallet1.innerHTML="$1300";}
else if (wallet1.innerHTML==="$1310") {
wallet1.innerHTML="$1300";}
else if (wallet1.innerHTML==="$1320") {
wallet1.innerHTML="$1310";}
else if (wallet1.innerHTML==="$1330") {
wallet1.innerHTML="$1320";}
else if (wallet1.innerHTML==="$1340") {
wallet1.innerHTML="$1330";}
else if (wallet1.innerHTML==="$1350") {
wallet1.innerHTML="$1340";}
else if (wallet1.innerHTML==="$1360") {
wallet1.innerHTML="$1350";}
else if (wallet1.innerHTML==="$1370") {
wallet1.innerHTML="$1360";}
else if (wallet1.innerHTML==="$1380") {
wallet1.innerHTML="$1370";}
else if (wallet1.innerHTML==="$1390") {
wallet1.innerHTML="$1380";}
else if (wallet1.innerHTML==="$1400") {
wallet1.innerHTML="$1390";}
else if (wallet1.innerHTML==="$1410") {
wallet1.innerHTML="$1400";}
else if (wallet1.innerHTML==="$1420") {
wallet1.innerHTML="$1410";}
else if (wallet1.innerHTML==="$1430") {
wallet1.innerHTML="$1420";}
else if (wallet1.innerHTML==="$1440") {
wallet1.innerHTML="$1430";}
else if (wallet1.innerHTML==="$1450") {
wallet1.innerHTML="$1440";}
else if (wallet1.innerHTML==="$1460") {
wallet1.innerHTML="$1450";}
else if (wallet1.innerHTML==="$1470") {
wallet1.innerHTML="$1460";}
else if (wallet1.innerHTML==="$1480") {
wallet1.innerHTML="$1470";}
else if (wallet1.innerHTML==="$1490") {
wallet1.innerHTML="$1480";}
else if (wallet1.innerHTML==="$1500") {
wallet1.innerHTML="$1490";}
else if (wallet1.innerHTML==="$1510") {
wallet1.innerHTML="$1500";}
else if (wallet1.innerHTML==="$1510") {
wallet1.innerHTML="$1500";}
else if (wallet1.innerHTML==="$1520") {
wallet1.innerHTML="$1510";}
else if (wallet1.innerHTML==="$1530") {
wallet1.innerHTML="$1520";}
else if (wallet1.innerHTML==="$1540") {
wallet1.innerHTML="$1530";}
else if (wallet1.innerHTML==="$1550") {
wallet1.innerHTML="$1540";}
else if (wallet1.innerHTML==="$1560") {
wallet1.innerHTML="$1550";}
else if (wallet1.innerHTML==="$1570") {
wallet1.innerHTML="$1560";}
else if (wallet1.innerHTML==="$1580") {
wallet1.innerHTML="$1570";}
else if (wallet1.innerHTML==="$1590") {
wallet1.innerHTML="$1580";}
else if (wallet1.innerHTML==="$1600") {
wallet1.innerHTML="$1590";}
else if (wallet1.innerHTML==="$1610") {
wallet1.innerHTML="$1600";}
else if (wallet1.innerHTML==="$1620") {
wallet1.innerHTML="$1610";}
else if (wallet1.innerHTML==="$1630") {
wallet1.innerHTML="$1620";}
else if (wallet1.innerHTML==="$1640") {
wallet1.innerHTML="$1630";}
else if (wallet1.innerHTML==="$1650") {
wallet1.innerHTML="$1640";}
else if (wallet1.innerHTML==="$1660") {
wallet1.innerHTML="$1650";}
else if (wallet1.innerHTML==="$1670") {
wallet1.innerHTML="$1660";}
else if (wallet1.innerHTML==="$1680") {
wallet1.innerHTML="$1670";}
else if (wallet1.innerHTML==="$1690") {
wallet1.innerHTML="$1680";}
else if (wallet1.innerHTML==="$1700") {
wallet1.innerHTML="$1690";}
else if (wallet1.innerHTML==="$1710") {
wallet1.innerHTML="$1700";}
else if (wallet1.innerHTML==="$1710") {
wallet1.innerHTML="$1700";}
else if (wallet1.innerHTML==="$1720") {
wallet1.innerHTML="$1710";}
else if (wallet1.innerHTML==="$1730") {
wallet1.innerHTML="$1720";}
else if (wallet1.innerHTML==="$1740") {
wallet1.innerHTML="$1730";}
else if (wallet1.innerHTML==="$1750") {
wallet1.innerHTML="$1740";}
else if (wallet1.innerHTML==="$1760") {
wallet1.innerHTML="$1750";}
else if (wallet1.innerHTML==="$1770") {
wallet1.innerHTML="$1760";}
else if (wallet1.innerHTML==="$1780") {
wallet1.innerHTML="$1770";}
else if (wallet1.innerHTML==="$1790") {
wallet1.innerHTML="$1780";}
else if (wallet1.innerHTML==="$1800") {
wallet1.innerHTML="$1790";}
else if (wallet1.innerHTML==="$1810") {
wallet1.innerHTML="$1800";}
else if (wallet1.innerHTML==="$1810") {
wallet1.innerHTML="$1800";}
else if (wallet1.innerHTML==="$1820") {
wallet1.innerHTML="$1810";}
else if (wallet1.innerHTML==="$1830") {
wallet1.innerHTML="$1820";}
else if (wallet1.innerHTML==="$1840") {
wallet1.innerHTML="$1830";}
else if (wallet1.innerHTML==="$1850") {
wallet1.innerHTML="$1840";}
else if (wallet1.innerHTML==="$1860") {
wallet1.innerHTML="$1850";}
else if (wallet1.innerHTML==="$1870") {
wallet1.innerHTML="$1860";}
else if (wallet1.innerHTML==="$1880") {
wallet1.innerHTML="$1870";}
else if (wallet1.innerHTML==="$1890") {
wallet1.innerHTML="$1880";}
else if (wallet1.innerHTML==="$1900") {
wallet1.innerHTML="$1890";}
else if (wallet1.innerHTML==="$1910") {
wallet1.innerHTML="$1900";}
else if (wallet1.innerHTML==="$1910") {
wallet1.innerHTML="$1900";}
else if (wallet1.innerHTML==="$1920") {
wallet1.innerHTML="$1910";}
else if (wallet1.innerHTML==="$1930") {
wallet1.innerHTML="$1920";}
else if (wallet1.innerHTML==="$1940") {
wallet1.innerHTML="$1930";}
else if (wallet1.innerHTML==="$1950") {
wallet1.innerHTML="$1940";}
else if (wallet1.innerHTML==="$1960") {
wallet1.innerHTML="$1950";}
else if (wallet1.innerHTML==="$1970") {
wallet1.innerHTML="$1960";}
else if (wallet1.innerHTML==="$1980") {
wallet1.innerHTML="$1970";}
else if (wallet1.innerHTML==="$1990") {
wallet1.innerHTML="$1980";}
else if (wallet1.innerHTML==="$2000") {
wallet1.innerHTML="$1990";}
else if (wallet1.innerHTML==="$2010") {
wallet1.innerHTML="$2000";}
else if (wallet1.innerHTML==="$2020") {
wallet1.innerHTML="$2010";}
else if (wallet1.innerHTML==="$2030") {
wallet1.innerHTML="$2020";}
else if (wallet1.innerHTML==="$2040") {
wallet1.innerHTML="$2030";}
else if (wallet1.innerHTML==="$2050") {
wallet1.innerHTML="$2040";}
else if (wallet1.innerHTML==="$2060") {
wallet1.innerHTML="$2050";}}

function drunkTank() {
var jailStartOne=document.getElementById("oneX");
var jailOne=document.getElementById("oneH");
var jailThree=document.getElementById("threeH");
var jailStartThree=document.getElementById("threeX");
var lock=document.getElementById("id24");
if (jailStartOne.innerHTML==="One") {
jailStartOne.innerHTML="";
jailOne.innerHTML="One";
jailOne.style.color="red";
lock.style.background="silver";
jailOne.style.color="black";}
else if (jailStartThree.innerHTML==="Three") {
jailStartThree.innerHTML="";
jailThree.innerHTML="Three";
jailThree.style.color="green";
lock.style.background="silver";
jailThree.style.color="black";}}

function start1() {
var startOne=document.getElementById("cone");
var homeOne=document.getElementById("oneA");
var startThree=document.getElementById("cthree");
var homeThree=document.getElementById("threeA");
if (startOne.innerHTML==="One") {
startOne.innerHTML="";
homeOne.innerHTML="One";
homeOne.style.color="red";}
else if (startThree.innerHTML==="Three") {
starThree.innerHTML="";
homeThree.innerHTML="Three";
homeOne.style.color="green";}}

function start2() {
var startOne=document.getElementById("oneL");
var homeOne=document.getElementById("oneA");
var startThree=document.getElementById("threeL");
var homeThree=document.getElementById("threeA");
if (startOne.innerHTML==="One") {
startOne.innerHTML="";
homeOne.innerHTML="One";
homeOne.style.color="red";}
else if (startThree.innerHTML==="Three") {
startThree.innerHTML="";
homeThree.innerHTML="Three";
homeOne.style.color="green";}}

function piece(element) {
var one=document.getElementById("oneA");
var two=document.getElementById("oneB");
var three=document.getElementById("oneC");
var four=document.getElementById("oneD");
var five=document.getElementById("oneE");
var six=document.getElementById("oneF");
var seven=document.getElementById("oneG");
var eight=document.getElementById("oneH");
var nine=document.getElementById("oneI");
var ten=document.getElementById("oneJ");
var eleven=document.getElementById("oneK");
var twelve=document.getElementById("oneL");
var thirteen=document.getElementById("oneM");
var fourteen=document.getElementById("oneN");
var fifteen=document.getElementById("oneO");
var sixteen=document.getElementById("oneP");
var seventeen=document.getElementById("oneQ");
var eighteen=document.getElementById("oneR");
var nineteen=document.getElementById("oneS");
var twenty=document.getElementById("oneT");
var twentyone=document.getElementById("oneU");
var twentytwo=document.getElementById("oneV");
var twentythree=document.getElementById("oneW");
var twentyfour=document.getElementById("oneX");
var twentyfive=document.getElementById("oneY");
var twentysix=document.getElementById("oneZ");
var twentyseven=document.getElementById("aone");
var twentyeight=document.getElementById("bone");
var twentynine=document.getElementById("cone");
var thirty=document.getElementById("done");
var thirtyone=document.getElementById("eone");
var thirtytwo=document.getElementById("fone");
var toggle1=document.getElementById("sel1");
var button1=document.getElementById("btn1");
var wallet=document.getElementById("wal1");
var y=document.getElementById("+a");
var z=document.getElementById("-a");
var x=document.getElementById("a111");
var bone=document.getElementById("threeA");
var btwo=document.getElementById("threeB");
var bthree=document.getElementById("threeC");
var bfour=document.getElementById("threeD");
var bfive=document.getElementById("threeE");
var bsix=document.getElementById("threeF");
var bseven=document.getElementById("threeG");
var beight=document.getElementById("threeH");
var bnine=document.getElementById("threeI");
var bten=document.getElementById("threeJ");
var beleven=document.getElementById("threeK");
var btwelve=document.getElementById("threeL");
var bthirteen=document.getElementById("threeM");
var bfourteen=document.getElementById("threeN");
var bfifteen=document.getElementById("threeO");
var bsixteen=document.getElementById("threeP");
var bseventeen=document.getElementById("threeQ");
var beighteen=document.getElementById("threeR");
var bnineteen=document.getElementById("threeS");
var btwenty=document.getElementById("threeT");
var btwentyone=document.getElementById("threeU");
var btwentytwo=document.getElementById("threeV");
var btwentythree=document.getElementById("threeW");
var btwentyfour=document.getElementById("threeX");
var btwentyfive=document.getElementById("threeY");
var btwentysix=document.getElementById("threeZ");
var btwentyseven=document.getElementById("athree");
var btwentyeight=document.getElementById("bthree");
var btwentynine=document.getElementById("cthree");
var bthirty=document.getElementById("dthree");
var bthirtyone=document.getElementById("ethree");
var bthirtytwo=document.getElementById("fthree");
var btoggle1=document.getElementById("sel3");
var bbutton1=document.getElementById("btn3");
var bwallet=document.getElementById("wal2");
var by=document.getElementById("+b");
var bz=document.getElementById("-b");
var bx=document.getElementById("b111");
var accept=document.getElementById("cardAcc");
if (toggle1.style.background==="white" && one.innerHTML==="One") {
element.innerHTML="";
button1.innerHTML="One";
wallet.innerHTML="";
y.innerHTML="";
z.innerHTML="";
x.innerHTML="";}
else if (toggle1.style.background==="white" && two.innerHTML==="One") {
element.innerHTML="";
button1.innerHTML="One";
wallet.innerHTML="";
y.innerHTML="";
z.innerHTML="";
x.innerHTML="";}
else if (toggle1.style.background==="white" && three.innerHTML==="One") {
element.innerHTML="";
button1.innerHTML="One";
wallet.innerHTML="";
y.innerHTML="";
z.innerHTML="";
x.innerHTML="";}
else if (toggle1.style.background==="white" && four.innerHTML==="One") {
element.innerHTML="";
button1.innerHTML="One";
wallet.innerHTML="";
y.innerHTML="";
z.innerHTML="";
x.innerHTML="";}
else if (toggle1.style.background==="white" && five.innerHTML==="One") {
element.innerHTML="";
button1.innerHTML="One";
wallet.innerHTML="";
y.innerHTML="";
z.innerHTML="";
x.innerHTML="";}
else if (toggle1.style.background==="white" && six.innerHTML==="One") {
element.innerHTML="";
button1.innerHTML="One";
wallet.innerHTML="";
y.innerHTML="";
z.innerHTML="";
x.innerHTML="";}
else if (toggle1.style.background==="white" && seven.innerHTML==="One") {
element.innerHTML="";
button1.innerHTML="One";
wallet.innerHTML="";
y.innerHTML="";
z.innerHTML="";
x.innerHTML="";}
else if (toggle1.style.background==="white" && eight.innerHTML==="One") {
element.innerHTML="";
button1.innerHTML="One";
wallet.innerHTML="";
y.innerHTML="";
z.innerHTML="";
x.innerHTML="";}
else if (toggle1.style.background==="white" && nine.innerHTML==="One") {
element.innerHTML="";
button1.innerHTML="One";
wallet.innerHTML="";
y.innerHTML="";
z.innerHTML="";
x.innerHTML="";}
else if (toggle1.style.background==="white" && ten.innerHTML==="One") {
element.innerHTML="";
button1.innerHTML="One";
wallet.innerHTML="";
y.innerHTML="";
z.innerHTML="";
x.innerHTML="";}
else if (toggle1.style.background==="white" && eleven.innerHTML==="One") {
element.innerHTML="";
button1.innerHTML="One";
wallet.innerHTML="";
y.innerHTML="";
z.innerHTML="";
x.innerHTML="";}
else if (toggle1.style.background==="white" && twelve.innerHTML==="One") {
element.innerHTML="";
button1.innerHTML="One";
wallet.innerHTML="";
y.innerHTML="";
z.innerHTML="";
x.innerHTML="";}
else if (toggle1.style.background==="white" && thirteen.innerHTML==="One") {
element.innerHTML="";
button1.innerHTML="One";
wallet.innerHTML="";
y.innerHTML="";
z.innerHTML="";
x.innerHTML="";}
else if (toggle1.style.background==="white" && fourteen.innerHTML==="One") {
element.innerHTML="";
button1.innerHTML="One";
wallet.innerHTML="";
y.innerHTML="";
z.innerHTML="";
x.innerHTML="";}
else if (toggle1.style.background==="white" && fifteen.innerHTML==="One") {
element.innerHTML="";
button1.innerHTML="One";
wallet.innerHTML="";
y.innerHTML="";
z.innerHTML="";
x.innerHTML="";}
else if (toggle1.style.background==="white" && sixteen.innerHTML==="One") {
element.innerHTML="";
button1.innerHTML="One";
wallet.innerHTML="";
y.innerHTML="";
z.innerHTML="";
x.innerHTML="";}
else if (toggle1.style.background==="white" && seventeen.innerHTML==="One") {
element.innerHTML="";
button1.innerHTML="One";
wallet.innerHTML="";
y.innerHTML="";
z.innerHTML="";
x.innerHTML="";}
else if (toggle1.style.background==="white" && eighteen.innerHTML==="One") {
element.innerHTML="";
button1.innerHTML="One";
wallet.innerHTML="";
y.innerHTML="";
z.innerHTML="";
x.innerHTML="";}
else if (toggle1.style.background==="white" && nineteen.innerHTML==="One") {
element.innerHTML="";
button1.innerHTML="One";
wallet.innerHTML="";
y.innerHTML="";
z.innerHTML="";
x.innerHTML="";}
else if (toggle1.style.background==="white" && twenty.innerHTML==="One") {
element.innerHTML="";
button1.innerHTML="One";
wallet.innerHTML="";
y.innerHTML="";
z.innerHTML="";
x.innerHTML="";}
else if (toggle1.style.background==="white" && twentyone.innerHTML==="One") {
element.innerHTML="";
button1.innerHTML="One";
wallet.innerHTML="";
y.innerHTML="";
z.innerHTML="";
x.innerHTML="";}
else if (toggle1.style.background==="white" && twentytwo.innerHTML==="One") {
element.innerHTML="";
button1.innerHTML="One";
wallet.innerHTML="";
y.innerHTML="";
z.innerHTML="";
x.innerHTML="";}
else if (toggle1.style.background==="white" && twentythree.innerHTML==="One") {
element.innerHTML="";
button1.innerHTML="One";
wallet.innerHTML="";
y.innerHTML="";
z.innerHTML="";
x.innerHTML="";}
else if (toggle1.style.background==="white" && twentyfour.innerHTML==="One") {
element.innerHTML="";
button1.innerHTML="One";
wallet.innerHTML="";
y.innerHTML="";
z.innerHTML="";
x.innerHTML="";}
else if (toggle1.style.background==="white" && twentyfive.innerHTML==="One") {
element.innerHTML="";
button1.innerHTML="One";
wallet.innerHTML="";
y.innerHTML="";
z.innerHTML="";
x.innerHTML="";}
else if (toggle1.style.background==="white" && twentysix.innerHTML==="One") {
element.innerHTML="";
button1.innerHTML="One";
wallet.innerHTML="";
y.innerHTML="";
z.innerHTML="";
x.innerHTML="";}
else if (toggle1.style.background==="white" && twentyseven.innerHTML==="One") {
element.innerHTML="";
button1.innerHTML="One";
wallet.innerHTML="";
y.innerHTML="";
z.innerHTML="";
x.innerHTML="";}
else if (toggle1.style.background==="white" && twentyeight.innerHTML==="One") {
element.innerHTML="";
button1.innerHTML="One";
wallet.innerHTML="";
y.innerHTML="";
z.innerHTML="";
x.innerHTML="";}
else if (toggle1.style.background==="white" && twentynine.innerHTML==="One") {
element.innerHTML="";
button1.innerHTML="One";
wallet.innerHTML="";
y.innerHTML="";
z.innerHTML="";
x.innerHTML="";}
else if (toggle1.style.background==="white" && thirty.innerHTML==="One") {
element.innerHTML="";
button1.innerHTML="One";
wallet.innerHTML="";
y.innerHTML="";
z.innerHTML="";
x.innerHTML="";}
else if (toggle1.style.background==="white" && thirtyone.innerHTML==="One") {
element.innerHTML="";
button1.innerHTML="One";
wallet.innerHTML="";
y.innerHTML="";
z.innerHTML="";
x.innerHTML="";}
else if (toggle1.style.background==="white" && thirtytwo.innerHTML==="One") {
element.innerHTML="";
button1.innerHTML="One";
wallet.innerHTML="";
y.innerHTML="";
z.innerHTML="";
x.innerHTML="";}
else if (btoggle1.style.background==="white" && bone.innerHTML==="Three") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwallet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.background==="white" && btwo.innerHTML==="Three") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwallet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.background==="white" && bthree.innerHTML==="Three") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwallet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.background==="white" && bfour.innerHTML==="Three") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwallet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.background==="white" && bfive.innerHTML==="Three") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwallet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.background==="white" && bsix.innerHTML==="Three") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwallet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.background==="white" && bseven.innerHTML==="Three") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwallet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.background==="white" && beight.innerHTML==="Three") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwallet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.background==="white" && bnine.innerHTML==="Three") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwallet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.background==="white" && bten.innerHTML==="Three") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwallet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.background==="white" && beleven.innerHTML==="Three") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwallet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.background==="white" && btwelve.innerHTML==="Three") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwallet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.background==="white" && bthirteen.innerHTML==="Three") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwallet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.background==="white" && bfourteen.innerHTML==="Three") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwallet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.background==="white" && bfifteen.innerHTML==="Three") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwallet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.background==="white" && bsixteen.innerHTML==="Three") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwallet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.background==="white" && bseventeen.innerHTML==="Three") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwallet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.background==="white" && beighteen.innerHTML==="Three") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwallet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.background==="white" && bnineteen.innerHTML==="Three") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwallet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.background==="white" && btwenty.innerHTML==="Three") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwallet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.background==="white" && btwentyone.innerHTML==="Three") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwallet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.background==="white" && btwentytwo.innerHTML==="Three") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwallet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.background==="white" && btwentyThree.innerHTML==="Three") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwallet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.background==="white" && btwentythree.innerHTML==="Three") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwallet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.background==="white" && btwentyfour.innerHTML==="Three") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwallet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.background==="white" && btwentyfive.innerHTML==="Three") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwallet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.background==="white" && btwentysix.innerHTML==="Three") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwallet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.background==="white" && btwentyseven.innerHTML==="Three") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwallet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.background==="white" && btwentyeight.innerHTML==="Three") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwallet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.background==="white" && btwentynine.innerHTML==="Three") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwallet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.background==="white" && bthirty.innerHTML==="Three") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwallet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.background==="white" && bthirtyone.innerHTML==="Three") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwallet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.background==="white" && bthirtyTwo.innerHTML==="Three") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwallet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
 
else if (four.innerHTML==="One" && accept.innerHTML==="Ad- vance To Go") {
four.innerHTML="";
one.innerHTML="One";
one.style.color="red";}

else if (twentyone.innerHTML==="One" && accept.innerHTML==="Ad- vance To Go") {
twentyone.innerHTML="";
one.innerHTML="One";
one.style.color="red";}

else if (twentyeight.innerHTML==="One" && accept.innerHTML==="Ad- vance To Go") {
twentyeight.innerHTML="";
one.innerHTML="One";
one.style.color="red";}


else if (bfour.innerHTML==="Three" && accept.innerHTML==="Ad- vance To Go") {
bfour.innerHTML="";
aone.innerHTML="Three";
aone.style.color="green";}

else if (btwentyone.innerHTML==="Three" && accept.innerHTML==="Ad- vance To Go") {
btwentyone.innerHTML="";
aone.innerHTML="Three";
aone.style.color="green";}

else if (btwentyeight.innerHTML==="Three" && accept.innerHTML==="Ad- vance To Go") {
btwo.innerHTML="";
aone.innerHTML="Three";
aone.style.color="green";}

else if (four.innerHTML==="One" && accept.innerHTML==="Jail") {
four.innerHTML="";
eight.innerHTML="One";
eight.style.color="red";}

else if (twentyone.innerHTML==="One" && accept.innerHTML==="Jail") {
twentyone.innerHTML="";
eight.innerHTML="One";
eight.style.color="red";}

else if (twentyeight.innerHTML==="One" && accept.innerHTML==="Jail") {
twentyeight.innerHTML="";
eight.innerHTML="One";
eight.style.color="red";}
 

else if (bfour.innerHTML==="Three" && accept.innerHTML==="Jail") {
bfour.innerHTML="";
beight.innerHTML="Three";
beight.style.color="green";}
 
else if (btwentyone.innerHTML==="Three" && accept.innerHTML==="Jail") {
btwentyone.innerHTML="";
beight.innerHTML="Three";
beight.style.color="green";}

else if (btwentyeight.innerHTML==="Three" && accept.innerHTML==="Jail") {
btwentyeight.innerHTML="";
beight.innerHTML="Three";
beight.style.color="green";}

else if (four.innerHTML==="One" && accept.innerHTML==="Ad- vance To Gold") {
four.innerHTML="";
thirtytwo.innerHTML="One";
thirtytwo.style.color="red";}

else if (twentyone.innerHTML==="One" && accept.innerHTML==="Ad- vance To Gold") {
twentyone.innerHTML="";
thirtytwo.innerHTML="One";
thirtytwo.style.color="red";}
 
else if (twentyeight.innerHTML==="One" && accept.innerHTML==="Ad- vance To Gold") {
twentyeight.innerHTML="";
thirtytwo.innerHTML="One";
thirtytwo.style.color="red";}

else if (bfour.innerHTML==="Three" && accept.innerHTML==="Ad- vance To Gold") {
bfour.innerHTML="";
bthirtytwo.innerHTML="Three";
bthirtytwo.style.color="green";}
 
else if (btwentyone.innerHTML==="Three" && accept.innerHTML==="Ad- vance To Gold") {
btwentyone.innerHTML="";
bthirtytwo.innerHTML="Three";
bthirtytwo.style.color="green";}

else if (btwentyeight.innerHTML==="Three" && accept.innerHTML==="Ad- vance To Gold") {
btwo.innerHTML="";
bthirtytwo.innerHTML="Three";
bthirtytwo.style.color="green";}
 
else if (four.innerHTML==="One" && accept.innerHTML==="Back 3") {
four.innerHTML="";
one.innerHTML="One";
one.style.color="red";}

else if (twentyone.innerHTML==="One" && accept.innerHTML==="Back 3") {
twentyone.innerHTML="";
eighteen.innerHTML="One";
eighteen.style.color="red";}

else if (twentyeight.innerHTML==="One" && accept.innerHTML==="Back 3") {
twentyeight.innerHTML="";
twentyfive.innerHTML="One";
twentyfive.style.color="red";}

else if (bfour.innerHTML==="Three" && accept.innerHTML==="Back 3") {
bfour.innerHTML="";
bone.innerHTML="Three";
bone.style.color="green";}
 
else if (btwentyone.innerHTML==="Three" && accept.innerHTML==="Back 3") {
btwentyone.innerHTML="";
beighteen.innerHTML="Three";
beighteen.style.color="green";}

else if (btwentyeight.innerHTML==="Three" && accept.innerHTML==="Back 3") {
btwentyeight.innerHTML="";
btwentyfive.innerHTML="Three";
btwentyfive.style.color="green";}}

function card1() {
var acc=document.getElementById("cardAcc");
var tile1a= document.getElementById("oneD");
var tile3a=document.getElementById("threeD");
if (acc.innerHTML==="Ad- vance To Go" && tile1a.innerHTML==="One") {
acc.innerHTML="No- thing";}
else if (
acc.innerHTML==="No- thing" && tile1a.innerHTML==="One") {
acc.innerHTML="Jail";}
else if (acc.innerHTML==="Jail" && tile1a.innerHTML==="One") {
acc.innerHTML="+$150";}
else if (
acc.innerHTML==="+$150" && tile1a.innerHTML==="One") {
acc.innerHTML="Ad- vance To Gold";}
else if (
acc.innerHTML==="Ad- vance To Gold" && tile1a.innerHTML==="One") {
acc.innerHTML="-$100";}
else if (acc.innerHTML==="-$100" && tile1a.innerHTML==="One") {
acc.innerHTML="Back 3";}
else if (
acc.innerHTML==="Back 3" && tile1a.innerHTML==="One") {
acc.innerHTML="+$100";}
else if (
acc.innerHTML==="+$100" && tile1a.innerHTML==="One") {
acc.innerHTML="Ad- vance To Go";}

else if (acc.innerHTML==="Ad- vance To Go" && tile3a.innerHTML==="Three") {
acc.innerHTML="No- thing";}
else if (
acc.innerHTML==="No- thing" && tile3a.innerHTML==="Three") {
acc.innerHTML="Jail";}
else if (acc.innerHTML==="Jail" && tile3a.innerHTML==="Three") {
acc.innerHTML="+$150";}
else if (
acc.innerHTML==="+$150" && tile3a.innerHTML==="Three") {
acc.innerHTML="Ad- vance To Gold";}
else if (
acc.innerHTML==="Ad- vance To Gold" && tile3a.innerHTML==="Three") {
acc.innerHTML="-$100";}
else if (acc.innerHTML==="-$100" && tile3a.innerHTML==="Three") {
acc.innerHTML="Back 3";}
else if (
acc.innerHTML==="Back 3" && tile3a.innerHTML==="Three") {
acc.innerHTML="+$100";}
else if (
acc.innerHTML==="+$100" && tile3a.innerHTML==="Three") {
acc.innerHTML="Ad- vance To Go";}
else if (tile3a.innerHTML==="Three") {acc.innerHTML="+$150";}
else if (tile1a.innerHTML==="One") {acc.innerHTML="+$150";}}
 
function card2() {
var acc=document.getElementById("cardAcc");
var tile1a= document.getElementById("oneU");
var tile3a= document.getElementById("threeU");
if (acc.innerHTML==="Ad- vance To Go" && tile1a.innerHTML==="One") {
acc.innerHTML="No- thing";}
else if (
acc.innerHTML==="No- thing" && tile1a.innerHTML==="One") {
acc.innerHTML="Jail";}
else if (acc.innerHTML==="Jail" && tile1a.innerHTML==="One") {
acc.innerHTML="+$150";}
else if (
acc.innerHTML==="+$150" && tile1a.innerHTML==="One") {
acc.innerHTML="Ad- vance To Gold";}
else if (
acc.innerHTML==="Ad- vance To Gold" && tile1a.innerHTML==="One") {
acc.innerHTML="-$100";}
else if (acc.innerHTML==="-$100" && tile1a.innerHTML==="One") {
acc.innerHTML="Back 3";}
else if (
acc.innerHTML==="Back 3" && tile1a.innerHTML==="One") {
acc.innerHTML="+$100";}
else if (
acc.innerHTML==="+$100" && tile1a.innerHTML==="One") {
acc.innerHTML="Ad- vance To Go";}

else if (acc.innerHTML==="Ad- vance To Go" && tile3a.innerHTML==="Three") {
acc.innerHTML="No- thing";}
else if (
acc.innerHTML==="No- thing" && tile3a.innerHTML==="Three") {
acc.innerHTML="Jail";}
else if (acc.innerHTML==="Jail" && tile3a.innerHTML==="Three") {
acc.innerHTML="+$150";}
else if (
acc.innerHTML==="+$150" && tile3a.innerHTML==="Three") {
acc.innerHTML="Ad- vance To Gold";}
else if (
acc.innerHTML==="Ad- vance To Gold" && tile3a.innerHTML==="Three") {
acc.innerHTML="-$100";}
else if (acc.innerHTML==="-$100" && tile3a.innerHTML==="Three") {
acc.innerHTML="Back 3";}
else if (
acc.innerHTML==="Back 3" && tile3a.innerHTML==="Three") {
acc.innerHTML="+$100";}
else if (
acc.innerHTML==="+$100" && tile3a.innerHTML==="Three") {
acc.innerHTML="Ad- vance To Go";}
else if (tile3a.innerHTML==="Three") {acc.innerHTML="-$100";}
else if (tile1a.innerHTML==="One") {acc.innerHTML="-$100";}}

function card3() {
var acc=document.getElementById("cardAcc");
var tile1a= document.getElementById("bone");
var tile3a= document.getElementById("bthree");
if (acc.innerHTML==="Ad- vance To Go" && tile1a.innerHTML==="One") {
acc.innerHTML="No- thing";}
else if (
acc.innerHTML==="No- thing" && tile1a.innerHTML==="One") {
acc.innerHTML="Jail";}
else if (acc.innerHTML==="Jail" && tile1a.innerHTML==="One") {
acc.innerHTML="+$150";}
else if (
acc.innerHTML==="+$150" && tile1a.innerHTML==="One") {
acc.innerHTML="Ad- vance To Gold";}
else if (
acc.innerHTML==="Ad- vance To Gold" && tile1a.innerHTML==="One") {
acc.innerHTML="-$100";}
else if (acc.innerHTML==="-$100" && tile1a.innerHTML==="One") {
acc.innerHTML="Back 3";}
else if (
acc.innerHTML==="Back 3" && tile1a.innerHTML==="One") {
acc.innerHTML="+$100";}
else if (
acc.innerHTML==="+$100" && tile1a.innerHTML==="One") {
acc.innerHTML="Ad- vance To Go";}

else if (acc.innerHTML==="Ad- vance To Go" && tile3a.innerHTML==="Three") {
acc.innerHTML="No- thing";}
else if (
acc.innerHTML==="No- thing" && tile3a.innerHTML==="Three") {
acc.innerHTML="Jail";}
else if (acc.innerHTML==="Jail" && tile3a.innerHTML==="Three") {
acc.innerHTML="+$150";}
else if (
acc.innerHTML==="+$150" && tile3a.innerHTML==="Three") {
acc.innerHTML="Ad- vance To Gold";}
else if (
acc.innerHTML==="Ad- vance To Gold" && tile3a.innerHTML==="Three") {
acc.innerHTML="-$100";}
else if (acc.innerHTML==="-$100" && tile3a.innerHTML==="Three") {
acc.innerHTML="Back 3";}
else if (
acc.innerHTML==="Back 3" && tile3a.innerHTML==="Three") {
acc.innerHTML="+$100";}
else if (
acc.innerHTML==="+$100" && tile3a.innerHTML==="Three") {
acc.innerHTML="Ad- vance To Go";}
else if (tile3a.innerHTML==="Three") {acc.innerHTML="No- thing";}
else if (tile1a.innerHTML==="One") {acc.innerHTML="No- thing";}}
