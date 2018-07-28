"use strict"
$(document).ready(function(){
var resultList=$("#resultList");
resultList.text("Injected using jquery");
var togglebutton=$("#togglebutton");
togglebutton.on("click",function (){
	console.log("Button clicked");
	resultList.toggle(100);
	if(togglebutton.text()==="Hide"){
      togglebutton.text("Show");
	}
	else{
		togglebutton.text("Hide");
	}
});
var results=[];
function displayresults(results){

resultList.empty();
$.each(results,function(i,item){
	var newresult=$("<div class='result'>" +
	"<div class='title'>" + item.title + "</div>"+
	"<div>" + "Pass :" + item.pass + "</div>" +
	"<div>" + "Work :" + item.work + "</div>" +
	"</div>");
	resultList.append(newresult);
	newresult.hover(function(){
		$(this).css("background-color","red");
		$(this).css("border-color","white");
	},function(){
		$(this).css("background-color","transparent");
		$(this).css("border-color","blue");
	})
})
}
$("#loginform").on("submit",function(){
$.post("/api/login",{},function(data){
	console.log("success"+data);
	displayresults(data);
})
.fail(function(data){
	console.log("fail");
})
.done(function(){

})

	return false;
})
});

//var msg="hello";
//console.log(msg);
//var resultsDiv=document.getElementById("results");
//console.log("resultsDiv");
//resultsDiv.innerHTML="<p> message injected </p>";
