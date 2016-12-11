//Array of ten emotions to be used to make buttons
var topics = ['happy', 'sad', 'angry', 'scared', 'disgusted', 'sleepy', 'hyper', 'calm', 'confident', 'optimistic'];

//When a button is clicked, load ten static gifs with ratings, then add them all to gifsAndRatings
$(document).on("click", '.dynamicBtn', function() {
    var emotion = $(this).data("emotion");
    console.log(emotion);
	var queryURL = "http:api.giphy.com/v1/gifs/search?q=" + emotion + "&api_key=dc6zaTOxFJmzC&limit=10&rating=pg";

	// Perfoming an AJAX GET request to our queryURL
	$.ajax({
	    url: queryURL,
	    method: "GET"
	}) 

	.done(function(response) {

		// Logging the response to our request
		console.log(response);

		// Putting ten gifs and ratings in "gifsAndRatings"
		for (var i = 0; i<10; i++) {
			var imageUrl = response.data[i].images.original_still.url;
			var emotionImage = $("<img class='gif'>");

			emotionImage.attr("src", imageUrl);
			emotionImage.attr("alt", "emotion image");
			emotionImage.attr("width", "200px");
			emotionImage.attr("height", "200px");

			//Overwrite the HTML for the first GIF
			if (i === 0) {
				$("#gifsAndRatings").html(emotionImage);
				$("#gifsAndRatings").append("<-- Rating: " + response.data[i].rating);
			}
			//Append for the rest
			else {
				$("#gifsAndRatings").append(emotionImage);
				$("#gifsAndRatings").append("<-- Rating: " + response.data[i].rating);
			};
		};
	});
});

//When a gif is clicked...
	//if it's inactive, activate it
	//if it's active, deactivate it

//When a new word is typed into the form...
	//Append the word to the end of the array
	//loadButtons();

//Creates a button for each member in the topics[] array and adds them to buttonArea
function loadButtons() {
	for (var i = 0; i<topics.length; i++) {
		var gifTopic = topics[i];
		if (i===0) {
			$("#buttonArea").html('<button class="dynamicBtn" type="submit" data-emotion="' + gifTopic + '">' + gifTopic + '</button>');
		}
		else {
			$("#buttonArea").append('<button class="dynamicBtn" type="submit" data-emotion="' + gifTopic + '">' + gifTopic + '</button>');
		}
	}
}

function myFunction() {
    var x = document.getElementById("frm1");
    console.log(x);
}

$( document ).ready(function() {
    loadButtons();
});