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
 var finalData=storeDB.getAll();
finalData.onsuccess=function(event){
  console.log(event.target.result);
  display(event.target.result);
}
}

 function display(data)
 {
  var parent= document.querySelector(".parent");

  for(var i = 0; i < data.length; i++){
    var child=document.createElement("div");
    child.classList.add("child");
  var image=document.createElement("img");
image.src="images/chocho.svg";
image.alt="Profile not found";
var name1=document.createElement("h2");
name1.textContent=data[i].name;
var name2=document.createElement("p");
name2.textContent=data[i].role;
var name3=document.createElement("h2");
name3.textContent=data[i].mobile;
var link=document.createElement("a");
link.href="resume.html?id="+data[i].id;
link.textContent="view profile";

child.append(image);
child.append(name1);
child.append(name2);
child.append(name3);
child.append(link);
parent.append(child);
 }
}
