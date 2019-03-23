function addData() {
  var request;
  var career=document.querySelector("#career").value;
  var name=document.querySelector("#name").value;
  var email=document.querySelector("#email").value;
  var role=document.querySelector("#role").value;
  var mobile=document.querySelector("#mobile").value;
  var clg1=document.querySelector("#clg1").value;
  var degree1=document.querySelector("#degree1").value;
  var branch1=document.querySelector("#branch1").value;
  var marks1=document.querySelector("#marks1").value;
  var clg2=document.querySelector("#clg2").value;
  var degree2=document.querySelector("#degree2").value;
  var branch2=document.querySelector("#branch2").value;
  var marks2=document.querySelector("#marks2").value;
  var clg3=document.querySelector("#clg3").value;
  var degree3=document.querySelector("#degree3").value;
  var marks3=document.querySelector("#marks3").value;
  var skills=document.querySelector("#skills").value;
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
storeDB.put(
  {
    career:career,
    name:name,
    email:email,
    role:role,
    mobile:mobile,
    education:[
  {

    clg:clg1,
    degree:degree1,
    branch:branch1,
    marks:marks1
  },
  {
    clg:clg2,
    degree:degree2,
    branch:branch2,
    marks:marks2
  },
  {  clg:clg3,
    degree:degree3,
    branch:"",
    marks:marks3
  }

],
  skills:skills
}
);
window.open("index.html");
}
}
