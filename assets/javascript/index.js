var myArray = ["cars", "animals"];
for(var i = 0; i < myArray.length; i++) {
	var gifDiv = $("<button>").text(myArray[i]);
	gifDiv.attr("data-topic",myArray[i]);
	$("#imageButton").append(gifDiv);
}

$("#imageButton").on("click","button", function() {
	var topic = $(this).attr("data-topic");
	var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
        topic + "&api_key=dc6zaTOxFJmzC&limit=10";
	$("#gifImage").empty();

  	$.ajax({
	  	url: queryURL,
	  	method: "GET"
	})
	.done(function(response){
		console.log(response);

		var results = response.data

//image.attr("data-topic"),myArray[i];
		
		for (var i = 0; i < results.length; i++) {
			var imageUrl = response.data[i].images.original_still.url;
			var url = results[i].images.downsized.url
			var image = $("<img>").attr("src", imageUrl);
			image.attr("data-pause", imageUrl);
			image.attr("data-animate", url);
			image.attr("data-state", "pause");
			$("#gifImage").append(image);
      	}
    })
})

$("#gifImage").on("click", "img", function() {
  
 	var imageSource = $(this).attr("src");
 	console.log(imageSource);

    var state = $(this).attr("data-state");

    if (state === "pause") {
    	var newUrl = $(this).attr("data-animate");
    	$(this).attr("src", newUrl);
    	$(this).attr("data-state", "animate");
    }
    else {
    	var newUrl = $(this).attr("data-pause");
    	$(this).attr("src", newUrl);
    	$(this).attr("data-state", "pause");

    }
})

$("#addSubmit").on("click", function() {
	console.log("addSubmit");
	event.preventDefault()
	var addText = $("#addText").val();
	var gifDiv = $("<button>").text(addText);
	gifDiv.attr("data-topic",addText);
	$("#imageButton").append(gifDiv);




})
