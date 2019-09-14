$(document).ready(function() {

$("#submitBtn").on("click", function(){
var theirName = $("#name1").val();
var theirEmail = $("#email").val();
var theirMessage = $("message").val();

console.log(theirName);
console.log(theirEmail);
console.log(theirMessage);
});
})