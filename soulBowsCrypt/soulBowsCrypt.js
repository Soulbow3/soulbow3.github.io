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

function change2(element) {
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
element.innerHTML="Toggle P2 Off";}}

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

function bacX() {
var change=document.getElementById("value3");
var backa=document.getElementById("bac3a");
var backb=document.getElementById("bac3b");
var y=document.getElementById("+c");
var z=document.getElementById("-c");
var abc=document.getElementById("c111");
if (change.style.background==="darkslategrey" && abc.innerHTML==="P2") {
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

function plus3() {
var wallet3=document.getElementById("wal3");
var back2=document.getElementById("bac3a");
if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$0") {
wallet3.innerHTML="$100";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$10") {
wallet3.innerHTML="$110";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$20") {
wallet3.innerHTML="$120";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$30") {
wallet3.innerHTML="$130";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$40") {
wallet3.innerHTML="$140";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$50") {
wallet3.innerHTML="$150";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$60") {
wallet3.innerHTML="$160";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$70") {
wallet3.innerHTML="$170";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$80") {
wallet3.innerHTML="$180";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$90") {
wallet3.innerHTML="$190";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$100") {
wallet3.innerHTML="$200";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$110") {
wallet3.innerHTML="$210";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$120") {
wallet3.innerHTML="$220";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$130") {
wallet3.innerHTML="$230";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$140") {
wallet3.innerHTML="$240";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$150") {
wallet3.innerHTML="$250";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$160") {
wallet3.innerHTML="$260";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$170") {
wallet3.innerHTML="$270";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$180") {
wallet3.innerHTML="$280";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$190") {
wallet3.innerHTML="$290";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$200") {
wallet3.innerHTML="$300";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$210") {
wallet3.innerHTML="$310";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$220") {
wallet3.innerHTML="$320";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$230") {
wallet3.innerHTML="$330";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$240") {
wallet3.innerHTML="$340";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$250") {
wallet3.innerHTML="$350";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$260") {
wallet3.innerHTML="$360";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$270") {
wallet3.innerHTML="$370";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$280") {
wallet3.innerHTML="$380";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$290") {
wallet3.innerHTML="$390";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$300") {
wallet3.innerHTML="$400";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$310") {
wallet3.innerHTML="$410";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$320") {
wallet3.innerHTML="$420";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$330") {
wallet3.innerHTML="$430";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$340") {
wallet3.innerHTML="$440";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$350") {
wallet3.innerHTML="$450";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$360") {
wallet3.innerHTML="$460";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$370") {
wallet3.innerHTML="$470";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$380") {
wallet3.innerHTML="$480";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$390") {
wallet3.innerHTML="$490";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$400") {
wallet3.innerHTML="$500";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$410") {
wallet3.innerHTML="$510";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$420") {
wallet3.innerHTML="$520";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$430") {
wallet3.innerHTML="$530";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$440") {
wallet3.innerHTML="$540";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$450") {
wallet3.innerHTML="$550";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$460") {
wallet3.innerHTML="$560";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$470") {
wallet3.innerHTML="$570";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$480") {
wallet3.innerHTML="$580";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$490") {
wallet3.innerHTML="$590";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$500") {
wallet3.innerHTML="$600";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$510") {
wallet3.innerHTML="$610";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$520") {
wallet3.innerHTML="$620";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$530") {
wallet3.innerHTML="$630";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$540") {
wallet3.innerHTML="$640";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$550") {
wallet3.innerHTML="$650";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$560") {
wallet3.innerHTML="$660";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$570") {
wallet3.innerHTML="$670";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$580") {
wallet3.innerHTML="$680";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$590") {
wallet3.innerHTML="$690";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$600") {
wallet3.innerHTML="$700";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$610") {
wallet3.innerHTML="$710";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$620") {
wallet3.innerHTML="$720";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$630") {
wallet3.innerHTML="$730";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$640") {
wallet3.innerHTML="$740";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$650") {
wallet3.innerHTML="$750";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$660") {
wallet3.innerHTML="$760";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$670") {
wallet3.innerHTML="$770";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$680") {
wallet3.innerHTML="$780";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$690") {
wallet3.innerHTML="$790";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$700") {
wallet3.innerHTML="$800";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$710") {
wallet3.innerHTML="$810";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$720") {
wallet3.innerHTML="$820";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$730") {
wallet3.innerHTML="$830";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$740") {
wallet3.innerHTML="$840";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$750") {
wallet3.innerHTML="$850";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$760") {
wallet3.innerHTML="$860";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$770") {
wallet3.innerHTML="$870";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$780") {
wallet3.innerHTML="$880";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$790") {
wallet3.innerHTML="$890";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$800") {
wallet3.innerHTML="$900";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$810") {
wallet3.innerHTML="$910";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$820") {
wallet3.innerHTML="$920";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$830") {
wallet3.innerHTML="$930";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$840") {
wallet3.innerHTML="$940";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$850") {
wallet3.innerHTML="$950";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$860") {
wallet3.innerHTML="$960";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$870") {
wallet3.innerHTML="$970";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$880") {
wallet3.innerHTML="$980";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$890") {
wallet3.innerHTML="$990";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$900") {
wallet3.innerHTML="$1000";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$910") {
wallet3.innerHTML="$1010";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$920") {
wallet3.innerHTML="$1020";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$930") {
wallet3.innerHTML="$1030";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$940") {
wallet3.innerHTML="$1040";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$950") {
wallet3.innerHTML="$1050";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$960") {
wallet3.innerHTML="$1060";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$970") {
wallet3.innerHTML="$1070";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$980") {
wallet3.innerHTML="$1080";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$990") {
wallet3.innerHTML="$1090";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$1000") {
wallet3.innerHTML="$1100";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$1010") {
wallet3.innerHTML="$1110";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$1020") {
wallet3.innerHTML="$1120";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$1030") {
wallet3.innerHTML="$1130";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$1040") {
wallet3.innerHTML="$1140";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$1050") {
wallet3.innerHTML="$1150";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$1060") {
wallet3.innerHTML="$1160";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$1070") {
wallet3.innerHTML="$1170";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$1080") {
wallet3.innerHTML="$1180";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$1090") {
wallet3.innerHTML="$1190";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$1100") {
wallet3.innerHTML="$1200";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$1110") {
wallet3.innerHTML="$1210";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$1120") {
wallet3.innerHTML="$1220";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$1130") {
wallet3.innerHTML="$1230";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$1140") {
wallet3.innerHTML="$1240";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$1150") {
wallet3.innerHTML="$1250";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$1160") {
wallet3.innerHTML="$1260";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$1170") {
wallet3.innerHTML="$1270";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$1180") {
wallet3.innerHTML="$1280";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$1190") {
wallet3.innerHTML="$1290";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$1200") {
wallet3.innerHTML="$1300";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$1210") {
wallet3.innerHTML="$1310";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$1220") {
wallet3.innerHTML="$1320";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$1230") {
wallet3.innerHTML="$1330";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$1240") {
wallet3.innerHTML="$1340";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$1250") {
wallet3.innerHTML="$1350";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$1260") {
wallet3.innerHTML="$1360";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$1270") {
wallet3.innerHTML="$1370";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$1280") {
wallet3.innerHTML="$1380";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$1290") {
wallet3.innerHTML="$1390";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$1300") {
wallet3.innerHTML="$1400";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$1310") {
wallet3.innerHTML="$1410";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$1320") {
wallet3.innerHTML="$1420";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$1330") {
wallet3.innerHTML="$1430";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$1340") {
wallet3.innerHTML="$1440";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$1350") {
wallet3.innerHTML="$1450";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$1360") {
wallet3.innerHTML="$1460";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$1370") {
wallet3.innerHTML="$1470";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$1380") {
wallet3.innerHTML="$1480";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$1390") {
wallet3.innerHTML="$1490";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$1400") {
wallet3.innerHTML="$1500";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$1410") {
wallet3.innerHTML="$1510";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$1420") {
wallet3.innerHTML="$1520";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$1430") {
wallet3.innerHTML="$1530";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$1440") {
wallet3.innerHTML="$1540";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$1450") {
wallet3.innerHTML="$1550";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$1460") {
wallet3.innerHTML="$1560";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$1470") {
wallet3.innerHTML="$1570";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$1480") {
wallet3.innerHTML="$1580";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$1490") {
wallet3.innerHTML="$1590";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$1500") {
wallet3.innerHTML="$1600";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$1510") {
wallet3.innerHTML="$1610";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$1520") {
wallet3.innerHTML="$1620";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$1530") {
wallet3.innerHTML="$1630";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$1540") {
wallet3.innerHTML="$1640";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$1550") {
wallet3.innerHTML="$1650";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$1560") {
wallet3.innerHTML="$1660";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$1570") {
wallet3.innerHTML="$1670";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$1580") {
wallet3.innerHTML="$1680";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$1590") {
wallet3.innerHTML="$1690";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$1600") {
wallet3.innerHTML="$1700";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$1610") {
wallet3.innerHTML="$1710";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$1620") {
wallet3.innerHTML="$1720";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$1630") {
wallet3.innerHTML="$1730";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$1640") {
wallet3.innerHTML="$1740";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$1650") {
wallet3.innerHTML="$1750";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$1660") {
wallet3.innerHTML="$1760";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$1670") {
wallet3.innerHTML="$1770";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$1680") {
wallet3.innerHTML="$1780";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$1690") {
wallet3.innerHTML="$1790";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$1700") {
wallet3.innerHTML="$1800";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$1710") {
wallet3.innerHTML="$1810";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$1720") {
wallet3.innerHTML="$1820";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$1730") {
wallet3.innerHTML="$1830";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$1740") {
wallet3.innerHTML="$1840";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$1750") {
wallet3.innerHTML="$1850";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$1760") {
wallet3.innerHTML="$1860";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$1770") {
wallet3.innerHTML="$1870";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$1780") {
wallet3.innerHTML="$1880";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$1790") {
wallet3.innerHTML="$1890";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$1800") {
wallet3.innerHTML="$1900";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$1810") {
wallet3.innerHTML="$1910";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$1820") {
wallet3.innerHTML="$1920";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$1830") {
wallet3.innerHTML="$1930";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$1840") {
wallet3.innerHTML="$1940";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$1850") {
wallet3.innerHTML="$1950";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$1860") {
wallet3.innerHTML="$1960";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$1870") {
wallet3.innerHTML="$1970";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$1880") {
wallet3.innerHTML="$1980";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$1890") {
wallet3.innerHTML="$1990";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$1900") {
wallet3.innerHTML="$2000";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$1910") {
wallet3.innerHTML="$2010";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$1920") {
wallet3.innerHTML="$2020";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$1930") {
wallet3.innerHTML="$2030";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$1940") {
wallet3.innerHTML="$2040";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$1950") {
wallet3.innerHTML="$2050";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$1960") {
wallet3.innerHTML="$2060";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$1970") {
wallet3.innerHTML="$2060";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$1980") {
wallet3.innerHTML="$2060";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$1990") {
wallet3.innerHTML="$2060";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$2000") {
wallet3.innerHTML="$2060";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$2010") {
wallet3.innerHTML="$2060";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$2020") {
wallet3.innerHTML="$2060";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$2030") {
wallet3.innerHTML="$2060";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$2040") {
wallet3.innerHTML="$2060";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$2050") {
wallet3.innerHTML="$2060";}
else if (back2.style.background==="darkslategrey" && wallet3.innerHTML==="$2060") {
wallet3.innerHTML="$2060";}
else if (wallet3.innerHTML==="$0") {
wallet3.innerHTML="$10";}
else if (wallet3.innerHTML==="$10") {
wallet3.innerHTML="$20";}
else if (wallet3.innerHTML==="$20") {
wallet3.innerHTML="$30";}
else if (wallet3.innerHTML==="$30") {
wallet3.innerHTML="$40";}
else if (wallet3.innerHTML==="$40") {
wallet3.innerHTML="$50";}
else if (wallet3.innerHTML==="$50") {
wallet3.innerHTML="$60";}
else if (wallet3.innerHTML==="$60") {
wallet3.innerHTML="$70";}
else if (wallet3.innerHTML==="$70") {
wallet3.innerHTML="$80";}
else if (wallet3.innerHTML==="$80") {
wallet3.innerHTML="$90";}
else if (wallet3.innerHTML==="$90") {
wallet3.innerHTML="$100";}
else if (wallet3.innerHTML==="$100") {
wallet3.innerHTML="$110";}
else if (wallet3.innerHTML==="$110") {
wallet3.innerHTML="$120";}
else if (wallet3.innerHTML==="$120") {
wallet3.innerHTML="$130";}
else if (wallet3.innerHTML==="$130") {
wallet3.innerHTML="$140";}
else if (wallet3.innerHTML==="$140") {
wallet3.innerHTML="$150";}
else if (wallet3.innerHTML==="$150") {
wallet3.innerHTML="$160";}
else if (wallet3.innerHTML==="$160") {
wallet3.innerHTML="$170";}
else if (wallet3.innerHTML==="$170") {
wallet3.innerHTML="$180";}
else if (wallet3.innerHTML==="$180") {
wallet3.innerHTML="$190";}
else if (wallet3.innerHTML==="$190") {
wallet3.innerHTML="$200";}
else if (wallet3.innerHTML==="$200") {
wallet3.innerHTML="$210";}
else if (wallet3.innerHTML==="$210") {
wallet3.innerHTML="$220";}
else if (wallet3.innerHTML==="$220") {
wallet3.innerHTML="$230";}
else if (wallet3.innerHTML==="$230") {
wallet3.innerHTML="$240";}
else if (wallet3.innerHTML==="$240") {
wallet3.innerHTML="$250";}
else if (wallet3.innerHTML==="$250") {
wallet3.innerHTML="$260";}
else if (wallet3.innerHTML==="$260") {
wallet3.innerHTML="$270";}
else if (wallet3.innerHTML==="$270") {
wallet3.innerHTML="$280";}
else if (wallet3.innerHTML==="$280") {
wallet3.innerHTML="$290";}
else if (wallet3.innerHTML==="$290") {
wallet3.innerHTML="$300";}
else if (wallet3.innerHTML==="$300") {
wallet3.innerHTML="$310";}
else if (wallet3.innerHTML==="$310") {
wallet3.innerHTML="$320";}
else if (wallet3.innerHTML==="$320") {
wallet3.innerHTML="$330";}
else if (wallet3.innerHTML==="$330") {
wallet3.innerHTML="$340";}
else if (wallet3.innerHTML==="$340") {
wallet3.innerHTML="$350";}
else if (wallet3.innerHTML==="$350") {
wallet3.innerHTML="$360";}
else if (wallet3.innerHTML==="$360") {
wallet3.innerHTML="$370";}
else if (wallet3.innerHTML==="$370") {
wallet3.innerHTML="$380";}
else if (wallet3.innerHTML==="$380") {
wallet3.innerHTML="$390";}
else if (wallet3.innerHTML==="$390") {
wallet3.innerHTML="$400";}
else if (wallet3.innerHTML==="$400") {
wallet3.innerHTML="$410";}
else if (wallet3.innerHTML==="$410") {
wallet3.innerHTML="$420";}
else if (wallet3.innerHTML==="$420") {
wallet3.innerHTML="$430";}
else if (wallet3.innerHTML==="$430") {
wallet3.innerHTML="$440";}
else if (wallet3.innerHTML==="$440") {
wallet3.innerHTML="$450";}
else if (wallet3.innerHTML==="$450") {
wallet3.innerHTML="$460";}
else if (wallet3.innerHTML==="$460") {
wallet3.innerHTML="$470";}
else if (wallet3.innerHTML==="$470") {
wallet3.innerHTML="$480";}
else if (wallet3.innerHTML==="$480") {
wallet3.innerHTML="$490";}
else if (wallet3.innerHTML==="$490") {
wallet3.innerHTML="$500";}
else if (wallet3.innerHTML==="$500") {
wallet3.innerHTML="$510";}
else if (wallet3.innerHTML==="$510") {
wallet3.innerHTML="$520";}
else if (wallet3.innerHTML==="$520") {
wallet3.innerHTML="$530";}
else if (wallet3.innerHTML==="$530") {
wallet3.innerHTML="$540";}
else if (wallet3.innerHTML==="$540") {
wallet3.innerHTML="$550";}
else if (wallet3.innerHTML==="$550") {
wallet3.innerHTML="$560";}
else if (wallet3.innerHTML==="$560") {
wallet3.innerHTML="$570";}
else if (wallet3.innerHTML==="$570") {
wallet3.innerHTML="$580";}
else if (wallet3.innerHTML==="$580") {
wallet3.innerHTML="$590";}
else if (wallet3.innerHTML==="$590") {
wallet3.innerHTML="$600";}
else if (wallet3.innerHTML==="$600") {
wallet3.innerHTML="$610";}
else if (wallet3.innerHTML==="$610") {
wallet3.innerHTML="$620";}
else if (wallet3.innerHTML==="$620") {
wallet3.innerHTML="$630";}
else if (wallet3.innerHTML==="$630") {
wallet3.innerHTML="$640";}
else if (wallet3.innerHTML==="$640") {
wallet3.innerHTML="$650";}
else if (wallet3.innerHTML==="$650") {
wallet3.innerHTML="$660";}
else if (wallet3.innerHTML==="$660") {
wallet3.innerHTML="$670";}
else if (wallet3.innerHTML==="$670") {
wallet3.innerHTML="$680";}
else if (wallet3.innerHTML==="$680") {
wallet3.innerHTML="$690";}
else if (wallet3.innerHTML==="$690") {
wallet3.innerHTML="$700";}
else if (wallet3.innerHTML==="$700") {
wallet3.innerHTML="$710";}
else if (wallet3.innerHTML==="$710") {
wallet3.innerHTML="$720";}
else if (wallet3.innerHTML==="$720") {
wallet3.innerHTML="$730";}
else if (wallet3.innerHTML==="$730") {
wallet3.innerHTML="$740";}
else if (wallet3.innerHTML==="$740") {
wallet3.innerHTML="$750";}
else if (wallet3.innerHTML==="$750") {
wallet3.innerHTML="$760";}
else if (wallet3.innerHTML==="$760") {
wallet3.innerHTML="$770";}
else if (wallet3.innerHTML==="$770") {
wallet3.innerHTML="$780";}
else if (wallet3.innerHTML==="$780") {
wallet3.innerHTML="$790";}
else if (wallet3.innerHTML==="$790") {
wallet3.innerHTML="$800";}
else if (wallet3.innerHTML==="$800") {
wallet3.innerHTML="$810";}
else if (wallet3.innerHTML==="$810") {
wallet3.innerHTML="$820";}
else if (wallet3.innerHTML==="$820") {
wallet3.innerHTML="$830";}
else if (wallet3.innerHTML==="$830") {
wallet3.innerHTML="$840";}
else if (wallet3.innerHTML==="$840") {
wallet3.innerHTML="$850";}
else if (wallet3.innerHTML==="$850") {
wallet3.innerHTML="$860";}
else if (wallet3.innerHTML==="$860") {
wallet3.innerHTML="$870";}
else if (wallet3.innerHTML==="$870") {
wallet3.innerHTML="$880";}
else if (wallet3.innerHTML==="$880") {
wallet3.innerHTML="$890";}
else if (wallet3.innerHTML==="$890") {
wallet3.innerHTML="$900";}
else if (wallet3.innerHTML==="$900") {
wallet3.innerHTML="$910";}
else if (wallet3.innerHTML==="$910") {
wallet3.innerHTML="$920";}
else if (wallet3.innerHTML==="$920") {
wallet3.innerHTML="$930";}
else if (wallet3.innerHTML==="$930") {
wallet3.innerHTML="$940";}
else if (wallet3.innerHTML==="$940") {
wallet3.innerHTML="$950";}
else if (wallet3.innerHTML==="$950") {
wallet3.innerHTML="$960";}
else if (wallet3.innerHTML==="$960") {
wallet3.innerHTML="$970";}
else if (wallet3.innerHTML==="$970") {
wallet3.innerHTML="$980";}
else if (wallet3.innerHTML==="$980") {
wallet3.innerHTML="$990";}
else if (wallet3.innerHTML==="$990") {
wallet3.innerHTML="$1000";}
else if (wallet3.innerHTML==="$1000") {
wallet3.innerHTML="$1010";}
else if (wallet3.innerHTML==="$1010") {
wallet3.innerHTML="$1020";}
else if (wallet3.innerHTML==="$1020") {
wallet3.innerHTML="$1030";}
else if (wallet3.innerHTML==="$1030") {
wallet3.innerHTML="$1040";}
else if (wallet3.innerHTML==="$1040") {
wallet3.innerHTML="$1050";}
else if (wallet3.innerHTML==="$1050") {
wallet3.innerHTML="$1060";}
else if (wallet3.innerHTML==="$1060") {
wallet3.innerHTML="$1070";}
else if (wallet3.innerHTML==="$1070") {
wallet3.innerHTML="$1080";}
else if (wallet3.innerHTML==="$1080") {
wallet3.innerHTML="$1090";}
else if (wallet3.innerHTML==="$1090") {
wallet3.innerHTML="$1100";}
else if (wallet3.innerHTML==="$1100") {
wallet3.innerHTML="$1110";}
else if (wallet3.innerHTML==="$1110") {
wallet3.innerHTML="$1120";}
else if (wallet3.innerHTML==="$1120") {
wallet3.innerHTML="$1130";}
else if (wallet3.innerHTML==="$1130") {
wallet3.innerHTML="$1140";}
else if (wallet3.innerHTML==="$1140") {
wallet3.innerHTML="$1150";}
else if (wallet3.innerHTML==="$1150") {
wallet3.innerHTML="$1160";}
else if (wallet3.innerHTML==="$1160") {
wallet3.innerHTML="$1170";}
else if (wallet3.innerHTML==="$1170") {
wallet3.innerHTML="$1180";}
else if (wallet3.innerHTML==="$1180") {
wallet3.innerHTML="$1190";}
else if (wallet3.innerHTML==="$1190") {
wallet3.innerHTML="$1200";}
else if (wallet3.innerHTML==="$1200") {
wallet3.innerHTML="$1210";}
else if (wallet3.innerHTML==="$1210") {
wallet3.innerHTML="$1220";}
else if (wallet3.innerHTML==="$1220") {
wallet3.innerHTML="$1230";}
else if (wallet3.innerHTML==="$1230") {
wallet3.innerHTML="$1240";}
else if (wallet3.innerHTML==="$1240") {
wallet3.innerHTML="$1250";}
else if (wallet3.innerHTML==="$1250") {
wallet3.innerHTML="$1260";}
else if (wallet3.innerHTML==="$1260") {
wallet3.innerHTML="$1270";}
else if (wallet3.innerHTML==="$1270") {
wallet3.innerHTML="$1280";}
else if (wallet3.innerHTML==="$1280") {
wallet3.innerHTML="$1290";}
else if (wallet3.innerHTML==="$1290") {
wallet3.innerHTML="$1300";}
else if (wallet3.innerHTML==="$1300") {
wallet3.innerHTML="$1310";}
else if (wallet3.innerHTML==="$1310") {
wallet3.innerHTML="$1320";}
else if (wallet3.innerHTML==="$1320") {
wallet3.innerHTML="$1330";}
else if (wallet3.innerHTML==="$1330") {
wallet3.innerHTML="$1340";}
else if (wallet3.innerHTML==="$1340") {
wallet3.innerHTML="$1350";}
else if (wallet3.innerHTML==="$1350") {
wallet3.innerHTML="$1360";}
else if (wallet3.innerHTML==="$1360") {
wallet3.innerHTML="$1370";}
else if (wallet3.innerHTML==="$1370") {
wallet3.innerHTML="$1380";}
else if (wallet3.innerHTML==="$1380") {
wallet3.innerHTML="$1390";}
else if (wallet3.innerHTML==="$1390") {
wallet3.innerHTML="$1400";}
else if (wallet3.innerHTML==="$1400") {
wallet3.innerHTML="$1410";}
else if (wallet3.innerHTML==="$1410") {
wallet3.innerHTML="$1420";}
else if (wallet3.innerHTML==="$1420") {
wallet3.innerHTML="$1430";}
else if (wallet3.innerHTML==="$1430") {
wallet3.innerHTML="$1440";}
else if (wallet3.innerHTML==="$1440") {
wallet3.innerHTML="$1450";}
else if (wallet3.innerHTML==="$1450") {
wallet3.innerHTML="$1460";}
else if (wallet3.innerHTML==="$1460") {
wallet3.innerHTML="$1470";}
else if (wallet3.innerHTML==="$1470") {
wallet3.innerHTML="$1480";}
else if (wallet3.innerHTML==="$1480") {
wallet3.innerHTML="$1490";}
else if (wallet3.innerHTML==="$1490") {
wallet3.innerHTML="$1500";}
else if (wallet3.innerHTML==="$1500") {
wallet3.innerHTML="$1510";}
else if (wallet3.innerHTML==="$1510") {
wallet3.innerHTML="$1520";}
else if (wallet3.innerHTML==="$1520") {
wallet3.innerHTML="$1530";}
else if (wallet3.innerHTML==="$1530") {
wallet3.innerHTML="$1540";}
else if (wallet3.innerHTML==="$1540") {
wallet3.innerHTML="$1550";}
else if (wallet3.innerHTML==="$1550") {
wallet3.innerHTML="$1560";}
else if (wallet3.innerHTML==="$1560") {
wallet3.innerHTML="$1570";}
else if (wallet3.innerHTML==="$1570") {
wallet3.innerHTML="$1580";}
else if (wallet3.innerHTML==="$1580") {
wallet3.innerHTML="$1590";}
else if (wallet3.innerHTML==="$1590") {
wallet3.innerHTML="$1600";}
else if (wallet3.innerHTML==="$1600") {
wallet3.innerHTML="$1610";}
else if (wallet3.innerHTML==="$1610") {
wallet3.innerHTML="$1620";}
else if (wallet3.innerHTML==="$1620") {
wallet3.innerHTML="$1630";}
else if (wallet3.innerHTML==="$1630") {
wallet3.innerHTML="$1640";}
else if (wallet3.innerHTML==="$1640") {
wallet3.innerHTML="$1650";}
else if (wallet3.innerHTML==="$1650") {
wallet3.innerHTML="$1660";}
else if (wallet3.innerHTML==="$1660") {
wallet3.innerHTML="$1670";}
else if (wallet3.innerHTML==="$1670") {
wallet3.innerHTML="$1680";}
else if (wallet3.innerHTML==="$1680") {
wallet3.innerHTML="$1690";}
else if (wallet3.innerHTML==="$1690") {
wallet3.innerHTML="$1700";}
else if (wallet3.innerHTML==="$1700") {
wallet3.innerHTML="$1710";}
else if (wallet3.innerHTML==="$1710") {
wallet3.innerHTML="$1720";}
else if (wallet3.innerHTML==="$1720") {
wallet3.innerHTML="$1730";}
else if (wallet3.innerHTML==="$1730") {
wallet3.innerHTML="$1740";}
else if (wallet3.innerHTML==="$1740") {
wallet3.innerHTML="$1750";}
else if (wallet3.innerHTML==="$1750") {
wallet3.innerHTML="$1760";}
else if (wallet3.innerHTML==="$1760") {
wallet3.innerHTML="$1770";}
else if (wallet3.innerHTML==="$1770") {
wallet3.innerHTML="$1780";}
else if (wallet3.innerHTML==="$1780") {
wallet3.innerHTML="$1790";}
else if (wallet3.innerHTML==="$1790") {
wallet3.innerHTML="$1800";}
else if (wallet3.innerHTML==="$1800") {
wallet3.innerHTML="$1810";}
else if (wallet3.innerHTML==="$1810") {
wallet3.innerHTML="$1820";}
else if (wallet3.innerHTML==="$1820") {
wallet3.innerHTML="$1830";}
else if (wallet3.innerHTML==="$1830") {
wallet3.innerHTML="$1840";}
else if (wallet3.innerHTML==="$1840") {
wallet3.innerHTML="$1850";}
else if (wallet3.innerHTML==="$1850") {
wallet3.innerHTML="$1860";}
else if (wallet3.innerHTML==="$1860") {
wallet3.innerHTML="$1870";}
else if (wallet3.innerHTML==="$1870") {
wallet3.innerHTML="$1880";}
else if (wallet3.innerHTML==="$1880") {
wallet3.innerHTML="$1890";}
else if (wallet3.innerHTML==="$1890") {
wallet3.innerHTML="$1900";}
else if (wallet3.innerHTML==="$1900") {
wallet3.innerHTML="$1910";}
else if (wallet3.innerHTML==="$1910") {
wallet3.innerHTML="$1920";}
else if (wallet3.innerHTML==="$1920") {
wallet3.innerHTML="$1930";}
else if (wallet3.innerHTML==="$1930") {
wallet3.innerHTML="$1940";}
else if (wallet3.innerHTML==="$1940") {
wallet3.innerHTML="$1950";}
else if (wallet3.innerHTML==="$1950") {
wallet3.innerHTML="$1960";}
else if (wallet3.innerHTML==="$1960") {
wallet3.innerHTML="$1970";}
else if (wallet3.innerHTML==="$1970") {
wallet3.innerHTML="$1980";}
else if (wallet3.innerHTML==="$1980") {
wallet3.innerHTML="$1990";}
else if (wallet3.innerHTML==="$1990") {
wallet3.innerHTML="$2000";}
else if (wallet3.innerHTML==="$2000") {
wallet3.innerHTML="$2010";}
else if (wallet3.innerHTML==="$2010") {
wallet3.innerHTML="$2020";}
else if (wallet3.innerHTML==="$2020") {
wallet3.innerHTML="$2030";}
else if (wallet3.innerHTML==="$2030") {
wallet3.innerHTML="$2040";}
else if (wallet3.innerHTML==="$2040") {
wallet3.innerHTML="$2050";}
else if (wallet3.innerHTML==="$2050") {
wallet3.innerHTML="$2060";}}

function minus3() {
var wallet3=document.getElementById("wal3");
var back=document.getElementById("bac3b");
if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$0") {
wallet3.innerHTML="Bank rupt";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$10") {
wallet3.innerHTML="Bank rupt";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$20") {
wallet3.innerHTML="Bankrupt";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$30") {
wallet3.innerHTML="Bank rupt";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$40") {
wallet3.innerHTML="Bank rupt";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$50") {
wallet3.innerHTML="Bank rupt";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$60") {
wallet3.innerHTML="Bank rupt";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$70") {
wallet3.innerHTML="Bank rupt";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$80") {
wallet3.innerHTML="Bank rupt";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$90") {
wallet3.innerHTML="Bank rupt";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$100") {
wallet3.innerHTML="$0";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$110") {
wallet3.innerHTML="$10";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$120") {
wallet3.innerHTML="$20";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$130") {
wallet3.innerHTML="$30";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$140") {
wallet3.innerHTML="$40";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$150") {
wallet3.innerHTML="$50";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$160") {
wallet3.innerHTML="$60";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$170") {
wallet3.innerHTML="$70";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$180") {
wallet3.innerHTML="$80";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$190") {
wallet3.innerHTML="$90";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$200") {
wallet3.innerHTML="$100";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$210") {
wallet3.innerHTML="$110";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$220") {
wallet3.innerHTML="$120";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$230") {
wallet3.innerHTML="$130";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$240") {
wallet3.innerHTML="$140";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$250") {
wallet3.innerHTML="$150";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$260") {
wallet3.innerHTML="$160";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$270") {
wallet3.innerHTML="$170";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$280") {
wallet3.innerHTML="$180";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$290") {
wallet3.innerHTML="$190";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$300") {
wallet3.innerHTML="$200";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$310") {
wallet3.innerHTML="$210";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$320") {
wallet3.innerHTML="$220";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$330") {
wallet3.innerHTML="$230";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$340") {
wallet3.innerHTML="$240";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$350") {
wallet3.innerHTML="$250";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$360") {
wallet3.innerHTML="$260";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$370") {
wallet3.innerHTML="$270";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$380") {
wallet3.innerHTML="$280";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$390") {
wallet3.innerHTML="$290";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$400") {
wallet3.innerHTML="$300";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$410") {
wallet3.innerHTML="$310";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$420") {
wallet3.innerHTML="$320";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$430") {
wallet3.innerHTML="$330";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$440") {
wallet3.innerHTML="$340";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$450") {
wallet3.innerHTML="$350";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$460") {
wallet3.innerHTML="$360";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$470") {
wallet3.innerHTML="$370";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$480") {
wallet3.innerHTML="$380";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$490") {
wallet3.innerHTML="$390";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$500") {
wallet3.innerHTML="$400";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$510") {
wallet3.innerHTML="$410";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$520") {
wallet3.innerHTML="$420";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$530") {
wallet3.innerHTML="$430";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$540") {
wallet3.innerHTML="$440";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$550") {
wallet3.innerHTML="$450";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$560") {
wallet3.innerHTML="$460";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$570") {
wallet3.innerHTML="$470";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$580") {
wallet3.innerHTML="$480";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$590") {
wallet3.innerHTML="$490";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$600") {
wallet3.innerHTML="$500";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$610") {
wallet3.innerHTML="$510";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$620") {
wallet3.innerHTML="$520";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$630") {
wallet3.innerHTML="$530";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$640") {
wallet3.innerHTML="$540";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$650") {
wallet3.innerHTML="$550";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$660") {
wallet3.innerHTML="$560";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$670") {
wallet3.innerHTML="$570";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$680") {
wallet3.innerHTML="$580";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$690") {
wallet3.innerHTML="$590";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$700") {
wallet3.innerHTML="$600";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$710") {
wallet3.innerHTML="$610";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$720") {
wallet3.innerHTML="$620";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$730") {
wallet3.innerHTML="$630";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$740") {
wallet3.innerHTML="$640";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$750") {
wallet3.innerHTML="$650";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$760") {
wallet3.innerHTML="$660";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$770") {
wallet3.innerHTML="$670";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$780") {
wallet3.innerHTML="$680";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$790") {
wallet3.innerHTML="$690";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$800") {
wallet3.innerHTML="$700";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$810") {
wallet3.innerHTML="$710";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$820") {
wallet3.innerHTML="$720";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$830") {
wallet3.innerHTML="$730";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$840") {
wallet3.innerHTML="$740";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$850") {
wallet3.innerHTML="$750";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$860") {
wallet3.innerHTML="$760";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$870") {
wallet3.innerHTML="$770";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$880") {
wallet3.innerHTML="$780";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$890") {
wallet3.innerHTML="$690";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$900") {
wallet3.innerHTML="$700";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$910") {
wallet3.innerHTML="$710";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$920") {
wallet3.innerHTML="$720";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$930") {
wallet3.innerHTML="$830";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$940") {
wallet3.innerHTML="$840";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$950") {
wallet3.innerHTML="$850";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$960") {
wallet3.innerHTML="$860";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$970") {
wallet3.innerHTML="$870";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$980") {
wallet3.innerHTML="$880";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$990") {
wallet3.innerHTML="$890";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$1000") {
wallet3.innerHTML="$900";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$1010") {
wallet3.innerHTML="$910";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$1020") {
wallet3.innerHTML="$920";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$1030") {
wallet3.innerHTML="$930";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$1040") {
wallet3.innerHTML="$940";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$1050") {
wallet3.innerHTML="$950";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$1060") {
wallet3.innerHTML="$960";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$1070") {
wallet3.innerHTML="$970";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$1080") {
wallet3.innerHTML="$980";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$1090") {
wallet3.innerHTML="$990";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$1100") {
wallet3.innerHTML="$1000";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$1110") {
wallet3.innerHTML="$1010";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$1120") {
wallet3.innerHTML="$1020";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$1130") {
wallet3.innerHTML="$1030";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$1140") {
wallet3.innerHTML="$1040";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$1150") {
wallet3.innerHTML="$1050";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$1160") {
wallet3.innerHTML="$1060";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$1170") {
wallet3.innerHTML="$1070";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$1180") {
wallet3.innerHTML="$1080";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$1190") {
wallet3.innerHTML="$1090";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$1200") {
wallet3.innerHTML="$1100";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$1210") {
wallet3.innerHTML="$1110";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$1220") {
wallet3.innerHTML="$1120";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$1230") {
wallet3.innerHTML="$1130";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$1240") {
wallet3.innerHTML="$1140";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$1250") {
wallet3.innerHTML="$1150";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$1260") {
wallet3.innerHTML="$1160";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$1270") {
wallet3.innerHTML="$1170";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$1280") {
wallet3.innerHTML="$1180";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$1290") {
wallet3.innerHTML="$1190";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$1300") {
wallet3.innerHTML="$1200";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$1310") {
wallet3.innerHTML="$1210";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$1320") {
wallet3.innerHTML="$1220";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$1330") {
wallet3.innerHTML="$1230";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$1340") {
wallet3.innerHTML="$1240";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$1350") {
wallet3.innerHTML="$1250";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$1360") {
wallet3.innerHTML="$1260";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$1370") {
wallet3.innerHTML="$1270";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$1380") {
wallet3.innerHTML="$1280";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$1390") {
wallet3.innerHTML="$1290";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$1400") {
wallet3.innerHTML="$1300";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$1410") {
wallet3.innerHTML="$1310";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$1420") {
wallet3.innerHTML="$1320";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$1430") {
wallet3.innerHTML="$1330";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$1440") {
wallet3.innerHTML="$1340";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$1450") {
wallet3.innerHTML="$1350";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$1460") {
wallet3.innerHTML="$1360";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$1470") {
wallet3.innerHTML="$1370";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$1480") {
wallet3.innerHTML="$1390";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$1490") {
wallet3.innerHTML="$1400";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$1500") {
wallet3.innerHTML="$1400";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$1510") {
wallet3.innerHTML="$1410";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$1520") {
wallet3.innerHTML="$1420";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$1530") {
wallet3.innerHTML="$1430";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$1540") {
wallet3.innerHTML="$1440";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$1550") {
wallet3.innerHTML="$1450";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$1560") {
wallet3.innerHTML="$1460";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$1570") {
wallet3.innerHTML="$1470";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$1580") {
wallet3.innerHTML="$1480";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$1590") {
wallet3.innerHTML="$1490";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$1600") {
wallet3.innerHTML="$1500";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$1610") {
wallet3.innerHTML="$1510";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$1620") {
wallet3.innerHTML="$1520";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$1630") {
wallet3.innerHTML="$1530";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$1640") {
wallet3.innerHTML="$1540";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$1650") {
wallet3.innerHTML="$1550";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$1660") {
wallet3.innerHTML="$1560";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$1670") {
wallet3.innerHTML="$1570";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$1680") {
wallet3.innerHTML="$1580";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$1690") {
wallet3.innerHTML="$1590";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$1700") {
wallet3.innerHTML="$1600";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$1710") {
wallet3.innerHTML="$1610";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$1720") {
wallet3.innerHTML="$1620";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$1730") {
wallet3.innerHTML="$1630";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$1740") {
wallet3.innerHTML="$1640";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$1750") {
wallet3.innerHTML="$1650";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$1760") {
wallet3.innerHTML="$1660";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$1770") {
wallet3.innerHTML="$1670";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$1780") {
wallet3.innerHTML="$1680";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$1790") {
wallet3.innerHTML="$1690";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$1800") {
wallet3.innerHTML="$1700";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$1810") {
wallet3.innerHTML="$1710";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$1820") {
wallet3.innerHTML="$1720";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$1830") {
wallet3.innerHTML="$1730";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$1840") {
wallet3.innerHTML="$1740";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$1850") {
wallet3.innerHTML="$1750";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$1860") {
wallet3.innerHTML="$1760";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$1870") {
wallet3.innerHTML="$1770";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$1880") {
wallet3.innerHTML="$1780";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$1890") {
wallet3.innerHTML="$1790";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$1900") {
wallet3.innerHTML="$1800";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$1910") {
wallet3.innerHTML="$1810";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$1920") {
wallet3.innerHTML="$1820";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$1930") {
wallet3.innerHTML="$1830";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$1940") {
wallet3.innerHTML="$1840";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$1950") {
wallet3.innerHTML="$1850";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$1960") {
wallet3.innerHTML="$1860";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$1970") {
wallet3.innerHTML="$1870";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$1980") {
wallet3.innerHTML="$1880";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$1990") {
wallet3.innerHTML="$1890";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$2000") {
wallet3.innerHTML="$1900";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$2010") {
wallet3.innerHTML="$1910";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$2020") {
wallet3.innerHTML="$1920";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$2030") {
wallet3.innerHTML="$1930";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$2040") {
wallet3.innerHTML="$1940";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$2050") {
wallet3.innerHTML="$1950";}
else if (back.style.background==="darkslategrey" && wallet3.innerHTML==="$2060") {
wallet3.innerHTML="$1960";}
else if (wallet3.innerHTML==="$0") {
wallet3.innerHTML="Bank rupt";}
else if (wallet3.innerHTML==="$10") {
wallet3.innerHTML="$0";}
else if (wallet3.innerHTML==="$20") {
wallet3.innerHTML="$10";}
else if (wallet3.innerHTML==="$30") {
wallet3.innerHTML="$20";}
else if (wallet3.innerHTML==="$40") {
wallet3.innerHTML="$30";}
else if (wallet3.innerHTML==="$50") {
wallet3.innerHTML="$40";}
else if (wallet3.innerHTML==="$60") {
wallet3.innerHTML="$50";}
else if (wallet3.innerHTML==="$70") {
wallet3.innerHTML="$60";}
else if (wallet3.innerHTML==="$80") {
wallet3.innerHTML="$70";}
else if (wallet3.innerHTML==="$90") {
wallet3.innerHTML="$80";}
else if (wallet3.innerHTML==="$100") {
wallet3.innerHTML="$90";}
else if (wallet3.innerHTML==="$110") {
wallet3.innerHTML="$100";}
else if (wallet3.innerHTML==="$110") {
wallet3.innerHTML="$100";}
else if (wallet3.innerHTML==="$120") {
wallet3.innerHTML="$110";}
else if (wallet3.innerHTML==="$130") {
wallet3.innerHTML="$120";}
else if (wallet3.innerHTML==="$140") {
wallet3.innerHTML="$130";}
else if (wallet3.innerHTML==="$150") {
wallet3.innerHTML="$140";}
else if (wallet3.innerHTML==="$160") {
wallet3.innerHTML="$150";}
else if (wallet3.innerHTML==="$170") {
wallet3.innerHTML="$160";}
else if (wallet3.innerHTML==="$180") {
wallet3.innerHTML="$170";}
else if (wallet3.innerHTML==="$190") {
wallet3.innerHTML="$180";}
else if (wallet3.innerHTML==="$200") {
wallet3.innerHTML="$190";}
else if (wallet3.innerHTML==="$210") {
wallet3.innerHTML="$200";}
else if (wallet3.innerHTML==="$210") {
wallet3.innerHTML="$200";}
else if (wallet3.innerHTML==="$220") {
wallet3.innerHTML="$210";}
else if (wallet3.innerHTML==="$230") {
wallet3.innerHTML="$220";}
else if (wallet3.innerHTML==="$240") {
wallet3.innerHTML="$230";}
else if (wallet3.innerHTML==="$250") {
wallet3.innerHTML="$240";}
else if (wallet3.innerHTML==="$260") {
wallet3.innerHTML="$250";}
else if (wallet3.innerHTML==="$270") {
wallet3.innerHTML="$260";}
else if (wallet3.innerHTML==="$280") {
wallet3.innerHTML="$270";}
else if (wallet3.innerHTML==="$290") {
wallet3.innerHTML="$280";}
else if (wallet3.innerHTML==="$300") {
wallet3.innerHTML="$290";}
else if (wallet3.innerHTML==="$310") {
wallet3.innerHTML="$300";}
else if (wallet3.innerHTML==="$310") {
wallet3.innerHTML="$300";}
else if (wallet3.innerHTML==="$320") {
wallet3.innerHTML="$310";}
else if (wallet3.innerHTML==="$330") {
wallet3.innerHTML="$320";}
else if (wallet3.innerHTML==="$340") {
wallet3.innerHTML="$330";}
else if (wallet3.innerHTML==="$350") {
wallet3.innerHTML="$340";}
else if (wallet3.innerHTML==="$360") {
wallet3.innerHTML="$350";}
else if (wallet3.innerHTML==="$370") {
wallet3.innerHTML="$360";}
else if (wallet3.innerHTML==="$380") {
wallet3.innerHTML="$370";}
else if (wallet3.innerHTML==="$390") {
wallet3.innerHTML="$380";}
else if (wallet3.innerHTML==="$400") {
wallet3.innerHTML="$390";}
else if (wallet3.innerHTML==="$410") {
wallet3.innerHTML="$400";}
else if (wallet3.innerHTML==="$420") {
wallet3.innerHTML="$410";}
else if (wallet3.innerHTML==="$430") {
wallet3.innerHTML="$420";}
else if (wallet3.innerHTML==="$440") {
wallet3.innerHTML="$430";}
else if (wallet3.innerHTML==="$450") {
wallet3.innerHTML="$440";}
else if (wallet3.innerHTML==="$460") {
wallet3.innerHTML="$450";}
else if (wallet3.innerHTML==="$470") {
wallet3.innerHTML="$460";}
else if (wallet3.innerHTML==="$480") {
wallet3.innerHTML="$470";}
else if (wallet3.innerHTML==="$490") {
wallet3.innerHTML="$480";}
else if (wallet3.innerHTML==="$500") {
wallet3.innerHTML="$490";}
else if (wallet3.innerHTML==="$510") {
wallet3.innerHTML="$500";}
else if (wallet3.innerHTML==="$510") {
wallet3.innerHTML="$500";}
else if (wallet3.innerHTML==="$510") {
wallet3.innerHTML="$500";}
else if (wallet3.innerHTML==="$520") {
wallet3.innerHTML="$510";}
else if (wallet3.innerHTML==="$530") {
wallet3.innerHTML="$520";}
else if (wallet3.innerHTML==="$540") {
wallet3.innerHTML="$530";}
else if (wallet3.innerHTML==="$550") {
wallet3.innerHTML="$540";}
else if (wallet3.innerHTML==="$560") {
wallet3.innerHTML="$550";}
else if (wallet3.innerHTML==="$570") {
wallet3.innerHTML="$560";}
else if (wallet3.innerHTML==="$580") {
wallet3.innerHTML="$570";}
else if (wallet3.innerHTML==="$590") {
wallet3.innerHTML="$580";}
else if (wallet3.innerHTML==="$600") {
wallet3.innerHTML="$590";}
else if (wallet3.innerHTML==="$610") {
wallet3.innerHTML="$600";}
else if (wallet3.innerHTML==="$620") {
wallet3.innerHTML="$610";}
else if (wallet3.innerHTML==="$630") {
wallet3.innerHTML="$620";}
else if (wallet3.innerHTML==="$640") {
wallet3.innerHTML="$630";}
else if (wallet3.innerHTML==="$650") {
wallet3.innerHTML="$640";}
else if (wallet3.innerHTML==="$660") {
wallet3.innerHTML="$650";}
else if (wallet3.innerHTML==="$670") {
wallet3.innerHTML="$660";}
else if (wallet3.innerHTML==="$680") {
wallet3.innerHTML="$670";}
else if (wallet3.innerHTML==="$690") {
wallet3.innerHTML="$680";}
else if (wallet3.innerHTML==="$700") {
wallet3.innerHTML="$690";}
else if (wallet3.innerHTML==="$710") {
wallet3.innerHTML="$700";}
else if (wallet3.innerHTML==="$710") {
wallet3.innerHTML="$700";}
else if (wallet3.innerHTML==="$720") {
wallet3.innerHTML="$710";}
else if (wallet3.innerHTML==="$730") {
wallet3.innerHTML="$720";}
else if (wallet3.innerHTML==="$740") {
wallet3.innerHTML="$730";}
else if (wallet3.innerHTML==="$750") {
wallet3.innerHTML="$740";}
else if (wallet3.innerHTML==="$760") {
wallet3.innerHTML="$750";}
else if (wallet3.innerHTML==="$770") {
wallet3.innerHTML="$760";}
else if (wallet3.innerHTML==="$780") {
wallet3.innerHTML="$770";}
else if (wallet3.innerHTML==="$790") {
wallet3.innerHTML="$780";}
else if (wallet3.innerHTML==="$800") {
wallet3.innerHTML="$790";}
else if (wallet3.innerHTML==="$810") {
wallet3.innerHTML="$800";}
else if (wallet3.innerHTML==="$810") {
wallet3.innerHTML="$800";}
else if (wallet3.innerHTML==="$820") {
wallet3.innerHTML="$810";}
else if (wallet3.innerHTML==="$830") {
wallet3.innerHTML="$820";}
else if (wallet3.innerHTML==="$840") {
wallet3.innerHTML="$830";}
else if (wallet3.innerHTML==="$850") {
wallet3.innerHTML="$840";}
else if (wallet3.innerHTML==="$860") {
wallet3.innerHTML="$850";}
else if (wallet3.innerHTML==="$870") {
wallet3.innerHTML="$860";}
else if (wallet3.innerHTML==="$880") {
wallet3.innerHTML="$870";}
else if (wallet3.innerHTML==="$890") {
wallet3.innerHTML="$880";}
else if (wallet3.innerHTML==="$900") {
wallet3.innerHTML="$890";}
else if (wallet3.innerHTML==="$910") {
wallet3.innerHTML="$900";}
else if (wallet3.innerHTML==="$920") {
wallet3.innerHTML="$910";}
else if (wallet3.innerHTML==="$930") {
wallet3.innerHTML="$920";}
else if (wallet3.innerHTML==="$940") {
wallet3.innerHTML="$930";}
else if (wallet3.innerHTML==="$950") {
wallet3.innerHTML="$940";}
else if (wallet3.innerHTML==="$960") {
wallet3.innerHTML="$950";}
else if (wallet3.innerHTML==="$970") {
wallet3.innerHTML="$960";}
else if (wallet3.innerHTML==="$980") {
wallet3.innerHTML="$970";}
else if (wallet3.innerHTML==="$990") {
wallet3.innerHTML="$980";}
else if (wallet3.innerHTML==="$1000") {
wallet3.innerHTML="$990";}
else if (wallet3.innerHTML==="$1010") {
wallet3.innerHTML="$1000";}
else if (wallet3.innerHTML==="$1010") {
wallet3.innerHTML="$1000";}
else if (wallet3.innerHTML==="$1020") {
wallet3.innerHTML="$1010";}
else if (wallet3.innerHTML==="$1030") {
wallet3.innerHTML="$1020";}
else if (wallet3.innerHTML==="$1040") {
wallet3.innerHTML="$1030";}
else if (wallet3.innerHTML==="$1050") {
wallet3.innerHTML="$1040";}
else if (wallet3.innerHTML==="$1060") {
wallet3.innerHTML="$1050";}
else if (wallet3.innerHTML==="$1070") {
wallet3.innerHTML="$1060";}
else if (wallet3.innerHTML==="$1080") {
wallet3.innerHTML="$1070";}
else if (wallet3.innerHTML==="$1090") {
wallet3.innerHTML="$1080";}
else if (wallet3.innerHTML==="$1100") {
wallet3.innerHTML="$1090";}
else if (wallet3.innerHTML==="$1110") {
wallet3.innerHTML="$1100";}
else if (wallet3.innerHTML==="$1110") {
wallet3.innerHTML="$1100";}
else if (wallet3.innerHTML==="$1120") {
wallet3.innerHTML="$1110";}
else if (wallet3.innerHTML==="$1130") {
wallet3.innerHTML="$1120";}
else if (wallet3.innerHTML==="$1140") {
wallet3.innerHTML="$1130";}
else if (wallet3.innerHTML==="$1150") {
wallet3.innerHTML="$1140";}
else if (wallet3.innerHTML==="$1160") {
wallet3.innerHTML="$1150";}
else if (wallet3.innerHTML==="$1170") {
wallet3.innerHTML="$1160";}
else if (wallet3.innerHTML==="$1180") {
wallet3.innerHTML="$1170";}
else if (wallet3.innerHTML==="$1190") {
wallet3.innerHTML="$1180";}
else if (wallet3.innerHTML==="$1200") {
wallet3.innerHTML="$1190";}
else if (wallet3.innerHTML==="$1210") {
wallet3.innerHTML="$1200";}
else if (wallet3.innerHTML==="$1220") {
wallet3.innerHTML="$1210";}
else if (wallet3.innerHTML==="$1230") {
wallet3.innerHTML="$1220";}
else if (wallet3.innerHTML==="$1240") {
wallet3.innerHTML="$1230";}
else if (wallet3.innerHTML==="$1250") {
wallet3.innerHTML="$1240";}
else if (wallet3.innerHTML==="$1260") {
wallet3.innerHTML="$1250";}
else if (wallet3.innerHTML==="$1270") {
wallet3.innerHTML="$1260";}
else if (wallet3.innerHTML==="$1280") {
wallet3.innerHTML="$1270";}
else if (wallet3.innerHTML==="$1290") {
wallet3.innerHTML="$1280";}
else if (wallet3.innerHTML==="$1300") {
wallet3.innerHTML="$1290";}
else if (wallet3.innerHTML==="$1310") {
wallet3.innerHTML="$1300";}
else if (wallet3.innerHTML==="$1310") {
wallet3.innerHTML="$1300";}
else if (wallet3.innerHTML==="$1320") {
wallet3.innerHTML="$1310";}
else if (wallet3.innerHTML==="$1330") {
wallet3.innerHTML="$1320";}
else if (wallet3.innerHTML==="$1340") {
wallet3.innerHTML="$1330";}
else if (wallet3.innerHTML==="$1350") {
wallet3.innerHTML="$1340";}
else if (wallet3.innerHTML==="$1360") {
wallet3.innerHTML="$1350";}
else if (wallet3.innerHTML==="$1370") {
wallet3.innerHTML="$1360";}
else if (wallet3.innerHTML==="$1380") {
wallet3.innerHTML="$1370";}
else if (wallet3.innerHTML==="$1390") {
wallet3.innerHTML="$1380";}
else if (wallet3.innerHTML==="$1400") {
wallet3.innerHTML="$1390";}
else if (wallet3.innerHTML==="$1410") {
wallet3.innerHTML="$1400";}
else if (wallet3.innerHTML==="$1420") {
wallet3.innerHTML="$1410";}
else if (wallet3.innerHTML==="$1430") {
wallet3.innerHTML="$1420";}
else if (wallet3.innerHTML==="$1440") {
wallet3.innerHTML="$1430";}
else if (wallet3.innerHTML==="$1450") {
wallet3.innerHTML="$1440";}
else if (wallet3.innerHTML==="$1460") {
wallet3.innerHTML="$1450";}
else if (wallet3.innerHTML==="$1470") {
wallet3.innerHTML="$1460";}
else if (wallet3.innerHTML==="$1480") {
wallet3.innerHTML="$1470";}
else if (wallet3.innerHTML==="$1490") {
wallet3.innerHTML="$1480";}
else if (wallet3.innerHTML==="$1500") {
wallet3.innerHTML="$1490";}
else if (wallet3.innerHTML==="$1510") {
wallet3.innerHTML="$1500";}
else if (wallet3.innerHTML==="$1510") {
wallet3.innerHTML="$1500";}
else if (wallet3.innerHTML==="$1520") {
wallet3.innerHTML="$1510";}
else if (wallet3.innerHTML==="$1530") {
wallet3.innerHTML="$1520";}
else if (wallet3.innerHTML==="$1540") {
wallet3.innerHTML="$1530";}
else if (wallet3.innerHTML==="$1550") {
wallet3.innerHTML="$1540";}
else if (wallet3.innerHTML==="$1560") {
wallet3.innerHTML="$1550";}
else if (wallet3.innerHTML==="$1570") {
wallet3.innerHTML="$1560";}
else if (wallet3.innerHTML==="$1580") {
wallet3.innerHTML="$1570";}
else if (wallet3.innerHTML==="$1590") {
wallet3.innerHTML="$1580";}
else if (wallet3.innerHTML==="$1600") {
wallet3.innerHTML="$1590";}
else if (wallet3.innerHTML==="$1610") {
wallet3.innerHTML="$1600";}
else if (wallet3.innerHTML==="$1620") {
wallet3.innerHTML="$1610";}
else if (wallet3.innerHTML==="$1630") {
wallet3.innerHTML="$1620";}
else if (wallet3.innerHTML==="$1640") {
wallet3.innerHTML="$1630";}
else if (wallet3.innerHTML==="$1650") {
wallet3.innerHTML="$1640";}
else if (wallet3.innerHTML==="$1660") {
wallet3.innerHTML="$1650";}
else if (wallet3.innerHTML==="$1670") {
wallet3.innerHTML="$1660";}
else if (wallet3.innerHTML==="$1680") {
wallet3.innerHTML="$1670";}
else if (wallet3.innerHTML==="$1690") {
wallet3.innerHTML="$1680";}
else if (wallet3.innerHTML==="$1700") {
wallet3.innerHTML="$1690";}
else if (wallet3.innerHTML==="$1710") {
wallet3.innerHTML="$1700";}
else if (wallet3.innerHTML==="$1710") {
wallet3.innerHTML="$1700";}
else if (wallet3.innerHTML==="$1720") {
wallet3.innerHTML="$1710";}
else if (wallet3.innerHTML==="$1730") {
wallet3.innerHTML="$1720";}
else if (wallet3.innerHTML==="$1740") {
wallet3.innerHTML="$1730";}
else if (wallet3.innerHTML==="$1750") {
wallet3.innerHTML="$1740";}
else if (wallet3.innerHTML==="$1760") {
wallet3.innerHTML="$1750";}
else if (wallet3.innerHTML==="$1770") {
wallet3.innerHTML="$1760";}
else if (wallet3.innerHTML==="$1780") {
wallet3.innerHTML="$1770";}
else if (wallet3.innerHTML==="$1790") {
wallet3.innerHTML="$1780";}
else if (wallet3.innerHTML==="$1800") {
wallet3.innerHTML="$1790";}
else if (wallet3.innerHTML==="$1810") {
wallet3.innerHTML="$1800";}
else if (wallet3.innerHTML==="$1810") {
wallet3.innerHTML="$1800";}
else if (wallet3.innerHTML==="$1820") {
wallet3.innerHTML="$1810";}
else if (wallet3.innerHTML==="$1830") {
wallet3.innerHTML="$1820";}
else if (wallet3.innerHTML==="$1840") {
wallet3.innerHTML="$1830";}
else if (wallet3.innerHTML==="$1850") {
wallet3.innerHTML="$1840";}
else if (wallet3.innerHTML==="$1860") {
wallet3.innerHTML="$1850";}
else if (wallet3.innerHTML==="$1870") {
wallet3.innerHTML="$1860";}
else if (wallet3.innerHTML==="$1880") {
wallet3.innerHTML="$1870";}
else if (wallet3.innerHTML==="$1890") {
wallet3.innerHTML="$1880";}
else if (wallet3.innerHTML==="$1900") {
wallet3.innerHTML="$1890";}
else if (wallet3.innerHTML==="$1910") {
wallet3.innerHTML="$1900";}
else if (wallet3.innerHTML==="$1910") {
wallet3.innerHTML="$1900";}
else if (wallet3.innerHTML==="$1920") {
wallet3.innerHTML="$1910";}
else if (wallet3.innerHTML==="$1930") {
wallet3.innerHTML="$1920";}
else if (wallet3.innerHTML==="$1940") {
wallet3.innerHTML="$1930";}
else if (wallet3.innerHTML==="$1950") {
wallet3.innerHTML="$1940";}
else if (wallet3.innerHTML==="$1960") {
wallet3.innerHTML="$1950";}
else if (wallet3.innerHTML==="$1970") {
wallet3.innerHTML="$1960";}
else if (wallet3.innerHTML==="$1980") {
wallet3.innerHTML="$1970";}
else if (wallet3.innerHTML==="$1990") {
wallet3.innerHTML="$1980";}
else if (wallet3.innerHTML==="$2000") {
wallet3.innerHTML="$1990";}
else if (wallet3.innerHTML==="$2010") {
wallet3.innerHTML="$2000";}
else if (wallet3.innerHTML==="$2020") {
wallet3.innerHTML="$2010";}
else if (wallet3.innerHTML==="$2030") {
wallet3.innerHTML="$2020";}
else if (wallet3.innerHTML==="$2040") {
wallet3.innerHTML="$2030";}
else if (wallet3.innerHTML==="$2050") {
wallet3.innerHTML="$2040";}
else if (wallet3.innerHTML==="$2060") {
wallet3.innerHTML="$2050";}}

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

function times1() {
var one=document.getElementById("oneM");
var three=document.getElementById("timesOne");
var back=document.getElementById("timesBack1");
var two=document.getElementById("twoM");
var four=document.getElementById("threeM");
var sell1=document.getElementById("sel1");
var sell2=document.getElementById("sel2");
var sell3=document.getElementById("sel3");
if (sell1.style.background==="grey" && three.innerHTML==="x30") 
{back.style.background="grey";
three.innerHTML="Sold P1";}
else if (three.innerHTML==="Sold P1" && sell1.style.background==="black") 
{back.style.background="red";
three.innerHTML="x30";}
else if (three.innerHTML==="Sold P1" && sell2.style.background==="black") 
{back.style.background="purple";
three.innerHTML="x30";}
else if (three.innerHTML==="Sold P1" && sell3.style.background==="black") 
{back.style.background="green";
three.innerHTML="x30";}
else if (sell2.style.background==="grey" && three.innerHTML==="x30") 
{back.style.background="grey";
three.innerHTML="Sold P2";}
else if (three.innerHTML==="Sold P2" && sell1.style.background==="black") 
{back.style.background="red";
three.innerHTML="x30";}
else if (three.innerHTML==="Sold P2" && sell2.style.background==="black") 
{back.style.background="purple";
three.innerHTML="x30";}
else if (three.innerHTML==="Sold P2" && sell3.style.background==="black") 
{back.style.background="green";
three.innerHTML="x30";}
else if (sell3.style.background==="grey" && three.innerHTML==="x30") 
{back.style.background="grey";
three.innerHTML="Sold P3";}
else if (three.innerHTML==="Sold P3" && sell1.style.background==="black") 
{back.style.background="red";
three.innerHTML="x30";}
else if (three.innerHTML==="Sold P3" && sell2.style.background==="black") 
{back.style.background="purple";
three.innerHTML="x30";}
else if (three.innerHTML==="Sold P3" && sell3.style.background==="black") 
{back.style.background="green";
three.innerHTML="x30";}
else if (sell1.style.background==="white" && back.style.background==="red") {
three.innerHTML="x30 $100";
back.style.background="yellow";}
else if (sell2.style.background==="white" && back.style.background==="purple") {
three.innerHTML="x30 $100";
back.style.background="yellow";}
else if (sell3.style.background==="white" && back.style.background==="green") {
three.innerHTML="x30 $100";
back.style.background="yellow";}
else if (back.style.background==="red") {
back.style.background="purple";}
else if (back.style.background==="purple") {
back.style.background="green";}
else if (back.style.background==="green") {
back.style.background="red";}
else if (one.innerHTML==="One" && back.style.background==="yellow") {
three.innerHTML="x30";
back.style.background="red";}
else if (one.innerHTML==="Pink" && back.style.background==="yellow") {
three.innerHTML="x30";
back.style.background="red";}
else if (one.innerHTML==="Red" && back.style.background==="yellow") {
three.innerHTML="x30";
back.style.background="red";}
else if (one.innerHTML==="Yellow" && back.style.background==="yellow") {
three.innerHTML="x30";
back.style.background="red";}
else if (two.innerHTML==="Two" && back.style.background==="yellow") {
three.innerHTML="x30";
back.style.background="purple";}
else if (two.innerHTML==="Pink" && back.style.background==="yellow") {
three.innerHTML="x30";
back.style.background="purple";}
else if (two.innerHTML==="Red" && back.style.background==="yellow") {
three.innerHTML="x30";
back.style.background="purple";}
else if (two.innerHTML==="Yellow" && back.style.background==="yellow") {
three.innerHTML="x30";
back.style.background="purple";}
else if (four.innerHTML==="Three" && back.style.background==="yellow") {
three.innerHTML="x30";
back.style.background="green";}
else if (four.innerHTML==="Pink" && back.style.background==="yellow") {
three.innerHTML="x30";
back.style.background="green";}
else if (four.innerHTML==="Red" && back.style.background==="yellow") {
three.innerHTML="x30";
back.style.background="green";}
else if (four.innerHTML==="Yellow" && back.style.background==="yellow") {
three.innerHTML="x30";
back.style.background="green";}}

function times2() {
var one=document.getElementById("done");
var three=document.getElementById("timesTwo");
var back=document.getElementById("timesBack2");
var two=document.getElementById("dtwo");
var four=document.getElementById("dthree");
var sell1=document.getElementById("sel1");
var sell2=document.getElementById("sel2");
var sell3=document.getElementById("sel3");
if (sell1.style.background==="grey" && three.innerHTML==="x40") 
{back.style.background="grey";
three.innerHTML="Sold P1";}
else if (three.innerHTML==="Sold P1" && sell1.style.background==="black") 
{back.style.background="red";
three.innerHTML="x40";}
else if (three.innerHTML==="Sold P1" && sell2.style.background==="black") 
{back.style.background="purple";
three.innerHTML="x40";}
else if (three.innerHTML==="Sold P1" && sell3.style.background==="black") 
{back.style.background="green";
three.innerHTML="x40";}
else if (sell2.style.background==="grey" && three.innerHTML==="x40") 
{back.style.background="grey";
three.innerHTML="Sold P2";}
else if (three.innerHTML==="Sold P2" && sell1.style.background==="black") 
{back.style.background="red";
three.innerHTML="x40";}
else if (three.innerHTML==="Sold P2" && sell2.style.background==="black") 
{back.style.background="purple";
three.innerHTML="x40";}
else if (three.innerHTML==="Sold P2" && sell3.style.background==="black") 
{back.style.background="green";
three.innerHTML="x40";}
else if (sell3.style.background==="grey" && three.innerHTML==="x40") 
{back.style.background="grey";
three.innerHTML="Sold P3";}
else if (three.innerHTML==="Sold P3" && sell1.style.background==="black") 
{back.style.background="red";
three.innerHTML="x40";}
else if (three.innerHTML==="Sold P3" && sell2.style.background==="black") 
{back.style.background="purple";
three.innerHTML="x40";}
else if (three.innerHTML==="Sold P3" && sell3.style.background==="black") 
{back.style.background="green";
three.innerHTML="x40";}
else if (sell1.style.background==="white" && back.style.background==="red") {
three.innerHTML="x40 $100";
back.style.background="yellow";}
else if (sell2.style.background==="white" && back.style.background==="purple") {
three.innerHTML="x40 $100";
back.style.background="yellow";}
else if (sell3.style.background==="white" && back.style.background==="green") {
three.innerHTML="x40 $100";
back.style.background="yellow";}
else if (back.style.background==="red") {
back.style.background="purple";}
else if (back.style.background==="purple") {
back.style.background="green";}
else if (back.style.background==="green") {
back.style.background="red";}
else if (one.innerHTML==="One" && back.style.background==="yellow") {
three.innerHTML="x40";
back.style.background="red";}
else if (one.innerHTML==="Pink" && back.style.background==="yellow") {
three.innerHTML="x40";
back.style.background="red";}
else if (one.innerHTML==="Red" && back.style.background==="yellow") {
three.innerHTML="x40";
back.style.background="red";}
else if (one.innerHTML==="Yellow" && back.style.background==="yellow") {
three.innerHTML="x40";
back.style.background="red";}
else if (two.innerHTML==="Two" && back.style.background==="yellow") {
three.innerHTML="x40";
back.style.background="purple";}
else if (two.innerHTML==="Pink" && back.style.background==="yellow") {
three.innerHTML="x40";
back.style.background="purple";}
else if (two.innerHTML==="Red" && back.style.background==="yellow") {
three.innerHTML="x40";
back.style.background="purple";}
else if (two.innerHTML==="Yellow" && back.style.background==="yellow") {
three.innerHTML="x40";
back.style.background="purple";}
else if (four.innerHTML==="Three" && back.style.background==="yellow") {
three.innerHTML="x40";
back.style.background="green";}
else if (four.innerHTML==="Pink" && back.style.background==="yellow") {
three.innerHTML="x40";
back.style.background="green";}
else if (four.innerHTML==="Red" && back.style.background==="yellow") {
three.innerHTML="x40";
back.style.background="green";}
else if (four.innerHTML==="Yellow" && back.style.background==="yellow") {
three.innerHTML="x40";
back.style.background="green";}}

function drunkTank() {
var jailStartOne=document.getElementById("oneX");
var jailStartTwo=document.getElementById("twoX");
var jailOne=document.getElementById("oneH");
var jailTwo=document.getElementById("twoH");
var jailStartThree=document.getElementById("threeX");
var jailThree=document.getElementById("threeH");
var lock=document.getElementById("id24");
if (jailStartOne.innerHTML==="One") {
jailStartOne.innerHTML="";
jailOne.innerHTML="One";
lock.style.background="silver";
jailOne.style.color="black";}
else if (jailStartOne.innerHTML==="Red") {
jailStartOne.innerHTML="";
jailOne.innerHTML="Red";
lock.style.backround="silver";
jailOne.style.color="black";}
else if (jailStartOne.innerHTML==="Yellow") {
jailStartOne.innerHTML="";
jailOne.innerHTML="Yellow";
lock.style.background="silver";
jailOne.style.color="black";}
else if (jailStartOne.innerHTML==="Pink") {
jailStartOne.innerHTML="";
jailOne.innerHTML="Pink";
lock.style.background="silver";
jailOne.style.color="black";}
else if (jailStartTwo.innerHTML==="Two") {
jailStartTwo.innerHTML="";
jailTwo.innerHTML="Two";
lock.style.background="silver";
jailTwo.style.color="black";}
else if (jailStartTwo.innerHTML==="Red") {
jailStartTwo.innerHTML="";
jailTwo.innerHTML="Red";
lock.style.background="silver";
jailTwo.style.color="black";}
else if (jailStartTwo.innerHTML==="Yellow") {
jailStartTwo.innerHTML="";
jailTwo.innerHTML="Yellow";
lock.style.background="silver";
jailTwo.style.color="black";}
else if (jailStartTwo.innerHTML==="Pink") {
jailStartTwo.innerHTML="";
jailTwo.innerHTML="Pink";
lock.style.background="silver";
jailTwo.style.color="black";}
else if (jailStartThree.innerHTML==="Three") {
jailStartThree.innerHTML="";
jailThree.innerHTML="Three";
lock.style.background="silver";
jailThree.style.color="black";}
else if (jailStartThree.innerHTML==="Red") {
jailStartThree.innerHTML="";
jailThree.innerHTML="Red";
lock.style.background="silver";
jailThree.style.color="black";}
else if (jailStartThree.innerHTML==="Yellow") {
jailStartThree.innerHTML="";
jailThree.innerHTML="Yellow";
lock.style.background="silver";
jailThree.style.color="black";}
else if (jailStartThree.innerHTML==="Pink") {
jailStartThree.innerHTML="";
jailThree.innerHTML="Pink";
lock.style.background="silver";
jailThree.style.color="black";}}

function start1() {
var startOne=document.getElementById("cone");
var startTwo=document.getElementById("ctwo");
var homeOne=document.getElementById("oneA");
var homeTwo=document.getElementById("twoA");
var startThree=document.getElementById("cthree");
var homeThree=document.getElementById("threeA");
if (startOne.innerHTML==="One") {
startOne.innerHTML="";
homeOne.innerHTML="One";}
else if (startOne.innerHTML==="Red") {
startOne.innerHTML="";
homeOne.innerHTML="Red";}
else if (startOne.innerHTML==="Yellow") {
startOne.innerHTML="";
homeOne.innerHTML="Yellow";}
else if (startOne.innerHTML==="Pink") {
startOne.innerHTML="";
homeOne.innerHTML="Pink";}
else if (startTwo.innerHTML==="Two") {
startTwo.innerHTML="";
homeTwo.innerHTML="Two";}
else if (startTwo.innerHTML==="Red") {
startTwo.innerHTML="";
homeTwo.innerHTML="Red";}
else if (startTwo.innerHTML==="Yellow") {
startTwo.innerHTML="";
homeTwo.innerHTML="Yellow";}
else if (startTwo.innerHTML==="Pink") {
startTwo.innerHTML="";
homeTwo.innerHTML="Pink";}
else if (startThree.innerHTML==="Three") {
starThree.innerHTML="";
homeThree.innerHTML="Three";}
else if (startThree.innerHTML==="Red") {
startThree.innerHTML="";
homeThree.innerHTML="Red";}
else if (startThree.innerHTML==="Yellow") {
startThree.innerHTML="";
homeThree.innerHTML="Yellow";}
else if (startThree.innerHTML==="Pink") {
startThree.innerHTML="";
homeThree.innerHTML="Pink";}}

function start2() {
var startOne=document.getElementById("oneL");
var startTwo=document.getElementById("twoL");
var homeOne=document.getElementById("oneA");
var homeTwo=document.getElementById("twoA");
var startThree=document.getElementById("threeL");
var homeThree=document.getElementById("threeA");
if (startOne.innerHTML==="One") {
startOne.innerHTML="";
homeOne.innerHTML="One";}
else if (startOne.innerHTML==="Red") {
startOne.innerHTML="";
homeOne.innerHTML="Red";}
else if (startOne.innerHTML==="Yellow") {
startOne.innerHTML="";
homeOne.innerHTML="Yellow";}
else if (startOne.innerHTML==="Pink") {
startOne.innerHTML="";
homeOne.innerHTML="Pink";}
else if (startTwo.innerHTML==="Two") {
startTwo.innerHTML="";
homeTwo.innerHTML="Two";}
else if (startTwo.innerHTML==="Red") {
startTwo.innerHTML="";
homeTwo.innerHTML="Red";}
else if (startTwo.innerHTML==="Yellow") {
startTwo.innerHTML="";
homeTwo.innerHTML="Yellow";}
else if (startTwo.innerHTML==="Pink") {
startTwo.innerHTML="";
homeTwo.innerHTML="Pink";}
else if (startThree.innerHTML==="Three") {
startThree.innerHTML="";
homeThree.innerHTML="Three";}
else if (startThree.innerHTML==="Red") {
startThree.innerHTML="";
homeThree.innerHTML="Red";}
else if (startThree.innerHTML==="Yellow") {
startThree.innerHTML="";
homeThree.innerHTML="Yellow";}
else if (startThree.innerHTML==="Pink") {
startThree.innerHTML="";
homeThree.innerHTML="Pink";}}

function plum1() {
var one=document.getElementById("oneB");
var three=document.getElementById("plumOne");
var back=document.getElementById("plumBack1");
var two=document.getElementById("twoB");
var four=document.getElementById("threeB");
var toggle1=document.getElementById("tog1");
var toggle2=document.getElementById("tog2");
var toggle3=document.getElementById("tog3");
var sell1=document.getElementById("sel1");
var sell2=document.getElementById("sel2");
var sell3=document.getElementById("sel3");
if (sell1.style.background==="grey" && three.innerHTML==="Rent $20") 
{back.style.background="grey";
three.innerHTML="Sold P1";}
else if (three.innerHTML==="Sold P1" && sell1.style.background==="black") 
{back.style.background="red";
three.innerHTML="Rent $20";}
else if (three.innerHTML==="Sold P1" && sell2.style.background==="black") 
{back.style.background="purple";
three.innerHTML="Rent $20";}
else if (three.innerHTML==="Sold P1" && sell3.style.background==="black") 
{back.style.background="green";
three.innerHTML="Rent $20";}
else if (sell2.style.background==="grey" && three.innerHTML==="Rent $20") 
{back.style.background="grey";
three.innerHTML="Sold P2";}
else if (three.innerHTML==="Sold P2" && sell1.style.background==="black") 
{back.style.background="red";
three.innerHTML="Rent $20";}
else if (three.innerHTML==="Sold P2" && sell2.style.background==="black") 
{back.style.background="purple";
three.innerHTML="Rent $20";}
else if (three.innerHTML==="Sold P2" && sell3.style.background==="black") 
{back.style.background="green";
three.innerHTML="Rent $20";}
else if (sell3.style.background==="grey" && three.innerHTML==="Rent $20") 
{back.style.background="grey";
three.innerHTML="Sold P3";}
else if (three.innerHTML==="Sold P3" && sell1.style.background==="black") 
{back.style.background="red";
three.innerHTML="Rent $20";}
else if (three.innerHTML==="Sold P3" && sell2.style.background==="black") 
{back.style.background="purple";
three.innerHTML="Rent $20";}
else if (three.innerHTML==="Sold P3" && sell3.style.background==="black") 
{back.style.background="green";
three.innerHTML="Rent $20";}
else if (sell1.style.background==="white" && three.innerHTML==="Rent $20") {
three.innerHTML="Plum $60";
back.style.background="orange";}
else if (sell2.style.background==="white" && three.innerHTML==="Rent $20") {
three.innerHTML="Plum $60";
back.style.background="orange";}
else if (sell3.style.background==="white" && three.innerHTML==="Rent $20") {
three.innerHTML="Plum $60";
back.style.background="orange";}
else if (back.style.background==="red") {
back.style.background="purple";}
else if (back.style.background==="purple") {
back.style.background="green";}
else if (back.style.background==="green") {
back.style.background="red";}
else if (one.innerHTML==="One" && back.style.background==="orange") {
three.innerHTML="Rent $20";
back.style.background="red";}
else if (one.innerHTML==="Pink" && back.style.background==="orange") {
three.innerHTML="Rent $20";
back.style.background="red";}
else if (one.innerHTML==="Red" && back.style.background==="orange") {
three.innerHTML="Rent $20";
back.style.background="red";}
else if (one.innerHTML==="Yellow" && back.style.background==="orange") {
three.innerHTML="Rent $20";
back.style.background="red";}
else if (two.innerHTML==="Two" && back.style.background==="orange") {
three.innerHTML="Rent $20";
back.style.background="purple";}
else if (two.innerHTML==="Pink" && back.style.background==="orange") {
three.innerHTML="Rent $20";
back.style.background="purple";}
else if (two.innerHTML==="Red" && back.style.background==="orange") {
three.innerHTML="Rent $20";
back.style.background="purple";}
else if (two.innerHTML==="Yellow" && back.style.background==="orange") {
three.innerHTML="Rent $20";
back.style.background="purple";}
else if (four.innerHTML==="Pink" && back.style.background==="orange") {
three.innerHTML="Rent $20";
back.style.background="green";}
else if (four.innerHTML==="Red" && back.style.background==="orange") {
three.innerHTML="Rent $20";
back.style.background="green";}
else if (four.innerHTML==="Yellow" && back.style.background==="orange") {
three.innerHTML="Rent $20";
back.style.background="green";}
else if (four.innerHTML==="Three" && back.style.background==="orange") {
three.innerHTML="Rent $20";
back.style.background="green";}}

function plum2() {
var one=document.getElementById("oneC");
var three=document.getElementById("plumTwo");
var back=document.getElementById("plumBack2");
var two=document.getElementById("twoC");
var four=document.getElementById("threeC");
var sell1=document.getElementById("sel1");
var sell2=document.getElementById("sel2");
var sell3=document.getElementById("sel3");
if (sell1.style.background==="grey" && three.innerHTML==="Rent $20") 
{back.style.background="grey";
three.innerHTML="Sold P1";}
else if (three.innerHTML==="Sold P1" && sell1.style.background==="black") 
{back.style.background="red";
three.innerHTML="Rent $20";}
else if (three.innerHTML==="Sold P1" && sell2.style.background==="black") 
{back.style.background="purple";
three.innerHTML="Rent $20";}
else if (three.innerHTML==="Sold P1" && sell3.style.background==="black") 
{back.style.background="green";
three.innerHTML="Rent $20";}
else if (sell2.style.background==="grey" && three.innerHTML==="Rent $20") 
{back.style.background="grey";
three.innerHTML="Sold P2";}
else if (three.innerHTML==="Sold P2" && sell1.style.background==="black") 
{back.style.background="red";
three.innerHTML="Rent $20";}
else if (three.innerHTML==="Sold P2" && sell2.style.background==="black") 
{back.style.background="purple";
three.innerHTML="Rent $20";}
else if (three.innerHTML==="Sold P2" && sell3.style.background==="black") 
{back.style.background="green";
three.innerHTML="Rent $20";}
else if (sell3.style.background==="grey" && three.innerHTML==="Rent $20") 
{back.style.background="grey";
three.innerHTML="Sold P3";}
else if (three.innerHTML==="Sold P3" && sell1.style.background==="black") 
{back.style.background="red";
three.innerHTML="Rent $20";}
else if (three.innerHTML==="Sold P3" && sell2.style.background==="black") 
{back.style.background="purple";
three.innerHTML="Rent $20";}
else if (three.innerHTML==="Sold P3" && sell3.style.background==="black") 
{back.style.background="green";
three.innerHTML="Rent $20";}
else if (sell1.style.background==="white" && three.innerHTML==="Rent $20") {
three.innerHTML="Plum $80";
back.style.background="orange";}
else if (sell2.style.background==="white" && three.innerHTML==="Rent $20") {
three.innerHTML="Plum $80";
back.style.background="orange";}
else if (sell3.style.background==="white" && three.innerHTML==="Rent $20") {
three.innerHTML="Plum $80";
back.style.background="orange";}
else if (back.style.background==="red") {
back.style.background="purple";}
else if (back.style.background==="purple") {
back.style.background="green";}
else if (back.style.background==="green") {
back.style.background="red";}
else if (two.innerHTML==="Two" && back.style.background==="orange") {
three.innerHTML="Rent $20";
back.style.background="purple";}
else if (one.innerHTML==="One" && back.style.background==="orange") {
three.innerHTML="Rent $20";
back.style.background="red";}
else if (one.innerHTML==="Pink" && back.style.background==="orange") {
three.innerHTML="Rent $20";
back.style.background="red";}
else if (one.innerHTML==="Red" && back.style.background==="orange") {
three.innerHTML="Rent $20";
back.style.background="red";}
else if (one.innerHTML==="Yellow" && back.style.background==="orange") {
three.innerHTML="Rent $20";
back.style.background="red";}
else if (two.innerHTML==="Pink" && back.style.background==="orange") {
three.innerHTML="Rent $20";
back.style.background="purple";}
else if (two.innerHTML==="Red" && back.style.background==="orange") {
three.innerHTML="Rent $20";
back.style.background="purple";}
else if (two.innerHTML==="Yellow" && back.style.background==="orange") {
three.innerHTML="Rent $20";
back.style.background="purple";}
else if (four.innerHTML==="Pink" && back.style.background==="orange") {
three.innerHTML="Rent $20";
back.style.background="green";}
else if (four.innerHTML==="Red" && back.style.background==="orange") {
three.innerHTML="Rent $20";
back.style.background="green";}
else if (four.innerHTML==="Yellow" && back.style.background==="orange") {
three.innerHTML="Rent $20";
back.style.background="green";}
else if (four.innerHTML==="Three" && back.style.background==="orange") {
three.innerHTML="Rent $20";
back.style.background="green";}}

function teal1() {
var one=document.getElementById("oneE");
var three=document.getElementById("tealOne");
var back=document.getElementById("tealBack1");
var two=document.getElementById("twoE");
var four=document.getElementById("threeE");
var sell1=document.getElementById("sel1");
var sell2=document.getElementById("sel2");
var sell3=document.getElementById("sel3");
if (sell1.style.background==="grey" && three.innerHTML==="Rent $30") 
{back.style.background="grey";
three.innerHTML="Sold P1";}
else if (three.innerHTML==="Sold P1" && sell1.style.background==="black") 
{back.style.background="red";
three.innerHTML="Rent $30";}
else if (three.innerHTML==="Sold P1" && sell2.style.background==="black") 
{back.style.background="purple";
three.innerHTML="Rent $30";}
else if (three.innerHTML==="Sold P1" && sell3.style.background==="black") 
{back.style.background="green";
three.innerHTML="Rent $30";}
else if (sell2.style.background==="grey" && three.innerHTML==="Rent $30") 
{back.style.background="grey";
three.innerHTML="Sold P2";}
else if (three.innerHTML==="Sold P2" && sell1.style.background==="black") 
{back.style.background="red";
three.innerHTML="Rent $30";}
else if (three.innerHTML==="Sold P2" && sell2.style.background==="black") 
{back.style.background="purple";
three.innerHTML="Rent $30";}
else if (three.innerHTML==="Sold P2" && sell3.style.background==="black") 
{back.style.background="green";
three.innerHTML="Rent $30";}
else if (sell3.style.background==="grey" && three.innerHTML==="Rent $30") 
{back.style.background="grey";
three.innerHTML="Sold P3";}
else if (three.innerHTML==="Sold P3" && sell1.style.background==="black") 
{back.style.background="red";
three.innerHTML="Rent $30";}
else if (three.innerHTML==="Sold P3" && sell2.style.background==="black") 
{back.style.background="purple";
three.innerHTML="Rent $30";}
else if (three.innerHTML==="Sold P3" && sell3.style.background==="black") 
{back.style.background="green";
three.innerHTML="Rent $30";}
else if (sell1.style.background==="white" && three.innerHTML==="Rent $30") {
three.innerHTML="Teal $100";
back.style.background="orange";}
else if (sell2.style.background==="white" && three.innerHTML==="Rent $30") {
three.innerHTML="Teal $100";
back.style.background="orange";}
else if (sell3.style.background==="white" && three.innerHTML==="Rent $30") {
three.innerHTML="Teal $100";
back.style.background="orange";}
else if (back.style.background==="red") {
back.style.background="purple";}
else if (back.style.background==="purple") {
back.style.background="green";}
else if (back.style.background==="green") {
back.style.background="red";}
else if (two.innerHTML==="Two" && back.style.background==="orange") {
three.innerHTML="Rent $30";
back.style.background="purple";}
else if (one.innerHTML==="One" && back.style.background==="orange") {
three.innerHTML="Rent $30";
back.style.background="red";}
else if (one.innerHTML==="Pink" && back.style.background==="orange") {
three.innerHTML="Rent $30";
back.style.background="red";}
else if (one.innerHTML==="Red" && back.style.background==="orange") {
three.innerHTML="Rent $30";
back.style.background="red";}
else if (one.innerHTML==="Yellow" && back.style.background==="orange") {
three.innerHTML="Rent $30";
back.style.background="red";}
else if (two.innerHTML==="Pink" && back.style.background==="orange") {
three.innerHTML="Rent $30";
back.style.background="purple";}
else if (two.innerHTML==="Red" && back.style.background==="orange") {
three.innerHTML="Rent $30";
back.style.background="purple";}
else if (two.innerHTML==="Yellow" && back.style.background==="orange") {
three.innerHTML="Rent $30";
back.style.background="purple";}
else if (four.innerHTML==="Pink" && back.style.background==="orange") {
three.innerHTML="Rent $30";
back.style.background="green";}
else if (four.innerHTML==="Red" && back.style.background==="orange") {
three.innerHTML="Rent $30";
back.style.background="green";}
else if (four.innerHTML==="Yellow" && back.style.background==="orange") {
three.innerHTML="Rent $30";
back.style.background="green";}
else if (four.innerHTML==="Three" && back.style.background==="orange") {
three.innerHTML="Rent $30";
back.style.background="green";}}

function teal2() {
var one=document.getElementById("oneF");
var three=document.getElementById("tealTwo");
var back=document.getElementById("tealBack2");
var two=document.getElementById("twoF");
var four=document.getElementById("threeF");
var sell1=document.getElementById("sel1");
var sell2=document.getElementById("sel2");
var sell3=document.getElementById("sel3");
if (sell1.style.background==="grey" && three.innerHTML==="Rent $30") 
{back.style.background="grey";
three.innerHTML="Sold P1";}
else if (three.innerHTML==="Sold P1" && sell1.style.background==="black") 
{back.style.background="red";
three.innerHTML="Rent $30";}
else if (three.innerHTML==="Sold P1" && sell2.style.background==="black") 
{back.style.background="purple";
three.innerHTML="Rent $30";}
else if (three.innerHTML==="Sold P1" && sell3.style.background==="black") 
{back.style.background="green";
three.innerHTML="Rent $30";}
else if (sell2.style.background==="grey" && three.innerHTML==="Rent $30") 
{back.style.background="grey";
three.innerHTML="Sold P2";}
else if (three.innerHTML==="Sold P2" && sell1.style.background==="black") 
{back.style.background="red";
three.innerHTML="Rent $30";}
else if (three.innerHTML==="Sold P2" && sell2.style.background==="black") 
{back.style.background="purple";
three.innerHTML="Rent $30";}
else if (three.innerHTML==="Sold P2" && sell3.style.background==="black") 
{back.style.background="green";
three.innerHTML="Rent $30";}
else if (sell3.style.background==="grey" && three.innerHTML==="Rent $30") 
{back.style.background="grey";
three.innerHTML="Sold P3";}
else if (three.innerHTML==="Sold P3" && sell1.style.background==="black") 
{back.style.background="red";
three.innerHTML="Rent $30";}
else if (three.innerHTML==="Sold P3" && sell2.style.background==="black") 
{back.style.background="purple";
three.innerHTML="Rent $30";}
else if (three.innerHTML==="Sold P3" && sell3.style.background==="black") 
{back.style.background="green";
three.innerHTML="Rent $30";}
else if (sell1.style.background==="white" && three.innerHTML==="Rent $30") {
three.innerHTML="Teal $100";
back.style.background="orange";}
else if (sell2.style.background==="white" && three.innerHTML==="Rent $30") {
three.innerHTML="Teal $100";
back.style.background="orange";}
else if (sell3.style.background==="white" && three.innerHTML==="Rent $30") {
three.innerHTML="Teal $100";
back.style.background="orange";}
else if (back.style.background==="red") {
back.style.background="purple";}
else if (back.style.background==="purple") {
back.style.background="green";}
else if (back.style.background==="green") {
back.style.background="red";}
else if (two.innerHTML==="Two" && back.style.background==="orange") {
three.innerHTML="Rent $30";
back.style.background="purple";}
else if (one.innerHTML==="One" && back.style.background==="orange") {
three.innerHTML="Rent $30";
back.style.background="red";}
else if (one.innerHTML==="Pink" && back.style.background==="orange") {
three.innerHTML="Rent $30";
back.style.background="red";}
else if (one.innerHTML==="Red" && back.style.background==="orange") {
three.innerHTML="Rent $30";
back.style.background="red";}
else if (one.innerHTML==="Yellow" && back.style.background==="orange") {
three.innerHTML="Rent $30";
back.style.background="red";}
else if (two.innerHTML==="Pink" && back.style.background==="orange") {
three.innerHTML="Rent $30";
back.style.background="purple";}
else if (two.innerHTML==="Red" && back.style.background==="orange") {
three.innerHTML="Rent $30";
back.style.background="purple";}
else if (two.innerHTML==="Yellow" && back.style.background==="orange") {
three.innerHTML="Rent $30";
back.style.background="purple";}
else if (four.innerHTML==="Pink" && back.style.background==="orange") {
three.innerHTML="Rent $30";
back.style.background="green";}
else if (four.innerHTML==="Red" && back.style.background==="orange") {
three.innerHTML="Rent $30";
back.style.background="green";}
else if (four.innerHTML==="Yellow" && back.style.background==="orange") {
three.innerHTML="Rent $30";
back.style.background="green";}
else if (four.innerHTML==="Three" && back.style.background==="orange") {
three.innerHTML="Rent $30";
back.style.background="green";}}

function teal3() {
var one=document.getElementById("oneG");
var three=document.getElementById("tealThree");
var back=document.getElementById("tealBack3");
var two=document.getElementById("twoG");
var four=document.getElementById("threeG");
var sell1=document.getElementById("sel1");
var sell2=document.getElementById("sel2");
var sell3=document.getElementById("sel3");
if (sell1.style.background==="grey" && three.innerHTML==="Rent $40") 
{back.style.background="grey";
three.innerHTML="Sold P1";}
else if (three.innerHTML==="Sold P1" && sell1.style.background==="black") 
{back.style.background="red";
three.innerHTML="Rent $40";}
else if (three.innerHTML==="Sold P1" && sell2.style.background==="black") 
{back.style.background="purple";
three.innerHTML="Rent $40";}
else if (three.innerHTML==="Sold P1" && sell3.style.background==="black") 
{back.style.background="green";
three.innerHTML="Rent $40";}
else if (sell2.style.background==="grey" && three.innerHTML==="Rent $40") 
{back.style.background="grey";
three.innerHTML="Sold P2";}
else if (three.innerHTML==="Sold P2" && sell1.style.background==="black") 
{back.style.background="red";
three.innerHTML="Rent $40";}
else if (three.innerHTML==="Sold P2" && sell2.style.background==="black") 
{back.style.background="purple";
three.innerHTML="Rent $40";}
else if (three.innerHTML==="Sold P2" && sell3.style.background==="black") 
{back.style.background="green";
three.innerHTML="Rent $40";}
else if (sell3.style.background==="grey" && three.innerHTML==="Rent $40") 
{back.style.background="grey";
three.innerHTML="Sold P3";}
else if (three.innerHTML==="Sold P3" && sell1.style.background==="black") 
{back.style.background="red";
three.innerHTML="Rent $40";}
else if (three.innerHTML==="Sold P3" && sell2.style.background==="black") 
{back.style.background="purple";
three.innerHTML="Rent $40";}
else if (three.innerHTML==="Sold P3" && sell3.style.background==="black") 
{back.style.background="green";
three.innerHTML="Rent $40";}
else if (sell1.style.background==="white" && three.innerHTML==="Rent $40") {
three.innerHTML="Teal $120";
back.style.background="orange";}
else if (sell2.style.background==="white" && three.innerHTML==="Rent $40") {
three.innerHTML="Teal $120";
back.style.background="orange";}
else if (sell3.style.background==="white" && three.innerHTML==="Rent $40") {
three.innerHTML="Teal $120";
back.style.background="orange";}
else if (back.style.background==="red") {
back.style.background="purple";}
else if (back.style.background==="purple") {
back.style.background="green";}
else if (back.style.background==="green") {
back.style.background="red";}
else if (two.innerHTML==="Two" && back.style.background==="orange") {
three.innerHTML="Rent $40";
back.style.background="purple";}
else if (one.innerHTML==="One" && back.style.background==="orange") {
three.innerHTML="Rent $40";
back.style.background="red";}
else if (one.innerHTML==="Pink" && back.style.background==="orange") {
three.innerHTML="Rent $40";
back.style.background="red";}
else if (one.innerHTML==="Red" && back.style.background==="orange") {
three.innerHTML="Rent $40";
back.style.background="red";}
else if (one.innerHTML==="Yellow" && back.style.background==="orange") {
three.innerHTML="Rent $40";
back.style.background="red";}
else if (two.innerHTML==="Pink" && back.style.background==="orange") {
three.innerHTML="Rent $40";
back.style.background="purple";}
else if (two.innerHTML==="Red" && back.style.background==="orange") {
three.innerHTML="Rent $40";
back.style.background="purple";}
else if (two.innerHTML==="Yellow" && back.style.background==="orange") {
three.innerHTML="Rent $40";
back.style.background="purple";}
else if (four.innerHTML==="Pink" && back.style.background==="orange") {
three.innerHTML="Rent $40";
back.style.background="green";}
else if (four.innerHTML==="Red" && back.style.background==="orange") {
three.innerHTML="Rent $40";
back.style.background="green";}
else if (four.innerHTML==="Yellow" && back.style.background==="orange") {
three.innerHTML="Rent $40";
back.style.background="green";}
else if (four.innerHTML==="Three" && back.style.background==="orange") {
three.innerHTML="Rent $40";
back.style.background="green";}}

function cyan1() {
var one=document.getElementById("oneI");
var three=document.getElementById("cyanOne");
var back=document.getElementById("cyanBack1");
var two=document.getElementById("twoI");
var four=document.getElementById("threeI");
var sell1=document.getElementById("sel1");
var sell2=document.getElementById("sel2");
var sell3=document.getElementById("sel3");
if (sell1.style.background==="grey" && three.innerHTML==="Rent $60") 
{back.style.background="grey";
three.innerHTML="Sold P1";}
else if (three.innerHTML==="Sold P1" && sell1.style.background==="black") 
{back.style.background="red";
three.innerHTML="Rent $60";}
else if (three.innerHTML==="Sold P1" && sell2.style.background==="black") 
{back.style.background="purple";
three.innerHTML="Rent $60";}
else if (three.innerHTML==="Sold P1" && sell3.style.background==="black") 
{back.style.background="green";
three.innerHTML="Rent $60";}
else if (sell2.style.background==="grey" && three.innerHTML==="Rent $60") 
{back.style.background="grey";
three.innerHTML="Sold P2";}
else if (three.innerHTML==="Sold P2" && sell1.style.background==="black") 
{back.style.background="red";
three.innerHTML="Rent $60";}
else if (three.innerHTML==="Sold P2" && sell2.style.background==="black") 
{back.style.background="purple";
three.innerHTML="Rent $60";}
else if (three.innerHTML==="Sold P2" && sell3.style.background==="black") 
{back.style.background="green";
three.innerHTML="Rent $60";}
else if (sell3.style.background==="grey" && three.innerHTML==="Rent $60") 
{back.style.background="grey";
three.innerHTML="Sold P3";}
else if (three.innerHTML==="Sold P3" && sell1.style.background==="black") 
{back.style.background="red";
three.innerHTML="Rent $60";}
else if (three.innerHTML==="Sold P3" && sell2.style.background==="black") 
{back.style.background="purple";
three.innerHTML="Rent $60";}
else if (three.innerHTML==="Sold P3" && sell3.style.background==="black") 
{back.style.background="green";
three.innerHTML="Rent $60";}
else if (sell1.style.background==="white" && three.innerHTML==="Rent $60") {
three.innerHTML="Cyan $120";
back.style.background="orange";}
else if (sell2.style.background==="white" && three.innerHTML==="Rent $60") {
three.innerHTML="Cyan $120";
back.style.background="orange";}
else if (sell3.style.background==="white" && three.innerHTML==="Rent $60") {
three.innerHTML="Cyan $120";
back.style.background="orange";}
else if (back.style.background==="red") {
back.style.background="purple";}
else if (back.style.background==="purple") {
back.style.background="green";}
else if (back.style.background==="green") {
back.style.background="red";}
else if (two.innerHTML==="Two" && back.style.background==="orange") {
three.innerHTML="Rent $60";
back.style.background="purple";}
else if (one.innerHTML==="One" && back.style.background==="orange") {
three.innerHTML="Rent $60";
back.style.background="red";}
else if (one.innerHTML==="Pink" && back.style.background==="orange") {
three.innerHTML="Rent $60";
back.style.background="red";}
else if (one.innerHTML==="Red" && back.style.background==="orange") {
three.innerHTML="Rent $60";
back.style.background="red";}
else if (one.innerHTML==="Yellow" && back.style.background==="orange") {
three.innerHTML="Rent $60";
back.style.background="red";}
else if (two.innerHTML==="Pink" && back.style.background==="orange") {
three.innerHTML="Rent $60";
back.style.background="purple";}
else if (two.innerHTML==="Red" && back.style.background==="orange") {
three.innerHTML="Rent $60";
back.style.background="purple";}
else if (two.innerHTML==="Yellow" && back.style.background==="orange") {
three.innerHTML="Rent $60";
back.style.background="purple";}
else if (four.innerHTML==="Pink" && back.style.background==="orange") {
three.innerHTML="Rent $60";
back.style.background="green";}
else if (four.innerHTML==="Red" && back.style.background==="orange") {
three.innerHTML="Rent $60";
back.style.background="green";}
else if (four.innerHTML==="Yellow" && back.style.background==="orange") {
three.innerHTML="Rent $60";
back.style.background="green";}
else if (four.innerHTML==="Three" && back.style.background==="orange") {
three.innerHTML="Rent $60";
back.style.background="green";}}

function cyan2() {
var one=document.getElementById("oneJ");
var three=document.getElementById("cyanTwo");
var back=document.getElementById("cyanBack2");
var two=document.getElementById("twoJ");
var four=document.getElementById("threeJ");
var sell1=document.getElementById("sel1");
var sell2=document.getElementById("sel2");
var sell3=document.getElementById("sel3");
if (sell1.style.background==="grey" && three.innerHTML==="Rent $60") 
{back.style.background="grey";
three.innerHTML="Sold P1";}
else if (three.innerHTML==="Sold P1" && sell1.style.background==="black") 
{back.style.background="red";
three.innerHTML="Rent $60";}
else if (three.innerHTML==="Sold P1" && sell2.style.background==="black") 
{back.style.background="purple";
three.innerHTML="Rent $60";}
else if (three.innerHTML==="Sold P1" && sell3.style.background==="black") 
{back.style.background="green";
three.innerHTML="Rent $60";}
else if (sell2.style.background==="grey" && three.innerHTML==="Rent $60") 
{back.style.background="grey";
three.innerHTML="Sold P2";}
else if (three.innerHTML==="Sold P2" && sell1.style.background==="black") 
{back.style.background="red";
three.innerHTML="Rent $60";}
else if (three.innerHTML==="Sold P2" && sell2.style.background==="black") 
{back.style.background="purple";
three.innerHTML="Rent $60";}
else if (three.innerHTML==="Sold P2" && sell3.style.background==="black") 
{back.style.background="green";
three.innerHTML="Rent $60";}
else if (sell3.style.background==="grey" && three.innerHTML==="Rent $60") 
{back.style.background="grey";
three.innerHTML="Sold P3";}
else if (three.innerHTML==="Sold P3" && sell1.style.background==="black") 
{back.style.background="red";
three.innerHTML="Rent $60";}
else if (three.innerHTML==="Sold P3" && sell2.style.background==="black") 
{back.style.background="purple";
three.innerHTML="Rent $60";}
else if (three.innerHTML==="Sold P3" && sell3.style.background==="black") 
{back.style.background="green";
three.innerHTML="Rent $60";}
else if (sell1.style.background==="white" && three.innerHTML==="Rent $60") {
three.innerHTML="Cyan $120";
back.style.background="orange";}
else if (sell2.style.background==="white" && three.innerHTML==="Rent $60") {
three.innerHTML="Cyan $120";
back.style.background="orange";}
else if (sell3.style.background==="white" && three.innerHTML==="Rent $60") {
three.innerHTML="Cyan $120";
back.style.background="orange";}
else if (back.style.background==="red") {
back.style.background="purple";}
else if (back.style.background==="purple") {
back.style.background="green";}
else if (back.style.background==="green") {
back.style.background="red";}
else if (two.innerHTML==="Two" && back.style.background==="orange") {
three.innerHTML="Rent $60";
back.style.background="purple";}
else if (one.innerHTML==="One" && back.style.background==="orange") {
three.innerHTML="Rent $60";
back.style.background="red";}
else if (one.innerHTML==="Pink" && back.style.background==="orange") {
three.innerHTML="Rent $60";
back.style.background="red";}
else if (one.innerHTML==="Red" && back.style.background==="orange") {
three.innerHTML="Rent $60";
back.style.background="red";}
else if (one.innerHTML==="Yellow" && back.style.background==="orange") {
three.innerHTML="Rent $60";
back.style.background="red";}
else if (two.innerHTML==="Pink" && back.style.background==="orange") {
three.innerHTML="Rent $60";
back.style.background="purple";}
else if (two.innerHTML==="Red" && back.style.background==="orange") {
three.innerHTML="Rent $60";
back.style.background="purple";}
else if (two.innerHTML==="Yellow" && back.style.background==="orange") {
three.innerHTML="Rent $60";
back.style.background="purple";}
else if (four.innerHTML==="Pink" && back.style.background==="orange") {
three.innerHTML="Rent $60";
back.style.background="green";}
else if (four.innerHTML==="Red" && back.style.background==="orange") {
three.innerHTML="Rent $60";
back.style.background="green";}
else if (four.innerHTML==="Yellow" && back.style.background==="orange") {
three.innerHTML="Rent $60";
back.style.background="green";}
else if (four.innerHTML==="Three" && back.style.background==="orange") {
three.innerHTML="Rent $60";
back.style.background="green";}}

function cyan3() {
var one=document.getElementById("oneK");
var three=document.getElementById("cyanThree");
var back=document.getElementById("cyanBack3");
var two=document.getElementById("twoK");
var four=document.getElementById("threeK");
var toggle1=document.getElementById("tog1");
var toggle2=document.getElementById("tog2");
var toggle3=document.getElementById("tog3");
var sell1=document.getElementById("sel1");
var sell2=document.getElementById("sel2");
var sell3=document.getElementById("sel3");
if (sell1.style.background==="grey" && three.innerHTML==="Rent $70") 
{back.style.background="grey";
three.innerHTML="Sold P1";}
else if (three.innerHTML==="Sold P1" && sell1.style.background==="black") 
{back.style.background="red";
three.innerHTML="Rent $70";}
else if (three.innerHTML==="Sold P1" && sell2.style.background==="black") 
{back.style.background="purple";
three.innerHTML="Rent $70";}
else if (three.innerHTML==="Sold P1" && sell3.style.background==="black") 
{back.style.background="green";
three.innerHTML="Rent $70";}
else if (sell2.style.background==="grey" && three.innerHTML==="Rent $70") 
{back.style.background="grey";
three.innerHTML="Sold P2";}
else if (three.innerHTML==="Sold P2" && sell1.style.background==="black") 
{back.style.background="red";
three.innerHTML="Rent $70";}
else if (three.innerHTML==="Sold P2" && sell2.style.background==="black") 
{back.style.background="purple";
three.innerHTML="Rent $70";}
else if (three.innerHTML==="Sold P2" && sell3.style.background==="black") 
{back.style.background="green";
three.innerHTML="Rent $70";}
else if (sell3.style.background==="grey" && three.innerHTML==="Rent $70") 
{back.style.background="grey";
three.innerHTML="Sold P3";}
else if (three.innerHTML==="Sold P3" && sell1.style.background==="black") 
{back.style.background="red";
three.innerHTML="Rent $70";}
else if (three.innerHTML==="Sold P3" && sell2.style.background==="black") 
{back.style.background="purple";
three.innerHTML="Rent $70";}
else if (three.innerHTML==="Sold P3" && sell3.style.background==="black") 
{back.style.background="green";
three.innerHTML="Rent $70";}
else if (sell1.style.background==="white" && three.innerHTML==="Rent $70") {
three.innerHTML="Cyan $140";
back.style.background="orange";}
else if (sell2.style.background==="white" && three.innerHTML==="Rent $70") {
three.innerHTML="Cyan $140";
back.style.background="orange";}
else if (sell3.style.background==="white" && three.innerHTML==="Rent $70") {
three.innerHTML="Cyan $140";
back.style.background="orange";}
else if (back.style.background==="red") {
back.style.background="purple";}
else if (back.style.background==="purple") {
back.style.background="green";}
else if (back.style.background==="green") {
back.style.background="red";}
else if (two.innerHTML==="Two" && back.style.background==="orange") {
three.innerHTML="Rent $70";
back.style.background="purple";}
else if (one.innerHTML==="One" && back.style.background==="orange") {
three.innerHTML="Rent $70";
back.style.background="red";}
else if (one.innerHTML==="Pink" && back.style.background==="orange") {
three.innerHTML="Rent $70";
back.style.background="red";}
else if (one.innerHTML==="Red" && back.style.background==="orange") {
three.innerHTML="Rent $70";
back.style.background="red";}
else if (one.innerHTML==="Yellow" && back.style.background==="orange") {
three.innerHTML="Rent $70";
back.style.background="red";}
else if (two.innerHTML==="Pink" && back.style.background==="orange") {
three.innerHTML="Rent $70";
back.style.background="purple";}
else if (two.innerHTML==="Red" && back.style.background==="orange") {
three.innerHTML="Rent $70";
back.style.background="purple";}
else if (two.innerHTML==="Yellow" && back.style.background==="orange") {
three.innerHTML="Rent $70";
back.style.background="purple";}
else if (four.innerHTML==="Pink" && back.style.background==="orange") {
three.innerHTML="Rent $70";
back.style.background="green";}
else if (four.innerHTML==="Red" && back.style.background==="orange") {
three.innerHTML="Rent $70";
back.style.background="green";}
else if (four.innerHTML==="Yellow" && back.style.background==="orange") {
three.innerHTML="Rent $70";
back.style.background="green";}
else if (four.innerHTML==="Three" && back.style.background==="orange") {
three.innerHTML="Rent $70";
back.style.background="green";}}


function blue1() {
var one=document.getElementById("oneN");
var three=document.getElementById("blueOne");
var back=document.getElementById("blueBack1");
var two=document.getElementById("twoN");
var four=document.getElementById("threeN");
var sell1=document.getElementById("sel1");
var sell2=document.getElementById("sel2");
var sell3=document.getElementById("sel3");
if (sell1.style.background==="grey" && three.innerHTML==="Rent $70") 
{back.style.background="grey";
three.innerHTML="Sold P1";}
else if (three.innerHTML==="Sold P1" && sell1.style.background==="black") 
{back.style.background="red";
three.innerHTML="Rent $70";}
else if (three.innerHTML==="Sold P1" && sell2.style.background==="black") 
{back.style.background="purple";
three.innerHTML="Rent $70";}
else if (three.innerHTML==="Sold P1" && sell3.style.background==="black") 
{back.style.background="green";
three.innerHTML="Rent $70";}
else if (sell2.style.background==="grey" && three.innerHTML==="Rent $70") 
{back.style.background="grey";
three.innerHTML="Sold P2";}
else if (three.innerHTML==="Sold P2" && sell1.style.background==="black") 
{back.style.background="red";
three.innerHTML="Rent $70";}
else if (three.innerHTML==="Sold P2" && sell2.style.background==="black") 
{back.style.background="purple";
three.innerHTML="Rent $70";}
else if (three.innerHTML==="Sold P2" && sell3.style.background==="black") 
{back.style.background="green";
three.innerHTML="Rent $70";}
else if (sell3.style.background==="grey" && three.innerHTML==="Rent $70") 
{back.style.background="grey";
three.innerHTML="Sold P3";}
else if (three.innerHTML==="Sold P3" && sell1.style.background==="black") 
{back.style.background="red";
three.innerHTML="Rent $70";}
else if (three.innerHTML==="Sold P3" && sell2.style.background==="black") 
{back.style.background="purple";
three.innerHTML="Rent $70";}
else if (three.innerHTML==="Sold P3" && sell3.style.background==="black") 
{back.style.background="green";
three.innerHTML="Rent $70";}
else if (sell1.style.background==="white" && three.innerHTML==="Rent $70") {
three.innerHTML="Blue $140";
back.style.background="orange";}
else if (sell2.style.background==="white" && three.innerHTML==="Rent $70") {
three.innerHTML="Blue $140";
back.style.background="orange";}
else if (sell3.style.background==="white" && three.innerHTML==="Rent $70") {
three.innerHTML="Blue $140";
back.style.background="orange";}
else if (back.style.background==="red") {
back.style.background="purple";}
else if (back.style.background==="purple") {
back.style.background="green";}
else if (back.style.background==="green") {
back.style.background="red";}
else if (two.innerHTML==="Two" && back.style.background==="orange") {
three.innerHTML="Rent $70";
back.style.background="purple";}
else if (one.innerHTML==="One" && back.style.background==="orange") {
three.innerHTML="Rent $70";
back.style.background="red";}
else if (one.innerHTML==="Pink" && back.style.background==="orange") {
three.innerHTML="Rent $70";
back.style.background="red";}
else if (one.innerHTML==="Red" && back.style.background==="orange") {
three.innerHTML="Rent $70";
back.style.background="red";}
else if (one.innerHTML==="Yellow" && back.style.background==="orange") {
three.innerHTML="Rent $70";
back.style.background="red";}
else if (two.innerHTML==="Pink" && back.style.background==="orange") {
three.innerHTML="Rent ";
back.style.background="purple";}
else if (two.innerHTML==="Red" && back.style.background==="orange") {
three.innerHTML="Rent $70";
back.style.background="purple";}
else if (two.innerHTML==="Yellow" && back.style.background==="orange") {
three.innerHTML="Rent $70";
back.style.background="purple";}
else if (four.innerHTML==="Pink" && back.style.background==="orange") {
three.innerHTML="Rent $70";
back.style.background="green";}
else if (four.innerHTML==="Red" && back.style.background==="orange") {
three.innerHTML="Rent $70";
back.style.background="green";}
else if (four.innerHTML==="Yellow" && back.style.background==="orange") {
three.innerHTML="Rent $70";
back.style.background="green";}
else if (four.innerHTML==="Three" && back.style.background==="orange") {
three.innerHTML="Rent $70";
back.style.background="green";}}

function blue2() {
var one=document.getElementById("oneO");
var three=document.getElementById("blueTwo");
var back=document.getElementById("blueBack2");
var two=document.getElementById("twoO");
var four=document.getElementById("threeO");
var sell1=document.getElementById("sel1");
var sell2=document.getElementById("sel2");
var sell3=document.getElementById("sel3");
if (sell1.style.background==="grey" && three.innerHTML==="Rent $80") 
{back.style.background="grey";
three.innerHTML="Sold P1";}
else if (three.innerHTML==="Sold P1" && sell1.style.background==="black") 
{back.style.background="red";
three.innerHTML="Rent $80";}
else if (three.innerHTML==="Sold P1" && sell2.style.background==="black") 
{back.style.background="purple";
three.innerHTML="Rent $80";}
else if (three.innerHTML==="Sold P1" && sell3.style.background==="black") 
{back.style.background="green";
three.innerHTML="Rent $80";}
else if (sell2.style.background==="grey" && three.innerHTML==="Rent $80") 
{back.style.background="grey";
three.innerHTML="Sold P2";}
else if (three.innerHTML==="Sold P2" && sell1.style.background==="black") 
{back.style.background="red";
three.innerHTML="Rent $80";}
else if (three.innerHTML==="Sold P2" && sell2.style.background==="black") 
{back.style.background="purple";
three.innerHTML="Rent $80";}
else if (three.innerHTML==="Sold P2" && sell3.style.background==="black") 
{back.style.background="green";
three.innerHTML="Rent $80";}
else if (sell3.style.background==="grey" && three.innerHTML==="Rent $80") 
{back.style.background="grey";
three.innerHTML="Sold P3";}
else if (three.innerHTML==="Sold P3" && sell1.style.background==="black") 
{back.style.background="red";
three.innerHTML="Rent $80";}
else if (three.innerHTML==="Sold P3" && sell2.style.background==="black") 
{back.style.background="purple";
three.innerHTML="Rent $80";}
else if (three.innerHTML==="Sold P3" && sell3.style.background==="black") 
{back.style.background="green";
three.innerHTML="Rent $80";}
else if (sell1.style.background==="white" && three.innerHTML==="Rent $80") {
three.innerHTML="Blue $140";
back.style.background="orange";}
else if (sell2.style.background==="white" && three.innerHTML==="Rent $80") {
three.innerHTML="Blue $140";
back.style.background="orange";}
else if (sell3.style.background==="white" && three.innerHTML==="Rent $80") {
three.innerHTML="Blue $140";
back.style.background="orange";}
else if (back.style.background==="red") {
back.style.background="purple";}
else if (back.style.background==="purple") {
back.style.background="green";}
else if (back.style.background==="green") {
back.style.background="red";}
else if (two.innerHTML==="Two" && back.style.background==="orange") {
three.innerHTML="Rent $80";
back.style.background="purple";}
else if (one.innerHTML==="One" && back.style.background==="orange") {
three.innerHTML="Rent $80";
back.style.background="red";}
else if (one.innerHTML==="Pink" && back.style.background==="orange") {
three.innerHTML="Rent $80";
back.style.background="red";}
else if (one.innerHTML==="Red" && back.style.background==="orange") {
three.innerHTML="Rent $80";
back.style.background="red";}
else if (one.innerHTML==="Yellow" && back.style.background==="orange") {
three.innerHTML="Rent $80";
back.style.background="red";}
else if (two.innerHTML==="Pink" && back.style.background==="orange") {
three.innerHTML="Rent $80";
back.style.background="purple";}
else if (two.innerHTML==="Red" && back.style.background==="orange") {
three.innerHTML="Rent $80";
back.style.background="purple";}
else if (two.innerHTML==="Yellow" && back.style.background==="orange") {
three.innerHTML="Rent $80";
back.style.background="purple";}
else if (four.innerHTML==="Pink" && back.style.background==="orange") {
three.innerHTML="Rent $80";
back.style.background="green";}
else if (four.innerHTML==="Red" && back.style.background==="orange") {
three.innerHTML="Rent $80";
back.style.background="green";}
else if (four.innerHTML==="Yellow" && back.style.background==="orange") {
three.innerHTML="Rent $80";
back.style.background="green";}
else if (four.innerHTML==="Three" && back.style.background==="orange") {
three.innerHTML="Rent $80";
back.style.background="green";}}

function blue3() {
var one=document.getElementById("oneP");
var three=document.getElementById("blueThree");
var back=document.getElementById("blueBack3");
var two=document.getElementById("twoP");
var four=document.getElementById("threeP");
var sell1=document.getElementById("sel1");
var sell2=document.getElementById("sel2");
var sell3=document.getElementById("sel3");
if (sell1.style.background==="grey" && three.innerHTML==="Rent $90") 
{back.style.background="grey";
three.innerHTML="Sold P1";}
else if (three.innerHTML==="Sold P1" && sell1.style.background==="black") 
{back.style.background="red";
three.innerHTML="Rent $90";}
else if (three.innerHTML==="Sold P1" && sell2.style.background==="black") 
{back.style.background="purple";
three.innerHTML="Rent $90";}
else if (three.innerHTML==="Sold P1" && sell3.style.background==="black") 
{back.style.background="green";
three.innerHTML="Rent $90";}
else if (sell2.style.background==="grey" && three.innerHTML==="Rent $90") 
{back.style.background="grey";
three.innerHTML="Sold P2";}
else if (three.innerHTML==="Sold P2" && sell1.style.background==="black") 
{back.style.background="red";
three.innerHTML="Rent $90";}
else if (three.innerHTML==="Sold P2" && sell2.style.background==="black") 
{back.style.background="purple";
three.innerHTML="Rent $90";}
else if (three.innerHTML==="Sold P2" && sell3.style.background==="black") 
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
else if (three.innerHTML==="Sold P3" && sell3.style.background==="black") 
{back.style.background="green";
three.innerHTML="Rent $90";}
else if (sell1.style.background==="white" && three.innerHTML==="Rent $90") {
three.innerHTML="Blue $160";
back.style.background="orange";}
else if (sell2.style.background==="white" && three.innerHTML==="Rent $90") {
three.innerHTML="Blue $160";
back.style.background="orange";}
else if (sell3.style.background==="white" && three.innerHTML==="Rent $90") {
three.innerHTML="Blue $160";
back.style.background="orange";}
else if (back.style.background==="red") {
back.style.background="purple";}
else if (back.style.background==="purple") {
back.style.background="green";}
else if (back.style.background==="green") {
back.style.background="red";}
else if (two.innerHTML==="Two" && back.style.background==="orange") {
three.innerHTML="Rent $90";
back.style.background="purple";}
else if (one.innerHTML==="One" && back.style.background==="orange") {
three.innerHTML="Rent $90";
back.style.background="red";}
else if (one.innerHTML==="Pink" && back.style.background==="orange") {
three.innerHTML="Rent $90";
back.style.background="red";}
else if (one.innerHTML==="Red" && back.style.background==="orange") {
three.innerHTML="Rent $90";
back.style.background="red";}
else if (one.innerHTML==="Yellow" && back.style.background==="orange") {
three.innerHTML="Rent $90";
back.style.background="red";}
else if (two.innerHTML==="Pink" && back.style.background==="orange") {
three.innerHTML="Rent $90";
back.style.background="purple";}
else if (two.innerHTML==="Red" && back.style.background==="orange") {
three.innerHTML="Rent $90";
back.style.background="purple";}
else if (two.innerHTML==="Yellow" && back.style.background==="orange") {
three.innerHTML="Rent $90";
back.style.background="purple";}
else if (four.innerHTML==="Pink" && back.style.background==="orange") {
three.innerHTML="Rent $90";
back.style.background="green";}
else if (four.innerHTML==="Red" && back.style.background==="orange") {
three.innerHTML="Rent $90";
back.style.background="green";}
else if (four.innerHTML==="Yellow" && back.style.background==="orange") {
three.innerHTML="Rent $90";
back.style.background="green";}
else if (four.innerHTML==="Three" && back.style.background==="orange") {
three.innerHTML="Rent $90";
back.style.background="green";}}

function pink1() {
var one=document.getElementById("oneR");
var three=document.getElementById("pinkOne");
var back=document.getElementById("pinkBack1");
var two=document.getElementById("twoR");
var four=document.getElementById("threeR");
var sell1=document.getElementById("sel1");
var sell2=document.getElementById("sel2");
var sell3=document.getElementById("sel3");
if (sell1.style.background==="grey" && three.innerHTML==="Rent $90") 
{back.style.background="grey";
three.innerHTML="Sold P1";}
else if (three.innerHTML==="Sold P1" && sell1.style.background==="black") 
{back.style.background="red";
three.innerHTML="Rent $90";}
else if (three.innerHTML==="Sold P1" && sell2.style.background==="black") 
{back.style.background="purple";
three.innerHTML="Rent $90";}
else if (three.innerHTML==="Sold P1" && sell3.style.background==="black") 
{back.style.background="green";
three.innerHTML="Rent $90";}
else if (sell2.style.background==="grey" && three.innerHTML==="Rent $90") 
{back.style.background="grey";
three.innerHTML="Sold P2";}
else if (three.innerHTML==="Sold P2" && sell1.style.background==="black") 
{back.style.background="red";
three.innerHTML="Rent $90";}
else if (three.innerHTML==="Sold P2" && sell2.style.background==="black") 
{back.style.background="purple";
three.innerHTML="Rent $90";}
else if (three.innerHTML==="Sold P2" && sell3.style.background==="black") 
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
else if (three.innerHTML==="Sold P3" && sell3.style.background==="black") 
{back.style.background="green";
three.innerHTML="Rent $90";}
else if (sell1.style.background==="white" && three.innerHTML==="Rent $90") {
three.innerHTML="Pink $160";
back.style.background="orange";}
else if (sell2.style.background==="white" && three.innerHTML==="Rent $90") {
three.innerHTML="Pink $160";
back.style.background="orange";}
else if (sell3.style.background==="white" && three.innerHTML==="Rent $90") {
three.innerHTML="Pink $160";
back.style.background="orange";}
else if (back.style.background==="red") {
back.style.background="purple";}
else if (back.style.background==="purple") {
back.style.background="green";}
else if (back.style.background==="green") {
back.style.background="red";}
else if (two.innerHTML==="Two" && back.style.background==="orange") {
three.innerHTML="Rent $90";
back.style.background="purple";}
else if (one.innerHTML==="One" && back.style.background==="orange") {
three.innerHTML="Rent $90";
back.style.background="red";}
else if (one.innerHTML==="Pink" && back.style.background==="orange") {
three.innerHTML="Rent $90";
back.style.background="red";}
else if (one.innerHTML==="Red" && back.style.background==="orange") {
three.innerHTML="Rent $90";
back.style.background="red";}
else if (one.innerHTML==="Yellow" && back.style.background==="orange") {
three.innerHTML="Rent $90";
back.style.background="red";}
else if (two.innerHTML==="Pink" && back.style.background==="orange") {
three.innerHTML="Rent $90";
back.style.background="purple";}
else if (two.innerHTML==="Red" && back.style.background==="orange") {
three.innerHTML="Rent $90";
back.style.background="purple";}
else if (two.innerHTML==="Yellow" && back.style.background==="orange") {
three.innerHTML="Rent $90";
back.style.background="purple";}
else if (four.innerHTML==="Pink" && back.style.background==="orange") {
three.innerHTML="Rent $90";
back.style.background="green";}
else if (four.innerHTML==="Red" && back.style.background==="orange") {
three.innerHTML="Rent $90";
back.style.background="green";}
else if (four.innerHTML==="Yellow" && back.style.background==="orange") {
three.innerHTML="Rent $90";
back.style.background="green";}
else if (four.innerHTML==="Three" && back.style.background==="orange") {
three.innerHTML="Rent $90";
back.style.background="green";}}

function pink2() {
var one=document.getElementById("oneS");
var three=document.getElementById("pinkTwo");
var back=document.getElementById("pinkBack2");
var two=document.getElementById("twoS");
var four=document.getElementById("threeS");
var sell1=document.getElementById("sel1");
var sell2=document.getElementById("sel2");
var sell3=document.getElementById("sel3");
if (sell1.style.background==="grey" && three.innerHTML==="Rent $90") 
{back.style.background="grey";
three.innerHTML="Sold P1";}
else if (three.innerHTML==="Sold P1" && sell1.style.background==="black") 
{back.style.background="red";
three.innerHTML="Rent $90";}
else if (three.innerHTML==="Sold P1" && sell2.style.background==="black") 
{back.style.background="purple";
three.innerHTML="Rent $90";}
else if (three.innerHTML==="Sold P1" && sell3.style.background==="black") 
{back.style.background="green";
three.innerHTML="Rent $90";}
else if (sell2.style.background==="grey" && three.innerHTML==="Rent $90") 
{back.style.background="grey";
three.innerHTML="Sold P2";}
else if (three.innerHTML==="Sold P2" && sell1.style.background==="black") 
{back.style.background="red";
three.innerHTML="Rent $90";}
else if (three.innerHTML==="Sold P2" && sell2.style.background==="black") 
{back.style.background="purple";
three.innerHTML="Rent $90";}
else if (three.innerHTML==="Sold P2" && sell3.style.background==="black") 
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
else if (three.innerHTML==="Sold P3" && sell3.style.background==="black") 
{back.style.background="green";
three.innerHTML="Rent $90";}
else if (sell1.style.background==="white" && three.innerHTML==="Rent $90") {
three.innerHTML="Pink $160";
back.style.background="orange";}
else if (sell2.style.background==="white" && three.innerHTML==="Rent $90") {
three.innerHTML="Pink $160";
back.style.background="orange";}
else if (sell3.style.background==="white" && three.innerHTML==="Rent $90") {
three.innerHTML="Pink $160";
back.style.background="orange";}
else if (back.style.background==="red") {
back.style.background="purple";}
else if (back.style.background==="purple") {
back.style.background="green";}
else if (back.style.background==="green") {
back.style.background="red";}
else if (two.innerHTML==="Two" && back.style.background==="orange") {
three.innerHTML="Rent $90";
back.style.background="purple";}
else if (one.innerHTML==="One" && back.style.background==="orange") {
three.innerHTML="Rent $90";
back.style.background="red";}
 else if (one.innerHTML==="Pink" && back.style.background==="orange") {
three.innerHTML="Rent $90";
back.style.background="red";}
else if (one.innerHTML==="Red" && back.style.background==="orange") {
three.innerHTML="Rent $90";
back.style.background="red";}
else if (one.innerHTML==="Yellow" && back.style.background==="orange") {
three.innerHTML="Rent $90";
back.style.background="red";}
else if (two.innerHTML==="Pink" && back.style.background==="orange") {
three.innerHTML="Rent $90";
back.style.background="purple";}
else if (two.innerHTML==="Red" && back.style.background==="orange") {
three.innerHTML="Rent $90";
back.style.background="purple";}
else if (two.innerHTML==="Yellow" && back.style.background==="orange") {
three.innerHTML="Rent $90";
back.style.background="purple";}
else if (four.innerHTML==="Pink" && back.style.background==="orange") {
three.innerHTML="Rent $90";
back.style.background="green";}
else if (four.innerHTML==="Red" && back.style.background==="orange") {
three.innerHTML="Rent $90";
back.style.background="green";}
else if (four.innerHTML==="Yellow" && back.style.background==="orange") {
three.innerHTML="Rent $90";
back.style.background="green";}
else if (four.innerHTML==="Three" && back.style.background==="orange") {
three.innerHTML="Rent $90";
back.style.background="green";}}

function pink3() {
var one=document.getElementById("oneT");
var three=document.getElementById("pinkThree");
var back=document.getElementById("pinkBack3");
var two=document.getElementById("twoT");
var four=document.getElementById("threeT");
var sell1=document.getElementById("sel1");
var sell2=document.getElementById("sel2");
var sell3=document.getElementById("sel3");
if (sell1.style.background==="grey" && three.innerHTML==="Rent $100") 
{back.style.background="grey";
three.innerHTML="Sold P1";}
else if (three.innerHTML==="Sold P1" && sell1.style.background==="black") 
{back.style.background="red";
three.innerHTML="Rent $100";}
else if (three.innerHTML==="Sold P1" && sell2.style.background==="black") 
{back.style.background="purple";
three.innerHTML="Rent $100";}
else if (three.innerHTML==="Sold P1" && sell3.style.background==="black") 
{back.style.background="green";
three.innerHTML="Rent $100";}
else if (sell2.style.background==="grey" && three.innerHTML==="Rent $100") 
{back.style.background="grey";
three.innerHTML="Sold P2";}
else if (three.innerHTML==="Sold P2" && sell1.style.background==="black") 
{back.style.background="red";
three.innerHTML="Rent $100";}
else if (three.innerHTML==="Sold P2" && sell2.style.background==="black") 
{back.style.background="purple";
three.innerHTML="Rent $100";}
else if (three.innerHTML==="Sold P2" && sell3.style.background==="black") 
{back.style.background="green";
three.innerHTML="Rent $100";}
else if (sell3.style.background==="grey" && three.innerHTML==="Rent $100") 
{back.style.background="grey";
three.innerHTML="Sold P3";}
else if (three.innerHTML==="Sold P3" && sell1.style.background==="black") 
{back.style.background="red";
three.innerHTML="Rent $100";}
else if (three.innerHTML==="Sold P3" && sell2.style.background==="black") 
{back.style.background="purple";
three.innerHTML="Rent $100";}
else if (three.innerHTML==="Sold P3" && sell3.style.background==="black") 
{back.style.background="green";
three.innerHTML="Rent $100";}
else if (sell1.style.background==="white" && three.innerHTML==="Rent $100") {
three.innerHTML="Pink $180";
back.style.background="orange";}
else if (sell2.style.background==="white" && three.innerHTML==="Rent $100") {
three.innerHTML="Pink $180";
back.style.background="orange";}
else if (sell3.style.background==="white" && three.innerHTML==="Rent $100") {
three.innerHTML="Pink $180";
back.style.background="orange";}
else if (back.style.background==="red") {
back.style.background="purple";}
else if (back.style.background==="purple") {
back.style.background="green";}
else if (back.style.background==="green") {
back.style.background="red";}
else if (two.innerHTML==="Two" && back.style.background==="orange") {
three.innerHTML="Rent $100";
back.style.background="purple";}
else if (one.innerHTML==="One" && back.style.background==="orange") {
three.innerHTML="Rent $100";
back.style.background="red";}
else if (one.innerHTML==="Pink" && back.style.background==="orange") {
three.innerHTML="Rent $100";
back.style.background="red";}
else if (one.innerHTML==="Red" && back.style.background==="orange") {
three.innerHTML="Rent $100";
back.style.background="red";}
else if (one.innerHTML==="Yellow" && back.style.background==="orange") {
three.innerHTML="Rent $100";
back.style.background="red";}
else if (two.innerHTML==="Pink" && back.style.background==="orange") {
three.innerHTML="Rent $100";
back.style.background="purple";}
else if (two.innerHTML==="Red" && back.style.background==="orange") {
three.innerHTML="Rent $100";
back.style.background="purple";}
else if (two.innerHTML==="Yellow" && back.style.background==="orange") {
three.innerHTML="Rent $100";
back.style.background="purple";}
else if (four.innerHTML==="Pink" && back.style.background==="orange") {
three.innerHTML="Rent $100";
back.style.background="green";}
else if (four.innerHTML==="Red" && back.style.background==="orange") {
three.innerHTML="Rent $100";
back.style.background="green";}
else if (four.innerHTML==="Yellow" && back.style.background==="orange") {
three.innerHTML="Rent $100";
back.style.background="green";}
else if (four.innerHTML==="Three" && back.style.background==="orange") {
three.innerHTML="Rent $100";
back.style.background="green";}}

function red1() {
var one=document.getElementById("oneV");
var three=document.getElementById("redOne");
var back=document.getElementById("redBack1");
var two=document.getElementById("twoV");
var four=document.getElementById("threeV");
var sell1=document.getElementById("sel1");
var sell2=document.getElementById("sel2");
var sell3=document.getElementById("sel3");
if (sell1.style.background==="grey" && three.innerHTML==="Rent $100") 
{back.style.background="grey";
three.innerHTML="Sold P1";}
else if (three.innerHTML==="Sold P1" && sell1.style.background==="black") 
{back.style.background="red";
three.innerHTML="Rent $100";}
else if (three.innerHTML==="Sold P1" && sell2.style.background==="black") 
{back.style.background="purple";
three.innerHTML="Rent $100";}
else if (three.innerHTML==="Sold P1" && sell3.style.background==="black") 
{back.style.background="green";
three.innerHTML="Rent $100";}
else if (sell2.style.background==="grey" && three.innerHTML==="Rent $100") 
{back.style.background="grey";
three.innerHTML="Sold P2";}
else if (three.innerHTML==="Sold P2" && sell1.style.background==="black") 
{back.style.background="red";
three.innerHTML="Rent $100";}
else if (three.innerHTML==="Sold P2" && sell2.style.background==="black") 
{back.style.background="purple";
three.innerHTML="Rent $100";}
else if (three.innerHTML==="Sold P2" && sell3.style.background==="black") 
{back.style.background="green";
three.innerHTML="Rent $100";}
else if (sell3.style.background==="grey" && three.innerHTML==="Rent $100") 
{back.style.background="grey";
three.innerHTML="Sold P3";}
else if (three.innerHTML==="Sold P3" && sell1.style.background==="black") 
{back.style.background="red";
three.innerHTML="Rent $100";}
else if (three.innerHTML==="Sold P3" && sell2.style.background==="black") 
{back.style.background="purple";
three.innerHTML="Rent $100";}
else if (three.innerHTML==="Sold P3" && sell3.style.background==="black") 
{back.style.background="green";
three.innerHTML="Rent $100";}
else if (sell1.style.background==="white" && three.innerHTML==="Rent $100") {
three.innerHTML="Red $200";
back.style.background="orange";}
else if (sell2.style.background==="white" && three.innerHTML==="Rent $100") {
three.innerHTML="Red $200";
back.style.background="orange";}
else if (sell3.style.background==="white" && three.innerHTML==="Rent $100") {
three.innerHTML="Red $200";
back.style.background="orange";}
else if (back.style.background==="red") {
back.style.background="purple";}
else if (back.style.background==="purple") {
back.style.background="green";}
else if (back.style.background==="green") {
back.style.background="red";}
else if (two.innerHTML==="Two" && back.style.background==="orange") {
three.innerHTML="Rent $100";
back.style.background="purple";}
else if (one.innerHTML==="One" && back.style.background==="orange") {
three.innerHTML="Rent $100";
back.style.background="red";}
else if (one.innerHTML==="Pink" && back.style.background==="orange") {
three.innerHTML="Rent $00";
back.style.background="red";}
else if (one.innerHTML==="Red" && back.style.background==="orange") {
three.innerHTML="Rent $100";
back.style.background="red";}
else if (one.innerHTML==="Yellow" && back.style.background==="orange") {
three.innerHTML="Rent $100";
back.style.background="red";}
else if (two.innerHTML==="Pink" && back.style.background==="orange") {
three.innerHTML="Rent $100";
back.style.background="purple";}
else if (two.innerHTML==="Red" && back.style.background==="orange") {
three.innerHTML="Rent $100";
back.style.background="purple";}
else if (two.innerHTML==="Yellow" && back.style.background==="orange") {
three.innerHTML="Rent $100";
back.style.background="purple";}
else if (four.innerHTML==="Pink" && back.style.background==="orange") {
three.innerHTML="Rent $100";
back.style.background="green";}
else if (four.innerHTML==="Red" && back.style.background==="orange") {
three.innerHTML="Rent $100";
back.style.background="green";}
else if (four.innerHTML==="Yellow" && back.style.background==="orange") {
three.innerHTML="Rent $100";
back.style.background="green";}
else if (four.innerHTML==="Three" && back.style.background==="orange") {
three.innerHTML="Rent $100";
back.style.background="green";}}

function red2() {
var one=document.getElementById("oneW");
var three=document.getElementById("redTwo");
var back=document.getElementById("redBack2");
var two=document.getElementById("twoW");
var four=document.getElementById("threeW");
var toggle1=document.getElementById("tog1");
var toggle2=document.getElementById("tog2");
var toggle3=document.getElementById("tog3");
var sell1=document.getElementById("sel1");
var sell2=document.getElementById("sel2");
var sell3=document.getElementById("sel3");
if (sell1.style.background==="grey" && three.innerHTML==="Rent $110") 
{back.style.background="grey";
three.innerHTML="Sold P1";}
else if (three.innerHTML==="Sold P1" && sell1.style.background==="black") 
{back.style.background="red";
three.innerHTML="Rent $110";}
else if (three.innerHTML==="Sold P1" && sell2.style.background==="black") 
{back.style.background="purple";
three.innerHTML="Rent $110";}
else if (three.innerHTML==="Sold P1" && sell3.style.background==="black") 
{back.style.background="green";
three.innerHTML="Rent $110";}
else if (sell2.style.background==="grey" && three.innerHTML==="Rent $110") 
{back.style.background="grey";
three.innerHTML="Sold P2";}
else if (three.innerHTML==="Sold P2" && sell1.style.background==="black") 
{back.style.background="red";
three.innerHTML="Rent $110";}
else if (three.innerHTML==="Sold P2" && sell2.style.background==="black") 
{back.style.background="purple";
three.innerHTML="Rent $110";}
else if (three.innerHTML==="Sold P2" && sell3.style.background==="black") 
{back.style.background="green";
three.innerHTML="Rent $110";}
else if (sell3.style.background==="grey" && three.innerHTML==="Rent $110") 
{back.style.background="grey";
three.innerHTML="Sold P3";}
else if (three.innerHTML==="Sold P3" && sell1.style.background==="black") 
{back.style.background="red";
three.innerHTML="Rent $110";}
else if (three.innerHTML==="Sold P3" && sell2.style.background==="black") 
{back.style.background="purple";
three.innerHTML="Rent $110";}
else if (three.innerHTML==="Sold P3" && sell3.style.background==="black") 
{back.style.background="green";
three.innerHTML="Rent $110";}
else if (sell1.style.background==="white" && three.innerHTML==="Rent $110") {
three.innerHTML="Red $220";
back.style.background="orange";}
else if (sell2.style.background==="white" && three.innerHTML==="Rent $110") {
three.innerHTML="Red $220";
back.style.background="orange";}
else if (sell3.style.background==="white" && three.innerHTML==="Rent $110") {
three.innerHTML="Red $220";
back.style.background="orange";}
else if (back.style.background==="red") {
back.style.background="purple";}
else if (back.style.background==="purple") {
back.style.background="green";}
else if (back.style.background==="green") {
back.style.background="red";}
else if (two.innerHTML==="Two" && back.style.background==="orange") {
three.innerHTML="Rent $110";
back.style.background="purple";}
else if (one.innerHTML==="One" && back.style.background==="orange") {
three.innerHTML="Rent $110";
back.style.background="red";}
else if (one.innerHTML==="Pink" && back.style.background==="orange") {
three.innerHTML="Rent $110";
back.style.background="red";}
else if (one.innerHTML==="Red" && back.style.background==="orange") {
three.innerHTML="Rent $110";
back.style.background="red";}
else if (one.innerHTML==="Yellow" && back.style.background==="orange") {
three.innerHTML="Rent $110";
back.style.background="red";}
else if (two.innerHTML==="Pink" && back.style.background==="orange") {
three.innerHTML="Rent $110";
back.style.background="purple";}
else if (two.innerHTML==="Red" && back.style.background==="orange") {
three.innerHTML="Rent $110";
back.style.background="purple";}
else if (two.innerHTML==="Yellow" && back.style.background==="orange") {
three.innerHTML="Rent $110";
back.style.background="purple";}
else if (four.innerHTML==="Pink" && back.style.background==="orange") {
three.innerHTML="Rent $110";
back.style.background="green";}
else if (four.innerHTML==="Red" && back.style.background==="orange") {
three.innerHTML="Rent $110";
back.style.background="green";}
else if (four.innerHTML==="Yellow" && back.style.background==="orange") {
three.innerHTML="Rent $110";
back.style.background="green";}
else if (four.innerHTML==="Three" && back.style.background==="orange") {
three.innerHTML="Rent $110";
back.style.background="green";}}

function lime1() {
var one=document.getElementById("oneY");
var three=document.getElementById("limeOne");
var back=document.getElementById("limeBack1");
var two=document.getElementById("twoY");
var four=document.getElementById("threeY");
var sell1=document.getElementById("sel1");
var sell2=document.getElementById("sel2");
var sell3=document.getElementById("sel3");
if (sell1.style.background==="grey" && three.innerHTML==="Rent $100") 
{back.style.background="grey";
three.innerHTML="Sold P1";}
else if (three.innerHTML==="Sold P1" && sell1.style.background==="black") 
{back.style.background="red";
three.innerHTML="Rent $100";}
else if (three.innerHTML==="Sold P1" && sell2.style.background==="black") 
{back.style.background="purple";
three.innerHTML="Rent $100";}
else if (three.innerHTML==="Sold P1" && sell3.style.background==="black") 
{back.style.background="green";
three.innerHTML="Rent $100";}
else if (sell2.style.background==="grey" && three.innerHTML==="Rent $100") 
{back.style.background="grey";
three.innerHTML="Sold P2";}
else if (three.innerHTML==="Sold P2" && sell1.style.background==="black") 
{back.style.background="red";
three.innerHTML="Rent $100";}
else if (three.innerHTML==="Sold P2" && sell2.style.background==="black") 
{back.style.background="purple";
three.innerHTML="Rent $100";}
else if (three.innerHTML==="Sold P2" && sell3.style.background==="black") 
{back.style.background="green";
three.innerHTML="Rent $100";}
else if (sell3.style.background==="grey" && three.innerHTML==="Rent $100") 
{back.style.background="grey";
three.innerHTML="Sold P3";}
else if (three.innerHTML==="Sold P3" && sell1.style.background==="black") 
{back.style.background="red";
three.innerHTML="Rent $100";}
else if (three.innerHTML==="Sold P3" && sell2.style.background==="black") 
{back.style.background="purple";
three.innerHTML="Rent $100";}
else if (three.innerHTML==="Sold P3" && sell3.style.background==="black") 
{back.style.background="green";
three.innerHTML="Rent $100";}
else if (sell1.style.background==="white" && three.innerHTML==="Rent $100") {
three.innerHTML="Lime $240";
back.style.background="orange";}
else if (sell2.style.background==="white" && three.innerHTML==="Rent $100") {
three.innerHTML="Lime $240";
back.style.background="orange";}
else if (sell3.style.background==="white" && three.innerHTML==="Rent $100") {
three.innerHTML="Lime $240";
back.style.background="orange";}
else if (back.style.background==="red") {
back.style.background="purple";}
else if (back.style.background==="purple") {
back.style.background="green";}
else if (back.style.background==="green") {
back.style.background="red";}
else if (two.innerHTML==="Two" && back.style.background==="orange") {
three.innerHTML="Rent $100";
back.style.background="purple";}
else if (one.innerHTML==="One" && back.style.background==="orange") {
three.innerHTML="Rent $100";
back.style.background="red";}
else if (one.innerHTML==="Pink" && back.style.background==="orange") {
three.innerHTML="Rent $00";
back.style.background="red";}
else if (one.innerHTML==="Red" && back.style.background==="orange") {
three.innerHTML="Rent $100";
back.style.background="red";}
else if (one.innerHTML==="Yellow" && back.style.background==="orange") {
three.innerHTML="Rent $100";
back.style.background="red";}
else if (two.innerHTML==="Pink" && back.style.background==="orange") {
three.innerHTML="Rent $100";
back.style.background="purple";}
else if (two.innerHTML==="Red" && back.style.background==="orange") {
three.innerHTML="Rent $100";
back.style.background="purple";}
else if (two.innerHTML==="Yellow" && back.style.background==="orange") {
three.innerHTML="Rent $100";
back.style.background="purple";}
else if (four.innerHTML==="Pink" && back.style.background==="orange") {
three.innerHTML="Rent $100";
back.style.background="green";}
else if (four.innerHTML==="Red" && back.style.background==="orange") {
three.innerHTML="Rent $100";
back.style.background="green";}
else if (four.innerHTML==="Yellow" && back.style.background==="orange") {
three.innerHTML="Rent $100";
back.style.background="green";}
else if (four.innerHTML==="Three" && back.style.background==="orange") {
three.innerHTML="Rent $100";
back.style.background="green";}}

function lime2() {
var one=document.getElementById("oneZ");
var three=document.getElementById("limeTwo");
var back=document.getElementById("limeBack2");
var two=document.getElementById("twoZ");
var four=document.getElementById("threeZ");
var sell1=document.getElementById("sel1");
var sell2=document.getElementById("sel2");
var sell3=document.getElementById("sel3");
if (sell1.style.background==="grey" && three.innerHTML==="Rent $100") 
{back.style.background="grey";
three.innerHTML="Sold P1";}
else if (three.innerHTML==="Sold P1" && sell1.style.background==="black") 
{back.style.background="red";
three.innerHTML="Rent $100";}
else if (three.innerHTML==="Sold P1" && sell2.style.background==="black") 
{back.style.background="purple";
three.innerHTML="Rent $100";}
else if (three.innerHTML==="Sold P1" && sell3.style.background==="black") 
{back.style.background="green";
three.innerHTML="Rent $100";}
else if (sell2.style.background==="grey" && three.innerHTML==="Rent $100") 
{back.style.background="grey";
three.innerHTML="Sold P2";}
else if (three.innerHTML==="Sold P2" && sell1.style.background==="black") 
{back.style.background="red";
three.innerHTML="Rent $100";}
else if (three.innerHTML==="Sold P2" && sell2.style.background==="black") 
{back.style.background="purple";
three.innerHTML="Rent $100";}
else if (three.innerHTML==="Sold P2" && sell3.style.background==="black") 
{back.style.background="green";
three.innerHTML="Rent $100";}
else if (sell3.style.background==="grey" && three.innerHTML==="Rent $100") 
{back.style.background="grey";
three.innerHTML="Sold P3";}
else if (three.innerHTML==="Sold P3" && sell1.style.background==="black") 
{back.style.background="red";
three.innerHTML="Rent $100";}
else if (three.innerHTML==="Sold P3" && sell2.style.background==="black") 
{back.style.background="purple";
three.innerHTML="Rent $100";}
else if (three.innerHTML==="Sold P3" && sell3.style.background==="black") 
{back.style.background="green";
three.innerHTML="Rent $100";}
else if (sell1.style.background==="white" && three.innerHTML==="Rent $100") {
three.innerHTML="Lime $240";
back.style.background="orange";}
else if (sell2.style.background==="white" && three.innerHTML==="Rent $100") {
three.innerHTML="Lime $240";
back.style.background="orange";}
else if (sell3.style.background==="white" && three.innerHTML==="Rent $100") {
three.innerHTML="Lime $240";
back.style.background="orange";}
else if (back.style.background==="red") {
back.style.background="purple";}
else if (back.style.background==="purple") {
back.style.background="green";}
else if (back.style.background==="green") {
back.style.background="red";}
else if (two.innerHTML==="Two" && back.style.background==="orange") {
three.innerHTML="Rent $100";
back.style.background="purple";}
else if (one.innerHTML==="One" && back.style.background==="orange") {
three.innerHTML="Rent $100";
back.style.background="red";}
else if (one.innerHTML==="Pink" && back.style.background==="orange") {
three.innerHTML="Rent $100";
back.style.background="red";}
else if (one.innerHTML==="Red" && back.style.background==="orange") {
three.innerHTML="Rent $100";
back.style.background="red";}
else if (one.innerHTML==="Yellow" && back.style.background==="orange") {
three.innerHTML="Rent $100";
back.style.background="red";}
else if (two.innerHTML==="Pink" && back.style.background==="orange") {
three.innerHTML="Rent $100";
back.style.background="purple";}
else if (two.innerHTML==="Red" && back.style.background==="orange") {
three.innerHTML="Rent $100";
back.style.background="purple";}
else if (two.innerHTML==="Yellow" && back.style.background==="orange") {
three.innerHTML="Rent $100";
back.style.background="purple";}
else if (four.innerHTML==="Pink" && back.style.background==="orange") {
three.innerHTML="Rent $100";
back.style.background="green";}
else if (four.innerHTML==="Red" && back.style.background==="orange") {
three.innerHTML="Rent $100";
back.style.background="green";}
else if (four.innerHTML==="Yellow" && back.style.background==="orange") {
three.innerHTML="Rent $100";
back.style.background="green";}
else if (four.innerHTML==="Three" && back.style.background==="orange") {
three.innerHTML="Rent $100";
back.style.background="green";}}

function lime3() {
var one=document.getElementById("aone");
var three=document.getElementById("limeThree");
var back=document.getElementById("limeBack3");
var two=document.getElementById("atwo");
var four=document.getElementById("athree");
var sell1=document.getElementById("sel1");
var sell2=document.getElementById("sel2");
var sell3=document.getElementById("sel3");
if (sell1.style.background==="grey" && three.innerHTML==="Rent $120") 
{back.style.background="grey";
three.innerHTML="Sold P1";}
else if (three.innerHTML==="Sold P1" && sell1.style.background==="black") 
{back.style.background="red";
three.innerHTML="Rent $120";}
else if (three.innerHTML==="Sold P1" && sell2.style.background==="black") 
{back.style.background="purple";
three.innerHTML="Rent $120";}
else if (three.innerHTML==="Sold P1" && sell3.style.background==="black") 
{back.style.background="green";
three.innerHTML="Rent $120";}
else if (sell2.style.background==="grey" && three.innerHTML==="Rent $120") 
{back.style.background="grey";
three.innerHTML="Sold P2";}
else if (three.innerHTML==="Sold P2" && sell1.style.background==="black") 
{back.style.background="red";
three.innerHTML="Rent $120";}
else if (three.innerHTML==="Sold P2" && sell2.style.background==="black") 
{back.style.background="purple";
three.innerHTML="Rent $120";}
else if (three.innerHTML==="Sold P2" && sell3.style.background==="black") 
{back.style.background="green";
three.innerHTML="Rent $120";}
else if (sell3.style.background==="grey" && three.innerHTML==="Rent $120") 
{back.style.background="grey";
three.innerHTML="Sold P3";}
else if (three.innerHTML==="Sold P3" && sell1.style.background==="black") 
{back.style.background="red";
three.innerHTML="Rent $120";}
else if (three.innerHTML==="Sold P3" && sell2.style.background==="black") 
{back.style.background="purple";
three.innerHTML="Rent $120";}
else if (three.innerHTML==="Sold P3" && sell3.style.background==="black") 
{back.style.background="green";
three.innerHTML="Rent $120";}
else if (sell1.style.background==="white" && three.innerHTML==="Rent $120") {
three.innerHTML="Lime $260";
back.style.background="orange";}
else if (sell2.style.background==="white" && three.innerHTML==="Rent $120") {
three.innerHTML="Lime $260";
back.style.background="orange";}
else if (sell3.style.background==="white" && three.innerHTML==="Rent $120") {
three.innerHTML="Lime $260";
back.style.background="orange";}
else if (back.style.background==="red") {
back.style.background="purple";}
else if (back.style.background==="purple") {
back.style.background="green";}
else if (back.style.background==="green") {
back.style.background="red";}
else if (two.innerHTML==="Two" && back.style.background==="orange") {
three.innerHTML="Rent $120";
back.style.background="purple";}
else if (one.innerHTML==="One" && back.style.background==="orange") {
three.innerHTML="Rent $120";
back.style.background="red";}
else if (one.innerHTML==="Pink" && back.style.background==="orange") {
three.innerHTML="Rent $120";
back.style.background="red";}
else if (one.innerHTML==="Red" && back.style.background==="orange") {
three.innerHTML="Rent $120";
back.style.background="red";}
else if (one.innerHTML==="Yellow" && back.style.background==="orange") {
three.innerHTML="Rent $120";
back.style.background="red";}
else if (two.innerHTML==="Pink" && back.style.background==="orange") {
three.innerHTML="Rent $120";
back.style.background="purple";}
else if (two.innerHTML==="Red" && back.style.background==="orange") {
three.innerHTML="Rent $120";
back.style.background="purple";}
else if (two.innerHTML==="Yellow" && back.style.background==="orange") {
three.innerHTML="Rent $120";
back.style.background="purple";}
else if (four.innerHTML==="Pink" && back.style.background==="orange") {
three.innerHTML="Rent $120";
back.style.background="green";}
else if (four.innerHTML==="Red" && back.style.background==="orange") {
three.innerHTML="Rent $120";
back.style.background="green";}
else if (four.innerHTML==="Yellow" && back.style.background==="orange") {
three.innerHTML="Rent $120";
back.style.background="green";}
else if (four.innerHTML==="Three" && back.style.background==="orange") {
three.innerHTML="Rent $120";
back.style.background="green";}}

function gold1() {
var one=document.getElementById("fone");
var three=document.getElementById("goldOne");
var back=document.getElementById("goldBack1");
var two=document.getElementById("ftwo");
var four=document.getElementById("fthree");
var sell1=document.getElementById("sel1");
var sell2=document.getElementById("sel2");
var sell3=document.getElementById("sel3");
if (sell1.style.background==="grey" && three.innerHTML==="Rent $160") 
{back.style.background="grey";
three.innerHTML="Sold P1";}
else if (three.innerHTML==="Sold P1" && sell1.style.background==="black") 
{back.style.background="red";
three.innerHTML="Rent $160";}
else if (three.innerHTML==="Sold P1" && sell2.style.background==="black") 
{back.style.background="purple";
three.innerHTML="Rent $160";}
else if (three.innerHTML==="Sold P1" && sell3.style.background==="black") 
{back.style.background="green";
three.innerHTML="Rent $160";}
else if (sell2.style.background==="grey" && three.innerHTML==="Rent $160") 
{back.style.background="grey";
three.innerHTML="Sold P2";}
else if (three.innerHTML==="Sold P2" && sell1.style.background==="black") 
{back.style.background="red";
three.innerHTML="Rent $160";}
else if (three.innerHTML==="Sold P2" && sell2.style.background==="black") 
{back.style.background="purple";
three.innerHTML="Rent $160";}
else if (three.innerHTML==="Sold P2" && sell3.style.background==="black") 
{back.style.background="green";
three.innerHTML="Rent $160";}
else if (sell3.style.background==="grey" && three.innerHTML==="Rent $160") 
{back.style.background="grey";
three.innerHTML="Sold P3";}
else if (three.innerHTML==="Sold P3" && sell1.style.background==="black") 
{back.style.background="red";
three.innerHTML="Rent $160";}
else if (three.innerHTML==="Sold P3" && sell2.style.background==="black") 
{back.style.background="purple";
three.innerHTML="Rent $160";}
else if (three.innerHTML==="Sold P3" && sell3.style.background==="black") 
{back.style.background="green";
three.innerHTML="Rent $160";}
else if (sell1.style.background==="white" && three.innerHTML==="Rent $160") {
three.innerHTML="Gold $350";
back.style.background="orange";}
else if (sell2.style.background==="white" && three.innerHTML==="Rent $160") {
three.innerHTML="Gold $350";
back.style.background="orange";}
else if (sell3.style.background==="white" && three.innerHTML==="Rent $160") {
three.innerHTML="Gold $350";
back.style.background="orange";}
else if (back.style.background==="red") {
back.style.background="purple";}
else if (back.style.background==="purple") {
back.style.background="green";}
else if (back.style.background==="green") {
back.style.background="red";}
else if (two.innerHTML==="Two" && back.style.background==="orange") {
three.innerHTML="Rent $160";
back.style.background="purple";}
else if (one.innerHTML==="One" && back.style.background==="orange") {
three.innerHTML="Rent $160";
back.style.background="red";}
else if (one.innerHTML==="Pink" && back.style.background==="orange") {
three.innerHTML="Rent $160";
back.style.background="red";}
else if (one.innerHTML==="Red" && back.style.background==="orange") {
three.innerHTML="Rent $160";
back.style.background="red";}
else if (one.innerHTML==="Yellow" && back.style.background==="orange") {
three.innerHTML="Rent $160";
back.style.background="red";}
else if (two.innerHTML==="Pink" && back.style.background==="orange") {
three.innerHTML="Rent $160";
back.style.background="purple";}
else if (two.innerHTML==="Red" && back.style.background==="orange") {
three.innerHTML="Rent $160";
back.style.background="purple";}
else if (two.innerHTML==="Yellow" && back.style.background==="orange") {
three.innerHTML="Rent $160";
back.style.background="purple";}
else if (four.innerHTML==="Pink" && back.style.background==="orange") {
three.innerHTML="Rent $160";
back.style.background="green";}
else if (four.innerHTML==="Red" && back.style.background==="orange") {
three.innerHTML="Rent $160";
back.style.background="green";}
else if (four.innerHTML==="Yellow" && back.style.background==="orange") {
three.innerHTML="Rent $160";
back.style.background="green";}
else if (four.innerHTML==="Three" && back.style.background==="orange") {
three.innerHTML="Rent $160";
back.style.background="green";}}

function gold2() {
var one=document.getElementById("eone");
var three=document.getElementById("goldTwo");
var back=document.getElementById("goldBack2");
var two=document.getElementById("etwo");
var four=document.getElementById("ethree");
var sell1=document.getElementById("sel1");
var sell2=document.getElementById("sel2");
var sell3=document.getElementById("sel3");
if (sell1.style.background==="grey" && three.innerHTML==="Rent $150") 
{back.style.background="grey";
three.innerHTML="Sold P1";}
else if (three.innerHTML==="Sold P1" && sell1.style.background==="black") 
{back.style.background="red";
three.innerHTML="Rent $150";}
else if (three.innerHTML==="Sold P1" && sell2.style.background==="black") 
{back.style.background="purple";
three.innerHTML="Rent $150";}
else if (three.innerHTML==="Sold P1" && sell3.style.background==="black") 
{back.style.background="green";
three.innerHTML="Rent $150";}
else if (sell2.style.background==="grey" && three.innerHTML==="Rent $150") 
{back.style.background="grey";
three.innerHTML="Sold P2";}
else if (three.innerHTML==="Sold P2" && sell1.style.background==="black") 
{back.style.background="red";
three.innerHTML="Rent $150";}
else if (three.innerHTML==="Sold P2" && sell2.style.background==="black") 
{back.style.background="purple";
three.innerHTML="Rent $150";}
else if (three.innerHTML==="Sold P2" && sell3.style.background==="black") 
{back.style.background="green";
three.innerHTML="Rent $150";}
else if (sell3.style.background==="grey" && three.innerHTML==="Rent $150") 
{back.style.background="grey";
three.innerHTML="Sold P3";}
else if (three.innerHTML==="Sold P3" && sell1.style.background==="black") 
{back.style.background="red";
three.innerHTML="Rent $150";}
else if (three.innerHTML==="Sold P3" && sell2.style.background==="black") 
{back.style.background="purple";
three.innerHTML="Rent $150";}
else if (three.innerHTML==="Sold P3" && sell3.style.background==="black") 
{back.style.background="green";
three.innerHTML="Rent $150";}
else if (sell1.style.background==="white" && three.innerHTML==="Rent $150") {
three.innerHTML="Gold $300";
back.style.background="orange";}
else if (sell2.style.background==="white" && three.innerHTML==="Rent $150") {
three.innerHTML="Gold $300";
back.style.background="orange";}
else if (sell3.style.background==="white" && three.innerHTML==="Rent $150") {
three.innerHTML="Gold $300";
back.style.background="orange";}
else if (back.style.background==="red") {
back.style.background="purple";}
else if (back.style.background==="purple") {
back.style.background="green";}
else if (back.style.background==="green") {
back.style.background="red";}
else if (two.innerHTML==="Two" && back.style.background==="orange") {
three.innerHTML="Rent $150";
back.style.background="purple";}
else if (one.innerHTML==="One" && back.style.background==="orange") {
three.innerHTML="Rent $150";
back.style.background="red";}
else if (one.innerHTML==="Pink" && back.style.background==="orange") {
three.innerHTML="Rent $150";
back.style.background="red";}
else if (one.innerHTML==="Red" && back.style.background==="orange") {
three.innerHTML="Rent $150";
back.style.background="red";}
else if (one.innerHTML==="Yellow" && back.style.background==="orange") {
three.innerHTML="Rent $150";
back.style.background="red";}
else if (two.innerHTML==="Pink" && back.style.background==="orange") {
three.innerHTML="Rent $150";
back.style.background="purple";}
else if (two.innerHTML==="Red" && back.style.background==="orange") {
three.innerHTML="Rent $150";
back.style.background="purple";}
else if (two.innerHTML==="Yellow" && back.style.background==="orange") {
three.innerHTML="Rent $150";
back.style.background="purple";}
else if (four.innerHTML==="Pink" && back.style.background==="orange") {
three.innerHTML="Rent $150";
back.style.background="green";}
else if (four.innerHTML==="Red" && back.style.background==="orange") {
three.innerHTML="Rent $150";
back.style.background="green";}
else if (four.innerHTML==="Yellow" && back.style.background==="orange") {
three.innerHTML="Rent $150";
back.style.background="green";}
else if (four.innerHTML==="Three" && back.style.background==="orange") {
three.innerHTML="Rent $150";
back.style.background="green";}}

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

var aone=document.getElementById("twoA");
var atwo=document.getElementById("twoB");
var athree=document.getElementById("twoC");
var afour=document.getElementById("twoD");
var afive=document.getElementById("twoE");
var asix=document.getElementById("twoF");
var aseven=document.getElementById("twoG");
var aeight=document.getElementById("twoH");
var anine=document.getElementById("twoI");
var aten=document.getElementById("twoJ");
var aeleven=document.getElementById("twoK");
var atwelve=document.getElementById("twoL");
var athirteen=document.getElementById("twoM");
var afourteen=document.getElementById("twoN");
var afifteen=document.getElementById("twoO");
var asixteen=document.getElementById("twoP");
var aseventeen=document.getElementById("twoQ");
var aeighteen=document.getElementById("twoR");
var anineteen=document.getElementById("twoS");
var atwenty=document.getElementById("twoT");
var atwentyone=document.getElementById("twoU");
var atwentytwo=document.getElementById("twoV");
var atwentythree=document.getElementById("twoW");
var atwentyfour=document.getElementById("twoX");
var atwentyfive=document.getElementById("twoy");
var atwentysix=document.getElementById("twoZ");
var atwentyseven=document.getElementById("atwo");
var atwentyeight=document.getElementById("btwo");
var atwentynine=document.getElementById("ctwo");
var athirty=document.getElementById("dtwo");
var athirtyone=document.getElementById("etwo");
var athirtytwo=document.getElementById("ftwo");
var atoggle1=document.getElementById("sel2");
var abutton1=document.getElementById("btn2");
var awallet=document.getElementById("wal2");
var ay=document.getElementById("+b");
var az=document.getElementById("-b");
var ax=document.getElementById("b111");
var accept=document.getElementById("cardAcc");

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
var btwentyfive=document.getElementById("threey");
var btwentysix=document.getElementById("threeZ");
var btwentyseven=document.getElementById("athree");
var btwentyeight=document.getElementById("bthree");
var btwentynine=document.getElementById("cthree");
var bthirty=document.getElementById("dthree");
var bthirtyone=document.getElementById("ethree");
var bthirtytwo=document.getElementById("fthree");
var btoggle1=document.getElementById("sel3");
var bbtntton1=document.getElementById("btn3");
var bwallet=document.getElementById("wal3");
var by=document.getElementById("+c");
var bz=document.getElementById("-c");
var bx=document.getElementById("c111");
 
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
 
else if (toggle1.style.background==="white" && one.innerHTML==="Red") {
element.innerHTML="";
button1.innerHTML="One";
wallet.innerHTML="";
y.innerHTML="";
z.innerHTML="";
x.innerHTML="";}
else if (toggle1.style.background==="white" && two.innerHTML==="Red") {
element.innerHTML="";
button1.innerHTML="One";
wallet.innerHTML="";
y.innerHTML="";
z.innerHTML="";
x.innerHTML="";}
else if (toggle1.style.background==="white" && three.innerHTML==="Red") {
element.innerHTML="";
button1.innerHTML="One";
wallet.innerHTML="";
y.innerHTML="";
z.innerHTML="";
x.innerHTML="";}
else if (toggle1.style.background==="white" && four.innerHTML==="Red") {
element.innerHTML="";
button1.innerHTML="One";
wallet.innerHTML="";
y.innerHTML="";
z.innerHTML="";
x.innerHTML="";}
else if (toggle1.style.background==="white" && five.innerHTML==="Red") {
element.innerHTML="";
button1.innerHTML="One";
wallet.innerHTML="";
y.innerHTML="";
z.innerHTML="";
x.innerHTML="";}
else if (toggle1.style.background==="white" && six.innerHTML==="Red") {
element.innerHTML="";
button1.innerHTML="One";
wallet.innerHTML="";
y.innerHTML="";
z.innerHTML="";
x.innerHTML="";}
else if (toggle1.style.background==="white" && seven.innerHTML==="Red") {
element.innerHTML="";
button1.innerHTML="One";
wallet.innerHTML="";
y.innerHTML="";
z.innerHTML="";
x.innerHTML="";}
else if (toggle1.style.background==="white" && eight.innerHTML==="Red") {
element.innerHTML="";
button1.innerHTML="One";
wallet.innerHTML="";
y.innerHTML="";
z.innerHTML="";
x.innerHTML="";}
else if (toggle1.style.background==="white" && nine.innerHTML==="Red") {
element.innerHTML="";
button1.innerHTML="One";
wallet.innerHTML="";
y.innerHTML="";
z.innerHTML="";
x.innerHTML="";}
else if (toggle1.style.background==="white" && ten.innerHTML==="Red") {
element.innerHTML="";
button1.innerHTML="One";
wallet.innerHTML="";
y.innerHTML="";
z.innerHTML="";
x.innerHTML="";}
else if (toggle1.style.background==="white" && eleven.innerHTML==="Red") {
element.innerHTML="";
button1.innerHTML="One";
wallet.innerHTML="";
y.innerHTML="";
z.innerHTML="";
x.innerHTML="";}
else if (toggle1.style.background==="white" && twelve.innerHTML==="Red") {
element.innerHTML="";
button1.innerHTML="One";
wallet.innerHTML="";
y.innerHTML="";
z.innerHTML="";
x.innerHTML="";}
else if (toggle1.style.background==="white" && thirteen.innerHTML==="Red") {
element.innerHTML="";
button1.innerHTML="One";
wallet.innerHTML="";
y.innerHTML="";
z.innerHTML="";
x.innerHTML="";}
else if (toggle1.style.background==="white" && fourteen.innerHTML==="Red") {
element.innerHTML="";
button1.innerHTML="One";
wallet.innerHTML="";
y.innerHTML="";
z.innerHTML="";
x.innerHTML="";}
else if (toggle1.style.background==="white" && fifteen.innerHTML==="Red") {
element.innerHTML="";
button1.innerHTML="One";
wallet.innerHTML="";
y.innerHTML="";
z.innerHTML="";
x.innerHTML="";}
else if (toggle1.style.background==="white" && sixteen.innerHTML==="Red") {
element.innerHTML="";
button1.innerHTML="One";
wallet.innerHTML="";
y.innerHTML="";
z.innerHTML="";
x.innerHTML="";}
else if (toggle1.style.background==="white" && seventeen.innerHTML==="Red") {
element.innerHTML="";
button1.innerHTML="One";
wallet.innerHTML="";
y.innerHTML="";
z.innerHTML="";
x.innerHTML="";}
else if (toggle1.style.background==="white" && eighteen.innerHTML==="Red") {
element.innerHTML="";
button1.innerHTML="One";
wallet.innerHTML="";
y.innerHTML="";
z.innerHTML="";
x.innerHTML="";}
else if (toggle1.style.background==="white" && nineteen.innerHTML==="Red") {
element.innerHTML="";
button1.innerHTML="One";
wallet.innerHTML="";
y.innerHTML="";
z.innerHTML="";
x.innerHTML="";}
else if (toggle1.style.background==="white" && twenty.innerHTML==="Red") {
element.innerHTML="";
button1.innerHTML="One";
wallet.innerHTML="";
y.innerHTML="";
z.innerHTML="";
x.innerHTML="";}
else if (toggle1.style.background==="white" && twentyone.innerHTML==="Red") {
element.innerHTML="";
button1.innerHTML="One";
wallet.innerHTML="";
y.innerHTML="";
z.innerHTML="";
x.innerHTML="";}
else if (toggle1.style.background==="white" && twentytwo.innerHTML==="Red") {
element.innerHTML="";
button1.innerHTML="One";
wallet.innerHTML="";
y.innerHTML="";
z.innerHTML="";
x.innerHTML="";}
else if (toggle1.style.background==="white" && twentythree.innerHTML==="Red") {
element.innerHTML="";
button1.innerHTML="One";
wallet.innerHTML="";
y.innerHTML="";
z.innerHTML="";
x.innerHTML="";}
else if (toggle1.style.background==="white" && twentyfour.innerHTML==="Red") {
element.innerHTML="";
button1.innerHTML="One";
wallet.innerHTML="";
y.innerHTML="";
z.innerHTML="";
x.innerHTML="";}
else if (toggle1.style.background==="white" && twentyfive.innerHTML==="Red") {
element.innerHTML="";
button1.innerHTML="One";
wallet.innerHTML="";
y.innerHTML="";
z.innerHTML="";
x.innerHTML="";}
else if (toggle1.style.background==="white" && twentysix.innerHTML==="Red") {
element.innerHTML="";
button1.innerHTML="One";
wallet.innerHTML="";
y.innerHTML="";
z.innerHTML="";
x.innerHTML="";}
else if (toggle1.style.background==="white" && twentyseven.innerHTML==="Red") {
element.innerHTML="";
button1.innerHTML="One";
wallet.innerHTML="";
y.innerHTML="";
z.innerHTML="";
x.innerHTML="";}
else if (toggle1.style.background==="white" && twentyeight.innerHTML==="Red") {
element.innerHTML="";
button1.innerHTML="One";
wallet.innerHTML="";
y.innerHTML="";
z.innerHTML="";
x.innerHTML="";}
else if (toggle1.style.background==="white" && twentynine.innerHTML==="Red") {
element.innerHTML="";
button1.innerHTML="One";
wallet.innerHTML="";
y.innerHTML="";
z.innerHTML="";
x.innerHTML="";}
else if (toggle1.style.background==="white" && thirty.innerHTML==="Red") {
element.innerHTML="";
button1.innerHTML="One";
wallet.innerHTML="";
y.innerHTML="";
z.innerHTML="";
x.innerHTML="";}
else if (toggle1.style.background==="white" && thirtyone.innerHTML==="Red") {
element.innerHTML="";
button1.innerHTML="One";
wallet.innerHTML="";
y.innerHTML="";
z.innerHTML="";
x.innerHTML="";}
else if (toggle1.style.background==="white" && thirtytwo.innerHTML==="Red") {
element.innerHTML="";
button1.innerHTML="One";
wallet.innerHTML="";
y.innerHTML="";
z.innerHTML="";
x.innerHTML="";}

else if (toggle1.style.background==="white" && one.innerHTML==="Yellow") {
element.innerHTML="";
button1.innerHTML="One";
wallet.innerHTML="";
y.innerHTML="";
z.innerHTML="";
x.innerHTML="";}
else if (toggle1.style.background==="white" && two.innerHTML==="Yellow") {
element.innerHTML="";
button1.innerHTML="One";
wallet.innerHTML="";
y.innerHTML="";
z.innerHTML="";
x.innerHTML="";}
else if (toggle1.style.background==="white" && three.innerHTML==="Yellow") {
element.innerHTML="";
button1.innerHTML="One";
wallet.innerHTML="";
y.innerHTML="";
z.innerHTML="";
x.innerHTML="";}
else if (toggle1.style.background==="white" && four.innerHTML==="Yellow") {
element.innerHTML="";
button1.innerHTML="One";
wallet.innerHTML="";
y.innerHTML="";
z.innerHTML="";
x.innerHTML="";}
else if (toggle1.style.background==="white" && five.innerHTML==="Yellow") {
element.innerHTML="";
button1.innerHTML="One";
wallet.innerHTML="";
y.innerHTML="";
z.innerHTML="";
x.innerHTML="";}
else if (toggle1.style.background==="white" && six.innerHTML==="Yellow") {
element.innerHTML="";
button1.innerHTML="One";
wallet.innerHTML="";
y.innerHTML="";
z.innerHTML="";
x.innerHTML="";}
else if (toggle1.style.background==="white" && seven.innerHTML==="Yellow") {
element.innerHTML="";
button1.innerHTML="One";
wallet.innerHTML="";
y.innerHTML="";
z.innerHTML="";
x.innerHTML="";}
else if (toggle1.style.background==="white" && eight.innerHTML==="Yellow") {
element.innerHTML="";
button1.innerHTML="One";
wallet.innerHTML="";
y.innerHTML="";
z.innerHTML="";
x.innerHTML="";}
else if (toggle1.style.background==="white" && nine.innerHTML==="Yellow") {
element.innerHTML="";
button1.innerHTML="One";
wallet.innerHTML="";
y.innerHTML="";
z.innerHTML="";
x.innerHTML="";}
else if (toggle1.style.background==="white" && ten.innerHTML==="Yellow") {
element.innerHTML="";
button1.innerHTML="One";
wallet.innerHTML="";
y.innerHTML="";
z.innerHTML="";
x.innerHTML="";}
else if (toggle1.style.background==="white" && eleven.innerHTML==="Yellow") {
element.innerHTML="";
button1.innerHTML="One";
wallet.innerHTML="";
y.innerHTML="";
z.innerHTML="";
x.innerHTML="";}
else if (toggle1.style.background==="white" && twelve.innerHTML==="Yellow") {
element.innerHTML="";
button1.innerHTML="One";
wallet.innerHTML="";
y.innerHTML="";
z.innerHTML="";
x.innerHTML="";}
else if (toggle1.style.background==="white" && thirteen.innerHTML==="Yellow") {
element.innerHTML="";
button1.innerHTML="One";
wallet.innerHTML="";
y.innerHTML="";
z.innerHTML="";
x.innerHTML="";}
else if (toggle1.style.background==="white" && fourteen.innerHTML==="Yellow") {
element.innerHTML="";
button1.innerHTML="One";
wallet.innerHTML="";
y.innerHTML="";
z.innerHTML="";
x.innerHTML="";}
else if (toggle1.style.background==="white" && fifteen.innerHTML==="Yellow") {
element.innerHTML="";
button1.innerHTML="One";
wallet.innerHTML="";
y.innerHTML="";
z.innerHTML="";
x.innerHTML="";}
else if (toggle1.style.background==="white" && sixteen.innerHTML==="Yellow") {
element.innerHTML="";
button1.innerHTML="One";
wallet.innerHTML="";
y.innerHTML="";
z.innerHTML="";
x.innerHTML="";}
else if (toggle1.style.background==="white" && seventeen.innerHTML==="Yellow") {
element.innerHTML="";
button1.innerHTML="One";
wallet.innerHTML="";
y.innerHTML="";
z.innerHTML="";
x.innerHTML="";}
else if (toggle1.style.background==="white" && eighteen.innerHTML==="Yellow") {
element.innerHTML="";
button1.innerHTML="One";
wallet.innerHTML="";
y.innerHTML="";
z.innerHTML="";
x.innerHTML="";}
else if (toggle1.style.background==="white" && nineteen.innerHTML==="Yellow") {
element.innerHTML="";
button1.innerHTML="One";
wallet.innerHTML="";
y.innerHTML="";
z.innerHTML="";
x.innerHTML="";}
else if (toggle1.style.background==="white" && twenty.innerHTML==="Yellow") {
element.innerHTML="";
button1.innerHTML="One";
wallet.innerHTML="";
y.innerHTML="";
z.innerHTML="";
x.innerHTML="";}
else if (toggle1.style.background==="white" && twentyone.innerHTML==="Yellow") {
element.innerHTML="";
button1.innerHTML="One";
wallet.innerHTML="";
y.innerHTML="";
z.innerHTML="";
x.innerHTML="";}
else if (toggle1.style.background==="white" && twentytwo.innerHTML==="Yellow") {
element.innerHTML="";
button1.innerHTML="One";
wallet.innerHTML="";
y.innerHTML="";
z.innerHTML="";
x.innerHTML="";}
else if (toggle1.style.background==="white" && twentythree.innerHTML==="Yellow") {
element.innerHTML="";
button1.innerHTML="One";
wallet.innerHTML="";
y.innerHTML="";
z.innerHTML="";
x.innerHTML="";}
else if (toggle1.style.background==="white" && twentyfour.innerHTML==="Yellow") {
element.innerHTML="";
button1.innerHTML="One";
wallet.innerHTML="";
y.innerHTML="";
z.innerHTML="";
x.innerHTML="";}
else if (toggle1.style.background==="white" && twentyfive.innerHTML==="Yellow") {
element.innerHTML="";
button1.innerHTML="One";
wallet.innerHTML="";
y.innerHTML="";
z.innerHTML="";
x.innerHTML="";}
else if (toggle1.style.background==="white" && twentysix.innerHTML==="Yellow") {
element.innerHTML="";
button1.innerHTML="One";
wallet.innerHTML="";
y.innerHTML="";
z.innerHTML="";
x.innerHTML="";}
else if (toggle1.style.background==="white" && twentysix.innerHTML==="Yellow") {
element.innerHTML="";
button1.innerHTML="One";
wallet.innerHTML="";
y.innerHTML="";
z.innerHTML="";
x.innerHTML="";}
else if (toggle1.style.background==="white" && twentyseven.innerHTML==="Yellow") {
element.innerHTML="";
button1.innerHTML="One";
wallet.innerHTML="";
y.innerHTML="";
z.innerHTML="";
x.innerHTML="";}
else if (toggle1.style.background==="white" && twentyeight.innerHTML==="Yellow") {
element.innerHTML="";
button1.innerHTML="One";
wallet.innerHTML="";
y.innerHTML="";
z.innerHTML="";
x.innerHTML="";}
else if (toggle1.style.background==="white" && twentynine.innerHTML==="Yellow") {
element.innerHTML="";
button1.innerHTML="One";
wallet.innerHTML="";
y.innerHTML="";
z.innerHTML="";
x.innerHTML="";}
else if (toggle1.style.background==="white" && thirty.innerHTML==="Yellow") {
element.innerHTML="";
button1.innerHTML="One";
wallet.innerHTML="";
y.innerHTML="";
z.innerHTML="";
x.innerHTML="";}
else if (toggle1.style.background==="white" && thirtyone.innerHTML==="Yellow") {
element.innerHTML="";
button1.innerHTML="One";
wallet.innerHTML="";
y.innerHTML="";
z.innerHTML="";
x.innerHTML="";}
else if (toggle1.style.background==="white" && thirtytwo.innerHTML==="Yellow") {
element.innerHTML="";
button1.innerHTML="One";
wallet.innerHTML="";
y.innerHTML="";
z.innerHTML="";
x.innerHTML="";}
 
else if (toggle1.style.background==="white" && one.innerHTML==="Pink") {
element.innerHTML="";
button1.innerHTML="One";
wallet.innerHTML="";
y.innerHTML="";
z.innerHTML="";
x.innerHTML="";}
else if (toggle1.style.background==="white" && two.innerHTML==="Pink") {
element.innerHTML="";
button1.innerHTML="One";
wallet.innerHTML="";
y.innerHTML="";
z.innerHTML="";
x.innerHTML="";}
else if (toggle1.style.background==="white" && three.innerHTML==="Pink") {
element.innerHTML="";
button1.innerHTML="One";
wallet.innerHTML="";
y.innerHTML="";
z.innerHTML="";
x.innerHTML="";}
else if (toggle1.style.background==="white" && four.innerHTML==="Pink") {
element.innerHTML="";
button1.innerHTML="One";
wallet.innerHTML="";
y.innerHTML="";
z.innerHTML="";
x.innerHTML="";}
else if (toggle1.style.background==="white" && five.innerHTML==="Pink") {
element.innerHTML="";
button1.innerHTML="One";
wallet.innerHTML="";
y.innerHTML="";
z.innerHTML="";
x.innerHTML="";}
else if (toggle1.style.background==="white" && six.innerHTML==="Pink") {
element.innerHTML="";
button1.innerHTML="One";
wallet.innerHTML="";
y.innerHTML="";
z.innerHTML="";
x.innerHTML="";}
else if (toggle1.style.background==="white" && seven.innerHTML==="Pink") {
element.innerHTML="";
button1.innerHTML="One";
wallet.innerHTML="";
y.innerHTML="";
z.innerHTML="";
x.innerHTML="";}
else if (toggle1.style.background==="white" && eight.innerHTML==="Pink") {
element.innerHTML="";
button1.innerHTML="One";
wallet.innerHTML="";
y.innerHTML="";
z.innerHTML="";
x.innerHTML="";}
else if (toggle1.style.background==="white" && nine.innerHTML==="Pink") {
element.innerHTML="";
button1.innerHTML="One";
wallet.innerHTML="";
y.innerHTML="";
z.innerHTML="";
x.innerHTML="";}
else if (toggle1.style.background==="white" && ten.innerHTML==="Pink") {
element.innerHTML="";
button1.innerHTML="One";
wallet.innerHTML="";
y.innerHTML="";
z.innerHTML="";
x.innerHTML="";}
else if (toggle1.style.background==="white" && eleven.innerHTML==="Pink") {
element.innerHTML="";
button1.innerHTML="One";
wallet.innerHTML="";
y.innerHTML="";
z.innerHTML="";
x.innerHTML="";}
else if (toggle1.style.background==="white" && twelve.innerHTML==="Pink") {
element.innerHTML="";
button1.innerHTML="One";
wallet.innerHTML="";
y.innerHTML="";
z.innerHTML="";
x.innerHTML="";}
else if (toggle1.style.background==="white" && thirteen.innerHTML==="Pink") {
element.innerHTML="";
button1.innerHTML="One";
wallet.innerHTML="";
y.innerHTML="";
z.innerHTML="";
x.innerHTML="";}
else if (toggle1.style.background==="white" && fourteen.innerHTML==="Pink") {
element.innerHTML="";
button1.innerHTML="One";
wallet.innerHTML="";
y.innerHTML="";
z.innerHTML="";
x.innerHTML="";}
else if (toggle1.style.background==="white" && fifteen.innerHTML==="Pink") {
element.innerHTML="";
button1.innerHTML="One";
wallet.innerHTML="";
y.innerHTML="";
z.innerHTML="";
x.innerHTML="";}
else if (toggle1.style.background==="white" && sixteen.innerHTML==="Pink") {
element.innerHTML="";
button1.innerHTML="One";
wallet.innerHTML="";
y.innerHTML="";
z.innerHTML="";
x.innerHTML="";}
else if (toggle1.style.background==="white" && seventeen.innerHTML==="Pink") {
element.innerHTML="";
button1.innerHTML="One";
wallet.innerHTML="";
y.innerHTML="";
z.innerHTML="";
x.innerHTML="";}
else if (toggle1.style.background==="white" && eighteen.innerHTML==="Pink") {
element.innerHTML="";
button1.innerHTML="One";
wallet.innerHTML="";
y.innerHTML="";
z.innerHTML="";
x.innerHTML="";}
else if (toggle1.style.background==="white" && nineteen.innerHTML==="Pink") {
element.innerHTML="";
button1.innerHTML="One";
wallet.innerHTML="";
y.innerHTML="";
z.innerHTML="";
x.innerHTML="";}
else if (toggle1.style.background==="white" && twenty.innerHTML==="Pink") {
element.innerHTML="";
button1.innerHTML="One";
wallet.innerHTML="";
y.innerHTML="";
z.innerHTML="";
x.innerHTML="";}
else if (toggle1.style.background==="white" && twentyone.innerHTML==="Pink") {
element.innerHTML="";
button1.innerHTML="One";
wallet.innerHTML="";
y.innerHTML="";
z.innerHTML="";
x.innerHTML="";}
else if (toggle1.style.background==="white" && twentytwo.innerHTML==="Pink") {
element.innerHTML="";
button1.innerHTML="One";
wallet.innerHTML="";
y.innerHTML="";
z.innerHTML="";
x.innerHTML="";}
else if (toggle1.style.background==="white" && twentythree.innerHTML==="Pink") {
element.innerHTML="";
button1.innerHTML="One";
wallet.innerHTML="";
y.innerHTML="";
z.innerHTML="";
x.innerHTML="";}
else if (toggle1.style.background==="white" && twentyfour.innerHTML==="Pink") {
element.innerHTML="";
button1.innerHTML="One";
wallet.innerHTML="";
y.innerHTML="";
z.innerHTML="";
x.innerHTML="";}
else if (toggle1.style.background==="white" && twentyfive.innerHTML==="Pink") {
element.innerHTML="";
button1.innerHTML="One";
wallet.innerHTML="";
y.innerHTML="";
z.innerHTML="";
x.innerHTML="";}
else if (toggle1.style.background==="white" && twentysix.innerHTML==="Pink") {
element.innerHTML="";
button1.innerHTML="One";
wallet.innerHTML="";
y.innerHTML="";
z.innerHTML="";
x.innerHTML="";}
else if (toggle1.style.background==="white" && twentyseven.innerHTML==="Pink") {
element.innerHTML="";
button1.innerHTML="One";
wallet.innerHTML="";
y.innerHTML="";
z.innerHTML="";
x.innerHTML="";}
else if (toggle1.style.background==="white" && twentyeight.innerHTML==="Pink") {
element.innerHTML="";
button1.innerHTML="One";
wallet.innerHTML="";
y.innerHTML="";
z.innerHTML="";
x.innerHTML="";}
else if (toggle1.style.background==="white" && twentynine.innerHTML==="Pink") {
element.innerHTML="";
button1.innerHTML="One";
wallet.innerHTML="";
y.innerHTML="";
z.innerHTML="";
x.innerHTML="";}
else if (toggle1.style.background==="white" && thirty.innerHTML==="Pink") {
element.innerHTML="";
button1.innerHTML="One";
wallet.innerHTML="";
y.innerHTML="";
z.innerHTML="";
x.innerHTML="";}
else if (toggle1.style.background==="white" && thirtyone.innerHTML==="Pink") {
element.innerHTML="";
button1.innerHTML="One";
wallet.innerHTML="";
y.innerHTML="";
z.innerHTML="";
x.innerHTML="";}
else if (toggle1.style.background==="white" && thirtytwo.innerHTML==="Pink") {
element.innerHTML="";
button1.innerHTML="One";
wallet.innerHTML="";
y.innerHTML="";
z.innerHTML="";
x.innerHTML="";}


else if (atoggle1.style.background==="white" && aone.innerHTML==="Two") {
element.innerHTML="";
abutton1.innerHTML="Two";
awallet.innerHTML="";
ay.innerHTML="";
az.innerHTML="";
ax.innerHTML="";}
else if (atoggle1.style.background==="white" && atwo.innerHTML==="Two") {
element.innerHTML="";
abutton1.innerHTML="Two";
awallet.innerHTML="";
ay.innerHTML="";
az.innerHTML="";
ax.innerHTML="";}
else if (atoggle1.style.background==="white" && athree.innerHTML==="Two") {
element.innerHTML="";
abutton1.innerHTML="Two";
awallet.innerHTML="";
ay.innerHTML="";
az.innerHTML="";
ax.innerHTML="";}
else if (atoggle1.style.background==="white" && afour.innerHTML==="Two") {
element.innerHTML="";
abutton1.innerHTML="Two";
awallet.innerHTML="";
ay.innerHTML="";
az.innerHTML="";
ax.innerHTML="";}
else if (atoggle1.style.background==="white" && afive.innerHTML==="Two") {
element.innerHTML="";
abutton1.innerHTML="Two";
awallet.innerHTML="";
ay.innerHTML="";
az.innerHTML="";
ax.innerHTML="";}
else if (atoggle1.style.background==="white" && asix.innerHTML==="Two") {
element.innerHTML="";
abutton1.innerHTML="Two";
awallet.innerHTML="";
ay.innerHTML="";
az.innerHTML="";
ax.innerHTML="";}
else if (atoggle1.style.background==="white" && aseven.innerHTML==="Two") {
element.innerHTML="";
abutton1.innerHTML="Two";
awallet.innerHTML="";
ay.innerHTML="";
az.innerHTML="";
ax.innerHTML="";}
else if (atoggle1.style.background==="white" && aeight.innerHTML==="Two") {
element.innerHTML="";
abutton1.innerHTML="Two";
awallet.innerHTML="";
ay.innerHTML="";
az.innerHTML="";
ax.innerHTML="";}
else if (atoggle1.style.background==="white" && anine.innerHTML==="Two") {
element.innerHTML="";
abutton1.innerHTML="Two";
awallet.innerHTML="";
ay.innerHTML="";
az.innerHTML="";
ax.innerHTML="";}
else if (atoggle1.style.background==="white" && aten.innerHTML==="Two") {
element.innerHTML="";
abutton1.innerHTML="Two";
awallet.innerHTML="";
ay.innerHTML="";
az.innerHTML="";
ax.innerHTML="";}
else if (atoggle1.style.background==="white" && aeleven.innerHTML==="Two") {
element.innerHTML="";
abutton1.innerHTML="Two";
awallet.innerHTML="";
ay.innerHTML="";
az.innerHTML="";
ax.innerHTML="";}
else if (atoggle1.style.background==="white" && atwelve.innerHTML==="Two") {
element.innerHTML="";
abutton1.innerHTML="Two";
awallet.innerHTML="";
ay.innerHTML="";
az.innerHTML="";
ax.innerHTML="";}
else if (atoggle1.style.background==="white" && athirteen.innerHTML==="Two") {
element.innerHTML="";
abutton1.innerHTML="Two";
awallet.innerHTML="";
ay.innerHTML="";
az.innerHTML="";
ax.innerHTML="";}
else if (atoggle1.style.background==="white" && afourteen.innerHTML==="Two") {
element.innerHTML="";
abutton1.innerHTML="Two";
awallet.innerHTML="";
ay.innerHTML="";
az.innerHTML="";
ax.innerHTML="";}
else if (atoggle1.style.background==="white" && afifteen.innerHTML==="Two") {
element.innerHTML="";
abutton1.innerHTML="Two";
awallet.innerHTML="";
ay.innerHTML="";
az.innerHTML="";
ax.innerHTML="";}
else if (atoggle1.style.background==="white" && asixteen.innerHTML==="Two") {
element.innerHTML="";
abutton1.innerHTML="Two";
awallet.innerHTML="";
ay.innerHTML="";
az.innerHTML="";
ax.innerHTML="";}
else if (atoggle1.style.background==="white" && aseventeen.innerHTML==="Two") {
element.innerHTML="";
abutton1.innerHTML="Two";
awallet.innerHTML="";
ay.innerHTML="";
az.innerHTML="";
ax.innerHTML="";}
else if (atoggle1.style.background==="white" && aeighteen.innerHTML==="Two") {
element.innerHTML="";
abutton1.innerHTML="Two";
awallet.innerHTML="";
ay.innerHTML="";
az.innerHTML="";
ax.innerHTML="";}
else if (atoggle1.style.background==="white" && anineteen.innerHTML==="Two") {
element.innerHTML="";
abutton1.innerHTML="Two";
awallet.innerHTML="";
ay.innerHTML="";
az.innerHTML="";
ax.innerHTML="";}
else if (atoggle1.style.background==="white" && atwenty.innerHTML==="Two") {
element.innerHTML="";
abutton1.innerHTML="Two";
awallet.innerHTML="";
ay.innerHTML="";
az.innerHTML="";
ax.innerHTML="";}
else if (atoggle1.style.background==="white" && atwentyone.innerHTML==="Two") {
element.innerHTML="";
abutton1.innerHTML="Two";
awallet.innerHTML="";
ay.innerHTML="";
az.innerHTML="";
ax.innerHTML="";}
else if (atoggle1.style.background==="white" && atwentytwo.innerHTML==="Two") {
element.innerHTML="";
abutton1.innerHTML="Two";
awallet.innerHTML="";
ay.innerHTML="";
az.innerHTML="";
ax.innerHTML="";}
else if (atoggle1.style.background==="white" && atwentythree.innerHTML==="Two") {
element.innerHTML="";
abutton1.innerHTML="Two";
awallet.innerHTML="";
ay.innerHTML="";
az.innerHTML="";
ax.innerHTML="";}
else if (atoggle1.style.background==="white" && atwentyfour.innerHTML==="Two") {
element.innerHTML="";
abutton1.innerHTML="Two";
awallet.innerHTML="";
ay.innerHTML="";
az.innerHTML="";
ax.innerHTML="";}
else if (atoggle1.style.background==="white" && atwentyfive.innerHTML==="Two") {
element.innerHTML="";
abutton1.innerHTML="Two";
awallet.innerHTML="";
ay.innerHTML="";
az.innerHTML="";
ax.innerHTML="";}
else if (atoggle1.style.background==="white" && atwentysix.innerHTML==="Two") {
element.innerHTML="";
abutton1.innerHTML="Two";
awallet.innerHTML="";
ay.innerHTML="";
az.innerHTML="";
ax.innerHTML="";}
else if (atoggle1.style.background==="white" && atwentyseven.innerHTML==="Two") {
element.innerHTML="";
abutton1.innerHTML="Two";
awallet.innerHTML="";
ay.innerHTML="";
az.innerHTML="";
ax.innerHTML="";}
else if (atoggle1.style.background==="white" && atwentyeight.innerHTML==="Two") {
element.innerHTML="";
abutton1.innerHTML="Two";
awallet.innerHTML="";
ay.innerHTML="";
az.innerHTML="";
ax.innerHTML="";}
else if (atoggle1.style.background==="white" && atwentynine.innerHTML==="Two") {
element.innerHTML="";
abutton1.innerHTML="Two";
awallet.innerHTML="";
ay.innerHTML="";
az.innerHTML="";
ax.innerHTML="";}
else if (atoggle1.style.background==="white" && athirty.innerHTML==="Two") {
element.innerHTML="";
abutton1.innerHTML="Two";
awallet.innerHTML="";
ay.innerHTML="";
az.innerHTML="";
ax.innerHTML="";}
else if (atoggle1.style.background==="white" && athirtyone.innerHTML==="Two") {
element.innerHTML="";
abutton1.innerHTML="Two";
awallet.innerHTML="";
ay.innerHTML="";
az.innerHTML="";
ax.innerHTML="";}
else if (atoggle1.style.background==="white" && athirtytwo.innerHTML==="Two") {
element.innerHTML="";
abutton1.innerHTML="Two";
awallet.innerHTML="";
ay.innerHTML="";
az.innerHTML="";
ax.innerHTML="";}

else if (atoggle1.style.background==="white" && aone.innerHTML==="Red") {
element.innerHTML="";
abutton1.innerHTML="Two";
awallet.innerHTML="";
ay.innerHTML="";
az.innerHTML="";
ax.innerHTML="";}
else if (atoggle1.style.background==="white" && atwo.innerHTML==="Red") {
element.innerHTML="";
abutton1.innerHTML="Two";
awallet.innerHTML="";
ay.innerHTML="";
az.innerHTML="";
ax.innerHTML="";}
else if (atoggle1.style.background==="white" && athree.innerHTML==="Red") {
element.innerHTML="";
abutton1.innerHTML="Two";
awallet.innerHTML="";
ay.innerHTML="";
az.innerHTML="";
ax.innerHTML="";}
else if (atoggle1.style.background==="white" && afour.innerHTML==="Red") {
element.innerHTML="";
abutton1.innerHTML="Two";
awallet.innerHTML="";
ay.innerHTML="";
az.innerHTML="";
ax.innerHTML="";}
else if (atoggle1.style.background==="white" && afive.innerHTML==="Red") {
element.innerHTML="";
abutton1.innerHTML="Two";
awallet.innerHTML="";
ay.innerHTML="";
az.innerHTML="";
ax.innerHTML="";}
else if (atoggle1.style.background==="white" && asix.innerHTML==="Red") {
element.innerHTML="";
abutton1.innerHTML="Two";
awallet.innerHTML="";
ay.innerHTML="";
az.innerHTML="";
ax.innerHTML="";}
else if (atoggle1.style.background==="white" && aseven.innerHTML==="Red") {
element.innerHTML="";
abutton1.innerHTML="Two";
awallet.innerHTML="";
ay.innerHTML="";
az.innerHTML="";
ax.innerHTML="";}
else if (atoggle1.style.background==="white" && aeight.innerHTML==="Red") {
element.innerHTML="";
abutton1.innerHTML="Two";
awallet.innerHTML="";
ay.innerHTML="";
az.innerHTML="";
ax.innerHTML="";}
else if (atoggle1.style.background==="white" && anine.innerHTML==="Red") {
element.innerHTML="";
abutton1.innerHTML="Two";
awallet.innerHTML="";
ay.innerHTML="";
az.innerHTML="";
ax.innerHTML="";}
else if (atoggle1.style.background==="white" && aten.innerHTML==="Red") {
element.innerHTML="";
abutton1.innerHTML="Two";
awallet.innerHTML="";
ay.innerHTML="";
az.innerHTML="";
ax.innerHTML="";}
else if (atoggle1.style.background==="white" && aeleven.innerHTML==="Red") {
element.innerHTML="";
abutton1.innerHTML="Two";
awallet.innerHTML="";
ay.innerHTML="";
az.innerHTML="";
ax.innerHTML="";}
else if (atoggle1.style.background==="white" && atwelve.innerHTML==="Red") {
element.innerHTML="";
abutton1.innerHTML="Two";
awallet.innerHTML="";
ay.innerHTML="";
az.innerHTML="";
ax.innerHTML="";}
else if (atoggle1.style.background==="white" && athirteen.innerHTML==="Red") {
element.innerHTML="";
abutton1.innerHTML="Two";
awallet.innerHTML="";
ay.innerHTML="";
az.innerHTML="";
ax.innerHTML="";}
else if (atoggle1.style.background==="white" && afourteen.innerHTML==="Red") {
element.innerHTML="";
abutton1.innerHTML="Two";
awallet.innerHTML="";
ay.innerHTML="";
az.innerHTML="";
ax.innerHTML="";}
else if (atoggle1.style.background==="white" && afifteen.innerHTML==="Red") {
element.innerHTML="";
abutton1.innerHTML="Two";
awallet.innerHTML="";
ay.innerHTML="";
az.innerHTML="";
ax.innerHTML="";}
else if (atoggle1.style.background==="white" && asixteen.innerHTML==="Red") {
element.innerHTML="";
abutton1.innerHTML="Two";
awallet.innerHTML="";
ay.innerHTML="";
az.innerHTML="";
ax.innerHTML="";}
else if (atoggle1.style.background==="white" && aseventeen.innerHTML==="Red") {
element.innerHTML="";
abutton1.innerHTML="Two";
awallet.innerHTML="";
ay.innerHTML="";
az.innerHTML="";
ax.innerHTML="";}
else if (atoggle1.style.background==="white" && aeighteen.innerHTML==="Red") {
element.innerHTML="";
abutton1.innerHTML="Two";
awallet.innerHTML="";
ay.innerHTML="";
az.innerHTML="";
ax.innerHTML="";}
else if (atoggle1.style.background==="white" && anineteen.innerHTML==="Red") {
element.innerHTML="";
abutton1.innerHTML="Two";
awallet.innerHTML="";
ay.innerHTML="";
az.innerHTML="";
ax.innerHTML="";}
else if (atoggle1.style.background==="white" && atwenty.innerHTML==="Red") {
element.innerHTML="";
abutton1.innerHTML="Two";
awallet.innerHTML="";
ay.innerHTML="";
az.innerHTML="";
ax.innerHTML="";}
else if (atoggle1.style.background==="white" && atwentyone.innerHTML==="Red") {
element.innerHTML="";
abutton1.innerHTML="Two";
awallet.innerHTML="";
ay.innerHTML="";
az.innerHTML="";
ax.innerHTML="";}
else if (atoggle1.style.background==="white" && atwentytwo.innerHTML==="Red") {
element.innerHTML="";
abutton1.innerHTML="Two";
awallet.innerHTML="";
ay.innerHTML="";
az.innerHTML="";
ax.innerHTML="";}
else if (atoggle1.style.background==="white" && atwentythree.innerHTML==="Red") {
element.innerHTML="";
abutton1.innerHTML="Two";
awallet.innerHTML="";
ay.innerHTML="";
az.innerHTML="";
ax.innerHTML="";}
else if (atoggle1.style.background==="white" && atwentyfour.innerHTML==="Red") {
element.innerHTML="";
abutton1.innerHTML="Two";
awallet.innerHTML="";
ay.innerHTML="";
az.innerHTML="";
ax.innerHTML="";}
else if (atoggle1.style.background==="white" && atwentyfive.innerHTML==="Red") {
element.innerHTML="";
abutton1.innerHTML="Two";
awallet.innerHTML="";
ay.innerHTML="";
az.innerHTML="";
ax.innerHTML="";}
else if (atoggle1.style.background==="white" && atwentysix.innerHTML==="Red") {
element.innerHTML="";
abutton1.innerHTML="Two";
awallet.innerHTML="";
ay.innerHTML="";
az.innerHTML="";
ax.innerHTML="";}
else if (atoggle1.style.background==="white" && atwentyseven.innerHTML==="Red") {
element.innerHTML="";
abutton1.innerHTML="Two";
awallet.innerHTML="";
ay.innerHTML="";
az.innerHTML="";
ax.innerHTML="";}
else if (atoggle1.style.background==="white" && atwentyeight.innerHTML==="Red") {
element.innerHTML="";
abutton1.innerHTML="Two";
awallet.innerHTML="";
ay.innerHTML="";
az.innerHTML="";
ax.innerHTML="";}
else if (atoggle1.style.background==="white" && atwentynine.innerHTML==="Red") {
element.innerHTML="";
abutton1.innerHTML="Two";
awallet.innerHTML="";
ay.innerHTML="";
az.innerHTML="";
ax.innerHTML="";}
else if (atoggle1.style.background==="white" && athirty.innerHTML==="Red") {
element.innerHTML="";
abutton1.innerHTML="Two";
awallet.innerHTML="";
ay.innerHTML="";
az.innerHTML="";
ax.innerHTML="";}
else if (atoggle1.style.background==="white" && athirtyone.innerHTML==="Red") {
element.innerHTML="";
abutton1.innerHTML="Two";
awallet.innerHTML="";
ay.innerHTML="";
az.innerHTML="";
ax.innerHTML="";}
else if (atoggle1.style.background==="white" && athirtytwo.innerHTML==="Red") {
element.innerHTML="";
abutton1.innerHTML="Two";
awallet.innerHTML="";
ay.innerHTML="";
az.innerHTML="";
ax.innerHTML="";}

else if (atoggle1.style.background==="white" && aone.innerHTML==="yellow") {
element.innerHTML="";
abutton1.innerHTML="Two";
awallet.innerHTML="";
ay.innerHTML="";
az.innerHTML="";
ax.innerHTML="";}
else if (atoggle1.style.background==="white" && atwo.innerHTML==="yellow") {
element.innerHTML="";
abutton1.innerHTML="Two";
awallet.innerHTML="";
ay.innerHTML="";
az.innerHTML="";
ax.innerHTML="";}
else if (atoggle1.style.background==="white" && athree.innerHTML==="yellow") {
element.innerHTML="";
abutton1.innerHTML="Two";
awallet.innerHTML="";
ay.innerHTML="";
az.innerHTML="";
ax.innerHTML="";}
else if (atoggle1.style.background==="white" && afour.innerHTML==="yellow") {
element.innerHTML="";
abutton1.innerHTML="Two";
awallet.innerHTML="";
ay.innerHTML="";
az.innerHTML="";
ax.innerHTML="";}
else if (atoggle1.style.background==="white" && afive.innerHTML==="yellow") {
element.innerHTML="";
abutton1.innerHTML="Two";
awallet.innerHTML="";
ay.innerHTML="";
az.innerHTML="";
ax.innerHTML="";}
else if (atoggle1.style.background==="white" && asix.innerHTML==="yellow") {
element.innerHTML="";
abutton1.innerHTML="Two";
awallet.innerHTML="";
ay.innerHTML="";
az.innerHTML="";
ax.innerHTML="";}
else if (atoggle1.style.background==="white" && aseven.innerHTML==="yellow") {
element.innerHTML="";
abutton1.innerHTML="Two";
awallet.innerHTML="";
ay.innerHTML="";
az.innerHTML="";
ax.innerHTML="";}
else if (atoggle1.style.background==="white" && aeight.innerHTML==="yellow") {
element.innerHTML="";
abutton1.innerHTML="Two";
awallet.innerHTML="";
ay.innerHTML="";
az.innerHTML="";
ax.innerHTML="";}
else if (atoggle1.style.background==="white" && anine.innerHTML==="yellow") {
element.innerHTML="";
abutton1.innerHTML="Two";
awallet.innerHTML="";
ay.innerHTML="";
az.innerHTML="";
ax.innerHTML="";}
else if (atoggle1.style.background==="white" && aten.innerHTML==="yellow") {
element.innerHTML="";
abutton1.innerHTML="Two";
awallet.innerHTML="";
ay.innerHTML="";
az.innerHTML="";
ax.innerHTML="";}
else if (atoggle1.style.background==="white" && aeleven.innerHTML==="yellow") {
element.innerHTML="";
abutton1.innerHTML="Two";
awallet.innerHTML="";
ay.innerHTML="";
az.innerHTML="";
ax.innerHTML="";}
else if (atoggle1.style.background==="white" && atwelve.innerHTML==="yellow") {
element.innerHTML="";
abutton1.innerHTML="Two";
awallet.innerHTML="";
ay.innerHTML="";
az.innerHTML="";
ax.innerHTML="";}
else if (atoggle1.style.background==="white" && athirteen.innerHTML==="yellow") {
element.innerHTML="";
abutton1.innerHTML="Two";
awallet.innerHTML="";
ay.innerHTML="";
az.innerHTML="";
ax.innerHTML="";}
else if (atoggle1.style.background==="white" && afourteen.innerHTML==="yellow") {
element.innerHTML="";
abutton1.innerHTML="Two";
awallet.innerHTML="";
ay.innerHTML="";
az.innerHTML="";
ax.innerHTML="";}
else if (atoggle1.style.background==="white" && afifteen.innerHTML==="yellow") {
element.innerHTML="";
abutton1.innerHTML="Two";
awallet.innerHTML="";
ay.innerHTML="";
az.innerHTML="";
ax.innerHTML="";}
else if (atoggle1.style.background==="white" && asixteen.innerHTML==="yellow") {
element.innerHTML="";
abutton1.innerHTML="Two";
awallet.innerHTML="";
ay.innerHTML="";
az.innerHTML="";
ax.innerHTML="";}
else if (atoggle1.style.background==="white" && aseventeen.innerHTML==="yellow") {
element.innerHTML="";
abutton1.innerHTML="Two";
awallet.innerHTML="";
ay.innerHTML="";
az.innerHTML="";
ax.innerHTML="";}
else if (atoggle1.style.background==="white" && aeighteen.innerHTML==="yellow") {
element.innerHTML="";
abutton1.innerHTML="Two";
awallet.innerHTML="";
ay.innerHTML="";
az.innerHTML="";
ax.innerHTML="";}
else if (atoggle1.style.background==="white" && anineteen.innerHTML==="yellow") {
element.innerHTML="";
abutton1.innerHTML="Two";
awallet.innerHTML="";
ay.innerHTML="";
az.innerHTML="";
ax.innerHTML="";}
else if (atoggle1.style.background==="white" && atwenty.innerHTML==="yellow") {
element.innerHTML="";
abutton1.innerHTML="Two";
awallet.innerHTML="";
ay.innerHTML="";
az.innerHTML="";
ax.innerHTML="";}
else if (atoggle1.style.background==="white" && atwentyone.innerHTML==="yellow") {
element.innerHTML="";
abutton1.innerHTML="Two";
awallet.innerHTML="";
ay.innerHTML="";
az.innerHTML="";
ax.innerHTML="";}
else if (atoggle1.style.background==="white" && atwentytwo.innerHTML==="yellow") {
element.innerHTML="";
abutton1.innerHTML="Two";
awallet.innerHTML="";
ay.innerHTML="";
az.innerHTML="";
ax.innerHTML="";}
else if (atoggle1.style.background==="white" && atwentythree.innerHTML==="yellow") {
element.innerHTML="";
abutton1.innerHTML="Two";
awallet.innerHTML="";
ay.innerHTML="";
az.innerHTML="";
ax.innerHTML="";}
else if (atoggle1.style.background==="white" && atwentyfour.innerHTML==="yellow") {
element.innerHTML="";
abutton1.innerHTML="Two";
awallet.innerHTML="";
ay.innerHTML="";
az.innerHTML="";
ax.innerHTML="";}
else if (atoggle1.style.background==="white" && atwentyfive.innerHTML==="yellow") {
element.innerHTML="";
abutton1.innerHTML="Two";
awallet.innerHTML="";
ay.innerHTML="";
az.innerHTML="";
ax.innerHTML="";}
else if (atoggle1.style.background==="white" && atwentysix.innerHTML==="yellow") {
element.innerHTML="";
abutton1.innerHTML="Two";
awallet.innerHTML="";
ay.innerHTML="";
az.innerHTML="";
ax.innerHTML="";}
else if (atoggle1.style.background==="white" && atwentyseven.innerHTML==="yellow") {
element.innerHTML="";
abutton1.innerHTML="Two";
awallet.innerHTML="";
ay.innerHTML="";
az.innerHTML="";
ax.innerHTML="";}
else if (atoggle1.style.background==="white" && atwentyeight.innerHTML==="yellow") {
element.innerHTML="";
abutton1.innerHTML="Two";
awallet.innerHTML="";
ay.innerHTML="";
az.innerHTML="";
ax.innerHTML="";}
else if (atoggle1.style.background==="white" && atwentynine.innerHTML==="yellow") {
element.innerHTML="";
abutton1.innerHTML="Two";
awallet.innerHTML="";
ay.innerHTML="";
az.innerHTML="";
ax.innerHTML="";}
else if (atoggle1.style.background==="white" && athirty.innerHTML==="yellow") {
element.innerHTML="";
abutton1.innerHTML="Two";
awallet.innerHTML="";
ay.innerHTML="";
az.innerHTML="";
ax.innerHTML="";}
else if (atoggle1.style.background==="white" && athirtyone.innerHTML==="yellow") {
element.innerHTML="";
abutton1.innerHTML="Two";
awallet.innerHTML="";
ay.innerHTML="";
az.innerHTML="";
ax.innerHTML="";}
else if (atoggle1.style.background==="white" && athirtytwo.innerHTML==="yellow") {
element.innerHTML="";
abutton1.innerHTML="Two";
awallet.innerHTML="";
ay.innerHTML="";
az.innerHTML="";
ax.innerHTML="";}

else if (atoggle1.style.background==="white" && aone.innerHTML==="Pink") {
element.innerHTML="";
abutton1.innerHTML="Two";
awallet.innerHTML="";
ay.innerHTML="";
az.innerHTML="";
ax.innerHTML="";}
else if (atoggle1.style.background==="white" && atwo.innerHTML==="Pink") {
element.innerHTML="";
abutton1.innerHTML="Two";
awallet.innerHTML="";
ay.innerHTML="";
az.innerHTML="";
ax.innerHTML="";}
else if (atoggle1.style.background==="white" && athree.innerHTML==="Pink") {
element.innerHTML="";
abutton1.innerHTML="Two";
awallet.innerHTML="";
ay.innerHTML="";
az.innerHTML="";
ax.innerHTML="";}
else if (atoggle1.style.background==="white" && afour.innerHTML==="Pink") {
element.innerHTML="";
abutton1.innerHTML="Two";
awallet.innerHTML="";
ay.innerHTML="";
az.innerHTML="";
ax.innerHTML="";}
else if (atoggle1.style.background==="white" && afive.innerHTML==="Pink") {
element.innerHTML="";
abutton1.innerHTML="Two";
awallet.innerHTML="";
ay.innerHTML="";
az.innerHTML="";
ax.innerHTML="";}
else if (atoggle1.style.background==="white" && asix.innerHTML==="Pink") {
element.innerHTML="";
abutton1.innerHTML="Two";
awallet.innerHTML="";
ay.innerHTML="";
az.innerHTML="";
ax.innerHTML="";}
else if (atoggle1.style.background==="white" && aseven.innerHTML==="Pink") {
element.innerHTML="";
abutton1.innerHTML="Two";
awallet.innerHTML="";
ay.innerHTML="";
az.innerHTML="";
ax.innerHTML="";}
else if (atoggle1.style.background==="white" && aeight.innerHTML==="Pink") {
element.innerHTML="";
abutton1.innerHTML="Two";
awallet.innerHTML="";
ay.innerHTML="";
az.innerHTML="";
ax.innerHTML="";}
else if (atoggle1.style.background==="white" && anine.innerHTML==="Pink") {
element.innerHTML="";
abutton1.innerHTML="Two";
awallet.innerHTML="";
ay.innerHTML="";
az.innerHTML="";
ax.innerHTML="";}
else if (atoggle1.style.background==="white" && aten.innerHTML==="Pink") {
element.innerHTML="";
abutton1.innerHTML="Two";
awallet.innerHTML="";
ay.innerHTML="";
az.innerHTML="";
ax.innerHTML="";}
else if (atoggle1.style.background==="white" && aeleven.innerHTML==="Pink") {
element.innerHTML="";
abutton1.innerHTML="Two";
awallet.innerHTML="";
ay.innerHTML="";
az.innerHTML="";
ax.innerHTML="";}
else if (atoggle1.style.background==="white" && atwelve.innerHTML==="Pink") {
element.innerHTML="";
abutton1.innerHTML="Two";
awallet.innerHTML="";
ay.innerHTML="";
az.innerHTML="";
ax.innerHTML="";}
else if (atoggle1.style.background==="white" && athirteen.innerHTML==="Pink") {
element.innerHTML="";
abutton1.innerHTML="Two";
awallet.innerHTML="";
ay.innerHTML="";
az.innerHTML="";
ax.innerHTML="";}
else if (atoggle1.style.background==="white" && afourteen.innerHTML==="Pink") {
element.innerHTML="";
abutton1.innerHTML="Two";
awallet.innerHTML="";
ay.innerHTML="";
az.innerHTML="";
ax.innerHTML="";}
else if (atoggle1.style.background==="white" && afifteen.innerHTML==="Pink") {
element.innerHTML="";
abutton1.innerHTML="Two";
awallet.innerHTML="";
ay.innerHTML="";
az.innerHTML="";
ax.innerHTML="";}
else if (atoggle1.style.background==="white" && asixteen.innerHTML==="Pink") {
element.innerHTML="";
abutton1.innerHTML="Two";
awallet.innerHTML="";
ay.innerHTML="";
az.innerHTML="";
ax.innerHTML="";}
else if (atoggle1.style.background==="white" && aseventeen.innerHTML==="Pink") {
element.innerHTML="";
abutton1.innerHTML="Two";
awallet.innerHTML="";
ay.innerHTML="";
az.innerHTML="";
ax.innerHTML="";}
else if (atoggle1.style.background==="white" && aeighteen.innerHTML==="Pink") {
element.innerHTML="";
abutton1.innerHTML="Two";
awallet.innerHTML="";
ay.innerHTML="";
az.innerHTML="";
ax.innerHTML="";}
else if (atoggle1.style.background==="white" && anineteen.innerHTML==="Pink") {
element.innerHTML="";
abutton1.innerHTML="Two";
awallet.innerHTML="";
ay.innerHTML="";
az.innerHTML="";
ax.innerHTML="";}
else if (atoggle1.style.background==="white" && atwenty.innerHTML==="Pink") {
element.innerHTML="";
abutton1.innerHTML="Two";
awallet.innerHTML="";
ay.innerHTML="";
az.innerHTML="";
ax.innerHTML="";}
else if (atoggle1.style.background==="white" && atwentyone.innerHTML==="Pink") {
element.innerHTML="";
abutton1.innerHTML="Two";
awallet.innerHTML="";
ay.innerHTML="";
az.innerHTML="";
ax.innerHTML="";}
else if (atoggle1.style.background==="white" && atwentytwo.innerHTML==="Pink") {
element.innerHTML="";
abutton1.innerHTML="Two";
awallet.innerHTML="";
ay.innerHTML="";
az.innerHTML="";
ax.innerHTML="";}
else if (atoggle1.style.background==="white" && atwentythree.innerHTML==="Pink") {
element.innerHTML="";
abutton1.innerHTML="Two";
awallet.innerHTML="";
ay.innerHTML="";
az.innerHTML="";
ax.innerHTML="";}
else if (atoggle1.style.background==="white" && atwentyfour.innerHTML==="Pink") {
element.innerHTML="";
abutton1.innerHTML="Two";
awallet.innerHTML="";
ay.innerHTML="";
az.innerHTML="";
ax.innerHTML="";}
else if (atoggle1.style.background==="white" && atwentyfive.innerHTML==="Pink") {
element.innerHTML="";
abutton1.innerHTML="Two";
awallet.innerHTML="";
ay.innerHTML="";
az.innerHTML="";
ax.innerHTML="";}
else if (atoggle1.style.background==="white" && atwentysix.innerHTML==="Pink") {
element.innerHTML="";
abutton1.innerHTML="Two";
awallet.innerHTML="";
ay.innerHTML="";
az.innerHTML="";
ax.innerHTML="";}
else if (atoggle1.style.background==="white" && atwentyseven.innerHTML==="Pink") {
element.innerHTML="";
abutton1.innerHTML="Two";
awallet.innerHTML="";
ay.innerHTML="";
az.innerHTML="";
ax.innerHTML="";}
else if (atoggle1.style.background==="white" && atwentyeight.innerHTML==="Pink") {
element.innerHTML="";
abutton1.innerHTML="Two";
awallet.innerHTML="";
ay.innerHTML="";
az.innerHTML="";
ax.innerHTML="";}
else if (atoggle1.style.background==="white" && atwentynine.innerHTML==="Pink") {
element.innerHTML="";
abutton1.innerHTML="Two";
awallet.innerHTML="";
ay.innerHTML="";
az.innerHTML="";
ax.innerHTML="";}
else if (atoggle1.style.background==="white" && athirty.innerHTML==="Pink") {
element.innerHTML="";
abutton1.innerHTML="Two";
awallet.innerHTML="";
ay.innerHTML="";
az.innerHTML="";
ax.innerHTML="";}
else if (atoggle1.style.background==="white" && athirtyone.innerHTML==="Pink") {
element.innerHTML="";
abutton1.innerHTML="Two";
awallet.innerHTML="";
ay.innerHTML="";
az.innerHTML="";
ax.innerHTML="";}
else if (atoggle1.style.background==="white" && athirtytwo.innerHTML==="Pink") {
element.innerHTML="";
abutton1.innerHTML="Two";
awallet.innerHTML="";
ay.innerHTML="";
az.innerHTML="";
ax.innerHTML="";}

else if (btoggle1.style.bbackground==="white" && bone.innerHTML==="Three") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwabllet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.bbackground==="white" && bThree.innerHTML==="Three") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwabllet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.bbackground==="white" && bthree.innerHTML==="Three") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwabllet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.bbackground==="white" && bfour.innerHTML==="Three") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwabllet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.bbackground==="white" && bfive.innerHTML==="Three") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwabllet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.bbackground==="white" && bsix.innerHTML==="Three") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwabllet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.bbackground==="white" && bseven.innerHTML==="Three") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwabllet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.bbackground==="white" && beight.innerHTML==="Three") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwabllet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.bbackground==="white" && bnine.innerHTML==="Three") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwabllet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.bbackground==="white" && bten.innerHTML==="Three") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwabllet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.bbackground==="white" && beleven.innerHTML==="Three") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwabllet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.bbackground==="white" && btwelve.innerHTML==="Three") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwabllet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.bbackground==="white" && bthirteen.innerHTML==="Three") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwabllet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.bbackground==="white" && bfourteen.innerHTML==="Three") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwabllet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.bbackground==="white" && bfifteen.innerHTML==="Three") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwabllet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.bbackground==="white" && bsixteen.innerHTML==="Three") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwabllet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.bbackground==="white" && bseventeen.innerHTML==="Three") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwabllet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.bbackground==="white" && beighteen.innerHTML==="Three") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwabllet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.bbackground==="white" && bnineteen.innerHTML==="Three") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwabllet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.bbackground==="white" && btwenty.innerHTML==="Three") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwabllet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.bbackground==="white" && btwentyone.innerHTML==="Three") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwabllet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.bbackground==="white" && btwentyThree.innerHTML==="Three") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwabllet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.bbackground==="white" && btwentythree.innerHTML==="Three") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwabllet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.bbackground==="white" && btwentyfour.innerHTML==="Three") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwabllet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.bbackground==="white" && btwentyfive.innerHTML==="Three") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwabllet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.bbackground==="white" && btwentysix.innerHTML==="Three") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwabllet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.bbackground==="white" && btwentyseven.innerHTML==="Three") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwabllet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.bbackground==="white" && btwentyeight.innerHTML==="Three") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwabllet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.bbackground==="white" && btwentynine.innerHTML==="Three") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwabllet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.bbackground==="white" && bthirty.innerHTML==="Three") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwabllet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.bbackground==="white" && bthirtyone.innerHTML==="Three") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwabllet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.bbackground==="white" && bthirtyThree.innerHTML==="Three") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwabllet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}

else if (btoggle1.style.bbackground==="white" && bone.innerHTML==="Red") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwabllet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.bbackground==="white" && bThree.innerHTML==="Red") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwabllet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.bbackground==="white" && bthree.innerHTML==="Red") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwabllet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.bbackground==="white" && bfour.innerHTML==="Red") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwabllet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.bbackground==="white" && bfive.innerHTML==="Red") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwabllet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.bbackground==="white" && bsix.innerHTML==="Red") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwabllet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.bbackground==="white" && bseven.innerHTML==="Red") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwabllet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.bbackground==="white" && beight.innerHTML==="Red") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwabllet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.bbackground==="white" && bnine.innerHTML==="Red") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwabllet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.bbackground==="white" && bten.innerHTML==="Red") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwabllet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.bbackground==="white" && beleven.innerHTML==="Red") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwabllet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.bbackground==="white" && btwelve.innerHTML==="Red") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwabllet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.bbackground==="white" && bthirteen.innerHTML==="Red") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwabllet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.bbackground==="white" && bfourteen.innerHTML==="Red") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwabllet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.bbackground==="white" && bfifteen.innerHTML==="Red") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwabllet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.bbackground==="white" && bsixteen.innerHTML==="Red") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwabllet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.bbackground==="white" && bseventeen.innerHTML==="Red") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwabllet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.bbackground==="white" && beighteen.innerHTML==="Red") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwabllet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.bbackground==="white" && bnineteen.innerHTML==="Red") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwabllet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.bbackground==="white" && btwenty.innerHTML==="Red") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwabllet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.bbackground==="white" && btwentyone.innerHTML==="Red") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwabllet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.bbackground==="white" && btwentyThree.innerHTML==="Red") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwabllet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.bbackground==="white" && btwentythree.innerHTML==="Red") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwabllet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.bbackground==="white" && btwentyfour.innerHTML==="Red") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwabllet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.bbackground==="white" && btwentyfive.innerHTML==="Red") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwabllet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.bbackground==="white" && btwentysix.innerHTML==="Red") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwabllet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.bbackground==="white" && btwentyseven.innerHTML==="Red") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwabllet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.bbackground==="white" && btwentyeight.innerHTML==="Red") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwabllet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.bbackground==="white" && btwentynine.innerHTML==="Red") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwabllet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.bbackground==="white" && bthirty.innerHTML==="Red") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwabllet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.bbackground==="white" && bthirtyone.innerHTML==="Red") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwabllet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.bbackground==="white" && bthirtyThree.innerHTML==="Red") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwabllet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}

else if (btoggle1.style.bbackground==="white" && bone.innerHTML==="yellow") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwabllet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.bbackground==="white" && bThree.innerHTML==="yellow") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwabllet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.bbackground==="white" && bthree.innerHTML==="yellow") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwabllet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.bbackground==="white" && bfour.innerHTML==="yellow") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwabllet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.bbackground==="white" && bfive.innerHTML==="yellow") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwabllet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.bbackground==="white" && bsix.innerHTML==="yellow") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwabllet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.bbackground==="white" && bseven.innerHTML==="yellow") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwabllet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.bbackground==="white" && beight.innerHTML==="yellow") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwabllet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.bbackground==="white" && bnine.innerHTML==="yellow") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwabllet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.bbackground==="white" && bten.innerHTML==="yellow") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwabllet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.bbackground==="white" && beleven.innerHTML==="yellow") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwabllet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.bbackground==="white" && btwelve.innerHTML==="yellow") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwabllet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.bbackground==="white" && bthirteen.innerHTML==="yellow") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwabllet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.bbackground==="white" && bfourteen.innerHTML==="yellow") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwabllet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.bbackground==="white" && bfifteen.innerHTML==="yellow") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwabllet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.bbackground==="white" && bsixteen.innerHTML==="yellow") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwabllet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.bbackground==="white" && bseventeen.innerHTML==="yellow") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwabllet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.bbackground==="white" && beighteen.innerHTML==="yellow") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwabllet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.bbackground==="white" && bnineteen.innerHTML==="yellow") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwabllet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.bbackground==="white" && btwenty.innerHTML==="yellow") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwabllet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.bbackground==="white" && btwentyone.innerHTML==="yellow") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwabllet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.bbackground==="white" && btwentyThree.innerHTML==="yellow") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwabllet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.bbackground==="white" && btwentythree.innerHTML==="yellow") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwabllet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.bbackground==="white" && btwentyfour.innerHTML==="yellow") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwabllet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.bbackground==="white" && btwentyfive.innerHTML==="yellow") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwabllet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.bbackground==="white" && btwentysix.innerHTML==="yellow") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwabllet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.bbackground==="white" && btwentyseven.innerHTML==="yellow") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwabllet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.bbackground==="white" && btwentyeight.innerHTML==="yellow") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwabllet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.bbackground==="white" && btwentynine.innerHTML==="yellow") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwabllet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.bbackground==="white" && bthirty.innerHTML==="yellow") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwabllet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.bbackground==="white" && bthirtyone.innerHTML==="yellow") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwabllet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.bbackground==="white" && bthirtyThree.innerHTML==="yellow") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwabllet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}

else if (btoggle1.style.bbackground==="white" && bone.innerHTML==="Pink") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwabllet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.bbackground==="white" && bThree.innerHTML==="Pink") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwabllet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.bbackground==="white" && bthree.innerHTML==="Pink") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwabllet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.bbackground==="white" && bfour.innerHTML==="Pink") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwabllet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.bbackground==="white" && bfive.innerHTML==="Pink") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwabllet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.bbackground==="white" && bsix.innerHTML==="Pink") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwabllet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.bbackground==="white" && bseven.innerHTML==="Pink") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwabllet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.bbackground==="white" && beight.innerHTML==="Pink") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwabllet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.bbackground==="white" && bnine.innerHTML==="Pink") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwabllet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.bbackground==="white" && bten.innerHTML==="Pink") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwabllet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.bbackground==="white" && beleven.innerHTML==="Pink") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwabllet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.bbackground==="white" && btwelve.innerHTML==="Pink") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwabllet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.bbackground==="white" && bthirteen.innerHTML==="Pink") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwabllet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.bbackground==="white" && bfourteen.innerHTML==="Pink") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwabllet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.bbackground==="white" && bfifteen.innerHTML==="Pink") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwabllet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.bbackground==="white" && bsixteen.innerHTML==="Pink") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwabllet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.bbackground==="white" && bseventeen.innerHTML==="Pink") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwabllet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.bbackground==="white" && beighteen.innerHTML==="Pink") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwabllet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.bbackground==="white" && bnineteen.innerHTML==="Pink") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwabllet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.bbackground==="white" && btwenty.innerHTML==="Pink") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwabllet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.bbackground==="white" && btwentyone.innerHTML==="Pink") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwabllet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.bbackground==="white" && btwentyThree.innerHTML==="Pink") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwabllet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.bbackground==="white" && btwentythree.innerHTML==="Pink") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwabllet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.bbackground==="white" && btwentyfour.innerHTML==="Pink") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwabllet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.bbackground==="white" && btwentyfive.innerHTML==="Pink") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwabllet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.bbackground==="white" && btwentysix.innerHTML==="Pink") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwabllet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.bbackground==="white" && btwentyseven.innerHTML==="Pink") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwabllet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.bbackground==="white" && btwentyeight.innerHTML==="Pink") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwabllet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.bbackground==="white" && btwentynine.innerHTML==="Pink") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwabllet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.bbackground==="white" && bthirty.innerHTML==="Pink") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwabllet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.bbackground==="white" && bthirtyone.innerHTML==="Pink") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwabllet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
else if (btoggle1.style.bbackground==="white" && bthirtyThree.innerHTML==="Pink") {
element.innerHTML="";
bbutton1.innerHTML="Three";
bwabllet.innerHTML="";
by.innerHTML="";
bz.innerHTML="";
bx.innerHTML="";}
 
else if (four.innerHTML==="One" && accept.innerHTML==="Ad- vance To Go") {
four.innerHTML="";
one.innerHTML="One";}
else if (four.innerHTML==="Red" && accept.innerHTML==="Ad- vance To Go") {
four.innerHTML="";
one.innerHTML="Red";}
else if (four.innerHTML==="Yellow" && accept.innerHTML==="Ad- vance To Go") {
four.innerHTML="";
one.innerHTML="Yellow";}
else if (four.innerHTML==="Pink" && accept.innerHTML==="Ad- vance To Go") {
four.innerHTML="";
one.innerHTML="Pink";}

else if (twentyone.innerHTML==="One" && accept.innerHTML==="Ad- vance To Go") {
twentyone.innerHTML="";
one.innerHTML="One";}
else if (twentyone.innerHTML==="Red" && accept.innerHTML==="Ad- vance To Go") {
twentyone.innerHTML="";
one.innerHTML="Red";}
else if (twentyone.innerHTML==="Yellow" && accept.innerHTML==="Ad- vance To Go") {
twentyone.innerHTML="";
one.innerHTML="Yellow";}
else if (twentyone.innerHTML==="Pink" && accept.innerHTML==="Ad- vance To Go") {
twentyone.innerHTML="";
one.innerHTML="Pink";}

else if (two.innerHTML==="One" && accept.innerHTML==="Ad- vance To Go") {
two.innerHTML="";
one.innerHTML="One";}
else if (two.innerHTML==="Red" && accept.innerHTML==="Ad- vance To Go") {
two.innerHTML="";
one.innerHTML="Red";}
else if (two.innerHTML==="Yellow" && accept.innerHTML==="Ad- vance To Go") {
two.innerHTML="";
one.innerHTML="Yellow";}
else if (two.innerHTML==="Pink" && accept.innerHTML==="Ad- vance To Go") {
two.innerHTML="";
one.innerHTML="Pink";}

else if (afour.innerHTML==="Two" && accept.innerHTML==="Ad- vance To Go") {
afour.innerHTML="";
aone.innerHTML="Two";}
else if (afour.innerHTML==="Red" && accept.innerHTML==="Ad- vance To Go") {
afour.innerHTML="";
aone.innerHTML="Red";}
else if (afour.innerHTML==="Yellow" && accept.innerHTML==="Ad- vance To Go") {
afour.innerHTML="";
aone.innerHTML="Yellow";}
else if (afour.innerHTML==="Pink" && accept.innerHTML==="Ad- vance To Go") {
afour.innerHTML="";
aone.innerHTML="Pink";}
 
else if (atwentyone.innerHTML==="Two" && accept.innerHTML==="Ad- vance To Go") {
atwentyone.innerHTML="";
aone.innerHTML="Two";}
else if (atwentyone.innerHTML==="Red" && accept.innerHTML==="Ad- vance To Go") {
atwentyone.innerHTML="";
aone.innerHTML="Red";}
else if (atwentyone.innerHTML==="Yellow" && accept.innerHTML==="Ad- vance To Go") {
atwentyone.innerHTML="";
aone.innerHTML="Yellow";}
else if (atwentyone.innerHTML==="Pink" && accept.innerHTML==="Ad- vance To Go") {
atwentyone.innerHTML="";
aone.innerHTML="Pink";}
 
else if (atwo.innerHTML==="Two" && accept.innerHTML==="Ad- vance To Go") {
atwo.innerHTML="";
aone.innerHTML="Two";}
else if (atwo.innerHTML==="Red" && accept.innerHTML==="Ad- vance To Go") {
atwo.innerHTML="";
aone.innerHTML="Red";}
else if (atwo.innerHTML==="Yellow" && accept.innerHTML==="Ad- vance To Go") {
atwo.innerHTML="";
aone.innerHTML="Yellow";}
else if (atwo.innerHTML==="Pink" && accept.innerHTML==="Ad- vance To Go") {
atwo.innerHTML="";
aone.innerHTML="Pink";}

else if (bfour.innerHTML==="Three" && accept.innerHTML==="Ad- vance To Go") {
bfour.innerHTML="";
athree.innerHTML="Three";}
else if (bfour.innerHTML==="Red" && accept.innerHTML==="Ad- vance To Go") {
bfour.innerHTML="";
athree.innerHTML="Red";}
else if (bfour.innerHTML==="Yellow" && accept.innerHTML==="Ad- vance To Go") {
bfour.innerHTML="";
athree.innerHTML="Yellow";}
else if (bfour.innerHTML==="Pink" && accept.innerHTML==="Ad- vance To Go") {
bfour.innerHTML="";
athree.innerHTML="Pink";}
 
else if (btwentyone.innerHTML==="Three" && accept.innerHTML==="Ad- vance To Go") {
btwentyone.innerHTML="";
athree.innerHTML="Three";}
else if (btwentyone.innerHTML==="Red" && accept.innerHTML==="Ad- vance To Go") {
btwentyone.innerHTML="";
athree.innerHTML="Red";}
else if (btwentyone.innerHTML==="Yellow" && accept.innerHTML==="Ad- vance To Go") {
btwentyone.innerHTML="";
athree.innerHTML="Yellow";}
else if (btwentyone.innerHTML==="Pink" && accept.innerHTML==="Ad- vance To Go") {
btwentyone.innerHTML="";
athree.innerHTML="Pink";}

else if (btwo.innerHTML==="Three" && accept.innerHTML==="Ad- vance To Go") {
btwo.innerHTML="";
athree.innerHTML="Three";}
else if (btwo.innerHTML==="Red" && accept.innerHTML==="Ad- vance To Go") {
btwo.innerHTML="";
athree.innerHTML="Red";}
else if (btwo.innerHTML==="Yellow" && accept.innerHTML==="Ad- vance To Go") {
btwo.innerHTML="";
athree.innerHTML="Yellow";}
else if (btwo.innerHTML==="Pink" && accept.innerHTML==="Ad- vance To Go") {
btwo.innerHTML="";
athree.innerHTML="Pink";}

else if (four.innerHTML==="One" && accept.innerHTML==="Jail") {
four.innerHTML="";
eight.innerHTML="One";}
else if (four.innerHTML==="Red" && accept.innerHTML==="Jail") {
four.innerHTML="";
eight.innerHTML="Red";}
else if (four.innerHTML==="Yellow" && accept.innerHTML==="Jail") {
four.innerHTML="";
eight.innerHTML="Yellow";}
else if (four.innerHTML==="Pink" && accept.innerHTML==="Jail") {
four.innerHTML="";
eight.innerHTML="Pink";}

else if (twentyone.innerHTML==="One" && accept.innerHTML==="Jail") {
twentyone.innerHTML="";
eight.innerHTML="One";}
else if (twentyone.innerHTML==="Red" && accept.innerHTML==="Jail") {
twentyone.innerHTML="";
eight.innerHTML="Red";}
else if (twentyone.innerHTML==="Yellow" && accept.innerHTML==="Jail") {
twentyone.innerHTML="";
eight.innerHTML="Yellow";}
else if (twentyone.innerHTML==="Pink" && accept.innerHTML==="Jail") {
twentyone.innerHTML="";
eight.innerHTML="Pink";}

else if (two.innerHTML==="One" && accept.innerHTML==="Jail") {
two.innerHTML="";
eight.innerHTML="One";}
else if (two.innerHTML==="Red" && accept.innerHTML==="Jail") {
two.innerHTML="";
eight.innerHTML="Red";}
else if (two.innerHTML==="Yellow" && accept.innerHTML==="Jail") {
two.innerHTML="";
eight.innerHTML="Yellow";}
else if (two.innerHTML==="Pink" && accept.innerHTML==="Jail") {
two.innerHTML="";
eight.innerHTML="Pink";}

else if (afour.innerHTML==="Two" && accept.innerHTML==="Jail") {
afour.innerHTML="";
aeight.innerHTML="Two";}
else if (afour.innerHTML==="Red" && accept.innerHTML==="Jail") {
afour.innerHTML="";
aeight.innerHTML="Red";}
else if (afour.innerHTML==="Yellow" && accept.innerHTML==="Jail") {
afour.innerHTML="";
aeight.innerHTML="Yellow";}
else if (afour.innerHTML==="Pink" && accept.innerHTML==="Jail") {
afour.innerHTML="";
aeight.innerHTML="Pink";}
 
else if (atwentyone.innerHTML==="Two" && accept.innerHTML==="Jail") {
atwentyone.innerHTML="";
aeight.innerHTML="Two";}
else if (atwentyone.innerHTML==="Red" && accept.innerHTML==="Jail") {
atwentyone.innerHTML="";
aeight.innerHTML="Red";}
else if (atwentyone.innerHTML==="Yellow" && accept.innerHTML==="Jail") {
atwentyone.innerHTML="";
aeight.innerHTML="Yellow";}
else if (atwentyone.innerHTML==="Pink" && accept.innerHTML==="Jail") {
atwentyone.innerHTML="";
aeight.innerHTML="Pink";}
 
else if (atwo.innerHTML==="Two" && accept.innerHTML==="Jail") {
atwo.innerHTML="";
aeight.innerHTML="Two";}
else if (atwo.innerHTML==="Red" && accept.innerHTML==="Jail") {
atwo.innerHTML="";
aeight.innerHTML="Red";}
else if (atwo.innerHTML==="Yellow" && accept.innerHTML==="Jail") {
atwo.innerHTML="";
aeight.innerHTML="Yellow";}
else if (atwo.innerHTML==="Pink" && accept.innerHTML==="Jail") {
atwo.innerHTML="";
aeight.innerHTML="Pink";}

else if (bfour.innerHTML==="Three" && accept.innerHTML==="Jail") {
bfour.innerHTML="";
beight.innerHTML="Three";}
else if (bfour.innerHTML==="Red" && accept.innerHTML==="Jail") {
bfour.innerHTML="";
beight.innerHTML="Red";}
else if (bfour.innerHTML==="Yellow" && accept.innerHTML==="Jail") {
bfour.innerHTML="";
beight.innerHTML="Yellow";}
else if (bfour.innerHTML==="Pink" && accept.innerHTML==="Jail") {
bfour.innerHTML="";
beight.innerHTML="Pink";}
 
else if (btwentyone.innerHTML==="THree" && accept.innerHTML==="Jail") {
btwentyone.innerHTML="";
beight.innerHTML="Three";}
else if (btwentyone.innerHTML==="Red" && accept.innerHTML==="Jail") {
btwentyone.innerHTML="";
beight.innerHTML="Red";}
else if (btwentyone.innerHTML==="Yellow" && accept.innerHTML==="Jail") {
btwentyone.innerHTML="";
beight.innerHTML="Yellow";}
else if (btwentyone.innerHTML==="Pink" && accept.innerHTML==="Jail") {
btwentyone.innerHTML="";
beight.innerHTML="Pink";}

else if (btwo.innerHTML==="Three" && accept.innerHTML==="Jail") {
btwo.innerHTML="";
beight.innerHTML="Three";}
else if (btwo.innerHTML==="Red" && accept.innerHTML==="Jail") {
btwo.innerHTML="";
beight.innerHTML="Red";}
else if (btwo.innerHTML==="Yellow" && accept.innerHTML==="Jail") {
btwo.innerHTML="";
beight.innerHTML="Yellow";}
else if (btwo.innerHTML==="Pink" && accept.innerHTML==="Jail") {
btwo.innerHTML="";
beight.innerHTML="Pink";}

else if (four.innerHTML==="One" && accept.innerHTML==="Ad- vance To Gold") {
four.innerHTML="";
thirttwo.innerHTML="One";}
else if (four.innerHTML==="Red" && accept.innerHTML==="Ad- vance To Gold") {
four.innerHTML="";
thirttwo.innerHTML="Red";}
else if (four.innerHTML==="Yellow" && accept.innerHTML==="Ad- vance To Gold") {
four.innerHTML="";
thirttwo.innerHTML="Yellow";}
else if (four.innerHTML==="Pink" && accept.innerHTML==="Ad- vance To Gold") {
four.innerHTML="";
thirttwo.innerHTML="Pink";}

else if (twentyone.innerHTML==="One" && accept.innerHTML==="Ad- vance To Gold") {
twentyone.innerHTML="";
thirttwo.innerHTML="One";}
else if (twentyone.innerHTML==="Red" && accept.innerHTML==="Ad- vance To Gold") {
twentyone.innerHTML="";
thirttwo.innerHTML="Red";}
else if (twentyone.innerHTML==="Yellow" && accept.innerHTML==="Ad- vance To Gold") {
twentyone.innerHTML="";
thirttwo.innerHTML="Yellow";}
else if (twentyone.innerHTML==="Pink" && accept.innerHTML==="Ad- vance To Gold") {
twentyone.innerHTML="";
thirttwo.innerHTML="Pink";}

else if (two.innerHTML==="One" && accept.innerHTML==="Ad- vance To Gold") {
two.innerHTML="";
thirttwo.innerHTML="One";}
else if (two.innerHTML==="Red" && accept.innerHTML==="Ad- vance To Gold") {
two.innerHTML="";
thirttwo.innerHTML="Red";}
else if (two.innerHTML==="Yellow" && accept.innerHTML==="Ad- vance To Gold") {
two.innerHTML="";
thirttwo.innerHTML="Yellow";}
else if (two.innerHTML==="Pink" && accept.innerHTML==="Ad- vance To Gold") {
two.innerHTML="";
thirttwo.innerHTML="Pink";}

else if (afour.innerHTML==="Two" && accept.innerHTML==="Ad- vance To Gold") {
afour.innerHTML="";
athitytwo.innerHTML="Two";}
else if (afour.innerHTML==="Red" && accept.innerHTML==="Ad- vance To Gold") {
afour.innerHTML="";
athitytwo.innerHTML="Red";}
else if (afour.innerHTML==="Yellow" && accept.innerHTML==="Ad- vance To Gold") {
afour.innerHTML="";
athitytwo.innerHTML="Yellow";}
else if (afour.innerHTML==="Pink" && accept.innerHTML==="Ad- vance To Gold") {
afour.innerHTML="";
athitytwo.innerHTML="Pink";}
 
else if (atwentyone.innerHTML==="Two" && accept.innerHTML==="Ad- vance To Gold") {
atwentyone.innerHTML="";
athitytwo.innerHTML="Two";}
else if (atwentyone.innerHTML==="Red" && accept.innerHTML==="Ad- vance To Gold") {
atwentyone.innerHTML="";
athitytwo.innerHTML="Red";}
else if (atwentyone.innerHTML==="Yellow" && accept.innerHTML==="Ad- vance To Gold") {
atwentyone.innerHTML="";
athitytwo.innerHTML="Yellow";}
else if (atwentyone.innerHTML==="Pink" && accept.innerHTML==="Ad- vance To Gold") {
atwentyone.innerHTML="";
athitytwo.innerHTML="Pink";}
 
else if (atwo.innerHTML==="Two" && accept.innerHTML==="Ad- vance To Gold") {
atwo.innerHTML="";
athitytwo.innerHTML="Two";}
else if (atwo.innerHTML==="Red" && accept.innerHTML==="Ad- vance To Gold") {
atwo.innerHTML="";
athitytwo.innerHTML="Red";}
else if (atwo.innerHTML==="Yellow" && accept.innerHTML==="Ad- vance To Gold") {
atwo.innerHTML="";
athitytwo.innerHTML="Yellow";}
else if (atwo.innerHTML==="Pink" && accept.innerHTML==="Ad- vance To Gold") {
atwo.innerHTML="";
athitytwo.innerHTML="Pink";}

else if (bfour.innerHTML==="Three" && accept.innerHTML==="Ad- vance To Gold") {
bfour.innerHTML="";
bthitytwo.innerHTML="Three";}
else if (bfour.innerHTML==="Red" && accept.innerHTML==="Ad- vance To Gold") {
bfour.innerHTML="";
bthitytwo.innerHTML="Red";}
else if (bfour.innerHTML==="Yellow" && accept.innerHTML==="Ad- vance To Gold") {
bfour.innerHTML="";
bthitytwo.innerHTML="Yellow";}
else if (bfour.innerHTML==="Pink" && accept.innerHTML==="Ad- vance To Gold") {
bfour.innerHTML="";
bthitytwo.innerHTML="Pink";}
 
else if (btwentyone.innerHTML==="Three" && accept.innerHTML==="Ad- vance To Gold") {
btwentyone.innerHTML="";
bthitytwo.innerHTML="Three";}
else if (btwentyone.innerHTML==="Red" && accept.innerHTML==="Ad- vance To Gold") {
btwentyone.innerHTML="";
bthitytwo.innerHTML="Red";}
else if (btwentyone.innerHTML==="Yellow" && accept.innerHTML==="Ad- vance To Gold") {
btwentyone.innerHTML="";
bthitytwo.innerHTML="Yellow";}
else if (btwentyone.innerHTML==="Pink" && accept.innerHTML==="Ad- vance To Gold") {
btwentyone.innerHTML="";
bthitytwo.innerHTML="Pink";}

else if (btwo.innerHTML==="Three" && accept.innerHTML==="Ad- vance To Gold") {
btwo.innerHTML="";
bthitytwo.innerHTML="Three";}
else if (btwo.innerHTML==="Red" && accept.innerHTML==="Ad- vance To Gold") {
btwo.innerHTML="";
bthitytwo.innerHTML="Red";}
else if (btwo.innerHTML==="Yellow" && accept.innerHTML==="Ad- vance To Gold") {
btwo.innerHTML="";
bthitytwo.innerHTML="Yellow";}
else if (btwo.innerHTML==="Pink" && accept.innerHTML==="Ad- vance To Gold") {
btwo.innerHTML="";
bthitytwo.innerHTML="Pink";}

else if (four.innerHTML==="One" && accept.innerHTML==="Back 3") {
four.innerHTML="";
one.innerHTML="One";}
else if (four.innerHTML==="Red" && accept.innerHTML==="Back 3") {
four.innerHTML="";
one.innerHTML="Red";}
else if (four.innerHTML==="Yellow" && accept.innerHTML==="Back 3") {
four.innerHTML="";
one.innerHTML="Yellow";}
else if (four.innerHTML==="Pink" && accept.innerHTML==="Back 3") {
four.innerHTML="";
one.innerHTML="Pink";}

else if (twentyone.innerHTML==="One" && accept.innerHTML==="Back 3") {
twentyone.innerHTML="";
eighteen.innerHTML="One";}
else if (twentyone.innerHTML==="Red" && accept.innerHTML==="Back 3") {
twentyone.innerHTML="";
eighteen.innerHTML="Red";}
else if (twentyone.innerHTML==="Yellow" && accept.innerHTML==="Back 3") {
twentyone.innerHTML="";
eighteen.innerHTML="Yellow";}
else if (twentyone.innerHTML==="Pink" && accept.innerHTML==="Back 3") {
twentyone.innerHTML="";
eighteen.innerHTML="Pink";}

else if (two.innerHTML==="One" && accept.innerHTML==="Back 3") {
two.innerHTML="";
twentyfive.innerHTML="One";}
else if (two.innerHTML==="Red" && accept.innerHTML==="Back 3") {
two.innerHTML="";
twentyfive.innerHTML="Red";}
else if (two.innerHTML==="Yellow" && accept.innerHTML==="Back 3") {
two.innerHTML="";
twentyfive.innerHTML="Yellow";}
else if (two.innerHTML==="Pink" && accept.innerHTML==="Back 3") {
two.innerHTML="";
twentyfive.innerHTML="Pink";}

else if (afour.innerHTML==="Two" && accept.innerHTML==="Back 3") {
afour.innerHTML="";
aone.innerHTML="Two";}
else if (afour.innerHTML==="Red" && accept.innerHTML==="Back 3") {
afour.innerHTML="";
aone.innerHTML="Red";}
else if (afour.innerHTML==="Yellow" && accept.innerHTML==="Back 3") {
afour.innerHTML="";
aone.innerHTML="Yellow";}
else if (afour.innerHTML==="Pink" && accept.innerHTML==="Back 3") {
afour.innerHTML="";
aone.innerHTML="Pink";}
 
else if (atwentyone.innerHTML==="Two" && accept.innerHTML==="Back 3") {
atwentyone.innerHTML="";
aeighteen.innerHTML="Two";}
else if (atwentyone.innerHTML==="Red" && accept.innerHTML==="Back 3") {
atwentyone.innerHTML="";
aeighteen.innerHTML="Red";}
else if (atwentyone.innerHTML==="Yellow" && accept.innerHTML==="Back 3") {
atwentyone.innerHTML="";
aeighteen.innerHTML="Yellow";}
else if (atwentyone.innerHTML==="Pink" && accept.innerHTML==="Back 3") {
atwentyone.innerHTML="";
aeighteen.innerHTML="Pink";}
 
else if (atwo.innerHTML==="Two" && accept.innerHTML==="Back 3") {
atwo.innerHTML="";
atwentyfive.innerHTML="Two";}
else if (atwo.innerHTML==="Red" && accept.innerHTML==="Back 3") {
atwo.innerHTML="";
atwentyfive.innerHTML="Red";}
else if (atwo.innerHTML==="Yellow" && accept.innerHTML==="Back 3") {
atwo.innerHTML="";
atwentyfive.innerHTML="Yellow";}
else if (atwo.innerHTML==="Pink" && accept.innerHTML==="Back 3") {
atwo.innerHTML="";
atwentyfive.innerHTML="Pink";}

else if (bfour.innerHTML==="Three" && accept.innerHTML==="Back 3") {
bfour.innerHTML="";
athree.innerHTML="Three";}
else if (bfour.innerHTML==="Red" && accept.innerHTML==="Back 3") {
bfour.innerHTML="";
athree.innerHTML="Red";}
else if (bfour.innerHTML==="Yellow" && accept.innerHTML==="Back 3") {
bfour.innerHTML="";
athree.innerHTML="Yellow";}
else if (bfour.innerHTML==="Pink" && accept.innerHTML==="Back 3") {
bfour.innerHTML="";
athree.innerHTML="Pink";}
 
else if (btwentyone.innerHTML==="Three" && accept.innerHTML==="Back 3") {
btwentyone.innerHTML="";
beighteen.innerHTML="Three";}
else if (btwentyone.innerHTML==="Red" && accept.innerHTML==="Back 3") {
btwentyone.innerHTML="";
beighteen.innerHTML="Red";}
else if (btwentyone.innerHTML==="Yellow" && accept.innerHTML==="Back 3") {
btwentyone.innerHTML="";
beighteen.innerHTML="Yellow";}
else if (btwentyone.innerHTML==="Pink" && accept.innerHTML==="Back 3") {
btwentyone.innerHTML="";
beighteen.innerHTML="Pink";}

else if (btwo.innerHTML==="Three" && accept.innerHTML==="Back 3") {
btwo.innerHTML="";
btwentyfive.innerHTML="Three";}
else if (btwo.innerHTML==="Red" && accept.innerHTML==="Back 3") {
btwo.innerHTML="";
btwentyfive.innerHTML="Red";}
else if (btwo.innerHTML==="Yellow" && accept.innerHTML==="Back 3") {
btwo.innerHTML="";
btwentyfive.innerHTML="Yellow";}
else if (btwo.innerHTML==="Pink" && accept.innerHTML==="Back 3") {
btwo.innerHTML="";
btwentyfive.innerHTML="Pink";}

else if (element.innerHTML==="Red") {
element.innerHTML="Yellow";}
else if (element.innerHTML==="Yellow") {
element.innerHTML="Pink";}
else if (element.innerHTML==="Pink") {
element.innerHTML="Red";}
else if (element.innerHTML!=="One") {
element.innerHTML="Red";}
else if (element.innerHTML==="One") {
element.innerHTML="Red";}}

function card1() {
var acc=document.getElementById("cardAcc");
var tile1a= document.getElementById("oneD");
var tile2a= document.getElementById("twoD");
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

else if (
acc.innerHTML==="Ad- vance To Go" && tile2a.innerHTML==="Two") {
acc.innerHTML="No- thing";} 
else if (
acc.innerHTML==="No- thing" && tile2a.innerHTML==="Two") {
acc.innerHTML="Jail";}
else if (acc.innerHTML==="Jail" && tile2a.innerHTML==="Two") 
{acc.innerHTML="+$150";}
else if (
acc.innerHTML==="+$150" && tile2a.innerHTML==="Two") {
acc.innerHTML="Ad- vance To Gold";}
else if (
acc.innerHTML==="Ad- vance To Gold" && tile2a.innerHTML==="Two") {
acc.innerHTML="-$100";}
else if (acc.innerHTML==="-$100" && tile2a.innerHTML==="Two") {
acc.innerHTML="Back 3";}
else if (
acc.innerHTML==="Back 3" && tile2a.innerHTML==="Two") {
acc.innerHTML="+$100";}
else if (
acc.innerHTML==="+$100" && tile2a.innerHTML==="Two") {
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
 
else if (acc.innerHTML==="Ad- vance To Go" && tile1a.innerHTML==="Yellow") {
acc.innerHTML="No- thing";}
else if (
acc.innerHTML==="No- thing" && tile1a.innerHTML==="Yellow") {
acc.innerHTML="Jail";}
else if (acc.innerHTML==="Jail" && tile1a.innerHTML==="Yellow") 
{acc.innerHTML="+$150";}
else if (
acc.innerHTML==="+$150" && tile1a.innerHTML==="Yellow") {
acc.innerHTML="Ad- vance To Gold";}
else if (
acc.innerHTML==="Ad- vance To Gold" && tile1a.innerHTML==="Yellow") {
acc.innerHTML="-$100";}
else if (acc.innerHTML==="-$100" && tile1a.innerHTML==="Yellow") {
acc.innerHTML="Back 3";}
else if (
acc.innerHTML==="Back 3" && tile1a.innerHTML==="Yellow") {
acc.innerHTML="+$100";}
else if (
acc.innerHTML==="+$100" && tile1a.innerHTML==="Yellow") {
acc.innerHTML="Ad- vance To Go";}

else if (
acc.innerHTML==="Ad- vance To Go" && tile2a.innerHTML==="Yellow") {
acc.innerHTML="No- thing";} 
else if (
acc.innerHTML==="No- thing" && tile2a.innerHTML==="Yellow") {
acc.innerHTML="Jail";}
else if (acc.innerHTML==="Jail" && tile2a.innerHTML==="Yellow") 
{acc.innerHTML="+$150";}
else if (
acc.innerHTML==="+$150" && tile2a.innerHTML==="Yellow") {
acc.innerHTML="Ad- vance To Gold";}
else if (
acc.innerHTML==="Ad- vance To Gold" && tile2a.innerHTML==="Yellow") {
acc.innerHTML="-$100";}
else if (acc.innerHTML==="-$100" && tile2a.innerHTML==="Yellow") {
acc.innerHTML="Back 3";}
else if (
acc.innerHTML==="Back 3" && tile2a.innerHTML==="Yellow") {
acc.innerHTML="+$100";}
else if (
acc.innerHTML==="+$100" && tile2a.innerHTML==="Yellow") {
acc.innerHTML="Ad- vance To Go";}

else if (acc.innerHTML==="Ad- vance To Go" && tile3a.innerHTML==="Yellow") {
acc.innerHTML="No- thing";}
else if (
acc.innerHTML==="No- thing" && tile3a.innerHTML==="Yellow") {
acc.innerHTML="Jail";}
else if (acc.innerHTML==="Jail" && tile3a.innerHTML==="Yellow") 
{acc.innerHTML="+$150";}
else if (
acc.innerHTML==="+$150" && tile3a.innerHTML==="Yellow") {
acc.innerHTML="Ad- vance To Gold";}
else if (
acc.innerHTML==="Ad- vance To Gold" && tile3a.innerHTML==="Yellow") {
acc.innerHTML="-$100";}
else if (acc.innerHTML==="-$100" && tile3a.innerHTML==="Yellow") {
acc.innerHTML="Back 3";}
else if (
acc.innerHTML==="Back 3" && tile3a.innerHTML==="Yellow") {
acc.innerHTML="+$100";}
else if (
acc.innerHTML==="+$100" && tile3a.innerHTML==="Yellow") {
acc.innerHTML="Ad- vance To Go";}

else if (acc.innerHTML==="Ad- vance To Go" && tile1a.innerHTML==="Red") {
acc.innerHTML="No- thing";}
else if (
acc.innerHTML==="No- thing" && tile1a.innerHTML==="Red") {
acc.innerHTML="Jail";}
else if (acc.innerHTML==="Jail" && tile1a.innerHTML==="Red") 
{acc.innerHTML="+$150";}
else if (
acc.innerHTML==="+$150" && tile1a.innerHTML==="Red") {
acc.innerHTML="Ad- vance To Gold";}
else if (
acc.innerHTML==="Ad- vance To Gold" && tile1a.innerHTML==="Red") {
acc.innerHTML="-$100";}
else if (acc.innerHTML==="-$100" && tile1a.innerHTML==="Red") {
acc.innerHTML="Back 3";}
else if (
acc.innerHTML==="Back 3" && tile1a.innerHTML==="Red") {
acc.innerHTML="+$100";}
else if (
acc.innerHTML==="+$100" && tile1a.innerHTML==="Red") {
acc.innerHTML="Ad- vance To Go";}

else if (
acc.innerHTML==="Ad- vance To Go" && tile2a.innerHTML==="Red") {
acc.innerHTML="No- thing";} 
else if (
acc.innerHTML==="No- thing" && tile2a.innerHTML==="Red") {
acc.innerHTML="Jail";}
else if (acc.innerHTML==="Jail" && tile2a.innerHTML==="Red") 
{acc.innerHTML="+$150";}
else if (
acc.innerHTML==="+$150" && tile2a.innerHTML==="Red") {
acc.innerHTML="Ad- vance To Gold";}
else if (
acc.innerHTML==="Ad- vance To Gold" && tile2a.innerHTML==="Red") {
acc.innerHTML="-$100";}
else if (acc.innerHTML==="-$100" && tile2a.innerHTML==="Red") {
acc.innerHTML="Back 3";}
else if (
acc.innerHTML==="Back 3" && tile2a.innerHTML==="Red") {
acc.innerHTML="+$100";}
else if (
acc.innerHTML==="+$100" && tile2a.innerHTML==="Red") {
acc.innerHTML="Ad- vance To Go";}

else if (acc.innerHTML==="Ad- vance To Go" && tile3a.innerHTML==="Red") {
acc.innerHTML="No- thing";}
else if (
acc.innerHTML==="No- thing" && tile3a.innerHTML==="Red") {
acc.innerHTML="Jail";}
else if (acc.innerHTML==="Jail" && tile3a.innerHTML==="Red") 
{acc.innerHTML="+$150";}
else if (
acc.innerHTML==="+$150" && tile3a.innerHTML==="Red") {
acc.innerHTML="Ad- vance To Gold";}
else if (
acc.innerHTML==="Ad- vance To Gold" && tile3a.innerHTML==="Red") {
acc.innerHTML="-$100";}
else if (acc.innerHTML==="-$100" && tile3a.innerHTML==="Red") {
acc.innerHTML="Back 3";}
else if (
acc.innerHTML==="Back 3" && tile3a.innerHTML==="Red") {
acc.innerHTML="+$100";}
else if (
acc.innerHTML==="+$100" && tile3a.innerHTML==="Red") {
acc.innerHTML="Ad- vance To Go";}

else if (acc.innerHTML==="Ad- vance To Go" && tile1a.innerHTML==="Pink") {
acc.innerHTML="No- thing";}
else if (
acc.innerHTML==="No- thing" && tile1a.innerHTML==="Pink") {
acc.innerHTML="Jail";}
else if (acc.innerHTML==="Jail" && tile1a.innerHTML==="Pink") 
{acc.innerHTML="+$150";}
else if (
acc.innerHTML==="+$150" && tile1a.innerHTML==="Pink") {
acc.innerHTML="Ad- vance To Gold";}
else if (
acc.innerHTML==="Ad- vance To Gold" && tile1a.innerHTML==="Pink") {
acc.innerHTML="-$100";}
else if (acc.innerHTML==="-$100" && tile1a.innerHTML==="Pink") {
acc.innerHTML="Back 3";}
else if (
acc.innerHTML==="Back 3" && tile1a.innerHTML==="Pink") {
acc.innerHTML="+$100";}
else if (
acc.innerHTML==="+$100" && tile1a.innerHTML==="Pink") {
acc.innerHTML="Ad- vance To Go";}

else if (
acc.innerHTML==="Ad- vance To Go" && tile2a.innerHTML==="Pink") {
acc.innerHTML="No- thing";} 
else if (
acc.innerHTML==="No- thing" && tile2a.innerHTML==="Pink") {
acc.innerHTML="Jail";}
else if (acc.innerHTML==="Jail" && tile2a.innerHTML==="Pink") 
{acc.innerHTML="+$150";}
else if (
acc.innerHTML==="+$150" && tile2a.innerHTML==="Pink") {
acc.innerHTML="Ad- vance To Gold";
gold.opacity="50%";
gold2.innerHTML="Pink";
tile2a.innerHTML="";}
else if (
acc.innerHTML==="Ad- vance To Gold" && tile2a.innerHTML==="Pink") {
acc.innerHTML="-$100";}
else if (acc.innerHTML==="-$100" && tile2a.innerHTML==="Pink") {
acc.innerHTML="Back 3";}
else if (
acc.innerHTML==="Back 3" && tile2a.innerHTML==="Pink") {
acc.innerHTML="+$100";}
else if (
acc.innerHTML==="+$100" && tile2a.innerHTML==="Pink") {
acc.innerHTML="Ad- vance To Go";} 
else if (acc.innerHTML==="") {
acc.innerHTML="+$150";}

else if (acc.innerHTML==="Ad- vance To Go" && tile3a.innerHTML==="Pink") {
acc.innerHTML="No- thing";}
else if (
acc.innerHTML==="No- thing" && tile3a.innerHTML==="Pink") {
acc.innerHTML="Jail";}
else if (acc.innerHTML==="Jail" && tile3a.innerHTML==="Pink") 
{acc.innerHTML="+$150";}
else if (
acc.innerHTML==="+$150" && tile3a.innerHTML==="Pink") {
acc.innerHTML="Ad- vance To Gold";}
else if (
acc.innerHTML==="Ad- vance To Gold" && tile3a.innerHTML==="Pink") {
acc.innerHTML="-$100";}
else if (acc.innerHTML==="-$100" && tile3a.innerHTML==="Pink") {
acc.innerHTML="Back 3";}
else if (
acc.innerHTML==="Back 3" && tile3a.innerHTML==="Pink") {
acc.innerHTML="+$100";}
else if (
acc.innerHTML==="+$100" && tile3a.innerHTML==="Pink") {
acc.innerHTML="Ad- vance To Go";}}
 
function card2() {
var acc=document.getElementById("cardAcc");
var tile1a= document.getElementById("oneU");
var tile2a= document.getElementById("twoU");
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

else if (
acc.innerHTML==="Ad- vance To Go" && tile2a.innerHTML==="Two") {
acc.innerHTML="No- thing";} 
else if (
acc.innerHTML==="No- thing" && tile2a.innerHTML==="Two") {
acc.innerHTML="Jail";}
else if (acc.innerHTML==="Jail" && tile2a.innerHTML==="Two") 
{acc.innerHTML="+$150";}
else if (
acc.innerHTML==="+$150" && tile2a.innerHTML==="Two") {
acc.innerHTML="Ad- vance To Gold";}
else if (
acc.innerHTML==="Ad- vance To Gold" && tile2a.innerHTML==="Two") {
acc.innerHTML="-$100";}
else if (acc.innerHTML==="-$100" && tile2a.innerHTML==="Two") {
acc.innerHTML="Back 3";}
else if (
acc.innerHTML==="Back 3" && tile2a.innerHTML==="Two") {
acc.innerHTML="+$100";}
else if (
acc.innerHTML==="+$100" && tile2a.innerHTML==="Two") {
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
 
else if (acc.innerHTML==="Ad- vance To Go" && tile1a.innerHTML==="Yellow") {
acc.innerHTML="No- thing";}
else if (
acc.innerHTML==="No- thing" && tile1a.innerHTML==="Yellow") {
acc.innerHTML="Jail";}
else if (acc.innerHTML==="Jail" && tile1a.innerHTML==="Yellow") 
{acc.innerHTML="+$150";}
else if (
acc.innerHTML==="+$150" && tile1a.innerHTML==="Yellow") {
acc.innerHTML="Ad- vance To Gold";}
else if (
acc.innerHTML==="Ad- vance To Gold" && tile1a.innerHTML==="Yellow") {
acc.innerHTML="-$100";}
else if (acc.innerHTML==="-$100" && tile1a.innerHTML==="Yellow") {
acc.innerHTML="Back 3";}
else if (
acc.innerHTML==="Back 3" && tile1a.innerHTML==="Yellow") {
acc.innerHTML="+$100";}
else if (
acc.innerHTML==="+$100" && tile1a.innerHTML==="Yellow") {
acc.innerHTML="Ad- vance To Go";}

else if (
acc.innerHTML==="Ad- vance To Go" && tile2a.innerHTML==="Yellow") {
acc.innerHTML="No- thing";} 
else if (
acc.innerHTML==="No- thing" && tile2a.innerHTML==="Yellow") {
acc.innerHTML="Jail";}
else if (acc.innerHTML==="Jail" && tile2a.innerHTML==="Yellow") 
{acc.innerHTML="+$150";}
else if (
acc.innerHTML==="+$150" && tile2a.innerHTML==="Yellow") {
acc.innerHTML="Ad- vance To Gold";}
else if (
acc.innerHTML==="Ad- vance To Gold" && tile2a.innerHTML==="Yellow") {
acc.innerHTML="-$100";}
else if (acc.innerHTML==="-$100" && tile2a.innerHTML==="Yellow") {
acc.innerHTML="Back 3";}
else if (
acc.innerHTML==="Back 3" && tile2a.innerHTML==="Yellow") {
acc.innerHTML="+$100";}
else if (
acc.innerHTML==="+$100" && tile2a.innerHTML==="Yellow") {
acc.innerHTML="Ad- vance To Go";}

else if (acc.innerHTML==="Ad- vance To Go" && tile3a.innerHTML==="Yellow") {
acc.innerHTML="No- thing";}
else if (
acc.innerHTML==="No- thing" && tile3a.innerHTML==="Yellow") {
acc.innerHTML="Jail";}
else if (acc.innerHTML==="Jail" && tile3a.innerHTML==="Yellow") 
{acc.innerHTML="+$150";}
else if (
acc.innerHTML==="+$150" && tile3a.innerHTML==="Yellow") {
acc.innerHTML="Ad- vance To Gold";}
else if (
acc.innerHTML==="Ad- vance To Gold" && tile3a.innerHTML==="Yellow") {
acc.innerHTML="-$100";}
else if (acc.innerHTML==="-$100" && tile3a.innerHTML==="Yellow") {
acc.innerHTML="Back 3";}
else if (
acc.innerHTML==="Back 3" && tile3a.innerHTML==="Yellow") {
acc.innerHTML="+$100";}
else if (
acc.innerHTML==="+$100" && tile3a.innerHTML==="Yellow") {
acc.innerHTML="Ad- vance To Go";}

else if (acc.innerHTML==="Ad- vance To Go" && tile1a.innerHTML==="Red") {
acc.innerHTML="No- thing";}
else if (
acc.innerHTML==="No- thing" && tile1a.innerHTML==="Red") {
acc.innerHTML="Jail";}
else if (acc.innerHTML==="Jail" && tile1a.innerHTML==="Red") 
{acc.innerHTML="+$150";}
else if (
acc.innerHTML==="+$150" && tile1a.innerHTML==="Red") {
acc.innerHTML="Ad- vance To Gold";}
else if (
acc.innerHTML==="Ad- vance To Gold" && tile1a.innerHTML==="Red") {
acc.innerHTML="-$100";}
else if (acc.innerHTML==="-$100" && tile1a.innerHTML==="Red") {
acc.innerHTML="Back 3";}
else if (
acc.innerHTML==="Back 3" && tile1a.innerHTML==="Red") {
acc.innerHTML="+$100";}
else if (
acc.innerHTML==="+$100" && tile1a.innerHTML==="Red") {
acc.innerHTML="Ad- vance To Go";}

else if (
acc.innerHTML==="Ad- vance To Go" && tile2a.innerHTML==="Red") {
acc.innerHTML="No- thing";} 
else if (
acc.innerHTML==="No- thing" && tile2a.innerHTML==="Red") {
acc.innerHTML="Jail";}
else if (acc.innerHTML==="Jail" && tile2a.innerHTML==="Red") 
{acc.innerHTML="+$150";}
else if (
acc.innerHTML==="+$150" && tile2a.innerHTML==="Red") {
acc.innerHTML="Ad- vance To Gold";}
else if (
acc.innerHTML==="Ad- vance To Gold" && tile2a.innerHTML==="Red") {
acc.innerHTML="-$100";}
else if (acc.innerHTML==="-$100" && tile2a.innerHTML==="Red") {
acc.innerHTML="Back 3";}
else if (
acc.innerHTML==="Back 3" && tile2a.innerHTML==="Red") {
acc.innerHTML="+$100";}
else if (
acc.innerHTML==="+$100" && tile2a.innerHTML==="Red") {
acc.innerHTML="Ad- vance To Go";}

else if (acc.innerHTML==="Ad- vance To Go" && tile3a.innerHTML==="Red") {
acc.innerHTML="No- thing";}
else if (
acc.innerHTML==="No- thing" && tile3a.innerHTML==="Red") {
acc.innerHTML="Jail";}
else if (acc.innerHTML==="Jail" && tile3a.innerHTML==="Red") 
{acc.innerHTML="+$150";}
else if (
acc.innerHTML==="+$150" && tile3a.innerHTML==="Red") {
acc.innerHTML="Ad- vance To Gold";}
else if (
acc.innerHTML==="Ad- vance To Gold" && tile3a.innerHTML==="Red") {
acc.innerHTML="-$100";}
else if (acc.innerHTML==="-$100" && tile3a.innerHTML==="Red") {
acc.innerHTML="Back 3";}
else if (
acc.innerHTML==="Back 3" && tile3a.innerHTML==="Red") {
acc.innerHTML="+$100";}
else if (
acc.innerHTML==="+$100" && tile3a.innerHTML==="Red") {
acc.innerHTML="Ad- vance To Go";}

else if (acc.innerHTML==="Ad- vance To Go" && tile1a.innerHTML==="Pink") {
acc.innerHTML="No- thing";}
else if (
acc.innerHTML==="No- thing" && tile1a.innerHTML==="Pink") {
acc.innerHTML="Jail";}
else if (acc.innerHTML==="Jail" && tile1a.innerHTML==="Pink") 
{acc.innerHTML="+$150";}
else if (
acc.innerHTML==="+$150" && tile1a.innerHTML==="Pink") {
acc.innerHTML="Ad- vance To Gold";}
else if (
acc.innerHTML==="Ad- vance To Gold" && tile1a.innerHTML==="Pink") {
acc.innerHTML="-$100";}
else if (acc.innerHTML==="-$100" && tile1a.innerHTML==="Pink") {
acc.innerHTML="Back 3";}
else if (
acc.innerHTML==="Back 3" && tile1a.innerHTML==="Pink") {
acc.innerHTML="+$100";}
else if (
acc.innerHTML==="+$100" && tile1a.innerHTML==="Pink") {
acc.innerHTML="Ad- vance To Go";}

else if (
acc.innerHTML==="Ad- vance To Go" && tile2a.innerHTML==="Pink") {
acc.innerHTML="No- thing";} 
else if (
acc.innerHTML==="No- thing" && tile2a.innerHTML==="Pink") {
acc.innerHTML="Jail";}
else if (acc.innerHTML==="Jail" && tile2a.innerHTML==="Pink") 
{acc.innerHTML="+$150";}
else if (
acc.innerHTML==="+$150" && tile2a.innerHTML==="Pink") {
acc.innerHTML="Ad- vance To Gold";
gold.opacity="50%";
gold2.innerHTML="Pink";
tile2a.innerHTML="";}
else if (
acc.innerHTML==="Ad- vance To Gold" && tile2a.innerHTML==="Pink") {
acc.innerHTML="-$100";}
else if (acc.innerHTML==="-$100" && tile2a.innerHTML==="Pink") {
acc.innerHTML="Back 3";}
else if (
acc.innerHTML==="Back 3" && tile2a.innerHTML==="Pink") {
acc.innerHTML="+$100";}
else if (
acc.innerHTML==="+$100" && tile2a.innerHTML==="Pink") {
acc.innerHTML="Ad- vance To Go";} 
else if (acc.innerHTML==="") {
acc.innerHTML="+$150";}

else if (acc.innerHTML==="Ad- vance To Go" && tile3a.innerHTML==="Pink") {
acc.innerHTML="No- thing";}
else if (
acc.innerHTML==="No- thing" && tile3a.innerHTML==="Pink") {
acc.innerHTML="Jail";}
else if (acc.innerHTML==="Jail" && tile3a.innerHTML==="Pink") 
{acc.innerHTML="+$150";}
else if (
acc.innerHTML==="+$150" && tile3a.innerHTML==="Pink") {
acc.innerHTML="Ad- vance To Gold";}
else if (
acc.innerHTML==="Ad- vance To Gold" && tile3a.innerHTML==="Pink") {
acc.innerHTML="-$100";}
else if (acc.innerHTML==="-$100" && tile3a.innerHTML==="Pink") {
acc.innerHTML="Back 3";}
else if (
acc.innerHTML==="Back 3" && tile3a.innerHTML==="Pink") {
acc.innerHTML="+$100";}
else if (
acc.innerHTML==="+$100" && tile3a.innerHTML==="Pink") {
acc.innerHTML="Ad- vance To Go";}}

function card3() {
var acc=document.getElementById("cardAcc");
var tile1a= document.getElementById("bone");
var tile2a= document.getElementById("btwo");
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

else if (
acc.innerHTML==="Ad- vance To Go" && tile2a.innerHTML==="Two") {
acc.innerHTML="No- thing";} 
else if (
acc.innerHTML==="No- thing" && tile2a.innerHTML==="Two") {
acc.innerHTML="Jail";}
else if (acc.innerHTML==="Jail" && tile2a.innerHTML==="Two") 
{acc.innerHTML="+$150";}
else if (
acc.innerHTML==="+$150" && tile2a.innerHTML==="Two") {
acc.innerHTML="Ad- vance To Gold";}
else if (
acc.innerHTML==="Ad- vance To Gold" && tile2a.innerHTML==="Two") {
acc.innerHTML="-$100";}
else if (acc.innerHTML==="-$100" && tile2a.innerHTML==="Two") {
acc.innerHTML="Back 3";}
else if (
acc.innerHTML==="Back 3" && tile2a.innerHTML==="Two") {
acc.innerHTML="+$100";}
else if (
acc.innerHTML==="+$100" && tile2a.innerHTML==="Two") {
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
 
else if (acc.innerHTML==="Ad- vance To Go" && tile1a.innerHTML==="Yellow") {
acc.innerHTML="No- thing";}
else if (
acc.innerHTML==="No- thing" && tile1a.innerHTML==="Yellow") {
acc.innerHTML="Jail";}
else if (acc.innerHTML==="Jail" && tile1a.innerHTML==="Yellow") 
{acc.innerHTML="+$150";}
else if (
acc.innerHTML==="+$150" && tile1a.innerHTML==="Yellow") {
acc.innerHTML="Ad- vance To Gold";}
else if (
acc.innerHTML==="Ad- vance To Gold" && tile1a.innerHTML==="Yellow") {
acc.innerHTML="-$100";}
else if (acc.innerHTML==="-$100" && tile1a.innerHTML==="Yellow") {
acc.innerHTML="Back 3";}
else if (
acc.innerHTML==="Back 3" && tile1a.innerHTML==="Yellow") {
acc.innerHTML="+$100";}
else if (
acc.innerHTML==="+$100" && tile1a.innerHTML==="Yellow") {
acc.innerHTML="Ad- vance To Go";}

else if (
acc.innerHTML==="Ad- vance To Go" && tile2a.innerHTML==="Yellow") {
acc.innerHTML="No- thing";} 
else if (
acc.innerHTML==="No- thing" && tile2a.innerHTML==="Yellow") {
acc.innerHTML="Jail";}
else if (acc.innerHTML==="Jail" && tile2a.innerHTML==="Yellow") 
{acc.innerHTML="+$150";}
else if (
acc.innerHTML==="+$150" && tile2a.innerHTML==="Yellow") {
acc.innerHTML="Ad- vance To Gold";}
else if (
acc.innerHTML==="Ad- vance To Gold" && tile2a.innerHTML==="Yellow") {
acc.innerHTML="-$100";}
else if (acc.innerHTML==="-$100" && tile2a.innerHTML==="Yellow") {
acc.innerHTML="Back 3";}
else if (
acc.innerHTML==="Back 3" && tile2a.innerHTML==="Yellow") {
acc.innerHTML="+$100";}
else if (
acc.innerHTML==="+$100" && tile2a.innerHTML==="Yellow") {
acc.innerHTML="Ad- vance To Go";}

else if (acc.innerHTML==="Ad- vance To Go" && tile3a.innerHTML==="Yellow") {
acc.innerHTML="No- thing";}
else if (
acc.innerHTML==="No- thing" && tile3a.innerHTML==="Yellow") {
acc.innerHTML="Jail";}
else if (acc.innerHTML==="Jail" && tile3a.innerHTML==="Yellow") 
{acc.innerHTML="+$150";}
else if (
acc.innerHTML==="+$150" && tile3a.innerHTML==="Yellow") {
acc.innerHTML="Ad- vance To Gold";}
else if (
acc.innerHTML==="Ad- vance To Gold" && tile3a.innerHTML==="Yellow") {
acc.innerHTML="-$100";}
else if (acc.innerHTML==="-$100" && tile3a.innerHTML==="Yellow") {
acc.innerHTML="Back 3";}
else if (
acc.innerHTML==="Back 3" && tile3a.innerHTML==="Yellow") {
acc.innerHTML="+$100";}
else if (
acc.innerHTML==="+$100" && tile3a.innerHTML==="Yellow") {
acc.innerHTML="Ad- vance To Go";}

else if (acc.innerHTML==="Ad- vance To Go" && tile1a.innerHTML==="Red") {
acc.innerHTML="No- thing";}
else if (
acc.innerHTML==="No- thing" && tile1a.innerHTML==="Red") {
acc.innerHTML="Jail";}
else if (acc.innerHTML==="Jail" && tile1a.innerHTML==="Red") 
{acc.innerHTML="+$150";}
else if (
acc.innerHTML==="+$150" && tile1a.innerHTML==="Red") {
acc.innerHTML="Ad- vance To Gold";}
else if (
acc.innerHTML==="Ad- vance To Gold" && tile1a.innerHTML==="Red") {
acc.innerHTML="-$100";}
else if (acc.innerHTML==="-$100" && tile1a.innerHTML==="Red") {
acc.innerHTML="Back 3";}
else if (
acc.innerHTML==="Back 3" && tile1a.innerHTML==="Red") {
acc.innerHTML="+$100";}
else if (
acc.innerHTML==="+$100" && tile1a.innerHTML==="Red") {
acc.innerHTML="Ad- vance To Go";}

else if (
acc.innerHTML==="Ad- vance To Go" && tile2a.innerHTML==="Red") {
acc.innerHTML="No- thing";} 
else if (
acc.innerHTML==="No- thing" && tile2a.innerHTML==="Red") {
acc.innerHTML="Jail";}
else if (acc.innerHTML==="Jail" && tile2a.innerHTML==="Red") 
{acc.innerHTML="+$150";}
else if (
acc.innerHTML==="+$150" && tile2a.innerHTML==="Red") {
acc.innerHTML="Ad- vance To Gold";}
else if (
acc.innerHTML==="Ad- vance To Gold" && tile2a.innerHTML==="Red") {
acc.innerHTML="-$100";}
else if (acc.innerHTML==="-$100" && tile2a.innerHTML==="Red") {
acc.innerHTML="Back 3";}
else if (
acc.innerHTML==="Back 3" && tile2a.innerHTML==="Red") {
acc.innerHTML="+$100";}
else if (
acc.innerHTML==="+$100" && tile2a.innerHTML==="Red") {
acc.innerHTML="Ad- vance To Go";}

else if (acc.innerHTML==="Ad- vance To Go" && tile3a.innerHTML==="Red") {
acc.innerHTML="No- thing";}
else if (
acc.innerHTML==="No- thing" && tile3a.innerHTML==="Red") {
acc.innerHTML="Jail";}
else if (acc.innerHTML==="Jail" && tile3a.innerHTML==="Red") 
{acc.innerHTML="+$150";}
else if (
acc.innerHTML==="+$150" && tile3a.innerHTML==="Red") {
acc.innerHTML="Ad- vance To Gold";}
else if (
acc.innerHTML==="Ad- vance To Gold" && tile3a.innerHTML==="Red") {
acc.innerHTML="-$100";}
else if (acc.innerHTML==="-$100" && tile3a.innerHTML==="Red") {
acc.innerHTML="Back 3";}
else if (
acc.innerHTML==="Back 3" && tile3a.innerHTML==="Red") {
acc.innerHTML="+$100";}
else if (
acc.innerHTML==="+$100" && tile3a.innerHTML==="Red") {
acc.innerHTML="Ad- vance To Go";}

else if (acc.innerHTML==="Ad- vance To Go" && tile1a.innerHTML==="Pink") {
acc.innerHTML="No- thing";}
else if (
acc.innerHTML==="No- thing" && tile1a.innerHTML==="Pink") {
acc.innerHTML="Jail";}
else if (acc.innerHTML==="Jail" && tile1a.innerHTML==="Pink") 
{acc.innerHTML="+$150";}
else if (
acc.innerHTML==="+$150" && tile1a.innerHTML==="Pink") {
acc.innerHTML="Ad- vance To Gold";}
else if (
acc.innerHTML==="Ad- vance To Gold" && tile1a.innerHTML==="Pink") {
acc.innerHTML="-$100";}
else if (acc.innerHTML==="-$100" && tile1a.innerHTML==="Pink") {
acc.innerHTML="Back 3";}
else if (
acc.innerHTML==="Back 3" && tile1a.innerHTML==="Pink") {
acc.innerHTML="+$100";}
else if (
acc.innerHTML==="+$100" && tile1a.innerHTML==="Pink") {
acc.innerHTML="Ad- vance To Go";}

else if (
acc.innerHTML==="Ad- vance To Go" && tile2a.innerHTML==="Pink") {
acc.innerHTML="No- thing";} 
else if (
acc.innerHTML==="No- thing" && tile2a.innerHTML==="Pink") {
acc.innerHTML="Jail";}
else if (acc.innerHTML==="Jail" && tile2a.innerHTML==="Pink") 
{acc.innerHTML="+$150";}
else if (
acc.innerHTML==="+$150" && tile2a.innerHTML==="Pink") {
acc.innerHTML="Ad- vance To Gold";}
else if (
acc.innerHTML==="Ad- vance To Gold" && tile2a.innerHTML==="Pink") {
acc.innerHTML="-$100";}
else if (acc.innerHTML==="-$100" && tile2a.innerHTML==="Pink") {
acc.innerHTML="Back 3";}
else if (
acc.innerHTML==="Back 3" && tile2a.innerHTML==="Pink") {
acc.innerHTML="+$100";}
else if (
acc.innerHTML==="+$100" && tile2a.innerHTML==="Pink") {
acc.innerHTML="Ad- vance To Go";} 
else if (acc.innerHTML==="") {
acc.innerHTML="+$150";}

else if (acc.innerHTML==="Ad- vance To Go" && tile3a.innerHTML==="Pink") {
acc.innerHTML="No- thing";}
else if (
acc.innerHTML==="No- thing" && tile3a.innerHTML==="Pink") {
acc.innerHTML="Jail";}
else if (acc.innerHTML==="Jail" && tile3a.innerHTML==="Pink") 
{acc.innerHTML="+$150";}
else if (
acc.innerHTML==="+$150" && tile3a.innerHTML==="Pink") {
acc.innerHTML="Ad- vance To Gold";}
else if (
acc.innerHTML==="Ad- vance To Gold" && tile3a.innerHTML==="Pink") {
acc.innerHTML="-$100";}
else if (acc.innerHTML==="-$100" && tile3a.innerHTML==="Pink") {
acc.innerHTML="Back 3";}
else if (
acc.innerHTML==="Back 3" && tile3a.innerHTML==="Pink") {
acc.innerHTML="+$100";}
else if (
acc.innerHTML==="+$100" && tile3a.innerHTML==="Pink") {
acc.innerHTML="Ad- vance To Go";}}

function playerOne() {
var dice=document.getElementById("node");
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
var free=document.getElementById("id24");
var buttonOne=document.getElementById("btn1");
var wallet=document.getElementById("wal1");
var y=document.getElementById("+a");
var z=document.getElementById("-a");
var x=document.getElementById("a111");
if (buttonOne.innerHTML==="One") {
buttonOne.innerHTML="P1";
one.innerHTML="One";
wallet.innerHTML="$1000";
y.innerHTML="+$10";
z.innerHTML="-$10";
x.innerHTML="P1";}
else if (one.innerHTML==="One" && dice.innerHTML==="1") {
two.innerHTML="One";
one.innerHTML="";}
else if (one.innerHTML==="One" && dice.innerHTML==="2") {
three.innerHTML="One";
one.innerHTML="";}
else if (one.innerHTML==="One" && dice.innerHTML==="3") {
four.innerHTML="One";
one.innerHTML="";}
else if (one.innerHTML==="One" && dice.innerHTML==="4") {
five.innerHTML="One";
one.innerHTML="";}
else if (one.innerHTML==="One" && dice.innerHTML==="5") {
six.innerHTML="One";
one.innerHTML="";}
else if (one.innerHTML==="One" && dice.innerHTML==="6") {
seven.innerHTML="One";
one.innerHTML="";}
else if (two.innerHTML==="One" && dice.innerHTML==="1") {
three.innerHTML="One";
two.innerHTML="";}
else if (two.innerHTML==="One" && dice.innerHTML==="2") {
four.innerHTML="One";
two.innerHTML="";}
else if (two.innerHTML==="One" && dice.innerHTML==="3") {
five.innerHTML="One";
two.innerHTML="";}
else if (two.innerHTML==="One" && dice.innerHTML==="4") {
six.innerHTML="One";
two.innerHTML="";}
else if (two.innerHTML==="One" && dice.innerHTML==="5") {
seven.innerHTML="One";
two.innerHTML="";}
else if (two.innerHTML==="One" && dice.innerHTML==="6") {
eight.innerHTML="One";
two.innerHTML="";}
else if (three.innerHTML==="One" && dice.innerHTML==="1") {
four.innerHTML="One";
three.innerHTML="";}
else if (three.innerHTML==="One" && dice.innerHTML==="2") {
five.innerHTML="One";
three.innerHTML="";}
else if (three.innerHTML==="One" && dice.innerHTML==="3") {
six.innerHTML="One";
three.innerHTML="";}
else if (three.innerHTML==="One" && dice.innerHTML==="4") {
seven.innerHTML="One";
three.innerHTML="";}
else if (three.innerHTML==="One" && dice.innerHTML==="5") {
eight.innerHTML="One";
three.innerHTML="";}
else if (three.innerHTML==="One" && dice.innerHTML==="6") {
nine.innerHTML="One";
three.innerHTML="";}
else if (four.innerHTML==="One" && dice.innerHTML==="1") {
five.innerHTML="One";
four.innerHTML="";}
else if (four.innerHTML==="One" && dice.innerHTML==="2") {
six.innerHTML="One";
four.innerHTML="";}
else if (four.innerHTML==="One" && dice.innerHTML==="3") {
seven.innerHTML="One";
four.innerHTML="";}
else if (four.innerHTML==="One" && dice.innerHTML==="4") {
eight.innerHTML="One";
four.innerHTML="";}
else if (four.innerHTML==="One" && dice.innerHTML==="5") {
nine.innerHTML="One";
four.innerHTML="";}
else if (four.innerHTML==="One" && dice.innerHTML==="6") {
ten.innerHTML="One";
four.innerHTML="";}
else if (five.innerHTML==="One" && dice.innerHTML==="1") {
six.innerHTML="One";
five.innerHTML="";}
else if (five.innerHTML==="One" && dice.innerHTML==="2") {
seven.innerHTML="One";
five.innerHTML="";}
else if (five.innerHTML==="One" && dice.innerHTML==="3") {
eight.innerHTML="One";
five.innerHTML="";}
else if (five.innerHTML==="One" && dice.innerHTML==="4") {
nine.innerHTML="One";
five.innerHTML="";}
else if (five.innerHTML==="One" && dice.innerHTML==="5") {
ten.innerHTML="One";
five.innerHTML="";}
else if (five.innerHTML==="One" && dice.innerHTML==="6") {
eleven.innerHTML="One";
five.innerHTML="";}
else if (six.innerHTML==="One" && dice.innerHTML==="1") {
seven.innerHTML="One";
six.innerHTML="";}
else if (six.innerHTML==="One" && dice.innerHTML==="2") {
eight.innerHTML="One";
six.innerHTML="";}
else if (six.innerHTML==="One" && dice.innerHTML==="3") {
nine.innerHTML="One";
six.innerHTML="";}
else if (six.innerHTML==="One" && dice.innerHTML==="4") {
ten.innerHTML="One";
six.innerHTML="";}
else if (six.innerHTML==="One" && dice.innerHTML==="5") {
eleven.innerHTML="One";
six.innerHTML="";}
else if (six.innerHTML==="One" && dice.innerHTML==="6") {
twelve.innerHTML="One";
six.innerHTML="";}
else if (seven.innerHTML==="One" && dice.innerHTML==="1") {
eight.innerHTML="One";
seven.innerHTML="";}
else if (seven.innerHTML==="One" && dice.innerHTML==="2") {
nine.innerHTML="One";
seven.innerHTML="";}
else if (seven.innerHTML==="One" && dice.innerHTML==="3") {
ten.innerHTML="One";
seven.innerHTML="";}
else if (seven.innerHTML==="One" && dice.innerHTML==="4") {
eleven.innerHTML="One";
seven.innerHTML="";}
else if (seven.innerHTML==="One" && dice.innerHTML==="5") {
twelve.innerHTML="One";
seven.innerHTML="";}
else if (seven.innerHTML==="One" && dice.innerHTML==="6") {
thirteen.innerHTML="One";
seven.innerHTML="";}
else if (eight.innerHTML==="One" && dice.innerHTML==="1") {
nine.innerHTML="One";
eight.innerHTML="";}
else if (eight.innerHTML==="One" && dice.innerHTML==="2") {
ten.innerHTML="One";
eight.innerHTML="";}
else if (eight.innerHTML==="One" && dice.innerHTML==="3") {
eleven.innerHTML="One";
eight.innerHTML="";}
else if (eight.innerHTML==="One" && dice.innerHTML==="4") {
twelve.innerHTML="One";
eight.innerHTML="";}
else if (eight.innerHTML==="One" && dice.innerHTML==="5") {
thirteen.innerHTML="One";
eight.innerHTML="";}
else if (eight.innerHTML==="One" && dice.innerHTML==="6") {
fourteen.innerHTML="One";
eight.innerHTML="";}
else if (nine.innerHTML==="One" && dice.innerHTML==="1") {
ten.innerHTML="One";
nine.innerHTML="";}
else if (nine.innerHTML==="One" && dice.innerHTML==="2") {
eleven.innerHTML="One";
nine.innerHTML="";}
else if (nine.innerHTML==="One" && dice.innerHTML==="3") {
twelve.innerHTML="One";
nine.innerHTML="";}
else if (nine.innerHTML==="One" && dice.innerHTML==="4") {
thirteen.innerHTML="One";
nine.innerHTML="";}
else if (nine.innerHTML==="One" && dice.innerHTML==="5") {
fourteen.innerHTML="One";
nine.innerHTML="";}
else if (nine.innerHTML==="One" && dice.innerHTML==="6") {
fifteen.innerHTML="One";
nine.innerHTML="";}
else if (ten.innerHTML==="One" && dice.innerHTML==="1") {
eleven.innerHTML="One";
ten.innerHTML="";}
else if (ten.innerHTML==="One" && dice.innerHTML==="2") {
twelve.innerHTML="One";
ten.innerHTML="";}
else if (ten.innerHTML==="One" && dice.innerHTML==="3") {
thirteen.innerHTML="One";
ten.innerHTML="";}
else if (ten.innerHTML==="One" && dice.innerHTML==="4") {
fourteen.innerHTML="One";
ten.innerHTML="";}
else if (ten.innerHTML==="One" && dice.innerHTML==="5") {
fifteen.innerHTML="One";
ten.innerHTML="";}
else if (ten.innerHTML==="One" && dice.innerHTML==="6") {
sixteen.innerHTML="One";
ten.innerHTML="";}
else if (eleven.innerHTML==="One" && dice.innerHTML==="1") {
twelve.innerHTML="One";
eleven.innerHTML="";}
else if (eleven.innerHTML==="One" && dice.innerHTML==="2") {
thirteen.innerHTML="One";
eleven.innerHTML="";}
else if (eleven.innerHTML==="One" && dice.innerHTML==="3") {
fourteen.innerHTML="One";
eleven.innerHTML="";}
else if (eleven.innerHTML==="One" && dice.innerHTML==="4") {
fifteen.innerHTML="One";
eleven.innerHTML="";}
else if (eleven.innerHTML==="One" && dice.innerHTML==="5") {
sixteen.innerHTML="One";
eleven.innerHTML="";}
else if (eleven.innerHTML==="One" && dice.innerHTML==="6") {
seventeen.innerHTML="One";
eleven.innerHTML="";}
else if (twelve.innerHTML==="One" && dice.innerHTML==="1") {
thirteen.innerHTML="One";
twelve.innerHTML="";}
else if (twelve.innerHTML==="One" && dice.innerHTML==="2") {
fourteen.innerHTML="One";
twelve.innerHTML="";}
else if (twelve.innerHTML==="One" && dice.innerHTML==="3") {
fifteen.innerHTML="One";
twelve.innerHTML="";}
else if (twelve.innerHTML==="One" && dice.innerHTML==="4") {
sixteen.innerHTML="One";
twelve.innerHTML="";}
else if (twelve.innerHTML==="One" && dice.innerHTML==="5") {
seventeen.innerHTML="One";
twelve.innerHTML="";}
else if (twelve.innerHTML==="One" && dice.innerHTML==="6") {
eighteen.innerHTML="One";
twelve.innerHTML="";}
else if (thirteen.innerHTML==="One" && dice.innerHTML==="1") {
fourteen.innerHTML="One";
thirteen.innerHTML="";}
else if (thirteen.innerHTML==="One" && dice.innerHTML==="2") {
fifteen.innerHTML="One";
thirteen.innerHTML="";}
else if (thirteen.innerHTML==="One" && dice.innerHTML==="3") {
sixteen.innerHTML="One";
thirteen.innerHTML="";}
else if (thirteen.innerHTML==="One" && dice.innerHTML==="4") {
seventeen.innerHTML="One";
thirteen.innerHTML="";}
else if (thirteen.innerHTML==="One" && dice.innerHTML==="5") {
eighteen.innerHTML="One";
thirteen.innerHTML="";}
else if (thirteen.innerHTML==="One" && dice.innerHTML==="6") {
nineteen.innerHTML="One";
thirteen.innerHTML="";}
else if (fourteen.innerHTML==="One" && dice.innerHTML==="1") {
fifteen.innerHTML="One";
fourteen.innerHTML="";}
else if (fourteen.innerHTML==="One" && dice.innerHTML==="2") {
sixteen.innerHTML="One";
fourteen.innerHTML="";}
else if (fourteen.innerHTML==="One" && dice.innerHTML==="3") {
seventeen.innerHTML="One";
fourteen.innerHTML="";}
else if (fourteen.innerHTML==="One" && dice.innerHTML==="4") {
eighteen.innerHTML="One";
fourteen.innerHTML="";}
else if (fourteen.innerHTML==="One" && dice.innerHTML==="5") {
nineteen.innerHTML="One";
fourteen.innerHTML="";}
else if (fourteen.innerHTML==="One" && dice.innerHTML==="6") {
twenty.innerHTML="One";
fourteen.innerHTML="";}
else if (fifteen.innerHTML==="One" && dice.innerHTML==="1") {
sixteen.innerHTML="One";
fifteen.innerHTML="";}
else if (fifteen.innerHTML==="One" && dice.innerHTML==="2") {
seventeen.innerHTML="One";
fifteen.innerHTML="";}
else if (fifteen.innerHTML==="One" && dice.innerHTML==="3") {
eighteen.innerHTML="One";
fifteen.innerHTML="";}
else if (fifteen.innerHTML==="One" && dice.innerHTML==="4") {
nineteen.innerHTML="One";
fifteen.innerHTML="";}
else if (fifteen.innerHTML==="One" && dice.innerHTML==="5") {
twenty.innerHTML="One";
fifteen.innerHTML="";}
else if (fifteen.innerHTML==="One" && dice.innerHTML==="6") {
twentyone.innerHTML="One";
fifteen.innerHTML="";}
else if (sixteen.innerHTML==="One" && dice.innerHTML==="1") {
seventeen.innerHTML="One";
sixteen.innerHTML="";}
else if (sixteen.innerHTML==="One" && dice.innerHTML==="2") {
eighteen.innerHTML="One";
sixteen.innerHTML="";}
else if (sixteen.innerHTML==="One" && dice.innerHTML==="3") {
nineteen.innerHTML="One";
sixteen.innerHTML="";}
else if (sixteen.innerHTML==="One" && dice.innerHTML==="4") {
twenty.innerHTML="One";
sixteen.innerHTML="";}
else if (sixteen.innerHTML==="One" && dice.innerHTML==="5") {
twentyone.innerHTML="One";
sixteen.innerHTML="";}
else if (sixteen.innerHTML==="One" && dice.innerHTML==="6") {
twentytwo.innerHTML="One";
sixteen.innerHTML="";}
else if (seventeen.innerHTML==="One" && dice.innerHTML==="1") {
eighteen.innerHTML="One";
seventeen.innerHTML="";}
else if (seventeen.innerHTML==="One" && dice.innerHTML==="2") {
nineteen.innerHTML="One";
seventeen.innerHTML="";}
else if (seventeen.innerHTML==="One" && dice.innerHTML==="3") {
twenty.innerHTML="One";
seventeen.innerHTML="";}
else if (seventeen.innerHTML==="One" && dice.innerHTML==="4") {
twentyone.innerHTML="One";
seventeen.innerHTML="";}
else if (seventeen.innerHTML==="One" && dice.innerHTML==="5") {
twentytwo.innerHTML="One";
seventeen.innerHTML="";}
else if (seventeen.innerHTML==="One" && dice.innerHTML==="6") {
twentythree.innerHTML="One";
seventeen.innerHTML="";}
else if (eighteen.innerHTML==="One" && dice.innerHTML==="1") {
nineteen.innerHTML="One";
eighteen.innerHTML="";}
else if (eighteen.innerHTML==="One" && dice.innerHTML==="2") {
twenty.innerHTML="One";
eighteen.innerHTML="";}
else if (eighteen.innerHTML==="One" && dice.innerHTML==="3") {
twentyone.innerHTML="One";
eighteen.innerHTML="";}
else if (eighteen.innerHTML==="One" && dice.innerHTML==="4") {
twentytwo.innerHTML="One";
eighteen.innerHTML="";}
else if (eighteen.innerHTML==="One" && dice.innerHTML==="5") {
twentythree.innerHTML="One";
eighteen.innerHTML="";}
else if (eighteen.innerHTML==="One" && dice.innerHTML==="6") {
twentyfour.innerHTML="One";
eighteen.innerHTML="";
free.style.background="black";
free.style.color="white";}
else if (nineteen.innerHTML==="One" && dice.innerHTML==="1") {
twenty.innerHTML="One";
nineteen.innerHTML="";}
else if (nineteen.innerHTML==="One" && dice.innerHTML==="2") {
twentyone.innerHTML="One";
nineteen.innerHTML="";}
else if (nineteen.innerHTML==="One" && dice.innerHTML==="3") {
twentytwo.innerHTML="One";
nineteen.innerHTML="";}
else if (nineteen.innerHTML==="One" && dice.innerHTML==="4") {
twentythree.innerHTML="One";
nineteen.innerHTML="";}
else if (nineteen.innerHTML==="One" && dice.innerHTML==="5") {
twentyfour.innerHTML="One";
nineteen.innerHTML="";
free.style.background="black";
free.style.color="white";}
else if (nineteen.innerHTML==="One" && dice.innerHTML==="6") {
twentyfive.innerHTML="One";
nineteen.innerHTML="";}
else if (twenty.innerHTML==="One" && dice.innerHTML==="1") {
twentyone.innerHTML="One";
twenty.innerHTML="";}
else if (twenty.innerHTML==="One" && dice.innerHTML==="2") {
twentytwo.innerHTML="One";
twenty.innerHTML="";}
else if (twenty.innerHTML==="One" && dice.innerHTML==="3") {
twentythree.innerHTML="One";
twenty.innerHTML="";}
else if (twenty.innerHTML==="One" && dice.innerHTML==="4") {
twentyfour.innerHTML="One";
twenty.innerHTML="";
free.style.background="black";
free.style.color="white";}
else if (twenty.innerHTML==="One" && dice.innerHTML==="5") {
twentyfive.innerHTML="One";
twenty.innerHTML="";}
else if (twenty.innerHTML==="One" && dice.innerHTML==="6") {
twentysix.innerHTML="One";
twenty.innerHTML="";}
else if (twentyone.innerHTML==="One" && dice.innerHTML==="1") {
twentytwo.innerHTML="One";
twentyone.innerHTML="";}
else if (twentyone.innerHTML==="One" && dice.innerHTML==="2") {
twentythree.innerHTML="One";
twentyone.innerHTML="";}
else if (twentyone.innerHTML==="One" && dice.innerHTML==="3") {
twentyfour.innerHTML="One";
twentyone.innerHTML="";
free.style.background="black";
free.style.color="white";}
else if (twentyone.innerHTML==="One" && dice.innerHTML==="4") {
twentyfive.innerHTML="One";
twentyone.innerHTML="";}
else if (twentyone.innerHTML==="One" && dice.innerHTML==="5") {
twentysix.innerHTML="One";
twentyone.innerHTML="";}
else if (twentyone.innerHTML==="One" && dice.innerHTML==="6") {
twentyseven.innerHTML="One";
twentyone.innerHTML="";}
else if (twentytwo.innerHTML==="One" && dice.innerHTML==="1") {
twentythree.innerHTML="One";
twentytwo.innerHTML="";}
else if (twentytwo.innerHTML==="One" && dice.innerHTML==="2") {
twentyfour.innerHTML="One";
twentytwo.innerHTML="";
free.style.background="black";
free.style.color="white";}
else if (twentytwo.innerHTML==="One" && dice.innerHTML==="3") {
twentyfive.innerHTML="One";
twentytwo.innerHTML="";}
else if (twentytwo.innerHTML==="One" && dice.innerHTML==="4") {
twentysix.innerHTML="One";
twentytwo.innerHTML="";}
else if (twentytwo.innerHTML==="One" && dice.innerHTML==="5") {
twentyseven.innerHTML="One";
twentytwo.innerHTML="";}
else if (twentytwo.innerHTML==="One" && dice.innerHTML==="6") {
twentyeight.innerHTML="One";
twentytwo.innerHTML="";}
else if (twentythree.innerHTML==="One" && dice.innerHTML==="1") {
twentyfour.innerHTML="One";
twentythree.innerHTML="";
free.style.background="black";
free.style.color="white";}
else if (twentythree.innerHTML==="One" && dice.innerHTML==="2") {
twentyfive.innerHTML="One";
twentythree.innerHTML="";}
else if (twentythree.innerHTML==="One" && dice.innerHTML==="3") {
twentysix.innerHTML="One";
twentythree.innerHTML="";}
else if (twentythree.innerHTML==="One" && dice.innerHTML==="4") {
twentyseven.innerHTML="One";
twentythree.innerHTML="";}
else if (twentythree.innerHTML==="One" && dice.innerHTML==="5") {
twentyeight.innerHTML="One";
twentythree.innerHTML="";}
else if (twentythree.innerHTML==="One" && dice.innerHTML==="6") {
twentynine.innerHTML="One";
twentythree.innerHTML="";}
else if  (twentyfive.innerHTML==="One" && dice.innerHTML==="1") {
twentysix.innerHTML="One";
twentyfive.innerHTML="";}
else if (twentyfive.innerHTML==="One" && dice.innerHTML==="2") {
twentyseven.innerHTML="One";
twentyfive.innerHTML="";}
else if (twentyfive.innerHTML==="One" && dice.innerHTML==="3") {
twentyeight.innerHTML="One";
twentyfive.innerHTML="";}
else if (twentyfive.innerHTML==="One" && dice.innerHTML==="4") {
twentynine.innerHTML="One";
twentyfive.innerHTML="";}
else if (twentyfive.innerHTML==="One" && dice.innerHTML==="5") {
thirty.innerHTML="One";
twentyfive.innerHTML="";}
else if (twentyfive.innerHTML==="One" && dice.innerHTML==="6") {
thirtyone.innerHTML="One";
twentyfive.innerHTML="";}
else if (twentysix.innerHTML==="One" && dice.innerHTML==="1") {
twentyseven.innerHTML="One";
twentysix.innerHTML="";}
else if (twentysix.innerHTML==="One" && dice.innerHTML==="2") {
twentyeight.innerHTML="One";
twentysix.innerHTML="";}
else if (twentysix.innerHTML==="One" && dice.innerHTML==="3") {
twentynine.innerHTML="One";
twentysix.innerHTML="";}
else if (twentysix.innerHTML==="One" && dice.innerHTML==="4") {
thirty.innerHTML="One";
twentysix.innerHTML="";}
else if (twentysix.innerHTML==="One" && dice.innerHTML==="5") {
thirtyone.innerHTML="One";
twentysix.innerHTML="";}
else if (twentysix.innerHTML==="One" && dice.innerHTML==="6") {
thirtytwo.innerHTML="One";
twentysix.innerHTML="";}
else if (twentyseven.innerHTML==="One" && dice.innerHTML==="1") {
twentyeight.innerHTML="One";
twentyseven.innerHTML="";}
else if (twentyseven.innerHTML==="One" && dice.innerHTML==="2") {
twentynine.innerHTML="One";
twentyseven.innerHTML="";}
else if (twentyseven.innerHTML==="One" && dice.innerHTML==="3") {
thirty.innerHTML="One";
twentyseven.innerHTML="";}
else if (twentyseven.innerHTML==="One" && dice.innerHTML==="4") {
thirtyone.innerHTML="One";
twentyseven.innerHTML="";}
else if (twentyseven.innerHTML==="One" && dice.innerHTML==="5") {
thirtytwo.innerHTML="One";
twentyseven.innerHTML="";}
else if (twentyseven.innerHTML==="One" && dice.innerHTML==="6") {
one.innerHTML="One";
twentyseven.innerHTML="";}
else if (twentyeight.innerHTML==="One" && dice.innerHTML==="1") {
twentynine.innerHTML="One";
twentyeight.innerHTML="";}
else if (twentyeight.innerHTML==="One" && dice.innerHTML==="2") {
thirty.innerHTML="One";
twentyeight.innerHTML="";}
else if (twentyeight.innerHTML==="One" && dice.innerHTML==="3") {
thirtyone.innerHTML="One";
twentyeight.innerHTML="";}
else if (twentyeight.innerHTML==="One" && dice.innerHTML==="4") {
thirtytwo.innerHTML="One";
twentyeight.innerHTML="";}
else if (twentyeight.innerHTML==="One" && dice.innerHTML==="5") {
one.innerHTML="One";
twentyeight.innerHTML="";}
else if (twentyeight.innerHTML==="One" && dice.innerHTML==="6") {
two.innerHTML="One";
twentyeigh.innerHTML="";}
else if (twentynine.innerHTML==="One" && dice.innerHTML==="1") {
thirty.innerHTML="One";
twentynine.innerHTML="";}
else if (twentynine.innerHTML==="One" && dice.innerHTML==="2") {
thirtyone.innerHTML="One";
twentynine.innerHTML="";}
else if (twentynine.innerHTML==="One" && dice.innerHTML==="3") {
thirtytwo.innerHTML="One";
twentynine.innerHTML="";}
else if (twentynine.innerHTML==="One" && dice.innerHTML==="4") {
one.innerHTML="One";
twentynine.innerHTML="";}
else if (twentynine.innerHTML==="One" && dice.innerHTML==="5") {
two.innerHTML="One";
twentynine.innerHTML="";}
else if (twentynine.innerHTML==="One" && dice.innerHTML==="6") {
three.innerHTML="One";
twentynine.innerHTML="";}
else if (thirty.innerHTML==="One" && dice.innerHTML==="1") {
thirtyone.innerHTML="One";
thirty.innerHTML="";}
else if (thirty.innerHTML==="One" && dice.innerHTML==="2") {
thirtytwo.innerHTML="One";
thirty.innerHTML="";}
else if (thirty.innerHTML==="One" && dice.innerHTML==="3") {
one.innerHTML="One";
thirty.innerHTML="";}
else if (thirty.innerHTML==="One" && dice.innerHTML==="4") {
two.innerHTML="One";
thirty.innerHTML="";}
else if (thirty.innerHTML==="One" && dice.innerHTML==="5") {
three.innerHTML="One";
thirty.innerHTML="";}
else if (thirty.innerHTML==="One" && dice.innerHTML==="6") {
four.innerHTML="One";
thirty.innerHTML="";}
else if (thirtyone.innerHTML==="One" && dice.innerHTML==="1") {
thirtytwo.innerHTML="One";
thirtyone.innerHTML="";}
else if (thirtyone.innerHTML==="One" && dice.innerHTML==="2") {
one.innerHTML="One";
thirtyone.innerHTML="";}
else if (thirtyone.innerHTML==="One" && dice.innerHTML==="3") {
two.innerHTML="One";
thirtyone.innerHTML="";}
else if (thirtyone.innerHTML==="One" && dice.innerHTML==="4") {
three.innerHTML="One";
thirtyone.innerHTML="";}
else if (thirtyone.innerHTML==="One" && dice.innerHTML==="5") {
four.innerHTML="One";
thirtyone.innerHTML="";}
else if (thirtyone.innerHTML==="One" && dice.innerHTML==="6") {
five.innerHTML="One";
thirtyone.innerHTML="";}
else if (thirtytwo.innerHTML==="One" && dice.innerHTML==="1") { 
one.innerHTML="One";
thirtytwo.innerHTML="";}
else if (thirtytwo.innerHTML==="One" && dice.innerHTML==="2") { 
two.innerHTML="One";
thirtytwo.innerHTML="";}
else if (thirtytwo.innerHTML==="One" && dice.innerHTML==="3") { 
three.innerHTML="One";
thirtytwo.innerHTML="";}
else if (thirtytwo.innerHTML==="One" && dice.innerHTML==="4") { 
four.innerHTML="One";
thirtytwo.innerHTML="";}
else if (thirtytwo.innerHTML==="One" && dice.innerHTML==="5") { 
five.innerHTML="One";
thirtytwo.innerHTML="";}
else if (thirtytwo.innerHTML==="One" && dice.innerHTML==="6") { 
six.innerHTML="One";
thirtytwo.innerHTML="";}
else if (one.innerHTML==="Red" && dice.innerHTML==="1") {
two.innerHTML="Red";
one.innerHTML="";}
else if (one.innerHTML==="Red" && dice.innerHTML==="2") {
three.innerHTML="Red";
one.innerHTML="";}
else if (one.innerHTML==="Red" && dice.innerHTML==="3") {
four.innerHTML="Red";
one.innerHTML="";}
else if (one.innerHTML==="Red" && dice.innerHTML==="4") {
five.innerHTML="Red";
one.innerHTML="";}
else if (one.innerHTML==="Red" && dice.innerHTML==="5") {
six.innerHTML="Red";
one.innerHTML="";}
else if (one.innerHTML==="Red" && dice.innerHTML==="6") {
seven.innerHTML="Red";
one.innerHTML="";}
else if (two.innerHTML==="Red" && dice.innerHTML==="1") {
three.innerHTML="Red";
two.innerHTML="";}
else if (two.innerHTML==="Red" && dice.innerHTML==="2") {
four.innerHTML="Red";
two.innerHTML="";}
else if (two.innerHTML==="Red" && dice.innerHTML==="3") {
five.innerHTML="Red";
two.innerHTML="";}
else if (two.innerHTML==="Red" && dice.innerHTML==="4") {
six.innerHTML="Red";
two.innerHTML="";}
else if (two.innerHTML==="Red" && dice.innerHTML==="5") {
seven.innerHTML="Red";
two.innerHTML="";}
else if (two.innerHTML==="Red" && dice.innerHTML==="6") {
eight.innerHTML="Red";
two.innerHTML="";}
else if (three.innerHTML==="Red" && dice.innerHTML==="1") {
four.innerHTML="Red";
three.innerHTML="";}
else if (three.innerHTML==="Red" && dice.innerHTML==="2") {
five.innerHTML="Red";
three.innerHTML="";}
else if (three.innerHTML==="Red" && dice.innerHTML==="3") {
six.innerHTML="Red";
three.innerHTML="";}
else if (three.innerHTML==="Red" && dice.innerHTML==="4") {
seven.innerHTML="Red";
three.innerHTML="";}
else if (three.innerHTML==="Red" && dice.innerHTML==="5") {
eight.innerHTML="Red";
three.innerHTML="";}
else if (three.innerHTML==="Red" && dice.innerHTML==="6") {
nine.innerHTML="Red";
three.innerHTML="";}
else if (four.innerHTML==="Red" && dice.innerHTML==="1") {
five.innerHTML="Red";
four.innerHTML="";}
else if (four.innerHTML==="Red" && dice.innerHTML==="2") {
six.innerHTML="Red";
four.innerHTML="";}
else if (four.innerHTML==="Red" && dice.innerHTML==="3") {
seven.innerHTML="Red";
four.innerHTML="";}
else if (four.innerHTML==="Red" && dice.innerHTML==="4") {
eight.innerHTML="Red";
four.innerHTML="";}
else if (four.innerHTML==="Red" && dice.innerHTML==="5") {
nine.innerHTML="Red";
four.innerHTML="";}
else if (four.innerHTML==="Red" && dice.innerHTML==="6") {
ten.innerHTML="Red";
four.innerHTML="";}
else if (five.innerHTML==="Red" && dice.innerHTML==="1") {
six.innerHTML="Red";
five.innerHTML="";}
else if (five.innerHTML==="Red" && dice.innerHTML==="2") {
seven.innerHTML="Red";
five.innerHTML="";}
else if (five.innerHTML==="Red" && dice.innerHTML==="3") {
eight.innerHTML="Red";
five.innerHTML="";}
else if (five.innerHTML==="Red" && dice.innerHTML==="4") {
nine.innerHTML="Red";
five.innerHTML="";}
else if (five.innerHTML==="Red" && dice.innerHTML==="5") {
ten.innerHTML="Red";
five.innerHTML="";}
else if (five.innerHTML==="Red" && dice.innerHTML==="6") {
eleven.innerHTML="Red";
five.innerHTML="";}
else if (six.innerHTML==="Red" && dice.innerHTML==="1") {
seven.innerHTML="Red";
six.innerHTML="";}
else if (six.innerHTML==="Red" && dice.innerHTML==="2") {
eight.innerHTML="Red";
six.innerHTML="";}
else if (six.innerHTML==="Red" && dice.innerHTML==="3") {
nine.innerHTML="Red";
six.innerHTML="";}
else if (six.innerHTML==="Red" && dice.innerHTML==="4") {
ten.innerHTML="Red";
six.innerHTML="";}
else if (six.innerHTML==="Red" && dice.innerHTML==="5") {
eleven.innerHTML="Red";
six.innerHTML="";}
else if (six.innerHTML==="Red" && dice.innerHTML==="6") {
twelve.innerHTML="Red";
six.innerHTML="";}
else if (seven.innerHTML==="Red" && dice.innerHTML==="1") {
eight.innerHTML="Red";
seven.innerHTML="";}
else if (seven.innerHTML==="Red" && dice.innerHTML==="2") {
nine.innerHTML="Red";
seven.innerHTML="";}
else if (seven.innerHTML==="Red" && dice.innerHTML==="3") {
ten.innerHTML="Red";
seven.innerHTML="";}
else if (seven.innerHTML==="Red" && dice.innerHTML==="4") {
eleven.innerHTML="Red";
seven.innerHTML="";}
else if (seven.innerHTML==="Red" && dice.innerHTML==="5") {
twelve.innerHTML="Red";
seven.innerHTML="";}
else if (seven.innerHTML==="Red" && dice.innerHTML==="6") {
thirteen.innerHTML="Red";
seven.innerHTML="";}
else if (eight.innerHTML==="Red" && dice.innerHTML==="1") {
nine.innerHTML="Red";
eight.innerHTML="";}
else if (eight.innerHTML==="Red" && dice.innerHTML==="2") {
ten.innerHTML="Red";
eight.innerHTML="";}
else if (eight.innerHTML==="Red" && dice.innerHTML==="3") {
eleven.innerHTML="Red";
eight.innerHTML="";}
else if (eight.innerHTML==="Red" && dice.innerHTML==="4") {
twelve.innerHTML="Red";
eight.innerHTML="";}
else if (eight.innerHTML==="Red" && dice.innerHTML==="5") {
thirteen.innerHTML="Red";
eight.innerHTML="";}
else if (eight.innerHTML==="Red" && dice.innerHTML==="6") {
fourteen.innerHTML="Red";
eight.innerHTML="";}
else if (nine.innerHTML==="Red" && dice.innerHTML==="1") {
ten.innerHTML="Red";
nine.innerHTML="";}
else if (nine.innerHTML==="Red" && dice.innerHTML==="2") {
eleven.innerHTML="Red";
nine.innerHTML="";}
else if (nine.innerHTML==="Red" && dice.innerHTML==="3") {
twelve.innerHTML="Red";
nine.innerHTML="";}
else if (nine.innerHTML==="Red" && dice.innerHTML==="4") {
thirteen.innerHTML="Red";
nine.innerHTML="";}
else if (nine.innerHTML==="Red" && dice.innerHTML==="5") {
fourteen.innerHTML="Red";
nine.innerHTML="";}
else if (nine.innerHTML==="Red" && dice.innerHTML==="6") {
fifteen.innerHTML="Red";
nine.innerHTML="";}
else if (ten.innerHTML==="Red" && dice.innerHTML==="1") {
eleven.innerHTML="Red";
ten.innerHTML="";}
else if (ten.innerHTML==="Red" && dice.innerHTML==="2") {
twelve.innerHTML="Red";
ten.innerHTML="";}
else if (ten.innerHTML==="Red" && dice.innerHTML==="3") {
thirteen.innerHTML="Red";
ten.innerHTML="";}
else if (ten.innerHTML==="Red" && dice.innerHTML==="4") {
fourteen.innerHTML="Red";
ten.innerHTML="";}
else if (ten.innerHTML==="Red" && dice.innerHTML==="5") {
fifteen.innerHTML="Red";
ten.innerHTML="";}
else if (ten.innerHTML==="Red" && dice.innerHTML==="6") {
sixteen.innerHTML="Red";
ten.innerHTML="";}
else if (eleven.innerHTML==="Red" && dice.innerHTML==="1") {
twelve.innerHTML="Red";
eleven.innerHTML="";}
else if (eleven.innerHTML==="Red" && dice.innerHTML==="2") {
thirteen.innerHTML="Red";
eleven.innerHTML="";}
else if (eleven.innerHTML==="Red" && dice.innerHTML==="3") {
fourteen.innerHTML="Red";
eleven.innerHTML="";}
else if (eleven.innerHTML==="Red" && dice.innerHTML==="4") {
fifteen.innerHTML="Red";
eleven.innerHTML="";}
else if (eleven.innerHTML==="Red" && dice.innerHTML==="5") {
sixteen.innerHTML="Red";
eleven.innerHTML="";}
else if (eleven.innerHTML==="Red" && dice.innerHTML==="6") {
seventeen.innerHTML="Red";
eleven.innerHTML="";}
else if (twelve.innerHTML==="Red" && dice.innerHTML==="1") {
thirteen.innerHTML="Red";
twelve.innerHTML="";}
else if (twelve.innerHTML==="Red" && dice.innerHTML==="2") {
fourteen.innerHTML="Red";
twelve.innerHTML="";}
else if (twelve.innerHTML==="Red" && dice.innerHTML==="3") {
fifteen.innerHTML="Red";
twelve.innerHTML="";}
else if (twelve.innerHTML==="Red" && dice.innerHTML==="4") {
sixteen.innerHTML="Red";
twelve.innerHTML="";}
else if (twelve.innerHTML==="Red" && dice.innerHTML==="5") {
seventeen.innerHTML="Red";
twelve.innerHTML="";}
else if (twelve.innerHTML==="Red" && dice.innerHTML==="6") {
eighteen.innerHTML="Red";
twelve.innerHTML="";}
else if (thirteen.innerHTML==="Red" && dice.innerHTML==="1") {
fourteen.innerHTML="Red";
thirteen.innerHTML="";}
else if (thirteen.innerHTML==="Red" && dice.innerHTML==="2") {
fifteen.innerHTML="Red";
thirteen.innerHTML="";}
else if (thirteen.innerHTML==="Red" && dice.innerHTML==="3") {
sixteen.innerHTML="Red";
thirteen.innerHTML="";}
else if (thirteen.innerHTML==="Red" && dice.innerHTML==="4") {
seventeen.innerHTML="Red";
thirteen.innerHTML="";}
else if (thirteen.innerHTML==="Red" && dice.innerHTML==="5") {
eighteen.innerHTML="Red";
thirteen.innerHTML="";}
else if (thirteen.innerHTML==="Red" && dice.innerHTML==="6") {
nineteen.innerHTML="Red";
thirteen.innerHTML="";}
else if (fourteen.innerHTML==="Red" && dice.innerHTML==="1") {
fifteen.innerHTML="Red";
fourteen.innerHTML="";}
else if (fourteen.innerHTML==="Red" && dice.innerHTML==="2") {
sixteen.innerHTML="Red";
fourteen.innerHTML="";}
else if (fourteen.innerHTML==="Red" && dice.innerHTML==="3") {
seventeen.innerHTML="Red";
fourteen.innerHTML="";}
else if (fourteen.innerHTML==="Red" && dice.innerHTML==="4") {
eighteen.innerHTML="Red";
fourteen.innerHTML="";}
else if (fourteen.innerHTML==="Red" && dice.innerHTML==="5") {
nineteen.innerHTML="Red";
fourteen.innerHTML="";}
else if (fourteen.innerHTML==="Red" && dice.innerHTML==="6") {
twenty.innerHTML="Red";
fourteen.innerHTML="";}
else if (fifteen.innerHTML==="Red" && dice.innerHTML==="1") {
sixteen.innerHTML="Red";
fifteen.innerHTML="";}
else if (fifteen.innerHTML==="Red" && dice.innerHTML==="2") {
seventeen.innerHTML="Red";
fifteen.innerHTML="";}
else if (fifteen.innerHTML==="Red" && dice.innerHTML==="3") {
eighteen.innerHTML="Red";
fifteen.innerHTML="";}
else if (fifteen.innerHTML==="Red" && dice.innerHTML==="4") {
nineteen.innerHTML="Red";
fifteen.innerHTML="";}
else if (fifteen.innerHTML==="Red" && dice.innerHTML==="5") {
twenty.innerHTML="Red";
fifteen.innerHTML="";}
else if (fifteen.innerHTML==="Red" && dice.innerHTML==="6") {
twentyone.innerHTML="Red";
fifteen.innerHTML="";}
else if (sixteen.innerHTML==="Red" && dice.innerHTML==="1") {
seventeen.innerHTML="Red";
sixteen.innerHTML="";}
else if (sixteen.innerHTML==="Red" && dice.innerHTML==="2") {
eighteen.innerHTML="Red";
sixteen.innerHTML="";}
else if (sixteen.innerHTML==="Red" && dice.innerHTML==="3") {
nineteen.innerHTML="Red";
sixteen.innerHTML="";}
else if (sixteen.innerHTML==="Red" && dice.innerHTML==="4") {
twenty.innerHTML="Red";
sixteen.innerHTML="";}
else if (sixteen.innerHTML==="Red" && dice.innerHTML==="5") {
twentyone.innerHTML="Red";
sixteen.innerHTML="";}
else if (sixteen.innerHTML==="Red" && dice.innerHTML==="6") {
twentytwo.innerHTML="Red";
sixteen.innerHTML="";}
else if (seventeen.innerHTML==="Red" && dice.innerHTML==="1") {
eighteen.innerHTML="Red";
seventeen.innerHTML="";}
else if (seventeen.innerHTML==="Red" && dice.innerHTML==="2") {
nineteen.innerHTML="Red";
seventeen.innerHTML="";}
else if (seventeen.innerHTML==="Red" && dice.innerHTML==="3") {
twenty.innerHTML="Red";
seventeen.innerHTML="";}
else if (seventeen.innerHTML==="Red" && dice.innerHTML==="4") {
twentyone.innerHTML="Red";
seventeen.innerHTML="";}
else if (seventeen.innerHTML==="Red" && dice.innerHTML==="5") {
twentytwo.innerHTML="Red";
seventeen.innerHTML="";}
else if (seventeen.innerHTML==="Red" && dice.innerHTML==="6") {
twentythree.innerHTML="Red";
seventeen.innerHTML="";}
else if (eighteen.innerHTML==="Red" && dice.innerHTML==="1") {
nineteen.innerHTML="Red";
eighteen.innerHTML="";}
else if (eighteen.innerHTML==="Red" && dice.innerHTML==="2") {
twenty.innerHTML="Red";
eighteen.innerHTML="";}
else if (eighteen.innerHTML==="Red" && dice.innerHTML==="3") {
twentyone.innerHTML="Red";
eighteen.innerHTML="";}
else if (eighteen.innerHTML==="Red" && dice.innerHTML==="4") {
twentytwo.innerHTML="Red";
eighteen.innerHTML="";}
else if (eighteen.innerHTML==="Red" && dice.innerHTML==="5") {
twentythree.innerHTML="Red";
eighteen.innerHTML="";}
else if (eighteen.innerHTML==="Red" && dice.innerHTML==="6") {
twentyfour.innerHTML="Red";
eighteen.innerHTML="";
free.style.background="black";
free.style.color="white";}
else if (nineteen.innerHTML==="Red" && dice.innerHTML==="1") {
twenty.innerHTML="Red";
nineteen.innerHTML="";}
else if (nineteen.innerHTML==="Red" && dice.innerHTML==="2") {
twentyone.innerHTML="Red";
nineteen.innerHTML="";}
else if (nineteen.innerHTML==="Red" && dice.innerHTML==="3") {
twentytwo.innerHTML="Red";
nineteen.innerHTML="";}
else if (nineteen.innerHTML==="Red" && dice.innerHTML==="4") {
twentythree.innerHTML="Red";
nineteen.innerHTML="";}
else if (nineteen.innerHTML==="Red" && dice.innerHTML==="5") {
twentyfour.innerHTML="Red";
nineteen.innerHTML="";
free.style.background="black";
free.style.color="white";}
else if (nineteen.innerHTML==="Red" && dice.innerHTML==="6") {
twentyfive.innerHTML="Red";
nineteen.innerHTML="";}
else if (twenty.innerHTML==="Red" && dice.innerHTML==="1") {
twentyone.innerHTML="Red";
twenty.innerHTML="";}
else if (twenty.innerHTML==="Red" && dice.innerHTML==="2") {
twentytwo.innerHTML="Red";
twenty.innerHTML="";}
else if (twenty.innerHTML==="Red" && dice.innerHTML==="3") {
twentythree.innerHTML="Red";
twenty.innerHTML="";}
else if (twenty.innerHTML==="Red" && dice.innerHTML==="4") {
twentyfour.innerHTML="Red";
twenty.innerHTML="";
free.style.background="black";
free.style.color="white";}
else if (twenty.innerHTML==="Red" && dice.innerHTML==="5") {
twentyfive.innerHTML="Red";
twenty.innerHTML="";}
else if (twenty.innerHTML==="Red" && dice.innerHTML==="6") {
twentysix.innerHTML="Red";
twenty.innerHTML="";}
else if (twentyone.innerHTML==="Red" && dice.innerHTML==="1") {
twentytwo.innerHTML="Red";
twentyone.innerHTML="";}
else if (twentyone.innerHTML==="Red" && dice.innerHTML==="2") {
twentythree.innerHTML="Red";
twentyone.innerHTML="";}
else if (twentyone.innerHTML==="Red" && dice.innerHTML==="3") {
twentyfour.innerHTML="Red";
twentyone.innerHTML="";
free.style.background="black";
free.style.color="white";}
else if (twentyone.innerHTML==="Red" && dice.innerHTML==="4") {
twentyfive.innerHTML="Red";
twentyone.innerHTML="";}
else if (twentyone.innerHTML==="Red" && dice.innerHTML==="5") {
twentysix.innerHTML="Red";
twentyone.innerHTML="";}
else if (twentyone.innerHTML==="Red" && dice.innerHTML==="6") {
twentyseven.innerHTML="Red";
twentyone.innerHTML="";}
else if (twentytwo.innerHTML==="Red" && dice.innerHTML==="1") {
twentythree.innerHTML="Red";
twentytwo.innerHTML="";}
else if (twentytwo.innerHTML==="Red" && dice.innerHTML==="2") {
twentyfour.innerHTML="Red";
twentytwo.innerHTML="";
free.style.background="black";
free.style.color="white";}
else if (twentytwo.innerHTML==="Red" && dice.innerHTML==="3") {
twentyfive.innerHTML="Red";
twentytwo.innerHTML="";}
else if (twentytwo.innerHTML==="Red" && dice.innerHTML==="4") {
twentysix.innerHTML="Red";
twentytwo.innerHTML="";}
else if (twentytwo.innerHTML==="Red" && dice.innerHTML==="5") {
twentyseven.innerHTML="Red";
twentytwo.innerHTML="";}
else if (twentytwo.innerHTML==="Red" && dice.innerHTML==="6") {
twentyeight.innerHTML="Red";
twentytwo.innerHTML="";}
else if (twentythree.innerHTML==="Red" && dice.innerHTML==="1") {
twentyfour.innerHTML="Red";
twentythree.innerHTML="";
free.style.background="black";
free.style.color="white";}
else if (twentythree.innerHTML==="Red" && dice.innerHTML==="2") {
twentyfive.innerHTML="Red";
twentythree.innerHTML="";}
else if (twentythree.innerHTML==="Red" && dice.innerHTML==="3") {
twentysix.innerHTML="Red";
twentythree.innerHTML="";}
else if (twentythree.innerHTML==="Red" && dice.innerHTML==="4") {
twentyseven.innerHTML="Red";
twentythree.innerHTML="";}
else if (twentythree.innerHTML==="Red" && dice.innerHTML==="5") {
twentyeight.innerHTML="Red";
twentythree.innerHTML="";;}
else if (twentythree.innerHTML==="Red" && dice.innerHTML==="6") {
twentynine.innerHTML="Red";
twentythree.innerHTML="";}
else if  (twentyfive.innerHTML==="Red" && dice.innerHTML==="1") {
twentysix.innerHTML="Red";
twentyfive.innerHTML="";}
else if (twentyfive.innerHTML==="Red" && dice.innerHTML==="2") {
twentyseven.innerHTML="Red";
twentyfive.innerHTML="";}
else if (twentyfive.innerHTML==="Red" && dice.innerHTML==="3") {
twentyeight.innerHTML="Red";
twentyfive.innerHTML="";}
else if (twentyfive.innerHTML==="Red" && dice.innerHTML==="4") {
twentynine.innerHTML="Red";
twentyfive.innerHTML="";}
else if (twentyfive.innerHTML==="Red" && dice.innerHTML==="5") {
thirty.innerHTML="Red";
twentyfive.innerHTML="";}
else if (twentyfive.innerHTML==="Red" && dice.innerHTML==="6") {
thirtyone.innerHTML="Red";
twentyfive.innerHTML="";}
else if (twentysix.innerHTML==="Red" && dice.innerHTML==="1") {
twentyseven.innerHTML="Red";
twentysix.innerHTML="";}
else if (twentysix.innerHTML==="Red" && dice.innerHTML==="2") {
twentyeight.innerHTML="Red";
twentysix.innerHTML="";}
else if (twentysix.innerHTML==="Red" && dice.innerHTML==="3") {
twentynine.innerHTML="Red";
twentysix.innerHTML="";}
else if (twentysix.innerHTML==="Red" && dice.innerHTML==="4") {
thirty.innerHTML="Red";
twentysix.innerHTML="";}
else if (twentysix.innerHTML==="Red" && dice.innerHTML==="5") {
thirtyone.innerHTML="Red";
twentysix.innerHTML="";}
else if (twentysix.innerHTML==="Red" && dice.innerHTML==="6") {
thirtytwo.innerHTML="Red";
twentysix.innerHTML="";}
else if (twentyseven.innerHTML==="Red" && dice.innerHTML==="1") {
twentyeight.innerHTML="Red";
twentyseven.innerHTML="";}
else if (twentyseven.innerHTML==="Red" && dice.innerHTML==="2") {
twentynine.innerHTML="Red";
twentyseven.innerHTML="";}
else if (twentyseven.innerHTML==="Red" && dice.innerHTML==="3") {
thirty.innerHTML="Red";
twentyseven.innerHTML="";}
else if (twentyseven.innerHTML==="Red" && dice.innerHTML==="4") {
thirtyone.innerHTML="Red";
twentyseven.innerHTML="";}
else if (twentyseven.innerHTML==="Red" && dice.innerHTML==="5") {
thirtytwo.innerHTML="Red";
twentyseven.innerHTML="";}
else if (twentyseven.innerHTML==="Red" && dice.innerHTML==="6") {
one.innerHTML="Red";
twentyseven.innerHTML="";}
else if (twentyeight.innerHTML==="Red" && dice.innerHTML==="1") {
twentynine.innerHTML="Red";
twentyeight.innerHTML="";}
else if (twentyeight.innerHTML==="Red" && dice.innerHTML==="2") {
thirty.innerHTML="Red";
twentyeight.innerHTML="";}
else if (twentyeight.innerHTML==="Red" && dice.innerHTML==="3") {
thirtyone.innerHTML="Red";
twentyeight.innerHTML="";}
else if (twentyeight.innerHTML==="Red" && dice.innerHTML==="4") {
thirtytwo.innerHTML="Red";
twentyeight.innerHTML="";}
else if (twentyeight.innerHTML==="Red" && dice.innerHTML==="5") {
one.innerHTML="Red";
twentyeight.innerHTML="";}
else if (twentyeight.innerHTML==="Red" && dice.innerHTML==="6") {
two.innerHTML="Red";
twentyeight.innerHTML="";}
else if (twentynine.innerHTML==="Red" && dice.innerHTML==="1") {
thirty.innerHTML="Red";
twentynine.innerHTML="";}
else if (twentynine.innerHTML==="Red" && dice.innerHTML==="2") {
thirtyone.innerHTML="Red";
twentynine.innerHTML="";}
else if (twentynine.innerHTML==="Red" && dice.innerHTML==="3") {
thirtytwo.innerHTML="Red";
twentynine.innerHTML="";}
else if (twentynine.innerHTML==="Red" && dice.innerHTML==="4") {
one.innerHTML="Red";
twentynine.innerHTML="";}
else if (twentynine.innerHTML==="Red" && dice.innerHTML==="5") {
two.innerHTML="Red";
twentynine.innerHTML="";}
else if (twentynine.innerHTML==="Red" && dice.innerHTML==="6") {
three.innerHTML="Red";
twentynine.innerHTML="";}
else if (thirty.innerHTML==="Red" && dice.innerHTML==="1") {
thirtyone.innerHTML="Red";
thirty.innerHTML="";}
else if (thirty.innerHTML==="Red" && dice.innerHTML==="2") {
thirtytwo.innerHTML="Red";
thirty.innerHTML="";}
else if (thirty.innerHTML==="Red" && dice.innerHTML==="3") {
one.innerHTML="Red";
thirty.innerHTML="";}
else if (thirty.innerHTML==="Red" && dice.innerHTML==="4") {
two.innerHTML="Red";
thirty.innerHTML="";}
else if (thirty.innerHTML==="Red" && dice.innerHTML==="5") {
three.innerHTML="Red";
thirty.innerHTML="";}
else if (thirty.innerHTML==="Red" && dice.innerHTML==="6") {
four.innerHTML="Red";
thirty.innerHTML="";}
else if (thirtyone.innerHTML==="Red" && dice.innerHTML==="1") {
thirtytwo.innerHTML="Red";
thirtyone.innerHTML="";}
else if (thirtyone.innerHTML==="Red" && dice.innerHTML==="2") {
one.innerHTML="Red";
thirtyone.innerHTML="";}
else if (thirtyone.innerHTML==="Red" && dice.innerHTML==="3") {
two.innerHTML="Red";
thirtyone.innerHTML="";}
else if (thirtyone.innerHTML==="Red" && dice.innerHTML==="4") {
three.innerHTML="Red";
thirtyone.innerHTML="";}
else if (thirtyone.innerHTML==="Red" && dice.innerHTML==="5") {
four.innerHTML="Red";
thirtyone.innerHTML="";}
else if (thirtyone.innerHTML==="Red" && dice.innerHTML==="6") {
five.innerHTML="Red";
thirtyone.innerHTML="";}
else if (thirtytwo.innerHTML==="Red" && dice.innerHTML==="1") { 
one.innerHTML="Red";
thirtytwo.innerHTML="";}
else if (thirtytwo.innerHTML==="Red" && dice.innerHTML==="2") { 
two.innerHTML="Red";
thirtytwo.innerHTML="";}
else if (thirtytwo.innerHTML==="Red" && dice.innerHTML==="3") { 
three.innerHTML="Red";
thirtytwo.innerHTML="";}
else if (thirtytwo.innerHTML==="Red" && dice.innerHTML==="4") { 
four.innerHTML="Red";
thirtytwo.innerHTML="";}
else if (thirtytwo.innerHTML==="Red" && dice.innerHTML==="5") { 
five.innerHTML="Red";
thirtytwo.innerHTML="";}
else if (thirtytwo.innerHTML==="Red" && dice.innerHTML==="6") { 
six.innerHTML="Red";
thirtytwo.innerHTML="";}
else if (one.innerHTML==="Yellow" && dice.innerHTML==="1") {
two.innerHTML="Yellow";
one.innerHTML="";}
else if (one.innerHTML==="Yellow" && dice.innerHTML==="2") {
three.innerHTML="Yellow";
one.innerHTML="";}
else if (one.innerHTML==="Yellow" && dice.innerHTML==="3") {
four.innerHTML="Yellow";
one.innerHTML="";}
else if (one.innerHTML==="Yellow" && dice.innerHTML==="4") {
five.innerHTML="Yellow";
one.innerHTML="";}
else if (one.innerHTML==="Yellow" && dice.innerHTML==="5") {
six.innerHTML="Yellow";
one.innerHTML="";}
else if (one.innerHTML==="Yellow" && dice.innerHTML==="6") {
seven.innerHTML="Yellow";
one.innerHTML="";}
else if (two.innerHTML==="Yellow" && dice.innerHTML==="1") {
three.innerHTML="Yellow";
two.innerHTML="";}
else if (two.innerHTML==="Yellow" && dice.innerHTML==="2") {
four.innerHTML="Yellow";
two.innerHTML="";}
else if (two.innerHTML==="Yellow" && dice.innerHTML==="3") {
five.innerHTML="Yellow";
two.innerHTML="";}
else if (two.innerHTML==="Yellow" && dice.innerHTML==="4") {
six.innerHTML="Yellow";
two.innerHTML="";}
else if (two.innerHTML==="Yellow" && dice.innerHTML==="5") {
seven.innerHTML="Yellow";
two.innerHTML="";}
else if (two.innerHTML==="Yellow" && dice.innerHTML==="6") {
eight.innerHTML="Yellow";
two.innerHTML="";}
else if (three.innerHTML==="Yellow" && dice.innerHTML==="1") {
four.innerHTML="Yellow";
three.innerHTML="";}
else if (three.innerHTML==="Yellow" && dice.innerHTML==="2") {
five.innerHTML="Yellow";
three.innerHTML="";}
else if (three.innerHTML==="Yellow" && dice.innerHTML==="3") {
six.innerHTML="Yellow";
three.innerHTML="";}
else if (three.innerHTML==="Yellow" && dice.innerHTML==="4") {
seven.innerHTML="Yellow";
three.innerHTML="";}
else if (three.innerHTML==="Yellow" && dice.innerHTML==="5") {
eight.innerHTML="Yellow";
three.innerHTML="";}
else if (three.innerHTML==="Yellow" && dice.innerHTML==="6") {
nine.innerHTML="Yellow";
three.innerHTML="";}
else if (four.innerHTML==="Yellow" && dice.innerHTML==="1") {
five.innerHTML="Yellow";
four.innerHTML="";}
else if (four.innerHTML==="Yellow" && dice.innerHTML==="2") {
six.innerHTML="Yellow";
four.innerHTML="";}
else if (four.innerHTML==="Yellow" && dice.innerHTML==="3") {
seven.innerHTML="Yellow";
four.innerHTML="";}
else if (four.innerHTML==="Yellow" && dice.innerHTML==="4") {
eight.innerHTML="Yellow";
four.innerHTML="";}
else if (four.innerHTML==="Yellow" && dice.innerHTML==="5") {
nine.innerHTML="Yellow";
four.innerHTML="";}
else if (four.innerHTML==="Yellow" && dice.innerHTML==="6") {
ten.innerHTML="Yellow";
four.innerHTML="";}
else if (five.innerHTML==="Yellow" && dice.innerHTML==="1") {
six.innerHTML="Yellow";
five.innerHTML="";}
else if (five.innerHTML==="Yellow" && dice.innerHTML==="2") {
seven.innerHTML="Yellow";
five.innerHTML="";}
else if (five.innerHTML==="Yellow" && dice.innerHTML==="3") {
eight.innerHTML="Yellow";
five.innerHTML="";}
else if (five.innerHTML==="Yellow" && dice.innerHTML==="4") {
nine.innerHTML="Yellow";
five.innerHTML="";}
else if (five.innerHTML==="Yellow" && dice.innerHTML==="5") {
ten.innerHTML="Yellow";
five.innerHTML="";}
else if (five.innerHTML==="Yellow" && dice.innerHTML==="6") {
eleven.innerHTML="Yellow";
five.innerHTML="";}
else if (six.innerHTML==="Yellow" && dice.innerHTML==="1") {
seven.innerHTML="Yellow";
six.innerHTML="";}
else if (six.innerHTML==="Yellow" && dice.innerHTML==="2") {
eight.innerHTML="Yellow";
six.innerHTML="";}
else if (six.innerHTML==="Yellow" && dice.innerHTML==="3") {
nine.innerHTML="Yellow";
six.innerHTML="";}
else if (six.innerHTML==="Yellow" && dice.innerHTML==="4") {
ten.innerHTML="Yellow";
six.innerHTML="";}
else if (six.innerHTML==="Yellow" && dice.innerHTML==="5") {
eleven.innerHTML="Yellow";
six.innerHTML="";}
else if (six.innerHTML==="Yellow" && dice.innerHTML==="6") {
twelve.innerHTML="Yellow";
six.innerHTML="";}
else if (seven.innerHTML==="Yellow" && dice.innerHTML==="1") {
eight.innerHTML="Yellow";
seven.innerHTML="";}
else if (seven.innerHTML==="Yellow" && dice.innerHTML==="2") {
nine.innerHTML="Yellow";
seven.innerHTML="";}
else if (seven.innerHTML==="Yellow" && dice.innerHTML==="3") {
ten.innerHTML="Yellow";
seven.innerHTML="";}
else if (seven.innerHTML==="Yellow" && dice.innerHTML==="4") {
eleven.innerHTML="Yellow";
seven.innerHTML="";}
else if (seven.innerHTML==="Yellow" && dice.innerHTML==="5") {
twelve.innerHTML="Yellow";
seven.innerHTML="";}
else if (seven.innerHTML==="Yellow" && dice.innerHTML==="6") {
thirteen.innerHTML="Yellow";
seven.innerHTML="";}
else if (eight.innerHTML==="Yellow" && dice.innerHTML==="1") {
nine.innerHTML="Yellow";
eight.innerHTML="";}
else if (eight.innerHTML==="Yellow" && dice.innerHTML==="2") {
ten.innerHTML="Yellow";
eight.innerHTML="";}
else if (eight.innerHTML==="Yellow" && dice.innerHTML==="3") {
eleven.innerHTML="Yellow";
eight.innerHTML="";}
else if (eight.innerHTML==="Yellow" && dice.innerHTML==="4") {
twelve.innerHTML="Yellow";
eight.innerHTML="";}
else if (eight.innerHTML==="Yellow" && dice.innerHTML==="5") {
thirteen.innerHTML="Yellow";
eight.innerHTML="";}
else if (eight.innerHTML==="Yellow" && dice.innerHTML==="6") {
fourteen.innerHTML="Yellow";
eight.innerHTML="";}
else if (nine.innerHTML==="Yellow" && dice.innerHTML==="1") {
ten.innerHTML="Yellow";
nine.innerHTML="";}
else if (nine.innerHTML==="Yellow" && dice.innerHTML==="2") {
eleven.innerHTML="Yellow";
nine.innerHTML="";}
else if (nine.innerHTML==="Yellow" && dice.innerHTML==="3") {
twelve.innerHTML="Yellow";
nine.innerHTML="";}
else if (nine.innerHTML==="Yellow" && dice.innerHTML==="4") {
thirteen.innerHTML="Yellow";
nine.innerHTML="";}
else if (nine.innerHTML==="Yellow" && dice.innerHTML==="5") {
fourteen.innerHTML="Yellow";
nine.innerHTML="";}
else if (nine.innerHTML==="Yellow" && dice.innerHTML==="6") {
fifteen.innerHTML="Yellow";
nine.innerHTML="";}
else if (ten.innerHTML==="Yellow" && dice.innerHTML==="1") {
eleven.innerHTML="Yellow";
ten.innerHTML="";}
else if (ten.innerHTML==="Yellow" && dice.innerHTML==="2") {
twelve.innerHTML="Yellow";
ten.innerHTML="";}
else if (ten.innerHTML==="Yellow" && dice.innerHTML==="3") {
thirteen.innerHTML="Yellow";
ten.innerHTML="";}
else if (ten.innerHTML==="Yellow" && dice.innerHTML==="4") {
fourteen.innerHTML="Yellow";
ten.innerHTML="";}
else if (ten.innerHTML==="Yellow" && dice.innerHTML==="5") {
fifteen.innerHTML="Yellow";
ten.innerHTML="";}
else if (ten.innerHTML==="Yellow" && dice.innerHTML==="6") {
sixteen.innerHTML="Yellow";
ten.innerHTML="";}
else if (eleven.innerHTML==="Yellow" && dice.innerHTML==="1") {
twelve.innerHTML="Yellow";
eleven.innerHTML="";}
else if (eleven.innerHTML==="Yellow" && dice.innerHTML==="2") {
thirteen.innerHTML="Yellow";
eleven.innerHTML="";}
else if (eleven.innerHTML==="Yellow" && dice.innerHTML==="3") {
fourteen.innerHTML="Yellow";
eleven.innerHTML="";}
else if (eleven.innerHTML==="Yellow" && dice.innerHTML==="4") {
fifteen.innerHTML="Yellow";
eleven.innerHTML="";}
else if (eleven.innerHTML==="Yellow" && dice.innerHTML==="5") {
sixteen.innerHTML="Yellow";
eleven.innerHTML="";}
else if (eleven.innerHTML==="Yellow" && dice.innerHTML==="6") {
seventeen.innerHTML="Yellow";
eleven.innerHTML="";}
else if (twelve.innerHTML==="Yellow" && dice.innerHTML==="1") {
thirteen.innerHTML="Yellow";
twelve.innerHTML="";}
else if (twelve.innerHTML==="Yellow" && dice.innerHTML==="2") {
fourteen.innerHTML="Yellow";
twelve.innerHTML="";}
else if (twelve.innerHTML==="Yellow" && dice.innerHTML==="3") {
fifteen.innerHTML="Yellow";
twelve.innerHTML="";}
else if (twelve.innerHTML==="Yellow" && dice.innerHTML==="4") {
sixteen.innerHTML="Yellow";
twelve.innerHTML="";}
else if (twelve.innerHTML==="Yellow" && dice.innerHTML==="5") {
seventeen.innerHTML="Yellow";
twelve.innerHTML="";}
else if (twelve.innerHTML==="Yellow" && dice.innerHTML==="6") {
eighteen.innerHTML="Yellow";
twelve.innerHTML="";}
else if (thirteen.innerHTML==="Yellow" && dice.innerHTML==="1") {
fourteen.innerHTML="Yellow";
thirteen.innerHTML="";}
else if (thirteen.innerHTML==="Yellow" && dice.innerHTML==="2") {
fifteen.innerHTML="Yellow";
thirteen.innerHTML="";}
else if (thirteen.innerHTML==="Yellow" && dice.innerHTML==="3") {
sixteen.innerHTML="Yellow";
thirteen.innerHTML="";}
else if (thirteen.innerHTML==="Yellow" && dice.innerHTML==="4") {
seventeen.innerHTML="Yellow";
thirteen.innerHTML="";}
else if (thirteen.innerHTML==="Yellow" && dice.innerHTML==="5") {
eighteen.innerHTML="Yellow";
thirteen.innerHTML="";}
else if (thirteen.innerHTML==="Yellow" && dice.innerHTML==="6") {
nineteen.innerHTML="Yellow";
thirteen.innerHTML="";}
else if (fourteen.innerHTML==="Yellow" && dice.innerHTML==="1") {
fifteen.innerHTML="Yellow";
fourteen.innerHTML="";}
else if (fourteen.innerHTML==="Yellow" && dice.innerHTML==="2") {
sixteen.innerHTML="Yellow";
fourteen.innerHTML="";}
else if (fourteen.innerHTML==="Yellow" && dice.innerHTML==="3") {
seventeen.innerHTML="Yellow";
fourteen.innerHTML="";}
else if (fourteen.innerHTML==="Yellow" && dice.innerHTML==="4") {
eighteen.innerHTML="Yellow";
fourteen.innerHTML="";}
else if (fourteen.innerHTML==="Yellow" && dice.innerHTML==="5") {
nineteen.innerHTML="Yellow";
fourteen.innerHTML="";}
else if (fourteen.innerHTML==="Yellow" && dice.innerHTML==="6") {
twenty.innerHTML="Yellow";
fourteen.innerHTML="";}
else if (fifteen.innerHTML==="Yellow" && dice.innerHTML==="1") {
sixteen.innerHTML="Yellow";
fifteen.innerHTML="";}
else if (fifteen.innerHTML==="Yellow" && dice.innerHTML==="2") {
seventeen.innerHTML="Yellow";
fifteen.innerHTML="";}
else if (fifteen.innerHTML==="Yellow" && dice.innerHTML==="3") {
eighteen.innerHTML="Yellow";
fifteen.innerHTML="";}
else if (fifteen.innerHTML==="Yellow" && dice.innerHTML==="4") {
nineteen.innerHTML="Yellow";
fifteen.innerHTML="";}
else if (fifteen.innerHTML==="Yellow" && dice.innerHTML==="5") {
twenty.innerHTML="Yellow";
fifteen.innerHTML="";}
else if (fifteen.innerHTML==="Yellow" && dice.innerHTML==="6") {
twentyone.innerHTML="Yellow";
fifteen.innerHTML="";}
else if (sixteen.innerHTML==="Yellow" && dice.innerHTML==="1") {
seventeen.innerHTML="Yellow";
sixteen.innerHTML="";}
else if (sixteen.innerHTML==="Yellow" && dice.innerHTML==="2") {
eighteen.innerHTML="Yellow";
sixteen.innerHTML="";}
else if (sixteen.innerHTML==="Yellow" && dice.innerHTML==="3") {
nineteen.innerHTML="Yellow";
sixteen.innerHTML="";}
else if (sixteen.innerHTML==="Yellow" && dice.innerHTML==="4") {
twenty.innerHTML="Yellow";
sixteen.innerHTML="";}
else if (sixteen.innerHTML==="Yellow" && dice.innerHTML==="5") {
twentyone.innerHTML="Yellow";
sixteen.innerHTML="";}
else if (sixteen.innerHTML==="Yellow" && dice.innerHTML==="6") {
twentytwo.innerHTML="Yellow";
sixteen.innerHTML="";}
else if (seventeen.innerHTML==="Yellow" && dice.innerHTML==="1") {
eighteen.innerHTML="Yellow";
seventeen.innerHTML="";}
else if (seventeen.innerHTML==="Yellow" && dice.innerHTML==="2") {
nineteen.innerHTML="Yellow";
seventeen.innerHTML="";}
else if (seventeen.innerHTML==="Yellow" && dice.innerHTML==="3") {
twenty.innerHTML="Yellow";
seventeen.innerHTML="";}
else if (seventeen.innerHTML==="Yellow" && dice.innerHTML==="4") {
twentyone.innerHTML="Yellow";
seventeen.innerHTML="";}
else if (seventeen.innerHTML==="Yellow" && dice.innerHTML==="5") {
twentytwo.innerHTML="Yellow";
seventeen.innerHTML="";}
else if (seventeen.innerHTML==="Yellow" && dice.innerHTML==="6") {
twentythree.innerHTML="Yellow";
seventeen.innerHTML="";}
else if (eighteen.innerHTML==="Yellow" && dice.innerHTML==="1") {
nineteen.innerHTML="Yellow";
eighteen.innerHTML="";}
else if (eighteen.innerHTML==="Yellow" && dice.innerHTML==="2") {
twenty.innerHTML="Yellow";
eighteen.innerHTML="";}
else if (eighteen.innerHTML==="Yellow" && dice.innerHTML==="3") {
twentyone.innerHTML="Yellow";
eighteen.innerHTML="";}
else if (eighteen.innerHTML==="Yellow" && dice.innerHTML==="4") {
twentytwo.innerHTML="Yellow";
eighteen.innerHTML="";}
else if (eighteen.innerHTML==="Yellow" && dice.innerHTML==="5") {
twentythree.innerHTML="Yellow";
eighteen.innerHTML="";}
else if (eighteen.innerHTML==="Yellow" && dice.innerHTML==="6") {
twentyfour.innerHTML="Yellow";
eighteen.innerHTML="";
free.style.background="black";
free.style.color="white";}
else if (nineteen.innerHTML==="Yellow" && dice.innerHTML==="1") {
twenty.innerHTML="Yellow";
nineteen.innerHTML="";}
else if (nineteen.innerHTML==="Yellow" && dice.innerHTML==="2") {
twentyone.innerHTML="Yellow";
nineteen.innerHTML="";}
else if (nineteen.innerHTML==="Yellow" && dice.innerHTML==="3") {
twentytwo.innerHTML="Yellow";
nineteen.innerHTML="";}
else if (nineteen.innerHTML==="Yellow" && dice.innerHTML==="4") {
twentythree.innerHTML="Yellow";
nineteen.innerHTML="";}
else if (nineteen.innerHTML==="Yellow" && dice.innerHTML==="5") {
twentyfour.innerHTML="Yellow";
nineteen.innerHTML="";
free.style.background="black";
free.style.color="white";}
else if (nineteen.innerHTML==="Yellow" && dice.innerHTML==="6") {
twentyfive.innerHTML="Yellow";
nineteen.innerHTML="";}
else if (twenty.innerHTML==="Yellow" && dice.innerHTML==="1") {
twentyone.innerHTML="Yellow";
twenty.innerHTML="";}
else if (twenty.innerHTML==="Yellow" && dice.innerHTML==="2") {
twentytwo.innerHTML="Yellow";
twenty.innerHTML="";}
else if (twenty.innerHTML==="Yellow" && dice.innerHTML==="3") {
twentythree.innerHTML="Yellow";
twenty.innerHTML="";}
else if (twenty.innerHTML==="Yellow" && dice.innerHTML==="4") {
twentyfour.innerHTML="Yellow";
twenty.innerHTML="";
free.style.background="black";
free.style.color="white";}
else if (twenty.innerHTML==="Yellow" && dice.innerHTML==="5") {
twentyfive.innerHTML="Yellow";
twenty.innerHTML="";}
else if (twenty.innerHTML==="Yellow" && dice.innerHTML==="6") {
twentysix.innerHTML="Yellow";
twenty.innerHTML="";}
else if (twentyone.innerHTML==="Yellow" && dice.innerHTML==="1") {
twentytwo.innerHTML="Yellow";
twentyone.innerHTML="";}
else if (twentyone.innerHTML==="Yellow" && dice.innerHTML==="2") {
twentythree.innerHTML="Yellow";
twentyone.innerHTML="";}
else if (twentyone.innerHTML==="Yellow" && dice.innerHTML==="3") {
twentyfour.innerHTML="Yellow";
twentyone.innerHTML="";
free.style.background="black";
free.style.color="white";}
else if (twentyone.innerHTML==="Yellow" && dice.innerHTML==="4") {
twentyfive.innerHTML="Yellow";
twentyone.innerHTML="";}
else if (twentyone.innerHTML==="Yellow" && dice.innerHTML==="5") {
twentysix.innerHTML="Yellow";
twentyone.innerHTML="";}
else if (twentyone.innerHTML==="Yellow" && dice.innerHTML==="6") {
twentyseven.innerHTML="Yellow";
twentyone.innerHTML="";}
else if (twentytwo.innerHTML==="Yellow" && dice.innerHTML==="1") {
twentythree.innerHTML="Yellow";
twentytwo.innerHTML="";}
else if (twentytwo.innerHTML==="Yellow" && dice.innerHTML==="2") {
twentyfour.innerHTML="Yellow";
twentytwo.innerHTML="";
free.style.background="black";
free.style.color="white";}
else if (twentytwo.innerHTML==="Yellow" && dice.innerHTML==="3") {
twentyfive.innerHTML="Yellow";
twentytwo.innerHTML="";}
else if (twentytwo.innerHTML==="Yellow" && dice.innerHTML==="4") {
twentysix.innerHTML="Yellow";
twentytwo.innerHTML="";}
else if (twentytwo.innerHTML==="Yellow" && dice.innerHTML==="5") {
twentyseven.innerHTML="Yellow";
twentytwo.innerHTML="";}
else if (twentytwo.innerHTML==="Yellow" && dice.innerHTML==="6") {
twentyeight.innerHTML="Yellow";
twentytwo.innerHTML="";}
else if (twentythree.innerHTML==="Yellow" && dice.innerHTML==="1") {
twentyfour.innerHTML="Yellow";
twentythree.innerHTML="";
free.style.background="black";
free.style.color="white";}
else if (twentythree.innerHTML==="Yellow" && dice.innerHTML==="2") {
twentyfive.innerHTML="Yellow";
twentythree.innerHTML="";}
else if (twentythree.innerHTML==="Yellow" && dice.innerHTML==="3") {
twentysix.innerHTML="Yellow";
twentythree.innerHTML="";}
else if (twentythree.innerHTML==="Yellow" && dice.innerHTML==="4") {
twentyseven.innerHTML="Yellow";
twentythree.innerHTML="";}
else if (twentythree.innerHTML==="Yellow" && dice.innerHTML==="5") {
twentyeight.innerHTML="Yellow";
twentythree.innerHTML="";}
else if (twentythree.innerHTML==="Yellow" && dice.innerHTML==="6") {
twentynine.innerHTML="Yellow";
twentythree.innerHTML="";}
else if  (twentyfive.innerHTML==="Yellow" && dice.innerHTML==="1") {
twentysix.innerHTML="Yellow";
twentyfive.innerHTML="";}
else if (twentyfive.innerHTML==="Yellow" && dice.innerHTML==="2") {
twentyseven.innerHTML="Yellow";
twentyfive.innerHTML="";}
else if (twentyfive.innerHTML==="Yellow" && dice.innerHTML==="3") {
twentyeight.innerHTML="Yellow";
twentyfive.innerHTML="";}
else if (twentyfive.innerHTML==="Yellow" && dice.innerHTML==="4") {
twentynine.innerHTML="Yellow";
twentyfive.innerHTML="";}
else if (twentyfive.innerHTML==="Yellow" && dice.innerHTML==="5") {
thirty.innerHTML="Yellow";
twentyfive.innerHTML="";}
else if (twentyfive.innerHTML==="Yellow" && dice.innerHTML==="6") {
thirtyone.innerHTML="Yellow";
twentyfive.innerHTML="";}
else if (twentysix.innerHTML==="Yellow" && dice.innerHTML==="1") {
twentyseven.innerHTML="Yellow";
twentysix.innerHTML="";}
else if (twentysix.innerHTML==="Yellow" && dice.innerHTML==="2") {
twentyeight.innerHTML="Yellow";
twentysix.innerHTML="";}
else if (twentysix.innerHTML==="Yellow" && dice.innerHTML==="3") {
twentynine.innerHTML="Yellow";
twentysix.innerHTML="";}
else if (twentysix.innerHTML==="Yellow" && dice.innerHTML==="4") {
thirty.innerHTML="Yellow";
twentysix.innerHTML="";}
else if (twentysix.innerHTML==="Yellow" && dice.innerHTML==="5") {
thirtyone.innerHTML="Yellow";
twentysix.innerHTML="";}
else if (twentysix.innerHTML==="Yellow" && dice.innerHTML==="6") {
thirtytwo.innerHTML="Yellow";
twentysix.innerHTML="";}
else if (twentyseven.innerHTML==="Yellow" && dice.innerHTML==="1") {
twentyeight.innerHTML="Yellow";
twentyseven.innerHTML="";}
else if (twentyseven.innerHTML==="Yellow" && dice.innerHTML==="2") {
twentynine.innerHTML="Yellow";
twentyseven.innerHTML="";}
else if (twentyseven.innerHTML==="Yellow" && dice.innerHTML==="3") {
thirty.innerHTML="Yellow";
twentyseven.innerHTML="";}
else if (twentyseven.innerHTML==="Yellow" && dice.innerHTML==="4") {
thirtyone.innerHTML="Yellow";
twentyseven.innerHTML="";}
else if (twentyseven.innerHTML==="Yellow" && dice.innerHTML==="5") {
thirtytwo.innerHTML="Yellow";
twentyseven.innerHTML="";}
else if (twentyseven.innerHTML==="Yellow" && dice.innerHTML==="6") {
one.innerHTML="Yellow";
twentyseven.innerHTML="";}
else if (twentyeight.innerHTML==="Yellow" && dice.innerHTML==="1") {
twentynine.innerHTML="Yellow";
twentyeight.innerHTML="";}
else if (twentyeight.innerHTML==="Yellow" && dice.innerHTML==="2") {
thirty.innerHTML="Yellow";
twentyeight.innerHTML="";}
else if (twentyeight.innerHTML==="Yellow" && dice.innerHTML==="3") {
thirtyone.innerHTML="Yellow";
twentyeight.innerHTML="";}
else if (twentyeight.innerHTML==="Yellow" && dice.innerHTML==="4") {
thirtytwo.innerHTML="Yellow";
twentyeight.innerHTML="";}
else if (twentyeight.innerHTML==="Yellow" && dice.innerHTML==="5") {
one.innerHTML="Yellow";
twentyeight.innerHTML="";}
else if (twentyeight.innerHTML==="Yellow" && dice.innerHTML==="6") {
two.innerHTML="Yellow";
twentyeight.innerHTML="";}
else if (twentynine.innerHTML==="Yellow" && dice.innerHTML==="1") {
thirty.innerHTML="Yellow";
twentynine.innerHTML="";}
else if (twentynine.innerHTML==="Yellow" && dice.innerHTML==="2") {
thirtyone.innerHTML="Yellow";
twentynine.innerHTML="";}
else if (twentynine.innerHTML==="Yellow" && dice.innerHTML==="3") {
thirtytwo.innerHTML="Yellow";
twentynine.innerHTML="";}
else if (twentynine.innerHTML==="Yellow" && dice.innerHTML==="4") {
one.innerHTML="Yellow";
twentynine.innerHTML="";}
else if (twentynine.innerHTML==="Yellow" && dice.innerHTML==="5") {
two.innerHTML="Yellow";
twentynine.innerHTML="";}
else if (twentynine.innerHTML==="Yellow" && dice.innerHTML==="6") {
three.innerHTML="Yellow";
twentynine.innerHTML="";}
else if (thirty.innerHTML==="Yellow" && dice.innerHTML==="1") {
thirtyone.innerHTML="Yellow";
thirty.innerHTML="";}
else if (thirty.innerHTML==="Yellow" && dice.innerHTML==="2") {
thirtytwo.innerHTML="Yellow";
thirty.innerHTML="";}
else if (thirty.innerHTML==="Yellow" && dice.innerHTML==="3") {
one.innerHTML="Yellow";
thirty.innerHTML="";}
else if (thirty.innerHTML==="Yellow" && dice.innerHTML==="4") {
two.innerHTML="Yellow";
thirty.innerHTML="";}
else if (thirty.innerHTML==="Yellow" && dice.innerHTML==="5") {
three.innerHTML="Yellow";
thirty.innerHTML="";}
else if (thirty.innerHTML==="Yellow" && dice.innerHTML==="6") {
four.innerHTML="Yellow";
thirty.innerHTML="";}
else if (thirtyone.innerHTML==="Yellow" && dice.innerHTML==="1") {
thirtytwo.innerHTML="Yellow";
thirtyone.innerHTML="";}
else if (thirtyone.innerHTML==="Yellow" && dice.innerHTML==="2") {
one.innerHTML="Yellow";
thirtyone.innerHTML="";}
else if (thirtyone.innerHTML==="Yellow" && dice.innerHTML==="3") {
two.innerHTML="Yellow";
thirtyone.innerHTML="";}
else if (thirtyone.innerHTML==="Yellow" && dice.innerHTML==="4") {
three.innerHTML="Yellow";
thirtyone.innerHTML="";}
else if (thirtyone.innerHTML==="Yellow" && dice.innerHTML==="5") {
four.innerHTML="Yellow";
thirtyone.innerHTML="";}
else if (thirtyone.innerHTML==="Yellow" && dice.innerHTML==="6") {
five.innerHTML="Yellow";
thirtyone.innerHTML="";}
else if (thirtytwo.innerHTML==="Yellow" && dice.innerHTML==="1") { 
one.innerHTML="Yellow";
thirtytwo.innerHTML="";}
else if (thirtytwo.innerHTML==="Yellow" && dice.innerHTML==="2") { 
two.innerHTML="Yellow";
thirtytwo.innerHTML="";}
else if (thirtytwo.innerHTML==="Yellow" && dice.innerHTML==="3") { 
three.innerHTML="Yellow";
thirtytwo.innerHTML="";}
else if (thirtytwo.innerHTML==="Yellow" && dice.innerHTML==="4") { 
four.innerHTML="Yellow";
thirtytwo.innerHTML="";}
else if (thirtytwo.innerHTML==="Yellow" && dice.innerHTML==="5") { 
five.innerHTML="Yellow";
thirtytwo.innerHTML="";}
else if (thirtytwo.innerHTML==="Yellow" && dice.innerHTML==="6") { 
six.innerHTML="Yellow";
thirtytwo.innerHTML="";}
else if (one.innerHTML==="Pink" && dice.innerHTML==="1") {
two.innerHTML="Pink";
one.innerHTML="";}
else if (one.innerHTML==="Pink" && dice.innerHTML==="2") {
three.innerHTML="Pink";
one.innerHTML="";}
else if (one.innerHTML==="Pink" && dice.innerHTML==="3") {
four.innerHTML="Pink";
one.innerHTML="";}
else if (one.innerHTML==="Pink" && dice.innerHTML==="4") {
five.innerHTML="Pink";
one.innerHTML="";}
else if (one.innerHTML==="Pink" && dice.innerHTML==="5") {
six.innerHTML="Pink";
one.innerHTML="";}
else if (one.innerHTML==="Pink" && dice.innerHTML==="6") {
seven.innerHTML="Pink";
one.innerHTML="";}
else if (two.innerHTML==="Pink" && dice.innerHTML==="1") {
three.innerHTML="Pink";
two.innerHTML="";}
else if (two.innerHTML==="Pink" && dice.innerHTML==="2") {
four.innerHTML="Pink";
two.innerHTML="";}
else if (two.innerHTML==="Pink" && dice.innerHTML==="3") {
five.innerHTML="Pink";
two.innerHTML="";}
else if (two.innerHTML==="Pink" && dice.innerHTML==="4") {
six.innerHTML="Pink";
two.innerHTML="";}
else if (two.innerHTML==="Pink" && dice.innerHTML==="5") {
seven.innerHTML="Pink";
two.innerHTML="";}
else if (two.innerHTML==="Pink" && dice.innerHTML==="6") {
eight.innerHTML="Pink";
two.innerHTML="";}
else if (three.innerHTML==="Pink" && dice.innerHTML==="1") {
four.innerHTML="Pink";
three.innerHTML="";}
else if (three.innerHTML==="Pink" && dice.innerHTML==="2") {
five.innerHTML="Pink";
three.innerHTML="";}
else if (three.innerHTML==="Pink" && dice.innerHTML==="3") {
six.innerHTML="Pink";
three.innerHTML="";}
else if (three.innerHTML==="Pink" && dice.innerHTML==="4") {
seven.innerHTML="Pink";
three.innerHTML="";}
else if (three.innerHTML==="Pink" && dice.innerHTML==="5") {
eight.innerHTML="Pink";
three.innerHTML="";}
else if (three.innerHTML==="Pink" && dice.innerHTML==="6") {
nine.innerHTML="Pink";
three.innerHTML="";}
else if (four.innerHTML==="Pink" && dice.innerHTML==="1") {
five.innerHTML="Pink";
four.innerHTML="";}
else if (four.innerHTML==="Pink" && dice.innerHTML==="2") {
six.innerHTML="Pink";
four.innerHTML="";}
else if (four.innerHTML==="Pink" && dice.innerHTML==="3") {
seven.innerHTML="Pink";
four.innerHTML="";}
else if (four.innerHTML==="Pink" && dice.innerHTML==="4") {
eight.innerHTML="Pink";
four.innerHTML="";}
else if (four.innerHTML==="Pink" && dice.innerHTML==="5") {
nine.innerHTML="Pink";
four.innerHTML="";}
else if (four.innerHTML==="Pink" && dice.innerHTML==="6") {
ten.innerHTML="Pink";
four.innerHTML="";}
else if (five.innerHTML==="Pink" && dice.innerHTML==="1") {
six.innerHTML="Pink";
five.innerHTML="";}
else if (five.innerHTML==="Pink" && dice.innerHTML==="2") {
seven.innerHTML="Pink";
five.innerHTML="";}
else if (five.innerHTML==="Pink" && dice.innerHTML==="3") {
eight.innerHTML="Pink";
five.innerHTML="";}
else if (five.innerHTML==="Pink" && dice.innerHTML==="4") {
nine.innerHTML="Pink";
five.innerHTML="";}
else if (five.innerHTML==="Pink" && dice.innerHTML==="5") {
ten.innerHTML="Pink";
five.innerHTML="";}
else if (five.innerHTML==="Pink" && dice.innerHTML==="6") {
eleven.innerHTML="Pink";
five.innerHTML="";}
else if (six.innerHTML==="Pink" && dice.innerHTML==="1") {
seven.innerHTML="Pink";
six.innerHTML="";}
else if (six.innerHTML==="Pink" && dice.innerHTML==="2") {
eight.innerHTML="Pink";
six.innerHTML="";}
else if (six.innerHTML==="Pink" && dice.innerHTML==="3") {
nine.innerHTML="Pink";
six.innerHTML="";}
else if (six.innerHTML==="Pink" && dice.innerHTML==="4") {
ten.innerHTML="Pink";
six.innerHTML="";}
else if (six.innerHTML==="Pink" && dice.innerHTML==="5") {
eleven.innerHTML="Pink";
six.innerHTML="";}
else if (six.innerHTML==="Pink" && dice.innerHTML==="6") {
twelve.innerHTML="Pink";
six.innerHTML="";}
else if (seven.innerHTML==="Pink" && dice.innerHTML==="1") {
eight.innerHTML="Pink";
seven.innerHTML="";}
else if (seven.innerHTML==="Pink" && dice.innerHTML==="2") {
nine.innerHTML="Pink";
seven.innerHTML="";}
else if (seven.innerHTML==="Pink" && dice.innerHTML==="3") {
ten.innerHTML="Pink";
seven.innerHTML="";}
else if (seven.innerHTML==="Pink" && dice.innerHTML==="4") {
eleven.innerHTML="Pink";
seven.innerHTML="";}
else if (seven.innerHTML==="Pink" && dice.innerHTML==="5") {
twelve.innerHTML="Pink";
seven.innerHTML="";}
else if (seven.innerHTML==="Pink" && dice.innerHTML==="6") {
thirteen.innerHTML="Pink";
seven.innerHTML="";}
else if (eight.innerHTML==="Pink" && dice.innerHTML==="1") {
nine.innerHTML="Pink";
eight.innerHTML="";}
else if (eight.innerHTML==="Pink" && dice.innerHTML==="2") {
ten.innerHTML="Pink";
eight.innerHTML="";}
else if (eight.innerHTML==="Pink" && dice.innerHTML==="3") {
eleven.innerHTML="Pink";
eight.innerHTML="";}
else if (eight.innerHTML==="Pink" && dice.innerHTML==="4") {
twelve.innerHTML="Pink";
eight.innerHTML="";}
else if (eight.innerHTML==="Pink" && dice.innerHTML==="5") {
thirteen.innerHTML="Pink";
eight.innerHTML="";}
else if (eight.innerHTML==="Pink" && dice.innerHTML==="6") {
fourteen.innerHTML="Pink";
eight.innerHTML="";}
else if (nine.innerHTML==="Pink" && dice.innerHTML==="1") {
ten.innerHTML="Pink";
nine.innerHTML="";}
else if (nine.innerHTML==="Pink" && dice.innerHTML==="2") {
eleven.innerHTML="Pink";
nine.innerHTML="";}
else if (nine.innerHTML==="Pink" && dice.innerHTML==="3") {
twelve.innerHTML="Pink";
nine.innerHTML="";}
else if (nine.innerHTML==="Pink" && dice.innerHTML==="4") {
thirteen.innerHTML="Pink";
nine.innerHTML="";}
else if (nine.innerHTML==="Pink" && dice.innerHTML==="5") {
fourteen.innerHTML="Pink";
nine.innerHTML="";}
else if (nine.innerHTML==="Pink" && dice.innerHTML==="6") {
fifteen.innerHTML="Pink";
nine.innerHTML="";}
else if (ten.innerHTML==="Pink" && dice.innerHTML==="1") {
eleven.innerHTML="Pink";
ten.innerHTML="";}
else if (ten.innerHTML==="Pink" && dice.innerHTML==="2") {
twelve.innerHTML="Pink";
ten.innerHTML="";}
else if (ten.innerHTML==="Pink" && dice.innerHTML==="3") {
thirteen.innerHTML="Pink";
ten.innerHTML="";}
else if (ten.innerHTML==="Pink" && dice.innerHTML==="4") {
fourteen.innerHTML="Pink";
ten.innerHTML="";}
else if (ten.innerHTML==="Pink" && dice.innerHTML==="5") {
fifteen.innerHTML="Pink";
ten.innerHTML="";}
else if (ten.innerHTML==="Pink" && dice.innerHTML==="6") {
sixteen.innerHTML="Pink";
ten.innerHTML="";}
else if (eleven.innerHTML==="Pink" && dice.innerHTML==="1") {
twelve.innerHTML="Pink";
eleven.innerHTML="";}
else if (eleven.innerHTML==="Pink" && dice.innerHTML==="2") {
thirteen.innerHTML="Pink";
eleven.innerHTML="";}
else if (eleven.innerHTML==="Pink" && dice.innerHTML==="3") {
fourteen.innerHTML="Pink";
eleven.innerHTML="";}
else if (eleven.innerHTML==="Pink" && dice.innerHTML==="4") {
fifteen.innerHTML="Pink";
eleven.innerHTML="";}
else if (eleven.innerHTML==="Pink" && dice.innerHTML==="5") {
sixteen.innerHTML="Pink";
eleven.innerHTML="";}
else if (eleven.innerHTML==="Pink" && dice.innerHTML==="6") {
seventeen.innerHTML="Pink";
eleven.innerHTML="";}
else if (twelve.innerHTML==="Pink" && dice.innerHTML==="1") {
thirteen.innerHTML="Pink";
twelve.innerHTML="";}
else if (twelve.innerHTML==="Pink" && dice.innerHTML==="2") {
fourteen.innerHTML="Pink";
twelve.innerHTML="";}
else if (twelve.innerHTML==="Pink" && dice.innerHTML==="3") {
fifteen.innerHTML="Pink";
twelve.innerHTML="";}
else if (twelve.innerHTML==="Pink" && dice.innerHTML==="4") {
sixteen.innerHTML="Pink";
twelve.innerHTML="";}
else if (twelve.innerHTML==="Pink" && dice.innerHTML==="5") {
seventeen.innerHTML="Pink";
twelve.innerHTML="";}
else if (twelve.innerHTML==="Pink" && dice.innerHTML==="6") {
eighteen.innerHTML="Pink";
twelve.innerHTML="";}
else if (thirteen.innerHTML==="Pink" && dice.innerHTML==="1") {
fourteen.innerHTML="Pink";
thirteen.innerHTML="";}
else if (thirteen.innerHTML==="Pink" && dice.innerHTML==="2") {
fifteen.innerHTML="Pink";
thirteen.innerHTML="";}
else if (thirteen.innerHTML==="Pink" && dice.innerHTML==="3") {
sixteen.innerHTML="Pink";
thirteen.innerHTML="";}
else if (thirteen.innerHTML==="Pink" && dice.innerHTML==="4") {
seventeen.innerHTML="Pink";
thirteen.innerHTML="";}
else if (thirteen.innerHTML==="Pink" && dice.innerHTML==="5") {
eighteen.innerHTML="Pink";
thirteen.innerHTML="";}
else if (thirteen.innerHTML==="Pink" && dice.innerHTML==="6") {
nineteen.innerHTML="Pink";
thirteen.innerHTML="";}
else if (fourteen.innerHTML==="Pink" && dice.innerHTML==="1") {
fifteen.innerHTML="Pink";
fourteen.innerHTML="";}
else if (fourteen.innerHTML==="Pink" && dice.innerHTML==="2") {
sixteen.innerHTML="Pink";
fourteen.innerHTML="";}
else if (fourteen.innerHTML==="Pink" && dice.innerHTML==="3") {
seventeen.innerHTML="Pink";
fourteen.innerHTML="";}
else if (fourteen.innerHTML==="Pink" && dice.innerHTML==="4") {
eighteen.innerHTML="Pink";
fourteen.innerHTML="";}
else if (fourteen.innerHTML==="Pink" && dice.innerHTML==="5") {
nineteen.innerHTML="Pink";
fourteen.innerHTML="";}
else if (fourteen.innerHTML==="Pink" && dice.innerHTML==="6") {
twenty.innerHTML="Pink";
fourteen.innerHTML="";}
else if (fifteen.innerHTML==="Pink" && dice.innerHTML==="1") {
sixteen.innerHTML="Pink";
fifteen.innerHTML="";}
else if (fifteen.innerHTML==="Pink" && dice.innerHTML==="2") {
seventeen.innerHTML="Pink";
fifteen.innerHTML="";}
else if (fifteen.innerHTML==="Pink" && dice.innerHTML==="3") {
eighteen.innerHTML="Pink";
fifteen.innerHTML="";}
else if (fifteen.innerHTML==="Pink" && dice.innerHTML==="4") {
nineteen.innerHTML="Pink";
fifteen.innerHTML="";}
else if (fifteen.innerHTML==="Pink" && dice.innerHTML==="5") {
twenty.innerHTML="Pink";
fifteen.innerHTML="";}
else if (fifteen.innerHTML==="Pink" && dice.innerHTML==="6") {
twentyone.innerHTML="Pink";
fifteen.innerHTML="";}
else if (sixteen.innerHTML==="Pink" && dice.innerHTML==="1") {
seventeen.innerHTML="Pink";
sixteen.innerHTML="";}
else if (sixteen.innerHTML==="Pink" && dice.innerHTML==="2") {
eighteen.innerHTML="Pink";
sixteen.innerHTML="";}
else if (sixteen.innerHTML==="Pink" && dice.innerHTML==="3") {
nineteen.innerHTML="Pink";
sixteen.innerHTML="";}
else if (sixteen.innerHTML==="Pink" && dice.innerHTML==="4") {
twenty.innerHTML="Pink";
sixteen.innerHTML="";}
else if (sixteen.innerHTML==="Pink" && dice.innerHTML==="5") {
twentyone.innerHTML="Pink";
sixteen.innerHTML="";}
else if (sixteen.innerHTML==="Pink" && dice.innerHTML==="6") {
twentytwo.innerHTML="Pink";
sixteen.innerHTML="";}
else if (seventeen.innerHTML==="Pink" && dice.innerHTML==="1") {
eighteen.innerHTML="Pink";
seventeen.innerHTML="";}
else if (seventeen.innerHTML==="Pink" && dice.innerHTML==="2") {
nineteen.innerHTML="Pink";
seventeen.innerHTML="";}
else if (seventeen.innerHTML==="Pink" && dice.innerHTML==="3") {
twenty.innerHTML="Pink";
seventeen.innerHTML="";}
else if (seventeen.innerHTML==="Pink" && dice.innerHTML==="4") {
twentyone.innerHTML="Pink";
seventeen.innerHTML="";}
else if (seventeen.innerHTML==="Pink" && dice.innerHTML==="5") {
twentytwo.innerHTML="Pink";
seventeen.innerHTML="";}
else if (seventeen.innerHTML==="Pink" && dice.innerHTML==="6") {
twentythree.innerHTML="Pink";
seventeen.innerHTML="";}
else if (eighteen.innerHTML==="Pink" && dice.innerHTML==="1") {
nineteen.innerHTML="Pink";
eighteen.innerHTML="";}
else if (eighteen.innerHTML==="Pink" && dice.innerHTML==="2") {
twenty.innerHTML="Pink";
eighteen.innerHTML="";}
else if (eighteen.innerHTML==="Pink" && dice.innerHTML==="3") {
twentyone.innerHTML="Pink";
eighteen.innerHTML="";}
else if (eighteen.innerHTML==="Pink" && dice.innerHTML==="4") {
twentytwo.innerHTML="Pink";
eighteen.innerHTML="";}
else if (eighteen.innerHTML==="Pink" && dice.innerHTML==="5") {
twentythree.innerHTML="Pink";
eighteen.innerHTML="";}
else if (eighteen.innerHTML==="Pink" && dice.innerHTML==="6") {
twentyfour.innerHTML="Pink";
eighteen.innerHTML="";
free.style.background="black";
free.style.color="white";}
else if (nineteen.innerHTML==="Pink" && dice.innerHTML==="1") {
twenty.innerHTML="Pink";
nineteen.innerHTML="";}
else if (nineteen.innerHTML==="Pink" && dice.innerHTML==="2") {
twentyone.innerHTML="Pink";
nineteen.innerHTML="";}
else if (nineteen.innerHTML==="Pink" && dice.innerHTML==="3") {
twentytwo.innerHTML="Pink";
nineteen.innerHTML="";}
else if (nineteen.innerHTML==="Pink" && dice.innerHTML==="4") {
twentythree.innerHTML="Pink";
nineteen.innerHTML="";}
else if (nineteen.innerHTML==="Pink" && dice.innerHTML==="5") {
twentyfour.innerHTML="Pink";
nineteen.innerHTML="";
free.style.background="black";
free.style.color="white";}
else if (nineteen.innerHTML==="Pink" && dice.innerHTML==="6") {
twentyfive.innerHTML="Pink";
nineteen.innerHTML="";}
else if (twenty.innerHTML==="Pink" && dice.innerHTML==="1") {
twentyone.innerHTML="Pink";
twenty.innerHTML="";}
else if (twenty.innerHTML==="Pink" && dice.innerHTML==="2") {
twentytwo.innerHTML="Pink";
twenty.innerHTML="";}
else if (twenty.innerHTML==="Pink" && dice.innerHTML==="3") {
twentythree.innerHTML="Pink";
twenty.innerHTML="";}
else if (twenty.innerHTML==="Pink" && dice.innerHTML==="4") {
twentyfour.innerHTML="Pink";
twenty.innerHTML="";
free.style.background="black";
free.style.color="white";}
else if (twenty.innerHTML==="Pink" && dice.innerHTML==="5") {
twentyfive.innerHTML="Pink";
twenty.innerHTML="";}
else if (twenty.innerHTML==="Pink" && dice.innerHTML==="6") {
twentysix.innerHTML="Pink";
twenty.innerHTML="";}
else if (twentyone.innerHTML==="Pink" && dice.innerHTML==="1") {
twentytwo.innerHTML="Pink";
twentyone.innerHTML="";}
else if (twentyone.innerHTML==="Pink" && dice.innerHTML==="2") {
twentythree.innerHTML="Pink";
twentyone.innerHTML="";}
else if (twentyone.innerHTML==="Pink" && dice.innerHTML==="3") {
twentyfour.innerHTML="Pink";
twentyone.innerHTML="";
free.style.background="black";
free.style.color="white";}
else if (twentyone.innerHTML==="Pink" && dice.innerHTML==="4") {
twentyfive.innerHTML="Pink";
twentyone.innerHTML="";}
else if (twentyone.innerHTML==="Pink" && dice.innerHTML==="5") {
twentysix.innerHTML="Pink";
twentyone.innerHTML="";}
else if (twentyone.innerHTML==="Pink" && dice.innerHTML==="6") {
twentyseven.innerHTML="Pink";
twentyone.innerHTML="";}
else if (twentytwo.innerHTML==="Pink" && dice.innerHTML==="1") {
twentythree.innerHTML="Pink";
twentytwo.innerHTML="";}
else if (twentytwo.innerHTML==="Pink" && dice.innerHTML==="2") {
twentyfour.innerHTML="Pink";
twentytwo.innerHTML="";
free.style.background="black";
free.style.color="white";}
else if (twentytwo.innerHTML==="Pink" && dice.innerHTML==="3") {
twentyfive.innerHTML="Pink";
twentytwo.innerHTML="";}
else if (twentytwo.innerHTML==="Pink" && dice.innerHTML==="4") {
twentysix.innerHTML="Pink";
twentytwo.innerHTML="";}
else if (twentytwo.innerHTML==="Pink" && dice.innerHTML==="5") {
twentyseven.innerHTML="Pink";
twentytwo.innerHTML="";}
else if (twentytwo.innerHTML==="Pink" && dice.innerHTML==="6") {
twentyeight.innerHTML="Pink";
twentytwo.innerHTML="";}
else if (twentythree.innerHTML==="Pink" && dice.innerHTML==="1") {
twentyfour.innerHTML="Pink";
twentythree.innerHTML="";
free.style.background="black";
free.style.color="white";}
else if (twentythree.innerHTML==="Pink" && dice.innerHTML==="2") {
twentyfive.innerHTML="Pink";
twentythree.innerHTML="";}
else if (twentythree.innerHTML==="Pink" && dice.innerHTML==="3") {
twentysix.innerHTML="Pink";
twentythree.innerHTML="";}
else if (twentythree.innerHTML==="Pink" && dice.innerHTML==="4") {
twentyseven.innerHTML="Pink";
twentythree.innerHTML="";}
else if (twentythree.innerHTML==="Pink" && dice.innerHTML==="5") {
twentyeight.innerHTML="Pink";
twentythree.innerHTML="";}
else if (twentythree.innerHTML==="Pink" && dice.innerHTML==="6") {
twentynine.innerHTML="Pink";
twentythree.innerHTML="";}
else if  (twentyfive.innerHTML==="Pink" && dice.innerHTML==="1") {
twentysix.innerHTML="Pink";
twentyfive.innerHTML="";}
else if (twentyfive.innerHTML==="Pink" && dice.innerHTML==="2") {
twentyseven.innerHTML="Pink";
twentyfive.innerHTML="";}
else if (twentyfive.innerHTML==="Pink" && dice.innerHTML==="3") {
twentyeight.innerHTML="Pink";
twentyfive.innerHTML="";}
else if (twentyfive.innerHTML==="Pink" && dice.innerHTML==="4") {
twentynine.innerHTML="Pink";
twentyfive.innerHTML="";}
else if (twentyfive.innerHTML==="Pink" && dice.innerHTML==="5") {
thirty.innerHTML="Pink";
twentyfive.innerHTML="";}
else if (twentyfive.innerHTML==="Pink" && dice.innerHTML==="6") {
thirtyone.innerHTML="Pink";
twentyfive.innerHTML="";}
else if (twentysix.innerHTML==="Pink" && dice.innerHTML==="1") {
twentyseven.innerHTML="Pink";
twentysix.innerHTML="";}
else if (twentysix.innerHTML==="Pink" && dice.innerHTML==="2") {
twentyeight.innerHTML="Pink";
twentysix.innerHTML="";}
else if (twentysix.innerHTML==="Pink" && dice.innerHTML==="3") {
twentynine.innerHTML="Pink";
twentysix.innerHTML="";}
else if (twentysix.innerHTML==="Pink" && dice.innerHTML==="4") {
thirty.innerHTML="Pink";
twentysix.innerHTML="";}
else if (twentysix.innerHTML==="Pink" && dice.innerHTML==="5") {
thirtyone.innerHTML="Pink";
twentysix.innerHTML="";}
else if (twentysix.innerHTML==="Pink" && dice.innerHTML==="6") {
thirtytwo.innerHTML="Pink";
twentysix.innerHTML="";}
else if (twentyseven.innerHTML==="Pink" && dice.innerHTML==="1") {
twentyeight.innerHTML="Pink";
twentyseven.innerHTML="";}
else if (twentyseven.innerHTML==="Pink" && dice.innerHTML==="2") {
twentynine.innerHTML="Pink";
twentyseven.innerHTML="";}
else if (twentyseven.innerHTML==="Pink" && dice.innerHTML==="3") {
thirty.innerHTML="Pink";
twentyseven.innerHTML="";}
else if (twentyseven.innerHTML==="Pink" && dice.innerHTML==="4") {
thirtyone.innerHTML="Pink";
twentyseven.innerHTML="";}
else if (twentyseven.innerHTML==="Pink" && dice.innerHTML==="5") {
thirtytwo.innerHTML="Pink";
twentyseven.innerHTML="";}
else if (twentyseven.innerHTML==="Pink" && dice.innerHTML==="6") {
one.innerHTML="Pink";
twentyseven.innerHTML="";}
else if (twentyeight.innerHTML==="Pink" && dice.innerHTML==="1") {
twentynine.innerHTML="Pink";
twentyeight.innerHTML="";}
else if (twentyeight.innerHTML==="Pink" && dice.innerHTML==="2") {
thirty.innerHTML="Pink";
twentyeight.innerHTML="";}
else if (twentyeight.innerHTML==="Pink" && dice.innerHTML==="3") {
thirtyone.innerHTML="Pink";
twentyeight.innerHTML="";}
else if (twentyeight.innerHTML==="Pink" && dice.innerHTML==="4") {
thirtytwo.innerHTML="Pink";
twentyeight.innerHTML="";}
else if (twentyeight.innerHTML==="Pink" && dice.innerHTML==="5") {
one.innerHTML="Pink";
twentyeight.innerHTML="";}
else if (twentyeight.innerHTML==="Pink" && dice.innerHTML==="6") {
two.innerHTML="Pink";
twentyeight.innerHTML="";}
else if (twentynine.innerHTML==="Pink" && dice.innerHTML==="1") {
thirty.innerHTML="Pink";
twentynine.innerHTML="";}
else if (twentynine.innerHTML==="Pink" && dice.innerHTML==="2") {
thirtyone.innerHTML="Pink";
twentynine.innerHTML="";}
else if (twentynine.innerHTML==="Pink" && dice.innerHTML==="3") {
thirtytwo.innerHTML="Pink";
twentynine.innerHTML="";}
else if (twentynine.innerHTML==="Pink" && dice.innerHTML==="4") {
one.innerHTML="Pink";
twentynine.innerHTML="";}
else if (twentynine.innerHTML==="Pink" && dice.innerHTML==="5") {
two.innerHTML="Pink";
twentynine.innerHTML="";}
else if (twentynine.innerHTML==="Pink" && dice.innerHTML==="6") {
three.innerHTML="Pink";
twentynine.innerHTML="";}
else if (thirty.innerHTML==="Pink" && dice.innerHTML==="1") {
thirtyone.innerHTML="Pink";
thirty.innerHTML="";}
else if (thirty.innerHTML==="Pink" && dice.innerHTML==="2") {
thirtytwo.innerHTML="Pink";
thirty.innerHTML="";}
else if (thirty.innerHTML==="Pink" && dice.innerHTML==="3") {
one.innerHTML="Pink";
thirty.innerHTML="";}
else if (thirty.innerHTML==="Pink" && dice.innerHTML==="4") {
two.innerHTML="Pink";
thirty.innerHTML="";}
else if (thirty.innerHTML==="Pink" && dice.innerHTML==="5") {
three.innerHTML="Pink";
thirty.innerHTML="";}
else if (thirty.innerHTML==="Pink" && dice.innerHTML==="6") {
four.innerHTML="Pink";
thirty.innerHTML="";}
else if (thirtyone.innerHTML==="Pink" && dice.innerHTML==="1") {
thirtytwo.innerHTML="Pink";
thirtyone.innerHTML="";}
else if (thirtyone.innerHTML==="Pink" && dice.innerHTML==="2") {
one.innerHTML="Pink";
thirtyone.innerHTML="";}
else if (thirtyone.innerHTML==="Pink" && dice.innerHTML==="3") {
two.innerHTML="Pink";
thirtyone.innerHTML="";}
else if (thirtyone.innerHTML==="Pink" && dice.innerHTML==="4") {
three.innerHTML="Pink";
thirtyone.innerHTML="";}
else if (thirtyone.innerHTML==="Pink" && dice.innerHTML==="5") {
four.innerHTML="Pink";
thirtyone.innerHTML="";}
else if (thirtyone.innerHTML==="Pink" && dice.innerHTML==="6") {
five.innerHTML="Pink";
thirtyone.innerHTML="";}
else if (thirtytwo.innerHTML==="Pink" && dice.innerHTML==="1") { 
one.innerHTML="Pink";
thirtytwo.innerHTML="";}
else if (thirtytwo.innerHTML==="Pink" && dice.innerHTML==="2") { 
two.innerHTML="Pink";
thirtytwo.innerHTML="";}
else if (thirtytwo.innerHTML==="Pink" && dice.innerHTML==="3") { 
three.innerHTML="Pink";
thirtytwo.innerHTML="";}
else if (thirtytwo.innerHTML==="Pink" && dice.innerHTML==="4") { 
four.innerHTML="Pink";
thirtytwo.innerHTML="";}
else if (thirtytwo.innerHTML==="Pink" && dice.innerHTML==="5") { 
five.innerHTML="Pink";
thirtytwo.innerHTML="";}
else if (thirtytwo.innerHTML==="Pink" && dice.innerHTML==="6") { 
six.innerHTML="Pink";
thirtytwo.innerHTML="";}}


function playerTwo() {
var dice=document.getElementById("node");
var one=document.getElementById("twoA");
var two=document.getElementById("twoB");
var three=document.getElementById("twoC");
var four=document.getElementById("twoD");
var five=document.getElementById("twoE");
var six=document.getElementById("twoF");
var seven=document.getElementById("twoG");
var eight=document.getElementById("twoH");
var nine=document.getElementById("twoI");
var ten=document.getElementById("twoJ");
var eleven=document.getElementById("twoK");
var twelve=document.getElementById("twoL");
var thirteen=document.getElementById("twoM");
var fourteen=document.getElementById("twoN");
var fifteen=document.getElementById("twoO");
var sixteen=document.getElementById("twoP");
var seventeen=document.getElementById("twoQ");
var eighteen=document.getElementById("twoR");
var nineteen=document.getElementById("twoS");
var twenty=document.getElementById("twoT");
var twentyone=document.getElementById("twoU");
var twentytwo=document.getElementById("twoV");
var twentythree=document.getElementById("twoW");
var twentyfour=document.getElementById("twoX");
var twentyfive=document.getElementById("twoY");
var twentysix=document.getElementById("twoZ");
var twentyseven=document.getElementById("atwo");
var twentyeight=document.getElementById("btwo");
var twentynine=document.getElementById("ctwo");
var thirty=document.getElementById("dtwo");
var thirtyone=document.getElementById("etwo");
var thirtytwo=document.getElementById("ftwo");
var free=document.getElementById("id24");
var buttonTwo=document.getElementById("btn2");
var wallet=document.getElementById("wal3");
var y=document.getElementById("+c");
var z=document.getElementById("-c");
var x=document.getElementById("c111");
if (buttonTwo.innerHTML==="Two") {
buttonTwo.innerHTML="P2"
one.innerHTML="Two";
wallet.innerHTML="$1000";
y.innerHTML="+$10";
z.innerHTML="-$10";
x.innerHTML="P2";}
else if (one.innerHTML==="Two" && dice.innerHTML==="1") {
two.innerHTML="Two";
one.innerHTML="";}
else if (one.innerHTML==="Two" && dice.innerHTML==="2") {
three.innerHTML="Two";
one.innerHTML="";}
else if (one.innerHTML==="Two" && dice.innerHTML==="3") {
four.innerHTML="Two";
one.innerHTML="";}
else if (one.innerHTML==="Two" && dice.innerHTML==="4") {
five.innerHTML="Two";
one.innerHTML="";}
else if (one.innerHTML==="Two" && dice.innerHTML==="5") {
six.innerHTML="Two";
one.innerHTML="";}
else if (one.innerHTML==="Two" && dice.innerHTML==="6") {
seven.innerHTML="Two";
one.innerHTML="";}
else if (two.innerHTML==="Two" && dice.innerHTML==="1") {
three.innerHTML="Two";
two.innerHTML="";}
else if (two.innerHTML==="Two" && dice.innerHTML==="2") {
four.innerHTML="Two";
two.innerHTML="";}
else if (two.innerHTML==="Two" && dice.innerHTML==="3") {
five.innerHTML="Two";
two.innerHTML="";}
else if (two.innerHTML==="Two" && dice.innerHTML==="4") {
six.innerHTML="Two";
two.innerHTML="";}
else if (two.innerHTML==="Two" && dice.innerHTML==="5") {
seven.innerHTML="Two";
two.innerHTML="";}
else if (two.innerHTML==="Two" && dice.innerHTML==="6") {
eight.innerHTML="Two";
two.innerHTML="";}
else if (three.innerHTML==="Two" && dice.innerHTML==="1") {
four.innerHTML="Two";
three.innerHTML="";}
else if (three.innerHTML==="Two" && dice.innerHTML==="2") {
five.innerHTML="Two";
three.innerHTML="";}
else if (three.innerHTML==="Two" && dice.innerHTML==="3") {
six.innerHTML="Two";
three.innerHTML="";}
else if (three.innerHTML==="Two" && dice.innerHTML==="4") {
seven.innerHTML="Two";
three.innerHTML="";}
else if (three.innerHTML==="Two" && dice.innerHTML==="5") {
eight.innerHTML="Two";
three.innerHTML="";}
else if (three.innerHTML==="Two" && dice.innerHTML==="6") {
nine.innerHTML="Two";
three.innerHTML="";}
else if (four.innerHTML==="Two" && dice.innerHTML==="1") {
five.innerHTML="Two";
four.innerHTML="";}
else if (four.innerHTML==="Two" && dice.innerHTML==="2") {
six.innerHTML="Two";
four.innerHTML="";}
else if (four.innerHTML==="Two" && dice.innerHTML==="3") {
seven.innerHTML="Two";
four.innerHTML="";}
else if (four.innerHTML==="Two" && dice.innerHTML==="4") {
eight.innerHTML="Two";
four.innerHTML="";}
else if (four.innerHTML==="Two" && dice.innerHTML==="5") {
nine.innerHTML="Two";
four.innerHTML="";}
else if (four.innerHTML==="Two" && dice.innerHTML==="6") {
ten.innerHTML="Two";
four.innerHTML="";}
else if (five.innerHTML==="Two" && dice.innerHTML==="1") {
six.innerHTML="Two";
five.innerHTML="";}
else if (five.innerHTML==="Two" && dice.innerHTML==="2") {
seven.innerHTML="Two";
five.innerHTML="";}
else if (five.innerHTML==="Two" && dice.innerHTML==="3") {
eight.innerHTML="Two";
five.innerHTML="";}
else if (five.innerHTML==="Two" && dice.innerHTML==="4") {
nine.innerHTML="Two";
five.innerHTML="";}
else if (five.innerHTML==="Two" && dice.innerHTML==="5") {
ten.innerHTML="Two";
five.innerHTML="";}
else if (five.innerHTML==="Two" && dice.innerHTML==="6") {
eleven.innerHTML="Two";
five.innerHTML="";}
else if (six.innerHTML==="Two" && dice.innerHTML==="1") {
seven.innerHTML="Two";
six.innerHTML="";}
else if (six.innerHTML==="Two" && dice.innerHTML==="2") {
eight.innerHTML="Two";
six.innerHTML="";}
else if (six.innerHTML==="Two" && dice.innerHTML==="3") {
nine.innerHTML="Two";
six.innerHTML="";}
else if (six.innerHTML==="Two" && dice.innerHTML==="4") {
ten.innerHTML="Two";
six.innerHTML="";}
else if (six.innerHTML==="Two" && dice.innerHTML==="5") {
eleven.innerHTML="Two";
six.innerHTML="";}
else if (six.innerHTML==="Two" && dice.innerHTML==="6") {
twelve.innerHTML="Two";
six.innerHTML="";}
else if (seven.innerHTML==="Two" && dice.innerHTML==="1") {
eight.innerHTML="Two";
seven.innerHTML="";}
else if (seven.innerHTML==="Two" && dice.innerHTML==="2") {
nine.innerHTML="Two";
seven.innerHTML="";}
else if (seven.innerHTML==="Two" && dice.innerHTML==="3") {
ten.innerHTML="Two";
seven.innerHTML="";}
else if (seven.innerHTML==="Two" && dice.innerHTML==="4") {
eleven.innerHTML="Two";
seven.innerHTML="";}
else if (seven.innerHTML==="Two" && dice.innerHTML==="5") {
twelve.innerHTML="Two";
seven.innerHTML="";}
else if (seven.innerHTML==="Two" && dice.innerHTML==="6") {
thirteen.innerHTML="Two";
seven.innerHTML="";}
else if (eight.innerHTML==="Two" && dice.innerHTML==="1") {
nine.innerHTML="Two";
eight.innerHTML="";}
else if (eight.innerHTML==="Two" && dice.innerHTML==="2") {
ten.innerHTML="Two";
eight.innerHTML="";}
else if (eight.innerHTML==="Two" && dice.innerHTML==="3") {
eleven.innerHTML="Two";
eight.innerHTML="";}
else if (eight.innerHTML==="Two" && dice.innerHTML==="4") {
twelve.innerHTML="Two";
eight.innerHTML="";}
else if (eight.innerHTML==="Two" && dice.innerHTML==="5") {
thirteen.innerHTML="Two";
eight.innerHTML="";}
else if (eight.innerHTML==="Two" && dice.innerHTML==="6") {
fourteen.innerHTML="Two";
eight.innerHTML="";}
else if (nine.innerHTML==="Two" && dice.innerHTML==="1") {
ten.innerHTML="Two";
nine.innerHTML="";}
else if (nine.innerHTML==="Two" && dice.innerHTML==="2") {
eleven.innerHTML="Two";
nine.innerHTML="";}
else if (nine.innerHTML==="Two" && dice.innerHTML==="3") {
twelve.innerHTML="Two";
nine.innerHTML="";}
else if (nine.innerHTML==="Two" && dice.innerHTML==="4") {
thirteen.innerHTML="Two";
nine.innerHTML="";}
else if (nine.innerHTML==="Two" && dice.innerHTML==="5") {
fourteen.innerHTML="Two";
nine.innerHTML="";}
else if (nine.innerHTML==="Two" && dice.innerHTML==="6") {
fifteen.innerHTML="Two";
nine.innerHTML="";}
else if (ten.innerHTML==="Two" && dice.innerHTML==="1") {
eleven.innerHTML="Two";
ten.innerHTML="";}
else if (ten.innerHTML==="Two" && dice.innerHTML==="2") {
twelve.innerHTML="Two";
ten.innerHTML="";}
else if (ten.innerHTML==="Two" && dice.innerHTML==="3") {
thirteen.innerHTML="Two";
ten.innerHTML="";}
else if (ten.innerHTML==="Two" && dice.innerHTML==="4") {
fourteen.innerHTML="Two";
ten.innerHTML="";}
else if (ten.innerHTML==="Two" && dice.innerHTML==="5") {
fifteen.innerHTML="Two";
ten.innerHTML="";}
else if (ten.innerHTML==="Two" && dice.innerHTML==="6") {
sixteen.innerHTML="Two";
ten.innerHTML="";}
else if (eleven.innerHTML==="Two" && dice.innerHTML==="1") {
twelve.innerHTML="Two";
eleven.innerHTML="";}
else if (eleven.innerHTML==="Two" && dice.innerHTML==="2") {
thirteen.innerHTML="Two";
eleven.innerHTML="";}
else if (eleven.innerHTML==="Two" && dice.innerHTML==="3") {
fourteen.innerHTML="Two";
eleven.innerHTML="";}
else if (eleven.innerHTML==="Two" && dice.innerHTML==="4") {
fifteen.innerHTML="Two";
eleven.innerHTML="";}
else if (eleven.innerHTML==="Two" && dice.innerHTML==="5") {
sixteen.innerHTML="Two";
eleven.innerHTML="";}
else if (eleven.innerHTML==="Two" && dice.innerHTML==="6") {
seventeen.innerHTML="Two";
eleven.innerHTML="";}
else if (twelve.innerHTML==="Two" && dice.innerHTML==="1") {
thirteen.innerHTML="Two";
twelve.innerHTML="";}
else if (twelve.innerHTML==="Two" && dice.innerHTML==="2") {
fourteen.innerHTML="Two";
twelve.innerHTML="";}
else if (twelve.innerHTML==="Two" && dice.innerHTML==="3") {
fifteen.innerHTML="Two";
twelve.innerHTML="";}
else if (twelve.innerHTML==="Two" && dice.innerHTML==="4") {
sixteen.innerHTML="Two";
twelve.innerHTML="";}
else if (twelve.innerHTML==="Two" && dice.innerHTML==="5") {
seventeen.innerHTML="Two";
twelve.innerHTML="";}
else if (twelve.innerHTML==="Two" && dice.innerHTML==="6") {
eighteen.innerHTML="Two";
twelve.innerHTML="";}
else if (thirteen.innerHTML==="Two" && dice.innerHTML==="1") {
fourteen.innerHTML="Two";
thirteen.innerHTML="";}
else if (thirteen.innerHTML==="Two" && dice.innerHTML==="2") {
fifteen.innerHTML="Two";
thirteen.innerHTML="";}
else if (thirteen.innerHTML==="Two" && dice.innerHTML==="3") {
sixteen.innerHTML="Two";
thirteen.innerHTML="";}
else if (thirteen.innerHTML==="Two" && dice.innerHTML==="4") {
seventeen.innerHTML="Two";
thirteen.innerHTML="";}
else if (thirteen.innerHTML==="Two" && dice.innerHTML==="5") {
eighteen.innerHTML="Two";
thirteen.innerHTML="";}
else if (thirteen.innerHTML==="Two" && dice.innerHTML==="6") {
nineteen.innerHTML="Two";
thirteen.innerHTML="";}
else if (fourteen.innerHTML==="Two" && dice.innerHTML==="1") {
fifteen.innerHTML="Two";
fourteen.innerHTML="";}
else if (fourteen.innerHTML==="Two" && dice.innerHTML==="2") {
sixteen.innerHTML="Two";
fourteen.innerHTML="";}
else if (fourteen.innerHTML==="Two" && dice.innerHTML==="3") {
seventeen.innerHTML="Two";
fourteen.innerHTML="";}
else if (fourteen.innerHTML==="Two" && dice.innerHTML==="4") {
eighteen.innerHTML="Two";
fourteen.innerHTML="";}
else if (fourteen.innerHTML==="Two" && dice.innerHTML==="5") {
nineteen.innerHTML="Two";
fourteen.innerHTML="";}
else if (fourteen.innerHTML==="Two" && dice.innerHTML==="6") {
twenty.innerHTML="Two";
fourteen.innerHTML="";}
else if (fifteen.innerHTML==="Two" && dice.innerHTML==="1") {
sixteen.innerHTML="Two";
fifteen.innerHTML="";}
else if (fifteen.innerHTML==="Two" && dice.innerHTML==="2") {
seventeen.innerHTML="Two";
fifteen.innerHTML="";}
else if (fifteen.innerHTML==="Two" && dice.innerHTML==="3") {
eighteen.innerHTML="Two";
fifteen.innerHTML="";}
else if (fifteen.innerHTML==="Two" && dice.innerHTML==="4") {
nineteen.innerHTML="Two";
fifteen.innerHTML="";}
else if (fifteen.innerHTML==="Two" && dice.innerHTML==="5") {
twenty.innerHTML="Two";
fifteen.innerHTML="";}
else if (fifteen.innerHTML==="Two" && dice.innerHTML==="6") {
twentyone.innerHTML="Two";
fifteen.innerHTML="";}
else if (sixteen.innerHTML==="Two" && dice.innerHTML==="1") {
seventeen.innerHTML="Two";
sixteen.innerHTML="";}
else if (sixteen.innerHTML==="Two" && dice.innerHTML==="2") {
eighteen.innerHTML="Two";
sixteen.innerHTML="";}
else if (sixteen.innerHTML==="Two" && dice.innerHTML==="3") {
nineteen.innerHTML="Two";
sixteen.innerHTML="";}
else if (sixteen.innerHTML==="Two" && dice.innerHTML==="4") {
twenty.innerHTML="Two";
sixteen.innerHTML="";}
else if (sixteen.innerHTML==="Two" && dice.innerHTML==="5") {
twentyone.innerHTML="Two";
sixteen.innerHTML="";}
else if (sixteen.innerHTML==="Two" && dice.innerHTML==="6") {
twentytwo.innerHTML="Two";
sixteen.innerHTML="";}
else if (seventeen.innerHTML==="Two" && dice.innerHTML==="1") {
eighteen.innerHTML="Two";
seventeen.innerHTML="";}
else if (seventeen.innerHTML==="Two" && dice.innerHTML==="2") {
nineteen.innerHTML="Two";
seventeen.innerHTML="";}
else if (seventeen.innerHTML==="Two" && dice.innerHTML==="3") {
twenty.innerHTML="Two";
seventeen.innerHTML="";}
else if (seventeen.innerHTML==="Two" && dice.innerHTML==="4") {
twentyone.innerHTML="Two";
seventeen.innerHTML="";}
else if (seventeen.innerHTML==="Two" && dice.innerHTML==="5") {
twentytwo.innerHTML="Two";
seventeen.innerHTML="";}
else if (seventeen.innerHTML==="Two" && dice.innerHTML==="6") {
twentythree.innerHTML="Two";
seventeen.innerHTML="";}
else if (eighteen.innerHTML==="Two" && dice.innerHTML==="1") {
nineteen.innerHTML="Two";
eighteen.innerHTML="";}
else if (eighteen.innerHTML==="Two" && dice.innerHTML==="2") {
twenty.innerHTML="Two";
eighteen.innerHTML="";}
else if (eighteen.innerHTML==="Two" && dice.innerHTML==="3") {
twentyone.innerHTML="Two";
eighteen.innerHTML="";}
else if (eighteen.innerHTML==="Two" && dice.innerHTML==="4") {
twentytwo.innerHTML="Two";
eighteen.innerHTML="";}
else if (eighteen.innerHTML==="Two" && dice.innerHTML==="5") {
twentythree.innerHTML="Two";
eighteen.innerHTML="";}
else if (eighteen.innerHTML==="Two" && dice.innerHTML==="6") {
twentyfour.innerHTML="Two";
eighteen.innerHTML="";
free.style.background="black";
free.style.color="white";}
else if (nineteen.innerHTML==="Two" && dice.innerHTML==="1") {
twenty.innerHTML="Two";
nineteen.innerHTML="";}
else if (nineteen.innerHTML==="Two" && dice.innerHTML==="2") {
twentyone.innerHTML="Two";
nineteen.innerHTML="";}
else if (nineteen.innerHTML==="Two" && dice.innerHTML==="3") {
twentytwo.innerHTML="Two";
nineteen.innerHTML="";}
else if (nineteen.innerHTML==="Two" && dice.innerHTML==="4") {
twentythree.innerHTML="Two";
nineteen.innerHTML="";}
else if (nineteen.innerHTML==="Two" && dice.innerHTML==="5") {
twentyfour.innerHTML="Two";
nineteen.innerHTML="";
free.style.background="black";
free.style.color="white";}
else if (nineteen.innerHTML==="Two" && dice.innerHTML==="6") {
twentyfive.innerHTML="Two";
nineteen.innerHTML="";}
else if (twenty.innerHTML==="Two" && dice.innerHTML==="1") {
twentyone.innerHTML="Two";
twenty.innerHTML="";}
else if (twenty.innerHTML==="Two" && dice.innerHTML==="2") {
twentytwo.innerHTML="Two";
twenty.innerHTML="";}
else if (twenty.innerHTML==="Two" && dice.innerHTML==="3") {
twentythree.innerHTML="Two";
twenty.innerHTML="";}
else if (twenty.innerHTML==="Two" && dice.innerHTML==="4") {
twentyfour.innerHTML="Two";
twenty.innerHTML="";
free.style.background="black";
free.style.color="white";}
else if (twenty.innerHTML==="Two" && dice.innerHTML==="5") {
twentyfive.innerHTML="Two";
twenty.innerHTML="";}
else if (twenty.innerHTML==="Two" && dice.innerHTML==="6") {
twentysix.innerHTML="Two";
twenty.innerHTML="";}
else if (twentyone.innerHTML==="Two" && dice.innerHTML==="1") {
twentytwo.innerHTML="Two";
twentyone.innerHTML="";}
else if (twentyone.innerHTML==="Two" && dice.innerHTML==="2") {
twentythree.innerHTML="Two";
twentyone.innerHTML="";}
else if (twentyone.innerHTML==="Two" && dice.innerHTML==="3") {
twentyfour.innerHTML="Two";
twentyone.innerHTML="";
free.style.background="black";
free.style.color="white";}
else if (twentyone.innerHTML==="Two" && dice.innerHTML==="4") {
twentyfive.innerHTML="Two";
twentyone.innerHTML="";}
else if (twentyone.innerHTML==="Two" && dice.innerHTML==="5") {
twentysix.innerHTML="Two";
twentyone.innerHTML="";}
else if (twentyone.innerHTML==="Two" && dice.innerHTML==="6") {
twentyseven.innerHTML="Two";
twentyone.innerHTML="";}
else if (twentytwo.innerHTML==="Two" && dice.innerHTML==="1") {
twentythree.innerHTML="Two";
twentytwo.innerHTML="";}
else if (twentytwo.innerHTML==="Two" && dice.innerHTML==="2") {
twentyfour.innerHTML="Two";
twentytwo.innerHTML="";
free.style.background="black";
free.style.color="white";}
else if (twentytwo.innerHTML==="Two" && dice.innerHTML==="3") {
twentyfive.innerHTML="Two";
twentytwo.innerHTML="";}
else if (twentytwo.innerHTML==="Two" && dice.innerHTML==="4") {
twentysix.innerHTML="Two";
twentytwo.innerHTML="";}
else if (twentytwo.innerHTML==="Two" && dice.innerHTML==="5") {
twentyseven.innerHTML="Two";
twentytwo.innerHTML="";}
else if (twentytwo.innerHTML==="Two" && dice.innerHTML==="6") {
twentyeight.innerHTML="Two";
twentytwo.innerHTML="";}
else if (twentythree.innerHTML==="Two" && dice.innerHTML==="1") {
twentyfour.innerHTML="Two";
twentythree.innerHTML="";
free.style.background="black";
free.style.color="white";}
else if (twentythree.innerHTML==="Two" && dice.innerHTML==="2") {
twentyfive.innerHTML="Two";
twentythree.innerHTML="";}
else if (twentythree.innerHTML==="Two" && dice.innerHTML==="3") {
twentysix.innerHTML="Two";
twentythree.innerHTML="";}
else if (twentythree.innerHTML==="Two" && dice.innerHTML==="4") {
twentyseven.innerHTML="Two";
twentythree.innerHTML="";}
else if (twentythree.innerHTML==="Two" && dice.innerHTML==="5") {
twentyeight.innerHTML="Two";
twentythree.innerHTML="";}
else if (twentythree.innerHTML==="Two" && dice.innerHTML==="6") {
twentynine.innerHTML="Two";
twentythree.innerHTML="";}
else if  (twentyfive.innerHTML==="Two" && dice.innerHTML==="1") {
twentysix.innerHTML="Two";
twentyfive.innerHTML="";}
else if (twentyfive.innerHTML==="Two" && dice.innerHTML==="2") {
twentyseven.innerHTML="Two";
twentyfive.innerHTML="";}
else if (twentyfive.innerHTML==="Two" && dice.innerHTML==="3") {
twentyeight.innerHTML="Two";
twentyfive.innerHTML="";}
else if (twentyfive.innerHTML==="Two" && dice.innerHTML==="4") {
twentynine.innerHTML="Two";
twentyfive.innerHTML="";}
else if (twentyfive.innerHTML==="Two" && dice.innerHTML==="5") {
thirty.innerHTML="Two";
twentyfive.innerHTML="";}
else if (twentyfive.innerHTML==="Two" && dice.innerHTML==="6") {
thirtyone.innerHTML="Two";
twentyfive.innerHTML="";}
else if (twentysix.innerHTML==="Two" && dice.innerHTML==="1") {
twentyseven.innerHTML="Two";
twentysix.innerHTML="";}
else if (twentysix.innerHTML==="Two" && dice.innerHTML==="2") {
twentyeight.innerHTML="Two";
twentysix.innerHTML="";}
else if (twentysix.innerHTML==="Two" && dice.innerHTML==="3") {
twentynine.innerHTML="Two";
twentysix.innerHTML="";}
else if (twentysix.innerHTML==="Two" && dice.innerHTML==="4") {
thirty.innerHTML="Two";
twentysix.innerHTML="";}
else if (twentysix.innerHTML==="Two" && dice.innerHTML==="5") {
thirtyone.innerHTML="Two";
twentysix.innerHTML="";}
else if (twentysix.innerHTML==="Two" && dice.innerHTML==="6") {
thirtytwo.innerHTML="Two";
twentysix.innerHTML="";}
else if (twentyseven.innerHTML==="Two" && dice.innerHTML==="1") {
twentyeight.innerHTML="Two";
twentyseven.innerHTML="";}
else if (twentyseven.innerHTML==="Two" && dice.innerHTML==="2") {
twentynine.innerHTML="Two";
twentyseven.innerHTML="";}
else if (twentyseven.innerHTML==="Two" && dice.innerHTML==="3") {
thirty.innerHTML="Two";
twentyseven.innerHTML="";}
else if (twentyseven.innerHTML==="Two" && dice.innerHTML==="4") {
thirtyone.innerHTML="Two";
twentyseven.innerHTML="";}
else if (twentyseven.innerHTML==="Two" && dice.innerHTML==="5") {
thirtytwo.innerHTML="Two";
twentyseven.innerHTML="";}
else if (twentyseven.innerHTML==="Two" && dice.innerHTML==="6") {
one.innerHTML="Two";
twentyseven.innerHTML="";}
else if (twentyeight.innerHTML==="Two" && dice.innerHTML==="1") {
twentynine.innerHTML="Two";
twentyeight.innerHTML="";}
else if (twentyeight.innerHTML==="Two" && dice.innerHTML==="2") {
thirty.innerHTML="Two";
twentyeight.innerHTML="";}
else if (twentyeight.innerHTML==="Two" && dice.innerHTML==="3") {
thirtyone.innerHTML="Two";
twentyeight.innerHTML="";}
else if (twentyeight.innerHTML==="Two" && dice.innerHTML==="4") {
thirtytwo.innerHTML="Two";
twentyeight.innerHTML="";}
else if (twentyeight.innerHTML==="Two" && dice.innerHTML==="5") {
one.innerHTML="Two";
twentyeight.innerHTML="";}
else if (twentyeight.innerHTML==="Two" && dice.innerHTML==="6") {
two.innerHTML="Two";
twentyeight.innerHTML="";}
else if (twentynine.innerHTML==="Two" && dice.innerHTML==="1") {
thirty.innerHTML="Two";
twentynine.innerHTML="";}
else if (twentynine.innerHTML==="Two" && dice.innerHTML==="2") {
thirtyone.innerHTML="Two";
twentynine.innerHTML="";}
else if (twentynine.innerHTML==="Two" && dice.innerHTML==="3") {
thirtytwo.innerHTML="Two";
twentynine.innerHTML="";}
else if (twentynine.innerHTML==="Two" && dice.innerHTML==="4") {
one.innerHTML="Two";
twentynine.innerHTML="";}
else if (twentynine.innerHTML==="Two" && dice.innerHTML==="5") {
two.innerHTML="Two";
twentynine.innerHTML="";}
else if (twentynine.innerHTML==="Two" && dice.innerHTML==="6") {
three.innerHTML="Two";
twentynine.innerHTML="";}
else if (thirty.innerHTML==="Two" && dice.innerHTML==="1") {
thirtyone.innerHTML="Two";
thirty.innerHTML="";}
else if (thirty.innerHTML==="Two" && dice.innerHTML==="2") {
thirtytwo.innerHTML="Two";
thirty.innerHTML="";}
else if (thirty.innerHTML==="Two" && dice.innerHTML==="3") {
one.innerHTML="Two";
thirty.innerHTML="";}
else if (thirty.innerHTML==="Two" && dice.innerHTML==="4") {
two.innerHTML="Two";
thirty.innerHTML="";}
else if (thirty.innerHTML==="Two" && dice.innerHTML==="5") {
three.innerHTML="Two";
thirty.innerHTML="";}
else if (thirty.innerHTML==="Two" && dice.innerHTML==="6") {
four.innerHTML="Two";
thirty.innerHTML="";}
else if (thirtyone.innerHTML==="Two" && dice.innerHTML==="1") {
thirtytwo.innerHTML="Two";
thirtyone.innerHTML="";}
else if (thirtyone.innerHTML==="Two" && dice.innerHTML==="2") {
one.innerHTML="Two";
thirtyone.innerHTML="";}
else if (thirtyone.innerHTML==="Two" && dice.innerHTML==="3") {
two.innerHTML="Two";
thirtyone.innerHTML="";}
else if (thirtyone.innerHTML==="Two" && dice.innerHTML==="4") {
three.innerHTML="Two";
thirtyone.innerHTML="";}
else if (thirtyone.innerHTML==="Two" && dice.innerHTML==="5") {
four.innerHTML="Two";
thirtyone.innerHTML="";}
else if (thirtyone.innerHTML==="Two" && dice.innerHTML==="6") {
five.innerHTML="Two";
thirtyone.innerHTML="";}
else if (thirtytwo.innerHTML==="Two" && dice.innerHTML==="1") { 
one.innerHTML="Two";
thirtytwo.innerHTML="";}
else if (thirtytwo.innerHTML==="Two" && dice.innerHTML==="2") { 
two.innerHTML="Two";
thirtytwo.innerHTML="";}
else if (thirtytwo.innerHTML==="Two" && dice.innerHTML==="3") { 
three.innerHTML="Two";
thirtytwo.innerHTML="";}
else if (thirtytwo.innerHTML==="Two" && dice.innerHTML==="4") { 
four.innerHTML="Two";
thirtytwo.innerHTML="";}
else if (thirtytwo.innerHTML==="Two" && dice.innerHTML==="5") { 
five.innerHTML="Two";
thirtytwo.innerHTML="";}
else if (thirtytwo.innerHTML==="Two" && dice.innerHTML==="6") { 
six.innerHTML="Two";
thirtytwo.innerHTML="";}
else if (one.innerHTML==="Red" && dice.innerHTML==="1") {
two.innerHTML="Red";
one.innerHTML="";}
else if (one.innerHTML==="Red" && dice.innerHTML==="2") {
three.innerHTML="Red";
one.innerHTML="";}
else if (one.innerHTML==="Red" && dice.innerHTML==="3") {
four.innerHTML="Red";
one.innerHTML="";}
else if (one.innerHTML==="Red" && dice.innerHTML==="4") {
five.innerHTML="Red";
one.innerHTML="";}
else if (one.innerHTML==="Red" && dice.innerHTML==="5") {
six.innerHTML="Red";
one.innerHTML="";}
else if (one.innerHTML==="Red" && dice.innerHTML==="6") {
seven.innerHTML="Red";
one.innerHTML="";}
else if (two.innerHTML==="Red" && dice.innerHTML==="1") {
three.innerHTML="Red";
two.innerHTML="";}
else if (two.innerHTML==="Red" && dice.innerHTML==="2") {
four.innerHTML="Red";
two.innerHTML="";}
else if (two.innerHTML==="Red" && dice.innerHTML==="3") {
five.innerHTML="Red";
two.innerHTML="";}
else if (two.innerHTML==="Red" && dice.innerHTML==="4") {
six.innerHTML="Red";
two.innerHTML="";}
else if (two.innerHTML==="Red" && dice.innerHTML==="5") {
seven.innerHTML="Red";
two.innerHTML="";}
else if (two.innerHTML==="Red" && dice.innerHTML==="6") {
eight.innerHTML="Red";
two.innerHTML="";}
else if (three.innerHTML==="Red" && dice.innerHTML==="1") {
four.innerHTML="Red";
three.innerHTML="";}
else if (three.innerHTML==="Red" && dice.innerHTML==="2") {
five.innerHTML="Red";
three.innerHTML="";}
else if (three.innerHTML==="Red" && dice.innerHTML==="3") {
six.innerHTML="Red";
three.innerHTML="";}
else if (three.innerHTML==="Red" && dice.innerHTML==="4") {
seven.innerHTML="Red";
three.innerHTML="";}
else if (three.innerHTML==="Red" && dice.innerHTML==="5") {
eight.innerHTML="Red";
three.innerHTML="";}
else if (three.innerHTML==="Red" && dice.innerHTML==="6") {
nine.innerHTML="Red";
three.innerHTML="";}
else if (four.innerHTML==="Red" && dice.innerHTML==="1") {
five.innerHTML="Red";
four.innerHTML="";}
else if (four.innerHTML==="Red" && dice.innerHTML==="2") {
six.innerHTML="Red";
four.innerHTML="";}
else if (four.innerHTML==="Red" && dice.innerHTML==="3") {
seven.innerHTML="Red";
four.innerHTML="";}
else if (four.innerHTML==="Red" && dice.innerHTML==="4") {
eight.innerHTML="Red";
four.innerHTML="";}
else if (four.innerHTML==="Red" && dice.innerHTML==="5") {
nine.innerHTML="Red";
four.innerHTML="";}
else if (four.innerHTML==="Red" && dice.innerHTML==="6") {
ten.innerHTML="Red";
four.innerHTML="";}
else if (five.innerHTML==="Red" && dice.innerHTML==="1") {
six.innerHTML="Red";
five.innerHTML="";}
else if (five.innerHTML==="Red" && dice.innerHTML==="2") {
seven.innerHTML="Red";
five.innerHTML="";}
else if (five.innerHTML==="Red" && dice.innerHTML==="3") {
eight.innerHTML="Red";
five.innerHTML="";}
else if (five.innerHTML==="Red" && dice.innerHTML==="4") {
nine.innerHTML="Red";
five.innerHTML="";}
else if (five.innerHTML==="Red" && dice.innerHTML==="5") {
ten.innerHTML="Red";
five.innerHTML="";}
else if (five.innerHTML==="Red" && dice.innerHTML==="6") {
eleven.innerHTML="Red";
five.innerHTML="";}
else if (six.innerHTML==="Red" && dice.innerHTML==="1") {
seven.innerHTML="Red";
six.innerHTML="";}
else if (six.innerHTML==="Red" && dice.innerHTML==="2") {
eight.innerHTML="Red";
six.innerHTML="";}
else if (six.innerHTML==="Red" && dice.innerHTML==="3") {
nine.innerHTML="Red";
six.innerHTML="";}
else if (six.innerHTML==="Red" && dice.innerHTML==="4") {
ten.innerHTML="Red";
six.innerHTML="";}
else if (six.innerHTML==="Red" && dice.innerHTML==="5") {
eleven.innerHTML="Red";
six.innerHTML="";}
else if (six.innerHTML==="Red" && dice.innerHTML==="6") {
twelve.innerHTML="Red";
six.innerHTML="";}
else if (seven.innerHTML==="Red" && dice.innerHTML==="1") {
eight.innerHTML="Red";
seven.innerHTML="";}
else if (seven.innerHTML==="Red" && dice.innerHTML==="2") {
nine.innerHTML="Red";
seven.innerHTML="";}
else if (seven.innerHTML==="Red" && dice.innerHTML==="3") {
ten.innerHTML="Red";
seven.innerHTML="";}
else if (seven.innerHTML==="Red" && dice.innerHTML==="4") {
eleven.innerHTML="Red";
seven.innerHTML="";}
else if (seven.innerHTML==="Red" && dice.innerHTML==="5") {
twelve.innerHTML="Red";
seven.innerHTML="";}
else if (seven.innerHTML==="Red" && dice.innerHTML==="6") {
thirteen.innerHTML="Red";
seven.innerHTML="";}
else if (eight.innerHTML==="Red" && dice.innerHTML==="1") {
nine.innerHTML="Red";
eight.innerHTML="";}
else if (eight.innerHTML==="Red" && dice.innerHTML==="2") {
ten.innerHTML="Red";
eight.innerHTML="";}
else if (eight.innerHTML==="Red" && dice.innerHTML==="3") {
eleven.innerHTML="Red";
eight.innerHTML="";}
else if (eight.innerHTML==="Red" && dice.innerHTML==="4") {
twelve.innerHTML="Red";
eight.innerHTML="";}
else if (eight.innerHTML==="Red" && dice.innerHTML==="5") {
thirteen.innerHTML="Red";
eight.innerHTML="";}
else if (eight.innerHTML==="Red" && dice.innerHTML==="6") {
fourteen.innerHTML="Red";
eight.innerHTML="";}
else if (nine.innerHTML==="Red" && dice.innerHTML==="1") {
ten.innerHTML="Red";
nine.innerHTML="";}
else if (nine.innerHTML==="Red" && dice.innerHTML==="2") {
eleven.innerHTML="Red";
nine.innerHTML="";}
else if (nine.innerHTML==="Red" && dice.innerHTML==="3") {
twelve.innerHTML="Red";
nine.innerHTML="";}
else if (nine.innerHTML==="Red" && dice.innerHTML==="4") {
thirteen.innerHTML="Red";
nine.innerHTML="";}
else if (nine.innerHTML==="Red" && dice.innerHTML==="5") {
fourteen.innerHTML="Red";
nine.innerHTML="";}
else if (nine.innerHTML==="Red" && dice.innerHTML==="6") {
fifteen.innerHTML="Red";
nine.innerHTML="";}
else if (ten.innerHTML==="Red" && dice.innerHTML==="1") {
eleven.innerHTML="Red";
ten.innerHTML="";}
else if (ten.innerHTML==="Red" && dice.innerHTML==="2") {
twelve.innerHTML="Red";
ten.innerHTML="";}
else if (ten.innerHTML==="Red" && dice.innerHTML==="3") {
thirteen.innerHTML="Red";
ten.innerHTML="";}
else if (ten.innerHTML==="Red" && dice.innerHTML==="4") {
fourteen.innerHTML="Red";
ten.innerHTML="";}
else if (ten.innerHTML==="Red" && dice.innerHTML==="5") {
fifteen.innerHTML="Red";
ten.innerHTML="";}
else if (ten.innerHTML==="Red" && dice.innerHTML==="6") {
sixteen.innerHTML="Red";
ten.innerHTML="";}
else if (eleven.innerHTML==="Red" && dice.innerHTML==="1") {
twelve.innerHTML="Red";
eleven.innerHTML="";}
else if (eleven.innerHTML==="Red" && dice.innerHTML==="2") {
thirteen.innerHTML="Red";
eleven.innerHTML="";}
else if (eleven.innerHTML==="Red" && dice.innerHTML==="3") {
fourteen.innerHTML="Red";
eleven.innerHTML="";}
else if (eleven.innerHTML==="Red" && dice.innerHTML==="4") {
fifteen.innerHTML="Red";
eleven.innerHTML="";}
else if (eleven.innerHTML==="Red" && dice.innerHTML==="5") {
sixteen.innerHTML="Red";
eleven.innerHTML="";}
else if (eleven.innerHTML==="Red" && dice.innerHTML==="6") {
seventeen.innerHTML="Red";
eleven.innerHTML="";}
else if (twelve.innerHTML==="Red" && dice.innerHTML==="1") {
thirteen.innerHTML="Red";
twelve.innerHTML="";}
else if (twelve.innerHTML==="Red" && dice.innerHTML==="2") {
fourteen.innerHTML="Red";
twelve.innerHTML="";}
else if (twelve.innerHTML==="Red" && dice.innerHTML==="3") {
fifteen.innerHTML="Red";
twelve.innerHTML="";}
else if (twelve.innerHTML==="Red" && dice.innerHTML==="4") {
sixteen.innerHTML="Red";
twelve.innerHTML="";}
else if (twelve.innerHTML==="Red" && dice.innerHTML==="5") {
seventeen.innerHTML="Red";
twelve.innerHTML="";}
else if (twelve.innerHTML==="Red" && dice.innerHTML==="6") {
eighteen.innerHTML="Red";
twelve.innerHTML="";}
else if (thirteen.innerHTML==="Red" && dice.innerHTML==="1") {
fourteen.innerHTML="Red";
thirteen.innerHTML="";}
else if (thirteen.innerHTML==="Red" && dice.innerHTML==="2") {
fifteen.innerHTML="Red";
thirteen.innerHTML="";}
else if (thirteen.innerHTML==="Red" && dice.innerHTML==="3") {
sixteen.innerHTML="Red";
thirteen.innerHTML="";}
else if (thirteen.innerHTML==="Red" && dice.innerHTML==="4") {
seventeen.innerHTML="Red";
thirteen.innerHTML="";}
else if (thirteen.innerHTML==="Red" && dice.innerHTML==="5") {
eighteen.innerHTML="Red";
thirteen.innerHTML="";}
else if (thirteen.innerHTML==="Red" && dice.innerHTML==="6") {
nineteen.innerHTML="Red";
thirteen.innerHTML="";}
else if (fourteen.innerHTML==="Red" && dice.innerHTML==="1") {
fifteen.innerHTML="Red";
fourteen.innerHTML="";}
else if (fourteen.innerHTML==="Red" && dice.innerHTML==="2") {
sixteen.innerHTML="Red";
fourteen.innerHTML="";}
else if (fourteen.innerHTML==="Red" && dice.innerHTML==="3") {
seventeen.innerHTML="Red";
fourteen.innerHTML="";}
else if (fourteen.innerHTML==="Red" && dice.innerHTML==="4") {
eighteen.innerHTML="Red";
fourteen.innerHTML="";}
else if (fourteen.innerHTML==="Red" && dice.innerHTML==="5") {
nineteen.innerHTML="Red";
fourteen.innerHTML="";}
else if (fourteen.innerHTML==="Red" && dice.innerHTML==="6") {
twenty.innerHTML="Red";
fourteen.innerHTML="";}
else if (fifteen.innerHTML==="Red" && dice.innerHTML==="1") {
sixteen.innerHTML="Red";
fifteen.innerHTML="";}
else if (fifteen.innerHTML==="Red" && dice.innerHTML==="2") {
seventeen.innerHTML="Red";
fifteen.innerHTML="";}
else if (fifteen.innerHTML==="Red" && dice.innerHTML==="3") {
eighteen.innerHTML="Red";
fifteen.innerHTML="";}
else if (fifteen.innerHTML==="Red" && dice.innerHTML==="4") {
nineteen.innerHTML="Red";
fifteen.innerHTML="";}
else if (fifteen.innerHTML==="Red" && dice.innerHTML==="5") {
twenty.innerHTML="Red";
fifteen.innerHTML="";}
else if (fifteen.innerHTML==="Red" && dice.innerHTML==="6") {
twentyone.innerHTML="Red";
fifteen.innerHTML="";}
else if (sixteen.innerHTML==="Red" && dice.innerHTML==="1") {
seventeen.innerHTML="Red";
sixteen.innerHTML="";}
else if (sixteen.innerHTML==="Red" && dice.innerHTML==="2") {
eighteen.innerHTML="Red";
sixteen.innerHTML="";}
else if (sixteen.innerHTML==="Red" && dice.innerHTML==="3") {
nineteen.innerHTML="Red";
sixteen.innerHTML="";}
else if (sixteen.innerHTML==="Red" && dice.innerHTML==="4") {
twenty.innerHTML="Red";
sixteen.innerHTML="";}
else if (sixteen.innerHTML==="Red" && dice.innerHTML==="5") {
twentyone.innerHTML="Red";
sixteen.innerHTML="";}
else if (sixteen.innerHTML==="Red" && dice.innerHTML==="6") {
twentytwo.innerHTML="Red";
sixteen.innerHTML="";}
else if (seventeen.innerHTML==="Red" && dice.innerHTML==="1") {
eighteen.innerHTML="Red";
seventeen.innerHTML="";}
else if (seventeen.innerHTML==="Red" && dice.innerHTML==="2") {
nineteen.innerHTML="Red";
seventeen.innerHTML="";}
else if (seventeen.innerHTML==="Red" && dice.innerHTML==="3") {
twenty.innerHTML="Red";
seventeen.innerHTML="";}
else if (seventeen.innerHTML==="Red" && dice.innerHTML==="4") {
twentyone.innerHTML="Red";
seventeen.innerHTML="";}
else if (seventeen.innerHTML==="Red" && dice.innerHTML==="5") {
twentytwo.innerHTML="Red";
seventeen.innerHTML="";}
else if (seventeen.innerHTML==="Red" && dice.innerHTML==="6") {
twentythree.innerHTML="Red";
seventeen.innerHTML="";}
else if (eighteen.innerHTML==="Red" && dice.innerHTML==="1") {
nineteen.innerHTML="Red";
eighteen.innerHTML="";}
else if (eighteen.innerHTML==="Red" && dice.innerHTML==="2") {
twenty.innerHTML="Red";
eighteen.innerHTML="";}
else if (eighteen.innerHTML==="Red" && dice.innerHTML==="3") {
twentyone.innerHTML="Red";
eighteen.innerHTML="";}
else if (eighteen.innerHTML==="Red" && dice.innerHTML==="4") {
twentytwo.innerHTML="Red";
eighteen.innerHTML="";}
else if (eighteen.innerHTML==="Red" && dice.innerHTML==="5") {
twentythree.innerHTML="Red";
eighteen.innerHTML="";}
else if (eighteen.innerHTML==="Red" && dice.innerHTML==="6") {
twentyfour.innerHTML="Red";
eighteen.innerHTML="";
free.style.background="black";
free.style.color="white";}
else if (nineteen.innerHTML==="Red" && dice.innerHTML==="1") {
twenty.innerHTML="Red";
nineteen.innerHTML="";}
else if (nineteen.innerHTML==="Red" && dice.innerHTML==="2") {
twentyone.innerHTML="Red";
nineteen.innerHTML="";}
else if (nineteen.innerHTML==="Red" && dice.innerHTML==="3") {
twentytwo.innerHTML="Red";
nineteen.innerHTML="";}
else if (nineteen.innerHTML==="Red" && dice.innerHTML==="4") {
twentythree.innerHTML="Red";
nineteen.innerHTML="";}
else if (nineteen.innerHTML==="Red" && dice.innerHTML==="5") {
twentyfour.innerHTML="Red";
nineteen.innerHTML="";
free.style.background="black";
free.style.color="white";}
else if (nineteen.innerHTML==="Red" && dice.innerHTML==="6") {
twentyfive.innerHTML="Red";
nineteen.innerHTML="";}
else if (twenty.innerHTML==="Red" && dice.innerHTML==="1") {
twentyone.innerHTML="Red";
twenty.innerHTML="";}
else if (twenty.innerHTML==="Red" && dice.innerHTML==="2") {
twentytwo.innerHTML="Red";
twenty.innerHTML="";}
else if (twenty.innerHTML==="Red" && dice.innerHTML==="3") {
twentythree.innerHTML="Red";
twenty.innerHTML="";}
else if (twenty.innerHTML==="Red" && dice.innerHTML==="4") {
twentyfour.innerHTML="Red";
twenty.innerHTML="";
free.style.background="black";
free.style.color="white";}
else if (twenty.innerHTML==="Red" && dice.innerHTML==="5") {
twentyfive.innerHTML="Red";
twenty.innerHTML="";}
else if (twenty.innerHTML==="Red" && dice.innerHTML==="6") {
twentysix.innerHTML="Red";
twenty.innerHTML="";}
else if (twentyone.innerHTML==="Red" && dice.innerHTML==="1") {
twentytwo.innerHTML="Red";
twentyone.innerHTML="";}
else if (twentyone.innerHTML==="Red" && dice.innerHTML==="2") {
twentythree.innerHTML="Red";
twentyone.innerHTML="";}
else if (twentyone.innerHTML==="Red" && dice.innerHTML==="3") {
twentyfour.innerHTML="Red";
twentyone.innerHTML="";
free.style.background="black";
free.style.color="white";}
else if (twentyone.innerHTML==="Red" && dice.innerHTML==="4") {
twentyfive.innerHTML="Red";
twentyone.innerHTML="";}
else if (twentyone.innerHTML==="Red" && dice.innerHTML==="5") {
twentysix.innerHTML="Red";
twentyone.innerHTML="";}
else if (twentyone.innerHTML==="Red" && dice.innerHTML==="6") {
twentyseven.innerHTML="Red";
twentyone.innerHTML="";}
else if (twentytwo.innerHTML==="Red" && dice.innerHTML==="1") {
twentythree.innerHTML="Red";
twentytwo.innerHTML="";}
else if (twentytwo.innerHTML==="Red" && dice.innerHTML==="2") {
twentyfour.innerHTML="Red";
twentytwo.innerHTML="";
free.style.background="black";
free.style.color="white";}
else if (twentytwo.innerHTML==="Red" && dice.innerHTML==="3") {
twentyfive.innerHTML="Red";
twentytwo.innerHTML="";}
else if (twentytwo.innerHTML==="Red" && dice.innerHTML==="4") {
twentysix.innerHTML="Red";
twentytwo.innerHTML="";}
else if (twentytwo.innerHTML==="Red" && dice.innerHTML==="5") {
twentyseven.innerHTML="Red";
twentytwo.innerHTML="";}
else if (twentytwo.innerHTML==="Red" && dice.innerHTML==="6") {
twentyeight.innerHTML="Red";
twentytwo.innerHTML="";}
else if (twentythree.innerHTML==="Red" && dice.innerHTML==="1") {
twentyfour.innerHTML="Red";
twentythree.innerHTML="";
free.style.background="black";
free.style.color="white";}
else if (twentythree.innerHTML==="Red" && dice.innerHTML==="2") {
twentyfive.innerHTML="Red";
twentythree.innerHTML="";}
else if (twentythree.innerHTML==="Red" && dice.innerHTML==="3") {
twentysix.innerHTML="Red";
twentythree.innerHTML="";}
else if (twentythree.innerHTML==="Red" && dice.innerHTML==="4") {
twentyseven.innerHTML="Red";
twentythree.innerHTML="";}
else if (twentythree.innerHTML==="Red" && dice.innerHTML==="5") {
twentyeight.innerHTML="Red";
twentythree.innerHTML="";;}
else if (twentythree.innerHTML==="Red" && dice.innerHTML==="6") {
twentynine.innerHTML="Red";
twentythree.innerHTML="";}
else if  (twentyfive.innerHTML==="Red" && dice.innerHTML==="1") {
twentysix.innerHTML="Red";
twentyfive.innerHTML="";}
else if (twentyfive.innerHTML==="Red" && dice.innerHTML==="2") {
twentyseven.innerHTML="Red";
twentyfive.innerHTML="";}
else if (twentyfive.innerHTML==="Red" && dice.innerHTML==="3") {
twentyeight.innerHTML="Red";
twentyfive.innerHTML="";}
else if (twentyfive.innerHTML==="Red" && dice.innerHTML==="4") {
twentynine.innerHTML="Red";
twentyfive.innerHTML="";}
else if (twentyfive.innerHTML==="Red" && dice.innerHTML==="5") {
thirty.innerHTML="Red";
twentyfive.innerHTML="";}
else if (twentyfive.innerHTML==="Red" && dice.innerHTML==="6") {
thirtyone.innerHTML="Red";
twentyfive.innerHTML="";}
else if (twentysix.innerHTML==="Red" && dice.innerHTML==="1") {
twentyseven.innerHTML="Red";
twentysix.innerHTML="";}
else if (twentysix.innerHTML==="Red" && dice.innerHTML==="2") {
twentyeight.innerHTML="Red";
twentysix.innerHTML="";}
else if (twentysix.innerHTML==="Red" && dice.innerHTML==="3") {
twentynine.innerHTML="Red";
twentysix.innerHTML="";}
else if (twentysix.innerHTML==="Red" && dice.innerHTML==="4") {
thirty.innerHTML="Red";
twentysix.innerHTML="";}
else if (twentysix.innerHTML==="Red" && dice.innerHTML==="5") {
thirtyone.innerHTML="Red";
twentysix.innerHTML="";}
else if (twentysix.innerHTML==="Red" && dice.innerHTML==="6") {
thirtytwo.innerHTML="Red";
twentysix.innerHTML="";}
else if (twentyseven.innerHTML==="Red" && dice.innerHTML==="1") {
twentyeight.innerHTML="Red";
twentyseven.innerHTML="";}
else if (twentyseven.innerHTML==="Red" && dice.innerHTML==="2") {
twentynine.innerHTML="Red";
twentyseven.innerHTML="";}
else if (twentyseven.innerHTML==="Red" && dice.innerHTML==="3") {
thirty.innerHTML="Red";
twentyseven.innerHTML="";}
else if (twentyseven.innerHTML==="Red" && dice.innerHTML==="4") {
thirtyone.innerHTML="Red";
twentyseven.innerHTML="";}
else if (twentyseven.innerHTML==="Red" && dice.innerHTML==="5") {
thirtytwo.innerHTML="Red";
twentyseven.innerHTML="";}
else if (twentyseven.innerHTML==="Red" && dice.innerHTML==="6") {
one.innerHTML="Red";
twentyseven.innerHTML="";}
else if (twentyeight.innerHTML==="Red" && dice.innerHTML==="1") {
twentynine.innerHTML="Red";
twentyeight.innerHTML="";}
else if (twentyeight.innerHTML==="Red" && dice.innerHTML==="2") {
thirty.innerHTML="Red";
twentyeight.innerHTML="";}
else if (twentyeight.innerHTML==="Red" && dice.innerHTML==="3") {
thirtyone.innerHTML="Red";
twentyeight.innerHTML="";}
else if (twentyeight.innerHTML==="Red" && dice.innerHTML==="4") {
thirtytwo.innerHTML="Red";
twentyeight.innerHTML="";}
else if (twentyeight.innerHTML==="Red" && dice.innerHTML==="5") {
one.innerHTML="Red";
twentyeight.innerHTML="";}
else if (twentyeight.innerHTML==="Red" && dice.innerHTML==="6") {
two.innerHTML="Red";
twentyeight.innerHTML="";}
else if (twentynine.innerHTML==="Red" && dice.innerHTML==="1") {
thirty.innerHTML="Red";
twentynine.innerHTML="";}
else if (twentynine.innerHTML==="Red" && dice.innerHTML==="2") {
thirtyone.innerHTML="Red";
twentynine.innerHTML="";}
else if (twentynine.innerHTML==="Red" && dice.innerHTML==="3") {
thirtytwo.innerHTML="Red";
twentynine.innerHTML="";}
else if (twentynine.innerHTML==="Red" && dice.innerHTML==="4") {
one.innerHTML="Red";
twentynine.innerHTML="";}
else if (twentynine.innerHTML==="Red" && dice.innerHTML==="5") {
two.innerHTML="Red";
twentynine.innerHTML="";}
else if (twentynine.innerHTML==="Red" && dice.innerHTML==="6") {
three.innerHTML="Red";
twentynine.innerHTML="";}
else if (thirty.innerHTML==="Red" && dice.innerHTML==="1") {
thirtyone.innerHTML="Red";
thirty.innerHTML="";}
else if (thirty.innerHTML==="Red" && dice.innerHTML==="2") {
thirtytwo.innerHTML="Red";
thirty.innerHTML="";}
else if (thirty.innerHTML==="Red" && dice.innerHTML==="3") {
one.innerHTML="Red";
thirty.innerHTML="";}
else if (thirty.innerHTML==="Red" && dice.innerHTML==="4") {
two.innerHTML="Red";
thirty.innerHTML="";}
else if (thirty.innerHTML==="Red" && dice.innerHTML==="5") {
three.innerHTML="Red";
thirty.innerHTML="";}
else if (thirty.innerHTML==="Red" && dice.innerHTML==="6") {
four.innerHTML="Red";
thirty.innerHTML="";}
else if (thirtyone.innerHTML==="Red" && dice.innerHTML==="1") {
thirtytwo.innerHTML="Red";
thirtyone.innerHTML="";}
else if (thirtyone.innerHTML==="Red" && dice.innerHTML==="2") {
one.innerHTML="Red";
thirtyone.innerHTML="";}
else if (thirtyone.innerHTML==="Red" && dice.innerHTML==="3") {
two.innerHTML="Red";
thirtyone.innerHTML="";}
else if (thirtyone.innerHTML==="Red" && dice.innerHTML==="4") {
three.innerHTML="Red";
thirtyone.innerHTML="";}
else if (thirtyone.innerHTML==="Red" && dice.innerHTML==="5") {
four.innerHTML="Red";
thirtyone.innerHTML="";}
else if (thirtyone.innerHTML==="Red" && dice.innerHTML==="6") {
five.innerHTML="Red";
thirtyone.innerHTML="";}
else if (thirtytwo.innerHTML==="Red" && dice.innerHTML==="1") { 
one.innerHTML="Red";
thirtytwo.innerHTML="";}
else if (thirtytwo.innerHTML==="Red" && dice.innerHTML==="2") { 
two.innerHTML="Red";
thirtytwo.innerHTML="";}
else if (thirtytwo.innerHTML==="Red" && dice.innerHTML==="3") { 
three.innerHTML="Red";
thirtytwo.innerHTML="";}
else if (thirtytwo.innerHTML==="Red" && dice.innerHTML==="4") { 
four.innerHTML="Red";
thirtytwo.innerHTML="";}
else if (thirtytwo.innerHTML==="Red" && dice.innerHTML==="5") { 
five.innerHTML="Red";
thirtytwo.innerHTML="";}
else if (thirtytwo.innerHTML==="Red" && dice.innerHTML==="6") { 
six.innerHTML="Red";
thirtytwo.innerHTML="";}
else if (one.innerHTML==="Yellow" && dice.innerHTML==="1") {
two.innerHTML="Yellow";
one.innerHTML="";}
else if (one.innerHTML==="Yellow" && dice.innerHTML==="2") {
three.innerHTML="Yellow";
one.innerHTML="";}
else if (one.innerHTML==="Yellow" && dice.innerHTML==="3") {
four.innerHTML="Yellow";
one.innerHTML="";}
else if (one.innerHTML==="Yellow" && dice.innerHTML==="4") {
five.innerHTML="Yellow";
one.innerHTML="";}
else if (one.innerHTML==="Yellow" && dice.innerHTML==="5") {
six.innerHTML="Yellow";
one.innerHTML="";}
else if (one.innerHTML==="Yellow" && dice.innerHTML==="6") {
seven.innerHTML="Yellow";
one.innerHTML="";}
else if (two.innerHTML==="Yellow" && dice.innerHTML==="1") {
three.innerHTML="Yellow";
two.innerHTML="";}
else if (two.innerHTML==="Yellow" && dice.innerHTML==="2") {
four.innerHTML="Yellow";
two.innerHTML="";}
else if (two.innerHTML==="Yellow" && dice.innerHTML==="3") {
five.innerHTML="Yellow";
two.innerHTML="";}
else if (two.innerHTML==="Yellow" && dice.innerHTML==="4") {
six.innerHTML="Yellow";
two.innerHTML="";}
else if (two.innerHTML==="Yellow" && dice.innerHTML==="5") {
seven.innerHTML="Yellow";
two.innerHTML="";}
else if (two.innerHTML==="Yellow" && dice.innerHTML==="6") {
eight.innerHTML="Yellow";
two.innerHTML="";}
else if (three.innerHTML==="Yellow" && dice.innerHTML==="1") {
four.innerHTML="Yellow";
three.innerHTML="";}
else if (three.innerHTML==="Yellow" && dice.innerHTML==="2") {
five.innerHTML="Yellow";
three.innerHTML="";}
else if (three.innerHTML==="Yellow" && dice.innerHTML==="3") {
six.innerHTML="Yellow";
three.innerHTML="";}
else if (three.innerHTML==="Yellow" && dice.innerHTML==="4") {
seven.innerHTML="Yellow";
three.innerHTML="";}
else if (three.innerHTML==="Yellow" && dice.innerHTML==="5") {
eight.innerHTML="Yellow";
three.innerHTML="";}
else if (three.innerHTML==="Yellow" && dice.innerHTML==="6") {
nine.innerHTML="Yellow";
three.innerHTML="";}
else if (four.innerHTML==="Yellow" && dice.innerHTML==="1") {
five.innerHTML="Yellow";
four.innerHTML="";}
else if (four.innerHTML==="Yellow" && dice.innerHTML==="2") {
six.innerHTML="Yellow";
four.innerHTML="";}
else if (four.innerHTML==="Yellow" && dice.innerHTML==="3") {
seven.innerHTML="Yellow";
four.innerHTML="";}
else if (four.innerHTML==="Yellow" && dice.innerHTML==="4") {
eight.innerHTML="Yellow";
four.innerHTML="";}
else if (four.innerHTML==="Yellow" && dice.innerHTML==="5") {
nine.innerHTML="Yellow";
four.innerHTML="";}
else if (four.innerHTML==="Yellow" && dice.innerHTML==="6") {
ten.innerHTML="Yellow";
four.innerHTML="";}
else if (five.innerHTML==="Yellow" && dice.innerHTML==="1") {
six.innerHTML="Yellow";
five.innerHTML="";}
else if (five.innerHTML==="Yellow" && dice.innerHTML==="2") {
seven.innerHTML="Yellow";
five.innerHTML="";}
else if (five.innerHTML==="Yellow" && dice.innerHTML==="3") {
eight.innerHTML="Yellow";
five.innerHTML="";}
else if (five.innerHTML==="Yellow" && dice.innerHTML==="4") {
nine.innerHTML="Yellow";
five.innerHTML="";}
else if (five.innerHTML==="Yellow" && dice.innerHTML==="5") {
ten.innerHTML="Yellow";
five.innerHTML="";}
else if (five.innerHTML==="Yellow" && dice.innerHTML==="6") {
eleven.innerHTML="Yellow";
five.innerHTML="";}
else if (six.innerHTML==="Yellow" && dice.innerHTML==="1") {
seven.innerHTML="Yellow";
six.innerHTML="";}
else if (six.innerHTML==="Yellow" && dice.innerHTML==="2") {
eight.innerHTML="Yellow";
six.innerHTML="";}
else if (six.innerHTML==="Yellow" && dice.innerHTML==="3") {
nine.innerHTML="Yellow";
six.innerHTML="";}
else if (six.innerHTML==="Yellow" && dice.innerHTML==="4") {
ten.innerHTML="Yellow";
six.innerHTML="";}
else if (six.innerHTML==="Yellow" && dice.innerHTML==="5") {
eleven.innerHTML="Yellow";
six.innerHTML="";}
else if (six.innerHTML==="Yellow" && dice.innerHTML==="6") {
twelve.innerHTML="Yellow";
six.innerHTML="";}
else if (seven.innerHTML==="Yellow" && dice.innerHTML==="1") {
eight.innerHTML="Yellow";
seven.innerHTML="";}
else if (seven.innerHTML==="Yellow" && dice.innerHTML==="2") {
nine.innerHTML="Yellow";
seven.innerHTML="";}
else if (seven.innerHTML==="Yellow" && dice.innerHTML==="3") {
ten.innerHTML="Yellow";
seven.innerHTML="";}
else if (seven.innerHTML==="Yellow" && dice.innerHTML==="4") {
eleven.innerHTML="Yellow";
seven.innerHTML="";}
else if (seven.innerHTML==="Yellow" && dice.innerHTML==="5") {
twelve.innerHTML="Yellow";
seven.innerHTML="";}
else if (seven.innerHTML==="Yellow" && dice.innerHTML==="6") {
thirteen.innerHTML="Yellow";
seven.innerHTML="";}
else if (eight.innerHTML==="Yellow" && dice.innerHTML==="1") {
nine.innerHTML="Yellow";
eight.innerHTML="";}
else if (eight.innerHTML==="Yellow" && dice.innerHTML==="2") {
ten.innerHTML="Yellow";
eight.innerHTML="";}
else if (eight.innerHTML==="Yellow" && dice.innerHTML==="3") {
eleven.innerHTML="Yellow";
eight.innerHTML="";}
else if (eight.innerHTML==="Yellow" && dice.innerHTML==="4") {
twelve.innerHTML="Yellow";
eight.innerHTML="";}
else if (eight.innerHTML==="Yellow" && dice.innerHTML==="5") {
thirteen.innerHTML="Yellow";
eight.innerHTML="";}
else if (eight.innerHTML==="Yellow" && dice.innerHTML==="6") {
fourteen.innerHTML="Yellow";
eight.innerHTML="";}
else if (nine.innerHTML==="Yellow" && dice.innerHTML==="1") {
ten.innerHTML="Yellow";
nine.innerHTML="";}
else if (nine.innerHTML==="Yellow" && dice.innerHTML==="2") {
eleven.innerHTML="Yellow";
nine.innerHTML="";}
else if (nine.innerHTML==="Yellow" && dice.innerHTML==="3") {
twelve.innerHTML="Yellow";
nine.innerHTML="";}
else if (nine.innerHTML==="Yellow" && dice.innerHTML==="4") {
thirteen.innerHTML="Yellow";
nine.innerHTML="";}
else if (nine.innerHTML==="Yellow" && dice.innerHTML==="5") {
fourteen.innerHTML="Yellow";
nine.innerHTML="";}
else if (nine.innerHTML==="Yellow" && dice.innerHTML==="6") {
fifteen.innerHTML="Yellow";
nine.innerHTML="";}
else if (ten.innerHTML==="Yellow" && dice.innerHTML==="1") {
eleven.innerHTML="Yellow";
ten.innerHTML="";}
else if (ten.innerHTML==="Yellow" && dice.innerHTML==="2") {
twelve.innerHTML="Yellow";
ten.innerHTML="";}
else if (ten.innerHTML==="Yellow" && dice.innerHTML==="3") {
thirteen.innerHTML="Yellow";
ten.innerHTML="";}
else if (ten.innerHTML==="Yellow" && dice.innerHTML==="4") {
fourteen.innerHTML="Yellow";
ten.innerHTML="";}
else if (ten.innerHTML==="Yellow" && dice.innerHTML==="5") {
fifteen.innerHTML="Yellow";
ten.innerHTML="";}
else if (ten.innerHTML==="Yellow" && dice.innerHTML==="6") {
sixteen.innerHTML="Yellow";
ten.innerHTML="";}
else if (eleven.innerHTML==="Yellow" && dice.innerHTML==="1") {
twelve.innerHTML="Yellow";
eleven.innerHTML="";}
else if (eleven.innerHTML==="Yellow" && dice.innerHTML==="2") {
thirteen.innerHTML="Yellow";
eleven.innerHTML="";}
else if (eleven.innerHTML==="Yellow" && dice.innerHTML==="3") {
fourteen.innerHTML="Yellow";
eleven.innerHTML="";}
else if (eleven.innerHTML==="Yellow" && dice.innerHTML==="4") {
fifteen.innerHTML="Yellow";
eleven.innerHTML="";}
else if (eleven.innerHTML==="Yellow" && dice.innerHTML==="5") {
sixteen.innerHTML="Yellow";
eleven.innerHTML="";}
else if (eleven.innerHTML==="Yellow" && dice.innerHTML==="6") {
seventeen.innerHTML="Yellow";
eleven.innerHTML="";}
else if (twelve.innerHTML==="Yellow" && dice.innerHTML==="1") {
thirteen.innerHTML="Yellow";
twelve.innerHTML="";}
else if (twelve.innerHTML==="Yellow" && dice.innerHTML==="2") {
fourteen.innerHTML="Yellow";
twelve.innerHTML="";}
else if (twelve.innerHTML==="Yellow" && dice.innerHTML==="3") {
fifteen.innerHTML="Yellow";
twelve.innerHTML="";}
else if (twelve.innerHTML==="Yellow" && dice.innerHTML==="4") {
sixteen.innerHTML="Yellow";
twelve.innerHTML="";}
else if (twelve.innerHTML==="Yellow" && dice.innerHTML==="5") {
seventeen.innerHTML="Yellow";
twelve.innerHTML="";}
else if (twelve.innerHTML==="Yellow" && dice.innerHTML==="6") {
eighteen.innerHTML="Yellow";
twelve.innerHTML="";}
else if (thirteen.innerHTML==="Yellow" && dice.innerHTML==="1") {
fourteen.innerHTML="Yellow";
thirteen.innerHTML="";}
else if (thirteen.innerHTML==="Yellow" && dice.innerHTML==="2") {
fifteen.innerHTML="Yellow";
thirteen.innerHTML="";}
else if (thirteen.innerHTML==="Yellow" && dice.innerHTML==="3") {
sixteen.innerHTML="Yellow";
thirteen.innerHTML="";}
else if (thirteen.innerHTML==="Yellow" && dice.innerHTML==="4") {
seventeen.innerHTML="Yellow";
thirteen.innerHTML="";}
else if (thirteen.innerHTML==="Yellow" && dice.innerHTML==="5") {
eighteen.innerHTML="Yellow";
thirteen.innerHTML="";}
else if (thirteen.innerHTML==="Yellow" && dice.innerHTML==="6") {
nineteen.innerHTML="Yellow";
thirteen.innerHTML="";}
else if (fourteen.innerHTML==="Yellow" && dice.innerHTML==="1") {
fifteen.innerHTML="Yellow";
fourteen.innerHTML="";}
else if (fourteen.innerHTML==="Yellow" && dice.innerHTML==="2") {
sixteen.innerHTML="Yellow";
fourteen.innerHTML="";}
else if (fourteen.innerHTML==="Yellow" && dice.innerHTML==="3") {
seventeen.innerHTML="Yellow";
fourteen.innerHTML="";}
else if (fourteen.innerHTML==="Yellow" && dice.innerHTML==="4") {
eighteen.innerHTML="Yellow";
fourteen.innerHTML="";}
else if (fourteen.innerHTML==="Yellow" && dice.innerHTML==="5") {
nineteen.innerHTML="Yellow";
fourteen.innerHTML="";}
else if (fourteen.innerHTML==="Yellow" && dice.innerHTML==="6") {
twenty.innerHTML="Yellow";
fourteen.innerHTML="";}
else if (fifteen.innerHTML==="Yellow" && dice.innerHTML==="1") {
sixteen.innerHTML="Yellow";
fifteen.innerHTML="";}
else if (fifteen.innerHTML==="Yellow" && dice.innerHTML==="2") {
seventeen.innerHTML="Yellow";
fifteen.innerHTML="";}
else if (fifteen.innerHTML==="Yellow" && dice.innerHTML==="3") {
eighteen.innerHTML="Yellow";
fifteen.innerHTML="";}
else if (fifteen.innerHTML==="Yellow" && dice.innerHTML==="4") {
nineteen.innerHTML="Yellow";
fifteen.innerHTML="";}
else if (fifteen.innerHTML==="Yellow" && dice.innerHTML==="5") {
twenty.innerHTML="Yellow";
fifteen.innerHTML="";}
else if (fifteen.innerHTML==="Yellow" && dice.innerHTML==="6") {
twentyone.innerHTML="Yellow";
fifteen.innerHTML="";}
else if (sixteen.innerHTML==="Yellow" && dice.innerHTML==="1") {
seventeen.innerHTML="Yellow";
sixteen.innerHTML="";}
else if (sixteen.innerHTML==="Yellow" && dice.innerHTML==="2") {
eighteen.innerHTML="Yellow";
sixteen.innerHTML="";}
else if (sixteen.innerHTML==="Yellow" && dice.innerHTML==="3") {
nineteen.innerHTML="Yellow";
sixteen.innerHTML="";}
else if (sixteen.innerHTML==="Yellow" && dice.innerHTML==="4") {
twenty.innerHTML="Yellow";
sixteen.innerHTML="";}
else if (sixteen.innerHTML==="Yellow" && dice.innerHTML==="5") {
twentyone.innerHTML="Yellow";
sixteen.innerHTML="";}
else if (sixteen.innerHTML==="Yellow" && dice.innerHTML==="6") {
twentytwo.innerHTML="Yellow";
sixteen.innerHTML="";}
else if (seventeen.innerHTML==="Yellow" && dice.innerHTML==="1") {
eighteen.innerHTML="Yellow";
seventeen.innerHTML="";}
else if (seventeen.innerHTML==="Yellow" && dice.innerHTML==="2") {
nineteen.innerHTML="Yellow";
seventeen.innerHTML="";}
else if (seventeen.innerHTML==="Yellow" && dice.innerHTML==="3") {
twenty.innerHTML="Yellow";
seventeen.innerHTML="";}
else if (seventeen.innerHTML==="Yellow" && dice.innerHTML==="4") {
twentyone.innerHTML="Yellow";
seventeen.innerHTML="";}
else if (seventeen.innerHTML==="Yellow" && dice.innerHTML==="5") {
twentytwo.innerHTML="Yellow";
seventeen.innerHTML="";}
else if (seventeen.innerHTML==="Yellow" && dice.innerHTML==="6") {
twentythree.innerHTML="Yellow";
seventeen.innerHTML="";}
else if (eighteen.innerHTML==="Yellow" && dice.innerHTML==="1") {
nineteen.innerHTML="Yellow";
eighteen.innerHTML="";}
else if (eighteen.innerHTML==="Yellow" && dice.innerHTML==="2") {
twenty.innerHTML="Yellow";
eighteen.innerHTML="";}
else if (eighteen.innerHTML==="Yellow" && dice.innerHTML==="3") {
twentyone.innerHTML="Yellow";
eighteen.innerHTML="";}
else if (eighteen.innerHTML==="Yellow" && dice.innerHTML==="4") {
twentytwo.innerHTML="Yellow";
eighteen.innerHTML="";}
else if (eighteen.innerHTML==="Yellow" && dice.innerHTML==="5") {
twentythree.innerHTML="Yellow";
eighteen.innerHTML="";}
else if (eighteen.innerHTML==="Yellow" && dice.innerHTML==="6") {
twentyfour.innerHTML="Yellow";
eighteen.innerHTML="";
free.style.background="black";
free.style.color="white";}
else if (nineteen.innerHTML==="Yellow" && dice.innerHTML==="1") {
twenty.innerHTML="Yellow";
nineteen.innerHTML="";}
else if (nineteen.innerHTML==="Yellow" && dice.innerHTML==="2") {
twentyone.innerHTML="Yellow";
nineteen.innerHTML="";}
else if (nineteen.innerHTML==="Yellow" && dice.innerHTML==="3") {
twentytwo.innerHTML="Yellow";
nineteen.innerHTML="";}
else if (nineteen.innerHTML==="Yellow" && dice.innerHTML==="4") {
twentythree.innerHTML="Yellow";
nineteen.innerHTML="";}
else if (nineteen.innerHTML==="Yellow" && dice.innerHTML==="5") {
twentyfour.innerHTML="Yellow";
nineteen.innerHTML="";
free.style.background="black";
free.style.color="white";}
else if (nineteen.innerHTML==="Yellow" && dice.innerHTML==="6") {
twentyfive.innerHTML="Yellow";
nineteen.innerHTML="";}
else if (twenty.innerHTML==="Yellow" && dice.innerHTML==="1") {
twentyone.innerHTML="Yellow";
twenty.innerHTML="";}
else if (twenty.innerHTML==="Yellow" && dice.innerHTML==="2") {
twentytwo.innerHTML="Yellow";
twenty.innerHTML="";}
else if (twenty.innerHTML==="Yellow" && dice.innerHTML==="3") {
twentythree.innerHTML="Yellow";
twenty.innerHTML="";}
else if (twenty.innerHTML==="Yellow" && dice.innerHTML==="4") {
twentyfour.innerHTML="Yellow";
twenty.innerHTML="";
free.style.background="black";
free.style.color="white";}
else if (twenty.innerHTML==="Yellow" && dice.innerHTML==="5") {
twentyfive.innerHTML="Yellow";
twenty.innerHTML="";}
else if (twenty.innerHTML==="Yellow" && dice.innerHTML==="6") {
twentysix.innerHTML="Yellow";
twenty.innerHTML="";}
else if (twentyone.innerHTML==="Yellow" && dice.innerHTML==="1") {
twentytwo.innerHTML="Yellow";
twentyone.innerHTML="";}
else if (twentyone.innerHTML==="Yellow" && dice.innerHTML==="2") {
twentythree.innerHTML="Yellow";
twentyone.innerHTML="";}
else if (twentyone.innerHTML==="Yellow" && dice.innerHTML==="3") {
twentyfour.innerHTML="Yellow";
twentyone.innerHTML="";
free.style.background="black";
free.style.color="white";}
else if (twentyone.innerHTML==="Yellow" && dice.innerHTML==="4") {
twentyfive.innerHTML="Yellow";
twentyone.innerHTML="";}
else if (twentyone.innerHTML==="Yellow" && dice.innerHTML==="5") {
twentysix.innerHTML="Yellow";
twentyone.innerHTML="";}
else if (twentyone.innerHTML==="Yellow" && dice.innerHTML==="6") {
twentyseven.innerHTML="Yellow";
twentyone.innerHTML="";}
else if (twentytwo.innerHTML==="Yellow" && dice.innerHTML==="1") {
twentythree.innerHTML="Yellow";
twentytwo.innerHTML="";}
else if (twentytwo.innerHTML==="Yellow" && dice.innerHTML==="2") {
twentyfour.innerHTML="Yellow";
twentytwo.innerHTML="";
free.style.background="black";
free.style.color="white";}
else if (twentytwo.innerHTML==="Yellow" && dice.innerHTML==="3") {
twentyfive.innerHTML="Yellow";
twentytwo.innerHTML="";}
else if (twentytwo.innerHTML==="Yellow" && dice.innerHTML==="4") {
twentysix.innerHTML="Yellow";
twentytwo.innerHTML="";}
else if (twentytwo.innerHTML==="Yellow" && dice.innerHTML==="5") {
twentyseven.innerHTML="Yellow";
twentytwo.innerHTML="";}
else if (twentytwo.innerHTML==="Yellow" && dice.innerHTML==="6") {
twentyeight.innerHTML="Yellow";
twentytwo.innerHTML="";}
else if (twentythree.innerHTML==="Yellow" && dice.innerHTML==="1") {
twentyfour.innerHTML="Yellow";
twentythree.innerHTML="";
free.style.background="black";
free.style.color="white";}
else if (twentythree.innerHTML==="Yellow" && dice.innerHTML==="2") {
twentyfive.innerHTML="Yellow";
twentythree.innerHTML="";}
else if (twentythree.innerHTML==="Yellow" && dice.innerHTML==="3") {
twentysix.innerHTML="Yellow";
twentythree.innerHTML="";}
else if (twentythree.innerHTML==="Yellow" && dice.innerHTML==="4") {
twentyseven.innerHTML="Yellow";
twentythree.innerHTML="";}
else if (twentythree.innerHTML==="Yellow" && dice.innerHTML==="5") {
twentyeight.innerHTML="Yellow";
twentythree.innerHTML="";}
else if (twentythree.innerHTML==="Yellow" && dice.innerHTML==="6") {
twentynine.innerHTML="Yellow";
twentythree.innerHTML="";}
else if  (twentyfive.innerHTML==="Yellow" && dice.innerHTML==="1") {
twentysix.innerHTML="Yellow";
twentyfive.innerHTML="";}
else if (twentyfive.innerHTML==="Yellow" && dice.innerHTML==="2") {
twentyseven.innerHTML="Yellow";
twentyfive.innerHTML="";}
else if (twentyfive.innerHTML==="Yellow" && dice.innerHTML==="3") {
twentyeight.innerHTML="Yellow";
twentyfive.innerHTML="";}
else if (twentyfive.innerHTML==="Yellow" && dice.innerHTML==="4") {
twentynine.innerHTML="Yellow";
twentyfive.innerHTML="";}
else if (twentyfive.innerHTML==="Yellow" && dice.innerHTML==="5") {
thirty.innerHTML="Yellow";
twentyfive.innerHTML="";}
else if (twentyfive.innerHTML==="Yellow" && dice.innerHTML==="6") {
thirtyone.innerHTML="Yellow";
twentyfive.innerHTML="";}
else if (twentysix.innerHTML==="Yellow" && dice.innerHTML==="1") {
twentyseven.innerHTML="Yellow";
twentysix.innerHTML="";}
else if (twentysix.innerHTML==="Yellow" && dice.innerHTML==="2") {
twentyeight.innerHTML="Yellow";
twentysix.innerHTML="";}
else if (twentysix.innerHTML==="Yellow" && dice.innerHTML==="3") {
twentynine.innerHTML="Yellow";
twentysix.innerHTML="";}
else if (twentysix.innerHTML==="Yellow" && dice.innerHTML==="4") {
thirty.innerHTML="Yellow";
twentysix.innerHTML="";}
else if (twentysix.innerHTML==="Yellow" && dice.innerHTML==="5") {
thirtyone.innerHTML="Yellow";
twentysix.innerHTML="";}
else if (twentysix.innerHTML==="Yellow" && dice.innerHTML==="6") {
thirtytwo.innerHTML="Yellow";
twentysix.innerHTML="";}
else if (twentyseven.innerHTML==="Yellow" && dice.innerHTML==="1") {
twentyeight.innerHTML="Yellow";
twentyseven.innerHTML="";}
else if (twentyseven.innerHTML==="Yellow" && dice.innerHTML==="2") {
twentynine.innerHTML="Yellow";
twentyseven.innerHTML="";}
else if (twentyseven.innerHTML==="Yellow" && dice.innerHTML==="3") {
thirty.innerHTML="Yellow";
twentyseven.innerHTML="";}
else if (twentyseven.innerHTML==="Yellow" && dice.innerHTML==="4") {
thirtyone.innerHTML="Yellow";
twentyseven.innerHTML="";}
else if (twentyseven.innerHTML==="Yellow" && dice.innerHTML==="5") {
thirtytwo.innerHTML="Yellow";
twentyseven.innerHTML="";}
else if (twentyseven.innerHTML==="Yellow" && dice.innerHTML==="6") {
one.innerHTML="Yellow";
twentyseven.innerHTML="";}
else if (twentyeight.innerHTML==="Yellow" && dice.innerHTML==="1") {
twentynine.innerHTML="Yellow";
twentyeight.innerHTML="";}
else if (twentyeight.innerHTML==="Yellow" && dice.innerHTML==="2") {
thirty.innerHTML="Yellow";
twentyeight.innerHTML="";}
else if (twentyeight.innerHTML==="Yellow" && dice.innerHTML==="3") {
thirtyone.innerHTML="Yellow";
twentyeight.innerHTML="";}
else if (twentyeight.innerHTML==="Yellow" && dice.innerHTML==="4") {
thirtytwo.innerHTML="Yellow";
twentyeight.innerHTML="";}
else if (twentyeight.innerHTML==="Yellow" && dice.innerHTML==="5") {
one.innerHTML="Yellow";
twentyeight.innerHTML="";}
else if (twentyeight.innerHTML==="Yellow" && dice.innerHTML==="6") {
two.innerHTML="Yellow";
twentyeight.innerHTML="";}
else if (twentynine.innerHTML==="Yellow" && dice.innerHTML==="1") {
thirty.innerHTML="Yellow";
twentynine.innerHTML="";}
else if (twentynine.innerHTML==="Yellow" && dice.innerHTML==="2") {
thirtyone.innerHTML="Yellow";
twentynine.innerHTML="";}
else if (twentynine.innerHTML==="Yellow" && dice.innerHTML==="3") {
thirtytwo.innerHTML="Yellow";
twentynine.innerHTML="";}
else if (twentynine.innerHTML==="Yellow" && dice.innerHTML==="4") {
one.innerHTML="Yellow";
twentynine.innerHTML="";}
else if (twentynine.innerHTML==="Yellow" && dice.innerHTML==="5") {
two.innerHTML="Yellow";
twentynine.innerHTML="";}
else if (twentynine.innerHTML==="Yellow" && dice.innerHTML==="6") {
three.innerHTML="Yellow";
twentynine.innerHTML="";}
else if (thirty.innerHTML==="Yellow" && dice.innerHTML==="1") {
thirtyone.innerHTML="Yellow";
thirty.innerHTML="";}
else if (thirty.innerHTML==="Yellow" && dice.innerHTML==="2") {
thirtytwo.innerHTML="Yellow";
thirty.innerHTML="";}
else if (thirty.innerHTML==="Yellow" && dice.innerHTML==="3") {
one.innerHTML="Yellow";
thirty.innerHTML="";}
else if (thirty.innerHTML==="Yellow" && dice.innerHTML==="4") {
two.innerHTML="Yellow";
thirty.innerHTML="";}
else if (thirty.innerHTML==="Yellow" && dice.innerHTML==="5") {
three.innerHTML="Yellow";
thirty.innerHTML="";}
else if (thirty.innerHTML==="Yellow" && dice.innerHTML==="6") {
four.innerHTML="Yellow";
thirty.innerHTML="";}
else if (thirtyone.innerHTML==="Yellow" && dice.innerHTML==="1") {
thirtytwo.innerHTML="Yellow";
thirtyone.innerHTML="";}
else if (thirtyone.innerHTML==="Yellow" && dice.innerHTML==="2") {
one.innerHTML="Yellow";
thirtyone.innerHTML="";}
else if (thirtyone.innerHTML==="Yellow" && dice.innerHTML==="3") {
two.innerHTML="Yellow";
thirtyone.innerHTML="";}
else if (thirtyone.innerHTML==="Yellow" && dice.innerHTML==="4") {
three.innerHTML="Yellow";
thirtyone.innerHTML="";}
else if (thirtyone.innerHTML==="Yellow" && dice.innerHTML==="5") {
four.innerHTML="Yellow";
thirtyone.innerHTML="";}
else if (thirtyone.innerHTML==="Yellow" && dice.innerHTML==="6") {
five.innerHTML="Yellow";
thirtyone.innerHTML="";}
else if (thirtytwo.innerHTML==="Yellow" && dice.innerHTML==="1") { 
one.innerHTML="Yellow";
thirtytwo.innerHTML="";}
else if (thirtytwo.innerHTML==="Yellow" && dice.innerHTML==="2") { 
two.innerHTML="Yellow";
thirtytwo.innerHTML="";}
else if (thirtytwo.innerHTML==="Yellow" && dice.innerHTML==="3") { 
three.innerHTML="Yellow";
thirtytwo.innerHTML="";}
else if (thirtytwo.innerHTML==="Yellow" && dice.innerHTML==="4") { 
four.innerHTML="Yellow";
thirtytwo.innerHTML="";}
else if (thirtytwo.innerHTML==="Yellow" && dice.innerHTML==="5") { 
five.innerHTML="Yellow";
thirtytwo.innerHTML="";}
else if (thirtytwo.innerHTML==="Yellow" && dice.innerHTML==="6") { 
six.innerHTML="Yellow";
thirtytwo.innerHTML="";}
else if (one.innerHTML==="Pink" && dice.innerHTML==="1") {
two.innerHTML="Pink";
one.innerHTML="";}
else if (one.innerHTML==="Pink" && dice.innerHTML==="2") {
three.innerHTML="Pink";
one.innerHTML="";}
else if (one.innerHTML==="Pink" && dice.innerHTML==="3") {
four.innerHTML="Pink";
one.innerHTML="";}
else if (one.innerHTML==="Pink" && dice.innerHTML==="4") {
five.innerHTML="Pink";
one.innerHTML="";}
else if (one.innerHTML==="Pink" && dice.innerHTML==="5") {
six.innerHTML="Pink";
one.innerHTML="";}
else if (one.innerHTML==="Pink" && dice.innerHTML==="6") {
seven.innerHTML="Pink";
one.innerHTML="";}
else if (two.innerHTML==="Pink" && dice.innerHTML==="1") {
three.innerHTML="Pink";
two.innerHTML="";}
else if (two.innerHTML==="Pink" && dice.innerHTML==="2") {
four.innerHTML="Pink";
two.innerHTML="";}
else if (two.innerHTML==="Pink" && dice.innerHTML==="3") {
five.innerHTML="Pink";
two.innerHTML="";}
else if (two.innerHTML==="Pink" && dice.innerHTML==="4") {
six.innerHTML="Pink";
two.innerHTML="";}
else if (two.innerHTML==="Pink" && dice.innerHTML==="5") {
seven.innerHTML="Pink";
two.innerHTML="";}
else if (two.innerHTML==="Pink" && dice.innerHTML==="6") {
eight.innerHTML="Pink";
two.innerHTML="";}
else if (three.innerHTML==="Pink" && dice.innerHTML==="1") {
four.innerHTML="Pink";
three.innerHTML="";}
else if (three.innerHTML==="Pink" && dice.innerHTML==="2") {
five.innerHTML="Pink";
three.innerHTML="";}
else if (three.innerHTML==="Pink" && dice.innerHTML==="3") {
six.innerHTML="Pink";
three.innerHTML="";}
else if (three.innerHTML==="Pink" && dice.innerHTML==="4") {
seven.innerHTML="Pink";
three.innerHTML="";}
else if (three.innerHTML==="Pink" && dice.innerHTML==="5") {
eight.innerHTML="Pink";
three.innerHTML="";}
else if (three.innerHTML==="Pink" && dice.innerHTML==="6") {
nine.innerHTML="Pink";
three.innerHTML="";}
else if (four.innerHTML==="Pink" && dice.innerHTML==="1") {
five.innerHTML="Pink";
four.innerHTML="";}
else if (four.innerHTML==="Pink" && dice.innerHTML==="2") {
six.innerHTML="Pink";
four.innerHTML="";}
else if (four.innerHTML==="Pink" && dice.innerHTML==="3") {
seven.innerHTML="Pink";
four.innerHTML="";}
else if (four.innerHTML==="Pink" && dice.innerHTML==="4") {
eight.innerHTML="Pink";
four.innerHTML="";}
else if (four.innerHTML==="Pink" && dice.innerHTML==="5") {
nine.innerHTML="Pink";
four.innerHTML="";}
else if (four.innerHTML==="Pink" && dice.innerHTML==="6") {
ten.innerHTML="Pink";
four.innerHTML="";}
else if (five.innerHTML==="Pink" && dice.innerHTML==="1") {
six.innerHTML="Pink";
five.innerHTML="";}
else if (five.innerHTML==="Pink" && dice.innerHTML==="2") {
seven.innerHTML="Pink";
five.innerHTML="";}
else if (five.innerHTML==="Pink" && dice.innerHTML==="3") {
eight.innerHTML="Pink";
five.innerHTML="";}
else if (five.innerHTML==="Pink" && dice.innerHTML==="4") {
nine.innerHTML="Pink";
five.innerHTML="";}
else if (five.innerHTML==="Pink" && dice.innerHTML==="5") {
ten.innerHTML="Pink";
five.innerHTML="";}
else if (five.innerHTML==="Pink" && dice.innerHTML==="6") {
eleven.innerHTML="Pink";
five.innerHTML="";}
else if (six.innerHTML==="Pink" && dice.innerHTML==="1") {
seven.innerHTML="Pink";
six.innerHTML="";}
else if (six.innerHTML==="Pink" && dice.innerHTML==="2") {
eight.innerHTML="Pink";
six.innerHTML="";}
else if (six.innerHTML==="Pink" && dice.innerHTML==="3") {
nine.innerHTML="Pink";
six.innerHTML="";}
else if (six.innerHTML==="Pink" && dice.innerHTML==="4") {
ten.innerHTML="Pink";
six.innerHTML="";}
else if (six.innerHTML==="Pink" && dice.innerHTML==="5") {
eleven.innerHTML="Pink";
six.innerHTML="";}
else if (six.innerHTML==="Pink" && dice.innerHTML==="6") {
twelve.innerHTML="Pink";
six.innerHTML="";}
else if (seven.innerHTML==="Pink" && dice.innerHTML==="1") {
eight.innerHTML="Pink";
seven.innerHTML="";}
else if (seven.innerHTML==="Pink" && dice.innerHTML==="2") {
nine.innerHTML="Pink";
seven.innerHTML="";}
else if (seven.innerHTML==="Pink" && dice.innerHTML==="3") {
ten.innerHTML="Pink";
seven.innerHTML="";}
else if (seven.innerHTML==="Pink" && dice.innerHTML==="4") {
eleven.innerHTML="Pink";
seven.innerHTML="";}
else if (seven.innerHTML==="Pink" && dice.innerHTML==="5") {
twelve.innerHTML="Pink";
seven.innerHTML="";}
else if (seven.innerHTML==="Pink" && dice.innerHTML==="6") {
thirteen.innerHTML="Pink";
seven.innerHTML="";}
else if (eight.innerHTML==="Pink" && dice.innerHTML==="1") {
nine.innerHTML="Pink";
eight.innerHTML="";}
else if (eight.innerHTML==="Pink" && dice.innerHTML==="2") {
ten.innerHTML="Pink";
eight.innerHTML="";}
else if (eight.innerHTML==="Pink" && dice.innerHTML==="3") {
eleven.innerHTML="Pink";
eight.innerHTML="";}
else if (eight.innerHTML==="Pink" && dice.innerHTML==="4") {
twelve.innerHTML="Pink";
eight.innerHTML="";}
else if (eight.innerHTML==="Pink" && dice.innerHTML==="5") {
thirteen.innerHTML="Pink";
eight.innerHTML="";}
else if (eight.innerHTML==="Pink" && dice.innerHTML==="6") {
fourteen.innerHTML="Pink";
eight.innerHTML="";}
else if (nine.innerHTML==="Pink" && dice.innerHTML==="1") {
ten.innerHTML="Pink";
nine.innerHTML="";}
else if (nine.innerHTML==="Pink" && dice.innerHTML==="2") {
eleven.innerHTML="Pink";
nine.innerHTML="";}
else if (nine.innerHTML==="Pink" && dice.innerHTML==="3") {
twelve.innerHTML="Pink";
nine.innerHTML="";}
else if (nine.innerHTML==="Pink" && dice.innerHTML==="4") {
thirteen.innerHTML="Pink";
nine.innerHTML="";}
else if (nine.innerHTML==="Pink" && dice.innerHTML==="5") {
fourteen.innerHTML="Pink";
nine.innerHTML="";}
else if (nine.innerHTML==="Pink" && dice.innerHTML==="6") {
fifteen.innerHTML="Pink";
nine.innerHTML="";}
else if (ten.innerHTML==="Pink" && dice.innerHTML==="1") {
eleven.innerHTML="Pink";
ten.innerHTML="";}
else if (ten.innerHTML==="Pink" && dice.innerHTML==="2") {
twelve.innerHTML="Pink";
ten.innerHTML="";}
else if (ten.innerHTML==="Pink" && dice.innerHTML==="3") {
thirteen.innerHTML="Pink";
ten.innerHTML="";}
else if (ten.innerHTML==="Pink" && dice.innerHTML==="4") {
fourteen.innerHTML="Pink";
ten.innerHTML="";}
else if (ten.innerHTML==="Pink" && dice.innerHTML==="5") {
fifteen.innerHTML="Pink";
ten.innerHTML="";}
else if (ten.innerHTML==="Pink" && dice.innerHTML==="6") {
sixteen.innerHTML="Pink";
ten.innerHTML="";}
else if (eleven.innerHTML==="Pink" && dice.innerHTML==="1") {
twelve.innerHTML="Pink";
eleven.innerHTML="";}
else if (eleven.innerHTML==="Pink" && dice.innerHTML==="2") {
thirteen.innerHTML="Pink";
eleven.innerHTML="";}
else if (eleven.innerHTML==="Pink" && dice.innerHTML==="3") {
fourteen.innerHTML="Pink";
eleven.innerHTML="";}
else if (eleven.innerHTML==="Pink" && dice.innerHTML==="4") {
fifteen.innerHTML="Pink";
eleven.innerHTML="";}
else if (eleven.innerHTML==="Pink" && dice.innerHTML==="5") {
sixteen.innerHTML="Pink";
eleven.innerHTML="";}
else if (eleven.innerHTML==="Pink" && dice.innerHTML==="6") {
seventeen.innerHTML="Pink";
eleven.innerHTML="";}
else if (twelve.innerHTML==="Pink" && dice.innerHTML==="1") {
thirteen.innerHTML="Pink";
twelve.innerHTML="";}
else if (twelve.innerHTML==="Pink" && dice.innerHTML==="2") {
fourteen.innerHTML="Pink";
twelve.innerHTML="";}
else if (twelve.innerHTML==="Pink" && dice.innerHTML==="3") {
fifteen.innerHTML="Pink";
twelve.innerHTML="";}
else if (twelve.innerHTML==="Pink" && dice.innerHTML==="4") {
sixteen.innerHTML="Pink";
twelve.innerHTML="";}
else if (twelve.innerHTML==="Pink" && dice.innerHTML==="5") {
seventeen.innerHTML="Pink";
twelve.innerHTML="";}
else if (twelve.innerHTML==="Pink" && dice.innerHTML==="6") {
eighteen.innerHTML="Pink";
twelve.innerHTML="";}
else if (thirteen.innerHTML==="Pink" && dice.innerHTML==="1") {
fourteen.innerHTML="Pink";
thirteen.innerHTML="";}
else if (thirteen.innerHTML==="Pink" && dice.innerHTML==="2") {
fifteen.innerHTML="Pink";
thirteen.innerHTML="";}
else if (thirteen.innerHTML==="Pink" && dice.innerHTML==="3") {
sixteen.innerHTML="Pink";
thirteen.innerHTML="";}
else if (thirteen.innerHTML==="Pink" && dice.innerHTML==="4") {
seventeen.innerHTML="Pink";
thirteen.innerHTML="";}
else if (thirteen.innerHTML==="Pink" && dice.innerHTML==="5") {
eighteen.innerHTML="Pink";
thirteen.innerHTML="";}
else if (thirteen.innerHTML==="Pink" && dice.innerHTML==="6") {
nineteen.innerHTML="Pink";
thirteen.innerHTML="";}
else if (fourteen.innerHTML==="Pink" && dice.innerHTML==="1") {
fifteen.innerHTML="Pink";
fourteen.innerHTML="";}
else if (fourteen.innerHTML==="Pink" && dice.innerHTML==="2") {
sixteen.innerHTML="Pink";
fourteen.innerHTML="";}
else if (fourteen.innerHTML==="Pink" && dice.innerHTML==="3") {
seventeen.innerHTML="Pink";
fourteen.innerHTML="";}
else if (fourteen.innerHTML==="Pink" && dice.innerHTML==="4") {
eighteen.innerHTML="Pink";
fourteen.innerHTML="";}
else if (fourteen.innerHTML==="Pink" && dice.innerHTML==="5") {
nineteen.innerHTML="Pink";
fourteen.innerHTML="";}
else if (fourteen.innerHTML==="Pink" && dice.innerHTML==="6") {
twenty.innerHTML="Pink";
fourteen.innerHTML="";}
else if (fifteen.innerHTML==="Pink" && dice.innerHTML==="1") {
sixteen.innerHTML="Pink";
fifteen.innerHTML="";}
else if (fifteen.innerHTML==="Pink" && dice.innerHTML==="2") {
seventeen.innerHTML="Pink";
fifteen.innerHTML="";}
else if (fifteen.innerHTML==="Pink" && dice.innerHTML==="3") {
eighteen.innerHTML="Pink";
fifteen.innerHTML="";}
else if (fifteen.innerHTML==="Pink" && dice.innerHTML==="4") {
nineteen.innerHTML="Pink";
fifteen.innerHTML="";}
else if (fifteen.innerHTML==="Pink" && dice.innerHTML==="5") {
twenty.innerHTML="Pink";
fifteen.innerHTML="";}
else if (fifteen.innerHTML==="Pink" && dice.innerHTML==="6") {
twentyone.innerHTML="Pink";
fifteen.innerHTML="";}
else if (sixteen.innerHTML==="Pink" && dice.innerHTML==="1") {
seventeen.innerHTML="Pink";
sixteen.innerHTML="";}
else if (sixteen.innerHTML==="Pink" && dice.innerHTML==="2") {
eighteen.innerHTML="Pink";
sixteen.innerHTML="";}
else if (sixteen.innerHTML==="Pink" && dice.innerHTML==="3") {
nineteen.innerHTML="Pink";
sixteen.innerHTML="";}
else if (sixteen.innerHTML==="Pink" && dice.innerHTML==="4") {
twenty.innerHTML="Pink";
sixteen.innerHTML="";}
else if (sixteen.innerHTML==="Pink" && dice.innerHTML==="5") {
twentyone.innerHTML="Pink";
sixteen.innerHTML="";}
else if (sixteen.innerHTML==="Pink" && dice.innerHTML==="6") {
twentytwo.innerHTML="Pink";
sixteen.innerHTML="";}
else if (seventeen.innerHTML==="Pink" && dice.innerHTML==="1") {
eighteen.innerHTML="Pink";
seventeen.innerHTML="";}
else if (seventeen.innerHTML==="Pink" && dice.innerHTML==="2") {
nineteen.innerHTML="Pink";
seventeen.innerHTML="";}
else if (seventeen.innerHTML==="Pink" && dice.innerHTML==="3") {
twenty.innerHTML="Pink";
seventeen.innerHTML="";}
else if (seventeen.innerHTML==="Pink" && dice.innerHTML==="4") {
twentyone.innerHTML="Pink";
seventeen.innerHTML="";}
else if (seventeen.innerHTML==="Pink" && dice.innerHTML==="5") {
twentytwo.innerHTML="Pink";
seventeen.innerHTML="";}
else if (seventeen.innerHTML==="Pink" && dice.innerHTML==="6") {
twentythree.innerHTML="Pink";
seventeen.innerHTML="";}
else if (eighteen.innerHTML==="Pink" && dice.innerHTML==="1") {
nineteen.innerHTML="Pink";
eighteen.innerHTML="";}
else if (eighteen.innerHTML==="Pink" && dice.innerHTML==="2") {
twenty.innerHTML="Pink";
eighteen.innerHTML="";}
else if (eighteen.innerHTML==="Pink" && dice.innerHTML==="3") {
twentyone.innerHTML="Pink";
eighteen.innerHTML="";}
else if (eighteen.innerHTML==="Pink" && dice.innerHTML==="4") {
twentytwo.innerHTML="Pink";
eighteen.innerHTML="";}
else if (eighteen.innerHTML==="Pink" && dice.innerHTML==="5") {
twentythree.innerHTML="Pink";
eighteen.innerHTML="";}
else if (eighteen.innerHTML==="Pink" && dice.innerHTML==="6") {
twentyfour.innerHTML="Pink";
eighteen.innerHTML="";
free.style.background="black";
free.style.color="white";}
else if (nineteen.innerHTML==="Pink" && dice.innerHTML==="1") {
twenty.innerHTML="Pink";
nineteen.innerHTML="";}
else if (nineteen.innerHTML==="Pink" && dice.innerHTML==="2") {
twentyone.innerHTML="Pink";
nineteen.innerHTML="";}
else if (nineteen.innerHTML==="Pink" && dice.innerHTML==="3") {
twentytwo.innerHTML="Pink";
nineteen.innerHTML="";}
else if (nineteen.innerHTML==="Pink" && dice.innerHTML==="4") {
twentythree.innerHTML="Pink";
nineteen.innerHTML="";}
else if (nineteen.innerHTML==="Pink" && dice.innerHTML==="5") {
twentyfour.innerHTML="Pink";
nineteen.innerHTML="";
free.style.background="black";
free.style.color="white";}
else if (nineteen.innerHTML==="Pink" && dice.innerHTML==="6") {
twentyfive.innerHTML="Pink";
nineteen.innerHTML="";}
else if (twenty.innerHTML==="Pink" && dice.innerHTML==="1") {
twentyone.innerHTML="Pink";
twenty.innerHTML="";}
else if (twenty.innerHTML==="Pink" && dice.innerHTML==="2") {
twentytwo.innerHTML="Pink";
twenty.innerHTML="";}
else if (twenty.innerHTML==="Pink" && dice.innerHTML==="3") {
twentythree.innerHTML="Pink";
twenty.innerHTML="";}
else if (twenty.innerHTML==="Pink" && dice.innerHTML==="4") {
twentyfour.innerHTML="Pink";
twenty.innerHTML="";
free.style.background="black";
free.style.color="white";}
else if (twenty.innerHTML==="Pink" && dice.innerHTML==="5") {
twentyfive.innerHTML="Pink";
twenty.innerHTML="";}
else if (twenty.innerHTML==="Pink" && dice.innerHTML==="6") {
twentysix.innerHTML="Pink";
twenty.innerHTML="";}
else if (twentyone.innerHTML==="Pink" && dice.innerHTML==="1") {
twentytwo.innerHTML="Pink";
twentyone.innerHTML="";}
else if (twentyone.innerHTML==="Pink" && dice.innerHTML==="2") {
twentythree.innerHTML="Pink";
twentyone.innerHTML="";}
else if (twentyone.innerHTML==="Pink" && dice.innerHTML==="3") {
twentyfour.innerHTML="Pink";
twentyone.innerHTML="";
free.style.background="black";
free.style.color="white";}
else if (twentyone.innerHTML==="Pink" && dice.innerHTML==="4") {
twentyfive.innerHTML="Pink";
twentyone.innerHTML="";}
else if (twentyone.innerHTML==="Pink" && dice.innerHTML==="5") {
twentysix.innerHTML="Pink";
twentyone.innerHTML="";}
else if (twentyone.innerHTML==="Pink" && dice.innerHTML==="6") {
twentyseven.innerHTML="Pink";
twentyone.innerHTML="";}
else if (twentytwo.innerHTML==="Pink" && dice.innerHTML==="1") {
twentythree.innerHTML="Pink";
twentytwo.innerHTML="";}
else if (twentytwo.innerHTML==="Pink" && dice.innerHTML==="2") {
twentyfour.innerHTML="Pink";
twentytwo.innerHTML="";
free.style.background="black";
free.style.color="white";}
else if (twentytwo.innerHTML==="Pink" && dice.innerHTML==="3") {
twentyfive.innerHTML="Pink";
twentytwo.innerHTML="";}
else if (twentytwo.innerHTML==="Pink" && dice.innerHTML==="4") {
twentysix.innerHTML="Pink";
twentytwo.innerHTML="";}
else if (twentytwo.innerHTML==="Pink" && dice.innerHTML==="5") {
twentyseven.innerHTML="Pink";
twentytwo.innerHTML="";}
else if (twentytwo.innerHTML==="Pink" && dice.innerHTML==="6") {
twentyeight.innerHTML="Pink";
twentytwo.innerHTML="";}
else if (twentythree.innerHTML==="Pink" && dice.innerHTML==="1") {
twentyfour.innerHTML="Pink";
twentythree.innerHTML="";
free.style.background="black";
free.style.color="white";}
else if (twentythree.innerHTML==="Pink" && dice.innerHTML==="2") {
twentyfive.innerHTML="Pink";
twentythree.innerHTML="";}
else if (twentythree.innerHTML==="Pink" && dice.innerHTML==="3") {
twentysix.innerHTML="Pink";
twentythree.innerHTML="";}
else if (twentythree.innerHTML==="Pink" && dice.innerHTML==="4") {
twentyseven.innerHTML="Pink";
twentythree.innerHTML="";}
else if (twentythree.innerHTML==="Pink" && dice.innerHTML==="5") {
twentyeight.innerHTML="Pink";
twentythree.innerHTML="";}
else if (twentythree.innerHTML==="Pink" && dice.innerHTML==="6") {
twentynine.innerHTML="Pink";
twentythree.innerHTML="";}
else if  (twentyfive.innerHTML==="Pink" && dice.innerHTML==="1") {
twentysix.innerHTML="Pink";
twentyfive.innerHTML="";}
else if (twentyfive.innerHTML==="Pink" && dice.innerHTML==="2") {
twentyseven.innerHTML="Pink";
twentyfive.innerHTML="";}
else if (twentyfive.innerHTML==="Pink" && dice.innerHTML==="3") {
twentyeight.innerHTML="Pink";
twentyfive.innerHTML="";}
else if (twentyfive.innerHTML==="Pink" && dice.innerHTML==="4") {
twentynine.innerHTML="Pink";
twentyfive.innerHTML="";}
else if (twentyfive.innerHTML==="Pink" && dice.innerHTML==="5") {
thirty.innerHTML="Pink";
twentyfive.innerHTML="";}
else if (twentyfive.innerHTML==="Pink" && dice.innerHTML==="6") {
thirtyone.innerHTML="Pink";
twentyfive.innerHTML="";}
else if (twentysix.innerHTML==="Pink" && dice.innerHTML==="1") {
twentyseven.innerHTML="Pink";
twentysix.innerHTML="";}
else if (twentysix.innerHTML==="Pink" && dice.innerHTML==="2") {
twentyeight.innerHTML="Pink";
twentysix.innerHTML="";}
else if (twentysix.innerHTML==="Pink" && dice.innerHTML==="3") {
twentynine.innerHTML="Pink";
twentysix.innerHTML="";}
else if (twentysix.innerHTML==="Pink" && dice.innerHTML==="4") {
thirty.innerHTML="Pink";
twentysix.innerHTML="";}
else if (twentysix.innerHTML==="Pink" && dice.innerHTML==="5") {
thirtyone.innerHTML="Pink";
twentysix.innerHTML="";}
else if (twentysix.innerHTML==="Pink" && dice.innerHTML==="6") {
thirtytwo.innerHTML="Pink";
twentysix.innerHTML="";}
else if (twentyseven.innerHTML==="Pink" && dice.innerHTML==="1") {
twentyeight.innerHTML="Pink";
twentyseven.innerHTML="";}
else if (twentyseven.innerHTML==="Pink" && dice.innerHTML==="2") {
twentynine.innerHTML="Pink";
twentyseven.innerHTML="";}
else if (twentyseven.innerHTML==="Pink" && dice.innerHTML==="3") {
thirty.innerHTML="Pink";
twentyseven.innerHTML="";}
else if (twentyseven.innerHTML==="Pink" && dice.innerHTML==="4") {
thirtyone.innerHTML="Pink";
twentyseven.innerHTML="";}
else if (twentyseven.innerHTML==="Pink" && dice.innerHTML==="5") {
thirtytwo.innerHTML="Pink";
twentyseven.innerHTML="";}
else if (twentyseven.innerHTML==="Pink" && dice.innerHTML==="6") {
one.innerHTML="Pink";
twentyseven.innerHTML="";}
else if (twentyeight.innerHTML==="Pink" && dice.innerHTML==="1") {
twentynine.innerHTML="Pink";
twentyeight.innerHTML="";}
else if (twentyeight.innerHTML==="Pink" && dice.innerHTML==="2") {
thirty.innerHTML="Pink";
twentyeight.innerHTML="";}
else if (twentyeight.innerHTML==="Pink" && dice.innerHTML==="3") {
thirtyone.innerHTML="Pink";
twentyeight.innerHTML="";}
else if (twentyeight.innerHTML==="Pink" && dice.innerHTML==="4") {
thirtytwo.innerHTML="Pink";
twentyeight.innerHTML="";}
else if (twentyeight.innerHTML==="Pink" && dice.innerHTML==="5") {
one.innerHTML="Pink";
twentyeight.innerHTML="";}
else if (twentyeight.innerHTML==="Pink" && dice.innerHTML==="6") {
two.innerHTML="Pink";
twentyeight.innerHTML="";}
else if (twentynine.innerHTML==="Pink" && dice.innerHTML==="1") {
thirty.innerHTML="Pink";
twentynine.innerHTML="";}
else if (twentynine.innerHTML==="Pink" && dice.innerHTML==="2") {
thirtyone.innerHTML="Pink";
twentynine.innerHTML="";}
else if (twentynine.innerHTML==="Pink" && dice.innerHTML==="3") {
thirtytwo.innerHTML="Pink";
twentynine.innerHTML="";}
else if (twentynine.innerHTML==="Pink" && dice.innerHTML==="4") {
one.innerHTML="Pink";
twentynine.innerHTML="";}
else if (twentynine.innerHTML==="Pink" && dice.innerHTML==="5") {
two.innerHTML="Pink";
twentynine.innerHTML="";}
else if (twentynine.innerHTML==="Pink" && dice.innerHTML==="6") {
three.innerHTML="Pink";
twentynine.innerHTML="";}
else if (thirty.innerHTML==="Pink" && dice.innerHTML==="1") {
thirtyone.innerHTML="Pink";
thirty.innerHTML="";}
else if (thirty.innerHTML==="Pink" && dice.innerHTML==="2") {
thirtytwo.innerHTML="Pink";
thirty.innerHTML="";}
else if (thirty.innerHTML==="Pink" && dice.innerHTML==="3") {
one.innerHTML="Pink";
thirty.innerHTML="";}
else if (thirty.innerHTML==="Pink" && dice.innerHTML==="4") {
two.innerHTML="Pink";
thirty.innerHTML="";}
else if (thirty.innerHTML==="Pink" && dice.innerHTML==="5") {
three.innerHTML="Pink";
thirty.innerHTML="";}
else if (thirty.innerHTML==="Pink" && dice.innerHTML==="6") {
four.innerHTML="Pink";
thirty.innerHTML="";}
else if (thirtyone.innerHTML==="Pink" && dice.innerHTML==="1") {
thirtytwo.innerHTML="Pink";
thirtyone.innerHTML="";}
else if (thirtyone.innerHTML==="Pink" && dice.innerHTML==="2") {
one.innerHTML="Pink";
thirtyone.innerHTML="";}
else if (thirtyone.innerHTML==="Pink" && dice.innerHTML==="3") {
two.innerHTML="Pink";
thirtyone.innerHTML="";}
else if (thirtyone.innerHTML==="Pink" && dice.innerHTML==="4") {
three.innerHTML="Pink";
thirtyone.innerHTML="";}
else if (thirtyone.innerHTML==="Pink" && dice.innerHTML==="5") {
four.innerHTML="Pink";
thirtyone.innerHTML="";}
else if (thirtyone.innerHTML==="Pink" && dice.innerHTML==="6") {
five.innerHTML="Pink";
thirtyone.innerHTML="";}
else if (thirtytwo.innerHTML==="Pink" && dice.innerHTML==="1") { 
one.innerHTML="Pink";
thirtytwo.innerHTML="";}
else if (thirtytwo.innerHTML==="Pink" && dice.innerHTML==="2") { 
two.innerHTML="Pink";
thirtytwo.innerHTML="";}
else if (thirtytwo.innerHTML==="Pink" && dice.innerHTML==="3") { 
three.innerHTML="Pink";
thirtytwo.innerHTML="";}
else if (thirtytwo.innerHTML==="Pink" && dice.innerHTML==="4") { 
four.innerHTML="Pink";
thirtytwo.innerHTML="";}
else if (thirtytwo.innerHTML==="Pink" && dice.innerHTML==="5") { 
five.innerHTML="Pink";
thirtytwo.innerHTML="";}
else if (thirtytwo.innerHTML==="Pink" && dice.innerHTML==="6") { 
six.innerHTML="Pink";
thirtytwo.innerHTML="";}}

function playerThree() {
var dice=document.getElementById("node");
var one=document.getElementById("threeA");
var two=document.getElementById("threeB");
var three=document.getElementById("threeC");
var four=document.getElementById("threeD");
var five=document.getElementById("threeE");
var six=document.getElementById("threeF");
var seven=document.getElementById("threeG");
var eight=document.getElementById("threeH");
var nine=document.getElementById("threeI");
var ten=document.getElementById("threeJ");
var eleven=document.getElementById("threeK");
var twelve=document.getElementById("threeL");
var thirteen=document.getElementById("threeM");
var fourteen=document.getElementById("threeN");
var fifteen=document.getElementById("threeO");
var sixteen=document.getElementById("threeP");
var seventeen=document.getElementById("threeQ");
var eighteen=document.getElementById("threeR");
var nineteen=document.getElementById("threeS");
var twenty=document.getElementById("threeT");
var twentyone=document.getElementById("threeU");
var twentytwo=document.getElementById("threeV");
var twentythree=document.getElementById("threeW");
var twentyfour=document.getElementById("threeX");
var twentyfive=document.getElementById("threeY");
var twentysix=document.getElementById("threeZ");
var twentyseven=document.getElementById("athree");
var twentyeight=document.getElementById("bthree");
var twentynine=document.getElementById("cthree");
var thirty=document.getElementById("dthree");
var thirtyone=document.getElementById("ethree");
var thirtytwo=document.getElementById("fthree");
var free=document.getElementById("id24");
var buttonThree=document.getElementById("btn3")
var wallet=document.getElementById("wal2");
var y=document.getElementById("+b");
var z=document.getElementById("-b");
var x=document.getElementById("b111");
if (buttonThree.innerHTML==="Three") {
buttonThree.innerHTML="P3";
one.innerHTML="Three";
wallet.innerHTML="$1000";
y.innerHTML="+$10";
z.innerHTML="-$10";
x.innerHTML="P3";}
else if (one.innerHTML==="Three" && dice.innerHTML==="1") {
two.innerHTML="Three";
one.innerHTML="";}
else if (one.innerHTML==="Three" && dice.innerHTML==="2") {
three.innerHTML="Three";
one.innerHTML="";}
else if (one.innerHTML==="Three" && dice.innerHTML==="3") {
four.innerHTML="Three";
one.innerHTML="";}
else if (one.innerHTML==="Three" && dice.innerHTML==="4") {
five.innerHTML="Three";
one.innerHTML="";}
else if (one.innerHTML==="Three" && dice.innerHTML==="5") {
six.innerHTML="Three";
one.innerHTML="";}
else if (one.innerHTML==="Three" && dice.innerHTML==="6") {
seven.innerHTML="Three";
one.innerHTML="";}
else if (two.innerHTML==="Three" && dice.innerHTML==="1") {
three.innerHTML="Three";
two.innerHTML="";}
else if (two.innerHTML==="Three" && dice.innerHTML==="2") {
four.innerHTML="Three";
two.innerHTML="";}
else if (two.innerHTML==="Three" && dice.innerHTML==="3") {
five.innerHTML="Three";
two.innerHTML="";}
else if (two.innerHTML==="Three" && dice.innerHTML==="4") {
six.innerHTML="Three";
two.innerHTML="";}
else if (two.innerHTML==="Three" && dice.innerHTML==="5") {
seven.innerHTML="Three";
two.innerHTML="";}
else if (two.innerHTML==="Three" && dice.innerHTML==="6") {
eight.innerHTML="Three";
two.innerHTML="";}
else if (three.innerHTML==="Three" && dice.innerHTML==="1") {
four.innerHTML="Three";
three.innerHTML="";}
else if (three.innerHTML==="Three" && dice.innerHTML==="2") {
five.innerHTML="Three";
three.innerHTML="";}
else if (three.innerHTML==="Three" && dice.innerHTML==="3") {
six.innerHTML="Three";
three.innerHTML="";}
else if (three.innerHTML==="Three" && dice.innerHTML==="4") {
seven.innerHTML="Three";
three.innerHTML="";}
else if (three.innerHTML==="Three" && dice.innerHTML==="5") {
eight.innerHTML="Three";
three.innerHTML="";}
else if (three.innerHTML==="Three" && dice.innerHTML==="6") {
nine.innerHTML="Three";
three.innerHTML="";}
else if (four.innerHTML==="Three" && dice.innerHTML==="1") {
five.innerHTML="Three";
four.innerHTML="";}
else if (four.innerHTML==="Three" && dice.innerHTML==="2") {
six.innerHTML="Three";
four.innerHTML="";}
else if (four.innerHTML==="Three" && dice.innerHTML==="3") {
seven.innerHTML="Three";
four.innerHTML="";}
else if (four.innerHTML==="Three" && dice.innerHTML==="4") {
eight.innerHTML="Three";
four.innerHTML="";}
else if (four.innerHTML==="Three" && dice.innerHTML==="5") {
nine.innerHTML="Three";
four.innerHTML="";}
else if (four.innerHTML==="Three" && dice.innerHTML==="6") {
ten.innerHTML="Three";
four.innerHTML="";}
else if (five.innerHTML==="Three" && dice.innerHTML==="1") {
six.innerHTML="Three";
five.innerHTML="";}
else if (five.innerHTML==="Three" && dice.innerHTML==="2") {
seven.innerHTML="Three";
five.innerHTML="";}
else if (five.innerHTML==="Three" && dice.innerHTML==="3") {
eight.innerHTML="Three";
five.innerHTML="";}
else if (five.innerHTML==="Three" && dice.innerHTML==="4") {
nine.innerHTML="Three";
five.innerHTML="";}
else if (five.innerHTML==="Three" && dice.innerHTML==="5") {
ten.innerHTML="Three";
five.innerHTML="";}
else if (five.innerHTML==="Three" && dice.innerHTML==="6") {
eleven.innerHTML="Three";
five.innerHTML="";}
else if (six.innerHTML==="Three" && dice.innerHTML==="1") {
seven.innerHTML="Three";
six.innerHTML="";}
else if (six.innerHTML==="Three" && dice.innerHTML==="2") {
eight.innerHTML="Three";
six.innerHTML="";}
else if (six.innerHTML==="Three" && dice.innerHTML==="3") {
nine.innerHTML="Three";
six.innerHTML="";}
else if (six.innerHTML==="Three" && dice.innerHTML==="4") {
ten.innerHTML="Three";
six.innerHTML="";}
else if (six.innerHTML==="Three" && dice.innerHTML==="5") {
eleven.innerHTML="Three";
six.innerHTML="";}
else if (six.innerHTML==="Three" && dice.innerHTML==="6") {
twelve.innerHTML="Three";
six.innerHTML="";}
else if (seven.innerHTML==="Three" && dice.innerHTML==="1") {
eight.innerHTML="Three";
seven.innerHTML="";}
else if (seven.innerHTML==="Three" && dice.innerHTML==="2") {
nine.innerHTML="Three";
seven.innerHTML="";}
else if (seven.innerHTML==="Three" && dice.innerHTML==="3") {
ten.innerHTML="Three";
seven.innerHTML="";}
else if (seven.innerHTML==="Three" && dice.innerHTML==="4") {
eleven.innerHTML="Three";
seven.innerHTML="";}
else if (seven.innerHTML==="Three" && dice.innerHTML==="5") {
twelve.innerHTML="Three";
seven.innerHTML="";}
else if (seven.innerHTML==="Three" && dice.innerHTML==="6") {
thirteen.innerHTML="Three";
seven.innerHTML="";}
else if (eight.innerHTML==="Three" && dice.innerHTML==="1") {
nine.innerHTML="Three";
eight.innerHTML="";}
else if (eight.innerHTML==="Three" && dice.innerHTML==="2") {
ten.innerHTML="Three";
eight.innerHTML="";}
else if (eight.innerHTML==="Three" && dice.innerHTML==="3") {
eleven.innerHTML="Three";
eight.innerHTML="";}
else if (eight.innerHTML==="Three" && dice.innerHTML==="4") {
twelve.innerHTML="Three";
eight.innerHTML="";}
else if (eight.innerHTML==="Three" && dice.innerHTML==="5") {
thirteen.innerHTML="Three";
eight.innerHTML="";}
else if (eight.innerHTML==="Three" && dice.innerHTML==="6") {
fourteen.innerHTML="Three";
eight.innerHTML="";}
else if (nine.innerHTML==="Three" && dice.innerHTML==="1") {
ten.innerHTML="Three";
nine.innerHTML="";}
else if (nine.innerHTML==="Three" && dice.innerHTML==="2") {
eleven.innerHTML="Three";
nine.innerHTML="";}
else if (nine.innerHTML==="Three" && dice.innerHTML==="3") {
twelve.innerHTML="Three";
nine.innerHTML="";}
else if (nine.innerHTML==="Three" && dice.innerHTML==="4") {
thirteen.innerHTML="Three";
nine.innerHTML="";}
else if (nine.innerHTML==="Three" && dice.innerHTML==="5") {
fourteen.innerHTML="Three";
nine.innerHTML="";}
else if (nine.innerHTML==="Three" && dice.innerHTML==="6") {
fifteen.innerHTML="Three";
nine.innerHTML="";}
else if (ten.innerHTML==="Three" && dice.innerHTML==="1") {
eleven.innerHTML="Three";
ten.innerHTML="";}
else if (ten.innerHTML==="Three" && dice.innerHTML==="2") {
twelve.innerHTML="Three";
ten.innerHTML="";}
else if (ten.innerHTML==="Three" && dice.innerHTML==="3") {
thirteen.innerHTML="Three";
ten.innerHTML="";}
else if (ten.innerHTML==="Three" && dice.innerHTML==="4") {
fourteen.innerHTML="Three";
ten.innerHTML="";}
else if (ten.innerHTML==="Three" && dice.innerHTML==="5") {
fifteen.innerHTML="Three";
ten.innerHTML="";}
else if (ten.innerHTML==="Three" && dice.innerHTML==="6") {
sixteen.innerHTML="Three";
ten.innerHTML="";}
else if (eleven.innerHTML==="Three" && dice.innerHTML==="1") {
twelve.innerHTML="Three";
eleven.innerHTML="";}
else if (eleven.innerHTML==="Three" && dice.innerHTML==="2") {
thirteen.innerHTML="Three";
eleven.innerHTML="";}
else if (eleven.innerHTML==="Three" && dice.innerHTML==="3") {
fourteen.innerHTML="Three";
eleven.innerHTML="";}
else if (eleven.innerHTML==="Three" && dice.innerHTML==="4") {
fifteen.innerHTML="Three";
eleven.innerHTML="";}
else if (eleven.innerHTML==="Three" && dice.innerHTML==="5") {
sixteen.innerHTML="Three";
eleven.innerHTML="";}
else if (eleven.innerHTML==="Three" && dice.innerHTML==="6") {
seventeen.innerHTML="Three";
eleven.innerHTML="";}
else if (twelve.innerHTML==="Three" && dice.innerHTML==="1") {
thirteen.innerHTML="Three";
twelve.innerHTML="";}
else if (twelve.innerHTML==="Three" && dice.innerHTML==="2") {
fourteen.innerHTML="Three";
twelve.innerHTML="";}
else if (twelve.innerHTML==="Three" && dice.innerHTML==="3") {
fifteen.innerHTML="Three";
twelve.innerHTML="";}
else if (twelve.innerHTML==="Three" && dice.innerHTML==="4") {
sixteen.innerHTML="Three";
twelve.innerHTML="";}
else if (twelve.innerHTML==="Three" && dice.innerHTML==="5") {
seventeen.innerHTML="Three";
twelve.innerHTML="";}
else if (twelve.innerHTML==="Three" && dice.innerHTML==="6") {
eighteen.innerHTML="Three";
twelve.innerHTML="";}
else if (thirteen.innerHTML==="Three" && dice.innerHTML==="1") {
fourteen.innerHTML="Three";
thirteen.innerHTML="";}
else if (thirteen.innerHTML==="Three" && dice.innerHTML==="2") {
fifteen.innerHTML="Three";
thirteen.innerHTML="";}
else if (thirteen.innerHTML==="Three" && dice.innerHTML==="3") {
sixteen.innerHTML="Three";
thirteen.innerHTML="";}
else if (thirteen.innerHTML==="Three" && dice.innerHTML==="4") {
seventeen.innerHTML="Three";
thirteen.innerHTML="";}
else if (thirteen.innerHTML==="Three" && dice.innerHTML==="5") {
eighteen.innerHTML="Three";
thirteen.innerHTML="";}
else if (thirteen.innerHTML==="Three" && dice.innerHTML==="6") {
nineteen.innerHTML="Three";
thirteen.innerHTML="";}
else if (fourteen.innerHTML==="Three" && dice.innerHTML==="1") {
fifteen.innerHTML="Three";
fourteen.innerHTML="";}
else if (fourteen.innerHTML==="Three" && dice.innerHTML==="2") {
sixteen.innerHTML="Three";
fourteen.innerHTML="";}
else if (fourteen.innerHTML==="Three" && dice.innerHTML==="3") {
seventeen.innerHTML="Three";
fourteen.innerHTML="";}
else if (fourteen.innerHTML==="Three" && dice.innerHTML==="4") {
eighteen.innerHTML="Three";
fourteen.innerHTML="";}
else if (fourteen.innerHTML==="Three" && dice.innerHTML==="5") {
nineteen.innerHTML="Three";
fourteen.innerHTML="";}
else if (fourteen.innerHTML==="Three" && dice.innerHTML==="6") {
twenty.innerHTML="Three";
fourteen.innerHTML="";}
else if (fifteen.innerHTML==="Three" && dice.innerHTML==="1") {
sixteen.innerHTML="Three";
fifteen.innerHTML="";}
else if (fifteen.innerHTML==="Three" && dice.innerHTML==="2") {
seventeen.innerHTML="Three";
fifteen.innerHTML="";}
else if (fifteen.innerHTML==="Three" && dice.innerHTML==="3") {
eighteen.innerHTML="Three";
fifteen.innerHTML="";}
else if (fifteen.innerHTML==="Three" && dice.innerHTML==="4") {
nineteen.innerHTML="Three";
fifteen.innerHTML="";}
else if (fifteen.innerHTML==="Three" && dice.innerHTML==="5") {
twenty.innerHTML="Three";
fifteen.innerHTML="";}
else if (fifteen.innerHTML==="Three" && dice.innerHTML==="6") {
twentyone.innerHTML="Three";
fifteen.innerHTML="";}
else if (sixteen.innerHTML==="Three" && dice.innerHTML==="1") {
seventeen.innerHTML="Three";
sixteen.innerHTML="";}
else if (sixteen.innerHTML==="Three" && dice.innerHTML==="2") {
eighteen.innerHTML="Three";
sixteen.innerHTML="";}
else if (sixteen.innerHTML==="Three" && dice.innerHTML==="3") {
nineteen.innerHTML="Three";
sixteen.innerHTML="";}
else if (sixteen.innerHTML==="Three" && dice.innerHTML==="4") {
twenty.innerHTML="Three";
sixteen.innerHTML="";}
else if (sixteen.innerHTML==="Three" && dice.innerHTML==="5") {
twentyone.innerHTML="Three";
sixteen.innerHTML="";}
else if (sixteen.innerHTML==="Three" && dice.innerHTML==="6") {
twentytwo.innerHTML="Three";
sixteen.innerHTML="";}
else if (seventeen.innerHTML==="Three" && dice.innerHTML==="1") {
eighteen.innerHTML="Three";
seventeen.innerHTML="";}
else if (seventeen.innerHTML==="Three" && dice.innerHTML==="2") {
nineteen.innerHTML="Three";
seventeen.innerHTML="";}
else if (seventeen.innerHTML==="Three" && dice.innerHTML==="3") {
twenty.innerHTML="Three";
seventeen.innerHTML="";}
else if (seventeen.innerHTML==="Three" && dice.innerHTML==="4") {
twentyone.innerHTML="Three";
seventeen.innerHTML="";}
else if (seventeen.innerHTML==="Three" && dice.innerHTML==="5") {
twentytwo.innerHTML="Three";
seventeen.innerHTML="";}
else if (seventeen.innerHTML==="Three" && dice.innerHTML==="6") {
twentythree.innerHTML="Three";
seventeen.innerHTML="";}
else if (eighteen.innerHTML==="Three" && dice.innerHTML==="1") {
nineteen.innerHTML="Three";
eighteen.innerHTML="";}
else if (eighteen.innerHTML==="Three" && dice.innerHTML==="2") {
twenty.innerHTML="Three";
eighteen.innerHTML="";}
else if (eighteen.innerHTML==="Three" && dice.innerHTML==="3") {
twentyone.innerHTML="Three";
eighteen.innerHTML="";}
else if (eighteen.innerHTML==="Three" && dice.innerHTML==="4") {
twentytwo.innerHTML="Three";
eighteen.innerHTML="";}
else if (eighteen.innerHTML==="Three" && dice.innerHTML==="5") {
twentythree.innerHTML="Three";
eighteen.innerHTML="";}
else if (eighteen.innerHTML==="Three" && dice.innerHTML==="6") {
twentyfour.innerHTML="Three";
eighteen.innerHTML="";
free.style.background="black";
free.style.color="white";}
else if (nineteen.innerHTML==="Three" && dice.innerHTML==="1") {
twenty.innerHTML="Three";
nineteen.innerHTML="";}
else if (nineteen.innerHTML==="Three" && dice.innerHTML==="2") {
twentyone.innerHTML="Three";
nineteen.innerHTML="";}
else if (nineteen.innerHTML==="Three" && dice.innerHTML==="3") {
twentytwo.innerHTML="Three";
nineteen.innerHTML="";}
else if (nineteen.innerHTML==="Three" && dice.innerHTML==="4") {
twentythree.innerHTML="Three";
nineteen.innerHTML="";}
else if (nineteen.innerHTML==="Three" && dice.innerHTML==="5") {
twentyfour.innerHTML="Three";
nineteen.innerHTML="";
free.style.background="black";
free.style.color="white";}
else if (nineteen.innerHTML==="Three" && dice.innerHTML==="6") {
twentyfive.innerHTML="Three";
nineteen.innerHTML="";}
else if (twenty.innerHTML==="Three" && dice.innerHTML==="1") {
twentyone.innerHTML="Three";
twenty.innerHTML="";}
else if (twenty.innerHTML==="Three" && dice.innerHTML==="2") {
twentytwo.innerHTML="Three";
twenty.innerHTML="";}
else if (twenty.innerHTML==="Three" && dice.innerHTML==="3") {
twentythree.innerHTML="Three";
twenty.innerHTML="";}
else if (twenty.innerHTML==="Three" && dice.innerHTML==="4") {
twentyfour.innerHTML="Three";
twenty.innerHTML="";
free.style.background="black";
free.style.color="white";}
else if (twenty.innerHTML==="Three" && dice.innerHTML==="5") {
twentyfive.innerHTML="Three";
twenty.innerHTML="";}
else if (twenty.innerHTML==="Three" && dice.innerHTML==="6") {
twentysix.innerHTML="Three";
twenty.innerHTML="";}
else if (twentyone.innerHTML==="Three" && dice.innerHTML==="1") {
twentytwo.innerHTML="Three";
twentyone.innerHTML="";}
else if (twentyone.innerHTML==="Three" && dice.innerHTML==="2") {
twentythree.innerHTML="Three";
twentyone.innerHTML="";}
else if (twentyone.innerHTML==="Three" && dice.innerHTML==="3") {
twentyfour.innerHTML="Three";
twentyone.innerHTML="";
free.style.background="black";
free.style.color="white";}
else if (twentyone.innerHTML==="Three" && dice.innerHTML==="4") {
twentyfive.innerHTML="Three";
twentyone.innerHTML="";}
else if (twentyone.innerHTML==="Three" && dice.innerHTML==="5") {
twentysix.innerHTML="Three";
twentyone.innerHTML="";}
else if (twentyone.innerHTML==="Three" && dice.innerHTML==="6") {
twentyseven.innerHTML="Three";
twentyone.innerHTML="";}
else if (twentytwo.innerHTML==="Three" && dice.innerHTML==="1") {
twentythree.innerHTML="Three";
twentytwo.innerHTML="";}
else if (twentytwo.innerHTML==="Three" && dice.innerHTML==="2") {
twentyfour.innerHTML="Three";
twentytwo.innerHTML="";
free.style.background="black";
free.style.color="white";}
else if (twentytwo.innerHTML==="Three" && dice.innerHTML==="3") {
twentyfive.innerHTML="Three";
twentytwo.innerHTML="";}
else if (twentytwo.innerHTML==="Three" && dice.innerHTML==="4") {
twentysix.innerHTML="Three";
twentytwo.innerHTML="";}
else if (twentytwo.innerHTML==="Three" && dice.innerHTML==="5") {
twentyseven.innerHTML="Three";
twentytwo.innerHTML="";}
else if (twentytwo.innerHTML==="Three" && dice.innerHTML==="6") {
twentyeight.innerHTML="Three";
twentytwo.innerHTML="";}
else if (twentythree.innerHTML==="Three" && dice.innerHTML==="1") {
twentyfour.innerHTML="Three";
twentythree.innerHTML="";
free.style.background="black";
free.style.color="white";}
else if (twentythree.innerHTML==="Three" && dice.innerHTML==="2") {
twentyfive.innerHTML="Three";
twentythree.innerHTML="";}
else if (twentythree.innerHTML==="Three" && dice.innerHTML==="3") {
twentysix.innerHTML="Three";
twentythree.innerHTML="";}
else if (twentythree.innerHTML==="Three" && dice.innerHTML==="4") {
twentyseven.innerHTML="Three";
twentythree.innerHTML="";}
else if (twentythree.innerHTML==="Three" && dice.innerHTML==="5") {
twentyeight.innerHTML="Three";
twentythree.innerHTML="";}
else if (twentythree.innerHTML==="Three" && dice.innerHTML==="6") {
twentynine.innerHTML="Three";
twentythree.innerHTML="";}
else if  (twentyfive.innerHTML==="Three" && dice.innerHTML==="1") {
twentysix.innerHTML="Three";
twentyfive.innerHTML="";}
else if (twentyfive.innerHTML==="Three" && dice.innerHTML==="2") {
twentyseven.innerHTML="Three";
twentyfive.innerHTML="";}
else if (twentyfive.innerHTML==="Three" && dice.innerHTML==="3") {
twentyeight.innerHTML="Three";
twentyfive.innerHTML="";}
else if (twentyfive.innerHTML==="Three" && dice.innerHTML==="4") {
twentynine.innerHTML="Three";
twentyfive.innerHTML="";}
else if (twentyfive.innerHTML==="Three" && dice.innerHTML==="5") {
thirty.innerHTML="Three";
twentyfive.innerHTML="";}
else if (twentyfive.innerHTML==="Three" && dice.innerHTML==="6") {
thirtyone.innerHTML="Three";
twentyfive.innerHTML="";}
else if (twentysix.innerHTML==="Three" && dice.innerHTML==="1") {
twentyseven.innerHTML="Three";
twentysix.innerHTML="";}
else if (twentysix.innerHTML==="Three" && dice.innerHTML==="2") {
twentyeight.innerHTML="Three";
twentysix.innerHTML="";}
else if (twentysix.innerHTML==="Three" && dice.innerHTML==="3") {
twentynine.innerHTML="Three";
twentysix.innerHTML="";}
else if (twentysix.innerHTML==="Three" && dice.innerHTML==="4") {
thirty.innerHTML="Three";
twentysix.innerHTML="";}
else if (twentysix.innerHTML==="Three" && dice.innerHTML==="5") {
thirtyone.innerHTML="Three";
twentysix.innerHTML="";}
else if (twentysix.innerHTML==="Three" && dice.innerHTML==="6") {
thirtytwo.innerHTML="Three";
twentysix.innerHTML="";}
else if (twentyseven.innerHTML==="Three" && dice.innerHTML==="1") {
twentyeight.innerHTML="Three";
twentyseven.innerHTML="";}
else if (twentyseven.innerHTML==="Three" && dice.innerHTML==="2") {
twentynine.innerHTML="Three";
twentyseven.innerHTML="";}
else if (twentyseven.innerHTML==="Three" && dice.innerHTML==="3") {
thirty.innerHTML="Three";
twentyseven.innerHTML="";}
else if (twentyseven.innerHTML==="Three" && dice.innerHTML==="4") {
thirtyone.innerHTML="Three";
twentyseven.innerHTML="";}
else if (twentyseven.innerHTML==="Three" && dice.innerHTML==="5") {
thirtytwo.innerHTML="Three";
twentyseven.innerHTML="";}
else if (twentyseven.innerHTML==="Three" && dice.innerHTML==="6") {
one.innerHTML="Three";
twentyseven.innerHTML="";}
else if (twentyeight.innerHTML==="Three" && dice.innerHTML==="1") {
twentynine.innerHTML="Three";
twentyeight.innerHTML="";}
else if (twentyeight.innerHTML==="Three" && dice.innerHTML==="2") {
thirty.innerHTML="Three";
twentyeight.innerHTML="";}
else if (twentyeight.innerHTML==="Three" && dice.innerHTML==="3") {
thirtyone.innerHTML="Three";
twentyeight.innerHTML="";}
else if (twentyeight.innerHTML==="Three" && dice.innerHTML==="4") {
thirtytwo.innerHTML="Three";
twentyeight.innerHTML="";}
else if (twentyeight.innerHTML==="Three" && dice.innerHTML==="5") {
one.innerHTML="Three";
twentyeight.innerHTML="";}
else if (twentyeight.innerHTML==="Three" && dice.innerHTML==="6") {
two.innerHTML="Three";
twentyeight.innerHTML="";}
else if (twentynine.innerHTML==="Three" && dice.innerHTML==="1") {
thirty.innerHTML="Three";
twentynine.innerHTML="";}
else if (twentynine.innerHTML==="Three" && dice.innerHTML==="2") {
thirtyone.innerHTML="Three";
twentynine.innerHTML="";}
else if (twentynine.innerHTML==="Three" && dice.innerHTML==="3") {
thirtytwo.innerHTML="Three";
twentynine.innerHTML="";}
else if (twentynine.innerHTML==="Three" && dice.innerHTML==="4") {
one.innerHTML="Three";
twentynine.innerHTML="";}
else if (twentynine.innerHTML==="Three" && dice.innerHTML==="5") {
two.innerHTML="Three";
twentynine.innerHTML="";}
else if (twentynine.innerHTML==="Three" && dice.innerHTML==="6") {
three.innerHTML="Three";
twentynine.innerHTML="";}
else if (thirty.innerHTML==="Three" && dice.innerHTML==="1") {
thirtyone.innerHTML="Three";
thirty.innerHTML="";}
else if (thirty.innerHTML==="Three" && dice.innerHTML==="2") {
thirtytwo.innerHTML="Three";
thirty.innerHTML="";}
else if (thirty.innerHTML==="Three" && dice.innerHTML==="3") {
one.innerHTML="Three";
thirty.innerHTML="";}
else if (thirty.innerHTML==="Three" && dice.innerHTML==="4") {
two.innerHTML="Three";
thirty.innerHTML="";}
else if (thirty.innerHTML==="Three" && dice.innerHTML==="5") {
three.innerHTML="Three";
thirty.innerHTML="";}
else if (thirty.innerHTML==="Three" && dice.innerHTML==="6") {
four.innerHTML="Three";
thirty.innerHTML="";}
else if (thirtyone.innerHTML==="Three" && dice.innerHTML==="1") {
thirtytwo.innerHTML="Three";
thirtyone.innerHTML="";}
else if (thirtyone.innerHTML==="Three" && dice.innerHTML==="2") {
one.innerHTML="Three";
thirtyone.innerHTML="";}
else if (thirtyone.innerHTML==="Three" && dice.innerHTML==="3") {
two.innerHTML="Three";
thirtyone.innerHTML="";}
else if (thirtyone.innerHTML==="Three" && dice.innerHTML==="4") {
three.innerHTML="Three";
thirtyone.innerHTML="";}
else if (thirtyone.innerHTML==="Three" && dice.innerHTML==="5") {
four.innerHTML="Three";
thirtyone.innerHTML="";}
else if (thirtyone.innerHTML==="Three" && dice.innerHTML==="6") {
five.innerHTML="Three";
thirtyone.innerHTML="";}
else if (thirtytwo.innerHTML==="Three" && dice.innerHTML==="1") { 
one.innerHTML="Three";
thirtytwo.innerHTML="";}
else if (thirtytwo.innerHTML==="Three" && dice.innerHTML==="2") { 
two.innerHTML="Three";
thirtytwo.innerHTML="";}
else if (thirtytwo.innerHTML==="Three" && dice.innerHTML==="3") { 
three.innerHTML="Three";
thirtytwo.innerHTML="";}
else if (thirtytwo.innerHTML==="Three" && dice.innerHTML==="4") { 
four.innerHTML="Three";
thirtytwo.innerHTML="";}
else if (thirtytwo.innerHTML==="Three" && dice.innerHTML==="5") { 
five.innerHTML="Three";
thirtytwo.innerHTML="";}
else if (thirtytwo.innerHTML==="Three" && dice.innerHTML==="6") { 
six.innerHTML="Three";
thirtytwo.innerHTML="";}
else if (one.innerHTML==="Red" && dice.innerHTML==="1") {
two.innerHTML="Red";
one.innerHTML="";}
else if (one.innerHTML==="Red" && dice.innerHTML==="2") {
three.innerHTML="Red";
one.innerHTML="";}
else if (one.innerHTML==="Red" && dice.innerHTML==="3") {
four.innerHTML="Red";
one.innerHTML="";}
else if (one.innerHTML==="Red" && dice.innerHTML==="4") {
five.innerHTML="Red";
one.innerHTML="";}
else if (one.innerHTML==="Red" && dice.innerHTML==="5") {
six.innerHTML="Red";
one.innerHTML="";}
else if (one.innerHTML==="Red" && dice.innerHTML==="6") {
seven.innerHTML="Red";
one.innerHTML="";}
else if (two.innerHTML==="Red" && dice.innerHTML==="1") {
three.innerHTML="Red";
two.innerHTML="";}
else if (two.innerHTML==="Red" && dice.innerHTML==="2") {
four.innerHTML="Red";
two.innerHTML="";}
else if (two.innerHTML==="Red" && dice.innerHTML==="3") {
five.innerHTML="Red";
two.innerHTML="";}
else if (two.innerHTML==="Red" && dice.innerHTML==="4") {
six.innerHTML="Red";
two.innerHTML="";}
else if (two.innerHTML==="Red" && dice.innerHTML==="5") {
seven.innerHTML="Red";
two.innerHTML="";}
else if (two.innerHTML==="Red" && dice.innerHTML==="6") {
eight.innerHTML="Red";
two.innerHTML="";}
else if (three.innerHTML==="Red" && dice.innerHTML==="1") {
four.innerHTML="Red";
three.innerHTML="";}
else if (three.innerHTML==="Red" && dice.innerHTML==="2") {
five.innerHTML="Red";
three.innerHTML="";}
else if (three.innerHTML==="Red" && dice.innerHTML==="3") {
six.innerHTML="Red";
three.innerHTML="";}
else if (three.innerHTML==="Red" && dice.innerHTML==="4") {
seven.innerHTML="Red";
three.innerHTML="";}
else if (three.innerHTML==="Red" && dice.innerHTML==="5") {
eight.innerHTML="Red";
three.innerHTML="";}
else if (three.innerHTML==="Red" && dice.innerHTML==="6") {
nine.innerHTML="Red";
three.innerHTML="";}
else if (four.innerHTML==="Red" && dice.innerHTML==="1") {
five.innerHTML="Red";
four.innerHTML="";}
else if (four.innerHTML==="Red" && dice.innerHTML==="2") {
six.innerHTML="Red";
four.innerHTML="";}
else if (four.innerHTML==="Red" && dice.innerHTML==="3") {
seven.innerHTML="Red";
four.innerHTML="";}
else if (four.innerHTML==="Red" && dice.innerHTML==="4") {
eight.innerHTML="Red";
four.innerHTML="";}
else if (four.innerHTML==="Red" && dice.innerHTML==="5") {
nine.innerHTML="Red";
four.innerHTML="";}
else if (four.innerHTML==="Red" && dice.innerHTML==="6") {
ten.innerHTML="Red";
four.innerHTML="";}
else if (five.innerHTML==="Red" && dice.innerHTML==="1") {
six.innerHTML="Red";
five.innerHTML="";}
else if (five.innerHTML==="Red" && dice.innerHTML==="2") {
seven.innerHTML="Red";
five.innerHTML="";}
else if (five.innerHTML==="Red" && dice.innerHTML==="3") {
eight.innerHTML="Red";
five.innerHTML="";}
else if (five.innerHTML==="Red" && dice.innerHTML==="4") {
nine.innerHTML="Red";
five.innerHTML="";}
else if (five.innerHTML==="Red" && dice.innerHTML==="5") {
ten.innerHTML="Red";
five.innerHTML="";}
else if (five.innerHTML==="Red" && dice.innerHTML==="6") {
eleven.innerHTML="Red";
five.innerHTML="";}
else if (six.innerHTML==="Red" && dice.innerHTML==="1") {
seven.innerHTML="Red";
six.innerHTML="";}
else if (six.innerHTML==="Red" && dice.innerHTML==="2") {
eight.innerHTML="Red";
six.innerHTML="";}
else if (six.innerHTML==="Red" && dice.innerHTML==="3") {
nine.innerHTML="Red";
six.innerHTML="";}
else if (six.innerHTML==="Red" && dice.innerHTML==="4") {
ten.innerHTML="Red";
six.innerHTML="";}
else if (six.innerHTML==="Red" && dice.innerHTML==="5") {
eleven.innerHTML="Red";
six.innerHTML="";}
else if (six.innerHTML==="Red" && dice.innerHTML==="6") {
twelve.innerHTML="Red";
six.innerHTML="";}
else if (seven.innerHTML==="Red" && dice.innerHTML==="1") {
eight.innerHTML="Red";
seven.innerHTML="";}
else if (seven.innerHTML==="Red" && dice.innerHTML==="2") {
nine.innerHTML="Red";
seven.innerHTML="";}
else if (seven.innerHTML==="Red" && dice.innerHTML==="3") {
ten.innerHTML="Red";
seven.innerHTML="";}
else if (seven.innerHTML==="Red" && dice.innerHTML==="4") {
eleven.innerHTML="Red";
seven.innerHTML="";}
else if (seven.innerHTML==="Red" && dice.innerHTML==="5") {
twelve.innerHTML="Red";
seven.innerHTML="";}
else if (seven.innerHTML==="Red" && dice.innerHTML==="6") {
thirteen.innerHTML="Red";
seven.innerHTML="";}
else if (eight.innerHTML==="Red" && dice.innerHTML==="1") {
nine.innerHTML="Red";
eight.innerHTML="";}
else if (eight.innerHTML==="Red" && dice.innerHTML==="2") {
ten.innerHTML="Red";
eight.innerHTML="";}
else if (eight.innerHTML==="Red" && dice.innerHTML==="3") {
eleven.innerHTML="Red";
eight.innerHTML="";}
else if (eight.innerHTML==="Red" && dice.innerHTML==="4") {
twelve.innerHTML="Red";
eight.innerHTML="";}
else if (eight.innerHTML==="Red" && dice.innerHTML==="5") {
thirteen.innerHTML="Red";
eight.innerHTML="";}
else if (eight.innerHTML==="Red" && dice.innerHTML==="6") {
fourteen.innerHTML="Red";
eight.innerHTML="";}
else if (nine.innerHTML==="Red" && dice.innerHTML==="1") {
ten.innerHTML="Red";
nine.innerHTML="";}
else if (nine.innerHTML==="Red" && dice.innerHTML==="2") {
eleven.innerHTML="Red";
nine.innerHTML="";}
else if (nine.innerHTML==="Red" && dice.innerHTML==="3") {
twelve.innerHTML="Red";
nine.innerHTML="";}
else if (nine.innerHTML==="Red" && dice.innerHTML==="4") {
thirteen.innerHTML="Red";
nine.innerHTML="";}
else if (nine.innerHTML==="Red" && dice.innerHTML==="5") {
fourteen.innerHTML="Red";
nine.innerHTML="";}
else if (nine.innerHTML==="Red" && dice.innerHTML==="6") {
fifteen.innerHTML="Red";
nine.innerHTML="";}
else if (ten.innerHTML==="Red" && dice.innerHTML==="1") {
eleven.innerHTML="Red";
ten.innerHTML="";}
else if (ten.innerHTML==="Red" && dice.innerHTML==="2") {
twelve.innerHTML="Red";
ten.innerHTML="";}
else if (ten.innerHTML==="Red" && dice.innerHTML==="3") {
thirteen.innerHTML="Red";
ten.innerHTML="";}
else if (ten.innerHTML==="Red" && dice.innerHTML==="4") {
fourteen.innerHTML="Red";
ten.innerHTML="";}
else if (ten.innerHTML==="Red" && dice.innerHTML==="5") {
fifteen.innerHTML="Red";
ten.innerHTML="";}
else if (ten.innerHTML==="Red" && dice.innerHTML==="6") {
sixteen.innerHTML="Red";
ten.innerHTML="";}
else if (eleven.innerHTML==="Red" && dice.innerHTML==="1") {
twelve.innerHTML="Red";
eleven.innerHTML="";}
else if (eleven.innerHTML==="Red" && dice.innerHTML==="2") {
thirteen.innerHTML="Red";
eleven.innerHTML="";}
else if (eleven.innerHTML==="Red" && dice.innerHTML==="3") {
fourteen.innerHTML="Red";
eleven.innerHTML="";}
else if (eleven.innerHTML==="Red" && dice.innerHTML==="4") {
fifteen.innerHTML="Red";
eleven.innerHTML="";}
else if (eleven.innerHTML==="Red" && dice.innerHTML==="5") {
sixteen.innerHTML="Red";
eleven.innerHTML="";}
else if (eleven.innerHTML==="Red" && dice.innerHTML==="6") {
seventeen.innerHTML="Red";
eleven.innerHTML="";}
else if (twelve.innerHTML==="Red" && dice.innerHTML==="1") {
thirteen.innerHTML="Red";
twelve.innerHTML="";}
else if (twelve.innerHTML==="Red" && dice.innerHTML==="2") {
fourteen.innerHTML="Red";
twelve.innerHTML="";}
else if (twelve.innerHTML==="Red" && dice.innerHTML==="3") {
fifteen.innerHTML="Red";
twelve.innerHTML="";}
else if (twelve.innerHTML==="Red" && dice.innerHTML==="4") {
sixteen.innerHTML="Red";
twelve.innerHTML="";}
else if (twelve.innerHTML==="Red" && dice.innerHTML==="5") {
seventeen.innerHTML="Red";
twelve.innerHTML="";}
else if (twelve.innerHTML==="Red" && dice.innerHTML==="6") {
eighteen.innerHTML="Red";
twelve.innerHTML="";}
else if (thirteen.innerHTML==="Red" && dice.innerHTML==="1") {
fourteen.innerHTML="Red";
thirteen.innerHTML="";}
else if (thirteen.innerHTML==="Red" && dice.innerHTML==="2") {
fifteen.innerHTML="Red";
thirteen.innerHTML="";}
else if (thirteen.innerHTML==="Red" && dice.innerHTML==="3") {
sixteen.innerHTML="Red";
thirteen.innerHTML="";}
else if (thirteen.innerHTML==="Red" && dice.innerHTML==="4") {
seventeen.innerHTML="Red";
thirteen.innerHTML="";}
else if (thirteen.innerHTML==="Red" && dice.innerHTML==="5") {
eighteen.innerHTML="Red";
thirteen.innerHTML="";}
else if (thirteen.innerHTML==="Red" && dice.innerHTML==="6") {
nineteen.innerHTML="Red";
thirteen.innerHTML="";}
else if (fourteen.innerHTML==="Red" && dice.innerHTML==="1") {
fifteen.innerHTML="Red";
fourteen.innerHTML="";}
else if (fourteen.innerHTML==="Red" && dice.innerHTML==="2") {
sixteen.innerHTML="Red";
fourteen.innerHTML="";}
else if (fourteen.innerHTML==="Red" && dice.innerHTML==="3") {
seventeen.innerHTML="Red";
fourteen.innerHTML="";}
else if (fourteen.innerHTML==="Red" && dice.innerHTML==="4") {
eighteen.innerHTML="Red";
fourteen.innerHTML="";}
else if (fourteen.innerHTML==="Red" && dice.innerHTML==="5") {
nineteen.innerHTML="Red";
fourteen.innerHTML="";}
else if (fourteen.innerHTML==="Red" && dice.innerHTML==="6") {
twenty.innerHTML="Red";
fourteen.innerHTML="";}
else if (fifteen.innerHTML==="Red" && dice.innerHTML==="1") {
sixteen.innerHTML="Red";
fifteen.innerHTML="";}
else if (fifteen.innerHTML==="Red" && dice.innerHTML==="2") {
seventeen.innerHTML="Red";
fifteen.innerHTML="";}
else if (fifteen.innerHTML==="Red" && dice.innerHTML==="3") {
eighteen.innerHTML="Red";
fifteen.innerHTML="";}
else if (fifteen.innerHTML==="Red" && dice.innerHTML==="4") {
nineteen.innerHTML="Red";
fifteen.innerHTML="";}
else if (fifteen.innerHTML==="Red" && dice.innerHTML==="5") {
twenty.innerHTML="Red";
fifteen.innerHTML="";}
else if (fifteen.innerHTML==="Red" && dice.innerHTML==="6") {
twentyone.innerHTML="Red";
fifteen.innerHTML="";}
else if (sixteen.innerHTML==="Red" && dice.innerHTML==="1") {
seventeen.innerHTML="Red";
sixteen.innerHTML="";}
else if (sixteen.innerHTML==="Red" && dice.innerHTML==="2") {
eighteen.innerHTML="Red";
sixteen.innerHTML="";}
else if (sixteen.innerHTML==="Red" && dice.innerHTML==="3") {
nineteen.innerHTML="Red";
sixteen.innerHTML="";}
else if (sixteen.innerHTML==="Red" && dice.innerHTML==="4") {
twenty.innerHTML="Red";
sixteen.innerHTML="";}
else if (sixteen.innerHTML==="Red" && dice.innerHTML==="5") {
twentyone.innerHTML="Red";
sixteen.innerHTML="";}
else if (sixteen.innerHTML==="Red" && dice.innerHTML==="6") {
twentytwo.innerHTML="Red";
sixteen.innerHTML="";}
else if (seventeen.innerHTML==="Red" && dice.innerHTML==="1") {
eighteen.innerHTML="Red";
seventeen.innerHTML="";}
else if (seventeen.innerHTML==="Red" && dice.innerHTML==="2") {
nineteen.innerHTML="Red";
seventeen.innerHTML="";}
else if (seventeen.innerHTML==="Red" && dice.innerHTML==="3") {
twenty.innerHTML="Red";
seventeen.innerHTML="";}
else if (seventeen.innerHTML==="Red" && dice.innerHTML==="4") {
twentyone.innerHTML="Red";
seventeen.innerHTML="";}
else if (seventeen.innerHTML==="Red" && dice.innerHTML==="5") {
twentytwo.innerHTML="Red";
seventeen.innerHTML="";}
else if (seventeen.innerHTML==="Red" && dice.innerHTML==="6") {
twentythree.innerHTML="Red";
seventeen.innerHTML="";}
else if (eighteen.innerHTML==="Red" && dice.innerHTML==="1") {
nineteen.innerHTML="Red";
eighteen.innerHTML="";}
else if (eighteen.innerHTML==="Red" && dice.innerHTML==="2") {
twenty.innerHTML="Red";
eighteen.innerHTML="";}
else if (eighteen.innerHTML==="Red" && dice.innerHTML==="3") {
twentyone.innerHTML="Red";
eighteen.innerHTML="";}
else if (eighteen.innerHTML==="Red" && dice.innerHTML==="4") {
twentytwo.innerHTML="Red";
eighteen.innerHTML="";}
else if (eighteen.innerHTML==="Red" && dice.innerHTML==="5") {
twentythree.innerHTML="Red";
eighteen.innerHTML="";}
else if (eighteen.innerHTML==="Red" && dice.innerHTML==="6") {
twentyfour.innerHTML="Red";
eighteen.innerHTML="";
free.style.background="black";
free.style.color="white";}
else if (nineteen.innerHTML==="Red" && dice.innerHTML==="1") {
twenty.innerHTML="Red";
nineteen.innerHTML="";}
else if (nineteen.innerHTML==="Red" && dice.innerHTML==="2") {
twentyone.innerHTML="Red";
nineteen.innerHTML="";}
else if (nineteen.innerHTML==="Red" && dice.innerHTML==="3") {
twentytwo.innerHTML="Red";
nineteen.innerHTML="";}
else if (nineteen.innerHTML==="Red" && dice.innerHTML==="4") {
twentythree.innerHTML="Red";
nineteen.innerHTML="";}
else if (nineteen.innerHTML==="Red" && dice.innerHTML==="5") {
twentyfour.innerHTML="Red";
nineteen.innerHTML="";
free.style.background="black";
free.style.color="white";}
else if (nineteen.innerHTML==="Red" && dice.innerHTML==="6") {
twentyfive.innerHTML="Red";
nineteen.innerHTML="";}
else if (twenty.innerHTML==="Red" && dice.innerHTML==="1") {
twentyone.innerHTML="Red";
twenty.innerHTML="";}
else if (twenty.innerHTML==="Red" && dice.innerHTML==="2") {
twentytwo.innerHTML="Red";
twenty.innerHTML="";}
else if (twenty.innerHTML==="Red" && dice.innerHTML==="3") {
twentythree.innerHTML="Red";
twenty.innerHTML="";}
else if (twenty.innerHTML==="Red" && dice.innerHTML==="4") {
twentyfour.innerHTML="Red";
twenty.innerHTML="";
free.style.background="black";
free.style.color="white";}
else if (twenty.innerHTML==="Red" && dice.innerHTML==="5") {
twentyfive.innerHTML="Red";
twenty.innerHTML="";}
else if (twenty.innerHTML==="Red" && dice.innerHTML==="6") {
twentysix.innerHTML="Red";
twenty.innerHTML="";}
else if (twentyone.innerHTML==="Red" && dice.innerHTML==="1") {
twentytwo.innerHTML="Red";
twentyone.innerHTML="";}
else if (twentyone.innerHTML==="Red" && dice.innerHTML==="2") {
twentythree.innerHTML="Red";
twentyone.innerHTML="";}
else if (twentyone.innerHTML==="Red" && dice.innerHTML==="3") {
twentyfour.innerHTML="Red";
twentyone.innerHTML="";
free.style.background="black";
free.style.color="white";}
else if (twentyone.innerHTML==="Red" && dice.innerHTML==="4") {
twentyfive.innerHTML="Red";
twentyone.innerHTML="";}
else if (twentyone.innerHTML==="Red" && dice.innerHTML==="5") {
twentysix.innerHTML="Red";
twentyone.innerHTML="";}
else if (twentyone.innerHTML==="Red" && dice.innerHTML==="6") {
twentyseven.innerHTML="Red";
twentyone.innerHTML="";}
else if (twentytwo.innerHTML==="Red" && dice.innerHTML==="1") {
twentythree.innerHTML="Red";
twentytwo.innerHTML="";}
else if (twentytwo.innerHTML==="Red" && dice.innerHTML==="2") {
twentyfour.innerHTML="Red";
twentytwo.innerHTML="";
free.style.background="black";
free.style.color="white";}
else if (twentytwo.innerHTML==="Red" && dice.innerHTML==="3") {
twentyfive.innerHTML="Red";
twentytwo.innerHTML="";}
else if (twentytwo.innerHTML==="Red" && dice.innerHTML==="4") {
twentysix.innerHTML="Red";
twentytwo.innerHTML="";}
else if (twentytwo.innerHTML==="Red" && dice.innerHTML==="5") {
twentyseven.innerHTML="Red";
twentytwo.innerHTML="";}
else if (twentytwo.innerHTML==="Red" && dice.innerHTML==="6") {
twentyeight.innerHTML="Red";
twentytwo.innerHTML="";}
else if (twentythree.innerHTML==="Red" && dice.innerHTML==="1") {
twentyfour.innerHTML="Red";
twentythree.innerHTML="";
free.style.background="black";
free.style.color="white";}
else if (twentythree.innerHTML==="Red" && dice.innerHTML==="2") {
twentyfive.innerHTML="Red";
twentythree.innerHTML="";}
else if (twentythree.innerHTML==="Red" && dice.innerHTML==="3") {
twentysix.innerHTML="Red";
twentythree.innerHTML="";}
else if (twentythree.innerHTML==="Red" && dice.innerHTML==="4") {
twentyseven.innerHTML="Red";
twentythree.innerHTML="";}
else if (twentythree.innerHTML==="Red" && dice.innerHTML==="5") {
twentyeight.innerHTML="Red";
twentythree.innerHTML="";;}
else if (twentythree.innerHTML==="Red" && dice.innerHTML==="6") {
twentynine.innerHTML="Red";
twentythree.innerHTML="";}
else if  (twentyfive.innerHTML==="Red" && dice.innerHTML==="1") {
twentysix.innerHTML="Red";
twentyfive.innerHTML="";}
else if (twentyfive.innerHTML==="Red" && dice.innerHTML==="2") {
twentyseven.innerHTML="Red";
twentyfive.innerHTML="";}
else if (twentyfive.innerHTML==="Red" && dice.innerHTML==="3") {
twentyeight.innerHTML="Red";
twentyfive.innerHTML="";}
else if (twentyfive.innerHTML==="Red" && dice.innerHTML==="4") {
twentynine.innerHTML="Red";
twentyfive.innerHTML="";}
else if (twentyfive.innerHTML==="Red" && dice.innerHTML==="5") {
thirty.innerHTML="Red";
twentyfive.innerHTML="";}
else if (twentyfive.innerHTML==="Red" && dice.innerHTML==="6") {
thirtyone.innerHTML="Red";
twentyfive.innerHTML="";}
else if (twentysix.innerHTML==="Red" && dice.innerHTML==="1") {
twentyseven.innerHTML="Red";
twentysix.innerHTML="";}
else if (twentysix.innerHTML==="Red" && dice.innerHTML==="2") {
twentyeight.innerHTML="Red";
twentysix.innerHTML="";}
else if (twentysix.innerHTML==="Red" && dice.innerHTML==="3") {
twentynine.innerHTML="Red";
twentysix.innerHTML="";}
else if (twentysix.innerHTML==="Red" && dice.innerHTML==="4") {
thirty.innerHTML="Red";
twentysix.innerHTML="";}
else if (twentysix.innerHTML==="Red" && dice.innerHTML==="5") {
thirtyone.innerHTML="Red";
twentysix.innerHTML="";}
else if (twentysix.innerHTML==="Red" && dice.innerHTML==="6") {
thirtytwo.innerHTML="Red";
twentysix.innerHTML="";}
else if (twentyseven.innerHTML==="Red" && dice.innerHTML==="1") {
twentyeight.innerHTML="Red";
twentyseven.innerHTML="";}
else if (twentyseven.innerHTML==="Red" && dice.innerHTML==="2") {
twentynine.innerHTML="Red";
twentyseven.innerHTML="";}
else if (twentyseven.innerHTML==="Red" && dice.innerHTML==="3") {
thirty.innerHTML="Red";
twentyseven.innerHTML="";}
else if (twentyseven.innerHTML==="Red" && dice.innerHTML==="4") {
thirtyone.innerHTML="Red";
twentyseven.innerHTML="";}
else if (twentyseven.innerHTML==="Red" && dice.innerHTML==="5") {
thirtytwo.innerHTML="Red";
twentyseven.innerHTML="";}
else if (twentyseven.innerHTML==="Red" && dice.innerHTML==="6") {
one.innerHTML="Red";
twentyseven.innerHTML="";}
else if (twentyeight.innerHTML==="Red" && dice.innerHTML==="1") {
twentynine.innerHTML="Red";
twentyeight.innerHTML="";}
else if (twentyeight.innerHTML==="Red" && dice.innerHTML==="2") {
thirty.innerHTML="Red";
twentyeight.innerHTML="";}
else if (twentyeight.innerHTML==="Red" && dice.innerHTML==="3") {
thirtyone.innerHTML="Red";
twentyeight.innerHTML="";}
else if (twentyeight.innerHTML==="Red" && dice.innerHTML==="4") {
thirtytwo.innerHTML="Red";
twentyeight.innerHTML="";}
else if (twentyeight.innerHTML==="Red" && dice.innerHTML==="5") {
one.innerHTML="Red";
twentyeight.innerHTML="";}
else if (twentyeight.innerHTML==="Red" && dice.innerHTML==="6") {
two.innerHTML="Red";
twentyeight.innerHTML="";}
else if (twentynine.innerHTML==="Red" && dice.innerHTML==="1") {
thirty.innerHTML="Red";
twentynine.innerHTML="";}
else if (twentynine.innerHTML==="Red" && dice.innerHTML==="2") {
thirtyone.innerHTML="Red";
twentynine.innerHTML="";}
else if (twentynine.innerHTML==="Red" && dice.innerHTML==="3") {
thirtytwo.innerHTML="Red";
twentynine.innerHTML="";}
else if (twentynine.innerHTML==="Red" && dice.innerHTML==="4") {
one.innerHTML="Red";
twentynine.innerHTML="";}
else if (twentynine.innerHTML==="Red" && dice.innerHTML==="5") {
two.innerHTML="Red";
twentynine.innerHTML="";}
else if (twentynine.innerHTML==="Red" && dice.innerHTML==="6") {
three.innerHTML="Red";
twentynine.innerHTML="";}
else if (thirty.innerHTML==="Red" && dice.innerHTML==="1") {
thirtyone.innerHTML="Red";
thirty.innerHTML="";}
else if (thirty.innerHTML==="Red" && dice.innerHTML==="2") {
thirtytwo.innerHTML="Red";
thirty.innerHTML="";}
else if (thirty.innerHTML==="Red" && dice.innerHTML==="3") {
one.innerHTML="Red";
thirty.innerHTML="";}
else if (thirty.innerHTML==="Red" && dice.innerHTML==="4") {
two.innerHTML="Red";
thirty.innerHTML="";}
else if (thirty.innerHTML==="Red" && dice.innerHTML==="5") {
three.innerHTML="Red";
thirty.innerHTML="";}
else if (thirty.innerHTML==="Red" && dice.innerHTML==="6") {
four.innerHTML="Red";
thirty.innerHTML="";}
else if (thirtyone.innerHTML==="Red" && dice.innerHTML==="1") {
thirtytwo.innerHTML="Red";
thirtyone.innerHTML="";}
else if (thirtyone.innerHTML==="Red" && dice.innerHTML==="2") {
one.innerHTML="Red";
thirtyone.innerHTML="";}
else if (thirtyone.innerHTML==="Red" && dice.innerHTML==="3") {
two.innerHTML="Red";
thirtyone.innerHTML="";}
else if (thirtyone.innerHTML==="Red" && dice.innerHTML==="4") {
three.innerHTML="Red";
thirtyone.innerHTML="";}
else if (thirtyone.innerHTML==="Red" && dice.innerHTML==="5") {
four.innerHTML="Red";
thirtyone.innerHTML="";}
else if (thirtyone.innerHTML==="Red" && dice.innerHTML==="6") {
five.innerHTML="Red";
thirtyone.innerHTML="";}
else if (thirtytwo.innerHTML==="Red" && dice.innerHTML==="1") { 
one.innerHTML="Red";
thirtytwo.innerHTML="";}
else if (thirtytwo.innerHTML==="Red" && dice.innerHTML==="2") { 
two.innerHTML="Red";
thirtytwo.innerHTML="";}
else if (thirtytwo.innerHTML==="Red" && dice.innerHTML==="3") { 
three.innerHTML="Red";
thirtytwo.innerHTML="";}
else if (thirtytwo.innerHTML==="Red" && dice.innerHTML==="4") { 
four.innerHTML="Red";
thirtytwo.innerHTML="";}
else if (thirtytwo.innerHTML==="Red" && dice.innerHTML==="5") { 
five.innerHTML="Red";
thirtytwo.innerHTML="";}
else if (thirtytwo.innerHTML==="Red" && dice.innerHTML==="6") { 
six.innerHTML="Red";
thirtytwo.innerHTML="";}
else if (one.innerHTML==="Yellow" && dice.innerHTML==="1") {
two.innerHTML="Yellow";
one.innerHTML="";}
else if (one.innerHTML==="Yellow" && dice.innerHTML==="2") {
three.innerHTML="Yellow";
one.innerHTML="";}
else if (one.innerHTML==="Yellow" && dice.innerHTML==="3") {
four.innerHTML="Yellow";
one.innerHTML="";}
else if (one.innerHTML==="Yellow" && dice.innerHTML==="4") {
five.innerHTML="Yellow";
one.innerHTML="";}
else if (one.innerHTML==="Yellow" && dice.innerHTML==="5") {
six.innerHTML="Yellow";
one.innerHTML="";}
else if (one.innerHTML==="Yellow" && dice.innerHTML==="6") {
seven.innerHTML="Yellow";
one.innerHTML="";}
else if (two.innerHTML==="Yellow" && dice.innerHTML==="1") {
three.innerHTML="Yellow";
two.innerHTML="";}
else if (two.innerHTML==="Yellow" && dice.innerHTML==="2") {
four.innerHTML="Yellow";
two.innerHTML="";}
else if (two.innerHTML==="Yellow" && dice.innerHTML==="3") {
five.innerHTML="Yellow";
two.innerHTML="";}
else if (two.innerHTML==="Yellow" && dice.innerHTML==="4") {
six.innerHTML="Yellow";
two.innerHTML="";}
else if (two.innerHTML==="Yellow" && dice.innerHTML==="5") {
seven.innerHTML="Yellow";
two.innerHTML="";}
else if (two.innerHTML==="Yellow" && dice.innerHTML==="6") {
eight.innerHTML="Yellow";
two.innerHTML="";}
else if (three.innerHTML==="Yellow" && dice.innerHTML==="1") {
four.innerHTML="Yellow";
three.innerHTML="";}
else if (three.innerHTML==="Yellow" && dice.innerHTML==="2") {
five.innerHTML="Yellow";
three.innerHTML="";}
else if (three.innerHTML==="Yellow" && dice.innerHTML==="3") {
six.innerHTML="Yellow";
three.innerHTML="";}
else if (three.innerHTML==="Yellow" && dice.innerHTML==="4") {
seven.innerHTML="Yellow";
three.innerHTML="";}
else if (three.innerHTML==="Yellow" && dice.innerHTML==="5") {
eight.innerHTML="Yellow";
three.innerHTML="";}
else if (three.innerHTML==="Yellow" && dice.innerHTML==="6") {
nine.innerHTML="Yellow";
three.innerHTML="";}
else if (four.innerHTML==="Yellow" && dice.innerHTML==="1") {
five.innerHTML="Yellow";
four.innerHTML="";}
else if (four.innerHTML==="Yellow" && dice.innerHTML==="2") {
six.innerHTML="Yellow";
four.innerHTML="";}
else if (four.innerHTML==="Yellow" && dice.innerHTML==="3") {
seven.innerHTML="Yellow";
four.innerHTML="";}
else if (four.innerHTML==="Yellow" && dice.innerHTML==="4") {
eight.innerHTML="Yellow";
four.innerHTML="";}
else if (four.innerHTML==="Yellow" && dice.innerHTML==="5") {
nine.innerHTML="Yellow";
four.innerHTML="";}
else if (four.innerHTML==="Yellow" && dice.innerHTML==="6") {
ten.innerHTML="Yellow";
four.innerHTML="";}
else if (five.innerHTML==="Yellow" && dice.innerHTML==="1") {
six.innerHTML="Yellow";
five.innerHTML="";}
else if (five.innerHTML==="Yellow" && dice.innerHTML==="2") {
seven.innerHTML="Yellow";
five.innerHTML="";}
else if (five.innerHTML==="Yellow" && dice.innerHTML==="3") {
eight.innerHTML="Yellow";
five.innerHTML="";}
else if (five.innerHTML==="Yellow" && dice.innerHTML==="4") {
nine.innerHTML="Yellow";
five.innerHTML="";}
else if (five.innerHTML==="Yellow" && dice.innerHTML==="5") {
ten.innerHTML="Yellow";
five.innerHTML="";}
else if (five.innerHTML==="Yellow" && dice.innerHTML==="6") {
eleven.innerHTML="Yellow";
five.innerHTML="";}
else if (six.innerHTML==="Yellow" && dice.innerHTML==="1") {
seven.innerHTML="Yellow";
six.innerHTML="";}
else if (six.innerHTML==="Yellow" && dice.innerHTML==="2") {
eight.innerHTML="Yellow";
six.innerHTML="";}
else if (six.innerHTML==="Yellow" && dice.innerHTML==="3") {
nine.innerHTML="Yellow";
six.innerHTML="";}
else if (six.innerHTML==="Yellow" && dice.innerHTML==="4") {
ten.innerHTML="Yellow";
six.innerHTML="";}
else if (six.innerHTML==="Yellow" && dice.innerHTML==="5") {
eleven.innerHTML="Yellow";
six.innerHTML="";}
else if (six.innerHTML==="Yellow" && dice.innerHTML==="6") {
twelve.innerHTML="Yellow";
six.innerHTML="";}
else if (seven.innerHTML==="Yellow" && dice.innerHTML==="1") {
eight.innerHTML="Yellow";
seven.innerHTML="";}
else if (seven.innerHTML==="Yellow" && dice.innerHTML==="2") {
nine.innerHTML="Yellow";
seven.innerHTML="";}
else if (seven.innerHTML==="Yellow" && dice.innerHTML==="3") {
ten.innerHTML="Yellow";
seven.innerHTML="";}
else if (seven.innerHTML==="Yellow" && dice.innerHTML==="4") {
eleven.innerHTML="Yellow";
seven.innerHTML="";}
else if (seven.innerHTML==="Yellow" && dice.innerHTML==="5") {
twelve.innerHTML="Yellow";
seven.innerHTML="";}
else if (seven.innerHTML==="Yellow" && dice.innerHTML==="6") {
thirteen.innerHTML="Yellow";
seven.innerHTML="";}
else if (eight.innerHTML==="Yellow" && dice.innerHTML==="1") {
nine.innerHTML="Yellow";
eight.innerHTML="";}
else if (eight.innerHTML==="Yellow" && dice.innerHTML==="2") {
ten.innerHTML="Yellow";
eight.innerHTML="";}
else if (eight.innerHTML==="Yellow" && dice.innerHTML==="3") {
eleven.innerHTML="Yellow";
eight.innerHTML="";}
else if (eight.innerHTML==="Yellow" && dice.innerHTML==="4") {
twelve.innerHTML="Yellow";
eight.innerHTML="";}
else if (eight.innerHTML==="Yellow" && dice.innerHTML==="5") {
thirteen.innerHTML="Yellow";
eight.innerHTML="";}
else if (eight.innerHTML==="Yellow" && dice.innerHTML==="6") {
fourteen.innerHTML="Yellow";
eight.innerHTML="";}
else if (nine.innerHTML==="Yellow" && dice.innerHTML==="1") {
ten.innerHTML="Yellow";
nine.innerHTML="";}
else if (nine.innerHTML==="Yellow" && dice.innerHTML==="2") {
eleven.innerHTML="Yellow";
nine.innerHTML="";}
else if (nine.innerHTML==="Yellow" && dice.innerHTML==="3") {
twelve.innerHTML="Yellow";
nine.innerHTML="";}
else if (nine.innerHTML==="Yellow" && dice.innerHTML==="4") {
thirteen.innerHTML="Yellow";
nine.innerHTML="";}
else if (nine.innerHTML==="Yellow" && dice.innerHTML==="5") {
fourteen.innerHTML="Yellow";
nine.innerHTML="";}
else if (nine.innerHTML==="Yellow" && dice.innerHTML==="6") {
fifteen.innerHTML="Yellow";
nine.innerHTML="";}
else if (ten.innerHTML==="Yellow" && dice.innerHTML==="1") {
eleven.innerHTML="Yellow";
ten.innerHTML="";}
else if (ten.innerHTML==="Yellow" && dice.innerHTML==="2") {
twelve.innerHTML="Yellow";
ten.innerHTML="";}
else if (ten.innerHTML==="Yellow" && dice.innerHTML==="3") {
thirteen.innerHTML="Yellow";
ten.innerHTML="";}
else if (ten.innerHTML==="Yellow" && dice.innerHTML==="4") {
fourteen.innerHTML="Yellow";
ten.innerHTML="";}
else if (ten.innerHTML==="Yellow" && dice.innerHTML==="5") {
fifteen.innerHTML="Yellow";
ten.innerHTML="";}
else if (ten.innerHTML==="Yellow" && dice.innerHTML==="6") {
sixteen.innerHTML="Yellow";
ten.innerHTML="";}
else if (eleven.innerHTML==="Yellow" && dice.innerHTML==="1") {
twelve.innerHTML="Yellow";
eleven.innerHTML="";}
else if (eleven.innerHTML==="Yellow" && dice.innerHTML==="2") {
thirteen.innerHTML="Yellow";
eleven.innerHTML="";}
else if (eleven.innerHTML==="Yellow" && dice.innerHTML==="3") {
fourteen.innerHTML="Yellow";
eleven.innerHTML="";}
else if (eleven.innerHTML==="Yellow" && dice.innerHTML==="4") {
fifteen.innerHTML="Yellow";
eleven.innerHTML="";}
else if (eleven.innerHTML==="Yellow" && dice.innerHTML==="5") {
sixteen.innerHTML="Yellow";
eleven.innerHTML="";}
else if (eleven.innerHTML==="Yellow" && dice.innerHTML==="6") {
seventeen.innerHTML="Yellow";
eleven.innerHTML="";}
else if (twelve.innerHTML==="Yellow" && dice.innerHTML==="1") {
thirteen.innerHTML="Yellow";
twelve.innerHTML="";}
else if (twelve.innerHTML==="Yellow" && dice.innerHTML==="2") {
fourteen.innerHTML="Yellow";
twelve.innerHTML="";}
else if (twelve.innerHTML==="Yellow" && dice.innerHTML==="3") {
fifteen.innerHTML="Yellow";
twelve.innerHTML="";}
else if (twelve.innerHTML==="Yellow" && dice.innerHTML==="4") {
sixteen.innerHTML="Yellow";
twelve.innerHTML="";}
else if (twelve.innerHTML==="Yellow" && dice.innerHTML==="5") {
seventeen.innerHTML="Yellow";
twelve.innerHTML="";}
else if (twelve.innerHTML==="Yellow" && dice.innerHTML==="6") {
eighteen.innerHTML="Yellow";
twelve.innerHTML="";}
else if (thirteen.innerHTML==="Yellow" && dice.innerHTML==="1") {
fourteen.innerHTML="Yellow";
thirteen.innerHTML="";}
else if (thirteen.innerHTML==="Yellow" && dice.innerHTML==="2") {
fifteen.innerHTML="Yellow";
thirteen.innerHTML="";}
else if (thirteen.innerHTML==="Yellow" && dice.innerHTML==="3") {
sixteen.innerHTML="Yellow";
thirteen.innerHTML="";}
else if (thirteen.innerHTML==="Yellow" && dice.innerHTML==="4") {
seventeen.innerHTML="Yellow";
thirteen.innerHTML="";}
else if (thirteen.innerHTML==="Yellow" && dice.innerHTML==="5") {
eighteen.innerHTML="Yellow";
thirteen.innerHTML="";}
else if (thirteen.innerHTML==="Yellow" && dice.innerHTML==="6") {
nineteen.innerHTML="Yellow";
thirteen.innerHTML="";}
else if (fourteen.innerHTML==="Yellow" && dice.innerHTML==="1") {
fifteen.innerHTML="Yellow";
fourteen.innerHTML="";}
else if (fourteen.innerHTML==="Yellow" && dice.innerHTML==="2") {
sixteen.innerHTML="Yellow";
fourteen.innerHTML="";}
else if (fourteen.innerHTML==="Yellow" && dice.innerHTML==="3") {
seventeen.innerHTML="Yellow";
fourteen.innerHTML="";}
else if (fourteen.innerHTML==="Yellow" && dice.innerHTML==="4") {
eighteen.innerHTML="Yellow";
fourteen.innerHTML="";}
else if (fourteen.innerHTML==="Yellow" && dice.innerHTML==="5") {
nineteen.innerHTML="Yellow";
fourteen.innerHTML="";}
else if (fourteen.innerHTML==="Yellow" && dice.innerHTML==="6") {
twenty.innerHTML="Yellow";
fourteen.innerHTML="";}
else if (fifteen.innerHTML==="Yellow" && dice.innerHTML==="1") {
sixteen.innerHTML="Yellow";
fifteen.innerHTML="";}
else if (fifteen.innerHTML==="Yellow" && dice.innerHTML==="2") {
seventeen.innerHTML="Yellow";
fifteen.innerHTML="";}
else if (fifteen.innerHTML==="Yellow" && dice.innerHTML==="3") {
eighteen.innerHTML="Yellow";
fifteen.innerHTML="";}
else if (fifteen.innerHTML==="Yellow" && dice.innerHTML==="4") {
nineteen.innerHTML="Yellow";
fifteen.innerHTML="";}
else if (fifteen.innerHTML==="Yellow" && dice.innerHTML==="5") {
twenty.innerHTML="Yellow";
fifteen.innerHTML="";}
else if (fifteen.innerHTML==="Yellow" && dice.innerHTML==="6") {
twentyone.innerHTML="Yellow";
fifteen.innerHTML="";}
else if (sixteen.innerHTML==="Yellow" && dice.innerHTML==="1") {
seventeen.innerHTML="Yellow";
sixteen.innerHTML="";}
else if (sixteen.innerHTML==="Yellow" && dice.innerHTML==="2") {
eighteen.innerHTML="Yellow";
sixteen.innerHTML="";}
else if (sixteen.innerHTML==="Yellow" && dice.innerHTML==="3") {
nineteen.innerHTML="Yellow";
sixteen.innerHTML="";}
else if (sixteen.innerHTML==="Yellow" && dice.innerHTML==="4") {
twenty.innerHTML="Yellow";
sixteen.innerHTML="";}
else if (sixteen.innerHTML==="Yellow" && dice.innerHTML==="5") {
twentyone.innerHTML="Yellow";
sixteen.innerHTML="";}
else if (sixteen.innerHTML==="Yellow" && dice.innerHTML==="6") {
twentytwo.innerHTML="Yellow";
sixteen.innerHTML="";}
else if (seventeen.innerHTML==="Yellow" && dice.innerHTML==="1") {
eighteen.innerHTML="Yellow";
seventeen.innerHTML="";}
else if (seventeen.innerHTML==="Yellow" && dice.innerHTML==="2") {
nineteen.innerHTML="Yellow";
seventeen.innerHTML="";}
else if (seventeen.innerHTML==="Yellow" && dice.innerHTML==="3") {
twenty.innerHTML="Yellow";
seventeen.innerHTML="";}
else if (seventeen.innerHTML==="Yellow" && dice.innerHTML==="4") {
twentyone.innerHTML="Yellow";
seventeen.innerHTML="";}
else if (seventeen.innerHTML==="Yellow" && dice.innerHTML==="5") {
twentytwo.innerHTML="Yellow";
seventeen.innerHTML="";}
else if (seventeen.innerHTML==="Yellow" && dice.innerHTML==="6") {
twentythree.innerHTML="Yellow";
seventeen.innerHTML="";}
else if (eighteen.innerHTML==="Yellow" && dice.innerHTML==="1") {
nineteen.innerHTML="Yellow";
eighteen.innerHTML="";}
else if (eighteen.innerHTML==="Yellow" && dice.innerHTML==="2") {
twenty.innerHTML="Yellow";
eighteen.innerHTML="";}
else if (eighteen.innerHTML==="Yellow" && dice.innerHTML==="3") {
twentyone.innerHTML="Yellow";
eighteen.innerHTML="";}
else if (eighteen.innerHTML==="Yellow" && dice.innerHTML==="4") {
twentytwo.innerHTML="Yellow";
eighteen.innerHTML="";}
else if (eighteen.innerHTML==="Yellow" && dice.innerHTML==="5") {
twentythree.innerHTML="Yellow";
eighteen.innerHTML="";}
else if (eighteen.innerHTML==="Yellow" && dice.innerHTML==="6") {
twentyfour.innerHTML="Yellow";
eighteen.innerHTML="";
free.style.background="black";
free.style.color="white";}
else if (nineteen.innerHTML==="Yellow" && dice.innerHTML==="1") {
twenty.innerHTML="Yellow";
nineteen.innerHTML="";}
else if (nineteen.innerHTML==="Yellow" && dice.innerHTML==="2") {
twentyone.innerHTML="Yellow";
nineteen.innerHTML="";}
else if (nineteen.innerHTML==="Yellow" && dice.innerHTML==="3") {
twentytwo.innerHTML="Yellow";
nineteen.innerHTML="";}
else if (nineteen.innerHTML==="Yellow" && dice.innerHTML==="4") {
twentythree.innerHTML="Yellow";
nineteen.innerHTML="";}
else if (nineteen.innerHTML==="Yellow" && dice.innerHTML==="5") {
twentyfour.innerHTML="Yellow";
nineteen.innerHTML="";
free.style.background="black";
free.style.color="white";}
else if (nineteen.innerHTML==="Yellow" && dice.innerHTML==="6") {
twentyfive.innerHTML="Yellow";
nineteen.innerHTML="";}
else if (twenty.innerHTML==="Yellow" && dice.innerHTML==="1") {
twentyone.innerHTML="Yellow";
twenty.innerHTML="";}
else if (twenty.innerHTML==="Yellow" && dice.innerHTML==="2") {
twentytwo.innerHTML="Yellow";
twenty.innerHTML="";}
else if (twenty.innerHTML==="Yellow" && dice.innerHTML==="3") {
twentythree.innerHTML="Yellow";
twenty.innerHTML="";}
else if (twenty.innerHTML==="Yellow" && dice.innerHTML==="4") {
twentyfour.innerHTML="Yellow";
twenty.innerHTML="";
free.style.background="black";
free.style.color="white";}
else if (twenty.innerHTML==="Yellow" && dice.innerHTML==="5") {
twentyfive.innerHTML="Yellow";
twenty.innerHTML="";}
else if (twenty.innerHTML==="Yellow" && dice.innerHTML==="6") {
twentysix.innerHTML="Yellow";
twenty.innerHTML="";}
else if (twentyone.innerHTML==="Yellow" && dice.innerHTML==="1") {
twentytwo.innerHTML="Yellow";
twentyone.innerHTML="";}
else if (twentyone.innerHTML==="Yellow" && dice.innerHTML==="2") {
twentythree.innerHTML="Yellow";
twentyone.innerHTML="";}
else if (twentyone.innerHTML==="Yellow" && dice.innerHTML==="3") {
twentyfour.innerHTML="Yellow";
twentyone.innerHTML="";
free.style.background="black";
free.style.color="white";}
else if (twentyone.innerHTML==="Yellow" && dice.innerHTML==="4") {
twentyfive.innerHTML="Yellow";
twentyone.innerHTML="";}
else if (twentyone.innerHTML==="Yellow" && dice.innerHTML==="5") {
twentysix.innerHTML="Yellow";
twentyone.innerHTML="";}
else if (twentyone.innerHTML==="Yellow" && dice.innerHTML==="6") {
twentyseven.innerHTML="Yellow";
twentyone.innerHTML="";}
else if (twentytwo.innerHTML==="Yellow" && dice.innerHTML==="1") {
twentythree.innerHTML="Yellow";
twentytwo.innerHTML="";}
else if (twentytwo.innerHTML==="Yellow" && dice.innerHTML==="2") {
twentyfour.innerHTML="Yellow";
twentytwo.innerHTML="";
free.style.background="black";
free.style.color="white";}
else if (twentytwo.innerHTML==="Yellow" && dice.innerHTML==="3") {
twentyfive.innerHTML="Yellow";
twentytwo.innerHTML="";}
else if (twentytwo.innerHTML==="Yellow" && dice.innerHTML==="4") {
twentysix.innerHTML="Yellow";
twentytwo.innerHTML="";}
else if (twentytwo.innerHTML==="Yellow" && dice.innerHTML==="5") {
twentyseven.innerHTML="Yellow";
twentytwo.innerHTML="";}
else if (twentytwo.innerHTML==="Yellow" && dice.innerHTML==="6") {
twentyeight.innerHTML="Yellow";
twentytwo.innerHTML="";}
else if (twentythree.innerHTML==="Yellow" && dice.innerHTML==="1") {
twentyfour.innerHTML="Yellow";
twentythree.innerHTML="";
free.style.background="black";
free.style.color="white";}
else if (twentythree.innerHTML==="Yellow" && dice.innerHTML==="2") {
twentyfive.innerHTML="Yellow";
twentythree.innerHTML="";}
else if (twentythree.innerHTML==="Yellow" && dice.innerHTML==="3") {
twentysix.innerHTML="Yellow";
twentythree.innerHTML="";}
else if (twentythree.innerHTML==="Yellow" && dice.innerHTML==="4") {
twentyseven.innerHTML="Yellow";
twentythree.innerHTML="";}
else if (twentythree.innerHTML==="Yellow" && dice.innerHTML==="5") {
twentyeight.innerHTML="Yellow";
twentythree.innerHTML="";}
else if (twentythree.innerHTML==="Yellow" && dice.innerHTML==="6") {
twentynine.innerHTML="Yellow";
twentythree.innerHTML="";}
else if  (twentyfive.innerHTML==="Yellow" && dice.innerHTML==="1") {
twentysix.innerHTML="Yellow";
twentyfive.innerHTML="";}
else if (twentyfive.innerHTML==="Yellow" && dice.innerHTML==="2") {
twentyseven.innerHTML="Yellow";
twentyfive.innerHTML="";}
else if (twentyfive.innerHTML==="Yellow" && dice.innerHTML==="3") {
twentyeight.innerHTML="Yellow";
twentyfive.innerHTML="";}
else if (twentyfive.innerHTML==="Yellow" && dice.innerHTML==="4") {
twentynine.innerHTML="Yellow";
twentyfive.innerHTML="";}
else if (twentyfive.innerHTML==="Yellow" && dice.innerHTML==="5") {
thirty.innerHTML="Yellow";
twentyfive.innerHTML="";}
else if (twentyfive.innerHTML==="Yellow" && dice.innerHTML==="6") {
thirtyone.innerHTML="Yellow";
twentyfive.innerHTML="";}
else if (twentysix.innerHTML==="Yellow" && dice.innerHTML==="1") {
twentyseven.innerHTML="Yellow";
twentysix.innerHTML="";}
else if (twentysix.innerHTML==="Yellow" && dice.innerHTML==="2") {
twentyeight.innerHTML="Yellow";
twentysix.innerHTML="";}
else if (twentysix.innerHTML==="Yellow" && dice.innerHTML==="3") {
twentynine.innerHTML="Yellow";
twentysix.innerHTML="";}
else if (twentysix.innerHTML==="Yellow" && dice.innerHTML==="4") {
thirty.innerHTML="Yellow";
twentysix.innerHTML="";}
else if (twentysix.innerHTML==="Yellow" && dice.innerHTML==="5") {
thirtyone.innerHTML="Yellow";
twentysix.innerHTML="";}
else if (twentysix.innerHTML==="Yellow" && dice.innerHTML==="6") {
thirtytwo.innerHTML="Yellow";
twentysix.innerHTML="";}
else if (twentyseven.innerHTML==="Yellow" && dice.innerHTML==="1") {
twentyeight.innerHTML="Yellow";
twentyseven.innerHTML="";}
else if (twentyseven.innerHTML==="Yellow" && dice.innerHTML==="2") {
twentynine.innerHTML="Yellow";
twentyseven.innerHTML="";}
else if (twentyseven.innerHTML==="Yellow" && dice.innerHTML==="3") {
thirty.innerHTML="Yellow";
twentyseven.innerHTML="";}
else if (twentyseven.innerHTML==="Yellow" && dice.innerHTML==="4") {
thirtyone.innerHTML="Yellow";
twentyseven.innerHTML="";}
else if (twentyseven.innerHTML==="Yellow" && dice.innerHTML==="5") {
thirtytwo.innerHTML="Yellow";
twentyseven.innerHTML="";}
else if (twentyseven.innerHTML==="Yellow" && dice.innerHTML==="6") {
one.innerHTML="Yellow";
twentyseven.innerHTML="";}
else if (twentyeight.innerHTML==="Yellow" && dice.innerHTML==="1") {
twentynine.innerHTML="Yellow";
twentyeight.innerHTML="";}
else if (twentyeight.innerHTML==="Yellow" && dice.innerHTML==="2") {
thirty.innerHTML="Yellow";
twentyeight.innerHTML="";}
else if (twentyeight.innerHTML==="Yellow" && dice.innerHTML==="3") {
thirtyone.innerHTML="Yellow";
twentyeight.innerHTML="";}
else if (twentyeight.innerHTML==="Yellow" && dice.innerHTML==="4") {
thirtytwo.innerHTML="Yellow";
twentyeight.innerHTML="";}
else if (twentyeight.innerHTML==="Yellow" && dice.innerHTML==="5") {
one.innerHTML="Yellow";
twentyeight.innerHTML="";}
else if (twentyeight.innerHTML==="Yellow" && dice.innerHTML==="6") {
two.innerHTML="Yellow";
twentyeight.innerHTML="";}
else if (twentynine.innerHTML==="Yellow" && dice.innerHTML==="1") {
thirty.innerHTML="Yellow";
twentynine.innerHTML="";}
else if (twentynine.innerHTML==="Yellow" && dice.innerHTML==="2") {
thirtyone.innerHTML="Yellow";
twentynine.innerHTML="";}
else if (twentynine.innerHTML==="Yellow" && dice.innerHTML==="3") {
thirtytwo.innerHTML="Yellow";
twentynine.innerHTML="";}
else if (twentynine.innerHTML==="Yellow" && dice.innerHTML==="4") {
one.innerHTML="Yellow";
twentynine.innerHTML="";}
else if (twentynine.innerHTML==="Yellow" && dice.innerHTML==="5") {
two.innerHTML="Yellow";
twentynine.innerHTML="";}
else if (twentynine.innerHTML==="Yellow" && dice.innerHTML==="6") {
three.innerHTML="Yellow";
twentynine.innerHTML="";}
else if (thirty.innerHTML==="Yellow" && dice.innerHTML==="1") {
thirtyone.innerHTML="Yellow";
thirty.innerHTML="";}
else if (thirty.innerHTML==="Yellow" && dice.innerHTML==="2") {
thirtytwo.innerHTML="Yellow";
thirty.innerHTML="";}
else if (thirty.innerHTML==="Yellow" && dice.innerHTML==="3") {
one.innerHTML="Yellow";
thirty.innerHTML="";}
else if (thirty.innerHTML==="Yellow" && dice.innerHTML==="4") {
two.innerHTML="Yellow";
thirty.innerHTML="";}
else if (thirty.innerHTML==="Yellow" && dice.innerHTML==="5") {
three.innerHTML="Yellow";
thirty.innerHTML="";}
else if (thirty.innerHTML==="Yellow" && dice.innerHTML==="6") {
four.innerHTML="Yellow";
thirty.innerHTML="";}
else if (thirtyone.innerHTML==="Yellow" && dice.innerHTML==="1") {
thirtytwo.innerHTML="Yellow";
thirtyone.innerHTML="";}
else if (thirtyone.innerHTML==="Yellow" && dice.innerHTML==="2") {
one.innerHTML="Yellow";
thirtyone.innerHTML="";}
else if (thirtyone.innerHTML==="Yellow" && dice.innerHTML==="3") {
two.innerHTML="Yellow";
thirtyone.innerHTML="";}
else if (thirtyone.innerHTML==="Yellow" && dice.innerHTML==="4") {
three.innerHTML="Yellow";
thirtyone.innerHTML="";}
else if (thirtyone.innerHTML==="Yellow" && dice.innerHTML==="5") {
four.innerHTML="Yellow";
thirtyone.innerHTML="";}
else if (thirtyone.innerHTML==="Yellow" && dice.innerHTML==="6") {
five.innerHTML="Yellow";
thirtyone.innerHTML="";}
else if (thirtytwo.innerHTML==="Yellow" && dice.innerHTML==="1") { 
one.innerHTML="Yellow";
thirtytwo.innerHTML="";}
else if (thirtytwo.innerHTML==="Yellow" && dice.innerHTML==="2") { 
two.innerHTML="Yellow";
thirtytwo.innerHTML="";}
else if (thirtytwo.innerHTML==="Yellow" && dice.innerHTML==="3") { 
three.innerHTML="Yellow";
thirtytwo.innerHTML="";}
else if (thirtytwo.innerHTML==="Yellow" && dice.innerHTML==="4") { 
four.innerHTML="Yellow";
thirtytwo.innerHTML="";}
else if (thirtytwo.innerHTML==="Yellow" && dice.innerHTML==="5") { 
five.innerHTML="Yellow";
thirtytwo.innerHTML="";}
else if (thirtytwo.innerHTML==="Yellow" && dice.innerHTML==="6") { 
six.innerHTML="Yellow";
thirtytwo.innerHTML="";}
else if (one.innerHTML==="Pink" && dice.innerHTML==="1") {
two.innerHTML="Pink";
one.innerHTML="";}
else if (one.innerHTML==="Pink" && dice.innerHTML==="2") {
three.innerHTML="Pink";
one.innerHTML="";}
else if (one.innerHTML==="Pink" && dice.innerHTML==="3") {
four.innerHTML="Pink";
one.innerHTML="";}
else if (one.innerHTML==="Pink" && dice.innerHTML==="4") {
five.innerHTML="Pink";
one.innerHTML="";}
else if (one.innerHTML==="Pink" && dice.innerHTML==="5") {
six.innerHTML="Pink";
one.innerHTML="";}
else if (one.innerHTML==="Pink" && dice.innerHTML==="6") {
seven.innerHTML="Pink";
one.innerHTML="";}
else if (two.innerHTML==="Pink" && dice.innerHTML==="1") {
three.innerHTML="Pink";
two.innerHTML="";}
else if (two.innerHTML==="Pink" && dice.innerHTML==="2") {
four.innerHTML="Pink";
two.innerHTML="";}
else if (two.innerHTML==="Pink" && dice.innerHTML==="3") {
five.innerHTML="Pink";
two.innerHTML="";}
else if (two.innerHTML==="Pink" && dice.innerHTML==="4") {
six.innerHTML="Pink";
two.innerHTML="";}
else if (two.innerHTML==="Pink" && dice.innerHTML==="5") {
seven.innerHTML="Pink";
two.innerHTML="";}
else if (two.innerHTML==="Pink" && dice.innerHTML==="6") {
eight.innerHTML="Pink";
two.innerHTML="";}
else if (three.innerHTML==="Pink" && dice.innerHTML==="1") {
four.innerHTML="Pink";
three.innerHTML="";}
else if (three.innerHTML==="Pink" && dice.innerHTML==="2") {
five.innerHTML="Pink";
three.innerHTML="";}
else if (three.innerHTML==="Pink" && dice.innerHTML==="3") {
six.innerHTML="Pink";
three.innerHTML="";}
else if (three.innerHTML==="Pink" && dice.innerHTML==="4") {
seven.innerHTML="Pink";
three.innerHTML="";}
else if (three.innerHTML==="Pink" && dice.innerHTML==="5") {
eight.innerHTML="Pink";
three.innerHTML="";}
else if (three.innerHTML==="Pink" && dice.innerHTML==="6") {
nine.innerHTML="Pink";
three.innerHTML="";}
else if (four.innerHTML==="Pink" && dice.innerHTML==="1") {
five.innerHTML="Pink";
four.innerHTML="";}
else if (four.innerHTML==="Pink" && dice.innerHTML==="2") {
six.innerHTML="Pink";
four.innerHTML="";}
else if (four.innerHTML==="Pink" && dice.innerHTML==="3") {
seven.innerHTML="Pink";
four.innerHTML="";}
else if (four.innerHTML==="Pink" && dice.innerHTML==="4") {
eight.innerHTML="Pink";
four.innerHTML="";}
else if (four.innerHTML==="Pink" && dice.innerHTML==="5") {
nine.innerHTML="Pink";
four.innerHTML="";}
else if (four.innerHTML==="Pink" && dice.innerHTML==="6") {
ten.innerHTML="Pink";
four.innerHTML="";}
else if (five.innerHTML==="Pink" && dice.innerHTML==="1") {
six.innerHTML="Pink";
five.innerHTML="";}
else if (five.innerHTML==="Pink" && dice.innerHTML==="2") {
seven.innerHTML="Pink";
five.innerHTML="";}
else if (five.innerHTML==="Pink" && dice.innerHTML==="3") {
eight.innerHTML="Pink";
five.innerHTML="";}
else if (five.innerHTML==="Pink" && dice.innerHTML==="4") {
nine.innerHTML="Pink";
five.innerHTML="";}
else if (five.innerHTML==="Pink" && dice.innerHTML==="5") {
ten.innerHTML="Pink";
five.innerHTML="";}
else if (five.innerHTML==="Pink" && dice.innerHTML==="6") {
eleven.innerHTML="Pink";
five.innerHTML="";}
else if (six.innerHTML==="Pink" && dice.innerHTML==="1") {
seven.innerHTML="Pink";
six.innerHTML="";}
else if (six.innerHTML==="Pink" && dice.innerHTML==="2") {
eight.innerHTML="Pink";
six.innerHTML="";}
else if (six.innerHTML==="Pink" && dice.innerHTML==="3") {
nine.innerHTML="Pink";
six.innerHTML="";}
else if (six.innerHTML==="Pink" && dice.innerHTML==="4") {
ten.innerHTML="Pink";
six.innerHTML="";}
else if (six.innerHTML==="Pink" && dice.innerHTML==="5") {
eleven.innerHTML="Pink";
six.innerHTML="";}
else if (six.innerHTML==="Pink" && dice.innerHTML==="6") {
twelve.innerHTML="Pink";
six.innerHTML="";}
else if (seven.innerHTML==="Pink" && dice.innerHTML==="1") {
eight.innerHTML="Pink";
seven.innerHTML="";}
else if (seven.innerHTML==="Pink" && dice.innerHTML==="2") {
nine.innerHTML="Pink";
seven.innerHTML="";}
else if (seven.innerHTML==="Pink" && dice.innerHTML==="3") {
ten.innerHTML="Pink";
seven.innerHTML="";}
else if (seven.innerHTML==="Pink" && dice.innerHTML==="4") {
eleven.innerHTML="Pink";
seven.innerHTML="";}
else if (seven.innerHTML==="Pink" && dice.innerHTML==="5") {
twelve.innerHTML="Pink";
seven.innerHTML="";}
else if (seven.innerHTML==="Pink" && dice.innerHTML==="6") {
thirteen.innerHTML="Pink";
seven.innerHTML="";}
else if (eight.innerHTML==="Pink" && dice.innerHTML==="1") {
nine.innerHTML="Pink";
eight.innerHTML="";}
else if (eight.innerHTML==="Pink" && dice.innerHTML==="2") {
ten.innerHTML="Pink";
eight.innerHTML="";}
else if (eight.innerHTML==="Pink" && dice.innerHTML==="3") {
eleven.innerHTML="Pink";
eight.innerHTML="";}
else if (eight.innerHTML==="Pink" && dice.innerHTML==="4") {
twelve.innerHTML="Pink";
eight.innerHTML="";}
else if (eight.innerHTML==="Pink" && dice.innerHTML==="5") {
thirteen.innerHTML="Pink";
eight.innerHTML="";}
else if (eight.innerHTML==="Pink" && dice.innerHTML==="6") {
fourteen.innerHTML="Pink";
eight.innerHTML="";}
else if (nine.innerHTML==="Pink" && dice.innerHTML==="1") {
ten.innerHTML="Pink";
nine.innerHTML="";}
else if (nine.innerHTML==="Pink" && dice.innerHTML==="2") {
eleven.innerHTML="Pink";
nine.innerHTML="";}
else if (nine.innerHTML==="Pink" && dice.innerHTML==="3") {
twelve.innerHTML="Pink";
nine.innerHTML="";}
else if (nine.innerHTML==="Pink" && dice.innerHTML==="4") {
thirteen.innerHTML="Pink";
nine.innerHTML="";}
else if (nine.innerHTML==="Pink" && dice.innerHTML==="5") {
fourteen.innerHTML="Pink";
nine.innerHTML="";}
else if (nine.innerHTML==="Pink" && dice.innerHTML==="6") {
fifteen.innerHTML="Pink";
nine.innerHTML="";}
else if (ten.innerHTML==="Pink" && dice.innerHTML==="1") {
eleven.innerHTML="Pink";
ten.innerHTML="";}
else if (ten.innerHTML==="Pink" && dice.innerHTML==="2") {
twelve.innerHTML="Pink";
ten.innerHTML="";}
else if (ten.innerHTML==="Pink" && dice.innerHTML==="3") {
thirteen.innerHTML="Pink";
ten.innerHTML="";}
else if (ten.innerHTML==="Pink" && dice.innerHTML==="4") {
fourteen.innerHTML="Pink";
ten.innerHTML="";}
else if (ten.innerHTML==="Pink" && dice.innerHTML==="5") {
fifteen.innerHTML="Pink";
ten.innerHTML="";}
else if (ten.innerHTML==="Pink" && dice.innerHTML==="6") {
sixteen.innerHTML="Pink";
ten.innerHTML="";}
else if (eleven.innerHTML==="Pink" && dice.innerHTML==="1") {
twelve.innerHTML="Pink";
eleven.innerHTML="";}
else if (eleven.innerHTML==="Pink" && dice.innerHTML==="2") {
thirteen.innerHTML="Pink";
eleven.innerHTML="";}
else if (eleven.innerHTML==="Pink" && dice.innerHTML==="3") {
fourteen.innerHTML="Pink";
eleven.innerHTML="";}
else if (eleven.innerHTML==="Pink" && dice.innerHTML==="4") {
fifteen.innerHTML="Pink";
eleven.innerHTML="";}
else if (eleven.innerHTML==="Pink" && dice.innerHTML==="5") {
sixteen.innerHTML="Pink";
eleven.innerHTML="";}
else if (eleven.innerHTML==="Pink" && dice.innerHTML==="6") {
seventeen.innerHTML="Pink";
eleven.innerHTML="";}
else if (twelve.innerHTML==="Pink" && dice.innerHTML==="1") {
thirteen.innerHTML="Pink";
twelve.innerHTML="";}
else if (twelve.innerHTML==="Pink" && dice.innerHTML==="2") {
fourteen.innerHTML="Pink";
twelve.innerHTML="";}
else if (twelve.innerHTML==="Pink" && dice.innerHTML==="3") {
fifteen.innerHTML="Pink";
twelve.innerHTML="";}
else if (twelve.innerHTML==="Pink" && dice.innerHTML==="4") {
sixteen.innerHTML="Pink";
twelve.innerHTML="";}
else if (twelve.innerHTML==="Pink" && dice.innerHTML==="5") {
seventeen.innerHTML="Pink";
twelve.innerHTML="";}
else if (twelve.innerHTML==="Pink" && dice.innerHTML==="6") {
eighteen.innerHTML="Pink";
twelve.innerHTML="";}
else if (thirteen.innerHTML==="Pink" && dice.innerHTML==="1") {
fourteen.innerHTML="Pink";
thirteen.innerHTML="";}
else if (thirteen.innerHTML==="Pink" && dice.innerHTML==="2") {
fifteen.innerHTML="Pink";
thirteen.innerHTML="";}
else if (thirteen.innerHTML==="Pink" && dice.innerHTML==="3") {
sixteen.innerHTML="Pink";
thirteen.innerHTML="";}
else if (thirteen.innerHTML==="Pink" && dice.innerHTML==="4") {
seventeen.innerHTML="Pink";
thirteen.innerHTML="";}
else if (thirteen.innerHTML==="Pink" && dice.innerHTML==="5") {
eighteen.innerHTML="Pink";
thirteen.innerHTML="";}
else if (thirteen.innerHTML==="Pink" && dice.innerHTML==="6") {
nineteen.innerHTML="Pink";
thirteen.innerHTML="";}
else if (fourteen.innerHTML==="Pink" && dice.innerHTML==="1") {
fifteen.innerHTML="Pink";
fourteen.innerHTML="";}
else if (fourteen.innerHTML==="Pink" && dice.innerHTML==="2") {
sixteen.innerHTML="Pink";
fourteen.innerHTML="";}
else if (fourteen.innerHTML==="Pink" && dice.innerHTML==="3") {
seventeen.innerHTML="Pink";
fourteen.innerHTML="";}
else if (fourteen.innerHTML==="Pink" && dice.innerHTML==="4") {
eighteen.innerHTML="Pink";
fourteen.innerHTML="";}
else if (fourteen.innerHTML==="Pink" && dice.innerHTML==="5") {
nineteen.innerHTML="Pink";
fourteen.innerHTML="";}
else if (fourteen.innerHTML==="Pink" && dice.innerHTML==="6") {
twenty.innerHTML="Pink";
fourteen.innerHTML="";}
else if (fifteen.innerHTML==="Pink" && dice.innerHTML==="1") {
sixteen.innerHTML="Pink";
fifteen.innerHTML="";}
else if (fifteen.innerHTML==="Pink" && dice.innerHTML==="2") {
seventeen.innerHTML="Pink";
fifteen.innerHTML="";}
else if (fifteen.innerHTML==="Pink" && dice.innerHTML==="3") {
eighteen.innerHTML="Pink";
fifteen.innerHTML="";}
else if (fifteen.innerHTML==="Pink" && dice.innerHTML==="4") {
nineteen.innerHTML="Pink";
fifteen.innerHTML="";}
else if (fifteen.innerHTML==="Pink" && dice.innerHTML==="5") {
twenty.innerHTML="Pink";
fifteen.innerHTML="";}
else if (fifteen.innerHTML==="Pink" && dice.innerHTML==="6") {
twentyone.innerHTML="Pink";
fifteen.innerHTML="";}
else if (sixteen.innerHTML==="Pink" && dice.innerHTML==="1") {
seventeen.innerHTML="Pink";
sixteen.innerHTML="";}
else if (sixteen.innerHTML==="Pink" && dice.innerHTML==="2") {
eighteen.innerHTML="Pink";
sixteen.innerHTML="";}
else if (sixteen.innerHTML==="Pink" && dice.innerHTML==="3") {
nineteen.innerHTML="Pink";
sixteen.innerHTML="";}
else if (sixteen.innerHTML==="Pink" && dice.innerHTML==="4") {
twenty.innerHTML="Pink";
sixteen.innerHTML="";}
else if (sixteen.innerHTML==="Pink" && dice.innerHTML==="5") {
twentyone.innerHTML="Pink";
sixteen.innerHTML="";}
else if (sixteen.innerHTML==="Pink" && dice.innerHTML==="6") {
twentytwo.innerHTML="Pink";
sixteen.innerHTML="";}
else if (seventeen.innerHTML==="Pink" && dice.innerHTML==="1") {
eighteen.innerHTML="Pink";
seventeen.innerHTML="";}
else if (seventeen.innerHTML==="Pink" && dice.innerHTML==="2") {
nineteen.innerHTML="Pink";
seventeen.innerHTML="";}
else if (seventeen.innerHTML==="Pink" && dice.innerHTML==="3") {
twenty.innerHTML="Pink";
seventeen.innerHTML="";}
else if (seventeen.innerHTML==="Pink" && dice.innerHTML==="4") {
twentyone.innerHTML="Pink";
seventeen.innerHTML="";}
else if (seventeen.innerHTML==="Pink" && dice.innerHTML==="5") {
twentytwo.innerHTML="Pink";
seventeen.innerHTML="";}
else if (seventeen.innerHTML==="Pink" && dice.innerHTML==="6") {
twentythree.innerHTML="Pink";
seventeen.innerHTML="";}
else if (eighteen.innerHTML==="Pink" && dice.innerHTML==="1") {
nineteen.innerHTML="Pink";
eighteen.innerHTML="";}
else if (eighteen.innerHTML==="Pink" && dice.innerHTML==="2") {
twenty.innerHTML="Pink";
eighteen.innerHTML="";}
else if (eighteen.innerHTML==="Pink" && dice.innerHTML==="3") {
twentyone.innerHTML="Pink";
eighteen.innerHTML="";}
else if (eighteen.innerHTML==="Pink" && dice.innerHTML==="4") {
twentytwo.innerHTML="Pink";
eighteen.innerHTML="";}
else if (eighteen.innerHTML==="Pink" && dice.innerHTML==="5") {
twentythree.innerHTML="Pink";
eighteen.innerHTML="";}
else if (eighteen.innerHTML==="Pink" && dice.innerHTML==="6") {
twentyfour.innerHTML="Pink";
eighteen.innerHTML="";
free.style.background="black";
free.style.color="white";}
else if (nineteen.innerHTML==="Pink" && dice.innerHTML==="1") {
twenty.innerHTML="Pink";
nineteen.innerHTML="";}
else if (nineteen.innerHTML==="Pink" && dice.innerHTML==="2") {
twentyone.innerHTML="Pink";
nineteen.innerHTML="";}
else if (nineteen.innerHTML==="Pink" && dice.innerHTML==="3") {
twentytwo.innerHTML="Pink";
nineteen.innerHTML="";}
else if (nineteen.innerHTML==="Pink" && dice.innerHTML==="4") {
twentythree.innerHTML="Pink";
nineteen.innerHTML="";}
else if (nineteen.innerHTML==="Pink" && dice.innerHTML==="5") {
twentyfour.innerHTML="Pink";
nineteen.innerHTML="";
free.style.background="black";
free.style.color="white";}
else if (nineteen.innerHTML==="Pink" && dice.innerHTML==="6") {
twentyfive.innerHTML="Pink";
nineteen.innerHTML="";}
else if (twenty.innerHTML==="Pink" && dice.innerHTML==="1") {
twentyone.innerHTML="Pink";
twenty.innerHTML="";}
else if (twenty.innerHTML==="Pink" && dice.innerHTML==="2") {
twentytwo.innerHTML="Pink";
twenty.innerHTML="";}
else if (twenty.innerHTML==="Pink" && dice.innerHTML==="3") {
twentythree.innerHTML="Pink";
twenty.innerHTML="";}
else if (twenty.innerHTML==="Pink" && dice.innerHTML==="4") {
twentyfour.innerHTML="Pink";
twenty.innerHTML="";
free.style.background="black";
free.style.color="white";}
else if (twenty.innerHTML==="Pink" && dice.innerHTML==="5") {
twentyfive.innerHTML="Pink";
twenty.innerHTML="";}
else if (twenty.innerHTML==="Pink" && dice.innerHTML==="6") {
twentysix.innerHTML="Pink";
twenty.innerHTML="";}
else if (twentyone.innerHTML==="Pink" && dice.innerHTML==="1") {
twentytwo.innerHTML="Pink";
twentyone.innerHTML="";}
else if (twentyone.innerHTML==="Pink" && dice.innerHTML==="2") {
twentythree.innerHTML="Pink";
twentyone.innerHTML="";}
else if (twentyone.innerHTML==="Pink" && dice.innerHTML==="3") {
twentyfour.innerHTML="Pink";
twentyone.innerHTML="";
free.style.background="black";
free.style.color="white";}
else if (twentyone.innerHTML==="Pink" && dice.innerHTML==="4") {
twentyfive.innerHTML="Pink";
twentyone.innerHTML="";}
else if (twentyone.innerHTML==="Pink" && dice.innerHTML==="5") {
twentysix.innerHTML="Pink";
twentyone.innerHTML="";}
else if (twentyone.innerHTML==="Pink" && dice.innerHTML==="6") {
twentyseven.innerHTML="Pink";
twentyone.innerHTML="";}
else if (twentytwo.innerHTML==="Pink" && dice.innerHTML==="1") {
twentythree.innerHTML="Pink";
twentytwo.innerHTML="";}
else if (twentytwo.innerHTML==="Pink" && dice.innerHTML==="2") {
twentyfour.innerHTML="Pink";
twentytwo.innerHTML="";
free.style.background="black";
free.style.color="white";}
else if (twentytwo.innerHTML==="Pink" && dice.innerHTML==="3") {
twentyfive.innerHTML="Pink";
twentytwo.innerHTML="";}
else if (twentytwo.innerHTML==="Pink" && dice.innerHTML==="4") {
twentysix.innerHTML="Pink";
twentytwo.innerHTML="";}
else if (twentytwo.innerHTML==="Pink" && dice.innerHTML==="5") {
twentyseven.innerHTML="Pink";
twentytwo.innerHTML="";}
else if (twentytwo.innerHTML==="Pink" && dice.innerHTML==="6") {
twentyeight.innerHTML="Pink";
twentytwo.innerHTML="";}
else if (twentythree.innerHTML==="Pink" && dice.innerHTML==="1") {
twentyfour.innerHTML="Pink";
twentythree.innerHTML="";
free.style.background="black";
free.style.color="white";}
else if (twentythree.innerHTML==="Pink" && dice.innerHTML==="2") {
twentyfive.innerHTML="Pink";
twentythree.innerHTML="";}
else if (twentythree.innerHTML==="Pink" && dice.innerHTML==="3") {
twentysix.innerHTML="Pink";
twentythree.innerHTML="";}
else if (twentythree.innerHTML==="Pink" && dice.innerHTML==="4") {
twentyseven.innerHTML="Pink";
twentythree.innerHTML="";}
else if (twentythree.innerHTML==="Pink" && dice.innerHTML==="5") {
twentyeight.innerHTML="Pink";
twentythree.innerHTML="";}
else if (twentythree.innerHTML==="Pink" && dice.innerHTML==="6") {
twentynine.innerHTML="Pink";
twentythree.innerHTML="";}
else if  (twentyfive.innerHTML==="Pink" && dice.innerHTML==="1") {
twentysix.innerHTML="Pink";
twentyfive.innerHTML="";}
else if (twentyfive.innerHTML==="Pink" && dice.innerHTML==="2") {
twentyseven.innerHTML="Pink";
twentyfive.innerHTML="";}
else if (twentyfive.innerHTML==="Pink" && dice.innerHTML==="3") {
twentyeight.innerHTML="Pink";
twentyfive.innerHTML="";}
else if (twentyfive.innerHTML==="Pink" && dice.innerHTML==="4") {
twentynine.innerHTML="Pink";
twentyfive.innerHTML="";}
else if (twentyfive.innerHTML==="Pink" && dice.innerHTML==="5") {
thirty.innerHTML="Pink";
twentyfive.innerHTML="";}
else if (twentyfive.innerHTML==="Pink" && dice.innerHTML==="6") {
thirtyone.innerHTML="Pink";
twentyfive.innerHTML="";}
else if (twentysix.innerHTML==="Pink" && dice.innerHTML==="1") {
twentyseven.innerHTML="Pink";
twentysix.innerHTML="";}
else if (twentysix.innerHTML==="Pink" && dice.innerHTML==="2") {
twentyeight.innerHTML="Pink";
twentysix.innerHTML="";}
else if (twentysix.innerHTML==="Pink" && dice.innerHTML==="3") {
twentynine.innerHTML="Pink";
twentysix.innerHTML="";}
else if (twentysix.innerHTML==="Pink" && dice.innerHTML==="4") {
thirty.innerHTML="Pink";
twentysix.innerHTML="";}
else if (twentysix.innerHTML==="Pink" && dice.innerHTML==="5") {
thirtyone.innerHTML="Pink";
twentysix.innerHTML="";}
else if (twentysix.innerHTML==="Pink" && dice.innerHTML==="6") {
thirtytwo.innerHTML="Pink";
twentysix.innerHTML="";}
else if (twentyseven.innerHTML==="Pink" && dice.innerHTML==="1") {
twentyeight.innerHTML="Pink";
twentyseven.innerHTML="";}
else if (twentyseven.innerHTML==="Pink" && dice.innerHTML==="2") {
twentynine.innerHTML="Pink";
twentyseven.innerHTML="";}
else if (twentyseven.innerHTML==="Pink" && dice.innerHTML==="3") {
thirty.innerHTML="Pink";
twentyseven.innerHTML="";}
else if (twentyseven.innerHTML==="Pink" && dice.innerHTML==="4") {
thirtyone.innerHTML="Pink";
twentyseven.innerHTML="";}
else if (twentyseven.innerHTML==="Pink" && dice.innerHTML==="5") {
thirtytwo.innerHTML="Pink";
twentyseven.innerHTML="";}
else if (twentyseven.innerHTML==="Pink" && dice.innerHTML==="6") {
one.innerHTML="Pink";
twentyseven.innerHTML="";}
else if (twentyeight.innerHTML==="Pink" && dice.innerHTML==="1") {
twentynine.innerHTML="Pink";
twentyeight.innerHTML="";}
else if (twentyeight.innerHTML==="Pink" && dice.innerHTML==="2") {
thirty.innerHTML="Pink";
twentyeight.innerHTML="";}
else if (twentyeight.innerHTML==="Pink" && dice.innerHTML==="3") {
thirtyone.innerHTML="Pink";
twentyeight.innerHTML="";}
else if (twentyeight.innerHTML==="Pink" && dice.innerHTML==="4") {
thirtytwo.innerHTML="Pink";
twentyeight.innerHTML="";}
else if (twentyeight.innerHTML==="Pink" && dice.innerHTML==="5") {
one.innerHTML="Pink";
twentyeight.innerHTML="";}
else if (twentyeight.innerHTML==="Pink" && dice.innerHTML==="6") {
two.innerHTML="Pink";
twentyeight.innerHTML="";}
else if (twentynine.innerHTML==="Pink" && dice.innerHTML==="1") {
thirty.innerHTML="Pink";
twentynine.innerHTML="";}
else if (twentynine.innerHTML==="Pink" && dice.innerHTML==="2") {
thirtyone.innerHTML="Pink";
twentynine.innerHTML="";}
else if (twentynine.innerHTML==="Pink" && dice.innerHTML==="3") {
thirtytwo.innerHTML="Pink";
twentynine.innerHTML="";}
else if (twentynine.innerHTML==="Pink" && dice.innerHTML==="4") {
one.innerHTML="Pink";
twentynine.innerHTML="";}
else if (twentynine.innerHTML==="Pink" && dice.innerHTML==="5") {
two.innerHTML="Pink";
twentynine.innerHTML="";}
else if (twentynine.innerHTML==="Pink" && dice.innerHTML==="6") {
three.innerHTML="Pink";
twentynine.innerHTML="";}
else if (thirty.innerHTML==="Pink" && dice.innerHTML==="1") {
thirtyone.innerHTML="Pink";
thirty.innerHTML="";}
else if (thirty.innerHTML==="Pink" && dice.innerHTML==="2") {
thirtytwo.innerHTML="Pink";
thirty.innerHTML="";}
else if (thirty.innerHTML==="Pink" && dice.innerHTML==="3") {
one.innerHTML="Pink";
thirty.innerHTML="";}
else if (thirty.innerHTML==="Pink" && dice.innerHTML==="4") {
two.innerHTML="Pink";
thirty.innerHTML="";}
else if (thirty.innerHTML==="Pink" && dice.innerHTML==="5") {
three.innerHTML="Pink";
thirty.innerHTML="";}
else if (thirty.innerHTML==="Pink" && dice.innerHTML==="6") {
four.innerHTML="Pink";
thirty.innerHTML="";}
else if (thirtyone.innerHTML==="Pink" && dice.innerHTML==="1") {
thirtytwo.innerHTML="Pink";
thirtyone.innerHTML="";}
else if (thirtyone.innerHTML==="Pink" && dice.innerHTML==="2") {
one.innerHTML="Pink";
thirtyone.innerHTML="";}
else if (thirtyone.innerHTML==="Pink" && dice.innerHTML==="3") {
two.innerHTML="Pink";
thirtyone.innerHTML="";}
else if (thirtyone.innerHTML==="Pink" && dice.innerHTML==="4") {
three.innerHTML="Pink";
thirtyone.innerHTML="";}
else if (thirtyone.innerHTML==="Pink" && dice.innerHTML==="5") {
four.innerHTML="Pink";
thirtyone.innerHTML="";}
else if (thirtyone.innerHTML==="Pink" && dice.innerHTML==="6") {
five.innerHTML="Pink";
thirtyone.innerHTML="";}
else if (thirtytwo.innerHTML==="Pink" && dice.innerHTML==="1") { 
one.innerHTML="Pink";
thirtytwo.innerHTML="";}
else if (thirtytwo.innerHTML==="Pink" && dice.innerHTML==="2") { 
two.innerHTML="Pink";
thirtytwo.innerHTML="";}
else if (thirtytwo.innerHTML==="Pink" && dice.innerHTML==="3") { 
three.innerHTML="Pink";
thirtytwo.innerHTML="";}
else if (thirtytwo.innerHTML==="Pink" && dice.innerHTML==="4") { 
four.innerHTML="Pink";
thirtytwo.innerHTML="";}
else if (thirtytwo.innerHTML==="Pink" && dice.innerHTML==="5") { 
five.innerHTML="Pink";
thirtytwo.innerHTML="";}
else if (thirtytwo.innerHTML==="Pink" && dice.innerHTML==="6") { 
six.innerHTML="Pink";
thirtytwo.innerHTML="";}}
 
function resetDice() {
document.getElementById("node").innerHTML="";}

function selectTileOne() {
document.getElementById("node").innerHTML="1";}
function selectTileTwo() {
document.getElementById("node").innerHTML="2";}
function selectTileThree() {
document.getElementById("node").innerHTML="3";}
function selectTileFour() {
document.getElementById("node").innerHTML="4";}
function selectTileFive() {
document.getElementById("node").innerHTML="5";}
function selectTileSix() {
document.getElementById("node").innerHTML="6";}

document.getElementById("a1").addEventListener("click", selectTileOne);
document.getElementById("b1").addEventListener("click", selectTileTwo);
document.getElementById("c1").addEventListener("click", selectTileThree);
document.getElementById("d1").addEventListener("click", selectTileFour);
document.getElementById("e1").addEventListener("click", selectTileFive);
document.getElementById("f1").addEventListener("click", selectTileSix);
document.getElementById("a24").addEventListener("click", selectTileOne);
document.getElementById("b24").addEventListener("click", selectTileTwo);
document.getElementById("c24").addEventListener("click", selectTileThree);
document.getElementById("d24").addEventListener("click", selectTileFour);
document.getElementById("e24").addEventListener("click", selectTileFive);
document.getElementById("f24").addEventListener("click", selectTileSix);
document.getElementById("a2").addEventListener("click", selectTileOne);
document.getElementById("b2").addEventListener("click", selectTileTwo);
document.getElementById("c2").addEventListener("click", selectTileThree);
document.getElementById("d2").addEventListener("click", selectTileFour);
document.getElementById("e2").addEventListener("click", selectTileFive);
document.getElementById("f2").addEventListener("click", selectTileSix);
document.getElementById("a3").addEventListener("click", selectTileOne);
document.getElementById("b3").addEventListener("click", selectTileTwo);
document.getElementById("c3").addEventListener("click", selectTileThree);
document.getElementById("d3").addEventListener("click", selectTileFour);
document.getElementById("e3").addEventListener("click", selectTileFive);
document.getElementById("f3").addEventListener("click", selectTileSix);
document.getElementById("a4").addEventListener("click", selectTileOne);
document.getElementById("b4").addEventListener("click", selectTileTwo);
document.getElementById("c4").addEventListener("click", selectTileThree);
document.getElementById("d4").addEventListener("click", selectTileFour);
document.getElementById("e4").addEventListener("click", selectTileFive);
document.getElementById("f4").addEventListener("click", selectTileSix);
document.getElementById("a5").addEventListener("click", selectTileOne);
document.getElementById("b5").addEventListener("click", selectTileTwo);
document.getElementById("c5").addEventListener("click", selectTileThree);
document.getElementById("d5").addEventListener("click", selectTileFour);
document.getElementById("e5").addEventListener("click", selectTileFive);
document.getElementById("f5").addEventListener("click", selectTileSix);
document.getElementById("a6").addEventListener("click", selectTileOne);
document.getElementById("b6").addEventListener("click", selectTileTwo);
document.getElementById("c6").addEventListener("click", selectTileThree);
document.getElementById("d6").addEventListener("click", selectTileFour);
document.getElementById("e6").addEventListener("click", selectTileFive);
document.getElementById("f6").addEventListener("click", selectTileSix);
document.getElementById("a7").addEventListener("click", selectTileOne);
document.getElementById("b7").addEventListener("click", selectTileTwo);
document.getElementById("c7").addEventListener("click", selectTileThree);
document.getElementById("d7").addEventListener("click", selectTileFour);
document.getElementById("e7").addEventListener("click", selectTileFive);
document.getElementById("f7").addEventListener("click", selectTileSix);
document.getElementById("a8").addEventListener("click", selectTileOne);
document.getElementById("b8").addEventListener("click", selectTileTwo);
document.getElementById("c8").addEventListener("click", selectTileThree);
document.getElementById("d8").addEventListener("click", selectTileFour);
document.getElementById("e8").addEventListener("click", selectTileFive);
document.getElementById("f8").addEventListener("click", selectTileSix);
document.getElementById("a9").addEventListener("click", selectTileOne);
document.getElementById("b9").addEventListener("click", selectTileTwo);
document.getElementById("c9").addEventListener("click", selectTileThree);
document.getElementById("d9").addEventListener("click", selectTileFour);
document.getElementById("e9").addEventListener("click", selectTileFive);
document.getElementById("f9").addEventListener("click", selectTileSix);
document.getElementById("a10").addEventListener("click", selectTileOne);
document.getElementById("b10").addEventListener("click", selectTileTwo);
document.getElementById("c10").addEventListener("click", selectTileThree);
document.getElementById("d10").addEventListener("click", selectTileFour);
document.getElementById("e10").addEventListener("click", selectTileFive);
document.getElementById("f10").addEventListener("click", selectTileSix);
document.getElementById("a11").addEventListener("click", selectTileOne);
document.getElementById("b11").addEventListener("click", selectTileTwo);
document.getElementById("c11").addEventListener("click", selectTileThree);
document.getElementById("d11").addEventListener("click", selectTileFour);
document.getElementById("e11").addEventListener("click", selectTileFive);
document.getElementById("f11").addEventListener("click", selectTileSix);
document.getElementById("a12").addEventListener("click", selectTileOne);
document.getElementById("b12").addEventListener("click", selectTileTwo);
document.getElementById("c12").addEventListener("click", selectTileThree);
document.getElementById("d12").addEventListener("click", selectTileFour);
document.getElementById("e12").addEventListener("click", selectTileFive);
document.getElementById("f12").addEventListener("click", selectTileSix);
document.getElementById("a13").addEventListener("click", selectTileOne);
document.getElementById("b13").addEventListener("click", selectTileTwo);
document.getElementById("c13").addEventListener("click", selectTileThree);
document.getElementById("d13").addEventListener("click", selectTileFour);
document.getElementById("e13").addEventListener("click", selectTileFive);
document.getElementById("f13").addEventListener("click", selectTileSix);
document.getElementById("a14").addEventListener("click", selectTileOne);
document.getElementById("b14").addEventListener("click", selectTileTwo);
document.getElementById("c14").addEventListener("click", selectTileThree);
document.getElementById("d14").addEventListener("click", selectTileFour);
document.getElementById("e14").addEventListener("click", selectTileFive);
document.getElementById("f14").addEventListener("click", selectTileSix);
document.getElementById("a15").addEventListener("click", selectTileOne);
document.getElementById("b15").addEventListener("click", selectTileTwo);
document.getElementById("c15").addEventListener("click", selectTileThree);
document.getElementById("d15").addEventListener("click", selectTileFour);
document.getElementById("e15").addEventListener("click", selectTileFive);
document.getElementById("f15").addEventListener("click", selectTileSix);
document.getElementById("a16").addEventListener("click", selectTileOne);
document.getElementById("b16").addEventListener("click", selectTileTwo);
document.getElementById("c16").addEventListener("click", selectTileThree);
document.getElementById("d16").addEventListener("click", selectTileFour);
document.getElementById("e16").addEventListener("click", selectTileFive);
document.getElementById("f16").addEventListener("click", selectTileSix);
document.getElementById("a17").addEventListener("click", selectTileOne);
document.getElementById("b17").addEventListener("click", selectTileTwo);
document.getElementById("c17").addEventListener("click", selectTileThree);
document.getElementById("d17").addEventListener("click", selectTileFour);
document.getElementById("e17").addEventListener("click", selectTileFive);
document.getElementById("f17").addEventListener("click", selectTileSix);
document.getElementById("a18").addEventListener("click", selectTileOne);
document.getElementById("b18").addEventListener("click", selectTileTwo);
document.getElementById("c18").addEventListener("click", selectTileThree);
document.getElementById("d18").addEventListener("click", selectTileFour);
document.getElementById("e18").addEventListener("click", selectTileFive);
document.getElementById("f18").addEventListener("click", selectTileSix);
document.getElementById("a19").addEventListener("click", selectTileOne);
document.getElementById("b19").addEventListener("click", selectTileTwo);
document.getElementById("c19").addEventListener("click", selectTileThree);
document.getElementById("d19").addEventListener("click", selectTileFour);
document.getElementById("e19").addEventListener("click", selectTileFive);
document.getElementById("f19").addEventListener("click", selectTileSix);
document.getElementById("a20").addEventListener("click", selectTileOne);
document.getElementById("b20").addEventListener("click", selectTileTwo);
document.getElementById("c20").addEventListener("click", selectTileThree);
document.getElementById("d20").addEventListener("click", selectTileFour);
document.getElementById("e20").addEventListener("click", selectTileFive);
document.getElementById("f20").addEventListener("click", selectTileSix);
document.getElementById("a21").addEventListener("click", selectTileOne);
document.getElementById("b21").addEventListener("click", selectTileTwo);
document.getElementById("c21").addEventListener("click", selectTileThree);
document.getElementById("d21").addEventListener("click", selectTileFour);
document.getElementById("e21").addEventListener("click", selectTileFive);
document.getElementById("f21").addEventListener("click", selectTileSix);
document.getElementById("a22").addEventListener("click", selectTileOne);
document.getElementById("b22").addEventListener("click", selectTileTwo);
document.getElementById("c22").addEventListener("click", selectTileThree);
document.getElementById("d22").addEventListener("click", selectTileFour);
document.getElementById("e22").addEventListener("click", selectTileFive);
document.getElementById("f22").addEventListener("click", selectTileSix);
document.getElementById("a23").addEventListener("click", selectTileOne);
document.getElementById("b23").addEventListener("click", selectTileTwo);
document.getElementById("c23").addEventListener("click", selectTileThree);
document.getElementById("d23").addEventListener("click", selectTileFour);
document.getElementById("e23").addEventListener("click", selectTileFive);
document.getElementById("f23").addEventListener("click", selectTileSix);
document.getElementById("a40").addEventListener("click", selectTileOne);
document.getElementById("b40").addEventListener("click", selectTileTwo);
document.getElementById("c40").addEventListener("click", selectTileThree);
document.getElementById("d40").addEventListener("click", selectTileFour);
document.getElementById("e40").addEventListener("click", selectTileFive);
document.getElementById("f40").addEventListener("click", selectTileSix);
document.getElementById("a25").addEventListener("click", selectTileOne);
document.getElementById("b25").addEventListener("click", selectTileTwo);
document.getElementById("c25").addEventListener("click", selectTileThree);
document.getElementById("d25").addEventListener("click", selectTileFour);
document.getElementById("e25").addEventListener("click", selectTileFive);
document.getElementById("f25").addEventListener("click", selectTileSix);
document.getElementById("a26").addEventListener("click", selectTileOne);
document.getElementById("b26").addEventListener("click", selectTileTwo);
document.getElementById("c26").addEventListener("click", selectTileThree);
document.getElementById("d26").addEventListener("click", selectTileFour);
document.getElementById("e26").addEventListener("click", selectTileFive);
document.getElementById("f26").addEventListener("click", selectTileSix);
document.getElementById("a27").addEventListener("click", selectTileOne);
document.getElementById("b27").addEventListener("click", selectTileThree);
document.getElementById("c27").addEventListener("click", selectTileTwo);
document.getElementById("d27").addEventListener("click", selectTileFive);
document.getElementById("e27").addEventListener("click", selectTileFour);
document.getElementById("f27").addEventListener("click", selectTileSix);
document.getElementById("a28").addEventListener("click", selectTileOne);
document.getElementById("b28").addEventListener("click", selectTileTwo);
document.getElementById("c28").addEventListener("click", selectTileThree);
document.getElementById("d28").addEventListener("click", selectTileFive);
document.getElementById("e28").addEventListener("click", selectTileTwo);
document.getElementById("f28").addEventListener("click", selectTileSix);
document.getElementById("a29").addEventListener("click", selectTileOne);
document.getElementById("b29").addEventListener("click", selectTileTwo);
document.getElementById("c29").addEventListener("click", selectTileThree);
document.getElementById("d29").addEventListener("click", selectTileFour);
document.getElementById("e29").addEventListener("click", selectTileFive);
document.getElementById("f29").addEventListener("click", selectTileSix);
document.getElementById("a30").addEventListener("click", selectTileOne);
document.getElementById("b30").addEventListener("click", selectTileTwo);
document.getElementById("c30").addEventListener("click", selectTileThree);
document.getElementById("d30").addEventListener("click", selectTileFour);
document.getElementById("e30").addEventListener("click", selectTileFive);
document.getElementById("f30").addEventListener("click", selectTileSix);
document.getElementById("a31").addEventListener("click", selectTileOne);
document.getElementById("b31").addEventListener("click", selectTileTwo);
document.getElementById("c31").addEventListener("click", selectTileThree);
document.getElementById("d31").addEventListener("click", selectTileFour);
document.getElementById("e31").addEventListener("click", selectTileFive);
document.getElementById("f31").addEventListener("click", selectTileSix);
document.getElementById("a32").addEventListener("click", selectTileOne);
document.getElementById("b32").addEventListener("click", selectTileTwo);
document.getElementById("c32").addEventListener("click", selectTileThree);
document.getElementById("d32").addEventListener("click", selectTileFour);
document.getElementById("e32").addEventListener("click", selectTileFive);
document.getElementById("f32").addEventListener("click", selectTileSix);
document.getElementById("a33").addEventListener("click", selectTileOne);
document.getElementById("b33").addEventListener("click", selectTileTwo);
document.getElementById("c33").addEventListener("click", selectTileThree);
document.getElementById("d33").addEventListener("click", selectTileFour);
document.getElementById("e33").addEventListener("click", selectTileFive);
document.getElementById("f33").addEventListener("click", selectTileSix);
document.getElementById("a34").addEventListener("click", selectTileOne);
document.getElementById("b34").addEventListener("click", selectTileTwo);
document.getElementById("c34").addEventListener("click", selectTileThree);
document.getElementById("d34").addEventListener("click", selectTileTlFive);
document.getElementById("e34").addEventListener("click", selectTileFive);
document.getElementById("f34").addEventListener("click", selectTileSix);
document.getElementById("a35").addEventListener("click", selectTileOne);
document.getElementById("b35").addEventListener("click", selectTileTwo);
document.getElementById("c35").addEventListener("click", selectTileThree);
document.getElementById("d35").addEventListener("click", selectTileFour);
document.getElementById("e35").addEventListener("click", selectTileFive);
document.getElementById("f35").addEventListener("click", selectTileSix);
document.getElementById("a36").addEventListener("click", selectTileOne);
document.getElementById("b36").addEventListener("click", selectTileTwo);
document.getElementById("c36").addEventListener("click", selectTileThree);
document.getElementById("d36").addEventListener("click", selectTileFour);
document.getElementById("e34").addEventListener("click", selectTileFive);
document.getElementById("f34").addEventListener("click", selectTileSix);
document.getElementById("a35").addEventListener("click", selectTileOne);
document.getElementById("b35").addEventListener("click", selectTileTwo);
document.getElementById("c35").addEventListener("click", selectTileThree);
document.getElementById("d35").addEventListener("click", selectTileFour);
document.getElementById("e35").addEventListener("click", selectTileFive);
document.getElementById("f35").addEventListener("click", selectTileSix);
