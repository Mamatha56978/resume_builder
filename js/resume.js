var param;
var paramValue;
var query;
query=window.location.search.substring(1).split("?");
for(i in query){
  param=query[i].split("=");
  paramValue=parseInt(param[1]);
}
var request;
var idb= window.indexedDB || window.mozIndexedDB || window.msIndexedDB || window.webkitIndexedDB;
if(!idb in window){
alert("Browser is not supported");
}
var open=idb.open("StoreData",1);
console.log("IndexedDB is created");
open.onupgradeneeded=function(event){
request=event.target.result;
var storeDB=request.createObjectStore("Formdata",{keyPath:"id",autoIncrement:true});
}
open.onerror=function(error)
{
console.log("Object store is not created",+error);
}
open.onsuccess=function(event) {
request=event.target.result;
var transaction=request.transaction("Formdata","readwrite");
var storeDB=transaction.objectStore("Formdata");
var info=storeDB.get(paramValue);
info.onsuccess=function(data){
console.log(data.target.result);
display(data.target.result);
}
}
var left=document.querySelector(".left");
var right=document.querySelector(".right");
var main=document.querySelector(".main");
function display(fff)
{
var img=document.createElement("img");
img.src="images/chocho.svg";
left.append(img);
var h2=document.createElement("h2");
h2.textContent=fff.name;
left.append(h2);
var h3=document.createElement("h3");
h3.textContent=fff.role;
left.append(h3);
var h31=document.createElement("h4");
h31.textContent=fff.email;
left.append(h31);
var h41=document.createElement("h3");
h41.textContent=fff.mobile;
left.append(h41);
main.append(left);


var af=document.createElement("h2");
af.textContent="Career Objective";
right.append(af);
var be=document.createElement("p");
be.textContent=fff.career;
right.append(be);

var a=document.createElement("h2");
a.textContent="Education_Details";
right.append(a);
var table=document.createElement("table");
table.border="3";
let row='';
row+="<tr>"+"<th>"+"college"+"</th>"+"<th>"+"degree"+"</th>"+
"<th>"+"branch"+"</th>"+"<th>"+"marks"+"</th>"+"</tr>";
for(i in fff.education){

row +="<tr>"+"<td>"+fff.education[i].clg+"</td>"+"<td>"+fff.education[i].degree+"</td>"+"<td>"+fff.education[i].branch+"</td>"
+"<td>"+fff.education[i].marks+"</td>"+"</tr>";
}
table.innerHTML=row;
right.append(table);






var by=document.createElement("h2");
by.textContent="Skills";
right.append(by);
var bd=document.createElement("h3");
bd.textContent=fff.skills;
right.append(bd);






main.append(right);
}
