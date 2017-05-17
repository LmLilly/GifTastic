var myArray = ["cars", "animals"];
for(var i = 0; i < myArray.length; i++) {
	var gifDiv = $("<button>").text(myArray[i]);
	gifDiv.attr("data-topic",myArray[i]);
	$("#imageButton").append(gifDiv);
}

$("button").on("click", function() {
	var topic = $(this).attr("data-topic");
	var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
        topic + "&api_key=dc6zaTOxFJmzC&limit=10";

  	$.ajax({
  	url: queryURL,
  	method: "GET"
}).done(function(response){
	console.log(response);
})
})